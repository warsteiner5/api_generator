import { ApiStandardTypeAltEnum } from '../../../swagger/models/api-standard-type';
import { StandardTypeAltEnum } from '../../enums/standard-type-alt.enum';

export function adaptStandardTypeAltEnumToUI(source?: ApiStandardTypeAltEnum | null): StandardTypeAltEnum {
  switch (source) {
    case ApiStandardTypeAltEnum.GOST:
      return StandardTypeAltEnum.GOST;
    case ApiStandardTypeAltEnum.SNIP:
      return StandardTypeAltEnum.SNIP;
    case ApiStandardTypeAltEnum.SanPIN:
      return StandardTypeAltEnum.SanPIN;
    case ApiStandardTypeAltEnum.RD:
      return StandardTypeAltEnum.RD;
    case ApiStandardTypeAltEnum.SP:
      return StandardTypeAltEnum.SP;
    default:
      throw new Error(`Enum value is not defined: ApiStandardTypeAltEnum=${String(source)}`);
  }
}
