import { ApiTransactionShortDto } from '../../../swagger/models/api-transaction-short-dto';
import { TransactionShort } from '../../models/transaction-short.interface';
import { transactionStateAltAdapter } from './transaction-state-alt.adapter';
import { transactionTypeAltAdapter } from './transaction-type-alt.adapter';

export const transactionShortAdapter = (source?: ApiTransactionShortDto | null): TransactionShort => {
  return {
    actionTime: source?.ActionTime,
    comment: source?.Comment,
    creationTime: source?.CreationTime,
    destintationAccountNumber: source?.DestintationAccountNumber,
    direction: source?.Direction,
    externalService: source?.ExternalService,
    id: source?.Id,
    state: source?.State === null ? undefined : transactionStateAltAdapter(source?.State),
    sum: source?.Sum,
    tradeId: source?.TradeId,
    type: source?.Type === null ? undefined : transactionTypeAltAdapter(source?.Type),
  };
}
