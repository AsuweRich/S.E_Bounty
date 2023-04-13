function calculateNumber(type, a, b) {
    if (typeof (type) == String || type == 'SUM' || type == 'SUBTRACT' || type == 'DIVIDE') {
        if (type == 'SUM') {
            return Math.round(a) + Math.round(b);
        } else if (type == 'SUBTRACT') {
            return Math.round(a) - Math.round(b);
        } else if (type == 'DIVIDE') {
            if (Math.round(b) != 0) {
                return Math.round(a) / Math.round(b);
            }
            return 'Error';
        }
    } else {
        return 'Error'
    }
}

module.exports = calculateNumber;
