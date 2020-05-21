import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  // public all(): Transaction[] {
  //   // TODO
  // }

  // public getBalance(): Balance {
  //   // TODO
  // }

  public create(transaction: Transaction): Transaction {
    const newTransaction = new Transaction(transaction);
    this.transactions.push(newTransaction);

    return newTransaction;
  }
}

export default TransactionsRepository;
