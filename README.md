# Grunt babel for Magento 2
#### Forked from grunt-babel
<hr/>

### Origin package

https://github.com/babel/grunt-babel

## Installation

```sh
$ npm install --save-dev grunt-m2babel @babel/core @babel/preset-env
```
or
```sh
$ yarn add --dev grunt-m2babel @babel/core @babel/preset-env
```

## Prepare source files in a theme's folder

Add all source scripts to the folder in all modules `web/js/source` of a created theme.<br/>

#### Example
Source
```
app/design/frontend/{vendor}/{theme}/Magento_Theme/web/js/source/view/messages-mixin.js
```
Will be compiled to
```
app/design/frontend/{vendor}/{theme}/Magento_Theme/web/js/view/messages-mixin.js
```

The module `grunt-m2babel` will run for all themes which added to
```
dev/tools/grunt/configs/themes.js
```
or
```
dev/tools/grunt/configs/local-themes.js
```
if the file `local-themes.js` was added to a content of the file `grunt-config.json` in the root folder of a project.

## How to use

Now you can use ES6 syntax in any files in your theme which added to the folder
`web/js/source/**/*.js` in any modules of your theme.

#### Just run the command in a terminal to build scripts:
```
grunt m2babel
```

The config of the Grunt’s watcher has been rewritten and after adding changes for scripts in source folders of your theme scripts will be rebuilt.

#### Just run the watcher via the command in a terminal:
```
grunt watch
```

## Links

https://www.npmjs.com/package/grunt-babel
https://www.npmjs.com/package/grunt-m2babel
