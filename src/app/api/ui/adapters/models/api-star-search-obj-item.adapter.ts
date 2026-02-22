import { StarSearchObjItemAlt } from '../../models/star-search-obj-item-alt.interface';
import { ApiStarSearchObjItemAltDto } from '../../../swagger/models/api-star-search-obj-item';
import { apiPurchaseObjectCardAltDtoAdapter } from './api-purchase-object-card.adapter';

export const apiStarSearchObjItemAltDtoAdapter = (source?: StarSearchObjItemAlt | null): ApiStarSearchObjItemAltDto => {
  return {
    AdditionalNumbers: source?.additionalNumbers,
    AttachmentSearchResultInfo: source?.attachmentSearchResultInfo,
    EtpsId: source?.etpsId,
    MarketPlaceNumber: source?.marketPlaceNumber,
    MarketPlaceNumberInt: source?.marketPlaceNumberInt,
    MarketPlaceTenderId: source?.marketPlaceTenderId,
    PurchaseName: source?.purchaseName,
    RawMaxPrice: source?.rawMaxPrice,
    Region: source?.region,
    RegionId: source?.regionId,
    TRU: source?.tru?.map((item) => apiPurchaseObjectCardAltDtoAdapter(item)),
  };
}
