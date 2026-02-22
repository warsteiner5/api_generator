import { AdditionalAgreementStateEnum } from '../../enums/additional-agreement-state.enum';
import { ApiAdditionalAgreementStateEnum } from '../../../swagger/models/api-additional-agreement-state-enum';

export const apiAdditionalAgreementStateEnumAdapter = (source?: AdditionalAgreementStateEnum | null): ApiAdditionalAgreementStateEnum => {
  switch (source) {
    case AdditionalAgreementStateEnum.Created:
      return ApiAdditionalAgreementStateEnum.Created;
    case AdditionalAgreementStateEnum.SentToCustomer:
      return ApiAdditionalAgreementStateEnum.SentToCustomer;
    case AdditionalAgreementStateEnum.SentToSupplier:
      return ApiAdditionalAgreementStateEnum.SentToSupplier;
    case AdditionalAgreementStateEnum.RejectedByCustomer:
      return ApiAdditionalAgreementStateEnum.RejectedByCustomer;
    case AdditionalAgreementStateEnum.RejectedBySupplier:
      return ApiAdditionalAgreementStateEnum.RejectedBySupplier;
    case AdditionalAgreementStateEnum.Concluded:
      return ApiAdditionalAgreementStateEnum.Concluded;
    default:
      throw new Error(`Enum value is not defined: AdditionalAgreementStateEnum=${String(source)}`);
  }
}
