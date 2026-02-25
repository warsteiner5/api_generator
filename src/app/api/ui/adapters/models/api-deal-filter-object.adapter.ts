import { DealFilterObjectAlt } from '../../models/deal-filter-object-alt.interface';
import { ApiDealFilterObjectAltDto } from '../../../swagger/models/api-deal-filter-object';
import { apiBaseFilterObjectAltDtoAdapter } from './api-base-filter-object.adapter';
import { apiDealFormEnumAdapter } from '../enums/api-deal-form-enum.adapter';
import { apiDealObjectEnumAdapter } from '../enums/api-deal-object-enum.adapter';
import { apiDealStateEnumAdapter } from '../enums/api-deal-state-enum.adapter';
import { apiTradeSearchTypeEnumAdapter } from '../enums/api-trade-search-type-enum.adapter';

export const apiDealFilterObjectAltDtoAdapter = (source?: DealFilterObjectAlt | null): ApiDealFilterObjectAltDto => {
  return {
    ...apiBaseFilterObjectAltDtoAdapter(source as unknown as Parameters<typeof apiBaseFilterObjectAltDtoAdapter>[0]),
    CustomerName: source?.customerName,
    ParticipantNameOrInn: source?.participantNameOrInn,
    CustomerNameOrInn: source?.customerNameOrInn,
    DealSubject: source?.dealSubject,
    PriceMin: source?.priceMin,
    PriceMax: source?.priceMax,
    ConclusionDateFrom: source?.conclusionDateFrom,
    ConclusionDateTo: source?.conclusionDateTo,
    TradeNumber: source?.tradeNumber,
    DealForm: source?.dealForm === null ? undefined : apiDealFormEnumAdapter(source?.dealForm),
    DealState: source?.dealState === null ? undefined : apiDealStateEnumAdapter(source?.dealState),
    ShowOnlyDealSignedOutsideEShop: source?.showOnlyDealSignedOutsideEShop,
    CustomerOrganizationInn: source?.customerOrganizationInn,
    ShowOnlyOwnDeals: source?.showOnlyOwnDeals,
    DealObject: source?.dealObject === null ? undefined : apiDealObjectEnumAdapter(source?.dealObject),
    SearchType: source?.searchType === null ? undefined : apiTradeSearchTypeEnumAdapter(source?.searchType),
  };
}
