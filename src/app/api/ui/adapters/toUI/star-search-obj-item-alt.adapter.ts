import { ApiStarSearchObjItemAltDto } from '../../../swagger/models/api-star-search-obj-item';
import { StarSearchObjItemAlt } from '../../models/star-search-obj-item-alt.interface';
import { adaptPurchaseObjectCardAltToUI } from './purchase-object-card-alt.adapter';

export function adaptStarSearchObjItemAltToUI(source?: ApiStarSearchObjItemAltDto | null): StarSearchObjItemAlt {
  return {
    additionalNumbers: source?.AdditionalNumbers ?? [],
    attachmentSearchResultInfo: source?.AttachmentSearchResultInfo ?? '',
    etpsId: source?.EtpsId ?? 0,
    marketPlaceNumber: source?.MarketPlaceNumber ?? '',
    marketPlaceNumberInt: source?.MarketPlaceNumberInt ?? 0,
    marketPlaceTenderId: source?.MarketPlaceTenderId ?? 0,
    purchaseName: source?.PurchaseName ?? '',
    rawMaxPrice: source?.RawMaxPrice ?? 0,
    region: source?.Region ?? '',
    regionId: source?.RegionId ?? 0,
    tru: (source?.TRU ?? []).map((item) => adaptPurchaseObjectCardAltToUI(item)),
  };
}
