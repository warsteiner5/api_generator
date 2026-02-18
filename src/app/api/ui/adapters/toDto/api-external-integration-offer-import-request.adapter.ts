import { ExternalIntegrationOfferImportRequestAlt } from '../../models/external-integration-offer-import-request-alt.interface';
import { ApiExternalIntegrationOfferImportRequestAltDto } from '../../../swagger/models/api-external-integration-offer-import-request';
import { adaptApiExternalIntegrationParticipantOfferDto } from './api-external-integration-participant-offer-dto.adapter';

export function adaptApiExternalIntegrationOfferImportRequestAltDto(source?: ExternalIntegrationOfferImportRequestAlt | null): ApiExternalIntegrationOfferImportRequestAltDto {
  return {
    EtpOrganizationId: source?.etpOrganizationId,
    Offers: (source?.offers ?? []).map((item) => adaptApiExternalIntegrationParticipantOfferDto(item)),
  };
}
