import { ApiMarketOrganizationStatisticAltDto } from '../../../swagger/models/api-market-organization-statistic';
import { MarketOrganizationStatisticAlt } from '../../models/market-organization-statistic-alt.interface';

export const marketOrganizationStatisticAltAdapter = (source?: ApiMarketOrganizationStatisticAltDto | null): MarketOrganizationStatisticAlt => {
  return {
    dealCount: source?.DealCount,
    dealSum: source?.DealSum,
    offerCount: source?.OfferCount,
    registerDate: source?.RegisterDate,
    tradeCount: source?.TradeCount,
    unfinishedTradeCount: source?.UnfinishedTradeCount,
  };
}
