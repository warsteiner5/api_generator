/* tslint:disable */
/* eslint-disable */
import { ApiParticipantOfferSourceEnum } from '../models/api-participant-offer-source-enum';
export interface ApiGetPriceListsParamAltDto {
  HomeRegions?: Array<string> | null;
  IncludePublicOffers?: boolean;
  IncludeWithOkpd2?: boolean;
  IsCustomer?: boolean;
  IsParticipant?: boolean;
  OrganizationId?: number | null;
  ParticipantOfferSources?: Array<ApiParticipantOfferSourceEnum> | null;
  TenantIds?: Array<number> | null;
}
