import { EmployeeDataToSignRequestAlt } from '../../models/employee-data-to-sign-request-alt.interface';
import { ApiEmployeeDataToSignRequestAltDto } from '../../../swagger/models/api-employee-data-to-sign-request';
import { adaptApiEmployeeDto } from './api-employee-dto.adapter';

export function adaptApiEmployeeDataToSignRequestAltDto(source?: EmployeeDataToSignRequestAlt | null): ApiEmployeeDataToSignRequestAltDto {
  return {
    EmployeeDto: adaptApiEmployeeDto(source?.employeeDto),
    SignatureAlgorithmOid: source?.signatureAlgorithmOid,
  };
}
