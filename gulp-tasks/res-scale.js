import Jimp from 'jimp';
import glob from 'glob-all';
import * as path from 'path';
import * as fs from 'fs-extra-promise-es6';
import scaleFnt from 'scale-fnt';

function genScaleFnt(file, dest, scale) {
  return new Promise((resolve, reject) => {
    scaleFnt(file, dest, scale, (err) => {
      if (err) return reject(err);
      resolve();
    });
  });
}

function scaleImg(file, dest, base, scale) {
  return new Promise((resolve, reject) => {
    Jimp.read(file)
      .then((img) => {
        const writeFile = path.join(dest, path.relative(base, file));
        fs.mkdirsSync(path.dirname(writeFile));
        img.scale(scale)
          .write(writeFile, (err) => {
            if (err) return reject(err);
            resolve();
          });
      })
      .catch((err) => reject(err));
  });
}

async function resScale(src, dest, scale) {
  await fs.remove(dest);
  // scale img
  const imgPatterns = src + '/**/+(img|tp)/**/*.+(jpg|png)';
  const files = glob.sync(imgPatterns);
  for (const file of files) {
    await scaleImg(file, dest, src, scale);
  }

  // scale fnt
  const fntPatterns = src + '/**/font/*.fnt';
  const fntFiles = glob.sync(fntPatterns);

  for (const file of fntFiles) {
    const fntDest = path.dirname(path.join(dest, path.relative(src, file)));
    await genScaleFnt(file, fntDest, scale);
  }
}

export default resScale;
