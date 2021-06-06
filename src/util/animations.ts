interface Point {
    readonly x: number;
    readonly y: number;
}

const clamp = (num: number, begin: number, end: number) => Math.max(Math.min(num, Math.max(begin, end)), Math.min(begin, end));

/**
 * Provides a Point coordinate given a ratio of a linear interpolation.
 * Can be scaled by providing a beginning and ending interpolation fraction.
 * @param ratio stage of the animation. Must be [0, 1]
 * @param start point at which animation should start
 * @param begin stage in which animation should begin. Must be [0, 1]
 * @param end stage in which animation should end. Must be [0, 1]
 * @returns
 */
export function linearAnimation(ratio: number, start: Point, begin: number, end: number): Point {
    ratio = clamp(ratio, begin, end);
    console.log(ratio);
    return {x: (start.x/(end - begin))*(ratio - begin) - start.x, 
            y: (start.y/(end - begin))*(ratio - begin) - start.y}; // Same algorithm for x and y
}
