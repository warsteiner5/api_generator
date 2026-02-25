import { ApiCommercialOfferFilterDto } from '../../../swagger/models/api-commercial-offer-filter-dto';
import { CommercialOfferFilter } from '../../models/commercial-offer-filter.interface';
import { baseFilterObjectAltAdapter } from './base-filter-object-alt.adapter';
import { participantOfferStateEnumAdapter } from '../enums/participant-offer-state-enum.adapter';
import { usedClassificatorTypeEnumAdapter } from '../enums/used-classificator-type-enum.adapter';

export const commercialOfferFilterAdapter = (source?: ApiCommercialOfferFilterDto | null): CommercialOfferFilter => {
  return {
    ...baseFilterObjectAltAdapter(source as unknown as Parameters<typeof baseFilterObjectAltAdapter>[0]),
    usedClassificator: source?.UsedClassificator === null ? undefined : usedClassificatorTypeEnumAdapter(source?.UsedClassificator),
    classificatorCodes: source?.ClassificatorCodes,
    offerState: source?.OfferState === null ? undefined : participantOfferStateEnumAdapter(source?.OfferState),
    participantInn: source?.ParticipantInn,
    productName: source?.ProductName,
    productNameFTS: source?.ProductNameFTS,
    organizationId: source?.OrganizationId,
    tenantId: source?.TenantId,
  };
}
