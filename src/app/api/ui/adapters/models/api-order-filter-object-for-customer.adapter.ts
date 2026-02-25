import { OrderFilterObjectForCustomerAlt } from '../../models/order-filter-object-for-customer-alt.interface';
import { ApiOrderFilterObjectForCustomerAltDto } from '../../../swagger/models/api-order-filter-object-for-customer';
import { apiOrderFilterObjectAltDtoAdapter } from './api-order-filter-object.adapter';
import { apiTradeSearchTypeEnumAdapter } from '../enums/api-trade-search-type-enum.adapter';
import { apiZmoFinanceSourceEnumAdapter } from '../enums/api-zmo-finance-source-enum.adapter';

export const apiOrderFilterObjectForCustomerAltDtoAdapter = (source?: OrderFilterObjectForCustomerAlt | null): ApiOrderFilterObjectForCustomerAltDto => {
  return {
    ...apiOrderFilterObjectAltDtoAdapter(source as unknown as Parameters<typeof apiOrderFilterObjectAltDtoAdapter>[0]),
    ParticipantNameOrInn: source?.participantNameOrInn,
    CustomerNameOrInn: source?.customerNameOrInn,
    ShowOnlyOwnOrder: source?.showOnlyOwnOrder,
    OrderSearchType: source?.orderSearchType === null ? undefined : apiTradeSearchTypeEnumAdapter(source?.orderSearchType),
    ShowTradesCount: source?.showTradesCount,
    ZmoFinanceSource: source?.zmoFinanceSource === null ? undefined : apiZmoFinanceSourceEnumAdapter(source?.zmoFinanceSource),
    ZmoFzType: source?.zmoFzType,
    ZmoFinanceSourceBudget: source?.zmoFinanceSourceBudget,
    ZmoFinanceSourceOutOfBudget: source?.zmoFinanceSourceOutOfBudget,
    ZmoFinanceSourceMixedBudget: source?.zmoFinanceSourceMixedBudget,
    ZmoFinanceSourceMunicipalBudget: source?.zmoFinanceSourceMunicipalBudget,
    ZmoFinanceSourceRegionalBudget: source?.zmoFinanceSourceRegionalBudget,
    ZmoFinanceSourceFederalBudget: source?.zmoFinanceSourceFederalBudget,
    ZmoFinanceSourceNotChecked: source?.zmoFinanceSourceNotChecked,
    ParentNotTookPlaceTradeId: source?.parentNotTookPlaceTradeId,
    TradeIds: source?.tradeIds,
  };
}
