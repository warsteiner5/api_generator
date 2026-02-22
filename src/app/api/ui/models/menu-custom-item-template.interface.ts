import { ActionTypeEnum } from '../enums/action-type.enum';
import { CustomItemScopeEnum } from '../enums/custom-item-scope.enum';

// @ts-ignore
export interface MenuCustomItemTemplate {
  autoTestId: string;
  children: MenuCustomItemTemplate[];
  isAuthenticationRequired: boolean;
  isExternal: boolean;
  order: number;
  parentMenu: string;
  scope: CustomItemScopeEnum;
  target: string;
  title: string;
  url: string;
  userActionLogId: ActionTypeEnum;
}
