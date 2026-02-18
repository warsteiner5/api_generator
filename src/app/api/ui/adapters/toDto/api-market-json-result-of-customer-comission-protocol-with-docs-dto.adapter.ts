import { MarketJsonResultOfCustomerComissionProtocolWithDocs } from '../../models/market-json-result-of-customer-comission-protocol-with-docs.interface';
import { ApiMarketJsonResultOfCustomerComissionProtocolWithDocsDto } from '../../../swagger/models/api-market-json-result-of-customer-comission-protocol-with-docs-dto';

export function adaptApiMarketJsonResultOfCustomerComissionProtocolWithDocsDto(source?: MarketJsonResultOfCustomerComissionProtocolWithDocs | null): ApiMarketJsonResultOfCustomerComissionProtocolWithDocsDto {
  return (source ?? {}) as ApiMarketJsonResultOfCustomerComissionProtocolWithDocsDto;
}
