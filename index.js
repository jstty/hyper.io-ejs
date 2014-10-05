/*
 * EJS Template Middleware for Hyper.io
 */
'use strict';

var ejs = require('ejs');
var _   = require('lodash');

module.exports = Template_EJS;

function Template_EJS() {
    this.validFileExts = ['ejs'];
}

Template_EJS.prototype.getInfo = function() {
    return {
        name: 'ejs',
        type: 'template'
    };
};

Template_EJS.prototype.init = function() {
    // do nothing
};

Template_EJS.prototype.isValidData = function(templateData) {
    if( templateData &&
        _.isString(templateData) &&
        templateData.indexOf('<%') != -1) {
        return true;
    } else {
        return false
    }
};

Template_EJS.prototype.isValidFileExtension = function(fileExt) {
    return _.contains(this.validFileExts, fileExt);
};

Template_EJS.prototype.compile = function(templateData) {
    return ejs.compile(templateData);
};
