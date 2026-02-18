import { ApiEquivalentTableOfferDto } from '../../../swagger/models/api-equivalent-table-offer-dto';
import { EquivalentTableOffer } from '../../models/equivalent-table-offer.interface';
import { adaptEquivalentTablePriceRegionDetailToUI } from './equivalent-table-price-region-detail.adapter';

export function adaptEquivalentTableOfferToUI(source?: ApiEquivalentTableOfferDto | null): EquivalentTableOffer {
  return {
    id: source?.Id ?? 0,
    minQuantity: source?.MinQuantity ?? 0,
    offerTerms: source?.OfferTerms ?? '',
    okeiCode: source?.OkeiCode ?? '',
    pictureGuid: source?.PictureGuid ?? '',
    price: source?.Price ?? 0,
    priceListId: source?.PriceListId ?? 0,
    priceRegionDetails: (source?.PriceRegionDetails ?? []).map((item) => adaptEquivalentTablePriceRegionDetailToUI(item)),
    productName: source?.ProductName ?? '',
    quantity: source?.Quantity ?? 0,
    shortOkeiName: source?.ShortOkeiName ?? '',
  };
}
