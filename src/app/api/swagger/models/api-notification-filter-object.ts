/* tslint:disable */
/* eslint-disable */
import { ApiBaseFilterObjectAltDto } from '../models/api-base-filter-object';
import { ApiNotificationTypeEnum } from '../models/api-notification-type-enum';
export type ApiNotificationFilterObjectAltDto = ApiBaseFilterObjectAltDto & {
'Sender'?: string | null;
'Message'?: string | null;
'Type'?: ApiNotificationTypeEnum | null;
'UnreadOnly'?: boolean;
'IsMarketNotification'?: boolean;
'OrganizationIds'?: Array<number> | null;
};
