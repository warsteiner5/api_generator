import { ApiEmployeeAgreementConfirmationRequestAltDto } from '../../../swagger/models/api-employee-agreement-confirmation-request';
import { EmployeeAgreementConfirmationRequestAlt } from '../../models/employee-agreement-confirmation-request-alt.interface';
import { employeeAgreementConfirmationDocumentAdapter } from './employee-agreement-confirmation-document.adapter';

export const employeeAgreementConfirmationRequestAltAdapter = (source?: ApiEmployeeAgreementConfirmationRequestAltDto | null): EmployeeAgreementConfirmationRequestAlt => {
  return {
    documents: source?.Documents?.map((item) => employeeAgreementConfirmationDocumentAdapter(item)),
    regulationType: source?.RegulationType,
  };
}
