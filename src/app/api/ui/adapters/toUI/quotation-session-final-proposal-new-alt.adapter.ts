import { ApiQuotationSessionFinalProposalNewAltDto } from '../../../swagger/models/api-quotation-session-final-proposal-new';
import { QuotationSessionFinalProposalNewAlt } from '../../models/quotation-session-final-proposal-new-alt.interface';
import { adaptAdditionalServiceToUI } from './additional-service.adapter';
import { adaptApplicationDocumentDto2ToUI } from './application-document-dto-2.adapter';
import { adaptContactInfoToUI } from './contact-info.adapter';
import { adaptQuotationSessionFinalProposalItemAltToUI } from './quotation-session-final-proposal-item-alt.adapter';

export function adaptQuotationSessionFinalProposalNewAltToUI(source?: ApiQuotationSessionFinalProposalNewAltDto | null): QuotationSessionFinalProposalNewAlt {
  return {
    additionalServices: (source?.AdditionalServices ?? []).map((item) => adaptAdditionalServiceToUI(item)),
    applicationDocuments: (source?.ApplicationDocuments ?? []).map((item) => adaptApplicationDocumentDto2ToUI(item)),
    bankingDetailId: source?.BankingDetailId ?? 0,
    biddingQuotation: source?.BiddingQuotation ?? 0,
    contactInfo: adaptContactInfoToUI(source?.ContactInfo),
    items: (source?.Items ?? []).map((item) => adaptQuotationSessionFinalProposalItemAltToUI(item)),
    quotation: source?.Quotation ?? 0,
    tradeGuid: source?.TradeGuid ?? '',
  };
}
