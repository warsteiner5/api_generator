import { ApiAcceptedPriceListInfoDto } from '../../../swagger/models/api-accepted-price-list-info-dto';
import { AcceptedPriceListInfo } from '../../models/accepted-price-list-info.interface';
import { marketDealStateEnumAdapter } from '../enums/market-deal-state-enum.adapter';
import { priceRegionDetailAdapter } from './price-region-detail.adapter';
import { vatRateStateEnumAdapter } from '../enums/vat-rate-state-enum.adapter';

export const acceptedPriceListInfoAdapter = (source?: ApiAcceptedPriceListInfoDto | null): AcceptedPriceListInfo => {
  return {
    customerName: source?.CustomerName,
    duringDays: source?.DuringDays,
    id: source?.Id,
    isFavorite: source?.IsFavorite,
    manufacturer: source?.Manufacturer,
    minQuantity: source?.MinQuantity,
    name: source?.Name,
    offerTerms: source?.OfferTerms,
    organizerId: source?.OrganizerId,
    participant: source?.Participant,
    pictureGuid: source?.PictureGuid,
    price: source?.Price,
    priceRegionDetails: source?.PriceRegionDetails?.map((item) => priceRegionDetailAdapter(item)),
    quantity: source?.Quantity,
    shortOkeiName: source?.ShortOkeiName,
    state: source?.State === null ? undefined : marketDealStateEnumAdapter(source?.State),
    stateString: source?.StateString,
    unitPrice: source?.UnitPrice,
    vatRate: source?.VatRate,
    vatRateState: source?.VatRateState === null ? undefined : vatRateStateEnumAdapter(source?.VatRateState),
  };
}
