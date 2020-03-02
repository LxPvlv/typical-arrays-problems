exports.min = function min(array) {
    return Array.isArray(array)
        ? array.reduce((min, item) => (item < min ? item : min), 0)
        : 0;
};

exports.max = function max(array) {
    return Array.isArray(array)
        ? array.reduce((max, item) => (item > max ? item : max), 0)
        : 0;
};

exports.avg = function avg(array) {
    return Array.isArray(array) && array.length !== 0
        ? array.reduce((sum, item) => sum + item, 0) / array.length
        : 0;
};
