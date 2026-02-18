import { ApiDealOutsideEShopDto } from '../../../swagger/models/api-deal-outside-e-shop-dto';
import { DealOutsideEShop } from '../../models/deal-outside-e-shop.interface';
import { adaptExternalDealDocumentToUI } from './external-deal-document.adapter';
import { adaptExternalDealItemToUI } from './external-deal-item.adapter';
import { adaptExternalDealSupplierToUI } from './external-deal-supplier.adapter';

export function adaptDealOutsideEShopToUI(source?: ApiDealOutsideEShopDto | null): DealOutsideEShop {
  return {
    dealAgreemntDate: source?.DealAgreemntDate ?? '',
    dealNumber: source?.DealNumber ?? '',
    documents: (source?.Documents ?? []).map((item) => adaptExternalDealDocumentToUI(item)),
    endExecutionDate: source?.EndExecutionDate ?? '',
    items: (source?.Items ?? []).map((item) => adaptExternalDealItemToUI(item)),
    price: source?.Price ?? 0,
    signedOutOfEpReason: source?.SignedOutOfEpReason ?? '',
    startExecutionDate: source?.StartExecutionDate ?? '',
    subjectContract: source?.SubjectContract ?? '',
    supplier: adaptExternalDealSupplierToUI(source?.Supplier),
    tradeNumber: source?.TradeNumber ?? '',
    tradePrice: source?.TradePrice ?? 0,
  };
}
