import { ComplaintType } from '../../models/complaint-type.interface';
import { ApiComplaintTypeDto } from '../../../swagger/models/api-complaint-type-dto';
import { apiComplaintTypeEnumAdapter } from '../enums/api-complaint-type-enum.adapter';

export const apiComplaintTypeDtoAdapter = (source?: ComplaintType | null): ApiComplaintTypeDto => {
  return {
    Description: source?.description,
    NeedComment: source?.needComment,
    Type: source?.type === null ? undefined : apiComplaintTypeEnumAdapter(source?.type),
  };
}
