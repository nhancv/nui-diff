const { imgDiff } = require('img-diff-js');
 
imgDiff({
  actualFilename: 'example/actual.png',
  expectedFilename: 'example/expected.png',
  diffFilename: 'example/diff.png',
}).then(result => console.log(result));