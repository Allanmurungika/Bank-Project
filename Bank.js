
javascript
// Cash Book
let cashBook = [];

function addCashTransaction(date, description, amount) {
  if (!date || !description || !amount) {
    throw new Error("Please provide a valid date, description, and amount for the cash transaction.");
  }

  cashBook.push({ date, description, amount });
}

function updateCashTransaction(index, date, description, amount) {
  if (!date || !description || !amount) {
    throw new Error("Please provide a valid date, description, and amount for the cash transaction.");
  }

  if (index < 0 || index >= cashBook.length) {
    throw new Error("Invalid index for updating the cash transaction.");
  }

  cashBook[index] = { date, description, amount };
}

// Deposit and Withdrawal Book
let depositBook = [];
let withdrawalBook = [];

function addDeposit(date, description, amount) {
  if (!date || !description || !amount) {
    throw new Error("Please provide a valid date, description, and amount for the deposit.");
  }

  depositBook.push({ date, description, amount });
}

function addWithdrawal(date, description, amount) {
  if (!date || !description || !amount) {
    throw new Error("Please provide a valid date, description, and amount for the withdrawal.");
  }

  withdrawalBook.push({ date, description, amount });
}

function updateDeposit(index, date, description, amount) {
  if (!date || !description || !amount) {
    throw new Error("Please provide a valid date, description, and amount for the deposit.");
  }

  if (index < 0 || index >= depositBook.length) {
    throw new Error("Invalid index for updating the deposit.");
  }

  depositBook[index] = { date, description, amount };
}

function updateWithdrawal(index, date, description, amount) {
  if (!date || !description || !amount) {
    throw new Error("Please provide a valid date, description, and amount for the withdrawal.");
  }

  if (index < 0 || index >= withdrawalBook.length) {
    throw new Error("Invalid index for updating the withdrawal.");
  }

  withdrawalBook[index] = { date, description, amount };
}

// Balance Sheet
function calculateBalance() {
  let totalCash = cashBook.reduce((total, transaction) => total + transaction.amount, 0);
  let totalDeposits = depositBook.reduce((total, deposit) => total + deposit.amount, 0);
  let totalWithdrawals = withdrawalBook.reduce((total, withdrawal) => total + withdrawal.amount, 0);

  return totalCash + totalDeposits - totalWithdrawals;
}

// Example Usage
try {
  addCashTransaction("2023-11-01", "Initial deposit", 1000);
  addDeposit("2023-11-02", "Salary", 2000);
  addWithdrawal("2023-11-03", "Groceries", 500);

  updateDeposit(0, "2023-11-02", "Monthly salary", 2500);
  updateWithdrawal(0, "2023-11-03", "Groceries and household items", 700);

  console.log(cashBook);
  console.log(depositBook);
  console.log(withdrawalBook);

  console.log("Current Balance:", calculateBalance());
} catch (error) {
  console.error("An error occurred:", error.message);
}
