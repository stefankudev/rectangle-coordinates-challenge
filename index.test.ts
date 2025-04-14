import { describe, test, expect } from 'vitest';
import { findOverlapCoordinates } from './index';
import type { RectangleCoordinates, Result } from './index';
type TestCaseArray = Array<{ rectangles: RectangleCoordinates, expected: Result }>;

const mainTestCase: TestCaseArray = [
    { rectangles: [[[-4, 1], [8, 6]], [[1, -1], [4, 7]]], expected: [[1, 1], [4, 6]] },
];

const testCasesWithOverlap: TestCaseArray = [
    { rectangles: [[[-4, 1], [8, 6]], [[1, -1], [4, 7]]], expected: [[1, 1], [4, 6]] },
    { rectangles: [[[0, 0], [5, 5]], [[3, 3], [7, 7]]], expected: [[3, 3], [5, 5]] },
    { rectangles: [[[2, 2], [6, 6]], [[4, 4], [8, 8]]], expected: [[4, 4], [6, 6]] },
    { rectangles: [[[1, 1], [10, 10]], [[5, 5], [15, 15]]], expected: [[5, 5], [10, 10]] },
    { rectangles: [[[-5, -5], [0, 0]], [[-3, -3], [3, 3]]], expected: [[-3, -3], [0, 0]] }
];

const testCasesNoOverlap: TestCaseArray = [
    { rectangles: [[[0, 0], [1, 1]], [[2, 2], [3, 3]]], expected: null },
    { rectangles: [[[1, 1], [2, 2]], [[2, 2], [3, 3]]], expected: null },
    { rectangles: [[[0, 0], [5, 5]], [[6, 6], [9, 9]]], expected: null },
    { rectangles: [[[1, 1], [4, 4]], [[5, 5], [7, 7]]], expected: null },
    { rectangles: [[[1, 1], [2, 5]], [[3, 1], [4, 4]]], expected: null },
    { rectangles: [[[0, 0], [1, 1]], [[1, 1], [1, 1]]], expected: null }
];

const testCases = [...mainTestCase,...testCasesWithOverlap,...testCasesNoOverlap];

describe('findOverlapCoordinates function', () => {
    test.each(testCases)(
        'given arguments of $rectangles returns $expected',
              ({ rectangles, expected }) => {
            expect(findOverlapCoordinates(rectangles)).toStrictEqual(expected);
        }
    );

})