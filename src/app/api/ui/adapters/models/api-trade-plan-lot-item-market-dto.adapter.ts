import { TradePlanLotItemMarket } from '../../models/trade-plan-lot-item-market.interface';
import { ApiTradePlanLotItemMarketDto } from '../../../swagger/models/api-trade-plan-lot-item-market-dto';
import { apiBaseContractDtoWithIdAndRowVersionOfIntegerAndIntegerAdapter } from './api-base-contract-dto-with-id-and-row-version-of-integer-and-integer.adapter';
import { apiTradePlanItemOkpd2MarketDtoAdapter } from './api-trade-plan-item-okpd-2-market-dto.adapter';

export const apiTradePlanLotItemMarketDtoAdapter = (source?: TradePlanLotItemMarket | null): ApiTradePlanLotItemMarketDto => {
  return {
    ...apiBaseContractDtoWithIdAndRowVersionOfIntegerAndIntegerAdapter(source as unknown as Parameters<typeof apiBaseContractDtoWithIdAndRowVersionOfIntegerAndIntegerAdapter>[0]),
    Name: source?.name,
    Okato: source?.okato,
    RegionName: source?.regionName,
    AdditionalInfo: source?.additionalInfo,
    Okpd2Classifiers: source?.okpd2Classifiers?.map((item) => apiTradePlanItemOkpd2MarketDtoAdapter(item)),
  };
}
