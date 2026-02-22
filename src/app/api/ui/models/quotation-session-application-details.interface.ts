import { BaseQuotationSessionApplication } from './base-quotation-session-application.interface';
import { ParticipantInfo } from './participant-info.interface';
import { QuotationSessionApplicationConditions } from './quotation-session-application-conditions.interface';
import { QuotationSessionApplicationDocument } from './quotation-session-application-document.interface';
import { QuotationSessionApplicationDtoParticipantInfo } from './quotation-session-application-dto-participant-info.interface';
import { QuotationSessionApplicationProduct } from './quotation-session-application-product.interface';

// @ts-ignore
export interface QuotationSessionApplicationDetails extends BaseQuotationSessionApplication {
  participantInfo: QuotationSessionApplicationDtoParticipantInfo;
  conditions: QuotationSessionApplicationConditions;
  applicationDocuments: QuotationSessionApplicationDocument[];
  organizationRegistryDocuments: QuotationSessionApplicationDocument[];
  products: QuotationSessionApplicationProduct[];
}
