/* tslint:disable */
/* eslint-disable */
import { ApiActionTypeEnum } from '../models/api-action-type-enum';
import { ApiCustomItemScopeEnum } from '../models/api-custom-item-scope-enum';
export interface ApiMenuCustomItemTemplateDto {
  AutoTestId?: string | null;
  Children?: Array<ApiMenuCustomItemTemplateDto> | null;
  IsAuthenticationRequired?: boolean;
  IsExternal?: boolean;
  Order?: number;
  ParentMenu?: string | null;
  Scope?: ApiCustomItemScopeEnum;
  Target?: string | null;
  Title?: string | null;
  Url?: string | null;
  UserActionLogId?: ApiActionTypeEnum;
}
