import { Router } from 'express';

import TransactionsRepository from '../repositories/TransactionsRepository';
import CreateTransactionService from '../services/CreateTransactionService';

const transactionRouter = Router();

// const transactionsRepository = new TransactionsRepository();

transactionRouter.get('/', (request, response) => {
  try {
    // TODO
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

transactionRouter.post('/', (request, response) => {
  try {
    const transaction = request.body;

    const transactionRepository = new TransactionsRepository();
    const createTransactionService = new CreateTransactionService(
      transactionRepository,
    );

    const newTransaction = createTransactionService.execute(transaction);

    return response.json(newTransaction);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default transactionRouter;
