/* tslint:disable */
/* eslint-disable */
import { ApiBaseFilterObjectAltDto } from '../models/api-base-filter-object';
import { ApiOrganizationTypeEnum } from '../models/api-organization-type-enum';
export type ApiParticipantFilterObjectAltDto = ApiBaseFilterObjectAltDto & {
'Id'?: number;
'Name'?: string | null;
'Inn'?: string | null;
'Address'?: string | null;
'Type'?: ApiOrganizationTypeEnum | null;
'TradeId'?: number;
'Regions'?: Array<number> | null;
'ParticipantActualApplicationCountMax'?: number | null;
'ParticipantActualApplicationCountMin'?: number | null;
'ParticipantActualApplicationAndMeetRequirementsCountMax'?: number | null;
'ParticipantActualApplicationAndMeetRequirementsCountMin'?: number | null;
'ConcludedDealCountMax'?: number | null;
'ConcludedDealCountMin'?: number | null;
'ConcludedDealSummMax'?: number | null;
'ConcludedDealSummMin'?: number | null;
};
