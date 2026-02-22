import { Address } from './address.interface';
import { BaseFilterObjectAlt } from './base-filter-object-alt.interface';
import { OrganizationTypeEnum } from '../enums/organization-type.enum';

// @ts-ignore
export interface ParticipantFilterObjectAlt extends BaseFilterObjectAlt {
  id: number;
  name: string;
  inn: string;
  address: string;
  type: OrganizationTypeEnum;
  tradeId: number;
  regions: number[];
  participantActualApplicationCountMax: number;
  participantActualApplicationCountMin: number;
  participantActualApplicationAndMeetRequirementsCountMax: number;
  participantActualApplicationAndMeetRequirementsCountMin: number;
  concludedDealCountMax: number;
  concludedDealCountMin: number;
  concludedDealSummMax: number;
  concludedDealSummMin: number;
}
