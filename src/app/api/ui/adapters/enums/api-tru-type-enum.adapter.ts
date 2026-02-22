import { TruTypeEnum } from '../../enums/tru-type.enum';
import { ApiTruTypeEnum } from '../../../swagger/models/api-tru-type-enum';

export const apiTruTypeEnumAdapter = (source?: TruTypeEnum | null): ApiTruTypeEnum => {
  switch (source) {
    case TruTypeEnum.Product:
      return ApiTruTypeEnum.Product;
    case TruTypeEnum.Job:
      return ApiTruTypeEnum.Job;
    case TruTypeEnum.Service:
      return ApiTruTypeEnum.Service;
    default:
      throw new Error(`Enum value is not defined: TruTypeEnum=${String(source)}`);
  }
}
