/* tslint:disable */
/* eslint-disable */
import { ApiQuotationSessionDetailAltDto } from '../models/api-quotation-session-detail';
export interface ApiQuotationSessionImportDetailsResponseAltDto {
  Details?: Array<ApiQuotationSessionDetailAltDto> | null;
  ErrorText?: string | null;
  ErrorsFileUrl?: string | null;
  IsSuccess?: boolean;
}
