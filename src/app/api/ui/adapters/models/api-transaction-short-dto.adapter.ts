import { TransactionShort } from '../../models/transaction-short.interface';
import { ApiTransactionShortDto } from '../../../swagger/models/api-transaction-short-dto';
import { apiTransactionStateAltDtoAdapter } from './api-transaction-state.adapter';
import { apiTransactionTypeAltDtoAdapter } from './api-transaction-type.adapter';

export const apiTransactionShortDtoAdapter = (source?: TransactionShort | null): ApiTransactionShortDto => {
  return {
    ActionTime: source?.actionTime,
    Comment: source?.comment,
    CreationTime: source?.creationTime,
    DestintationAccountNumber: source?.destintationAccountNumber,
    Direction: source?.direction,
    ExternalService: source?.externalService,
    Id: source?.id,
    State: source?.state === null ? undefined : apiTransactionStateAltDtoAdapter(source?.state),
    Sum: source?.sum,
    TradeId: source?.tradeId,
    Type: source?.type === null ? undefined : apiTransactionTypeAltDtoAdapter(source?.type),
  };
}
