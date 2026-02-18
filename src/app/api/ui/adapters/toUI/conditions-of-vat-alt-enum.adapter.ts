import { ApiConditionsOfVatAltEnum } from '../../../swagger/models/api-conditions-of-vat';
import { ConditionsOfVatAltEnum } from '../../enums/conditions-of-vat-alt.enum';

export function adaptConditionsOfVatAltEnumToUI(source?: ApiConditionsOfVatAltEnum | null): ConditionsOfVatAltEnum {
  switch (source) {
    case ApiConditionsOfVatAltEnum.LotPriceEnteredWithVat:
      return ConditionsOfVatAltEnum.LotPriceEnteredWithVat;
    case ApiConditionsOfVatAltEnum.LotPriceEnteredWithoutVat:
      return ConditionsOfVatAltEnum.LotPriceEnteredWithoutVat;
    case ApiConditionsOfVatAltEnum.LotPriceWithoutVat:
      return ConditionsOfVatAltEnum.LotPriceWithoutVat;
    default:
      throw new Error(`Enum value is not defined: ApiConditionsOfVatAltEnum=${String(source)}`);
  }
}
