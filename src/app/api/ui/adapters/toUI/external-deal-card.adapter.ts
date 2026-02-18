import { ApiExternalDealCardDto } from '../../../swagger/models/api-external-deal-card-dto';
import { ExternalDealCard } from '../../models/external-deal-card.interface';
import { adaptExternalDealCardDocumentToUI } from './external-deal-card-document.adapter';
import { adaptExternalDealCardLotItemToUI } from './external-deal-card-lot-item.adapter';
import { adaptExternalDealCardSupplierToUI } from './external-deal-card-supplier.adapter';

export function adaptExternalDealCardToUI(source?: ApiExternalDealCardDto | null): ExternalDealCard {
  return {
    currencyCode: source?.CurrencyCode ?? '',
    dealAgreemntDate: source?.DealAgreemntDate ?? '',
    dealNumber: source?.DealNumber ?? '',
    documents: (source?.Documents ?? []).map((item) => adaptExternalDealCardDocumentToUI(item)),
    endExecutionDate: source?.EndExecutionDate ?? '',
    id: source?.Id ?? 0,
    lotItems: (source?.LotItems ?? []).map((item) => adaptExternalDealCardLotItemToUI(item)),
    price: source?.Price ?? 0,
    signedOutOfEpReason: source?.SignedOutOfEpReason ?? '',
    startExecutionDate: source?.StartExecutionDate ?? '',
    subjectContract: source?.SubjectContract ?? '',
    supplier: adaptExternalDealCardSupplierToUI(source?.Supplier),
    tradeIdentificationCode: source?.TradeIdentificationCode ?? '',
  };
}
