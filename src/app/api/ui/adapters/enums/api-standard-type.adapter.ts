import { StandardTypeAltEnum } from '../../enums/standard-type-alt.enum';
import { ApiStandardTypeAltEnum } from '../../../swagger/models/api-standard-type';

export const apiStandardTypeAltEnumAdapter = (source?: StandardTypeAltEnum | null): ApiStandardTypeAltEnum => {
  switch (source) {
    case StandardTypeAltEnum.GOST:
      return ApiStandardTypeAltEnum.GOST;
    case StandardTypeAltEnum.SNIP:
      return ApiStandardTypeAltEnum.SNIP;
    case StandardTypeAltEnum.SanPIN:
      return ApiStandardTypeAltEnum.SanPIN;
    case StandardTypeAltEnum.RD:
      return ApiStandardTypeAltEnum.RD;
    case StandardTypeAltEnum.SP:
      return ApiStandardTypeAltEnum.SP;
    default:
      throw new Error(`Enum value is not defined: StandardTypeAltEnum=${String(source)}`);
  }
}
