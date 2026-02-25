import { ExternalDealFilterObjectAlt } from '../../models/external-deal-filter-object-alt.interface';
import { ApiExternalDealFilterObjectAltDto } from '../../../swagger/models/api-external-deal-filter-object';
import { apiBaseFilterObjectAltDtoAdapter } from './api-base-filter-object.adapter';

export const apiExternalDealFilterObjectAltDtoAdapter = (source?: ExternalDealFilterObjectAlt | null): ApiExternalDealFilterObjectAltDto => {
  return {
    ...apiBaseFilterObjectAltDtoAdapter(source as unknown as Parameters<typeof apiBaseFilterObjectAltDtoAdapter>[0]),
    DealNumber: source?.dealNumber,
    ParticipantName: source?.participantName,
    ParticipantInn: source?.participantInn,
    ParticipantKpp: source?.participantKpp,
    ConclusionDateFrom: source?.conclusionDateFrom,
    ConclusionDateTo: source?.conclusionDateTo,
    PriceMin: source?.priceMin,
    PriceMax: source?.priceMax,
    DealSubject: source?.dealSubject,
  };
}
