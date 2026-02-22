import { KtruShort } from '../../models/ktru-short.interface';
import { ApiKtruShortDto } from '../../../swagger/models/api-ktru-short-dto';

export const apiKtruShortDtoAdapter = (source?: KtruShort | null): ApiKtruShortDto => {
  return {
    Code: source?.code,
    Name: source?.name,
    Version: source?.version,
  };
}
