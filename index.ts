export type CoordinatesArray = number[][];
export type RectangleCoordinates = [CoordinatesArray,CoordinatesArray]
export type Result = CoordinatesArray | null;

export const findOverlapCoordinates = (rectangles: RectangleCoordinates): Result => {
    const [rectangle1, rectangle2] = rectangles;
    const [[rect1_x1, rect1_y1], [rect1_x2, rect1_y2]] = rectangle1;
    const [[rect2_x1, rect2_y1], [rect2_x2, rect2_y2]] = rectangle2;

    const overlap_x1 = Math.max(rect1_x1, rect2_x1);
    const overlap_y1 = Math.max(rect1_y1, rect2_y1);
    const overlap_x2 = Math.min(rect1_x2, rect2_x2);
    const overlap_y2 = Math.min(rect1_y2, rect2_y2);

    const noOverlapOnAxisX = overlap_x1 >= overlap_x2;
    const noOverlapOnAxisY = overlap_y1 >= overlap_y2;

    if (noOverlapOnAxisX || noOverlapOnAxisY) {
        return null;
    }

    return [[overlap_x1, overlap_y1], [overlap_x2, overlap_y2]];
}