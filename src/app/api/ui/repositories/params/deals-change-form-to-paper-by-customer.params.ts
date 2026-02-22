import { ChangeFormToPaperByCustomerRequestAlt } from '../../models/change-form-to-paper-by-customer-request-alt.interface';
import { DealsChangeFormToPaperByCustomer$Params } from '../../../swagger/fn/deals/deals-change-form-to-paper-by-customer';
import { apiChangeFormToPaperByCustomerRequestAltDtoAdapter } from '../../adapters/models/api-change-form-to-paper-by-customer-request.adapter';

// @ts-ignore
export interface DealsChangeFormToPaperByCustomerParams {
  id: number;
  body?: ChangeFormToPaperByCustomerRequestAlt;
}

export function dealsChangeFormToPaperByCustomerAdapter(params?: DealsChangeFormToPaperByCustomerParams): DealsChangeFormToPaperByCustomer$Params {
  if (!params) {
    return {} as DealsChangeFormToPaperByCustomer$Params;
  }
  return {
      id: params.id,
      body: apiChangeFormToPaperByCustomerRequestAltDtoAdapter(params.body),
  };
}
