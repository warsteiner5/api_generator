import { ApiQuotationSessionApplicationDetailsDto } from '../../../swagger/models/api-quotation-session-application-details-dto';
import { QuotationSessionApplicationDetails } from '../../models/quotation-session-application-details.interface';
import { baseQuotationSessionApplicationAdapter } from './base-quotation-session-application.adapter';
import { quotationSessionApplicationConditionsAdapter } from './quotation-session-application-conditions.adapter';
import { quotationSessionApplicationDocumentAdapter } from './quotation-session-application-document.adapter';
import { quotationSessionApplicationDtoParticipantInfoAdapter } from './quotation-session-application-dto-participant-info.adapter';
import { quotationSessionApplicationProductAdapter } from './quotation-session-application-product.adapter';

export const quotationSessionApplicationDetailsAdapter = (source?: ApiQuotationSessionApplicationDetailsDto | null): QuotationSessionApplicationDetails => {
  return {
    ...baseQuotationSessionApplicationAdapter(source as unknown as Parameters<typeof baseQuotationSessionApplicationAdapter>[0]),
    participantInfo: source?.ParticipantInfo === null ? undefined : quotationSessionApplicationDtoParticipantInfoAdapter(source?.ParticipantInfo),
    conditions: source?.Conditions === null ? undefined : quotationSessionApplicationConditionsAdapter(source?.Conditions),
    applicationDocuments: source?.ApplicationDocuments?.map((item) => quotationSessionApplicationDocumentAdapter(item)),
    organizationRegistryDocuments: source?.OrganizationRegistryDocuments?.map((item) => quotationSessionApplicationDocumentAdapter(item)),
    products: source?.Products?.map((item) => quotationSessionApplicationProductAdapter(item)),
  };
}
