import { FinDocument } from './fin-document.interface';
import { TransactionStateAlt } from './transaction-state-alt.interface';
import { TransactionTypeAlt } from './transaction-type-alt.interface';

// @ts-ignore
export interface Transaction {
  accountNumber: string;
  actionTime: string;
  comment: string;
  creationTime: string;
  destintationAccountNumber: string;
  documents: FinDocument[];
  id: number;
  service: string;
  state: TransactionStateAlt;
  sum: number;
  tradeId: number;
  type: TransactionTypeAlt;
}
