import { QuotationSessionFinalProposalAlt } from '../../models/quotation-session-final-proposal-alt.interface';
import { ApiQuotationSessionFinalProposalAltDto } from '../../../swagger/models/api-quotation-session-final-proposal';
import { adaptApiAdditionalServiceDto } from './api-additional-service-dto.adapter';
import { adaptApiApplicationDocumentDto2 } from './api-application-document-dto-2.adapter';
import { adaptApiContactInfoDto } from './api-contact-info-dto.adapter';
import { adaptApiQuotationSessionFinalProposalItemAltDto } from './api-quotation-session-final-proposal-item.adapter';

export function adaptApiQuotationSessionFinalProposalAltDto(source?: QuotationSessionFinalProposalAlt | null): ApiQuotationSessionFinalProposalAltDto {
  return {
    AdditionalServices: (source?.additionalServices ?? []).map((item) => adaptApiAdditionalServiceDto(item)),
    ApplicationDocuments: (source?.applicationDocuments ?? []).map((item) => adaptApiApplicationDocumentDto2(item)),
    BankingDetailId: source?.bankingDetailId,
    BiddingQuotation: source?.biddingQuotation,
    ContactInfo: adaptApiContactInfoDto(source?.contactInfo),
    Items: (source?.items ?? []).map((item) => adaptApiQuotationSessionFinalProposalItemAltDto(item)),
    Quotation: source?.quotation,
    TradeLotId: source?.tradeLotId,
  };
}
