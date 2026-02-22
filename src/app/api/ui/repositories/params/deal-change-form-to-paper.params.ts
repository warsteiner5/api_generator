import { ChangeDealForm } from '../../models/change-deal-form.interface';
import { DealChangeFormToPaper$Params } from '../../../swagger/fn/deal/deal-change-form-to-paper';
import { apiChangeDealFormDtoAdapter } from '../../adapters/models/api-change-deal-form-dto.adapter';

// @ts-ignore
export interface DealChangeFormToPaperParams {
  body?: ChangeDealForm;
}

export function dealChangeFormToPaperAdapter(params?: DealChangeFormToPaperParams): DealChangeFormToPaper$Params {
  if (!params) {
    return {} as DealChangeFormToPaper$Params;
  }
  return {
      body: apiChangeDealFormDtoAdapter(params.body),
  };
}
