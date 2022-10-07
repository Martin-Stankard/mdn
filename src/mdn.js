const getTestSet = require("./util/getTestSet");

function start() {
  getTestSet(1000, 1000).forEach((ele) => console.log(ele));
}

module.exports = { start };
