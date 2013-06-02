var config = exports;

config['Browser'] = {
  environment: 'browser',
  sources: [
    'components/async-load/load.js', 
    'JSTemplate.js',
  ],
  tests: [
    'tests/*.js',
  ]
};

