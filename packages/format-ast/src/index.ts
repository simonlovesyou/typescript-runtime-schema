import { is } from "ramda";
import * as ts from "typescript";
import getArbitraryNodeName from '@typescript-runtime-schema/get-arbitrary-node-name'
import { last, pipe, includes, both, complement, clone, test } from "ramda";

let lines: string[] = [];

const visitNodeArray = (
  nodeArray: ts.NodeArray<ts.Node>,
  currentDepth: number = 0
): boolean => {
  let nodeNumber = 0;
  nodeArray.forEach((node: ts.Node) => {
    lines.push(`${"  ".repeat(currentDepth)}${getArbitraryNodeName(node)}`);
    nodeNumber++;
    ts.forEachChild(
      node,
      (n) => visitNode(n, currentDepth + 1),
      (n) => visitNodeArray(n, currentDepth + 1)
    );
  });
  // if (pipe(last, both(includes("["), complement(includes("]"))))(lines)) {
  //   // lines[lines.length - 1] = lines[lines.length - 1] + "]";
  // } else if(  ) {
  //   // lines.push(`${"  ".repeat(currentDepth)}]`);
  // }
  return false;
};

const visitNode = (currentNode: ts.Node, currentDepth: number) => {
  let nodeNumber = 0;

  ts.forEachChild(currentNode as ts.Node, (node) => {
    lines.push(`${"  ".repeat(currentDepth)}${getArbitraryNodeName(node)}`);
    nodeNumber++;
    ts.forEachChild(
      node,
      (node) => visitNode(node, currentDepth + 1),
      (node) => visitNodeArray(node, currentDepth + 1)
    );
  });

  // if (pipe(last, complement(includes("]")))(lines)) {
  //   console.log(`Adding ] onto ${clone(lines[lines.length - 1])}`);
  //   lines[lines.length - 1] = lines[lines.length - 1] + "]";
  // } else {
  // }
  // lines.push(`${"  ".repeat(currentDepth)}]`)

  return false;
};

const formatAbstractSyntaxTree = (
  node: ts.Node,
  currentDepth: number = 0
): string => {
  const currentNode = getArbitraryNodeName(node);
  const sourceFile = 
  lines.push(currentNode);
  // Loop through the root AST nodes of the file
  visitNode(node, 1);
  const result = lines.join("\n");
  lines = [] as string[];
  return result;
};


export default formatAbstractSyntaxTree;
