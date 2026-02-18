/* tslint:disable */
/* eslint-disable */
import { ApiEmployeeDocumentToSignDto } from '../models/api-employee-document-to-sign-dto';
export interface ApiEmployeeDataToSignDto {
  EmployeeToSign?: string | null;
  FilesToSign?: Array<ApiEmployeeDocumentToSignDto> | null;
}
