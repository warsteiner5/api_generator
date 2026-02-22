import { QuotationSessionFinalProposalNewAlt } from '../../models/quotation-session-final-proposal-new-alt.interface';
import { ApiQuotationSessionFinalProposalNewAltDto } from '../../../swagger/models/api-quotation-session-final-proposal-new';
import { apiAdditionalServiceDtoAdapter } from './api-additional-service-dto.adapter';
import { apiApplicationDocumentDto2Adapter } from './api-application-document-dto-2.adapter';
import { apiContactInfoDtoAdapter } from './api-contact-info-dto.adapter';
import { apiQuotationSessionFinalProposalItemAltDtoAdapter } from './api-quotation-session-final-proposal-item.adapter';

export const apiQuotationSessionFinalProposalNewAltDtoAdapter = (source?: QuotationSessionFinalProposalNewAlt | null): ApiQuotationSessionFinalProposalNewAltDto => {
  return {
    AdditionalServices: source?.additionalServices?.map((item) => apiAdditionalServiceDtoAdapter(item)),
    ApplicationDocuments: source?.applicationDocuments?.map((item) => apiApplicationDocumentDto2Adapter(item)),
    BankingDetailId: source?.bankingDetailId,
    BiddingQuotation: source?.biddingQuotation,
    ContactInfo: source?.contactInfo === null ? undefined : apiContactInfoDtoAdapter(source?.contactInfo),
    Items: source?.items?.map((item) => apiQuotationSessionFinalProposalItemAltDtoAdapter(item)),
    Quotation: source?.quotation,
    TradeGuid: source?.tradeGuid,
  };
}
