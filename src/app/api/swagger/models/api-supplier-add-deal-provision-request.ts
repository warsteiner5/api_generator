/* tslint:disable */
/* eslint-disable */
import { ApiContractGuaranteePaymentTypeAltEnum } from '../models/api-contract-guarantee-payment-type';
export interface ApiSupplierAddDealProvisionRequestAltDto {
  ContractGuaranteePaymentType?: ApiContractGuaranteePaymentTypeAltEnum | null;
  ContractGuaranteeRequired?: boolean;
  FileGuids?: Array<string> | null;
}
