const INITIAL_STATE = {
  categories: {
    'Monthly Bills': [
      {
        name: 'Rent',
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
        transactions: [
          {
            name: 'some fool',
            amount: 10.00
          },
        ]
      },
      {
        name: 'Electricity',
        transactions: [
          {
            name: 'some fool',
            amount: 10.00
          },
        ]
      },
      {
        name: 'Music',
        transactions: [
          {
            name: 'some fool',
            amount: 10.00
          },
        ]
      },
    ],
    'Everyday Expenses': [
      {
        name: 'Groceries',
        transactions: [
          {
            name: 'some fool',
            amount: -10.00
          },
        ]
      },
      {
        name: 'Fuel',
        transactions: [
          {
            name: 'some fool',
            amount: -100010.00
          },
        ]
      },
    ],
    'Other': [
      {
        name: 'Insurance',
        transactions: [
          {
            name: 'some fool',
            amount: 0.00
          },
        ]
      },
    ]
  },
  transactionView: {}
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}