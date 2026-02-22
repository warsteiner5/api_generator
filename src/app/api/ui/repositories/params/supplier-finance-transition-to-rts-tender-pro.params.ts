import { SupplierFinanceTransitionToRtsTenderPro$Params } from '../../../swagger/fn/supplier-finance/supplier-finance-transition-to-rts-tender-pro';

// @ts-ignore
export interface SupplierFinanceTransitionToRtsTenderProParams {
  tenantId: number;
}

export function supplierFinanceTransitionToRtsTenderProAdapter(params?: SupplierFinanceTransitionToRtsTenderProParams): SupplierFinanceTransitionToRtsTenderPro$Params {
  if (!params) {
    return {} as SupplierFinanceTransitionToRtsTenderPro$Params;
  }
  return {
      tenantId: params.tenantId,
  };
}
