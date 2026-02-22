import { DealOutsideEShop } from '../../models/deal-outside-e-shop.interface';
import { ApiDealOutsideEShopDto } from '../../../swagger/models/api-deal-outside-e-shop-dto';
import { apiExternalDealDocumentDtoAdapter } from './api-external-deal-document-dto.adapter';
import { apiExternalDealItemDtoAdapter } from './api-external-deal-item-dto.adapter';
import { apiExternalDealSupplierDtoAdapter } from './api-external-deal-supplier-dto.adapter';

export const apiDealOutsideEShopDtoAdapter = (source?: DealOutsideEShop | null): ApiDealOutsideEShopDto => {
  return {
    DealAgreemntDate: source?.dealAgreemntDate,
    DealNumber: source?.dealNumber,
    Documents: source?.documents?.map((item) => apiExternalDealDocumentDtoAdapter(item)),
    EndExecutionDate: source?.endExecutionDate,
    Items: source?.items?.map((item) => apiExternalDealItemDtoAdapter(item)),
    Price: source?.price,
    SignedOutOfEpReason: source?.signedOutOfEpReason,
    StartExecutionDate: source?.startExecutionDate,
    SubjectContract: source?.subjectContract,
    Supplier: source?.supplier === null ? undefined : apiExternalDealSupplierDtoAdapter(source?.supplier),
    TradeNumber: source?.tradeNumber,
    TradePrice: source?.tradePrice,
  };
}
