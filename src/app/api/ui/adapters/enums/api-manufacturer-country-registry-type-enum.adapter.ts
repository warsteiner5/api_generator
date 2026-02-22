import { ManufacturerCountryRegistryTypeEnum } from '../../enums/manufacturer-country-registry-type.enum';
import { ApiManufacturerCountryRegistryTypeEnum } from '../../../swagger/models/api-manufacturer-country-registry-type-enum';

export const apiManufacturerCountryRegistryTypeEnumAdapter = (source?: ManufacturerCountryRegistryTypeEnum | null): ApiManufacturerCountryRegistryTypeEnum => {
  switch (source) {
    case ManufacturerCountryRegistryTypeEnum.Undefined:
      return ApiManufacturerCountryRegistryTypeEnum.Undefined;
    case ManufacturerCountryRegistryTypeEnum.RPP:
      return ApiManufacturerCountryRegistryTypeEnum.RPP;
    case ManufacturerCountryRegistryTypeEnum.RPO:
      return ApiManufacturerCountryRegistryTypeEnum.RPO;
    case ManufacturerCountryRegistryTypeEnum.ERPP:
      return ApiManufacturerCountryRegistryTypeEnum.ERPP;
    case ManufacturerCountryRegistryTypeEnum.EPO:
      return ApiManufacturerCountryRegistryTypeEnum.EPO;
    default:
      throw new Error(`Enum value is not defined: ManufacturerCountryRegistryTypeEnum=${String(source)}`);
  }
}
