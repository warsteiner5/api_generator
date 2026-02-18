import { ApiEmployeeDataToSignRequestAltDto } from '../../../swagger/models/api-employee-data-to-sign-request';
import { EmployeeDataToSignRequestAlt } from '../../models/employee-data-to-sign-request-alt.interface';
import { adaptEmployeeToUI } from './employee.adapter';

export function adaptEmployeeDataToSignRequestAltToUI(source?: ApiEmployeeDataToSignRequestAltDto | null): EmployeeDataToSignRequestAlt {
  return {
    employeeDto: adaptEmployeeToUI(source?.EmployeeDto),
    signatureAlgorithmOid: source?.SignatureAlgorithmOid ?? '',
  };
}
