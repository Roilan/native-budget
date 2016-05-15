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