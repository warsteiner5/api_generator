import { ApiManufactureTypeEnum } from '../../../swagger/models/api-manufacture-type-enum';
import { ManufactureTypeEnum } from '../../enums/manufacture-type.enum';

export function adaptManufactureTypeEnumToUI(source?: ApiManufactureTypeEnum | null): ManufactureTypeEnum {
  switch (source) {
    case ApiManufactureTypeEnum.None:
      return ManufactureTypeEnum.None;
    case ApiManufactureTypeEnum.RussianFederation:
      return ManufactureTypeEnum.RussianFederation;
    case ApiManufactureTypeEnum.ForeignCountry:
      return ManufactureTypeEnum.ForeignCountry;
    default:
      throw new Error(`Enum value is not defined: ApiManufactureTypeEnum=${String(source)}`);
  }
}
