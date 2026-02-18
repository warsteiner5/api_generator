import { ApiMarketJsonResultOfMemoryStream } from '../../../swagger/models/api-market-json-result-of-memory-stream';
import { MarketJsonResultOfMemoryStream } from '../../models/market-json-result-of-memory-stream.interface';

export function adaptMarketJsonResultOfMemoryStreamToUI(source?: ApiMarketJsonResultOfMemoryStream | null): MarketJsonResultOfMemoryStream {
  return (source ?? {}) as MarketJsonResultOfMemoryStream;
}
