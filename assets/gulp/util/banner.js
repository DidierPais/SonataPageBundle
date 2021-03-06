var header = require('gulp-header');
var pkg    = require('../../../package.json');
var sh     = require('shelljs');

var banner = [
    '/*',
    ' * This file is part of the Sonata Project package.',
    ' *',
    ' * (c) Thomas Rabaix <thomas.rabaix@sonata-project.org>',
    ' *',
    ' * For the full copyright and license information, please view the LICENSE',
    ' * file that was distributed with this source code.',
    ' */',
    ''].join('\n');

module.exports = function (addline) {
    return header(banner, {
        pkg:    pkg,
        date:   new Date(),
        commit: (sh.exec('git rev-parse HEAD', { silent: true }).output).replace("\n", '')
    });
};
