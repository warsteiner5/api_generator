import { RejectChangeFormToPaper } from '../../models/reject-change-form-to-paper.interface';
import { ApiRejectChangeFormToPaperDto } from '../../../swagger/models/api-reject-change-form-to-paper-dto';
import { adaptApiDealObjectEnum } from './api-deal-object-enum.adapter';

export function adaptApiRejectChangeFormToPaperDto(source?: RejectChangeFormToPaper | null): ApiRejectChangeFormToPaperDto {
  return {
    DealId: source?.dealId,
    DealObject: adaptApiDealObjectEnum(source?.dealObject),
  };
}
