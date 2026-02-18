import { DealGetExternalDealsInfoByIds$Params } from '../../../swagger/fn/deal/deal-get-external-deals-info-by-ids';
import { GetExternalDealsInfoRequestAlt } from '../../models/get-external-deals-info-request-alt.interface';
import { adaptApiGetExternalDealsInfoRequestAltDto } from '../../adapters/toDto/api-get-external-deals-info-request.adapter';

export interface DealGetExternalDealsInfoByIdsParams {
  body?: GetExternalDealsInfoRequestAlt;
}

export const dealGetExternalDealsInfoByIdsParamsAdapter = {
  adapt(params?: DealGetExternalDealsInfoByIdsParams): DealGetExternalDealsInfoByIds$Params {
    if (!params) {
      return {} as DealGetExternalDealsInfoByIds$Params;
    }
    return {
      body: adaptApiGetExternalDealsInfoRequestAltDto(params.body),
    };
  }
};
