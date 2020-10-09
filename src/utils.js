export const generateBoxArr = (boxes, color1, color2) => {
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

export const getContrast = hexcolor => {
	// If a leading # is provided, remove it
	if (hexcolor.slice(0, 1) === '#') {
		hexcolor = hexcolor.slice(1);
	}

	// If a three-character hexcode, make six-character
	if (hexcolor.length === 3) {
		hexcolor = hexcolor.split('').map(function (hex) {
			return hex + hex;
		}).join('');
	}

	// Convert to RGB value
	var r = parseInt(hexcolor.substr(0,2),16);
	var g = parseInt(hexcolor.substr(2,2),16);
	var b = parseInt(hexcolor.substr(4,2),16);

	// Get YIQ ratio
	var yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;

	// Check contrast
	return (yiq >= 128) ? 'black' : 'white';
};