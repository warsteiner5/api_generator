import { DealsRejectChangeFormToPaper$Params } from '../../../swagger/fn/deals/deals-reject-change-form-to-paper';
import { RejectChangeFormToPaper } from '../../models/reject-change-form-to-paper.interface';
import { adaptApiRejectChangeFormToPaperDto } from '../../adapters/toDto/api-reject-change-form-to-paper-dto.adapter';

export interface DealsRejectChangeFormToPaperParams {
  body?: RejectChangeFormToPaper;
}

export const dealsRejectChangeFormToPaperParamsAdapter = {
  adapt(params?: DealsRejectChangeFormToPaperParams): DealsRejectChangeFormToPaper$Params {
    if (!params) {
      return {} as DealsRejectChangeFormToPaper$Params;
    }
    return {
      body: adaptApiRejectChangeFormToPaperDto(params.body),
    };
  }
};
