import { ApiQuotationSessionFinalProposalAltDto } from '../../../swagger/models/api-quotation-session-final-proposal';
import { QuotationSessionFinalProposalAlt } from '../../models/quotation-session-final-proposal-alt.interface';
import { adaptAdditionalServiceToUI } from './additional-service.adapter';
import { adaptApplicationDocumentDto2ToUI } from './application-document-dto-2.adapter';
import { adaptContactInfoToUI } from './contact-info.adapter';
import { adaptQuotationSessionFinalProposalItemAltToUI } from './quotation-session-final-proposal-item-alt.adapter';

export function adaptQuotationSessionFinalProposalAltToUI(source?: ApiQuotationSessionFinalProposalAltDto | null): QuotationSessionFinalProposalAlt {
  return {
    additionalServices: (source?.AdditionalServices ?? []).map((item) => adaptAdditionalServiceToUI(item)),
    applicationDocuments: (source?.ApplicationDocuments ?? []).map((item) => adaptApplicationDocumentDto2ToUI(item)),
    bankingDetailId: source?.BankingDetailId ?? 0,
    biddingQuotation: source?.BiddingQuotation ?? 0,
    contactInfo: adaptContactInfoToUI(source?.ContactInfo),
    items: (source?.Items ?? []).map((item) => adaptQuotationSessionFinalProposalItemAltToUI(item)),
    quotation: source?.Quotation ?? 0,
    tradeLotId: source?.TradeLotId ?? 0,
  };
}
