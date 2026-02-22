import { ChangeForm } from '../../models/change-form.interface';
import { ApiChangeFormDto } from '../../../swagger/models/api-change-form-dto';
import { apiDealFormEnumAdapter } from '../enums/api-deal-form-enum.adapter';

export const apiChangeFormDtoAdapter = (source?: ChangeForm | null): ApiChangeFormDto => {
  return {
    DealForm: source?.dealForm === null ? undefined : apiDealFormEnumAdapter(source?.dealForm),
    DealId: source?.dealId,
    TradeId: source?.tradeId,
  };
}
