var noOps = function() { return null }
module.exports = function (babel) {
  var t = babel.types;
  return {
    visitor: {
      CallExpression(path) {
        if (path.get("callee").matchesPattern("console", true)) {
          path.node.callee = noOps;
          path.replaceWith(
            t.callExpression(
              t.functionDeclaration(
                t.identifier('noOps'),
                [t.identifier('x')],
                t.blockStatement(
                  [t.returnStatement(t.identifier('x'))]
                  )
                ), path.get("arguments")
              )
            );
        }
      }
    }
  };
}
