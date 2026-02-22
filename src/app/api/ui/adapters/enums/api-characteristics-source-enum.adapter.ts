import { CharacteristicsSourceEnum } from '../../enums/characteristics-source.enum';
import { ApiCharacteristicsSourceEnum } from '../../../swagger/models/api-characteristics-source-enum';

export const apiCharacteristicsSourceEnumAdapter = (source?: CharacteristicsSourceEnum | null): ApiCharacteristicsSourceEnum => {
  switch (source) {
    case CharacteristicsSourceEnum.Manually:
      return ApiCharacteristicsSourceEnum.Manually;
    case CharacteristicsSourceEnum.ExcelFile:
      return ApiCharacteristicsSourceEnum.ExcelFile;
    case CharacteristicsSourceEnum.OfferedBySupplier:
      return ApiCharacteristicsSourceEnum.OfferedBySupplier;
    default:
      throw new Error(`Enum value is not defined: CharacteristicsSourceEnum=${String(source)}`);
  }
}
