import { ExternalDeal } from '../../models/external-deal.interface';
import { ExternalDealsPublish$Params } from '../../../swagger/fn/external-deals/external-deals-publish';
import { adaptApiExternalDealDto } from '../../adapters/toDto/api-external-deal-dto.adapter';

export interface ExternalDealsPublishParams {
  body?: ExternalDeal;
}

export const externalDealsPublishParamsAdapter = {
  adapt(params?: ExternalDealsPublishParams): ExternalDealsPublish$Params {
    if (!params) {
      return {} as ExternalDealsPublish$Params;
    }
    return {
      body: adaptApiExternalDealDto(params.body),
    };
  }
};
