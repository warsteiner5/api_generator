import { ExpiringTradesInfoForCustomerAlt } from '../../models/expiring-trades-info-for-customer-alt.interface';
import { ApiExpiringTradesInfoForCustomerAltDto } from '../../../swagger/models/api-expiring-trades-info-for-customer';

export const apiExpiringTradesInfoForCustomerAltDtoAdapter = (source?: ExpiringTradesInfoForCustomerAlt | null): ApiExpiringTradesInfoForCustomerAltDto => {
  return {
    CountOfExpiringTrades: source?.countOfExpiringTrades,
    DaysForNoticeBeforeArchive: source?.daysForNoticeBeforeArchive,
    TradeToArchiveDateFirst: source?.tradeToArchiveDateFirst,
  };
}
