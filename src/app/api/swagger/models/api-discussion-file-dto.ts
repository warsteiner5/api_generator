/* tslint:disable */
/* eslint-disable */
import { ApiDocumentDto } from '../models/api-document-dto';
import { ApiUserFullNameAltDto } from '../models/api-user-full-name';
export type ApiDiscussionFileDto = ApiDocumentDto & {
'Name'?: string | null;
'UserId'?: number | null;
'UserName'?: ApiUserFullNameAltDto | null;
'Size'?: number | null;
'FileGuid'?: string;
'DiscussionId'?: number;
};
