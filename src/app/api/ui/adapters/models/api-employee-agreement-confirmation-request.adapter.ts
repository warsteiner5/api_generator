import { EmployeeAgreementConfirmationRequestAlt } from '../../models/employee-agreement-confirmation-request-alt.interface';
import { ApiEmployeeAgreementConfirmationRequestAltDto } from '../../../swagger/models/api-employee-agreement-confirmation-request';
import { apiEmployeeAgreementConfirmationDocumentDtoAdapter } from './api-employee-agreement-confirmation-document-dto.adapter';

export const apiEmployeeAgreementConfirmationRequestAltDtoAdapter = (source?: EmployeeAgreementConfirmationRequestAlt | null): ApiEmployeeAgreementConfirmationRequestAltDto => {
  return {
    Documents: source?.documents?.map((item) => apiEmployeeAgreementConfirmationDocumentDtoAdapter(item)),
    RegulationType: source?.regulationType,
  };
}
