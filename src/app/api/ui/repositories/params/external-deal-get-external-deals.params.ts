import { ExternalDealFilterObjectAlt } from '../../models/external-deal-filter-object-alt.interface';
import { ExternalDealGetExternalDeals$Params } from '../../../swagger/fn/external-deal/external-deal-get-external-deals';
import { adaptApiExternalDealFilterObjectAltDto } from '../../adapters/toDto/api-external-deal-filter-object.adapter';

export interface ExternalDealGetExternalDealsParams {
  body?: ExternalDealFilterObjectAlt;
}

export const externalDealGetExternalDealsParamsAdapter = {
  adapt(params?: ExternalDealGetExternalDealsParams): ExternalDealGetExternalDeals$Params {
    if (!params) {
      return {} as ExternalDealGetExternalDeals$Params;
    }
    return {
      body: adaptApiExternalDealFilterObjectAltDto(params.body),
    };
  }
};
