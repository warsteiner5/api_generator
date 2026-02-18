import { DealGetNextDealNumberIfTenantConfigAllows$Params } from '../../../swagger/fn/deal/deal-get-next-deal-number-if-tenant-config-allows';

export interface DealGetNextDealNumberIfTenantConfigAllowsParams {
}

export const dealGetNextDealNumberIfTenantConfigAllowsParamsAdapter = {
  adapt(params?: DealGetNextDealNumberIfTenantConfigAllowsParams): DealGetNextDealNumberIfTenantConfigAllows$Params {
    if (!params) {
      return {} as DealGetNextDealNumberIfTenantConfigAllows$Params;
    }
    return {
    };
  }
};
