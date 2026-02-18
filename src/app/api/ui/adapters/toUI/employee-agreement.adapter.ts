import { ApiEmployeeAgreementDto } from '../../../swagger/models/api-employee-agreement-dto';
import { EmployeeAgreement } from '../../models/employee-agreement.interface';
import { adaptEmployeeAgreementDocumentToUI } from './employee-agreement-document.adapter';

export function adaptEmployeeAgreementToUI(source?: ApiEmployeeAgreementDto | null): EmployeeAgreement {
  return {
    documents: (source?.Documents ?? []).map((item) => adaptEmployeeAgreementDocumentToUI(item)),
    isRegulationRequired: source?.IsRegulationRequired ?? false,
  };
}
