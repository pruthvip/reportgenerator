let isWatchEnabled = false;
let compileForGhPages = false;
let ENV = process.env.NODE_ENV || 'development'; // eslint-disable-line no-process-env

const path = {
  src: __dirname + '/src',
  dist:  __dirname + '/dist'
};

if (process.argv[2] && process.argv[2] === '-w') {
    isWatchEnabled = true;
}

if (process.argv[3] && process.argv[3] === 'gh') {
    compileForGhPages = true;
    ENV = 'production';
}


if (compileForGhPages) {
  path.dist = __dirname + '/'
}

module.exports = {
    ENV: ENV,
    isWatchEnabled: isWatchEnabled,
    path: path
};
