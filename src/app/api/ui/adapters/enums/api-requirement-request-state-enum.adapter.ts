import { RequirementRequestStateEnum } from '../../enums/requirement-request-state.enum';
import { ApiRequirementRequestStateEnum } from '../../../swagger/models/api-requirement-request-state-enum';

export const apiRequirementRequestStateEnumAdapter = (source?: RequirementRequestStateEnum | null): ApiRequirementRequestStateEnum => {
  switch (source) {
    case RequirementRequestStateEnum.Draft:
      return ApiRequirementRequestStateEnum.Draft;
    case RequirementRequestStateEnum.WaitForStart:
      return ApiRequirementRequestStateEnum.WaitForStart;
    case RequirementRequestStateEnum.FillingApplications:
      return ApiRequirementRequestStateEnum.FillingApplications;
    case RequirementRequestStateEnum.Completed:
      return ApiRequirementRequestStateEnum.Completed;
    case RequirementRequestStateEnum.Canceled:
      return ApiRequirementRequestStateEnum.Canceled;
    default:
      throw new Error(`Enum value is not defined: RequirementRequestStateEnum=${String(source)}`);
  }
}
