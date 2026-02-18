import { MarketJsonResultOfFileStreamModel } from '../../models/market-json-result-of-file-stream-model.interface';
import { ApiMarketJsonResultOfFileStreamModel } from '../../../swagger/models/api-market-json-result-of-file-stream-model';

export function adaptApiMarketJsonResultOfFileStreamModel(source?: MarketJsonResultOfFileStreamModel | null): ApiMarketJsonResultOfFileStreamModel {
  return (source ?? {}) as ApiMarketJsonResultOfFileStreamModel;
}
