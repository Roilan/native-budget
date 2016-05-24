import moment from 'moment'
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
  const today = moment();
  const month = moment().month() + 1;

  return {
    day: today.day(),
    month,
    monthNameShort: moment.monthsShort(month - 1),
    year: today.year()
  }
})();

export const toDollarAmount = (str) => {
  return `$${str.toFixed(2)}`;
}

export const fundedInCurrentMonth = (transactions) => {
  return transactions
          .filter(transaction => moment(transaction.date).month() + 1 === date.month)
          .map(transaction => transaction.amount)
          .reduce((prev, next) => prev + next);
}

export const getCurrentMonthTransactions = (transactionObj) => {
  let transactions = [];

  Object.keys(transactionObj).forEach(key => {
    transactionObj[key]
      .filter(transaction => moment(transaction.date).month() + 1 === date.month)
      .forEach(transaction => {
        transactions.push(transaction);
      });
  });

  return transactions;
}