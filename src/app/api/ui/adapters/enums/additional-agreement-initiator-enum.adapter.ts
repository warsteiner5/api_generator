import { ApiAdditionalAgreementInitiatorEnum } from '../../../swagger/models/api-additional-agreement-initiator-enum';
import { AdditionalAgreementInitiatorEnum } from '../../enums/additional-agreement-initiator.enum';

export const additionalAgreementInitiatorEnumAdapter = (source?: ApiAdditionalAgreementInitiatorEnum | null): AdditionalAgreementInitiatorEnum => {
  switch (source) {
    case ApiAdditionalAgreementInitiatorEnum.Customer:
      return AdditionalAgreementInitiatorEnum.Customer;
    case ApiAdditionalAgreementInitiatorEnum.Supplier:
      return AdditionalAgreementInitiatorEnum.Supplier;
    default:
      throw new Error(`Enum value is not defined: ApiAdditionalAgreementInitiatorEnum=${String(source)}`);
  }
}
