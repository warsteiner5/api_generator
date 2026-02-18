import { MarketJsonResultOfMarketPaginationResultOfListOfPartner } from '../../models/market-json-result-of-market-pagination-result-of-list-of-partner.interface';
import { ApiMarketJsonResultOfMarketPaginationResultOfListOfPartnerDto } from '../../../swagger/models/api-market-json-result-of-market-pagination-result-of-list-of-partner-dto';

export function adaptApiMarketJsonResultOfMarketPaginationResultOfListOfPartnerDto(source?: MarketJsonResultOfMarketPaginationResultOfListOfPartner | null): ApiMarketJsonResultOfMarketPaginationResultOfListOfPartnerDto {
  return (source ?? {}) as ApiMarketJsonResultOfMarketPaginationResultOfListOfPartnerDto;
}
