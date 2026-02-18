import { MarketJsonResultOfMemoryStream } from '../../models/market-json-result-of-memory-stream.interface';
import { ApiMarketJsonResultOfMemoryStream } from '../../../swagger/models/api-market-json-result-of-memory-stream';

export function adaptApiMarketJsonResultOfMemoryStream(source?: MarketJsonResultOfMemoryStream | null): ApiMarketJsonResultOfMemoryStream {
  return (source ?? {}) as ApiMarketJsonResultOfMemoryStream;
}
