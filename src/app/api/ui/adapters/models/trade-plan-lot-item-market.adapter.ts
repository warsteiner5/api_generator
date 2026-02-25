import { ApiTradePlanLotItemMarketDto } from '../../../swagger/models/api-trade-plan-lot-item-market-dto';
import { TradePlanLotItemMarket } from '../../models/trade-plan-lot-item-market.interface';
import { baseContractDtoWithIdAndRowVersionOfIntegerAndIntegerAdapter } from './base-contract-dto-with-id-and-row-version-of-integer-and-integer.adapter';
import { tradePlanItemOkpd2MarketAdapter } from './trade-plan-item-okpd-2-market.adapter';

export const tradePlanLotItemMarketAdapter = (source?: ApiTradePlanLotItemMarketDto | null): TradePlanLotItemMarket => {
  return {
    ...baseContractDtoWithIdAndRowVersionOfIntegerAndIntegerAdapter(source as unknown as Parameters<typeof baseContractDtoWithIdAndRowVersionOfIntegerAndIntegerAdapter>[0]),
    name: source?.Name,
    okato: source?.Okato,
    regionName: source?.RegionName,
    additionalInfo: source?.AdditionalInfo,
    okpd2Classifiers: source?.Okpd2Classifiers?.map((item) => tradePlanItemOkpd2MarketAdapter(item)),
  };
}
