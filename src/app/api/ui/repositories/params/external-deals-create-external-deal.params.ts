import { ExternalDeal } from '../../models/external-deal.interface';
import { ExternalDealsCreateExternalDeal$Params } from '../../../swagger/fn/external-deals/external-deals-create-external-deal';
import { adaptApiExternalDealDto } from '../../adapters/toDto/api-external-deal-dto.adapter';

export interface ExternalDealsCreateExternalDealParams {
  body?: ExternalDeal;
}

export const externalDealsCreateExternalDealParamsAdapter = {
  adapt(params?: ExternalDealsCreateExternalDealParams): ExternalDealsCreateExternalDeal$Params {
    if (!params) {
      return {} as ExternalDealsCreateExternalDeal$Params;
    }
    return {
      body: adaptApiExternalDealDto(params.body),
    };
  }
};
