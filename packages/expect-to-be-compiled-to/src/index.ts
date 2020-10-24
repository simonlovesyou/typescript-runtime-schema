import * as ts from "typescript";
import {
  printReceived,
  printExpected,
  printDiffOrStringify,
} from "jest-matcher-utils";
import parseNodeToSourceText from '@typescript-runtime-schema/parse-node-to-source-text'
import formatAbstractSyntaxTree from '@typescript-runtime-schema/format-ast'

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Asserts that ${value} is a valid instance of `Date` whose value occurs after that of ${otherDate}.
       * @example
       * expect(new Date('2020-01-01')).toBeAfter(new Date('2019-12-31'));
       */
      toBeCompiledTo(string: string): R;
    }
    interface Expect {
      /**
       * Asserts that ${value} is a valid instance of `Date` whose value occurs after that of ${otherDate}.
       * @example
       * expect(new Date('2020-01-01')).toEqual(
       *   expect.toBeAfter(new Date('2019-12-31'))
       * );
       */
      toBeCompiledTo<T>(node: ts.Node): JestMatchers<T>;
    }
  }
}

const toBeCompiledTo = (received: ts.Node, expectedOutput: string) => ({
  message: () =>
    `expected AST ${printReceived(formatAbstractSyntaxTree(received))} to compile to ${printExpected(
      expectedOutput
    )} but it compiled to ${parseNodeToSourceText(
      received
    )}\n\n${printDiffOrStringify(
      expectedOutput,
      received,
      "expected",
      "received",
      false
    )}`,
  pass: parseNodeToSourceText(received) === expectedOutput,
});

expect.extend({ toBeCompiledTo });
