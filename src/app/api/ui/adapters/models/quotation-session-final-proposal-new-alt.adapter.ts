import { ApiQuotationSessionFinalProposalNewAltDto } from '../../../swagger/models/api-quotation-session-final-proposal-new';
import { QuotationSessionFinalProposalNewAlt } from '../../models/quotation-session-final-proposal-new-alt.interface';
import { additionalServiceAdapter } from './additional-service.adapter';
import { applicationDocumentDto2Adapter } from './application-document-dto-2.adapter';
import { contactInfoAdapter } from './contact-info.adapter';
import { quotationSessionFinalProposalItemAltAdapter } from './quotation-session-final-proposal-item-alt.adapter';

export const quotationSessionFinalProposalNewAltAdapter = (source?: ApiQuotationSessionFinalProposalNewAltDto | null): QuotationSessionFinalProposalNewAlt => {
  return {
    additionalServices: source?.AdditionalServices?.map((item) => additionalServiceAdapter(item)),
    applicationDocuments: source?.ApplicationDocuments?.map((item) => applicationDocumentDto2Adapter(item)),
    bankingDetailId: source?.BankingDetailId,
    biddingQuotation: source?.BiddingQuotation,
    contactInfo: source?.ContactInfo === null ? undefined : contactInfoAdapter(source?.ContactInfo),
    items: source?.Items?.map((item) => quotationSessionFinalProposalItemAltAdapter(item)),
    quotation: source?.Quotation,
    tradeGuid: source?.TradeGuid,
  };
}
