import { ApiExternalIntegrationOfferImportRequestAltDto } from '../../../swagger/models/api-external-integration-offer-import-request';
import { ExternalIntegrationOfferImportRequestAlt } from '../../models/external-integration-offer-import-request-alt.interface';
import { adaptExternalIntegrationParticipantOfferToUI } from './external-integration-participant-offer.adapter';

export function adaptExternalIntegrationOfferImportRequestAltToUI(source?: ApiExternalIntegrationOfferImportRequestAltDto | null): ExternalIntegrationOfferImportRequestAlt {
  return {
    etpOrganizationId: source?.EtpOrganizationId ?? 0,
    offers: (source?.Offers ?? []).map((item) => adaptExternalIntegrationParticipantOfferToUI(item)),
  };
}
