export const generateBoxArr = (boxes, color1, color2) => {
  console.log(boxes)
  const color1Arr = [toDec(color1.slice(1,3)), toDec(color1.slice(3,5)), toDec(color1.slice(5,7))];
  const color2Arr = [toDec(color2.slice(1,3)), toDec(color2.slice(3,5)), toDec(color2.slice(5,7))];
  const increments = color1Arr.map((color, i) => Math.round((color2Arr[i] - color1Arr[i]) / (boxes - 1)))

  return [...new Array(boxes)].map((_, i) => {
    if (i === boxes - 1) return color2;
    return '#' + color1Arr
      .map((color, j) => toHex(color + increments[j] * i))
      .join('')
  })
}

const toDec = c => parseInt(c, 16)
const toHex = c => {
  const hex = c.toString(16);
  if (hex.length === 1) return '0' + hex;
  return hex;
}