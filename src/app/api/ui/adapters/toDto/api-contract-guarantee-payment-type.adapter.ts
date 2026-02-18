import { ContractGuaranteePaymentTypeAltEnum } from '../../enums/contract-guarantee-payment-type-alt.enum';
import { ApiContractGuaranteePaymentTypeAltEnum } from '../../../swagger/models/api-contract-guarantee-payment-type';

export function adaptApiContractGuaranteePaymentTypeAltEnum(source?: ContractGuaranteePaymentTypeAltEnum | null): ApiContractGuaranteePaymentTypeAltEnum {
  switch (source) {
    case ContractGuaranteePaymentTypeAltEnum.Cash:
      return ApiContractGuaranteePaymentTypeAltEnum.Cash;
    case ContractGuaranteePaymentTypeAltEnum.BankGuarantee:
      return ApiContractGuaranteePaymentTypeAltEnum.BankGuarantee;
    case ContractGuaranteePaymentTypeAltEnum.ProviderIsGoverment:
      return ApiContractGuaranteePaymentTypeAltEnum.ProviderIsGoverment;
    case ContractGuaranteePaymentTypeAltEnum.NotProvided:
      return ApiContractGuaranteePaymentTypeAltEnum.NotProvided;
    default:
      throw new Error(`Enum value is not defined: ContractGuaranteePaymentTypeAltEnum=${String(source)}`);
  }
}
