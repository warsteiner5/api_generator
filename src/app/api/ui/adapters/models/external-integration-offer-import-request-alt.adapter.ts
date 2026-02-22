import { ApiExternalIntegrationOfferImportRequestAltDto } from '../../../swagger/models/api-external-integration-offer-import-request';
import { ExternalIntegrationOfferImportRequestAlt } from '../../models/external-integration-offer-import-request-alt.interface';
import { externalIntegrationParticipantOfferAdapter } from './external-integration-participant-offer.adapter';

export const externalIntegrationOfferImportRequestAltAdapter = (source?: ApiExternalIntegrationOfferImportRequestAltDto | null): ExternalIntegrationOfferImportRequestAlt => {
  return {
    etpOrganizationId: source?.EtpOrganizationId,
    offers: source?.Offers?.map((item) => externalIntegrationParticipantOfferAdapter(item)),
  };
}
