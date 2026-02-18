import { ExternalDealFilterObjectAlt } from '../../models/external-deal-filter-object-alt.interface';
import { ExternalDealGetExternalDealsForAdmin$Params } from '../../../swagger/fn/external-deal/external-deal-get-external-deals-for-admin';
import { adaptApiExternalDealFilterObjectAltDto } from '../../adapters/toDto/api-external-deal-filter-object.adapter';

export interface ExternalDealGetExternalDealsForAdminParams {
  body?: ExternalDealFilterObjectAlt;
}

export const externalDealGetExternalDealsForAdminParamsAdapter = {
  adapt(params?: ExternalDealGetExternalDealsForAdminParams): ExternalDealGetExternalDealsForAdmin$Params {
    if (!params) {
      return {} as ExternalDealGetExternalDealsForAdmin$Params;
    }
    return {
      body: adaptApiExternalDealFilterObjectAltDto(params.body),
    };
  }
};
