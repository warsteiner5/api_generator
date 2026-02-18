import { ApiSupplierAddDealProvisionRequestAltDto } from '../../../swagger/models/api-supplier-add-deal-provision-request';
import { SupplierAddDealProvisionRequestAlt } from '../../models/supplier-add-deal-provision-request-alt.interface';
import { adaptContractGuaranteePaymentTypeAltEnumToUI } from './contract-guarantee-payment-type-alt-enum.adapter';

export function adaptSupplierAddDealProvisionRequestAltToUI(source?: ApiSupplierAddDealProvisionRequestAltDto | null): SupplierAddDealProvisionRequestAlt {
  return {
    contractGuaranteePaymentType: adaptContractGuaranteePaymentTypeAltEnumToUI(source?.ContractGuaranteePaymentType),
    contractGuaranteeRequired: source?.ContractGuaranteeRequired ?? false,
    fileGuids: source?.FileGuids ?? [],
  };
}
