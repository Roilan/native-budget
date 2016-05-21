import { colors } from './styles';

export function colorOfNumber(number) {
  const parsedNum = parseInt(number, 10);
  let color;

  if (parsedNum > 0) {
    color = colors.green;
  } else if (parsedNum < 0) {
    color = colors.red;
  } else if (parsedNum === 0) {
    color = colors.gray;
  }

  return color;
}

export function createListData(dataObj) {
  let dataBlob = {};

  Object.keys(dataObj).forEach((sectionName) => {
    dataBlob[sectionName] = dataObj[sectionName];
  });

  return dataBlob;
}

export const date = (() => {
  const today = new Date();
  const monthNames = {
    1: 'January',  2: 'Feburary',  3: 'March',  4: 'April',
    5: 'May',  6: 'June',  7: 'July',  8: 'August',
    9: 'September',  10: 'October',  11: 'November',  12: 'December'
  };
  const month = today.getMonth() + 1;

  return {
    day: today.getDate(),
    month,
    monthName: monthNames[month],
    year: today.getFullYear()
  }
})();

export const toDollarAmount = (str) => {
  return `$${str.toFixed(2)}`;
}