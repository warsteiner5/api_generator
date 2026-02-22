import { EmployeeAgreementConfirmationRequestAlt } from '../../models/employee-agreement-confirmation-request-alt.interface';
import { UsersAllowAgreements$Params } from '../../../swagger/fn/users/users-allow-agreements';
import { apiEmployeeAgreementConfirmationRequestAltDtoAdapter } from '../../adapters/models/api-employee-agreement-confirmation-request.adapter';

// @ts-ignore
export interface UsersAllowAgreementsParams {
  body?: EmployeeAgreementConfirmationRequestAlt;
}

export function usersAllowAgreementsAdapter(params?: UsersAllowAgreementsParams): UsersAllowAgreements$Params {
  if (!params) {
    return {} as UsersAllowAgreements$Params;
  }
  return {
      body: apiEmployeeAgreementConfirmationRequestAltDtoAdapter(params.body),
  };
}
