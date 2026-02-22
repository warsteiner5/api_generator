import { OrganizationTypeEnum } from '../../enums/organization-type.enum';
import { ParticipantGetParticipants$Params } from '../../../swagger/fn/participant/participant-get-participants';
import { apiOrganizationTypeEnumAdapter } from '../../adapters/enums/api-organization-type-enum.adapter';

// @ts-ignore
export interface ParticipantGetParticipantsParams {
  id?: number;
  name?: string;
  inn?: string;
  address?: string;
  type?: OrganizationTypeEnum;
  tradeId?: number;
  regions?: number[];
  participantActualApplicationCountMax?: number;
  participantActualApplicationCountMin?: number;
  participantActualApplicationAndMeetRequirementsCountMax?: number;
  participantActualApplicationAndMeetRequirementsCountMin?: number;
  concludedDealCountMax?: number;
  concludedDealCountMin?: number;
  concludedDealSummMax?: number;
  concludedDealSummMin?: number;
  page?: number;
  itemsPerPage?: number;
  sortField?: string;
  sortDirection?: string;
}

export function participantGetParticipantsAdapter(params?: ParticipantGetParticipantsParams): ParticipantGetParticipants$Params {
  if (!params) {
    return {} as ParticipantGetParticipants$Params;
  }
  return {
      Id: params.id,
      Name: params.name,
      Inn: params.inn,
      Address: params.address,
      Type: apiOrganizationTypeEnumAdapter(params.type),
      TradeId: params.tradeId,
      Regions: params.regions,
      ParticipantActualApplicationCountMax: params.participantActualApplicationCountMax,
      ParticipantActualApplicationCountMin: params.participantActualApplicationCountMin,
      ParticipantActualApplicationAndMeetRequirementsCountMax: params.participantActualApplicationAndMeetRequirementsCountMax,
      ParticipantActualApplicationAndMeetRequirementsCountMin: params.participantActualApplicationAndMeetRequirementsCountMin,
      ConcludedDealCountMax: params.concludedDealCountMax,
      ConcludedDealCountMin: params.concludedDealCountMin,
      ConcludedDealSummMax: params.concludedDealSummMax,
      ConcludedDealSummMin: params.concludedDealSummMin,
      Page: params.page,
      ItemsPerPage: params.itemsPerPage,
      SortField: params.sortField,
      SortDirection: params.sortDirection,
  };
}
