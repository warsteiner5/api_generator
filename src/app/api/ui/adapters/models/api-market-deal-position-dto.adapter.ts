import { MarketDealPosition } from '../../models/market-deal-position.interface';
import { ApiMarketDealPositionDto } from '../../../swagger/models/api-market-deal-position-dto';
import { apiMarketDealPositionCountryDtoAdapter } from './api-market-deal-position-country-dto.adapter';

export const apiMarketDealPositionDtoAdapter = (source?: MarketDealPosition | null): ApiMarketDealPositionDto => {
  return {
    DealPositionCountries: source?.dealPositionCountries?.map((item) => apiMarketDealPositionCountryDtoAdapter(item)),
    Id: source?.id,
    LotItemId: source?.lotItemId,
    Name: source?.name,
    OkeiCode: source?.okeiCode,
    OkeiShortName: source?.okeiShortName,
    Okpd2Code: source?.okpd2Code,
    Okpd2Name: source?.okpd2Name,
    PositionNumber: source?.positionNumber,
    Price: source?.price,
    Quantity: source?.quantity,
  };
}
