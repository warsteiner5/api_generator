/* tslint:disable */
/* eslint-disable */
import { ApiAdditionalAgreementDocumentDto } from '../models/api-additional-agreement-document-dto';
import { ApiAdditionalAgreementFormEnum } from '../models/api-additional-agreement-form-enum';
export interface ApiCreateAdditionalAgreementDto {
  DealId?: number;
  Documents?: Array<ApiAdditionalAgreementDocumentDto> | null;
  Number?: string | null;
  Type?: ApiAdditionalAgreementFormEnum;
}
