var myLibrary = function() {
    /**
     * Calculate the area of rectangle
     * @param width {number}
     * @param height {number}
     * @returns the area of the rectangle
     */
    function calculateRectangleArea(width, height) {
        return width * height;
    }

    /**
     * Calculate the area of rectangle
     * @param base {number}
     * @param height {number}
     * @returns the area of the triangle
     */
    function calculateTriangleArea(base, height) {
        return base * height / 2;
    }

    /**
     * Calculate the area of rectangle
     * @param radius {number}
     * @param radius {number}
     * @returns the area of the circle
     */
    function calculateCircleArea(radius) {
        return Math.PI * radius * radius;
    }

    return {
        calculateRectangleArea: calculateRectangleArea,
        calculateTriangleArea: calculateTriangleArea,
        calculateCircleArea: calculateCircleArea
    };

}();




