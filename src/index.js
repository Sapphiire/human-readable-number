module.exports = function toReadable (number) {
  if(number == 0) return 'zero';
  const beforeDecades = [
      'zero',
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      'eight',
      'nine',
      'ten',
      'eleven',
      'twelve',
      'thirteen',
      'fourteen',
      'fithteen',
      'sixteen',
      'seventeen',
      'eighteen',
      'nineteen'
  ]
  const decades = [
      'ten',
      'twenty',
      'thirty',
      'forty',
      'fifty',
      'sixty',
      'seventy',
      'eighty',
      'ninety'
  ]

  let result = []
  const hundreds = Math.floor(number / 100)
  const decade = number % 100
  const digit = number % 10
  if(hundreds) result.push(beforeDecades[hundreds]).push('hundred');
  if(decade <= 19 && decade > 0) result.push(beforeDecades[decade]);
  else {
    result.push(decades[Math.floor(decade/10) - 1]);
    if(digit) result.push(beforeDecades[digit]);
  }
  
  return result.join(' ')
}