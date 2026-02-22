import { DealsRejectChangeFormToPaper$Params } from '../../../swagger/fn/deals/deals-reject-change-form-to-paper';
import { RejectChangeFormToPaper } from '../../models/reject-change-form-to-paper.interface';
import { apiRejectChangeFormToPaperDtoAdapter } from '../../adapters/models/api-reject-change-form-to-paper-dto.adapter';

// @ts-ignore
export interface DealsRejectChangeFormToPaperParams {
  body?: RejectChangeFormToPaper;
}

export function dealsRejectChangeFormToPaperAdapter(params?: DealsRejectChangeFormToPaperParams): DealsRejectChangeFormToPaper$Params {
  if (!params) {
    return {} as DealsRejectChangeFormToPaper$Params;
  }
  return {
      body: apiRejectChangeFormToPaperDtoAdapter(params.body),
  };
}
