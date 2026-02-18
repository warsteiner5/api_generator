import { ApiBusinessOperatorIdEnum } from '../../../swagger/models/api-business-operator-id-enum';
import { BusinessOperatorIdEnum } from '../../enums/business-operator-id.enum';

export function adaptBusinessOperatorIdEnumToUI(source?: ApiBusinessOperatorIdEnum | null): BusinessOperatorIdEnum {
  switch (source) {
    case ApiBusinessOperatorIdEnum.Agro:
      return BusinessOperatorIdEnum.Agro;
    case ApiBusinessOperatorIdEnum.Tender:
      return BusinessOperatorIdEnum.Tender;
    case ApiBusinessOperatorIdEnum.Energo:
      return BusinessOperatorIdEnum.Energo;
    case ApiBusinessOperatorIdEnum.RtsTender:
      return BusinessOperatorIdEnum.RtsTender;
    case ApiBusinessOperatorIdEnum.Eat:
      return BusinessOperatorIdEnum.Eat;
    default:
      throw new Error(`Enum value is not defined: ApiBusinessOperatorIdEnum=${String(source)}`);
  }
}
