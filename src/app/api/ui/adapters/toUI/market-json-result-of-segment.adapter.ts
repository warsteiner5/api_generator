import { ApiMarketJsonResultOfSegmentDto } from '../../../swagger/models/api-market-json-result-of-segment-dto';
import { MarketJsonResultOfSegment } from '../../models/market-json-result-of-segment.interface';

export function adaptMarketJsonResultOfSegmentToUI(source?: ApiMarketJsonResultOfSegmentDto | null): MarketJsonResultOfSegment {
  return (source ?? {}) as MarketJsonResultOfSegment;
}
