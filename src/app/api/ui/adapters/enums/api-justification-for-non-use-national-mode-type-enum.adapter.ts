import { JustificationForNonUseNationalModeTypeEnum } from '../../enums/justification-for-non-use-national-mode-type.enum';
import { ApiJustificationForNonUseNationalModeTypeEnum } from '../../../swagger/models/api-justification-for-non-use-national-mode-type-enum';

export const apiJustificationForNonUseNationalModeTypeEnumAdapter = (source?: JustificationForNonUseNationalModeTypeEnum | null): ApiJustificationForNonUseNationalModeTypeEnum => {
  switch (source) {
    case JustificationForNonUseNationalModeTypeEnum.None:
      return ApiJustificationForNonUseNationalModeTypeEnum.None;
    case JustificationForNonUseNationalModeTypeEnum.Type5a:
      return ApiJustificationForNonUseNationalModeTypeEnum.Type5a;
    case JustificationForNonUseNationalModeTypeEnum.Type5v:
      return ApiJustificationForNonUseNationalModeTypeEnum.Type5v;
    case JustificationForNonUseNationalModeTypeEnum.Type5g:
      return ApiJustificationForNonUseNationalModeTypeEnum.Type5g;
    case JustificationForNonUseNationalModeTypeEnum.Type5d:
      return ApiJustificationForNonUseNationalModeTypeEnum.Type5d;
    case JustificationForNonUseNationalModeTypeEnum.Type5e:
      return ApiJustificationForNonUseNationalModeTypeEnum.Type5e;
    case JustificationForNonUseNationalModeTypeEnum.Type5j:
      return ApiJustificationForNonUseNationalModeTypeEnum.Type5j;
    case JustificationForNonUseNationalModeTypeEnum.Type5z:
      return ApiJustificationForNonUseNationalModeTypeEnum.Type5z;
    case JustificationForNonUseNationalModeTypeEnum.Type5i:
      return ApiJustificationForNonUseNationalModeTypeEnum.Type5i;
    case JustificationForNonUseNationalModeTypeEnum.Type5k:
      return ApiJustificationForNonUseNationalModeTypeEnum.Type5k;
    case JustificationForNonUseNationalModeTypeEnum.Type5l:
      return ApiJustificationForNonUseNationalModeTypeEnum.Type5l;
    case JustificationForNonUseNationalModeTypeEnum.Type5m:
      return ApiJustificationForNonUseNationalModeTypeEnum.Type5m;
    case JustificationForNonUseNationalModeTypeEnum.Type5n:
      return ApiJustificationForNonUseNationalModeTypeEnum.Type5n;
    case JustificationForNonUseNationalModeTypeEnum.Type6a:
      return ApiJustificationForNonUseNationalModeTypeEnum.Type6a;
    case JustificationForNonUseNationalModeTypeEnum.Type6b:
      return ApiJustificationForNonUseNationalModeTypeEnum.Type6b;
    case JustificationForNonUseNationalModeTypeEnum.Type6v:
      return ApiJustificationForNonUseNationalModeTypeEnum.Type6v;
    case JustificationForNonUseNationalModeTypeEnum.Type6g:
      return ApiJustificationForNonUseNationalModeTypeEnum.Type6g;
    case JustificationForNonUseNationalModeTypeEnum.Other:
      return ApiJustificationForNonUseNationalModeTypeEnum.Other;
    default:
      throw new Error(`Enum value is not defined: JustificationForNonUseNationalModeTypeEnum=${String(source)}`);
  }
}
