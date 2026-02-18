import { ApiTruTypeEnum } from '../../../swagger/models/api-tru-type-enum';
import { TruTypeEnum } from '../../enums/tru-type.enum';

export function adaptTruTypeEnumToUI(source?: ApiTruTypeEnum | null): TruTypeEnum {
  switch (source) {
    case ApiTruTypeEnum.Product:
      return TruTypeEnum.Product;
    case ApiTruTypeEnum.Job:
      return TruTypeEnum.Job;
    case ApiTruTypeEnum.Service:
      return TruTypeEnum.Service;
    default:
      throw new Error(`Enum value is not defined: ApiTruTypeEnum=${String(source)}`);
  }
}
