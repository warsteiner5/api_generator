import { QuotationSessionApplicationDetails } from '../../models/quotation-session-application-details.interface';
import { ApiQuotationSessionApplicationDetailsDto } from '../../../swagger/models/api-quotation-session-application-details-dto';
import { apiBaseQuotationSessionApplicationDtoAdapter } from './api-base-quotation-session-application-dto.adapter';
import { apiQuotationSessionApplicationConditionsDtoAdapter } from './api-quotation-session-application-conditions-dto.adapter';
import { apiQuotationSessionApplicationDocumentDtoAdapter } from './api-quotation-session-application-document-dto.adapter';
import { apiQuotationSessionApplicationDtoParticipantInfoDtoAdapter } from './api-quotation-session-application-dto-participant-info-dto.adapter';
import { apiQuotationSessionApplicationProductDtoAdapter } from './api-quotation-session-application-product-dto.adapter';

export const apiQuotationSessionApplicationDetailsDtoAdapter = (source?: QuotationSessionApplicationDetails | null): ApiQuotationSessionApplicationDetailsDto => {
  return {
    ...apiBaseQuotationSessionApplicationDtoAdapter(source as unknown as Parameters<typeof apiBaseQuotationSessionApplicationDtoAdapter>[0]),
    ParticipantInfo: source?.participantInfo === null ? undefined : apiQuotationSessionApplicationDtoParticipantInfoDtoAdapter(source?.participantInfo),
    Conditions: source?.conditions === null ? undefined : apiQuotationSessionApplicationConditionsDtoAdapter(source?.conditions),
    ApplicationDocuments: source?.applicationDocuments?.map((item) => apiQuotationSessionApplicationDocumentDtoAdapter(item)),
    OrganizationRegistryDocuments: source?.organizationRegistryDocuments?.map((item) => apiQuotationSessionApplicationDocumentDtoAdapter(item)),
    Products: source?.products?.map((item) => apiQuotationSessionApplicationProductDtoAdapter(item)),
  };
}
