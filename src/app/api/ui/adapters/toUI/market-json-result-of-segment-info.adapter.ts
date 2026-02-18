import { ApiMarketJsonResultOfSegmentInfoDto } from '../../../swagger/models/api-market-json-result-of-segment-info-dto';
import { MarketJsonResultOfSegmentInfo } from '../../models/market-json-result-of-segment-info.interface';

export function adaptMarketJsonResultOfSegmentInfoToUI(source?: ApiMarketJsonResultOfSegmentInfoDto | null): MarketJsonResultOfSegmentInfo {
  return (source ?? {}) as MarketJsonResultOfSegmentInfo;
}
