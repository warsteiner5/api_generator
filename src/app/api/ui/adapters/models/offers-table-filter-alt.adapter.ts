import { ApiOffersTableFilterAltDto } from '../../../swagger/models/api-offers-table-filter';
import { OffersTableFilterAlt } from '../../models/offers-table-filter-alt.interface';
import { baseFilterAltAdapter } from './base-filter-alt.adapter';
import { competitiveListItemStateEnumAdapter } from '../enums/competitive-list-item-state-enum.adapter';

export const offersTableFilterAltAdapter = (source?: ApiOffersTableFilterAltDto | null): OffersTableFilterAlt => {
  return {
    ...baseFilterAltAdapter(source as unknown as Parameters<typeof baseFilterAltAdapter>[0]),
    requirementRequestId: source?.RequirementRequestId,
    state: source?.State === null ? undefined : competitiveListItemStateEnumAdapter(source?.State),
    competitiveListItems: source?.CompetitiveListItems,
  };
}
