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
            amount: -10.00,
            date: '2016-05-21T23:39:57.908Z'
          },
          {
            name: 'fool',
            amount: -30.00,
            date: '2016-05-21T23:39:57.908Z'
          },
        ]
      },
      {
        name: 'Internet',
        fundedAmount: 100.00,
        transactions: [
          {
            name: 'some fool',
            amount: -10.00,
            date: '2016-02-21T23:39:57.908Z'
          },
        ]
      },
      {
        name: 'Electricity',
        fundedAmount: 100.00,
        transactions: [
          {
            name: 'some fool',
            amount: -120.00,
            date: '2016-02-21T23:39:57.908Z'
          },
        ]
      },
      {
        name: 'Music',
        fundedAmount: 100.00,
        transactions: [
          {
            name: 'some fool',
            amount: -16.00,
            date: '2016-02-21T23:39:57.908Z'
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
            amount: -30.00,
            date: '2016-02-21T23:39:57.908Z'
          },
        ]
      },
      {
        name: 'Fuel',
        fundedAmount: 100.00,
        transactions: [
          {
            name: 'some fool',
            amount: -50.00,
            date: '2016-02-21T23:39:57.908Z'
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
            amount: -1.00,
            date: '2016-02-21T23:39:57.908Z'
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