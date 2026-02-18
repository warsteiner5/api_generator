import { ApiQuotationSessionDealDto } from '../../../swagger/models/api-quotation-session-deal-dto';
import { QuotationSessionDeal } from '../../models/quotation-session-deal.interface';
import { adaptDealStateEnumToUI } from './deal-state-enum.adapter';

export function adaptQuotationSessionDealToUI(source?: ApiQuotationSessionDealDto | null): QuotationSessionDeal {
  return {
    dealId: source?.DealId ?? 0,
    dealState: adaptDealStateEnumToUI(source?.DealState),
    participantFullName: source?.ParticipantFullName ?? '',
  };
}
