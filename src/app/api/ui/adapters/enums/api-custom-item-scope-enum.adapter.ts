import { CustomItemScopeEnum } from '../../enums/custom-item-scope.enum';
import { ApiCustomItemScopeEnum } from '../../../swagger/models/api-custom-item-scope-enum';

export const apiCustomItemScopeEnumAdapter = (source?: CustomItemScopeEnum | null): ApiCustomItemScopeEnum => {
  switch (source) {
    case CustomItemScopeEnum.None:
      return ApiCustomItemScopeEnum.None;
    case CustomItemScopeEnum.Customer:
      return ApiCustomItemScopeEnum.Customer;
    case CustomItemScopeEnum.Supplier:
      return ApiCustomItemScopeEnum.Supplier;
    case CustomItemScopeEnum.Operator:
      return ApiCustomItemScopeEnum.Operator;
    case CustomItemScopeEnum.Supervisor:
      return ApiCustomItemScopeEnum.Supervisor;
    default:
      throw new Error(`Enum value is not defined: CustomItemScopeEnum=${String(source)}`);
  }
}
