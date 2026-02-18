import { ApiComplaintCloseReasonEnum } from '../../../swagger/models/api-complaint-close-reason-enum';
import { ComplaintCloseReasonEnum } from '../../enums/complaint-close-reason.enum';

export function adaptComplaintCloseReasonEnumToUI(source?: ApiComplaintCloseReasonEnum | null): ComplaintCloseReasonEnum {
  switch (source) {
    case ApiComplaintCloseReasonEnum.Fixed:
      return ComplaintCloseReasonEnum.Fixed;
    case ApiComplaintCloseReasonEnum.Removed:
      return ComplaintCloseReasonEnum.Removed;
    case ApiComplaintCloseReasonEnum.Correct:
      return ComplaintCloseReasonEnum.Correct;
    case ApiComplaintCloseReasonEnum.Other:
      return ComplaintCloseReasonEnum.Other;
    default:
      throw new Error(`Enum value is not defined: ApiComplaintCloseReasonEnum=${String(source)}`);
  }
}
