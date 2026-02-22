import { ApiTenantFlowTypeAltEnum } from '../../../swagger/models/api-tenant-flow-type';
import { TenantFlowTypeAltEnum } from '../../enums/tenant-flow-type-alt.enum';

export const tenantFlowTypeAltEnumAdapter = (source?: ApiTenantFlowTypeAltEnum | null): TenantFlowTypeAltEnum => {
  switch (source) {
    case ApiTenantFlowTypeAltEnum.Zmo:
      return TenantFlowTypeAltEnum.Zmo;
    case ApiTenantFlowTypeAltEnum.Market:
      return TenantFlowTypeAltEnum.Market;
    case ApiTenantFlowTypeAltEnum.MarketRzd:
      return TenantFlowTypeAltEnum.MarketRzd;
    case ApiTenantFlowTypeAltEnum.RussiaPost:
      return TenantFlowTypeAltEnum.RussiaPost;
    case ApiTenantFlowTypeAltEnum.MarketWithOwner:
      return TenantFlowTypeAltEnum.MarketWithOwner;
    case ApiTenantFlowTypeAltEnum.Fsk:
      return TenantFlowTypeAltEnum.Fsk;
    case ApiTenantFlowTypeAltEnum.PreliminaryOffer:
      return TenantFlowTypeAltEnum.PreliminaryOffer;
    default:
      throw new Error(`Enum value is not defined: ApiTenantFlowTypeAltEnum=${String(source)}`);
  }
}
