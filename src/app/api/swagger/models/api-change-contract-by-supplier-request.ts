/* tslint:disable */
/* eslint-disable */
import { ApiChatMessageFileWithSignatureDto } from '../models/api-chat-message-file-with-signature-dto';
export interface ApiChangeContractBySupplierRequestAltDto {
  DealFile?: ApiChatMessageFileWithSignatureDto | null;
  DocumentFiles?: Array<ApiChatMessageFileWithSignatureDto> | null;
  PowerOfAttorneyId?: string | null;
}
