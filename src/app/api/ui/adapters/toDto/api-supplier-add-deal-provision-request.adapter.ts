import { SupplierAddDealProvisionRequestAlt } from '../../models/supplier-add-deal-provision-request-alt.interface';
import { ApiSupplierAddDealProvisionRequestAltDto } from '../../../swagger/models/api-supplier-add-deal-provision-request';
import { adaptApiContractGuaranteePaymentTypeAltEnum } from './api-contract-guarantee-payment-type.adapter';

export function adaptApiSupplierAddDealProvisionRequestAltDto(source?: SupplierAddDealProvisionRequestAlt | null): ApiSupplierAddDealProvisionRequestAltDto {
  return {
    ContractGuaranteePaymentType: adaptApiContractGuaranteePaymentTypeAltEnum(source?.contractGuaranteePaymentType),
    ContractGuaranteeRequired: source?.contractGuaranteeRequired,
    FileGuids: source?.fileGuids ?? [],
  };
}
