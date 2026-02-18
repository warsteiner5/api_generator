import { ApiQuotationSessionFinalProposalItemAltDto } from '../../../swagger/models/api-quotation-session-final-proposal-item';
import { QuotationSessionFinalProposalItemAlt } from '../../models/quotation-session-final-proposal-item-alt.interface';
import { adaptOkeiCodeMarketToUI } from './okei-code-market.adapter';

export function adaptQuotationSessionFinalProposalItemAltToUI(source?: ApiQuotationSessionFinalProposalItemAltDto | null): QuotationSessionFinalProposalItemAlt {
  return {
    id: source?.Id ?? 0,
    name: source?.Name ?? '',
    okei: adaptOkeiCodeMarketToUI(source?.Okei),
    quantity: source?.Quantity ?? 0,
    quotation: source?.Quotation ?? 0,
  };
}
