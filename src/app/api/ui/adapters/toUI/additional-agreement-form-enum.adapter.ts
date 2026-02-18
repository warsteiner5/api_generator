import { ApiAdditionalAgreementFormEnum } from '../../../swagger/models/api-additional-agreement-form-enum';
import { AdditionalAgreementFormEnum } from '../../enums/additional-agreement-form.enum';

export function adaptAdditionalAgreementFormEnumToUI(source?: ApiAdditionalAgreementFormEnum | null): AdditionalAgreementFormEnum {
  switch (source) {
    case ApiAdditionalAgreementFormEnum.Electronic:
      return AdditionalAgreementFormEnum.Electronic;
    case ApiAdditionalAgreementFormEnum.Paper:
      return AdditionalAgreementFormEnum.Paper;
    default:
      throw new Error(`Enum value is not defined: ApiAdditionalAgreementFormEnum=${String(source)}`);
  }
}
