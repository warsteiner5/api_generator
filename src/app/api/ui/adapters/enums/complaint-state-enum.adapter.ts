import { ApiComplaintStateEnum } from '../../../swagger/models/api-complaint-state-enum';
import { ComplaintStateEnum } from '../../enums/complaint-state.enum';

export const complaintStateEnumAdapter = (source?: ApiComplaintStateEnum | null): ComplaintStateEnum => {
  switch (source) {
    case ApiComplaintStateEnum.New:
      return ComplaintStateEnum.New;
    case ApiComplaintStateEnum.Done:
      return ComplaintStateEnum.Done;
    case ApiComplaintStateEnum.Cancelled:
      return ComplaintStateEnum.Cancelled;
    default:
      throw new Error(`Enum value is not defined: ApiComplaintStateEnum=${String(source)}`);
  }
}
