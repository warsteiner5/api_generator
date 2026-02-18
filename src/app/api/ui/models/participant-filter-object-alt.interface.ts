import { Address } from './address.interface';
import { BaseFilterObjectAlt } from './base-filter-object-alt.interface';
import { OrganizationTypeEnum } from '../enums/organization-type.enum';

export type ParticipantFilterObjectAlt = BaseFilterObjectAlt & { 'Id'?: number; 'Name'?: string | null; 'Inn'?: string | null; 'Address'?: string | null; 'Type'?: OrganizationTypeEnum | null; 'TradeId'?: number; 'Regions'?: Array<number> | null; 'ParticipantActualApplicationCountMax'?: number | null; 'ParticipantActualApplicationCountMin'?: number | null; 'ParticipantActualApplicationAndMeetRequirementsCountMax'?: number | null; 'ParticipantActualApplicationAndMeetRequirementsCountMin'?: number | null; 'ConcludedDealCountMax'?: number | null; 'ConcludedDealCountMin'?: number | null; 'ConcludedDealSummMax'?: number | null; 'ConcludedDealSummMin'?: number | null; };
