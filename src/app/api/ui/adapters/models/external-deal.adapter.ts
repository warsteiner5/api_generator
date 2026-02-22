import { ApiExternalDealDto } from '../../../swagger/models/api-external-deal-dto';
import { ExternalDeal } from '../../models/external-deal.interface';
import { externalDealDocumentAdapter } from './external-deal-document.adapter';
import { externalDealInfoStateEnumAdapter } from '../enums/external-deal-info-state-enum.adapter';
import { externalDealItemAdapter } from './external-deal-item.adapter';
import { externalDealSupplierAdapter } from './external-deal-supplier.adapter';
import { signedOutOfEpReasonTypeEnumAdapter } from '../enums/signed-out-of-ep-reason-type-enum.adapter';

export const externalDealAdapter = (source?: ApiExternalDealDto | null): ExternalDeal => {
  return {
    dealAgreementDate: source?.DealAgreementDate,
    dealNumber: source?.DealNumber,
    documents: source?.Documents?.map((item) => externalDealDocumentAdapter(item)),
    endExecutionDate: source?.EndExecutionDate,
    id: source?.Id,
    isExecutionBeforeAgreementDate: source?.IsExecutionBeforeAgreementDate,
    items: source?.Items?.map((item) => externalDealItemAdapter(item)),
    price: source?.Price,
    priceWarningMessage: source?.PriceWarningMessage,
    signedOutOfEpReason: source?.SignedOutOfEpReason,
    signedOutOfEpReasonType: source?.SignedOutOfEpReasonType === null ? undefined : signedOutOfEpReasonTypeEnumAdapter(source?.SignedOutOfEpReasonType),
    startExecutionDate: source?.StartExecutionDate,
    state: source?.State === null ? undefined : externalDealInfoStateEnumAdapter(source?.State),
    subjectContract: source?.SubjectContract,
    supplier: source?.Supplier === null ? undefined : externalDealSupplierAdapter(source?.Supplier),
    tradeNumber: source?.TradeNumber,
    tradePrice: source?.TradePrice,
  };
}
