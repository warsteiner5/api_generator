import { ApiContractGuaranteePaymentTypeAltEnum } from '../../../swagger/models/api-contract-guarantee-payment-type';
import { ContractGuaranteePaymentTypeAltEnum } from '../../enums/contract-guarantee-payment-type-alt.enum';

export const contractGuaranteePaymentTypeAltEnumAdapter = (source?: ApiContractGuaranteePaymentTypeAltEnum | null): ContractGuaranteePaymentTypeAltEnum => {
  switch (source) {
    case ApiContractGuaranteePaymentTypeAltEnum.Cash:
      return ContractGuaranteePaymentTypeAltEnum.Cash;
    case ApiContractGuaranteePaymentTypeAltEnum.BankGuarantee:
      return ContractGuaranteePaymentTypeAltEnum.BankGuarantee;
    case ApiContractGuaranteePaymentTypeAltEnum.ProviderIsGoverment:
      return ContractGuaranteePaymentTypeAltEnum.ProviderIsGoverment;
    case ApiContractGuaranteePaymentTypeAltEnum.NotProvided:
      return ContractGuaranteePaymentTypeAltEnum.NotProvided;
    default:
      throw new Error(`Enum value is not defined: ApiContractGuaranteePaymentTypeAltEnum=${String(source)}`);
  }
}
