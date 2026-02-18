import { ChangeForm } from '../../models/change-form.interface';
import { DealsChangeForm$Params } from '../../../swagger/fn/deals/deals-change-form';
import { adaptApiChangeFormDto } from '../../adapters/toDto/api-change-form-dto.adapter';

export interface DealsChangeFormParams {
  body?: ChangeForm;
}

export const dealsChangeFormParamsAdapter = {
  adapt(params?: DealsChangeFormParams): DealsChangeForm$Params {
    if (!params) {
      return {} as DealsChangeForm$Params;
    }
    return {
      body: adaptApiChangeFormDto(params.body),
    };
  }
};
