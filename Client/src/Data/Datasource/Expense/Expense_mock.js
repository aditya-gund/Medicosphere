export function getExpensesForEvent(eventId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: Expense.filter((expense) => expense.eventId === eventId),
        status: 200,
      });
    }, 3000);
  });
}

export function getCategories()
{
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: Categories,
        status: 200
      });
    }, 3000)
  })
}

export function addExpense(eventId, description, price, quantity, category)
{
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: Expense.filter((expense) => expense.eventId === eventId),
        status: 201
      });
    }, 3000)
  })
}

export function updateExpense(expenseId, description, price, quantity, category)
{
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: Expense.filter((expense) => expense.id === expenseId),
        status: 200
      });
    }, 3000)
  })
}

export function deleteExpense(expenseId)
{
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: 204
      });
    }, 3000)
  })
}

const Categories = [
  {
    id: 1,
    name: "Venue"
  },
  {
    id: 2,
    name: "Catering"
  },
  {
    id: 3,
    name: "Transportation"
  },
  {
    id: 4,
    name: "Marketing"
  },
]

const Expense = [
  {
    id: 1,
    eventId: "Event1",
    quantity: null,
    price: 20000,
    description: "Booking charges",
    category: {
      id: 1,
      name: "Venue",
    },
  },
  {
    id: 2,
    eventId: "Event1",
    quantity: 1000,
    price: 300,
    description: "Lunch",
    category: {
      id: 2,
      name: "Catering",
    },
  },
  {
    id: 3,
    eventId: "Event1",
    quantity: 500,
    price: 50,
    description: "Transportation charges from hotel to venue",
    category: {
      id: 3,
      name: "Transportation",
    },
  },
  {
    id: 4,
    eventId: "Event1",
    quantity: 100,
    price: 30,
    description: "Poster Charges",
    category: {
      id: 4,
      name: "Marketing",
    },
  },
];
