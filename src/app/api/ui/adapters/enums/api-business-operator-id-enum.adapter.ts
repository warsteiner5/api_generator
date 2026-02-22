import { BusinessOperatorIdEnum } from '../../enums/business-operator-id.enum';
import { ApiBusinessOperatorIdEnum } from '../../../swagger/models/api-business-operator-id-enum';

export const apiBusinessOperatorIdEnumAdapter = (source?: BusinessOperatorIdEnum | null): ApiBusinessOperatorIdEnum => {
  switch (source) {
    case BusinessOperatorIdEnum.Agro:
      return ApiBusinessOperatorIdEnum.Agro;
    case BusinessOperatorIdEnum.Tender:
      return ApiBusinessOperatorIdEnum.Tender;
    case BusinessOperatorIdEnum.Energo:
      return ApiBusinessOperatorIdEnum.Energo;
    case BusinessOperatorIdEnum.RtsTender:
      return ApiBusinessOperatorIdEnum.RtsTender;
    case BusinessOperatorIdEnum.Eat:
      return ApiBusinessOperatorIdEnum.Eat;
    default:
      throw new Error(`Enum value is not defined: BusinessOperatorIdEnum=${String(source)}`);
  }
}
