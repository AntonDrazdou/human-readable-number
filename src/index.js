module.exports = function toReadable (number) {

    let result = [];
    let one = [
        ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
        ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
        ['','','twenty','thirty','forty', 'fifty','sixty','seventy','eighty','ninety']
    ];
    
        

    if (number >= 100){

        result.push(one[0][parseInt(number/100)] + " hundred");
        number = (number % 100 > 0) ? number % 100 : number;
    }

    if (number >= 20) {

        result.push(one[2][parseInt(number / 10)]);
        result.push(one[0][parseInt(number % 10)]);
        number = number % 10;

    } else {

        if (number >= 10) {

            result.push(one[1][parseInt(number % 10)]);

        } else {

            if (number >= 1) {

                result.push(one[0][number]);

            } else result.push('zero');
        }
    }

    return result.join(" ").trim();

}

