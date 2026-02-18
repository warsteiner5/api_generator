import { ApiStateOfIncreasingForFillingApplicationEndDateAltEnum } from '../../../swagger/models/api-state-of-increasing-for-filling-application-end-date';
import { StateOfIncreasingForFillingApplicationEndDateAltEnum } from '../../enums/state-of-increasing-for-filling-application-end-date-alt.enum';

export function adaptStateOfIncreasingForFillingApplicationEndDateAltEnumToUI(source?: ApiStateOfIncreasingForFillingApplicationEndDateAltEnum | null): StateOfIncreasingForFillingApplicationEndDateAltEnum {
  switch (source) {
    case ApiStateOfIncreasingForFillingApplicationEndDateAltEnum.NeverIncreased:
      return StateOfIncreasingForFillingApplicationEndDateAltEnum.NeverIncreased;
    case ApiStateOfIncreasingForFillingApplicationEndDateAltEnum.IncreasedWhenNotTookPlace:
      return StateOfIncreasingForFillingApplicationEndDateAltEnum.IncreasedWhenNotTookPlace;
    case ApiStateOfIncreasingForFillingApplicationEndDateAltEnum.IncreasedWhenAllApplicationsDoNotMeetRequirement:
      return StateOfIncreasingForFillingApplicationEndDateAltEnum.IncreasedWhenAllApplicationsDoNotMeetRequirement;
    default:
      throw new Error(`Enum value is not defined: ApiStateOfIncreasingForFillingApplicationEndDateAltEnum=${String(source)}`);
  }
}
