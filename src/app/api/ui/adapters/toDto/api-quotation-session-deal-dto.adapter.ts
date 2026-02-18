import { QuotationSessionDeal } from '../../models/quotation-session-deal.interface';
import { ApiQuotationSessionDealDto } from '../../../swagger/models/api-quotation-session-deal-dto';
import { adaptApiDealStateEnum } from './api-deal-state-enum.adapter';

export function adaptApiQuotationSessionDealDto(source?: QuotationSessionDeal | null): ApiQuotationSessionDealDto {
  return {
    DealId: source?.dealId,
    DealState: adaptApiDealStateEnum(source?.dealState),
    ParticipantFullName: source?.participantFullName,
  };
}
