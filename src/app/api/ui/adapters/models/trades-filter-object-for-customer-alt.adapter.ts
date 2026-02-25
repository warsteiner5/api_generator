import { ApiTradesFilterObjectForCustomerAltDto } from '../../../swagger/models/api-trades-filter-object-for-customer';
import { TradesFilterObjectForCustomerAlt } from '../../models/trades-filter-object-for-customer-alt.interface';
import { tradeSearchTypeEnumAdapter } from '../enums/trade-search-type-enum.adapter';
import { tradesFilterObjectAltAdapter } from './trades-filter-object-alt.adapter';
import { zmoFinanceSourceEnumAdapter } from '../enums/zmo-finance-source-enum.adapter';

export const tradesFilterObjectForCustomerAltAdapter = (source?: ApiTradesFilterObjectForCustomerAltDto | null): TradesFilterObjectForCustomerAlt => {
  return {
    ...tradesFilterObjectAltAdapter(source as unknown as Parameters<typeof tradesFilterObjectAltAdapter>[0]),
    zmoFinanceSource: source?.ZmoFinanceSource === null ? undefined : zmoFinanceSourceEnumAdapter(source?.ZmoFinanceSource),
    zmoFzType: source?.ZmoFzType,
    showOnlyOwnTrades: source?.ShowOnlyOwnTrades,
    isExpire: source?.IsExpire,
    zmoFinanceSourceBudget: source?.ZmoFinanceSourceBudget,
    zmoFinanceSourceOutOfBudget: source?.ZmoFinanceSourceOutOfBudget,
    zmoFinanceSourceMixedBudget: source?.ZmoFinanceSourceMixedBudget,
    zmoFinanceSourceMunicipalBudget: source?.ZmoFinanceSourceMunicipalBudget,
    zmoFinanceSourceRegionalBudget: source?.ZmoFinanceSourceRegionalBudget,
    zmoFinanceSourceFederalBudget: source?.ZmoFinanceSourceFederalBudget,
    zmoFinanceSourceNotChecked: source?.ZmoFinanceSourceNotChecked,
    showTradesCount: source?.ShowTradesCount,
    tradeSearchType: source?.TradeSearchType === null ? undefined : tradeSearchTypeEnumAdapter(source?.TradeSearchType),
  };
}
