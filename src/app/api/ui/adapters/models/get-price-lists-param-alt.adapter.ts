import { ApiGetPriceListsParamAltDto } from '../../../swagger/models/api-get-price-lists-param';
import { GetPriceListsParamAlt } from '../../models/get-price-lists-param-alt.interface';
import { participantOfferSourceEnumAdapter } from '../enums/participant-offer-source-enum.adapter';

export const getPriceListsParamAltAdapter = (source?: ApiGetPriceListsParamAltDto | null): GetPriceListsParamAlt => {
  return {
    homeRegions: source?.HomeRegions,
    includePublicOffers: source?.IncludePublicOffers,
    includeWithOkpd2: source?.IncludeWithOkpd2,
    isCustomer: source?.IsCustomer,
    isParticipant: source?.IsParticipant,
    organizationId: source?.OrganizationId,
    participantOfferSources: source?.ParticipantOfferSources?.map((item) => participantOfferSourceEnumAdapter(item)),
    tenantIds: source?.TenantIds,
  };
}
