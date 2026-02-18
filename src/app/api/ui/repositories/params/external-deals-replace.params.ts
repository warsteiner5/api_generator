import { ExternalDeal } from '../../models/external-deal.interface';
import { ExternalDealsReplace$Params } from '../../../swagger/fn/external-deals/external-deals-replace';
import { adaptApiExternalDealDto } from '../../adapters/toDto/api-external-deal-dto.adapter';

export interface ExternalDealsReplaceParams {
  id: number;
  body?: ExternalDeal;
}

export const externalDealsReplaceParamsAdapter = {
  adapt(params?: ExternalDealsReplaceParams): ExternalDealsReplace$Params {
    if (!params) {
      return {} as ExternalDealsReplace$Params;
    }
    return {
      id: params.id,
      body: adaptApiExternalDealDto(params.body),
    };
  }
};
