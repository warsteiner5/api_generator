import { MenuCustomItemTemplate } from '../../models/menu-custom-item-template.interface';
import { ApiMenuCustomItemTemplateDto } from '../../../swagger/models/api-menu-custom-item-template-dto';
import { adaptApiActionTypeEnum } from './api-action-type-enum.adapter';
import { adaptApiCustomItemScopeEnum } from './api-custom-item-scope-enum.adapter';

export function adaptApiMenuCustomItemTemplateDto(source?: MenuCustomItemTemplate | null): ApiMenuCustomItemTemplateDto {
  return {
    AutoTestId: source?.autoTestId,
    Children: (source?.children ?? []).map((item) => adaptApiMenuCustomItemTemplateDto(item)),
    IsAuthenticationRequired: source?.isAuthenticationRequired,
    IsExternal: source?.isExternal,
    Order: source?.order,
    ParentMenu: source?.parentMenu,
    Scope: adaptApiCustomItemScopeEnum(source?.scope),
    Target: source?.target,
    Title: source?.title,
    Url: source?.url,
    UserActionLogId: adaptApiActionTypeEnum(source?.userActionLogId),
  };
}
