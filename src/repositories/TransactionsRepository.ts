import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface CreateTransactionDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    // TODO
    return this.transactions;
  }

  public getBalance(): Balance {
    // TODO
    const { income, outcome } = this.transactions.reduce(
      (accumulator: Balance, transaction: Transaction) => {
        switch (transaction.type) {
          case 'income':
            accumulator.income += transaction.value;
            break;
          case 'outcome':
            accumulator.outcome += transaction.value;
            break;
          default:
            break;
        }
        return accumulator;
      },
      {
        income: 0,
        outcome: 0,
        total: 0,
      },
    );
    /* const soma: Balance = { income: 0, outcome: 0, total: 0 };

    this.transactions.forEach(transaction => {
      if (transaction.type === 'income') {
        soma.income += 1;
        soma.total += transaction.value;
      } else {
        soma.outcome += 1;
        soma.total -= transaction.value;
      }
    });
    return soma; */
    const total = income - outcome;
    return { income, outcome, total };
  }

  public create({ title, value, type }: CreateTransactionDTO): Transaction {
    // TODO
    const transaction = new Transaction({ title, value, type });

    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
