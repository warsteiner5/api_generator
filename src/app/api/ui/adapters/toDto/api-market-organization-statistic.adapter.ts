import { MarketOrganizationStatisticAlt } from '../../models/market-organization-statistic-alt.interface';
import { ApiMarketOrganizationStatisticAltDto } from '../../../swagger/models/api-market-organization-statistic';

export function adaptApiMarketOrganizationStatisticAltDto(source?: MarketOrganizationStatisticAlt | null): ApiMarketOrganizationStatisticAltDto {
  return {
    DealCount: source?.dealCount,
    DealSum: source?.dealSum,
    OfferCount: source?.offerCount,
    RegisterDate: source?.registerDate,
    TradeCount: source?.tradeCount,
    UnfinishedTradeCount: source?.unfinishedTradeCount,
  };
}
