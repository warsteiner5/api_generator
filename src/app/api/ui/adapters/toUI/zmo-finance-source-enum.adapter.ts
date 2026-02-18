import { ApiZmoFinanceSourceEnum } from '../../../swagger/models/api-zmo-finance-source-enum';
import { ZmoFinanceSourceEnum } from '../../enums/zmo-finance-source.enum';

export function adaptZmoFinanceSourceEnumToUI(source?: ApiZmoFinanceSourceEnum | null): ZmoFinanceSourceEnum {
  switch (source) {
    case ApiZmoFinanceSourceEnum.MixedBudget:
      return ZmoFinanceSourceEnum.MixedBudget;
    case ApiZmoFinanceSourceEnum.Budget:
      return ZmoFinanceSourceEnum.Budget;
    case ApiZmoFinanceSourceEnum.OutOfBudget:
      return ZmoFinanceSourceEnum.OutOfBudget;
    case ApiZmoFinanceSourceEnum.MunicipalBudget:
      return ZmoFinanceSourceEnum.MunicipalBudget;
    case ApiZmoFinanceSourceEnum.RegionalBudget:
      return ZmoFinanceSourceEnum.RegionalBudget;
    case ApiZmoFinanceSourceEnum.FederalBudget:
      return ZmoFinanceSourceEnum.FederalBudget;
    default:
      throw new Error(`Enum value is not defined: ApiZmoFinanceSourceEnum=${String(source)}`);
  }
}
