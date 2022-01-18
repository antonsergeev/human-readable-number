module.exports = function toReadable (number) {
    
}

function toReadable (number) {
  const numbersBefore20 = new Map([
    ['1', 'one'],
    ['2', 'two'],
    ['3', 'three'],
    ['4', 'four'],
    ['5', 'five'],
    ['6', 'six'],
    ['7', 'seven'],
    ['8', 'eight'],
    ['9', 'nine'],
    ['10', 'ten'],
    ['11', 'eleven'],
    ['12', 'twelve'],
    ['13', 'thirteen'],
    ['14', 'fourteen'],
    ['15', 'fifteen'],
    ['16', 'sixteen'],
    ['17', 'seventeen'],
    ['18', 'eighteen'],
    ['19', 'nineteen'],
  ])
  const tens = new Map([
    ['2', 'twenty'],
    ['3', 'thirty'],
    ['4', 'forty'],
    ['5', 'fifty'],
    ['6', 'sixty'],
    ['7', 'seventy'],
    ['8', 'eighty'],
    ['9', 'ninety'],
  ])

  let numberString = number.toString();
  let resultArray = []
  
  if (numberString === '0') return 'zero';

  if (numberString.length === 3) {
    resultArray.push(`${numbersBefore20.get(numberString[0])} hundred`);
    numberString = numberString.slice(1);
  }

  if (numbersBefore20.has(Number(numberString).toString())) {
    resultArray.push(numbersBefore20.get(Number(numberString).toString()));
  } else {
    resultArray.push(tens.get(numberString[0]));
    if (numberString[1] !== '0') {
      resultArray.push(numbersBefore20.get(numberString[1]));
    }
  }

  return resultArray.join(' ');
}

for (let i = 0; i < 1000; i++) {
    console.log(`${i} = ${toReadable(i)}`)
}
