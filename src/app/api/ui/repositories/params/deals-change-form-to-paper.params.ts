import { ChangeDealForm } from '../../models/change-deal-form.interface';
import { DealsChangeFormToPaper$Params } from '../../../swagger/fn/deals/deals-change-form-to-paper';
import { adaptApiChangeDealFormDto } from '../../adapters/toDto/api-change-deal-form-dto.adapter';

export interface DealsChangeFormToPaperParams {
  body?: ChangeDealForm;
}

export const dealsChangeFormToPaperParamsAdapter = {
  adapt(params?: DealsChangeFormToPaperParams): DealsChangeFormToPaper$Params {
    if (!params) {
      return {} as DealsChangeFormToPaper$Params;
    }
    return {
      body: adaptApiChangeDealFormDto(params.body),
    };
  }
};
