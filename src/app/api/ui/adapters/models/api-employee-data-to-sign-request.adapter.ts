import { EmployeeDataToSignRequestAlt } from '../../models/employee-data-to-sign-request-alt.interface';
import { ApiEmployeeDataToSignRequestAltDto } from '../../../swagger/models/api-employee-data-to-sign-request';
import { apiEmployeeDtoAdapter } from './api-employee-dto.adapter';

export const apiEmployeeDataToSignRequestAltDtoAdapter = (source?: EmployeeDataToSignRequestAlt | null): ApiEmployeeDataToSignRequestAltDto => {
  return {
    EmployeeDto: source?.employeeDto === null ? undefined : apiEmployeeDtoAdapter(source?.employeeDto),
    SignatureAlgorithmOid: source?.signatureAlgorithmOid,
  };
}
