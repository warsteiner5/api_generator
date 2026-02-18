import { BaseFilterObjectAlt } from './base-filter-object-alt.interface';
import { NotificationTypeEnum } from '../enums/notification-type.enum';

export type NotificationFilterObjectAlt = BaseFilterObjectAlt & { 'Sender'?: string | null; 'Message'?: string | null; 'Type'?: NotificationTypeEnum | null; 'UnreadOnly'?: boolean; 'IsMarketNotification'?: boolean; 'OrganizationIds'?: Array<number> | null; };
