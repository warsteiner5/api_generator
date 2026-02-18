/* tslint:disable */
/* eslint-disable */
import { ApiEmployeeAgreementDocumentDto } from '../models/api-employee-agreement-document-dto';
export interface ApiEmployeeAgreementDto {
  Documents?: Array<ApiEmployeeAgreementDocumentDto> | null;
  IsRegulationRequired?: boolean;
}
