import { filePaths } from '../config/paths.js';

const criticalCSS = async (done) => {
  const { generate } = await import('critical');
  await generate({
    inline: true,
    base: filePaths.buildFolder,
    src: 'index.html',
    target: {
      html: 'index.html',
      css: 'css/critical.css',
    },
    width: 1300,
    height: 900,
    extract: false,
    penthouse: {
      timeout: 60000,
    },
  });
  done();
};

export { criticalCSS };
