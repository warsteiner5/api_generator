import { ApiTradesFilterObjectAltDto } from '../../../swagger/models/api-trades-filter-object';
import { TradesFilterObjectAlt } from '../../models/trades-filter-object-alt.interface';
import { baseFilterObjectAltAdapter } from './base-filter-object-alt.adapter';
import { lotStateEnumAdapter } from '../enums/lot-state-enum.adapter';

export const tradesFilterObjectAltAdapter = (source?: ApiTradesFilterObjectAltDto | null): TradesFilterObjectAlt => {
  return {
    ...baseFilterObjectAltAdapter(source as unknown as Parameters<typeof baseFilterObjectAltAdapter>[0]),
    isImmediate: source?.IsImmediate,
    tradeName: source?.TradeName,
    tradeNumber: source?.TradeNumber,
    tradeSections: source?.TradeSections,
    tradeState: source?.TradeState === null ? undefined : lotStateEnumAdapter(source?.TradeState),
    isLapsed: source?.IsLapsed,
    filterPriceMin: source?.FilterPriceMin,
    filterPriceMax: source?.FilterPriceMax,
    filterDateFrom: source?.FilterDateFrom,
    filterDateTo: source?.FilterDateTo,
    filterFillingApplicationEndDateFrom: source?.FilterFillingApplicationEndDateFrom,
    filterFillingApplicationEndDateTo: source?.FilterFillingApplicationEndDateTo,
    customerFullNameOrInn: source?.CustomerFullNameOrInn,
    useCustomerInn: source?.UseCustomerInn,
    useCustomerName: source?.UseCustomerName,
  };
}
