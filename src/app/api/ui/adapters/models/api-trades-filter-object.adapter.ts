import { TradesFilterObjectAlt } from '../../models/trades-filter-object-alt.interface';
import { ApiTradesFilterObjectAltDto } from '../../../swagger/models/api-trades-filter-object';
import { apiBaseFilterObjectAltDtoAdapter } from './api-base-filter-object.adapter';
import { apiLotStateEnumAdapter } from '../enums/api-lot-state-enum.adapter';

export const apiTradesFilterObjectAltDtoAdapter = (source?: TradesFilterObjectAlt | null): ApiTradesFilterObjectAltDto => {
  return {
    ...apiBaseFilterObjectAltDtoAdapter(source as unknown as Parameters<typeof apiBaseFilterObjectAltDtoAdapter>[0]),
    IsImmediate: source?.isImmediate,
    TradeName: source?.tradeName,
    TradeNumber: source?.tradeNumber,
    TradeSections: source?.tradeSections,
    TradeState: source?.tradeState === null ? undefined : apiLotStateEnumAdapter(source?.tradeState),
    IsLapsed: source?.isLapsed,
    FilterPriceMin: source?.filterPriceMin,
    FilterPriceMax: source?.filterPriceMax,
    FilterDateFrom: source?.filterDateFrom,
    FilterDateTo: source?.filterDateTo,
    FilterFillingApplicationEndDateFrom: source?.filterFillingApplicationEndDateFrom,
    FilterFillingApplicationEndDateTo: source?.filterFillingApplicationEndDateTo,
    CustomerFullNameOrInn: source?.customerFullNameOrInn,
    UseCustomerInn: source?.useCustomerInn,
    UseCustomerName: source?.useCustomerName,
  };
}
