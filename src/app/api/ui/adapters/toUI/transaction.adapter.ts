import { ApiTransactionDto } from '../../../swagger/models/api-transaction-dto';
import { Transaction } from '../../models/transaction.interface';
import { adaptFinDocumentToUI } from './fin-document.adapter';
import { adaptTransactionStateAltToUI } from './transaction-state-alt.adapter';
import { adaptTransactionTypeAltToUI } from './transaction-type-alt.adapter';

export function adaptTransactionToUI(source?: ApiTransactionDto | null): Transaction {
  return {
    accountNumber: source?.AccountNumber ?? '',
    actionTime: source?.ActionTime ?? '',
    comment: source?.Comment ?? '',
    creationTime: source?.CreationTime ?? '',
    destintationAccountNumber: source?.DestintationAccountNumber ?? '',
    documents: (source?.Documents ?? []).map((item) => adaptFinDocumentToUI(item)),
    id: source?.Id ?? 0,
    service: source?.Service ?? '',
    state: adaptTransactionStateAltToUI(source?.State),
    sum: source?.Sum ?? 0,
    tradeId: source?.TradeId ?? 0,
    type: adaptTransactionTypeAltToUI(source?.Type),
  };
}
