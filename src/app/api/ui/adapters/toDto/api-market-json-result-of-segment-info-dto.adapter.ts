import { MarketJsonResultOfSegmentInfo } from '../../models/market-json-result-of-segment-info.interface';
import { ApiMarketJsonResultOfSegmentInfoDto } from '../../../swagger/models/api-market-json-result-of-segment-info-dto';

export function adaptApiMarketJsonResultOfSegmentInfoDto(source?: MarketJsonResultOfSegmentInfo | null): ApiMarketJsonResultOfSegmentInfoDto {
  return (source ?? {}) as ApiMarketJsonResultOfSegmentInfoDto;
}
