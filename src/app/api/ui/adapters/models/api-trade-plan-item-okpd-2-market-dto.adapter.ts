import { TradePlanItemOkpd2Market } from '../../models/trade-plan-item-okpd-2-market.interface';
import { ApiTradePlanItemOkpd2MarketDto } from '../../../swagger/models/api-trade-plan-item-okpd-2-market-dto';

export const apiTradePlanItemOkpd2MarketDtoAdapter = (source?: TradePlanItemOkpd2Market | null): ApiTradePlanItemOkpd2MarketDto => {
  return {
    Id: source?.id,
    Okpd2Code: source?.okpd2Code,
    Okpd2Name: source?.okpd2Name,
  };
}
