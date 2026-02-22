import { ApiExternalDealCardDto } from '../../../swagger/models/api-external-deal-card-dto';
import { ExternalDealCard } from '../../models/external-deal-card.interface';
import { externalDealCardDocumentAdapter } from './external-deal-card-document.adapter';
import { externalDealCardLotItemAdapter } from './external-deal-card-lot-item.adapter';
import { externalDealCardSupplierAdapter } from './external-deal-card-supplier.adapter';

export const externalDealCardAdapter = (source?: ApiExternalDealCardDto | null): ExternalDealCard => {
  return {
    currencyCode: source?.CurrencyCode,
    dealAgreemntDate: source?.DealAgreemntDate,
    dealNumber: source?.DealNumber,
    documents: source?.Documents?.map((item) => externalDealCardDocumentAdapter(item)),
    endExecutionDate: source?.EndExecutionDate,
    id: source?.Id,
    lotItems: source?.LotItems?.map((item) => externalDealCardLotItemAdapter(item)),
    price: source?.Price,
    signedOutOfEpReason: source?.SignedOutOfEpReason,
    startExecutionDate: source?.StartExecutionDate,
    subjectContract: source?.SubjectContract,
    supplier: source?.Supplier === null ? undefined : externalDealCardSupplierAdapter(source?.Supplier),
    tradeIdentificationCode: source?.TradeIdentificationCode,
  };
}
