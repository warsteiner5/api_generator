import { BaseFilterObjectAlt } from './base-filter-object-alt.interface';
import { ParticipantOfferStateEnum } from '../enums/participant-offer-state.enum';
import { UsedClassificatorTypeEnum } from '../enums/used-classificator-type.enum';

// @ts-ignore
export interface CommercialOfferFilter extends BaseFilterObjectAlt {
  usedClassificator: UsedClassificatorTypeEnum;
  classificatorCodes: string[];
  offerState: ParticipantOfferStateEnum;
  participantInn: string;
  productName: string;
  productNameFTS: string;
  organizationId: number;
  tenantId: number;
}
