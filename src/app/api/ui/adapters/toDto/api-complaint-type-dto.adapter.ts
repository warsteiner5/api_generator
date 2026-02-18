import { ComplaintType } from '../../models/complaint-type.interface';
import { ApiComplaintTypeDto } from '../../../swagger/models/api-complaint-type-dto';
import { adaptApiComplaintTypeEnum } from './api-complaint-type-enum.adapter';

export function adaptApiComplaintTypeDto(source?: ComplaintType | null): ApiComplaintTypeDto {
  return {
    Description: source?.description,
    NeedComment: source?.needComment,
    Type: adaptApiComplaintTypeEnum(source?.type),
  };
}
