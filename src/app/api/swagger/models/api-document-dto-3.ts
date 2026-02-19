/* tslint:disable */
/* eslint-disable */
import { ApiEntityDtoBase } from '../models/api-entity-dto-base';
import { ApiTradeDocumentTypeEnum } from '../models/api-trade-document-type-enum';
export type ApiDocumentDto3 = ApiEntityDtoBase & {
'_isAccreditationString'?: string | null;
'Name'?: string | null;
'FileGuid'?: string;
'FileName'?: string | null;
'UserFio'?: string | null;
'Tag'?: number;
'TradeDocumentType'?: ApiTradeDocumentTypeEnum | null;
'Type'?: string | null;
'isAccreditationString'?: string | null;
'DocumentContent'?: string | null;
'ChangeDate'?: string | null;
'SoapHash'?: string | null;
'Base64Hash'?: string | null;
'Signature'?: string | null;
'UploadDate'?: string | null;
'Size'?: number | null;
'FromLastRevision'?: boolean | null;
};
