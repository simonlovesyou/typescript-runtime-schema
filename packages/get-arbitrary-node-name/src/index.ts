import * as ts from 'typescript'

export function getArbitraryNodeName(node: ts.Node) {
  return ts.SyntaxKind[node.kind];
}

export default getArbitraryNodeName