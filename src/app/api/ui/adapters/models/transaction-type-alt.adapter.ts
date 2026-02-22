import { ApiTransactionTypeAltDto } from '../../../swagger/models/api-transaction-type';
import { TransactionTypeAlt } from '../../models/transaction-type-alt.interface';

export const transactionTypeAltAdapter = (source?: ApiTransactionTypeAltDto | null): TransactionTypeAlt => {
  return {
    id: source?.Id,
    name: source?.Name,
  };
}
