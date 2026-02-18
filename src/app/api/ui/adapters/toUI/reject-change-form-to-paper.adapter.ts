import { ApiRejectChangeFormToPaperDto } from '../../../swagger/models/api-reject-change-form-to-paper-dto';
import { RejectChangeFormToPaper } from '../../models/reject-change-form-to-paper.interface';
import { adaptDealObjectEnumToUI } from './deal-object-enum.adapter';

export function adaptRejectChangeFormToPaperToUI(source?: ApiRejectChangeFormToPaperDto | null): RejectChangeFormToPaper {
  return {
    dealId: source?.DealId ?? 0,
    dealObject: adaptDealObjectEnumToUI(source?.DealObject),
  };
}
