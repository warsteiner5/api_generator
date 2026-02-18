import { PurchasePlanKindAltEnum } from '../../enums/purchase-plan-kind-alt.enum';
import { ApiPurchasePlanKindAltEnum } from '../../../swagger/models/api-purchase-plan-kind';

export function adaptApiPurchasePlanKindAltEnum(source?: PurchasePlanKindAltEnum | null): ApiPurchasePlanKindAltEnum {
  switch (source) {
    case PurchasePlanKindAltEnum.PlanPurchase:
      return ApiPurchasePlanKindAltEnum.PlanPurchase;
    case PurchasePlanKindAltEnum.PlanPurchaseInnovationAndHiTecAndMedProd:
      return ApiPurchasePlanKindAltEnum.PlanPurchaseInnovationAndHiTecAndMedProd;
    case PurchasePlanKindAltEnum.PlanPurchaseSmallVolume:
      return ApiPurchasePlanKindAltEnum.PlanPurchaseSmallVolume;
    case PurchasePlanKindAltEnum.PlanPurchaseCommercial:
      return ApiPurchasePlanKindAltEnum.PlanPurchaseCommercial;
    default:
      throw new Error(`Enum value is not defined: PurchasePlanKindAltEnum=${String(source)}`);
  }
}
