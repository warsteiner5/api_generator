import { QuotationSessionDeal } from '../../models/quotation-session-deal.interface';
import { ApiQuotationSessionDealDto } from '../../../swagger/models/api-quotation-session-deal-dto';
import { apiDealStateEnumAdapter } from '../enums/api-deal-state-enum.adapter';

export const apiQuotationSessionDealDtoAdapter = (source?: QuotationSessionDeal | null): ApiQuotationSessionDealDto => {
  return {
    DealId: source?.dealId,
    DealState: source?.dealState === null ? undefined : apiDealStateEnumAdapter(source?.dealState),
    ParticipantFullName: source?.participantFullName,
  };
}
