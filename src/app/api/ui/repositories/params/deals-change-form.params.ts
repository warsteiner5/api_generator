import { ChangeForm } from '../../models/change-form.interface';
import { DealsChangeForm$Params } from '../../../swagger/fn/deals/deals-change-form';
import { apiChangeFormDtoAdapter } from '../../adapters/models/api-change-form-dto.adapter';

// @ts-ignore
export interface DealsChangeFormParams {
  body?: ChangeForm;
}

export function dealsChangeFormAdapter(params?: DealsChangeFormParams): DealsChangeForm$Params {
  if (!params) {
    return {} as DealsChangeForm$Params;
  }
  return {
      body: apiChangeFormDtoAdapter(params.body),
  };
}
