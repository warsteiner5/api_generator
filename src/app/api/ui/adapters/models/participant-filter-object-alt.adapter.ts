import { ApiParticipantFilterObjectAltDto } from '../../../swagger/models/api-participant-filter-object';
import { ParticipantFilterObjectAlt } from '../../models/participant-filter-object-alt.interface';
import { baseFilterObjectAltAdapter } from './base-filter-object-alt.adapter';
import { organizationTypeEnumAdapter } from '../enums/organization-type-enum.adapter';

export const participantFilterObjectAltAdapter = (source?: ApiParticipantFilterObjectAltDto | null): ParticipantFilterObjectAlt => {
  return {
    ...baseFilterObjectAltAdapter(source as unknown as Parameters<typeof baseFilterObjectAltAdapter>[0]),
    id: source?.Id,
    name: source?.Name,
    inn: source?.Inn,
    address: source?.Address,
    type: source?.Type === null ? undefined : organizationTypeEnumAdapter(source?.Type),
    tradeId: source?.TradeId,
    regions: source?.Regions,
    participantActualApplicationCountMax: source?.ParticipantActualApplicationCountMax,
    participantActualApplicationCountMin: source?.ParticipantActualApplicationCountMin,
    participantActualApplicationAndMeetRequirementsCountMax: source?.ParticipantActualApplicationAndMeetRequirementsCountMax,
    participantActualApplicationAndMeetRequirementsCountMin: source?.ParticipantActualApplicationAndMeetRequirementsCountMin,
    concludedDealCountMax: source?.ConcludedDealCountMax,
    concludedDealCountMin: source?.ConcludedDealCountMin,
    concludedDealSummMax: source?.ConcludedDealSummMax,
    concludedDealSummMin: source?.ConcludedDealSummMin,
  };
}
