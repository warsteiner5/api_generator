/* tslint:disable */
/* eslint-disable */
import { ApiCreateCustomerComissionProtocolDto } from '../models/api-create-customer-comission-protocol-dto';
import { ApiTradeDocumentDto } from '../models/api-trade-document-dto';
export type ApiPublishCustomerComissionProtocolDto = ApiCreateCustomerComissionProtocolDto & {
'FileIdList'?: Array<ApiTradeDocumentDto> | null;
};
