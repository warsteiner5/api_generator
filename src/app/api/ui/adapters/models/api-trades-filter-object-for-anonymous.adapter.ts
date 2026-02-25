import { TradesFilterObjectForAnonymousAlt } from '../../models/trades-filter-object-for-anonymous-alt.interface';
import { ApiTradesFilterObjectForAnonymousAltDto } from '../../../swagger/models/api-trades-filter-object-for-anonymous';
import { apiBaseFilterObjectAltDtoAdapter } from './api-base-filter-object.adapter';
import { apiLotStateEnumAdapter } from '../enums/api-lot-state-enum.adapter';

export const apiTradesFilterObjectForAnonymousAltDtoAdapter = (source?: TradesFilterObjectForAnonymousAlt | null): ApiTradesFilterObjectForAnonymousAltDto => {
  return {
    ...apiBaseFilterObjectAltDtoAdapter(source as unknown as Parameters<typeof apiBaseFilterObjectAltDtoAdapter>[0]),
    TradeNumber: source?.tradeNumber,
    TradeName: source?.tradeName,
    ClassificatorCodes: source?.classificatorCodes,
    IsImmediate: source?.isImmediate,
    CustomerAddress: source?.customerAddress,
    FilterPriceMin: source?.filterPriceMin,
    FilterPriceMax: source?.filterPriceMax,
    FilterDateFrom: source?.filterDateFrom,
    FilterDateTo: source?.filterDateTo,
    FilterFillingApplicationEndDateFrom: source?.filterFillingApplicationEndDateFrom,
    FilterFillingApplicationEndDateTo: source?.filterFillingApplicationEndDateTo,
    CustomerFullNameOrInn: source?.customerFullNameOrInn,
    UseCustomerInn: source?.useCustomerInn,
    UseCustomerName: source?.useCustomerName,
    TradeState: source?.tradeState === null ? undefined : apiLotStateEnumAdapter(source?.tradeState),
  };
}
