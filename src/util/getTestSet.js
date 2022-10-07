const getTestSet = (m, n) => {
  const result = [];
  if (Number.isInteger(n) && Number.isInteger(m) && m > 0 && n > 0) {
    for (mmm = 1; mmm <= m; mmm++) {
      for (nnn = 1; nnn <= n; nnn++) {
        result.push(`${mmm}d${nnn}`);
      }
    }
  } else {
    console.log("trouble with inputs to getTestSet");
  }

  return result;
};

module.exports = getTestSet;
