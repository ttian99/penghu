import cfg from './gulp-cfg.js';
import compile from './comm/cocos-compile-es6';
import * as fs from 'fs-extra-promise-es6';
import console from 'better-console';
import moment from 'moment';
import del from 'del';
import gulp from 'gulp';
import zip from 'gulp-zip';

async function copyRes(ch) {
  fs.mkdirsSync('publish/qqgame/zip/resources');
  fs.mkdirsSync('publish/qqgame/zip/libs');

  fs.copySync('frameworks/runtime-src/proj.android/assets', 'publish/qqgame/zip/resources');
  fs.copySync('frameworks/runtime-src/proj.android/libs/armeabi/libchinachess.so', 'publish/qqgame/zip/libs/libchinachess.so');
  console.log('---------- copyRes over ------');
}

async function zipRes() {
  return gulp.src('publish/qqgame/zip/**/*')
		.pipe(zip('com.qqgame.zeusky.chinachess!20160001.zip'))
		.pipe(gulp.dest('publish/qqgame'));
}

// async function renameZip() {
//   const src = 'publish/qqgame/qqgame.zip';
//   const dest = 'publish/qqgame/com.qqgame.zeusky.chinachess!20160001.zip';
//   await fs.rename(src, dest);
//   console.debug('(: -- zipRename over -- :)');
// }

export default async function publishQQGame(ch = 'blank') {
  try {
    del.sync('publish/qqgame/zip/*');
    await copyRes();
    await zipRes();
  } catch (e) {
    console.error(e);
  }
}
