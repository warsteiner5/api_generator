import { ContractGuaranteePaymentTypeAltEnum } from '../enums/contract-guarantee-payment-type-alt.enum';

export interface SupplierAddDealProvisionRequestAlt {
  contractGuaranteePaymentType: ContractGuaranteePaymentTypeAltEnum;
  contractGuaranteeRequired: boolean;
  fileGuids: string[];
}
