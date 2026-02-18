import { TransactionStateAlt } from './transaction-state-alt.interface';
import { TransactionTypeAlt } from './transaction-type-alt.interface';

export interface TransactionShort {
  actionTime: string;
  comment: string;
  creationTime: string;
  destintationAccountNumber: string;
  direction: string;
  externalService: string;
  id: number;
  state: TransactionStateAlt;
  sum: number;
  tradeId: number;
  type: TransactionTypeAlt;
}
