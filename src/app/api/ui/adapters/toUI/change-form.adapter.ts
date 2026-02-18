import { ApiChangeFormDto } from '../../../swagger/models/api-change-form-dto';
import { ChangeForm } from '../../models/change-form.interface';
import { adaptDealFormEnumToUI } from './deal-form-enum.adapter';

export function adaptChangeFormToUI(source?: ApiChangeFormDto | null): ChangeForm {
  return {
    dealForm: adaptDealFormEnumToUI(source?.DealForm),
    dealId: source?.DealId ?? 0,
    tradeId: source?.TradeId ?? 0,
  };
}
