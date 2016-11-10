import cfg from './gulp-cfg';
import compile from './comm/cocos-compile-es6';
import * as fs from 'fs-extra-promise-es6';
import glob from 'glob-all';
import rewire from 'rewire';
import _ from 'lodash';

function getGroupFiles(resLoad, gName) {
  const fileSet = new Set();
  const types = ['img', 'tp', 'spine', 'particle', 'font', 'audio'];
  _.keys(resLoad).forEach(name => {
    if (name === gName || name.startsWith(gName + ':')) {
      types.forEach(fileType => {
        if (resLoad[name][fileType]) resLoad[name][fileType].map(x => fileSet.add(x));
      });
    }
  });
  return fileSet;
}

async function createGroupFile() {

  const pj = cfg.projObj;
  let jsArr = [...pj.jsList];
  const resEnginArr = glob.sync('res_engine/*.*');
  jsArr = jsArr.concat(resEnginArr);

  const lib = rewire('../' + cfg.resFilePath);
  const resLoad = lib.__get__('resLoad');
  const resGroup = lib.__get__('resGroup');

  const rst = {
    boot: {
      priority: 0,
      files: [...new Set(jsArr)],
    },
  };

  _.keys(resGroup).forEach((gName) => {
    if (resGroup[gName].priority <= 0) {
      rst.boot.files.push(...getGroupFiles(resLoad, gName));
    } else {
      rst[gName] = {
        priority: resGroup[gName].priority,
        files: [...getGroupFiles(resLoad, gName)],
      };
    }
  });

  await fs.writeFile(cfg.runGroupFile, JSON.stringify(rst, null, 2));
}

async function createRunProjFile() {
  const {project_type, debugMode, showFPS, frameRate, id, renderMode, engineDir, modules, jsList} = await fs.readJson('project.json.bak');
  const rst = {
    project_type,
    debugMode,
    showFPS,
    frameRate,
    id,
    renderMode,
    engineDir,
    modules,
    jsList: [...jsList],
  };
  console.log(rst);
  await fs.writeFile('project.json', JSON.stringify(rst, null, 2));
}

export default async function buildRuntime() {
  try {
    const [projJson, projBak] = ['project.json', 'project.json.bak'];
    await createGroupFile();
    await fs.move(projJson, projBak, { clobber: true });

    await createRunProjFile();
    await compile('runtime');
    await fs.move(projBak, projJson, { clobber: true });
  } catch (err) {
    console.error(err);
  }
}
