import { AdditionalAgreementFormEnum } from '../../enums/additional-agreement-form.enum';
import { ApiAdditionalAgreementFormEnum } from '../../../swagger/models/api-additional-agreement-form-enum';

export function adaptApiAdditionalAgreementFormEnum(source?: AdditionalAgreementFormEnum | null): ApiAdditionalAgreementFormEnum {
  switch (source) {
    case AdditionalAgreementFormEnum.Electronic:
      return ApiAdditionalAgreementFormEnum.Electronic;
    case AdditionalAgreementFormEnum.Paper:
      return ApiAdditionalAgreementFormEnum.Paper;
    default:
      throw new Error(`Enum value is not defined: AdditionalAgreementFormEnum=${String(source)}`);
  }
}
