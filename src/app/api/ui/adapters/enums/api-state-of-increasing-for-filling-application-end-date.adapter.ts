import { StateOfIncreasingForFillingApplicationEndDateAltEnum } from '../../enums/state-of-increasing-for-filling-application-end-date-alt.enum';
import { ApiStateOfIncreasingForFillingApplicationEndDateAltEnum } from '../../../swagger/models/api-state-of-increasing-for-filling-application-end-date';

export const apiStateOfIncreasingForFillingApplicationEndDateAltEnumAdapter = (source?: StateOfIncreasingForFillingApplicationEndDateAltEnum | null): ApiStateOfIncreasingForFillingApplicationEndDateAltEnum => {
  switch (source) {
    case StateOfIncreasingForFillingApplicationEndDateAltEnum.NeverIncreased:
      return ApiStateOfIncreasingForFillingApplicationEndDateAltEnum.NeverIncreased;
    case StateOfIncreasingForFillingApplicationEndDateAltEnum.IncreasedWhenNotTookPlace:
      return ApiStateOfIncreasingForFillingApplicationEndDateAltEnum.IncreasedWhenNotTookPlace;
    case StateOfIncreasingForFillingApplicationEndDateAltEnum.IncreasedWhenAllApplicationsDoNotMeetRequirement:
      return ApiStateOfIncreasingForFillingApplicationEndDateAltEnum.IncreasedWhenAllApplicationsDoNotMeetRequirement;
    default:
      throw new Error(`Enum value is not defined: StateOfIncreasingForFillingApplicationEndDateAltEnum=${String(source)}`);
  }
}
