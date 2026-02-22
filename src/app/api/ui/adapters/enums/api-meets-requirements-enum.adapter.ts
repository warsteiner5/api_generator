import { MeetsRequirementsEnum } from '../../enums/meets-requirements.enum';
import { ApiMeetsRequirementsEnum } from '../../../swagger/models/api-meets-requirements-enum';

export const apiMeetsRequirementsEnumAdapter = (source?: MeetsRequirementsEnum | null): ApiMeetsRequirementsEnum => {
  switch (source) {
    case MeetsRequirementsEnum.NotDefined:
      return ApiMeetsRequirementsEnum.NotDefined;
    case MeetsRequirementsEnum.Meet:
      return ApiMeetsRequirementsEnum.Meet;
    case MeetsRequirementsEnum.DoesNotMeet:
      return ApiMeetsRequirementsEnum.DoesNotMeet;
    case MeetsRequirementsEnum.Approved:
      return ApiMeetsRequirementsEnum.Approved;
    case MeetsRequirementsEnum.DealRejection:
      return ApiMeetsRequirementsEnum.DealRejection;
    default:
      throw new Error(`Enum value is not defined: MeetsRequirementsEnum=${String(source)}`);
  }
}
