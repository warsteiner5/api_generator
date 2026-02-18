import { QuotationSessionFinalProposalItemAlt } from '../../models/quotation-session-final-proposal-item-alt.interface';
import { ApiQuotationSessionFinalProposalItemAltDto } from '../../../swagger/models/api-quotation-session-final-proposal-item';
import { adaptApiOkeiCodeMarketDto } from './api-okei-code-market-dto.adapter';

export function adaptApiQuotationSessionFinalProposalItemAltDto(source?: QuotationSessionFinalProposalItemAlt | null): ApiQuotationSessionFinalProposalItemAltDto {
  return {
    Id: source?.id,
    Name: source?.name,
    Okei: adaptApiOkeiCodeMarketDto(source?.okei),
    Quantity: source?.quantity,
    Quotation: source?.quotation,
  };
}
