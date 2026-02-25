import { TradesFilterObjectForCustomerAlt } from '../../models/trades-filter-object-for-customer-alt.interface';
import { ApiTradesFilterObjectForCustomerAltDto } from '../../../swagger/models/api-trades-filter-object-for-customer';
import { apiTradeSearchTypeEnumAdapter } from '../enums/api-trade-search-type-enum.adapter';
import { apiTradesFilterObjectAltDtoAdapter } from './api-trades-filter-object.adapter';
import { apiZmoFinanceSourceEnumAdapter } from '../enums/api-zmo-finance-source-enum.adapter';

export const apiTradesFilterObjectForCustomerAltDtoAdapter = (source?: TradesFilterObjectForCustomerAlt | null): ApiTradesFilterObjectForCustomerAltDto => {
  return {
    ...apiTradesFilterObjectAltDtoAdapter(source as unknown as Parameters<typeof apiTradesFilterObjectAltDtoAdapter>[0]),
    ZmoFinanceSource: source?.zmoFinanceSource === null ? undefined : apiZmoFinanceSourceEnumAdapter(source?.zmoFinanceSource),
    ZmoFzType: source?.zmoFzType,
    ShowOnlyOwnTrades: source?.showOnlyOwnTrades,
    IsExpire: source?.isExpire,
    ZmoFinanceSourceBudget: source?.zmoFinanceSourceBudget,
    ZmoFinanceSourceOutOfBudget: source?.zmoFinanceSourceOutOfBudget,
    ZmoFinanceSourceMixedBudget: source?.zmoFinanceSourceMixedBudget,
    ZmoFinanceSourceMunicipalBudget: source?.zmoFinanceSourceMunicipalBudget,
    ZmoFinanceSourceRegionalBudget: source?.zmoFinanceSourceRegionalBudget,
    ZmoFinanceSourceFederalBudget: source?.zmoFinanceSourceFederalBudget,
    ZmoFinanceSourceNotChecked: source?.zmoFinanceSourceNotChecked,
    ShowTradesCount: source?.showTradesCount,
    TradeSearchType: source?.tradeSearchType === null ? undefined : apiTradeSearchTypeEnumAdapter(source?.tradeSearchType),
  };
}
