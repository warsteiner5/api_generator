import { ApiDealFilterObjectAltDto } from '../../../swagger/models/api-deal-filter-object';
import { DealFilterObjectAlt } from '../../models/deal-filter-object-alt.interface';
import { baseFilterObjectAltAdapter } from './base-filter-object-alt.adapter';
import { dealFormEnumAdapter } from '../enums/deal-form-enum.adapter';
import { dealObjectEnumAdapter } from '../enums/deal-object-enum.adapter';
import { dealStateEnumAdapter } from '../enums/deal-state-enum.adapter';
import { tradeSearchTypeEnumAdapter } from '../enums/trade-search-type-enum.adapter';

export const dealFilterObjectAltAdapter = (source?: ApiDealFilterObjectAltDto | null): DealFilterObjectAlt => {
  return {
    ...baseFilterObjectAltAdapter(source as unknown as Parameters<typeof baseFilterObjectAltAdapter>[0]),
    customerName: source?.CustomerName,
    participantNameOrInn: source?.ParticipantNameOrInn,
    customerNameOrInn: source?.CustomerNameOrInn,
    dealSubject: source?.DealSubject,
    priceMin: source?.PriceMin,
    priceMax: source?.PriceMax,
    conclusionDateFrom: source?.ConclusionDateFrom,
    conclusionDateTo: source?.ConclusionDateTo,
    tradeNumber: source?.TradeNumber,
    dealForm: source?.DealForm === null ? undefined : dealFormEnumAdapter(source?.DealForm),
    dealState: source?.DealState === null ? undefined : dealStateEnumAdapter(source?.DealState),
    showOnlyDealSignedOutsideEShop: source?.ShowOnlyDealSignedOutsideEShop,
    customerOrganizationInn: source?.CustomerOrganizationInn,
    showOnlyOwnDeals: source?.ShowOnlyOwnDeals,
    dealObject: source?.DealObject === null ? undefined : dealObjectEnumAdapter(source?.DealObject),
    searchType: source?.SearchType === null ? undefined : tradeSearchTypeEnumAdapter(source?.SearchType),
  };
}
