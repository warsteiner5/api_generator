import { ApiAcceptedPriceListInfoDto } from '../../../swagger/models/api-accepted-price-list-info-dto';
import { AcceptedPriceListInfo } from '../../models/accepted-price-list-info.interface';
import { adaptMarketDealStateEnumToUI } from './market-deal-state-enum.adapter';
import { adaptPriceRegionDetailToUI } from './price-region-detail.adapter';
import { adaptVatRateStateEnumToUI } from './vat-rate-state-enum.adapter';

export function adaptAcceptedPriceListInfoToUI(source?: ApiAcceptedPriceListInfoDto | null): AcceptedPriceListInfo {
  return {
    customerName: source?.CustomerName ?? '',
    duringDays: source?.DuringDays ?? 0,
    id: source?.Id ?? 0,
    isFavorite: source?.IsFavorite ?? false,
    manufacturer: source?.Manufacturer ?? '',
    minQuantity: source?.MinQuantity ?? 0,
    name: source?.Name ?? '',
    offerTerms: source?.OfferTerms ?? '',
    organizerId: source?.OrganizerId ?? 0,
    participant: source?.Participant ?? '',
    pictureGuid: source?.PictureGuid ?? '',
    price: source?.Price ?? 0,
    priceRegionDetails: (source?.PriceRegionDetails ?? []).map((item) => adaptPriceRegionDetailToUI(item)),
    quantity: source?.Quantity ?? 0,
    shortOkeiName: source?.ShortOkeiName ?? '',
    state: adaptMarketDealStateEnumToUI(source?.State),
    stateString: source?.StateString ?? '',
    unitPrice: source?.UnitPrice ?? 0,
    vatRate: source?.VatRate ?? 0,
    vatRateState: adaptVatRateStateEnumToUI(source?.VatRateState),
  };
}
