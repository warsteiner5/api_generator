import { ManufactureTypeEnum } from '../../enums/manufacture-type.enum';
import { ApiManufactureTypeEnum } from '../../../swagger/models/api-manufacture-type-enum';

export function adaptApiManufactureTypeEnum(source?: ManufactureTypeEnum | null): ApiManufactureTypeEnum {
  switch (source) {
    case ManufactureTypeEnum.None:
      return ApiManufactureTypeEnum.None;
    case ManufactureTypeEnum.RussianFederation:
      return ApiManufactureTypeEnum.RussianFederation;
    case ManufactureTypeEnum.ForeignCountry:
      return ApiManufactureTypeEnum.ForeignCountry;
    default:
      throw new Error(`Enum value is not defined: ManufactureTypeEnum=${String(source)}`);
  }
}
