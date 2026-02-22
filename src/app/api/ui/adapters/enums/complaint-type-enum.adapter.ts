import { ApiComplaintTypeEnum } from '../../../swagger/models/api-complaint-type-enum';
import { ComplaintTypeEnum } from '../../enums/complaint-type.enum';

export const complaintTypeEnumAdapter = (source?: ApiComplaintTypeEnum | null): ComplaintTypeEnum => {
  switch (source) {
    case ApiComplaintTypeEnum.WrongDescription:
      return ComplaintTypeEnum.WrongDescription;
    case ApiComplaintTypeEnum.IllegalContent:
      return ComplaintTypeEnum.IllegalContent;
    case ApiComplaintTypeEnum.Other:
      return ComplaintTypeEnum.Other;
    default:
      throw new Error(`Enum value is not defined: ApiComplaintTypeEnum=${String(source)}`);
  }
}
