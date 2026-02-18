import { TransactionShort } from '../../models/transaction-short.interface';
import { ApiTransactionShortDto } from '../../../swagger/models/api-transaction-short-dto';
import { adaptApiTransactionStateAltDto } from './api-transaction-state.adapter';
import { adaptApiTransactionTypeAltDto } from './api-transaction-type.adapter';

export function adaptApiTransactionShortDto(source?: TransactionShort | null): ApiTransactionShortDto {
  return {
    ActionTime: source?.actionTime,
    Comment: source?.comment,
    CreationTime: source?.creationTime,
    DestintationAccountNumber: source?.destintationAccountNumber,
    Direction: source?.direction,
    ExternalService: source?.externalService,
    Id: source?.id,
    State: adaptApiTransactionStateAltDto(source?.state),
    Sum: source?.sum,
    TradeId: source?.tradeId,
    Type: adaptApiTransactionTypeAltDto(source?.type),
  };
}
