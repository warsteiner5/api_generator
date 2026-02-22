import { ApiMeetsRequirementsEnum } from '../../../swagger/models/api-meets-requirements-enum';
import { MeetsRequirementsEnum } from '../../enums/meets-requirements.enum';

export const meetsRequirementsEnumAdapter = (source?: ApiMeetsRequirementsEnum | null): MeetsRequirementsEnum => {
  switch (source) {
    case ApiMeetsRequirementsEnum.NotDefined:
      return MeetsRequirementsEnum.NotDefined;
    case ApiMeetsRequirementsEnum.Meet:
      return MeetsRequirementsEnum.Meet;
    case ApiMeetsRequirementsEnum.DoesNotMeet:
      return MeetsRequirementsEnum.DoesNotMeet;
    case ApiMeetsRequirementsEnum.Approved:
      return MeetsRequirementsEnum.Approved;
    case ApiMeetsRequirementsEnum.DealRejection:
      return MeetsRequirementsEnum.DealRejection;
    default:
      throw new Error(`Enum value is not defined: ApiMeetsRequirementsEnum=${String(source)}`);
  }
}
