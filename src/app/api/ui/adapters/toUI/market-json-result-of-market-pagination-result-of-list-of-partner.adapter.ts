import { ApiMarketJsonResultOfMarketPaginationResultOfListOfPartnerDto } from '../../../swagger/models/api-market-json-result-of-market-pagination-result-of-list-of-partner-dto';
import { MarketJsonResultOfMarketPaginationResultOfListOfPartner } from '../../models/market-json-result-of-market-pagination-result-of-list-of-partner.interface';

export function adaptMarketJsonResultOfMarketPaginationResultOfListOfPartnerToUI(source?: ApiMarketJsonResultOfMarketPaginationResultOfListOfPartnerDto | null): MarketJsonResultOfMarketPaginationResultOfListOfPartner {
  return (source ?? {}) as MarketJsonResultOfMarketPaginationResultOfListOfPartner;
}
