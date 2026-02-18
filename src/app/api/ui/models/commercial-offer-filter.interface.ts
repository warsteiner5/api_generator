import { BaseFilterObjectAlt } from './base-filter-object-alt.interface';
import { ParticipantOfferStateEnum } from '../enums/participant-offer-state.enum';
import { UsedClassificatorTypeEnum } from '../enums/used-classificator-type.enum';

export type CommercialOfferFilter = BaseFilterObjectAlt & { 'UsedClassificator'?: UsedClassificatorTypeEnum | null; 'ClassificatorCodes'?: Array<string> | null; 'OfferState'?: ParticipantOfferStateEnum | null; 'ParticipantInn'?: string | null; 'ProductName'?: string | null; 'ProductNameFTS'?: string | null; 'OrganizationId'?: number | null; 'TenantId'?: number; };
