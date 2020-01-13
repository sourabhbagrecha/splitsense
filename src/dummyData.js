export const splitBetweenData = [
  { 
    id: '5bed12267',
    person: "Amay",
    enabled: false,
    percentage: 0,
    amount: 50,
    share: 0 
  },

  { 
    id: '5bed12256',
    person: "Harit",
    enabled: true,
    percentage: 0,
    amount: 50,
    share: 0 
  },

  { 
    id: '5bed12289',
    person: "Shubham",
    enabled: true,
    percentage: 0,
    amount: 50,
    share: 0 
  },

  { 
    id: '5bed12201',
    person: "Prit",
    enabled: true,
    percentage: 0,
    amount: 50,
    share: 0 
  }
];

export const paidByData = [
  { 
    id: '5bed12234', 
    person: "Amay",
    amount: 50, 
    enabled: true 
  },
  { 
    id: '5bed12245', 
    person: "Harit",
    amount: 50, 
    enabled: false 
  },
  { 
    id: '5bed12278', 
    person: "Shubham",
    amount: 50, 
    enabled: false 
  },
  { 
    id: '5bed12290', 
    person: "Prit",
    amount: 50, 
    enabled: false 
  },
];

export const expenseData = {
  id: '5eb1cdd5ab68cd9ffe87',
  title: "Milk",
  amount: 120,
  image: "https://milkman.com",
  category: "Groceries",
  currency: "INR",
  description: "Healthy",
  paidBy: [{ person: "Amay", amount: 30 }, { person: "Harit", amount: 30 }, { person: "Shubham", amount: 30 }, { person: "Prit", amount: 30 }],
  splitBetween: splitBetweenData,
  createdBy: "Amay",
  belongsTo: "Flat",
  splitMethod: "equally"
};

export const expenseDataArray = Array(12).fill({...expenseData});