/* tslint:disable */
/* eslint-disable */
import { ApiCertificateDto } from '../models/api-certificate-dto';
export interface ApiParsedCertificateDto {
  Certificate?: ApiCertificateDto | null;
  ErrorMessage?: string | null;
  IsSuccess?: boolean;
}
