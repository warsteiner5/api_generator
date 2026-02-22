import { MenuCustomItemTemplate } from '../../models/menu-custom-item-template.interface';
import { ApiMenuCustomItemTemplateDto } from '../../../swagger/models/api-menu-custom-item-template-dto';
import { apiActionTypeEnumAdapter } from '../enums/api-action-type-enum.adapter';
import { apiCustomItemScopeEnumAdapter } from '../enums/api-custom-item-scope-enum.adapter';

export const apiMenuCustomItemTemplateDtoAdapter = (source?: MenuCustomItemTemplate | null): ApiMenuCustomItemTemplateDto => {
  return {
    AutoTestId: source?.autoTestId,
    Children: source?.children?.map((item) => apiMenuCustomItemTemplateDtoAdapter(item)),
    IsAuthenticationRequired: source?.isAuthenticationRequired,
    IsExternal: source?.isExternal,
    Order: source?.order,
    ParentMenu: source?.parentMenu,
    Scope: source?.scope === null ? undefined : apiCustomItemScopeEnumAdapter(source?.scope),
    Target: source?.target,
    Title: source?.title,
    Url: source?.url,
    UserActionLogId: source?.userActionLogId === null ? undefined : apiActionTypeEnumAdapter(source?.userActionLogId),
  };
}
