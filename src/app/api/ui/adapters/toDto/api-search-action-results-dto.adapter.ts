import { SearchActionResults } from '../../models/search-action-results.interface';
import { ApiSearchActionResultsDto } from '../../../swagger/models/api-search-action-results-dto';
import { adaptApiMarketEntityTypeEnum } from './api-market-entity-type-enum.adapter';

export function adaptApiSearchActionResultsDto(source?: SearchActionResults | null): ApiSearchActionResultsDto {
  return {
    EntityId: source?.entityId,
    EntityType: adaptApiMarketEntityTypeEnum(source?.entityType),
    Name: source?.name,
    NumberInOrder: source?.numberInOrder,
    PageNum: source?.pageNum,
    Price: source?.price,
  };
}
