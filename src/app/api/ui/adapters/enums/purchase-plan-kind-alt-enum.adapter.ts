import { ApiPurchasePlanKindAltEnum } from '../../../swagger/models/api-purchase-plan-kind';
import { PurchasePlanKindAltEnum } from '../../enums/purchase-plan-kind-alt.enum';

export const purchasePlanKindAltEnumAdapter = (source?: ApiPurchasePlanKindAltEnum | null): PurchasePlanKindAltEnum => {
  switch (source) {
    case ApiPurchasePlanKindAltEnum.PlanPurchase:
      return PurchasePlanKindAltEnum.PlanPurchase;
    case ApiPurchasePlanKindAltEnum.PlanPurchaseInnovationAndHiTecAndMedProd:
      return PurchasePlanKindAltEnum.PlanPurchaseInnovationAndHiTecAndMedProd;
    case ApiPurchasePlanKindAltEnum.PlanPurchaseSmallVolume:
      return PurchasePlanKindAltEnum.PlanPurchaseSmallVolume;
    case ApiPurchasePlanKindAltEnum.PlanPurchaseCommercial:
      return PurchasePlanKindAltEnum.PlanPurchaseCommercial;
    default:
      throw new Error(`Enum value is not defined: ApiPurchasePlanKindAltEnum=${String(source)}`);
  }
}
