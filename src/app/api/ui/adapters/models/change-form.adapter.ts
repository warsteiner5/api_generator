import { ApiChangeFormDto } from '../../../swagger/models/api-change-form-dto';
import { ChangeForm } from '../../models/change-form.interface';
import { dealFormEnumAdapter } from '../enums/deal-form-enum.adapter';

export const changeFormAdapter = (source?: ApiChangeFormDto | null): ChangeForm => {
  return {
    dealForm: source?.DealForm === null ? undefined : dealFormEnumAdapter(source?.DealForm),
    dealId: source?.DealId,
    tradeId: source?.TradeId,
  };
}
