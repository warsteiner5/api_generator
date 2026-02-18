import { MarketJsonResultOfTaskOfAgreement2323 } from '../../models/market-json-result-of-task-of-agreement-2323.interface';
import { ApiMarketJsonResultOfTaskOfAgreement2323Dto } from '../../../swagger/models/api-market-json-result-of-task-of-agreement-2323-dto';

export function adaptApiMarketJsonResultOfTaskOfAgreement2323Dto(source?: MarketJsonResultOfTaskOfAgreement2323 | null): ApiMarketJsonResultOfTaskOfAgreement2323Dto {
  return (source ?? {}) as ApiMarketJsonResultOfTaskOfAgreement2323Dto;
}
