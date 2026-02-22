import { ApiAvailableVatTypeEnum } from '../../../swagger/models/api-available-vat-type-enum';
import { AvailableVatTypeEnum } from '../../enums/available-vat-type.enum';

export const availableVatTypeEnumAdapter = (source?: ApiAvailableVatTypeEnum | null): AvailableVatTypeEnum => {
  switch (source) {
    case ApiAvailableVatTypeEnum.Vat0:
      return AvailableVatTypeEnum.Vat0;
    case ApiAvailableVatTypeEnum.Vat10:
      return AvailableVatTypeEnum.Vat10;
    case ApiAvailableVatTypeEnum.Vat18:
      return AvailableVatTypeEnum.Vat18;
    case ApiAvailableVatTypeEnum.Vat10110:
      return AvailableVatTypeEnum.Vat10110;
    case ApiAvailableVatTypeEnum.Vat18118:
      return AvailableVatTypeEnum.Vat18118;
    case ApiAvailableVatTypeEnum.Vat20:
      return AvailableVatTypeEnum.Vat20;
    case ApiAvailableVatTypeEnum.Vat20120:
      return AvailableVatTypeEnum.Vat20120;
    case ApiAvailableVatTypeEnum.Vat5:
      return AvailableVatTypeEnum.Vat5;
    case ApiAvailableVatTypeEnum.Vat7:
      return AvailableVatTypeEnum.Vat7;
    case ApiAvailableVatTypeEnum.Vat22:
      return AvailableVatTypeEnum.Vat22;
    case ApiAvailableVatTypeEnum.VatAnother:
      return AvailableVatTypeEnum.VatAnother;
    default:
      throw new Error(`Enum value is not defined: ApiAvailableVatTypeEnum=${String(source)}`);
  }
}
