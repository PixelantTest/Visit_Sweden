var path = require('path');
var HtmlReporter = require('nightwatch-html-reporter');
/* Same options as when using the built in nightwatch reporter option */
var reporter = new HtmlReporter({
  openBrowser: true,
  reportsDirectory: path.resolve(__dirname, '../browserstack_reports')
});

module.exports = {
  write : function(results, options, done) {
    reporter.fn(results, done);
  }
};
