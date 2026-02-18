import { ApiExpiringTradesInfoForCustomerAltDto } from '../../../swagger/models/api-expiring-trades-info-for-customer';
import { ExpiringTradesInfoForCustomerAlt } from '../../models/expiring-trades-info-for-customer-alt.interface';

export function adaptExpiringTradesInfoForCustomerAltToUI(source?: ApiExpiringTradesInfoForCustomerAltDto | null): ExpiringTradesInfoForCustomerAlt {
  return {
    countOfExpiringTrades: source?.CountOfExpiringTrades ?? 0,
    daysForNoticeBeforeArchive: source?.DaysForNoticeBeforeArchive ?? 0,
    tradeToArchiveDateFirst: source?.TradeToArchiveDateFirst ?? '',
  };
}
