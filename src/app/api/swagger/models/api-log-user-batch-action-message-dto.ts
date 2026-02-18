/* tslint:disable */
/* eslint-disable */
import { ApiShortFilterDto } from '../models/api-short-filter-dto';
export interface ApiLogUserBatchActionMessageDto {
  AffectedRecordsCount?: number | null;
  EntityId?: number | null;
  Filter?: ApiShortFilterDto | null;
  IsManager?: boolean;
  OrganizationId?: number | null;
  TenantId?: number;
  Url?: string | null;
  UserActionDescriptionId?: number;
  UserGuid?: string;
  UserId?: number | null;
}
