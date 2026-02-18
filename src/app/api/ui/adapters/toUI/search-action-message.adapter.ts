import { ApiSearchActionMessageDto } from '../../../swagger/models/api-search-action-message-dto';
import { SearchActionMessage } from '../../models/search-action-message.interface';
import { adaptFilterParameterToUI } from './filter-parameter.adapter';
import { adaptFilterSourceTypeEnumToUI } from './filter-source-type-enum.adapter';
import { adaptMarketSearchActionEnumToUI } from './market-search-action-enum.adapter';
import { adaptSearchActionResultsToUI } from './search-action-results.adapter';

export function adaptSearchActionMessageToUI(source?: ApiSearchActionMessageDto | null): SearchActionMessage {
  return {
    filterParameters: (source?.FilterParameters ?? []).map((item) => adaptFilterParameterToUI(item)),
    filterSource: adaptFilterSourceTypeEnumToUI(source?.FilterSource),
    keyWords: source?.KeyWords ?? '',
    marketSearchAction: adaptMarketSearchActionEnumToUI(source?.MarketSearchAction),
    organizationId: source?.OrganizationId ?? 0,
    searchActionResults: (source?.SearchActionResults ?? []).map((item) => adaptSearchActionResultsToUI(item)),
    searchDuration: source?.SearchDuration ?? 0,
    tenantId: source?.TenantId ?? 0,
    url: source?.Url ?? '',
    userGuid: source?.UserGuid ?? '',
    userId: source?.UserId ?? 0,
  };
}
