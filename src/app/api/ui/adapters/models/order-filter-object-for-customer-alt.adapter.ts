import { ApiOrderFilterObjectForCustomerAltDto } from '../../../swagger/models/api-order-filter-object-for-customer';
import { OrderFilterObjectForCustomerAlt } from '../../models/order-filter-object-for-customer-alt.interface';
import { orderFilterObjectAltAdapter } from './order-filter-object-alt.adapter';
import { tradeSearchTypeEnumAdapter } from '../enums/trade-search-type-enum.adapter';
import { zmoFinanceSourceEnumAdapter } from '../enums/zmo-finance-source-enum.adapter';

export const orderFilterObjectForCustomerAltAdapter = (source?: ApiOrderFilterObjectForCustomerAltDto | null): OrderFilterObjectForCustomerAlt => {
  return {
    ...orderFilterObjectAltAdapter(source as unknown as Parameters<typeof orderFilterObjectAltAdapter>[0]),
    participantNameOrInn: source?.ParticipantNameOrInn,
    customerNameOrInn: source?.CustomerNameOrInn,
    showOnlyOwnOrder: source?.ShowOnlyOwnOrder,
    orderSearchType: source?.OrderSearchType === null ? undefined : tradeSearchTypeEnumAdapter(source?.OrderSearchType),
    showTradesCount: source?.ShowTradesCount,
    zmoFinanceSource: source?.ZmoFinanceSource === null ? undefined : zmoFinanceSourceEnumAdapter(source?.ZmoFinanceSource),
    zmoFzType: source?.ZmoFzType,
    zmoFinanceSourceBudget: source?.ZmoFinanceSourceBudget,
    zmoFinanceSourceOutOfBudget: source?.ZmoFinanceSourceOutOfBudget,
    zmoFinanceSourceMixedBudget: source?.ZmoFinanceSourceMixedBudget,
    zmoFinanceSourceMunicipalBudget: source?.ZmoFinanceSourceMunicipalBudget,
    zmoFinanceSourceRegionalBudget: source?.ZmoFinanceSourceRegionalBudget,
    zmoFinanceSourceFederalBudget: source?.ZmoFinanceSourceFederalBudget,
    zmoFinanceSourceNotChecked: source?.ZmoFinanceSourceNotChecked,
    parentNotTookPlaceTradeId: source?.ParentNotTookPlaceTradeId,
    tradeIds: source?.TradeIds,
  };
}
