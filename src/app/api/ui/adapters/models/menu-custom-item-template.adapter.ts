import { ApiMenuCustomItemTemplateDto } from '../../../swagger/models/api-menu-custom-item-template-dto';
import { MenuCustomItemTemplate } from '../../models/menu-custom-item-template.interface';
import { actionTypeEnumAdapter } from '../enums/action-type-enum.adapter';
import { customItemScopeEnumAdapter } from '../enums/custom-item-scope-enum.adapter';

export const menuCustomItemTemplateAdapter = (source?: ApiMenuCustomItemTemplateDto | null): MenuCustomItemTemplate => {
  return {
    autoTestId: source?.AutoTestId,
    children: source?.Children?.map((item) => menuCustomItemTemplateAdapter(item)),
    isAuthenticationRequired: source?.IsAuthenticationRequired,
    isExternal: source?.IsExternal,
    order: source?.Order,
    parentMenu: source?.ParentMenu,
    scope: source?.Scope === null ? undefined : customItemScopeEnumAdapter(source?.Scope),
    target: source?.Target,
    title: source?.Title,
    url: source?.Url,
    userActionLogId: source?.UserActionLogId === null ? undefined : actionTypeEnumAdapter(source?.UserActionLogId),
  };
}
