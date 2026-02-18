import { ApiMarketDealPositionDto } from '../../../swagger/models/api-market-deal-position-dto';
import { MarketDealPosition } from '../../models/market-deal-position.interface';
import { adaptMarketDealPositionCountryToUI } from './market-deal-position-country.adapter';

export function adaptMarketDealPositionToUI(source?: ApiMarketDealPositionDto | null): MarketDealPosition {
  return {
    dealPositionCountries: (source?.DealPositionCountries ?? []).map((item) => adaptMarketDealPositionCountryToUI(item)),
    id: source?.Id ?? 0,
    lotItemId: source?.LotItemId ?? 0,
    name: source?.Name ?? '',
    okeiCode: source?.OkeiCode ?? '',
    okeiShortName: source?.OkeiShortName ?? '',
    okpd2Code: source?.Okpd2Code ?? '',
    okpd2Name: source?.Okpd2Name ?? '',
    positionNumber: source?.PositionNumber ?? 0,
    price: source?.Price ?? 0,
    quantity: source?.Quantity ?? 0,
  };
}
