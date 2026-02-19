import { ExternalDealCreateExternalDeal$Params } from '../../../swagger/fn/external-deal/external-deal-create-external-deal';
import { ExternalDealDtoForPublish } from '../../models/external-deal-dto-for-publish.interface';
import { adaptApiExternalDealDtoForPublish } from '../../adapters/toDto/api-external-deal-dto-for-publish.adapter';

export interface ExternalDealCreateExternalDealParams {
  body?: ExternalDealDtoForPublish;
}

export const externalDealCreateExternalDealParamsAdapter = {
  adapt(params?: ExternalDealCreateExternalDealParams): ExternalDealCreateExternalDeal$Params {
    if (!params) {
      return {} as ExternalDealCreateExternalDeal$Params;
    }
    return {
      body: adaptApiExternalDealDtoForPublish(params.body),
    };
  }
};
