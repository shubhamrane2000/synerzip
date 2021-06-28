const occ = (string1) => {
    let str2 = string1.toLowerCase();
    let char1 = new Set(str2.split('')),
        result = new Map(),
        count = 0;
        let i;
    char1.forEach(occurance)
    function occurance(item) {
        for (i = 0; i < str2.length; i++) {
            if (item === str2[i]) {
                count++;
            }
        }
        result.set(item, count);
        count = 0;
    }
    return result;
}
console.log(occ("shubham rane"));