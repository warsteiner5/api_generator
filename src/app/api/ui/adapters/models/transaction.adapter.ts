import { ApiTransactionDto } from '../../../swagger/models/api-transaction-dto';
import { Transaction } from '../../models/transaction.interface';
import { finDocumentAdapter } from './fin-document.adapter';
import { transactionStateAltAdapter } from './transaction-state-alt.adapter';
import { transactionTypeAltAdapter } from './transaction-type-alt.adapter';

export const transactionAdapter = (source?: ApiTransactionDto | null): Transaction => {
  return {
    accountNumber: source?.AccountNumber,
    actionTime: source?.ActionTime,
    comment: source?.Comment,
    creationTime: source?.CreationTime,
    destintationAccountNumber: source?.DestintationAccountNumber,
    documents: source?.Documents?.map((item) => finDocumentAdapter(item)),
    id: source?.Id,
    service: source?.Service,
    state: source?.State === null ? undefined : transactionStateAltAdapter(source?.State),
    sum: source?.Sum,
    tradeId: source?.TradeId,
    type: source?.Type === null ? undefined : transactionTypeAltAdapter(source?.Type),
  };
}
