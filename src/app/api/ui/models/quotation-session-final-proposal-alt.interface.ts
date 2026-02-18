import { AdditionalService } from './additional-service.interface';
import { ApplicationDocumentDto2 } from './application-document-dto-2.interface';
import { ContactInfo } from './contact-info.interface';
import { QuotationSessionFinalProposalItemAlt } from './quotation-session-final-proposal-item-alt.interface';

export interface QuotationSessionFinalProposalAlt {
  additionalServices: AdditionalService[];
  applicationDocuments: ApplicationDocumentDto2[];
  bankingDetailId: number;
  biddingQuotation: number;
  contactInfo: ContactInfo;
  items: QuotationSessionFinalProposalItemAlt[];
  quotation: number;
  tradeLotId: number;
}
