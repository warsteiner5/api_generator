import { ApiApplicationSourceEnum } from '../../../swagger/models/api-application-source-enum';
import { ApplicationSourceEnum } from '../../enums/application-source.enum';

export const applicationSourceEnumAdapter = (source?: ApiApplicationSourceEnum | null): ApplicationSourceEnum => {
  switch (source) {
    case ApiApplicationSourceEnum.Source223:
      return ApplicationSourceEnum.Source223;
    case ApiApplicationSourceEnum.Zmo:
      return ApplicationSourceEnum.Zmo;
    case ApiApplicationSourceEnum.Market:
      return ApplicationSourceEnum.Market;
    default:
      throw new Error(`Enum value is not defined: ApiApplicationSourceEnum=${String(source)}`);
  }
}
