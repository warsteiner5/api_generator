import { ApiExternalDealDto } from '../../../swagger/models/api-external-deal-dto';
import { ExternalDeal } from '../../models/external-deal.interface';
import { adaptExternalDealDocumentToUI } from './external-deal-document.adapter';
import { adaptExternalDealInfoStateEnumToUI } from './external-deal-info-state-enum.adapter';
import { adaptExternalDealItemToUI } from './external-deal-item.adapter';
import { adaptExternalDealSupplierToUI } from './external-deal-supplier.adapter';
import { adaptSignedOutOfEpReasonTypeEnumToUI } from './signed-out-of-ep-reason-type-enum.adapter';

export function adaptExternalDealToUI(source?: ApiExternalDealDto | null): ExternalDeal {
  return {
    dealAgreementDate: source?.DealAgreementDate ?? '',
    dealNumber: source?.DealNumber ?? '',
    documents: (source?.Documents ?? []).map((item) => adaptExternalDealDocumentToUI(item)),
    endExecutionDate: source?.EndExecutionDate ?? '',
    id: source?.Id ?? 0,
    isExecutionBeforeAgreementDate: source?.IsExecutionBeforeAgreementDate ?? false,
    items: (source?.Items ?? []).map((item) => adaptExternalDealItemToUI(item)),
    price: source?.Price ?? 0,
    priceWarningMessage: source?.PriceWarningMessage ?? '',
    signedOutOfEpReason: source?.SignedOutOfEpReason ?? '',
    signedOutOfEpReasonType: adaptSignedOutOfEpReasonTypeEnumToUI(source?.SignedOutOfEpReasonType),
    startExecutionDate: source?.StartExecutionDate ?? '',
    state: adaptExternalDealInfoStateEnumToUI(source?.State),
    subjectContract: source?.SubjectContract ?? '',
    supplier: adaptExternalDealSupplierToUI(source?.Supplier),
    tradeNumber: source?.TradeNumber ?? '',
    tradePrice: source?.TradePrice ?? 0,
  };
}
