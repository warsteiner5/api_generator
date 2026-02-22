import { ApiEquivalentTableOfferDto } from '../../../swagger/models/api-equivalent-table-offer-dto';
import { EquivalentTableOffer } from '../../models/equivalent-table-offer.interface';
import { equivalentTablePriceRegionDetailAdapter } from './equivalent-table-price-region-detail.adapter';

export const equivalentTableOfferAdapter = (source?: ApiEquivalentTableOfferDto | null): EquivalentTableOffer => {
  return {
    id: source?.Id,
    minQuantity: source?.MinQuantity,
    offerTerms: source?.OfferTerms,
    okeiCode: source?.OkeiCode,
    pictureGuid: source?.PictureGuid,
    price: source?.Price,
    priceListId: source?.PriceListId,
    priceRegionDetails: source?.PriceRegionDetails?.map((item) => equivalentTablePriceRegionDetailAdapter(item)),
    productName: source?.ProductName,
    quantity: source?.Quantity,
    shortOkeiName: source?.ShortOkeiName,
  };
}
