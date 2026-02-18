import { ChangeForm } from '../../models/change-form.interface';
import { ApiChangeFormDto } from '../../../swagger/models/api-change-form-dto';
import { adaptApiDealFormEnum } from './api-deal-form-enum.adapter';

export function adaptApiChangeFormDto(source?: ChangeForm | null): ApiChangeFormDto {
  return {
    DealForm: adaptApiDealFormEnum(source?.dealForm),
    DealId: source?.dealId,
    TradeId: source?.tradeId,
  };
}
