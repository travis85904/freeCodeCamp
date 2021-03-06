function truncateString(str, num) {

    if (str.length > num) {
        var result = str.split("");
        if (num <= 3) {
            for (var i = (num + 1); i <= str.length; i++) {
                result[i] = "";
            }
            result[num] = "...";
        }
        if (num > 3) {
            for (var i = (num - 2); i < str.length; i++) {
                result[i] = "";
            }
            result[num - 3] = "...";
        }
        return result.join("");
    }
    return str;
}

document.write(truncateString("Absolutely Longer", 2));
