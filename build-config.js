let isWatchEnabled = false;
let compileForGhPages = false;
const ENV = process.env.NODE_ENV === 'gh' ? 'production' : process.env.NODE_ENV || 'development'; // eslint-disable-line no-process-env

const path = {
  src: __dirname + '/src',
  dist:  __dirname + '/dist'
};

if (process.argv[2] && process.argv[2] === '-w') {
    isWatchEnabled = true;
}

if (process.argv[3] && process.argv[3] === 'gh') {
    compileForGhPages = true;
}


if (compileForGhPages) {
  path.dist = __dirname + '/docs'
}

module.exports = {
    ENV: ENV,
    isWatchEnabled: isWatchEnabled,
    path: path
};
