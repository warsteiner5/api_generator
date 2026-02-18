import { ApiMenuCustomItemTemplateDto } from '../../../swagger/models/api-menu-custom-item-template-dto';
import { MenuCustomItemTemplate } from '../../models/menu-custom-item-template.interface';
import { adaptActionTypeEnumToUI } from './action-type-enum.adapter';
import { adaptCustomItemScopeEnumToUI } from './custom-item-scope-enum.adapter';

export function adaptMenuCustomItemTemplateToUI(source?: ApiMenuCustomItemTemplateDto | null): MenuCustomItemTemplate {
  return {
    autoTestId: source?.AutoTestId ?? '',
    children: (source?.Children ?? []).map((item) => adaptMenuCustomItemTemplateToUI(item)),
    isAuthenticationRequired: source?.IsAuthenticationRequired ?? false,
    isExternal: source?.IsExternal ?? false,
    order: source?.Order ?? 0,
    parentMenu: source?.ParentMenu ?? '',
    scope: adaptCustomItemScopeEnumToUI(source?.Scope),
    target: source?.Target ?? '',
    title: source?.Title ?? '',
    url: source?.Url ?? '',
    userActionLogId: adaptActionTypeEnumToUI(source?.UserActionLogId),
  };
}
