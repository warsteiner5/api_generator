import { ApiSearchActionMessageDto } from '../../../swagger/models/api-search-action-message-dto';
import { SearchActionMessage } from '../../models/search-action-message.interface';
import { filterParameterAdapter } from './filter-parameter.adapter';
import { filterSourceTypeEnumAdapter } from '../enums/filter-source-type-enum.adapter';
import { marketSearchActionEnumAdapter } from '../enums/market-search-action-enum.adapter';
import { searchActionResultsAdapter } from './search-action-results.adapter';

export const searchActionMessageAdapter = (source?: ApiSearchActionMessageDto | null): SearchActionMessage => {
  return {
    filterParameters: source?.FilterParameters?.map((item) => filterParameterAdapter(item)),
    filterSource: source?.FilterSource === null ? undefined : filterSourceTypeEnumAdapter(source?.FilterSource),
    keyWords: source?.KeyWords,
    marketSearchAction: source?.MarketSearchAction === null ? undefined : marketSearchActionEnumAdapter(source?.MarketSearchAction),
    organizationId: source?.OrganizationId,
    searchActionResults: source?.SearchActionResults?.map((item) => searchActionResultsAdapter(item)),
    searchDuration: source?.SearchDuration,
    tenantId: source?.TenantId,
    url: source?.Url,
    userGuid: source?.UserGuid,
    userId: source?.UserId,
  };
}
