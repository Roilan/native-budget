const INITIAL_STATE = {
  categories: {
    'Monthly Bills': [
      {
        name: 'Rent',
        amount: 10.00
      },
      {
        name: 'Internet',
        amount: -10.00
      },
      {
        name: 'Electricity',
        amount: 5.00
      },
      {
        name: 'Music',
        amount: 50.00
      },
    ],
    'Everyday Expenses': [
      {
        name: 'Groceries',
        amount: -200.00
      },
      {
        name: 'Fuel',
        amount: -1230.00
      },
    ],
    'Other': [
      {
        name: 'Insurance',
        amount: 0.00
      },
    ]
  }
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}