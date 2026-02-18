import { ApiTransactionStateAltDto } from '../../../swagger/models/api-transaction-state';
import { TransactionStateAlt } from '../../models/transaction-state-alt.interface';

export function adaptTransactionStateAltToUI(source?: ApiTransactionStateAltDto | null): TransactionStateAlt {
  return {
    id: source?.Id ?? 0,
    name: source?.Name ?? '',
  };
}
