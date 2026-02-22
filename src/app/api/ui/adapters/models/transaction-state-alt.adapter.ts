import { ApiTransactionStateAltDto } from '../../../swagger/models/api-transaction-state';
import { TransactionStateAlt } from '../../models/transaction-state-alt.interface';

export const transactionStateAltAdapter = (source?: ApiTransactionStateAltDto | null): TransactionStateAlt => {
  return {
    id: source?.Id,
    name: source?.Name,
  };
}
