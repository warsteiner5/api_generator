import { ExternalDeal } from '../../models/external-deal.interface';
import { ExternalDealsPublish2$Params } from '../../../swagger/fn/external-deals/external-deals-publish-2';
import { adaptApiExternalDealDto } from '../../adapters/toDto/api-external-deal-dto.adapter';

export interface ExternalDealsPublish2Params {
  id: number;
  body?: ExternalDeal;
}

export const externalDealsPublish2ParamsAdapter = {
  adapt(params?: ExternalDealsPublish2Params): ExternalDealsPublish2$Params {
    if (!params) {
      return {} as ExternalDealsPublish2$Params;
    }
    return {
      id: params.id,
      body: adaptApiExternalDealDto(params.body),
    };
  }
};
