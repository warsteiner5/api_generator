import { ApiComplaintTypeDto } from '../../../swagger/models/api-complaint-type-dto';
import { ComplaintType } from '../../models/complaint-type.interface';
import { adaptComplaintTypeEnumToUI } from './complaint-type-enum.adapter';

export function adaptComplaintTypeToUI(source?: ApiComplaintTypeDto | null): ComplaintType {
  return {
    description: source?.Description ?? '',
    needComment: source?.NeedComment ?? false,
    type: adaptComplaintTypeEnumToUI(source?.Type),
  };
}
