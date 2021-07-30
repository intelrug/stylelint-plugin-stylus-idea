#!/usr/bin/env node

'use strict';

const cli = require('stylelint/lib/cli');

// to use V8's code cache to speed up instantiation time
require('v8-compile-cache');

process.argv.push('--custom-syntax');
process.argv.push('stylelint-plugin-stylus/custom-syntax');

cli(process.argv.slice(2));
