import { SupplierFinanceTransitionToRtsTenderPro$Params } from '../../../swagger/fn/supplier-finance/supplier-finance-transition-to-rts-tender-pro';

export interface SupplierFinanceTransitionToRtsTenderProParams {
  tenantId: number;
}

export const supplierFinanceTransitionToRtsTenderProParamsAdapter = {
  adapt(params?: SupplierFinanceTransitionToRtsTenderProParams): SupplierFinanceTransitionToRtsTenderPro$Params {
    if (!params) {
      return {} as SupplierFinanceTransitionToRtsTenderPro$Params;
    }
    return {
      tenantId: params.tenantId,
    };
  }
};
