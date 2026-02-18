import { ApiTruTypeEnum2 } from '../../../swagger/models/api-tru-type-enum-2';
import { TruTypeEnum2 } from '../../enums/tru-type-enum-2.enum';

export function adaptTruTypeEnum2ToUI(source?: ApiTruTypeEnum2 | null): TruTypeEnum2 {
  switch (source) {
    case ApiTruTypeEnum2.Product:
      return TruTypeEnum2.Product;
    case ApiTruTypeEnum2.Job:
      return TruTypeEnum2.Job;
    case ApiTruTypeEnum2.Service:
      return TruTypeEnum2.Service;
    default:
      throw new Error(`Enum value is not defined: ApiTruTypeEnum2=${String(source)}`);
  }
}
