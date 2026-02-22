import { Transaction } from '../../models/transaction.interface';
import { ApiTransactionDto } from '../../../swagger/models/api-transaction-dto';
import { apiFinDocumentDtoAdapter } from './api-fin-document-dto.adapter';
import { apiTransactionStateAltDtoAdapter } from './api-transaction-state.adapter';
import { apiTransactionTypeAltDtoAdapter } from './api-transaction-type.adapter';

export const apiTransactionDtoAdapter = (source?: Transaction | null): ApiTransactionDto => {
  return {
    AccountNumber: source?.accountNumber,
    ActionTime: source?.actionTime,
    Comment: source?.comment,
    CreationTime: source?.creationTime,
    DestintationAccountNumber: source?.destintationAccountNumber,
    Documents: source?.documents?.map((item) => apiFinDocumentDtoAdapter(item)),
    Id: source?.id,
    Service: source?.service,
    State: source?.state === null ? undefined : apiTransactionStateAltDtoAdapter(source?.state),
    Sum: source?.sum,
    TradeId: source?.tradeId,
    Type: source?.type === null ? undefined : apiTransactionTypeAltDtoAdapter(source?.type),
  };
}
