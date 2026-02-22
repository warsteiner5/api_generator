import { ApiStarSearchObjItemAltDto } from '../../../swagger/models/api-star-search-obj-item';
import { StarSearchObjItemAlt } from '../../models/star-search-obj-item-alt.interface';
import { purchaseObjectCardAltAdapter } from './purchase-object-card-alt.adapter';

export const starSearchObjItemAltAdapter = (source?: ApiStarSearchObjItemAltDto | null): StarSearchObjItemAlt => {
  return {
    additionalNumbers: source?.AdditionalNumbers,
    attachmentSearchResultInfo: source?.AttachmentSearchResultInfo,
    etpsId: source?.EtpsId,
    marketPlaceNumber: source?.MarketPlaceNumber,
    marketPlaceNumberInt: source?.MarketPlaceNumberInt,
    marketPlaceTenderId: source?.MarketPlaceTenderId,
    purchaseName: source?.PurchaseName,
    rawMaxPrice: source?.RawMaxPrice,
    region: source?.Region,
    regionId: source?.RegionId,
    tru: source?.TRU?.map((item) => purchaseObjectCardAltAdapter(item)),
  };
}
