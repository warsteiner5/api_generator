import { PagedCollectionOfKtruShort } from '../../models/paged-collection-of-ktru-short.interface';
import { ApiPagedCollectionOfKtruShortDto } from '../../../swagger/models/api-paged-collection-of-ktru-short-dto';
import { adaptApiKtruShortDto } from './api-ktru-short-dto.adapter';

export function adaptApiPagedCollectionOfKtruShortDto(source?: PagedCollectionOfKtruShort | null): ApiPagedCollectionOfKtruShortDto {
  return {
    Page: (source?.page ?? []).map((item) => adaptApiKtruShortDto(item)),
    Total: source?.total,
  };
}
