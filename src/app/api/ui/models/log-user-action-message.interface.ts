export interface LogUserActionMessage {
  entityId: number;
  isManager: boolean;
  organizationId: number;
  tenantId: number;
  url: string;
  userActionDescriptionId: number;
  userGuid: string;
  userId: number;
}
