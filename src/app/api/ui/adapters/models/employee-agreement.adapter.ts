import { ApiEmployeeAgreementDto } from '../../../swagger/models/api-employee-agreement-dto';
import { EmployeeAgreement } from '../../models/employee-agreement.interface';
import { employeeAgreementDocumentAdapter } from './employee-agreement-document.adapter';

export const employeeAgreementAdapter = (source?: ApiEmployeeAgreementDto | null): EmployeeAgreement => {
  return {
    documents: source?.Documents?.map((item) => employeeAgreementDocumentAdapter(item)),
    isRegulationRequired: source?.IsRegulationRequired,
  };
}
