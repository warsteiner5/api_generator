import { ApiCharacteristicsSourceEnum } from '../../../swagger/models/api-characteristics-source-enum';
import { CharacteristicsSourceEnum } from '../../enums/characteristics-source.enum';

export const characteristicsSourceEnumAdapter = (source?: ApiCharacteristicsSourceEnum | null): CharacteristicsSourceEnum => {
  switch (source) {
    case ApiCharacteristicsSourceEnum.Manually:
      return CharacteristicsSourceEnum.Manually;
    case ApiCharacteristicsSourceEnum.ExcelFile:
      return CharacteristicsSourceEnum.ExcelFile;
    case ApiCharacteristicsSourceEnum.OfferedBySupplier:
      return CharacteristicsSourceEnum.OfferedBySupplier;
    default:
      throw new Error(`Enum value is not defined: ApiCharacteristicsSourceEnum=${String(source)}`);
  }
}
