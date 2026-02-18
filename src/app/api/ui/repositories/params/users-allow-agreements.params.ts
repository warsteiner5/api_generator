import { EmployeeAgreementConfirmationRequestAlt } from '../../models/employee-agreement-confirmation-request-alt.interface';
import { UsersAllowAgreements$Params } from '../../../swagger/fn/users/users-allow-agreements';
import { adaptApiEmployeeAgreementConfirmationRequestAltDto } from '../../adapters/toDto/api-employee-agreement-confirmation-request.adapter';

export interface UsersAllowAgreementsParams {
  body?: EmployeeAgreementConfirmationRequestAlt;
}

export const usersAllowAgreementsParamsAdapter = {
  adapt(params?: UsersAllowAgreementsParams): UsersAllowAgreements$Params {
    if (!params) {
      return {} as UsersAllowAgreements$Params;
    }
    return {
      body: adaptApiEmployeeAgreementConfirmationRequestAltDto(params.body),
    };
  }
};
