import { ApiExternalDealFilterObjectAltDto } from '../../../swagger/models/api-external-deal-filter-object';
import { ExternalDealFilterObjectAlt } from '../../models/external-deal-filter-object-alt.interface';
import { baseFilterObjectAltAdapter } from './base-filter-object-alt.adapter';

export const externalDealFilterObjectAltAdapter = (source?: ApiExternalDealFilterObjectAltDto | null): ExternalDealFilterObjectAlt => {
  return {
    ...baseFilterObjectAltAdapter(source as unknown as Parameters<typeof baseFilterObjectAltAdapter>[0]),
    dealNumber: source?.DealNumber,
    participantName: source?.ParticipantName,
    participantInn: source?.ParticipantInn,
    participantKpp: source?.ParticipantKpp,
    conclusionDateFrom: source?.ConclusionDateFrom,
    conclusionDateTo: source?.ConclusionDateTo,
    priceMin: source?.PriceMin,
    priceMax: source?.PriceMax,
    dealSubject: source?.DealSubject,
  };
}
