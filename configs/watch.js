'use strict';

var combo  = require('./combo'),
    themes = require('../tools/files-router').get('themes'),
    _      = require('underscore');

var themeOptions = {};

_.each(themes, function (theme, name) {
    themeOptions[name] = {
        'files': [
            '<%= combo.autopath(\''+name+'\', path.pub) %>/**/*.less'
        ],
        'tasks': [
            'less:' + name
        ]
    };
    themeOptions[name + '_js'] = {
        'files': [
            `app/design/${theme.area}/${theme.name}/**/web/js/source/**/*.js`
        ],
        'tasks': [
            `babel`
        ]
    };
});

var watchOptions = {
    'setup': {
        'files': '<%= path.less.setup %>/**/*.less',
        'tasks': 'less:setup'
    },
    'updater': {
        'options': {
            livereload: true
        },
        'files': '<%= path.less.updater %>/**/*.less',
        'tasks': 'less:updater'
    },
    'reload': {
        'files': '<%= path.pub %>/**/*.css',
        'options': {
            livereload: true
        }
    }
};

module.exports = _.extend(themeOptions, watchOptions);
