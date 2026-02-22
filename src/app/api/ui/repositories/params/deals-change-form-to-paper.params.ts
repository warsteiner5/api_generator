import { ChangeDealForm } from '../../models/change-deal-form.interface';
import { DealsChangeFormToPaper$Params } from '../../../swagger/fn/deals/deals-change-form-to-paper';
import { apiChangeDealFormDtoAdapter } from '../../adapters/models/api-change-deal-form-dto.adapter';

// @ts-ignore
export interface DealsChangeFormToPaperParams {
  body?: ChangeDealForm;
}

export function dealsChangeFormToPaperAdapter(params?: DealsChangeFormToPaperParams): DealsChangeFormToPaper$Params {
  if (!params) {
    return {} as DealsChangeFormToPaper$Params;
  }
  return {
      body: apiChangeDealFormDtoAdapter(params.body),
  };
}
