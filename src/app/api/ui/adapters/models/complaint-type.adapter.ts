import { ApiComplaintTypeDto } from '../../../swagger/models/api-complaint-type-dto';
import { ComplaintType } from '../../models/complaint-type.interface';
import { complaintTypeEnumAdapter } from '../enums/complaint-type-enum.adapter';

export const complaintTypeAdapter = (source?: ApiComplaintTypeDto | null): ComplaintType => {
  return {
    description: source?.Description,
    needComment: source?.NeedComment,
    type: source?.Type === null ? undefined : complaintTypeEnumAdapter(source?.Type),
  };
}
