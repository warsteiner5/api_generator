import { Transaction } from '../../models/transaction.interface';
import { ApiTransactionDto } from '../../../swagger/models/api-transaction-dto';
import { adaptApiFinDocumentDto } from './api-fin-document-dto.adapter';
import { adaptApiTransactionStateAltDto } from './api-transaction-state.adapter';
import { adaptApiTransactionTypeAltDto } from './api-transaction-type.adapter';

export function adaptApiTransactionDto(source?: Transaction | null): ApiTransactionDto {
  return {
    AccountNumber: source?.accountNumber,
    ActionTime: source?.actionTime,
    Comment: source?.comment,
    CreationTime: source?.creationTime,
    DestintationAccountNumber: source?.destintationAccountNumber,
    Documents: (source?.documents ?? []).map((item) => adaptApiFinDocumentDto(item)),
    Id: source?.id,
    Service: source?.service,
    State: adaptApiTransactionStateAltDto(source?.state),
    Sum: source?.sum,
    TradeId: source?.tradeId,
    Type: adaptApiTransactionTypeAltDto(source?.type),
  };
}
