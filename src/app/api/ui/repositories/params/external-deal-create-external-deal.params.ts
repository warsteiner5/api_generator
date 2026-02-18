import { ExternalDealCreateExternalDeal$Params } from '../../../swagger/fn/external-deal/external-deal-create-external-deal';
import { ExternalDealDtoForPublishAlt } from '../../models/external-deal-dto-for-publish-alt.interface';
import { adaptApiExternalDealDtoForPublishAltDto } from '../../adapters/toDto/api-external-deal-dto-for-publish.adapter';

export interface ExternalDealCreateExternalDealParams {
  body?: ExternalDealDtoForPublishAlt;
}

export const externalDealCreateExternalDealParamsAdapter = {
  adapt(params?: ExternalDealCreateExternalDealParams): ExternalDealCreateExternalDeal$Params {
    if (!params) {
      return {} as ExternalDealCreateExternalDeal$Params;
    }
    return {
      body: adaptApiExternalDealDtoForPublishAltDto(params.body),
    };
  }
};
