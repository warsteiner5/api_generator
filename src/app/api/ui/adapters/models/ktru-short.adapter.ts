import { ApiKtruShortDto } from '../../../swagger/models/api-ktru-short-dto';
import { KtruShort } from '../../models/ktru-short.interface';

export const ktruShortAdapter = (source?: ApiKtruShortDto | null): KtruShort => {
  return {
    code: source?.Code,
    name: source?.Name,
    version: source?.Version,
  };
}
