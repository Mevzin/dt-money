import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from './services/api';


interface Transaction {
  id:number;
  title: string;
  amount:number;
  type: string;
  category: string;
  createdAt: string;
}

interface TransactionsProviderProps {
  children : ReactNode;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

interface TransactionsContextData {
  transactions: Transaction[];
  createTranscation: (transaction: TransactionInput) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider({children}: TransactionsProviderProps){
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, []);

  async function createTranscation(transactionInput: TransactionInput){
    const response = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date(),
    })

    const {transaction} = response.data;

    setTransactions([
      ...transactions, transaction
    ])
  }

  return(
    <TransactionsContext.Provider value={{transactions, createTranscation}}>
      {children}
    </TransactionsContext.Provider>
  )
}