import { ParticipantOfferSourceEnum } from '../enums/participant-offer-source.enum';

export interface GetPriceListsParamAlt {
  homeRegions: string[];
  includePublicOffers: boolean;
  includeWithOkpd2: boolean;
  isCustomer: boolean;
  isParticipant: boolean;
  organizationId: number;
  participantOfferSources: ParticipantOfferSourceEnum[];
  tenantIds: number[];
}
