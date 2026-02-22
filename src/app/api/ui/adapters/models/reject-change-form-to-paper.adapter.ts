import { ApiRejectChangeFormToPaperDto } from '../../../swagger/models/api-reject-change-form-to-paper-dto';
import { RejectChangeFormToPaper } from '../../models/reject-change-form-to-paper.interface';
import { dealObjectEnumAdapter } from '../enums/deal-object-enum.adapter';

export const rejectChangeFormToPaperAdapter = (source?: ApiRejectChangeFormToPaperDto | null): RejectChangeFormToPaper => {
  return {
    dealId: source?.DealId,
    dealObject: source?.DealObject === null ? undefined : dealObjectEnumAdapter(source?.DealObject),
  };
}
