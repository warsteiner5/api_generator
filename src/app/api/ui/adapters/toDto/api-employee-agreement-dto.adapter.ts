import { EmployeeAgreement } from '../../models/employee-agreement.interface';
import { ApiEmployeeAgreementDto } from '../../../swagger/models/api-employee-agreement-dto';
import { adaptApiEmployeeAgreementDocumentDto } from './api-employee-agreement-document-dto.adapter';

export function adaptApiEmployeeAgreementDto(source?: EmployeeAgreement | null): ApiEmployeeAgreementDto {
  return {
    Documents: (source?.documents ?? []).map((item) => adaptApiEmployeeAgreementDocumentDto(item)),
    IsRegulationRequired: source?.isRegulationRequired,
  };
}
