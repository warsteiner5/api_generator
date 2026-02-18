import { ApplicationSourceEnum } from '../../enums/application-source.enum';
import { ApiApplicationSourceEnum } from '../../../swagger/models/api-application-source-enum';

export function adaptApiApplicationSourceEnum(source?: ApplicationSourceEnum | null): ApiApplicationSourceEnum {
  switch (source) {
    case ApplicationSourceEnum.Source223:
      return ApiApplicationSourceEnum.Source223;
    case ApplicationSourceEnum.Zmo:
      return ApiApplicationSourceEnum.Zmo;
    case ApplicationSourceEnum.Market:
      return ApiApplicationSourceEnum.Market;
    default:
      throw new Error(`Enum value is not defined: ApplicationSourceEnum=${String(source)}`);
  }
}
