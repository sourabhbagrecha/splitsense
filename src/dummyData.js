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