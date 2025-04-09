export type CoordinatesArray = number[][];
export type RectangleCoordinates = [CoordinatesArray,CoordinatesArray]

export const findOverlappingCoordinates = (rectangles: RectangleCoordinates): CoordinatesArray => {
    const [rectangle1, rectangle2] = rectangles;
    const [r1x, r1y] = rectangle1;
    const [r2x, r2y] = rectangle2;

    // TODO: What if there is no overlap?

    const result = [[r2x[0],r1x[1]],[r2y[0],r1y[1]]]
    return result;
}