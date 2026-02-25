import { ApiTradesFilterObjectForAnonymousAltDto } from '../../../swagger/models/api-trades-filter-object-for-anonymous';
import { TradesFilterObjectForAnonymousAlt } from '../../models/trades-filter-object-for-anonymous-alt.interface';
import { baseFilterObjectAltAdapter } from './base-filter-object-alt.adapter';
import { lotStateEnumAdapter } from '../enums/lot-state-enum.adapter';

export const tradesFilterObjectForAnonymousAltAdapter = (source?: ApiTradesFilterObjectForAnonymousAltDto | null): TradesFilterObjectForAnonymousAlt => {
  return {
    ...baseFilterObjectAltAdapter(source as unknown as Parameters<typeof baseFilterObjectAltAdapter>[0]),
    tradeNumber: source?.TradeNumber,
    tradeName: source?.TradeName,
    classificatorCodes: source?.ClassificatorCodes,
    isImmediate: source?.IsImmediate,
    customerAddress: source?.CustomerAddress,
    filterPriceMin: source?.FilterPriceMin,
    filterPriceMax: source?.FilterPriceMax,
    filterDateFrom: source?.FilterDateFrom,
    filterDateTo: source?.FilterDateTo,
    filterFillingApplicationEndDateFrom: source?.FilterFillingApplicationEndDateFrom,
    filterFillingApplicationEndDateTo: source?.FilterFillingApplicationEndDateTo,
    customerFullNameOrInn: source?.CustomerFullNameOrInn,
    useCustomerInn: source?.UseCustomerInn,
    useCustomerName: source?.UseCustomerName,
    tradeState: source?.TradeState === null ? undefined : lotStateEnumAdapter(source?.TradeState),
  };
}
