import { ApiMarketJsonResultOfFileStreamModel } from '../../../swagger/models/api-market-json-result-of-file-stream-model';
import { MarketJsonResultOfFileStreamModel } from '../../models/market-json-result-of-file-stream-model.interface';

export function adaptMarketJsonResultOfFileStreamModelToUI(source?: ApiMarketJsonResultOfFileStreamModel | null): MarketJsonResultOfFileStreamModel {
  return (source ?? {}) as MarketJsonResultOfFileStreamModel;
}
