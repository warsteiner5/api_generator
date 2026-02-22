import { RejectChangeFormToPaper } from '../../models/reject-change-form-to-paper.interface';
import { ApiRejectChangeFormToPaperDto } from '../../../swagger/models/api-reject-change-form-to-paper-dto';
import { apiDealObjectEnumAdapter } from '../enums/api-deal-object-enum.adapter';

export const apiRejectChangeFormToPaperDtoAdapter = (source?: RejectChangeFormToPaper | null): ApiRejectChangeFormToPaperDto => {
  return {
    DealId: source?.dealId,
    DealObject: source?.dealObject === null ? undefined : apiDealObjectEnumAdapter(source?.dealObject),
  };
}
