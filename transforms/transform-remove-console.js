
module.exports = function (babel) {
  var t = babel.types;
  return {
    visitor: {
      CallExpression(path) {
        if (path.get("callee").matchesPattern("console", true)) {
          path.node.callee = t.functionExpression(
                t.identifier('noOps'),
                [t.identifier('x')],
                t.blockStatement(
                  [t.returnStatement(t.identifier('x'))]
                  )
                )
          
          // path.replaceWith(
          //   t.callExpression(
          //     t.functionExpression(
          //       t.identifier('noOps'),
          //       [t.identifier('x')],
          //       t.blockStatement(
          //         [t.returnStatement(t.identifier('x'))]
          //         )
          //       ), path.get("arguments")
          //     )
          //   );
          
          // path.node.callee = template(`
          //   (function (target) {              
          //     return target;
          //   })
          // `)
        }
      }
    }
  };
}
