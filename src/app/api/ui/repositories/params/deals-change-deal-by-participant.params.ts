import { ChangeDealBySupplierRequestAlt } from '../../models/change-deal-by-supplier-request-alt.interface';
import { DealsChangeDealByParticipant$Params } from '../../../swagger/fn/deals/deals-change-deal-by-participant';
import { apiChangeDealBySupplierRequestAltDtoAdapter } from '../../adapters/models/api-change-deal-by-supplier-request.adapter';

// @ts-ignore
export interface DealsChangeDealByParticipantParams {
  body?: ChangeDealBySupplierRequestAlt;
}

export function dealsChangeDealByParticipantAdapter(params?: DealsChangeDealByParticipantParams): DealsChangeDealByParticipant$Params {
  if (!params) {
    return {} as DealsChangeDealByParticipant$Params;
  }
  return {
      body: apiChangeDealBySupplierRequestAltDtoAdapter(params.body),
  };
}
