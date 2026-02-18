/* tslint:disable */
/* eslint-disable */
import { ApiAdditionalAgreementDocumentDto } from '../models/api-additional-agreement-document-dto';
import { ApiAdditionalAgreementFormEnum } from '../models/api-additional-agreement-form-enum';
import { ApiAdditionalAgreementInitiatorEnum } from '../models/api-additional-agreement-initiator-enum';
import { ApiAdditionalAgreementStateEnum } from '../models/api-additional-agreement-state-enum';
export interface ApiAdditionalAgreementDto {
  ConclusionDate?: string | null;
  CreateDate?: string;
  CurrentOrganizationId?: number;
  DealId?: number;
  Documents?: Array<ApiAdditionalAgreementDocumentDto> | null;
  Id?: number;
  InitiatorOrganizationId?: number;
  InitiatorType?: ApiAdditionalAgreementInitiatorEnum;
  Number?: string | null;
  RejectReason?: string | null;
  SentDate?: string | null;
  SignByInitiatorDate?: string | null;
  SignDate?: string | null;
  State?: ApiAdditionalAgreementStateEnum;
  Type?: ApiAdditionalAgreementFormEnum;
}
