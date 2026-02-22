import { DealGetExternalDealsInfoByIds$Params } from '../../../swagger/fn/deal/deal-get-external-deals-info-by-ids';
import { GetExternalDealsInfoRequestAlt } from '../../models/get-external-deals-info-request-alt.interface';
import { apiGetExternalDealsInfoRequestAltDtoAdapter } from '../../adapters/models/api-get-external-deals-info-request.adapter';

// @ts-ignore
export interface DealGetExternalDealsInfoByIdsParams {
  body?: GetExternalDealsInfoRequestAlt;
}

export function dealGetExternalDealsInfoByIdsAdapter(params?: DealGetExternalDealsInfoByIdsParams): DealGetExternalDealsInfoByIds$Params {
  if (!params) {
    return {} as DealGetExternalDealsInfoByIds$Params;
  }
  return {
      body: apiGetExternalDealsInfoRequestAltDtoAdapter(params.body),
  };
}
