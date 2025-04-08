import {describe, test, expect} from 'vitest';
import {findOverlappingCoordinates} from './index'

describe('find overlapping coordinates function', () => {
    test("given arguments of [[-4,1],[8,6]] and [[1,-1],[4,7]] returns [[1,1],[4,6]]", () => {
        const yellowRectangle = [[-4,1],[8,6]];
        const blueRectangle = [[1,-1],[4,7]];

        const result = findOverlappingCoordinates([yellowRectangle,blueRectangle])
        expect(result).toStrictEqual([[1,1],[4,6]]);
    })
  })