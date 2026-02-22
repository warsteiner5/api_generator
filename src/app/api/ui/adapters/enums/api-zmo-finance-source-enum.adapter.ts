import { ZmoFinanceSourceEnum } from '../../enums/zmo-finance-source.enum';
import { ApiZmoFinanceSourceEnum } from '../../../swagger/models/api-zmo-finance-source-enum';

export const apiZmoFinanceSourceEnumAdapter = (source?: ZmoFinanceSourceEnum | null): ApiZmoFinanceSourceEnum => {
  switch (source) {
    case ZmoFinanceSourceEnum.MixedBudget:
      return ApiZmoFinanceSourceEnum.MixedBudget;
    case ZmoFinanceSourceEnum.Budget:
      return ApiZmoFinanceSourceEnum.Budget;
    case ZmoFinanceSourceEnum.OutOfBudget:
      return ApiZmoFinanceSourceEnum.OutOfBudget;
    case ZmoFinanceSourceEnum.MunicipalBudget:
      return ApiZmoFinanceSourceEnum.MunicipalBudget;
    case ZmoFinanceSourceEnum.RegionalBudget:
      return ApiZmoFinanceSourceEnum.RegionalBudget;
    case ZmoFinanceSourceEnum.FederalBudget:
      return ApiZmoFinanceSourceEnum.FederalBudget;
    default:
      throw new Error(`Enum value is not defined: ZmoFinanceSourceEnum=${String(source)}`);
  }
}
