import { CommercialOfferFilter } from '../../models/commercial-offer-filter.interface';
import { ApiCommercialOfferFilterDto } from '../../../swagger/models/api-commercial-offer-filter-dto';
import { apiBaseFilterObjectAltDtoAdapter } from './api-base-filter-object.adapter';
import { apiParticipantOfferStateEnumAdapter } from '../enums/api-participant-offer-state-enum.adapter';
import { apiUsedClassificatorTypeEnumAdapter } from '../enums/api-used-classificator-type-enum.adapter';

export const apiCommercialOfferFilterDtoAdapter = (source?: CommercialOfferFilter | null): ApiCommercialOfferFilterDto => {
  return {
    ...apiBaseFilterObjectAltDtoAdapter(source as unknown as Parameters<typeof apiBaseFilterObjectAltDtoAdapter>[0]),
    UsedClassificator: source?.usedClassificator === null ? undefined : apiUsedClassificatorTypeEnumAdapter(source?.usedClassificator),
    ClassificatorCodes: source?.classificatorCodes,
    OfferState: source?.offerState === null ? undefined : apiParticipantOfferStateEnumAdapter(source?.offerState),
    ParticipantInn: source?.participantInn,
    ProductName: source?.productName,
    ProductNameFTS: source?.productNameFTS,
    OrganizationId: source?.organizationId,
    TenantId: source?.tenantId,
  };
}
