import { AdditionalAgreementInitiatorEnum } from '../../enums/additional-agreement-initiator.enum';
import { ApiAdditionalAgreementInitiatorEnum } from '../../../swagger/models/api-additional-agreement-initiator-enum';

export const apiAdditionalAgreementInitiatorEnumAdapter = (source?: AdditionalAgreementInitiatorEnum | null): ApiAdditionalAgreementInitiatorEnum => {
  switch (source) {
    case AdditionalAgreementInitiatorEnum.Customer:
      return ApiAdditionalAgreementInitiatorEnum.Customer;
    case AdditionalAgreementInitiatorEnum.Supplier:
      return ApiAdditionalAgreementInitiatorEnum.Supplier;
    default:
      throw new Error(`Enum value is not defined: AdditionalAgreementInitiatorEnum=${String(source)}`);
  }
}
