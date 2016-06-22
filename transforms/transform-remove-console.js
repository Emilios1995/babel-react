function noOps () {
  return null
}
module.exports = function () {
  return {
    visitor: {
      CallExpression(path) {
        if (path.get("callee").matchesPattern("console", true)) {
          path.node.callee = noOps;
        }
      }
    }
  };
}
