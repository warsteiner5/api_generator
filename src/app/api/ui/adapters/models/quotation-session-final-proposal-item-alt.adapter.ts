import { ApiQuotationSessionFinalProposalItemAltDto } from '../../../swagger/models/api-quotation-session-final-proposal-item';
import { QuotationSessionFinalProposalItemAlt } from '../../models/quotation-session-final-proposal-item-alt.interface';
import { okeiCodeMarketAdapter } from './okei-code-market.adapter';

export const quotationSessionFinalProposalItemAltAdapter = (source?: ApiQuotationSessionFinalProposalItemAltDto | null): QuotationSessionFinalProposalItemAlt => {
  return {
    id: source?.Id,
    name: source?.Name,
    okei: source?.Okei === null ? undefined : okeiCodeMarketAdapter(source?.Okei),
    quantity: source?.Quantity,
    quotation: source?.Quotation,
  };
}
