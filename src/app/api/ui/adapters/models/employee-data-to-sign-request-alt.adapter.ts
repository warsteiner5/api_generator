import { ApiEmployeeDataToSignRequestAltDto } from '../../../swagger/models/api-employee-data-to-sign-request';
import { EmployeeDataToSignRequestAlt } from '../../models/employee-data-to-sign-request-alt.interface';
import { employeeAdapter } from './employee.adapter';

export const employeeDataToSignRequestAltAdapter = (source?: ApiEmployeeDataToSignRequestAltDto | null): EmployeeDataToSignRequestAlt => {
  return {
    employeeDto: source?.EmployeeDto === null ? undefined : employeeAdapter(source?.EmployeeDto),
    signatureAlgorithmOid: source?.SignatureAlgorithmOid,
  };
}
