import { EmployeeAgreementConfirmationRequestAlt } from '../../models/employee-agreement-confirmation-request-alt.interface';
import { ApiEmployeeAgreementConfirmationRequestAltDto } from '../../../swagger/models/api-employee-agreement-confirmation-request';
import { adaptApiEmployeeAgreementConfirmationDocumentDto } from './api-employee-agreement-confirmation-document-dto.adapter';

export function adaptApiEmployeeAgreementConfirmationRequestAltDto(source?: EmployeeAgreementConfirmationRequestAlt | null): ApiEmployeeAgreementConfirmationRequestAltDto {
  return {
    Documents: (source?.documents ?? []).map((item) => adaptApiEmployeeAgreementConfirmationDocumentDto(item)),
    RegulationType: source?.regulationType,
  };
}
