import { DealOutsideEShop } from '../../models/deal-outside-e-shop.interface';
import { ApiDealOutsideEShopDto } from '../../../swagger/models/api-deal-outside-e-shop-dto';
import { adaptApiExternalDealDocumentDto } from './api-external-deal-document-dto.adapter';
import { adaptApiExternalDealItemDto } from './api-external-deal-item-dto.adapter';
import { adaptApiExternalDealSupplierDto } from './api-external-deal-supplier-dto.adapter';

export function adaptApiDealOutsideEShopDto(source?: DealOutsideEShop | null): ApiDealOutsideEShopDto {
  return {
    DealAgreemntDate: source?.dealAgreemntDate,
    DealNumber: source?.dealNumber,
    Documents: (source?.documents ?? []).map((item) => adaptApiExternalDealDocumentDto(item)),
    EndExecutionDate: source?.endExecutionDate,
    Items: (source?.items ?? []).map((item) => adaptApiExternalDealItemDto(item)),
    Price: source?.price,
    SignedOutOfEpReason: source?.signedOutOfEpReason,
    StartExecutionDate: source?.startExecutionDate,
    SubjectContract: source?.subjectContract,
    Supplier: adaptApiExternalDealSupplierDto(source?.supplier),
    TradeNumber: source?.tradeNumber,
    TradePrice: source?.tradePrice,
  };
}
