import {describe, test, expect} from 'vitest';
import {findOverlapCoordinates} from './index'

describe('findOverlapCoordinates function', () => {
    test("given arguments of [[-4,1],[8,6]] and [[1,-1],[4,7]] returns [[1,1],[4,6]]", () => {
        const yellowRectangle = [[-4,1],[8,6]];
        const blueRectangle = [[1,-1],[4,7]];

        const result = findOverlapCoordinates([yellowRectangle,blueRectangle])
        expect(result).toStrictEqual([[1,1],[4,6]]);
    })

    const testCasesWithOverlap = [
        {arguments: [[[1,1],[1,1]],[[1,1],[1,1]]], expected: [[1,1],[1,1]]},
        {arguments: [[[1,1],[1,1]],[[1,1],[1,1]]], expected: [[1,1],[1,1]]},
        {arguments: [[[1,1],[1,1]],[[1,1],[1,1]]], expected: [[1,1],[1,1]]},
        {arguments: [[[1,1],[1,1]],[[1,1],[1,1]]], expected: [[1,1],[1,1]]},
        {arguments: [[[1,1],[1,1]],[[1,1],[1,1]]], expected: [[1,1],[1,1]]},
        {arguments: [[[1,1],[1,1]],[[1,1],[1,1]]], expected: [[1,1],[1,1]]},
        {arguments: [[[1,1],[1,1]],[[1,1],[1,1]]], expected: [[1,1],[1,1]]},
        {arguments: [[[1,1],[1,1]],[[1,1],[1,1]]], expected: [[1,1],[1,1]]},
        {arguments: [[[1,1],[1,1]],[[1,1],[1,1]]], expected: [[1,1],[1,1]]},
    ]

    const testCasesNoOverlap = [
        {arguments: [[[1,1],[1,1]],[[1,1],[1,1]]], expected: [[1,1],[1,1]]},
        {arguments: [[[1,1],[1,1]],[[1,1],[1,1]]], expected: [[1,1],[1,1]]},
        {arguments: [[[1,1],[1,1]],[[1,1],[1,1]]], expected: [[1,1],[1,1]]},
    ]
    
  })