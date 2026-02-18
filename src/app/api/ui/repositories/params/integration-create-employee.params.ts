import { CreateEmployeeRequestAlt } from '../../models/create-employee-request-alt.interface';
import { IntegrationCreateEmployee$Params } from '../../../swagger/fn/integration/integration-create-employee';
import { adaptApiCreateEmployeeRequestAltDto } from '../../adapters/toDto/api-create-employee-request.adapter';

export interface IntegrationCreateEmployeeParams {
  body?: CreateEmployeeRequestAlt;
}

export const integrationCreateEmployeeParamsAdapter = {
  adapt(params?: IntegrationCreateEmployeeParams): IntegrationCreateEmployee$Params {
    if (!params) {
      return {} as IntegrationCreateEmployee$Params;
    }
    return {
      body: adaptApiCreateEmployeeRequestAltDto(params.body),
    };
  }
};
