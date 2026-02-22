import { ShortFilter } from './short-filter.interface';

// @ts-ignore
export interface LogUserBatchActionMessage {
  affectedRecordsCount: number;
  entityId: number;
  filter: ShortFilter;
  isManager: boolean;
  organizationId: number;
  tenantId: number;
  url: string;
  userActionDescriptionId: number;
  userGuid: string;
  userId: number;
}
