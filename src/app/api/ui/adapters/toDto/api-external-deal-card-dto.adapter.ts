import { ExternalDealCard } from '../../models/external-deal-card.interface';
import { ApiExternalDealCardDto } from '../../../swagger/models/api-external-deal-card-dto';
import { adaptApiExternalDealCardDocumentDto } from './api-external-deal-card-document-dto.adapter';
import { adaptApiExternalDealCardLotItemDto } from './api-external-deal-card-lot-item-dto.adapter';
import { adaptApiExternalDealCardSupplierDto } from './api-external-deal-card-supplier-dto.adapter';

export function adaptApiExternalDealCardDto(source?: ExternalDealCard | null): ApiExternalDealCardDto {
  return {
    CurrencyCode: source?.currencyCode,
    DealAgreemntDate: source?.dealAgreemntDate,
    DealNumber: source?.dealNumber,
    Documents: (source?.documents ?? []).map((item) => adaptApiExternalDealCardDocumentDto(item)),
    EndExecutionDate: source?.endExecutionDate,
    Id: source?.id,
    LotItems: (source?.lotItems ?? []).map((item) => adaptApiExternalDealCardLotItemDto(item)),
    Price: source?.price,
    SignedOutOfEpReason: source?.signedOutOfEpReason,
    StartExecutionDate: source?.startExecutionDate,
    SubjectContract: source?.subjectContract,
    Supplier: adaptApiExternalDealCardSupplierDto(source?.supplier),
    TradeIdentificationCode: source?.tradeIdentificationCode,
  };
}
