import { ApiMarketOrganizationStatisticAltDto } from '../../../swagger/models/api-market-organization-statistic';
import { MarketOrganizationStatisticAlt } from '../../models/market-organization-statistic-alt.interface';

export function adaptMarketOrganizationStatisticAltToUI(source?: ApiMarketOrganizationStatisticAltDto | null): MarketOrganizationStatisticAlt {
  return {
    dealCount: source?.DealCount ?? 0,
    dealSum: source?.DealSum ?? 0,
    offerCount: source?.OfferCount ?? 0,
    registerDate: source?.RegisterDate ?? '',
    tradeCount: source?.TradeCount ?? 0,
    unfinishedTradeCount: source?.UnfinishedTradeCount ?? 0,
  };
}
