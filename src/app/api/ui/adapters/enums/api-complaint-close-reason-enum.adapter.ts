import { ComplaintCloseReasonEnum } from '../../enums/complaint-close-reason.enum';
import { ApiComplaintCloseReasonEnum } from '../../../swagger/models/api-complaint-close-reason-enum';

export const apiComplaintCloseReasonEnumAdapter = (source?: ComplaintCloseReasonEnum | null): ApiComplaintCloseReasonEnum => {
  switch (source) {
    case ComplaintCloseReasonEnum.Fixed:
      return ApiComplaintCloseReasonEnum.Fixed;
    case ComplaintCloseReasonEnum.Removed:
      return ApiComplaintCloseReasonEnum.Removed;
    case ComplaintCloseReasonEnum.Correct:
      return ApiComplaintCloseReasonEnum.Correct;
    case ComplaintCloseReasonEnum.Other:
      return ApiComplaintCloseReasonEnum.Other;
    default:
      throw new Error(`Enum value is not defined: ComplaintCloseReasonEnum=${String(source)}`);
  }
}
