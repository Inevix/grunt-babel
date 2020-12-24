'use strict';

const { existsSync } = require('fs');
const { join } = require('path');
const { cwd } = process;
const themes = require('../tools/files-router').get('themes');

const themeOptions = {
    options: {
        minified: true,
        retainLines: true,
        presets: ['@babel/preset-env']
    }
};

Object.keys(themes).map(key => {
    const { area, name } = themes[key];
    const themeDir = join(cwd(), 'app/design', area, name);
    const sourceDir = 'web/js/source';
    const distDir = 'web/js/';

    if (existsSync(themeDir)) {
        themeOptions[name] = {
            expand: true,
            cwd: themeDir,
            src: [`**/${sourceDir}/**/*.js`],
            rename: (dest, src) => `${themeDir}/${src.replace(sourceDir, distDir)}`
        };
    }
});

module.exports = themeOptions;
