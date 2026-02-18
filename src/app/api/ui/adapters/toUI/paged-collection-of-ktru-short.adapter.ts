import { ApiPagedCollectionOfKtruShortDto } from '../../../swagger/models/api-paged-collection-of-ktru-short-dto';
import { PagedCollectionOfKtruShort } from '../../models/paged-collection-of-ktru-short.interface';
import { adaptKtruShortToUI } from './ktru-short.adapter';

export function adaptPagedCollectionOfKtruShortToUI(source?: ApiPagedCollectionOfKtruShortDto | null): PagedCollectionOfKtruShort {
  return {
    page: (source?.Page ?? []).map((item) => adaptKtruShortToUI(item)),
    total: source?.Total ?? 0,
  };
}
