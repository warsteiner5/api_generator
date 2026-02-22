import { TruTypeEnum2 } from '../../enums/tru-type-enum-2.enum';
import { ApiTruTypeEnum2 } from '../../../swagger/models/api-tru-type-enum-2';

export const apiTruTypeEnum2Adapter = (source?: TruTypeEnum2 | null): ApiTruTypeEnum2 => {
  switch (source) {
    case TruTypeEnum2.Product:
      return ApiTruTypeEnum2.Product;
    case TruTypeEnum2.Job:
      return ApiTruTypeEnum2.Job;
    case TruTypeEnum2.Service:
      return ApiTruTypeEnum2.Service;
    default:
      throw new Error(`Enum value is not defined: TruTypeEnum2=${String(source)}`);
  }
}
