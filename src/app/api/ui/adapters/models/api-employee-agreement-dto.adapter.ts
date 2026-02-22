import { EmployeeAgreement } from '../../models/employee-agreement.interface';
import { ApiEmployeeAgreementDto } from '../../../swagger/models/api-employee-agreement-dto';
import { apiEmployeeAgreementDocumentDtoAdapter } from './api-employee-agreement-document-dto.adapter';

export const apiEmployeeAgreementDtoAdapter = (source?: EmployeeAgreement | null): ApiEmployeeAgreementDto => {
  return {
    Documents: source?.documents?.map((item) => apiEmployeeAgreementDocumentDtoAdapter(item)),
    IsRegulationRequired: source?.isRegulationRequired,
  };
}
