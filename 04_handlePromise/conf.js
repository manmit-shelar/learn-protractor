require("babel-register")({
  presets: ["env"]
});

exports.config = {
  framework: 'jasmine',
  seleniumAddress : 'http://localhost:4444/wd/hub',
  //directConnect: true,
  specs: ['handlePromise.js']
}