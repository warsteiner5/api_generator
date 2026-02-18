import { ApiCustomItemScopeEnum } from '../../../swagger/models/api-custom-item-scope-enum';
import { CustomItemScopeEnum } from '../../enums/custom-item-scope.enum';

export function adaptCustomItemScopeEnumToUI(source?: ApiCustomItemScopeEnum | null): CustomItemScopeEnum {
  switch (source) {
    case ApiCustomItemScopeEnum.None:
      return CustomItemScopeEnum.None;
    case ApiCustomItemScopeEnum.Customer:
      return CustomItemScopeEnum.Customer;
    case ApiCustomItemScopeEnum.Supplier:
      return CustomItemScopeEnum.Supplier;
    case ApiCustomItemScopeEnum.Operator:
      return CustomItemScopeEnum.Operator;
    case ApiCustomItemScopeEnum.Supervisor:
      return CustomItemScopeEnum.Supervisor;
    default:
      throw new Error(`Enum value is not defined: ApiCustomItemScopeEnum=${String(source)}`);
  }
}
