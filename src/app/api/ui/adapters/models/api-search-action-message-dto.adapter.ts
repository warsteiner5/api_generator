import { SearchActionMessage } from '../../models/search-action-message.interface';
import { ApiSearchActionMessageDto } from '../../../swagger/models/api-search-action-message-dto';
import { apiFilterParameterDtoAdapter } from './api-filter-parameter-dto.adapter';
import { apiFilterSourceTypeEnumAdapter } from '../enums/api-filter-source-type-enum.adapter';
import { apiMarketSearchActionEnumAdapter } from '../enums/api-market-search-action-enum.adapter';
import { apiSearchActionResultsDtoAdapter } from './api-search-action-results-dto.adapter';

export const apiSearchActionMessageDtoAdapter = (source?: SearchActionMessage | null): ApiSearchActionMessageDto => {
  return {
    FilterParameters: source?.filterParameters?.map((item) => apiFilterParameterDtoAdapter(item)),
    FilterSource: source?.filterSource === null ? undefined : apiFilterSourceTypeEnumAdapter(source?.filterSource),
    KeyWords: source?.keyWords,
    MarketSearchAction: source?.marketSearchAction === null ? undefined : apiMarketSearchActionEnumAdapter(source?.marketSearchAction),
    OrganizationId: source?.organizationId,
    SearchActionResults: source?.searchActionResults?.map((item) => apiSearchActionResultsDtoAdapter(item)),
    SearchDuration: source?.searchDuration,
    TenantId: source?.tenantId,
    Url: source?.url,
    UserGuid: source?.userGuid,
    UserId: source?.userId,
  };
}
