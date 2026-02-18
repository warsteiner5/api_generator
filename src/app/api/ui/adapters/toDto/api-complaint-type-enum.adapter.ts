import { ComplaintTypeEnum } from '../../enums/complaint-type.enum';
import { ApiComplaintTypeEnum } from '../../../swagger/models/api-complaint-type-enum';

export function adaptApiComplaintTypeEnum(source?: ComplaintTypeEnum | null): ApiComplaintTypeEnum {
  switch (source) {
    case ComplaintTypeEnum.WrongDescription:
      return ApiComplaintTypeEnum.WrongDescription;
    case ComplaintTypeEnum.IllegalContent:
      return ApiComplaintTypeEnum.IllegalContent;
    case ComplaintTypeEnum.Other:
      return ApiComplaintTypeEnum.Other;
    default:
      throw new Error(`Enum value is not defined: ComplaintTypeEnum=${String(source)}`);
  }
}
