import { QuotationSessionFinalProposalItemAlt } from '../../models/quotation-session-final-proposal-item-alt.interface';
import { ApiQuotationSessionFinalProposalItemAltDto } from '../../../swagger/models/api-quotation-session-final-proposal-item';
import { apiOkeiCodeMarketDtoAdapter } from './api-okei-code-market-dto.adapter';

export const apiQuotationSessionFinalProposalItemAltDtoAdapter = (source?: QuotationSessionFinalProposalItemAlt | null): ApiQuotationSessionFinalProposalItemAltDto => {
  return {
    Id: source?.id,
    Name: source?.name,
    Okei: source?.okei === null ? undefined : apiOkeiCodeMarketDtoAdapter(source?.okei),
    Quantity: source?.quantity,
    Quotation: source?.quotation,
  };
}
