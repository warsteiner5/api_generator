import { SearchActionMessage } from '../../models/search-action-message.interface';
import { ApiSearchActionMessageDto } from '../../../swagger/models/api-search-action-message-dto';
import { adaptApiFilterParameterDto } from './api-filter-parameter-dto.adapter';
import { adaptApiFilterSourceTypeEnum } from './api-filter-source-type-enum.adapter';
import { adaptApiMarketSearchActionEnum } from './api-market-search-action-enum.adapter';
import { adaptApiSearchActionResultsDto } from './api-search-action-results-dto.adapter';

export function adaptApiSearchActionMessageDto(source?: SearchActionMessage | null): ApiSearchActionMessageDto {
  return {
    FilterParameters: (source?.filterParameters ?? []).map((item) => adaptApiFilterParameterDto(item)),
    FilterSource: adaptApiFilterSourceTypeEnum(source?.filterSource),
    KeyWords: source?.keyWords,
    MarketSearchAction: adaptApiMarketSearchActionEnum(source?.marketSearchAction),
    OrganizationId: source?.organizationId,
    SearchActionResults: (source?.searchActionResults ?? []).map((item) => adaptApiSearchActionResultsDto(item)),
    SearchDuration: source?.searchDuration,
    TenantId: source?.tenantId,
    Url: source?.url,
    UserGuid: source?.userGuid,
    UserId: source?.userId,
  };
}
