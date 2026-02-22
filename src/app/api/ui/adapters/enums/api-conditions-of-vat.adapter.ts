import { ConditionsOfVatAltEnum } from '../../enums/conditions-of-vat-alt.enum';
import { ApiConditionsOfVatAltEnum } from '../../../swagger/models/api-conditions-of-vat';

export const apiConditionsOfVatAltEnumAdapter = (source?: ConditionsOfVatAltEnum | null): ApiConditionsOfVatAltEnum => {
  switch (source) {
    case ConditionsOfVatAltEnum.LotPriceEnteredWithVat:
      return ApiConditionsOfVatAltEnum.LotPriceEnteredWithVat;
    case ConditionsOfVatAltEnum.LotPriceEnteredWithoutVat:
      return ApiConditionsOfVatAltEnum.LotPriceEnteredWithoutVat;
    case ConditionsOfVatAltEnum.LotPriceWithoutVat:
      return ApiConditionsOfVatAltEnum.LotPriceWithoutVat;
    default:
      throw new Error(`Enum value is not defined: ConditionsOfVatAltEnum=${String(source)}`);
  }
}
