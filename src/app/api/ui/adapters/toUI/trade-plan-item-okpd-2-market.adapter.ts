import { ApiTradePlanItemOkpd2MarketDto } from '../../../swagger/models/api-trade-plan-item-okpd-2-market-dto';
import { TradePlanItemOkpd2Market } from '../../models/trade-plan-item-okpd-2-market.interface';

export function adaptTradePlanItemOkpd2MarketToUI(source?: ApiTradePlanItemOkpd2MarketDto | null): TradePlanItemOkpd2Market {
  return {
    id: source?.Id ?? 0,
    okpd2Code: source?.Okpd2Code ?? '',
    okpd2Name: source?.Okpd2Name ?? '',
  };
}
