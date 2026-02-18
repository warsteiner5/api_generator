import { ApiRequirementRequestStateEnum } from '../../../swagger/models/api-requirement-request-state-enum';
import { RequirementRequestStateEnum } from '../../enums/requirement-request-state.enum';

export function adaptRequirementRequestStateEnumToUI(source?: ApiRequirementRequestStateEnum | null): RequirementRequestStateEnum {
  switch (source) {
    case ApiRequirementRequestStateEnum.Draft:
      return RequirementRequestStateEnum.Draft;
    case ApiRequirementRequestStateEnum.WaitForStart:
      return RequirementRequestStateEnum.WaitForStart;
    case ApiRequirementRequestStateEnum.FillingApplications:
      return RequirementRequestStateEnum.FillingApplications;
    case ApiRequirementRequestStateEnum.Completed:
      return RequirementRequestStateEnum.Completed;
    case ApiRequirementRequestStateEnum.Canceled:
      return RequirementRequestStateEnum.Canceled;
    default:
      throw new Error(`Enum value is not defined: ApiRequirementRequestStateEnum=${String(source)}`);
  }
}
