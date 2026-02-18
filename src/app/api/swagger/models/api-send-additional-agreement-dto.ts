/* tslint:disable */
/* eslint-disable */
import { ApiSignatureForAdditionalAgreementDto } from '../models/api-signature-for-additional-agreement-dto';
export interface ApiSendAdditionalAgreementDto {
  DealId?: number;
  Id?: number;
  Signature?: ApiSignatureForAdditionalAgreementDto | null;
  TradeId?: number;
}
