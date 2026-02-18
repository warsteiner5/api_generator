import { ApiGetPriceListsParamAltDto } from '../../../swagger/models/api-get-price-lists-param';
import { GetPriceListsParamAlt } from '../../models/get-price-lists-param-alt.interface';
import { adaptParticipantOfferSourceEnumToUI } from './participant-offer-source-enum.adapter';

export function adaptGetPriceListsParamAltToUI(source?: ApiGetPriceListsParamAltDto | null): GetPriceListsParamAlt {
  return {
    homeRegions: source?.HomeRegions ?? [],
    includePublicOffers: source?.IncludePublicOffers ?? false,
    includeWithOkpd2: source?.IncludeWithOkpd2 ?? false,
    isCustomer: source?.IsCustomer ?? false,
    isParticipant: source?.IsParticipant ?? false,
    organizationId: source?.OrganizationId ?? 0,
    participantOfferSources: (source?.ParticipantOfferSources ?? []).map((item) => adaptParticipantOfferSourceEnumToUI(item)),
    tenantIds: source?.TenantIds ?? [],
  };
}
