import { DealsDoNotConcludeDeal$Params } from '../../../swagger/fn/deals/deals-do-not-conclude-deal';
import { DoNotConcludeDealRequest } from '../../models/do-not-conclude-deal-request.interface';
import { adaptApiDoNotConcludeDealRequestDto } from '../../adapters/toDto/api-do-not-conclude-deal-request-dto.adapter';

export interface DealsDoNotConcludeDealParams {
  body?: DoNotConcludeDealRequest;
}

export const dealsDoNotConcludeDealParamsAdapter = {
  adapt(params?: DealsDoNotConcludeDealParams): DealsDoNotConcludeDeal$Params {
    if (!params) {
      return {} as DealsDoNotConcludeDeal$Params;
    }
    return {
      body: adaptApiDoNotConcludeDealRequestDto(params.body),
    };
  }
};
