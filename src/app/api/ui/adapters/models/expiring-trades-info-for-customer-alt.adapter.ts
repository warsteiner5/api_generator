import { ApiExpiringTradesInfoForCustomerAltDto } from '../../../swagger/models/api-expiring-trades-info-for-customer';
import { ExpiringTradesInfoForCustomerAlt } from '../../models/expiring-trades-info-for-customer-alt.interface';

export const expiringTradesInfoForCustomerAltAdapter = (source?: ApiExpiringTradesInfoForCustomerAltDto | null): ExpiringTradesInfoForCustomerAlt => {
  return {
    countOfExpiringTrades: source?.CountOfExpiringTrades,
    daysForNoticeBeforeArchive: source?.DaysForNoticeBeforeArchive,
    tradeToArchiveDateFirst: source?.TradeToArchiveDateFirst,
  };
}
