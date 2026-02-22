import { ApiDealOutsideEShopDto } from '../../../swagger/models/api-deal-outside-e-shop-dto';
import { DealOutsideEShop } from '../../models/deal-outside-e-shop.interface';
import { externalDealDocumentAdapter } from './external-deal-document.adapter';
import { externalDealItemAdapter } from './external-deal-item.adapter';
import { externalDealSupplierAdapter } from './external-deal-supplier.adapter';

export const dealOutsideEShopAdapter = (source?: ApiDealOutsideEShopDto | null): DealOutsideEShop => {
  return {
    dealAgreemntDate: source?.DealAgreemntDate,
    dealNumber: source?.DealNumber,
    documents: source?.Documents?.map((item) => externalDealDocumentAdapter(item)),
    endExecutionDate: source?.EndExecutionDate,
    items: source?.Items?.map((item) => externalDealItemAdapter(item)),
    price: source?.Price,
    signedOutOfEpReason: source?.SignedOutOfEpReason,
    startExecutionDate: source?.StartExecutionDate,
    subjectContract: source?.SubjectContract,
    supplier: source?.Supplier === null ? undefined : externalDealSupplierAdapter(source?.Supplier),
    tradeNumber: source?.TradeNumber,
    tradePrice: source?.TradePrice,
  };
}
