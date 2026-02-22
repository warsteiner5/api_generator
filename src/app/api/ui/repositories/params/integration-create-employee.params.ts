import { CreateEmployeeRequestAlt } from '../../models/create-employee-request-alt.interface';
import { IntegrationCreateEmployee$Params } from '../../../swagger/fn/integration/integration-create-employee';
import { apiCreateEmployeeRequestAltDtoAdapter } from '../../adapters/models/api-create-employee-request.adapter';

// @ts-ignore
export interface IntegrationCreateEmployeeParams {
  body?: CreateEmployeeRequestAlt;
}

export function integrationCreateEmployeeAdapter(params?: IntegrationCreateEmployeeParams): IntegrationCreateEmployee$Params {
  if (!params) {
    return {} as IntegrationCreateEmployee$Params;
  }
  return {
      body: apiCreateEmployeeRequestAltDtoAdapter(params.body),
  };
}
