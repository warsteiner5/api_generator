import { TenantFlowTypeAltEnum } from '../../enums/tenant-flow-type-alt.enum';
import { ApiTenantFlowTypeAltEnum } from '../../../swagger/models/api-tenant-flow-type';

export function adaptApiTenantFlowTypeAltEnum(source?: TenantFlowTypeAltEnum | null): ApiTenantFlowTypeAltEnum {
  switch (source) {
    case TenantFlowTypeAltEnum.Zmo:
      return ApiTenantFlowTypeAltEnum.Zmo;
    case TenantFlowTypeAltEnum.Market:
      return ApiTenantFlowTypeAltEnum.Market;
    case TenantFlowTypeAltEnum.MarketRzd:
      return ApiTenantFlowTypeAltEnum.MarketRzd;
    case TenantFlowTypeAltEnum.RussiaPost:
      return ApiTenantFlowTypeAltEnum.RussiaPost;
    case TenantFlowTypeAltEnum.MarketWithOwner:
      return ApiTenantFlowTypeAltEnum.MarketWithOwner;
    case TenantFlowTypeAltEnum.Fsk:
      return ApiTenantFlowTypeAltEnum.Fsk;
    case TenantFlowTypeAltEnum.PreliminaryOffer:
      return ApiTenantFlowTypeAltEnum.PreliminaryOffer;
    default:
      throw new Error(`Enum value is not defined: TenantFlowTypeAltEnum=${String(source)}`);
  }
}
