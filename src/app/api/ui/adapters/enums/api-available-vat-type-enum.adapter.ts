import { AvailableVatTypeEnum } from '../../enums/available-vat-type.enum';
import { ApiAvailableVatTypeEnum } from '../../../swagger/models/api-available-vat-type-enum';

export const apiAvailableVatTypeEnumAdapter = (source?: AvailableVatTypeEnum | null): ApiAvailableVatTypeEnum => {
  switch (source) {
    case AvailableVatTypeEnum.Vat0:
      return ApiAvailableVatTypeEnum.Vat0;
    case AvailableVatTypeEnum.Vat10:
      return ApiAvailableVatTypeEnum.Vat10;
    case AvailableVatTypeEnum.Vat18:
      return ApiAvailableVatTypeEnum.Vat18;
    case AvailableVatTypeEnum.Vat10110:
      return ApiAvailableVatTypeEnum.Vat10110;
    case AvailableVatTypeEnum.Vat18118:
      return ApiAvailableVatTypeEnum.Vat18118;
    case AvailableVatTypeEnum.Vat20:
      return ApiAvailableVatTypeEnum.Vat20;
    case AvailableVatTypeEnum.Vat20120:
      return ApiAvailableVatTypeEnum.Vat20120;
    case AvailableVatTypeEnum.Vat5:
      return ApiAvailableVatTypeEnum.Vat5;
    case AvailableVatTypeEnum.Vat7:
      return ApiAvailableVatTypeEnum.Vat7;
    case AvailableVatTypeEnum.Vat22:
      return ApiAvailableVatTypeEnum.Vat22;
    case AvailableVatTypeEnum.VatAnother:
      return ApiAvailableVatTypeEnum.VatAnother;
    default:
      throw new Error(`Enum value is not defined: AvailableVatTypeEnum=${String(source)}`);
  }
}
