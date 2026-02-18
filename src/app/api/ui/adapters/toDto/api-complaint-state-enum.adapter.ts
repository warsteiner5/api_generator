import { ComplaintStateEnum } from '../../enums/complaint-state.enum';
import { ApiComplaintStateEnum } from '../../../swagger/models/api-complaint-state-enum';

export function adaptApiComplaintStateEnum(source?: ComplaintStateEnum | null): ApiComplaintStateEnum {
  switch (source) {
    case ComplaintStateEnum.New:
      return ApiComplaintStateEnum.New;
    case ComplaintStateEnum.Done:
      return ApiComplaintStateEnum.Done;
    case ComplaintStateEnum.Cancelled:
      return ApiComplaintStateEnum.Cancelled;
    default:
      throw new Error(`Enum value is not defined: ComplaintStateEnum=${String(source)}`);
  }
}
