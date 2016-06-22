var noOps = function() { return null }
module.exports = function (babel) {
  var t = babel.types;
  return {
    visitor: {
      CallExpression(path) {
        if (path.get("callee").matchesPattern("console", true)) {
          path.node.callee = noOps;
          // path.replaceWith(
          //   t.CallExpression(noOps, path.get("arguments"))
          // );
        }
      }
    }
  };
}
