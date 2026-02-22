import { PagedCollectionOfKtruShort } from '../../models/paged-collection-of-ktru-short.interface';
import { ApiPagedCollectionOfKtruShortDto } from '../../../swagger/models/api-paged-collection-of-ktru-short-dto';
import { apiKtruShortDtoAdapter } from './api-ktru-short-dto.adapter';

export const apiPagedCollectionOfKtruShortDtoAdapter = (source?: PagedCollectionOfKtruShort | null): ApiPagedCollectionOfKtruShortDto => {
  return {
    Page: source?.page?.map((item) => apiKtruShortDtoAdapter(item)),
    Total: source?.total,
  };
}
