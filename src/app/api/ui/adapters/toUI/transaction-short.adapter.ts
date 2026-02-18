import { ApiTransactionShortDto } from '../../../swagger/models/api-transaction-short-dto';
import { TransactionShort } from '../../models/transaction-short.interface';
import { adaptTransactionStateAltToUI } from './transaction-state-alt.adapter';
import { adaptTransactionTypeAltToUI } from './transaction-type-alt.adapter';

export function adaptTransactionShortToUI(source?: ApiTransactionShortDto | null): TransactionShort {
  return {
    actionTime: source?.ActionTime ?? '',
    comment: source?.Comment ?? '',
    creationTime: source?.CreationTime ?? '',
    destintationAccountNumber: source?.DestintationAccountNumber ?? '',
    direction: source?.Direction ?? '',
    externalService: source?.ExternalService ?? '',
    id: source?.Id ?? 0,
    state: adaptTransactionStateAltToUI(source?.State),
    sum: source?.Sum ?? 0,
    tradeId: source?.TradeId ?? 0,
    type: adaptTransactionTypeAltToUI(source?.Type),
  };
}
