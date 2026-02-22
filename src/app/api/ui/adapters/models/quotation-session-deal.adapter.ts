import { ApiQuotationSessionDealDto } from '../../../swagger/models/api-quotation-session-deal-dto';
import { QuotationSessionDeal } from '../../models/quotation-session-deal.interface';
import { dealStateEnumAdapter } from '../enums/deal-state-enum.adapter';

export const quotationSessionDealAdapter = (source?: ApiQuotationSessionDealDto | null): QuotationSessionDeal => {
  return {
    dealId: source?.DealId,
    dealState: source?.DealState === null ? undefined : dealStateEnumAdapter(source?.DealState),
    participantFullName: source?.ParticipantFullName,
  };
}
