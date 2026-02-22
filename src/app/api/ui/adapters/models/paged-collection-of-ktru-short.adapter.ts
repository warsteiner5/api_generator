import { ApiPagedCollectionOfKtruShortDto } from '../../../swagger/models/api-paged-collection-of-ktru-short-dto';
import { PagedCollectionOfKtruShort } from '../../models/paged-collection-of-ktru-short.interface';
import { ktruShortAdapter } from './ktru-short.adapter';

export const pagedCollectionOfKtruShortAdapter = (source?: ApiPagedCollectionOfKtruShortDto | null): PagedCollectionOfKtruShort => {
  return {
    page: source?.Page?.map((item) => ktruShortAdapter(item)),
    total: source?.Total,
  };
}
