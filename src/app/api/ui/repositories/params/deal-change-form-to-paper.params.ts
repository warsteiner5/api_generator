import { ChangeDealForm } from '../../models/change-deal-form.interface';
import { DealChangeFormToPaper$Params } from '../../../swagger/fn/deal/deal-change-form-to-paper';
import { adaptApiChangeDealFormDto } from '../../adapters/toDto/api-change-deal-form-dto.adapter';

export interface DealChangeFormToPaperParams {
  body?: ChangeDealForm;
}

export const dealChangeFormToPaperParamsAdapter = {
  adapt(params?: DealChangeFormToPaperParams): DealChangeFormToPaper$Params {
    if (!params) {
      return {} as DealChangeFormToPaper$Params;
    }
    return {
      body: adaptApiChangeDealFormDto(params.body),
    };
  }
};
