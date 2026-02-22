import { ExternalDealCard } from '../../models/external-deal-card.interface';
import { ApiExternalDealCardDto } from '../../../swagger/models/api-external-deal-card-dto';
import { apiExternalDealCardDocumentDtoAdapter } from './api-external-deal-card-document-dto.adapter';
import { apiExternalDealCardLotItemDtoAdapter } from './api-external-deal-card-lot-item-dto.adapter';
import { apiExternalDealCardSupplierDtoAdapter } from './api-external-deal-card-supplier-dto.adapter';

export const apiExternalDealCardDtoAdapter = (source?: ExternalDealCard | null): ApiExternalDealCardDto => {
  return {
    CurrencyCode: source?.currencyCode,
    DealAgreemntDate: source?.dealAgreemntDate,
    DealNumber: source?.dealNumber,
    Documents: source?.documents?.map((item) => apiExternalDealCardDocumentDtoAdapter(item)),
    EndExecutionDate: source?.endExecutionDate,
    Id: source?.id,
    LotItems: source?.lotItems?.map((item) => apiExternalDealCardLotItemDtoAdapter(item)),
    Price: source?.price,
    SignedOutOfEpReason: source?.signedOutOfEpReason,
    StartExecutionDate: source?.startExecutionDate,
    SubjectContract: source?.subjectContract,
    Supplier: source?.supplier === null ? undefined : apiExternalDealCardSupplierDtoAdapter(source?.supplier),
    TradeIdentificationCode: source?.tradeIdentificationCode,
  };
}
