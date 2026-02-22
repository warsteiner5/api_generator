import { ApiMarketDealPositionDto } from '../../../swagger/models/api-market-deal-position-dto';
import { MarketDealPosition } from '../../models/market-deal-position.interface';
import { marketDealPositionCountryAdapter } from './market-deal-position-country.adapter';

export const marketDealPositionAdapter = (source?: ApiMarketDealPositionDto | null): MarketDealPosition => {
  return {
    dealPositionCountries: source?.DealPositionCountries?.map((item) => marketDealPositionCountryAdapter(item)),
    id: source?.Id,
    lotItemId: source?.LotItemId,
    name: source?.Name,
    okeiCode: source?.OkeiCode,
    okeiShortName: source?.OkeiShortName,
    okpd2Code: source?.Okpd2Code,
    okpd2Name: source?.Okpd2Name,
    positionNumber: source?.PositionNumber,
    price: source?.Price,
    quantity: source?.Quantity,
  };
}
