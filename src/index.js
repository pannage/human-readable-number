module.exports = function toReadable (number) {
  let single = {
    0:'zero',
    1:'one',
    2:'two',
    3:'three',
    4:'four',
    5:'five',
    6:'six',
    7:'seven',
    8:'eight',
    9:'nine',
  }

  let teen = {
    10:'ten',
    11:'eleven',
    12:'twelve',
    13:'thirteen',
    14:'fourteen',
    15:'fifteen',
    16:'sixteen',
    17:'seventeen',
    18:'eighteen',
    19:'nineteen',
  }

  let dozens = {
    20:'twenty',
    30:'thirty',
    40:'forty',
    50:'fifty',
    60:'sixty',
    70:'seventy',
    80:'eighty',
    90:'ninety',
  }
 let readableNum = [];
 let lastTwoDigits = number % 100;
 let lastOneDigit = number % 10;

  if (number<10) {
    readableNum.push(single[number])
  }

  else if (number>=10 && number <20) {
    readableNum.push(teen[number])
  }

  else if (number >=20 && number < 100) {
    if (lastOneDigit === 0) {
        readableNum.push(dozens[number]);
    } else {
        readableNum.push(dozens[number - lastOneDigit]);
        readableNum.push(single[lastOneDigit])
    }
  }

  else if (number>=100 && number<1000) {
      if (lastTwoDigits === 0 ) {
        readableNum.push(single[Math.floor(number/100)])
        readableNum.push('hundred')
      } else if (lastTwoDigits > 0 && lastTwoDigits < 10 ) {
        readableNum.push(single[Math.floor(number/100)])
        readableNum.push('hundred')
        readableNum.push(single[lastTwoDigits])
      } else if (lastTwoDigits >= 10 && lastTwoDigits < 20) {
        readableNum.push(single[Math.floor(number/100)])
        readableNum.push('hundred')
        readableNum.push(teen[lastTwoDigits])
      }  else if (lastTwoDigits > 20 && lastOneDigit != 0) {
        readableNum.push(single[Math.floor(number/100)])
        readableNum.push('hundred')
        readableNum.push(dozens[number - Math.floor(number/100)*100 -  lastOneDigit]);
        readableNum.push(single[lastOneDigit])
      } else {
        readableNum.push(single[Math.floor(number/100)])
        readableNum.push('hundred')
        readableNum.push(dozens[number - Math.floor(number/100)*100 -  lastOneDigit]);
      }
  }

  return readableNum.join(' ')

}

