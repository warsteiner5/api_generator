import { MarketTradePersonAlt } from '../../models/market-trade-person-alt.interface';
import { ApiMarketTradePersonAltDto } from '../../../swagger/models/api-market-trade-person';

export const apiMarketTradePersonAltDtoAdapter = (source?: MarketTradePersonAlt | null): ApiMarketTradePersonAltDto => {
  return {
    ContactEmail: source?.contactEmail,
    Id: source?.id,
    Name: source?.name,
    Phone: source?.phone,
    Position: source?.position,
  };
}
