import cfg from '../gulp-cfg.js';
import _ from 'lodash';
import glob from 'glob-all';

export function getOneGroupTps(gName) {
  let tps = [];
  const group = cfg.resGroup[gName];

  _.keys(group.sub).forEach(subKey => {
    group.sub[subKey].tp.forEach(item => tps.push(item));
  });

  tps = _.uniq(tps);
  tps.map(val => `${cfg.resOrigin}/${gName}/tp/sub/${val}/`);

  tps.push(`${cfg.resOrigin}/${gName}/tp/!(sub)/`);
  return tps;
}

export function getOneGroupFullTypes(gName, fileType) {
  let tps = [];
  const group = cfg.resGroup[gName];

  _.keys(group.sub).forEach(subKey => {
    group.sub[subKey][fileType].forEach(item => tps.push(item));
  });

  tps = _.uniq(tps);
  tps.map(val => `${cfg.resOrigin}/${gName}/${fileType}/${val}`);
  tps.push(`${cfg.resOrigin}/${gName}/${fileType}/*.*`);

  return tps;
}

export function getOneTypeGlobs(fileType) {
  const globs = [];
  _.keys(cfg.resGroup).forEach(gName => {
    const types = getOneGroupFullTypes(gName, fileType);
    globs.push(...types);
  });
  return globs;
}

export function getSubGroupFiles(gName, subName, dir) {
  const subGroup = cfg.resGroup[gName].sub[subName];
  const types = ['img', 'spine', 'font', 'particle', 'audio'];
  const subFiles = {};
  types.forEach(fileType => {
    if (subGroup[fileType]) {
      const globs = subGroup[fileType].map(item => `${dir}/${gName}/${fileType}/${item}`);
      subFiles[fileType] = glob.sync(globs);
    }
  });

  if (subGroup.tp) {
    const globs = subGroup.tp.map(item => `${dir}/${gName}/tp/${item}/*.*`);
    subFiles.tp = glob.sync(globs);
  }
  return subFiles;
}
