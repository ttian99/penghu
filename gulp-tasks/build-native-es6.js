import cfg from './gulp-cfg.js';
import compile from './comm/cocos-compile-es6';
import * as fs from 'fs-extra-promise-es6';
import console from 'better-console';
import moment from 'moment';
import del from 'del';

async function renameApk(ch) {
  const src = `publish/android/${cfg.projectName}-release-signed.apk`;
  const buildTime = moment().format('MMDDHHmm');
  const dest = `publish/android/${cfg.projectName}_${ch}_${buildTime}.apk`;
  await fs.rename(src, dest);
}

//---------------- 测试用代码 ---------------------//
async function clearProj() {
  fs.removeSync("frameworks/runtime-src/proj.android/src");
  fs.removeSync("frameworks/runtime-src/proj.android/res");
  fs.removeSync("frameworks/runtime-src/proj.android/libs");
  fs.removeSync("frameworks/runtime-src/proj.android/libs-tmp");
  fs.removeSync("frameworks/runtime-src/proj.android/assets");
  fs.removeSync("frameworks/runtime-src/proj.android/assets-tmp");
  fs.removeSync("frameworks/runtime-src/proj.android/AndroidManifest.xml");
  fs.removeSync("frameworks/runtime-src/proj.android/.classpath");
  fs.removeSync("frameworks/runtime-src/proj.android/project.properties");

  fs.removeSync("frameworks/runtime-src/proj.android/sdk");
  fs.removeSync("frameworks/runtime-src/proj.android/alipay_lib");
  fs.removeSync("frameworks/runtime-src/proj.android/runtime");
}

async function copySdk(ch) {
  fs.mkdirsSync('frameworks/runtime-src/proj.android/assets');
  fs.mkdirsSync('frameworks/runtime-src/proj.android/libs');
  // 创建临时文件夹
  fs.mkdirsSync('frameworks/runtime-src/proj.android/assets-tmp');
  fs.mkdirsSync('frameworks/runtime-src/proj.android/libs-tmp');
  fs.copySync('frameworks/native-sdk/' + ch, 'frameworks/runtime-src/proj.android');
  fs.copySync('frameworks/runtime-src/proj.android/assets', 'frameworks/runtime-src/proj.android/assets-tmp');
  fs.copySync('frameworks/runtime-src/proj.android/libs', 'frameworks/runtime-src/proj.android/libs-tmp');
}

//------------------------------------------------//

export default async function buildNative(ch = 'blank') {
  try {
    // const [projJson, projBak] = ['project.json', 'project.json.bak'];
    // await fs.move(projJson, projBak, { clobber: true });

    del.sync('src/*.map');
    //--------- 测试用代码 ------------//
    await clearProj();
    await copySdk(ch);
    //-------------------------------//
    await compile('android');
    await renameApk(ch);

    // await fs.move(projBak, projJson, { clobber: true });
  } catch (e) {
    console.error(e);
  }
}
