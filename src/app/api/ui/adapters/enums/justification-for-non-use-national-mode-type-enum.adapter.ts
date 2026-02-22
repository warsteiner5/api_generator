import { ApiJustificationForNonUseNationalModeTypeEnum } from '../../../swagger/models/api-justification-for-non-use-national-mode-type-enum';
import { JustificationForNonUseNationalModeTypeEnum } from '../../enums/justification-for-non-use-national-mode-type.enum';

export const justificationForNonUseNationalModeTypeEnumAdapter = (source?: ApiJustificationForNonUseNationalModeTypeEnum | null): JustificationForNonUseNationalModeTypeEnum => {
  switch (source) {
    case ApiJustificationForNonUseNationalModeTypeEnum.None:
      return JustificationForNonUseNationalModeTypeEnum.None;
    case ApiJustificationForNonUseNationalModeTypeEnum.Type5a:
      return JustificationForNonUseNationalModeTypeEnum.Type5a;
    case ApiJustificationForNonUseNationalModeTypeEnum.Type5v:
      return JustificationForNonUseNationalModeTypeEnum.Type5v;
    case ApiJustificationForNonUseNationalModeTypeEnum.Type5g:
      return JustificationForNonUseNationalModeTypeEnum.Type5g;
    case ApiJustificationForNonUseNationalModeTypeEnum.Type5d:
      return JustificationForNonUseNationalModeTypeEnum.Type5d;
    case ApiJustificationForNonUseNationalModeTypeEnum.Type5e:
      return JustificationForNonUseNationalModeTypeEnum.Type5e;
    case ApiJustificationForNonUseNationalModeTypeEnum.Type5j:
      return JustificationForNonUseNationalModeTypeEnum.Type5j;
    case ApiJustificationForNonUseNationalModeTypeEnum.Type5z:
      return JustificationForNonUseNationalModeTypeEnum.Type5z;
    case ApiJustificationForNonUseNationalModeTypeEnum.Type5i:
      return JustificationForNonUseNationalModeTypeEnum.Type5i;
    case ApiJustificationForNonUseNationalModeTypeEnum.Type5k:
      return JustificationForNonUseNationalModeTypeEnum.Type5k;
    case ApiJustificationForNonUseNationalModeTypeEnum.Type5l:
      return JustificationForNonUseNationalModeTypeEnum.Type5l;
    case ApiJustificationForNonUseNationalModeTypeEnum.Type5m:
      return JustificationForNonUseNationalModeTypeEnum.Type5m;
    case ApiJustificationForNonUseNationalModeTypeEnum.Type5n:
      return JustificationForNonUseNationalModeTypeEnum.Type5n;
    case ApiJustificationForNonUseNationalModeTypeEnum.Type6a:
      return JustificationForNonUseNationalModeTypeEnum.Type6a;
    case ApiJustificationForNonUseNationalModeTypeEnum.Type6b:
      return JustificationForNonUseNationalModeTypeEnum.Type6b;
    case ApiJustificationForNonUseNationalModeTypeEnum.Type6v:
      return JustificationForNonUseNationalModeTypeEnum.Type6v;
    case ApiJustificationForNonUseNationalModeTypeEnum.Type6g:
      return JustificationForNonUseNationalModeTypeEnum.Type6g;
    case ApiJustificationForNonUseNationalModeTypeEnum.Other:
      return JustificationForNonUseNationalModeTypeEnum.Other;
    default:
      throw new Error(`Enum value is not defined: ApiJustificationForNonUseNationalModeTypeEnum=${String(source)}`);
  }
}
