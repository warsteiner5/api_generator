import { ApiSupplierAddDealProvisionRequestAltDto } from '../../../swagger/models/api-supplier-add-deal-provision-request';
import { SupplierAddDealProvisionRequestAlt } from '../../models/supplier-add-deal-provision-request-alt.interface';
import { contractGuaranteePaymentTypeAltEnumAdapter } from '../enums/contract-guarantee-payment-type-alt-enum.adapter';

export const supplierAddDealProvisionRequestAltAdapter = (source?: ApiSupplierAddDealProvisionRequestAltDto | null): SupplierAddDealProvisionRequestAlt => {
  return {
    contractGuaranteePaymentType: source?.ContractGuaranteePaymentType === null ? undefined : contractGuaranteePaymentTypeAltEnumAdapter(source?.ContractGuaranteePaymentType),
    contractGuaranteeRequired: source?.ContractGuaranteeRequired,
    fileGuids: source?.FileGuids,
  };
}
