import { ApiSearchActionResultsDto } from '../../../swagger/models/api-search-action-results-dto';
import { SearchActionResults } from '../../models/search-action-results.interface';
import { adaptMarketEntityTypeEnumToUI } from './market-entity-type-enum.adapter';

export function adaptSearchActionResultsToUI(source?: ApiSearchActionResultsDto | null): SearchActionResults {
  return {
    entityId: source?.EntityId ?? 0,
    entityType: adaptMarketEntityTypeEnumToUI(source?.EntityType),
    name: source?.Name ?? '',
    numberInOrder: source?.NumberInOrder ?? 0,
    pageNum: source?.PageNum ?? 0,
    price: source?.Price ?? 0,
  };
}
