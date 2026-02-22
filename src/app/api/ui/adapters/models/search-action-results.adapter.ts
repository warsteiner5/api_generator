import { ApiSearchActionResultsDto } from '../../../swagger/models/api-search-action-results-dto';
import { SearchActionResults } from '../../models/search-action-results.interface';
import { marketEntityTypeEnumAdapter } from '../enums/market-entity-type-enum.adapter';

export const searchActionResultsAdapter = (source?: ApiSearchActionResultsDto | null): SearchActionResults => {
  return {
    entityId: source?.EntityId,
    entityType: source?.EntityType === null ? undefined : marketEntityTypeEnumAdapter(source?.EntityType),
    name: source?.Name,
    numberInOrder: source?.NumberInOrder,
    pageNum: source?.PageNum,
    price: source?.Price,
  };
}
