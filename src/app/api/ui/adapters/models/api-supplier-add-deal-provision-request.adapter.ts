import { SupplierAddDealProvisionRequestAlt } from '../../models/supplier-add-deal-provision-request-alt.interface';
import { ApiSupplierAddDealProvisionRequestAltDto } from '../../../swagger/models/api-supplier-add-deal-provision-request';
import { apiContractGuaranteePaymentTypeAltEnumAdapter } from '../enums/api-contract-guarantee-payment-type.adapter';

export const apiSupplierAddDealProvisionRequestAltDtoAdapter = (source?: SupplierAddDealProvisionRequestAlt | null): ApiSupplierAddDealProvisionRequestAltDto => {
  return {
    ContractGuaranteePaymentType: source?.contractGuaranteePaymentType === null ? undefined : apiContractGuaranteePaymentTypeAltEnumAdapter(source?.contractGuaranteePaymentType),
    ContractGuaranteeRequired: source?.contractGuaranteeRequired,
    FileGuids: source?.fileGuids,
  };
}
