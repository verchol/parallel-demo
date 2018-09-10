const _  = require('lodash');
const ProgressBar = require('progress');


const progress = (_.toNumber(process.env.PROGRESS) || 80)%101
console.log(`the progress is ${progress}`);
const settings = process.env.PROGRESS_SETTINGS || ":bar"
var bar = new ProgressBar(settings, { total: progress });
var timer = setInterval(function () {
  bar.tick();
  if (bar.complete) {
    console.log('\ncomplete\n');
    clearInterval(timer);
  }
}, 100);