import { ParticipantFilterObjectAlt } from '../../models/participant-filter-object-alt.interface';
import { ApiParticipantFilterObjectAltDto } from '../../../swagger/models/api-participant-filter-object';
import { apiBaseFilterObjectAltDtoAdapter } from './api-base-filter-object.adapter';
import { apiOrganizationTypeEnumAdapter } from '../enums/api-organization-type-enum.adapter';

export const apiParticipantFilterObjectAltDtoAdapter = (source?: ParticipantFilterObjectAlt | null): ApiParticipantFilterObjectAltDto => {
  return {
    ...apiBaseFilterObjectAltDtoAdapter(source as unknown as Parameters<typeof apiBaseFilterObjectAltDtoAdapter>[0]),
    Id: source?.id,
    Name: source?.name,
    Inn: source?.inn,
    Address: source?.address,
    Type: source?.type === null ? undefined : apiOrganizationTypeEnumAdapter(source?.type),
    TradeId: source?.tradeId,
    Regions: source?.regions,
    ParticipantActualApplicationCountMax: source?.participantActualApplicationCountMax,
    ParticipantActualApplicationCountMin: source?.participantActualApplicationCountMin,
    ParticipantActualApplicationAndMeetRequirementsCountMax: source?.participantActualApplicationAndMeetRequirementsCountMax,
    ParticipantActualApplicationAndMeetRequirementsCountMin: source?.participantActualApplicationAndMeetRequirementsCountMin,
    ConcludedDealCountMax: source?.concludedDealCountMax,
    ConcludedDealCountMin: source?.concludedDealCountMin,
    ConcludedDealSummMax: source?.concludedDealSummMax,
    ConcludedDealSummMin: source?.concludedDealSummMin,
  };
}
