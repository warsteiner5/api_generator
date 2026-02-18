import { MarketJsonResultOfSegment } from '../../models/market-json-result-of-segment.interface';
import { ApiMarketJsonResultOfSegmentDto } from '../../../swagger/models/api-market-json-result-of-segment-dto';

export function adaptApiMarketJsonResultOfSegmentDto(source?: MarketJsonResultOfSegment | null): ApiMarketJsonResultOfSegmentDto {
  return (source ?? {}) as ApiMarketJsonResultOfSegmentDto;
}
