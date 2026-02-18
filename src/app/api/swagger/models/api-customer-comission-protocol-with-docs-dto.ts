/* tslint:disable */
/* eslint-disable */
import { ApiConsiderationProtocolDocumentDto } from '../models/api-consideration-protocol-document-dto';
import { ApiCustomerComissionProtocolDto } from '../models/api-customer-comission-protocol-dto';
import { ApiProtocolTypeEnum } from '../models/api-protocol-type-enum';
export type ApiCustomerComissionProtocolWithDocsDto = ApiCustomerComissionProtocolDto & {
'Documents'?: Array<ApiConsiderationProtocolDocumentDto> | null;
'IsExported'?: boolean;
'PublishDate'?: string | null;
'ProtocolTypeEnum'?: ApiProtocolTypeEnum | null;
};
