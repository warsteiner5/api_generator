import { ApiTransactionTypeAltDto } from '../../../swagger/models/api-transaction-type';
import { TransactionTypeAlt } from '../../models/transaction-type-alt.interface';

export function adaptTransactionTypeAltToUI(source?: ApiTransactionTypeAltDto | null): TransactionTypeAlt {
  return {
    id: source?.Id ?? 0,
    name: source?.Name ?? '',
  };
}
