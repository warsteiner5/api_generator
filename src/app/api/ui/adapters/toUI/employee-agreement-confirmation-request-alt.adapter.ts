import { ApiEmployeeAgreementConfirmationRequestAltDto } from '../../../swagger/models/api-employee-agreement-confirmation-request';
import { EmployeeAgreementConfirmationRequestAlt } from '../../models/employee-agreement-confirmation-request-alt.interface';
import { adaptEmployeeAgreementConfirmationDocumentToUI } from './employee-agreement-confirmation-document.adapter';

export function adaptEmployeeAgreementConfirmationRequestAltToUI(source?: ApiEmployeeAgreementConfirmationRequestAltDto | null): EmployeeAgreementConfirmationRequestAlt {
  return {
    documents: (source?.Documents ?? []).map((item) => adaptEmployeeAgreementConfirmationDocumentToUI(item)),
    regulationType: source?.RegulationType ?? 0,
  };
}
