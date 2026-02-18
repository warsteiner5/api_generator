import { TransactionTypeAlt } from '../../models/transaction-type-alt.interface';
import { ApiTransactionTypeAltDto } from '../../../swagger/models/api-transaction-type';

export function adaptApiTransactionTypeAltDto(source?: TransactionTypeAlt | null): ApiTransactionTypeAltDto {
  return {
    Id: source?.id,
    Name: source?.name,
  };
}
