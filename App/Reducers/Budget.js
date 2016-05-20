import { SELECT_CATEGORY } from '../actions/Budget';

const INITIAL_STATE = {
  categories: {
    'Monthly Bills': [
      {
        name: 'Rent',
        fundedAmount: 100.00,
        transactions: [
          {
            name: 'some fool',
            amount: 10.00
          },
          {
            name: 'fool',
            amount: 30.00
          },
        ]
      },
      {
        name: 'Internet',
        fundedAmount: 100.00,
        transactions: [
          {
            name: 'some fool',
            amount: 10.00
          },
        ]
      },
      {
        name: 'Electricity',
        fundedAmount: 100.00,
        transactions: [
          {
            name: 'some fool',
            amount: 120.00
          },
        ]
      },
      {
        name: 'Music',
        fundedAmount: 100.00,
        transactions: [
          {
            name: 'some fool',
            amount: 16.00
          },
        ]
      },
    ],
    'Everyday Expenses': [
      {
        name: 'Groceries',
        fundedAmount: 100.00,
        transactions: [
          {
            name: 'some fool',
            amount: 30.00
          },
        ]
      },
      {
        name: 'Fuel',
        fundedAmount: 100.00,
        transactions: [
          {
            name: 'some fool',
            amount: 50.00
          },
        ]
      },
    ],
    'Other': [
      {
        name: 'Insurance',
        fundedAmount: 100.00,
        transactions: [
          {
            name: 'some fool',
            amount: 0.00
          },
        ]
      },
    ]
  },
  selectedCategory: {}
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SELECT_CATEGORY:
      return Object.assign({}, state, {
        selectedCategory: {
          ...action.payload
        }
      });

    default:
      return state;
  }
}