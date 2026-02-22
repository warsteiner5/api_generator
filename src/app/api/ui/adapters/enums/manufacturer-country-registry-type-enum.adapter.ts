import { ApiManufacturerCountryRegistryTypeEnum } from '../../../swagger/models/api-manufacturer-country-registry-type-enum';
import { ManufacturerCountryRegistryTypeEnum } from '../../enums/manufacturer-country-registry-type.enum';

export const manufacturerCountryRegistryTypeEnumAdapter = (source?: ApiManufacturerCountryRegistryTypeEnum | null): ManufacturerCountryRegistryTypeEnum => {
  switch (source) {
    case ApiManufacturerCountryRegistryTypeEnum.Undefined:
      return ManufacturerCountryRegistryTypeEnum.Undefined;
    case ApiManufacturerCountryRegistryTypeEnum.RPP:
      return ManufacturerCountryRegistryTypeEnum.RPP;
    case ApiManufacturerCountryRegistryTypeEnum.RPO:
      return ManufacturerCountryRegistryTypeEnum.RPO;
    case ApiManufacturerCountryRegistryTypeEnum.ERPP:
      return ManufacturerCountryRegistryTypeEnum.ERPP;
    case ApiManufacturerCountryRegistryTypeEnum.EPO:
      return ManufacturerCountryRegistryTypeEnum.EPO;
    default:
      throw new Error(`Enum value is not defined: ApiManufacturerCountryRegistryTypeEnum=${String(source)}`);
  }
}
