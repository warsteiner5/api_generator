import { SearchActionResults } from '../../models/search-action-results.interface';
import { ApiSearchActionResultsDto } from '../../../swagger/models/api-search-action-results-dto';
import { apiMarketEntityTypeEnumAdapter } from '../enums/api-market-entity-type-enum.adapter';

export const apiSearchActionResultsDtoAdapter = (source?: SearchActionResults | null): ApiSearchActionResultsDto => {
  return {
    EntityId: source?.entityId,
    EntityType: source?.entityType === null ? undefined : apiMarketEntityTypeEnumAdapter(source?.entityType),
    Name: source?.name,
    NumberInOrder: source?.numberInOrder,
    PageNum: source?.pageNum,
    Price: source?.price,
  };
}
