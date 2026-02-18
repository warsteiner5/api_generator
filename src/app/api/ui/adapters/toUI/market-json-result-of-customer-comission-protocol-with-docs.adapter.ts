import { ApiMarketJsonResultOfCustomerComissionProtocolWithDocsDto } from '../../../swagger/models/api-market-json-result-of-customer-comission-protocol-with-docs-dto';
import { MarketJsonResultOfCustomerComissionProtocolWithDocs } from '../../models/market-json-result-of-customer-comission-protocol-with-docs.interface';

export function adaptMarketJsonResultOfCustomerComissionProtocolWithDocsToUI(source?: ApiMarketJsonResultOfCustomerComissionProtocolWithDocsDto | null): MarketJsonResultOfCustomerComissionProtocolWithDocs {
  return (source ?? {}) as MarketJsonResultOfCustomerComissionProtocolWithDocs;
}
