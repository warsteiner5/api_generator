import { ExternalIntegrationOfferImportRequestAlt } from '../../models/external-integration-offer-import-request-alt.interface';
import { ApiExternalIntegrationOfferImportRequestAltDto } from '../../../swagger/models/api-external-integration-offer-import-request';
import { apiExternalIntegrationParticipantOfferDtoAdapter } from './api-external-integration-participant-offer-dto.adapter';

export const apiExternalIntegrationOfferImportRequestAltDtoAdapter = (source?: ExternalIntegrationOfferImportRequestAlt | null): ApiExternalIntegrationOfferImportRequestAltDto => {
  return {
    EtpOrganizationId: source?.etpOrganizationId,
    Offers: source?.offers?.map((item) => apiExternalIntegrationParticipantOfferDtoAdapter(item)),
  };
}
