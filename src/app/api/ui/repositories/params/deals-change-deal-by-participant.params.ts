import { ChangeDealBySupplierRequestAlt } from '../../models/change-deal-by-supplier-request-alt.interface';
import { DealsChangeDealByParticipant$Params } from '../../../swagger/fn/deals/deals-change-deal-by-participant';
import { adaptApiChangeDealBySupplierRequestAltDto } from '../../adapters/toDto/api-change-deal-by-supplier-request.adapter';

export interface DealsChangeDealByParticipantParams {
  body?: ChangeDealBySupplierRequestAlt;
}

export const dealsChangeDealByParticipantParamsAdapter = {
  adapt(params?: DealsChangeDealByParticipantParams): DealsChangeDealByParticipant$Params {
    if (!params) {
      return {} as DealsChangeDealByParticipant$Params;
    }
    return {
      body: adaptApiChangeDealBySupplierRequestAltDto(params.body),
    };
  }
};
