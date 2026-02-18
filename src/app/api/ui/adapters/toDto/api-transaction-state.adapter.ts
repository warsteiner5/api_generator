import { TransactionStateAlt } from '../../models/transaction-state-alt.interface';
import { ApiTransactionStateAltDto } from '../../../swagger/models/api-transaction-state';

export function adaptApiTransactionStateAltDto(source?: TransactionStateAlt | null): ApiTransactionStateAltDto {
  return {
    Id: source?.id,
    Name: source?.name,
  };
}
