import { GetPriceListsParamAlt } from '../../models/get-price-lists-param-alt.interface';
import { ApiGetPriceListsParamAltDto } from '../../../swagger/models/api-get-price-lists-param';
import { apiParticipantOfferSourceEnumAdapter } from '../enums/api-participant-offer-source-enum.adapter';

export const apiGetPriceListsParamAltDtoAdapter = (source?: GetPriceListsParamAlt | null): ApiGetPriceListsParamAltDto => {
  return {
    HomeRegions: source?.homeRegions,
    IncludePublicOffers: source?.includePublicOffers,
    IncludeWithOkpd2: source?.includeWithOkpd2,
    IsCustomer: source?.isCustomer,
    IsParticipant: source?.isParticipant,
    OrganizationId: source?.organizationId,
    ParticipantOfferSources: source?.participantOfferSources?.map((item) => apiParticipantOfferSourceEnumAdapter(item)),
    TenantIds: source?.tenantIds,
  };
}
