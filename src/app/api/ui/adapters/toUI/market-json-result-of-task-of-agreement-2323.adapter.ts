import { ApiMarketJsonResultOfTaskOfAgreement2323Dto } from '../../../swagger/models/api-market-json-result-of-task-of-agreement-2323-dto';
import { MarketJsonResultOfTaskOfAgreement2323 } from '../../models/market-json-result-of-task-of-agreement-2323.interface';

export function adaptMarketJsonResultOfTaskOfAgreement2323ToUI(source?: ApiMarketJsonResultOfTaskOfAgreement2323Dto | null): MarketJsonResultOfTaskOfAgreement2323 {
  return (source ?? {}) as MarketJsonResultOfTaskOfAgreement2323;
}
