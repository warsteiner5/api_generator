/* tslint:disable */
/* eslint-disable */
import { ApiConsiderationProtocolDocumentTypeEnum } from '../models/api-consideration-protocol-document-type-enum';
import { ApiDocumentDto3 } from '../models/api-document-dto-3';
export type ApiConsiderationProtocolDocumentDto = ApiDocumentDto3 & {
'DocumentType'?: ApiConsiderationProtocolDocumentTypeEnum | null;
};
