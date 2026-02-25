import { OffersTableFilterAlt } from '../../models/offers-table-filter-alt.interface';
import { ApiOffersTableFilterAltDto } from '../../../swagger/models/api-offers-table-filter';
import { apiBaseFilterAltDtoAdapter } from './api-base-filter.adapter';
import { apiCompetitiveListItemStateEnumAdapter } from '../enums/api-competitive-list-item-state-enum.adapter';

export const apiOffersTableFilterAltDtoAdapter = (source?: OffersTableFilterAlt | null): ApiOffersTableFilterAltDto => {
  return {
    ...apiBaseFilterAltDtoAdapter(source as unknown as Parameters<typeof apiBaseFilterAltDtoAdapter>[0]),
    RequirementRequestId: source?.requirementRequestId,
    State: source?.state === null ? undefined : apiCompetitiveListItemStateEnumAdapter(source?.state),
    CompetitiveListItems: source?.competitiveListItems,
  };
}
