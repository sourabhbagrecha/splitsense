const expenseData = {
  id: '7675625672tbwybdhyu676287',
  title: "Milk",
  amount: 120,
  image: "https://milkman.com",
  category: "Groceries",
  currency: "INR",
  description: "Healthy",
  paidBy: [{ person: "Amay", amount: 30 }, { person: "Harit", amount: 30 }, { person: "Shubham", amount: 30 }, { person: "Prit", amount: 30 }],
  splitBy: [{ person: "Amay", amount: 30 }, { person: "Amay", amount: 30 }, { person: "Amay", amount: 30 }, { person: "Amay", amount: 30 }],
  createdBy: "Amay",
  belongsTo: "Flat"
};

export const expenseDataArray = Array(12).fill({...expenseData});

export const splitBetweenData = [
  { 
    id: '5bed12267',
    person: "Amay",
    enabled: false,
    percentage: 0,
    amount: 0,
    share: 0 
  },

  { 
    id: '5bed12256',
    person: "Harit",
    enabled: true,
    percentage: 0,
    amount: 0,
    share: 0 
  },

  { 
    id: '5bed12289',
    person: "Shubham",
    enabled: true,
    percentage: 0,
    amount: 0,
    share: 0 
  },

  { 
    id: '5bed12201',
    person: "Prit",
    enabled: true,
    percentage: 0,
    amount: 0,
    share: 0 
  }];