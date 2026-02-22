import { ApiAdditionalAgreementStateEnum } from '../../../swagger/models/api-additional-agreement-state-enum';
import { AdditionalAgreementStateEnum } from '../../enums/additional-agreement-state.enum';

export const additionalAgreementStateEnumAdapter = (source?: ApiAdditionalAgreementStateEnum | null): AdditionalAgreementStateEnum => {
  switch (source) {
    case ApiAdditionalAgreementStateEnum.Created:
      return AdditionalAgreementStateEnum.Created;
    case ApiAdditionalAgreementStateEnum.SentToCustomer:
      return AdditionalAgreementStateEnum.SentToCustomer;
    case ApiAdditionalAgreementStateEnum.SentToSupplier:
      return AdditionalAgreementStateEnum.SentToSupplier;
    case ApiAdditionalAgreementStateEnum.RejectedByCustomer:
      return AdditionalAgreementStateEnum.RejectedByCustomer;
    case ApiAdditionalAgreementStateEnum.RejectedBySupplier:
      return AdditionalAgreementStateEnum.RejectedBySupplier;
    case ApiAdditionalAgreementStateEnum.Concluded:
      return AdditionalAgreementStateEnum.Concluded;
    default:
      throw new Error(`Enum value is not defined: ApiAdditionalAgreementStateEnum=${String(source)}`);
  }
}
