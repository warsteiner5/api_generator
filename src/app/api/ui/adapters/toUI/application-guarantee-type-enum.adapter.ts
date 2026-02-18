import { ApiApplicationGuaranteeTypeEnum } from '../../../swagger/models/api-application-guarantee-type-enum';
import { ApplicationGuaranteeTypeEnum } from '../../enums/application-guarantee-type.enum';

export function adaptApplicationGuaranteeTypeEnumToUI(source?: ApiApplicationGuaranteeTypeEnum | null): ApplicationGuaranteeTypeEnum {
  switch (source) {
    case ApiApplicationGuaranteeTypeEnum.Undefined:
      return ApplicationGuaranteeTypeEnum.Undefined;
    case ApiApplicationGuaranteeTypeEnum.Percent:
      return ApplicationGuaranteeTypeEnum.Percent;
    case ApiApplicationGuaranteeTypeEnum.Fixed:
      return ApplicationGuaranteeTypeEnum.Fixed;
    case ApiApplicationGuaranteeTypeEnum.Bank:
      return ApplicationGuaranteeTypeEnum.Bank;
    case ApiApplicationGuaranteeTypeEnum.No:
      return ApplicationGuaranteeTypeEnum.No;
    case ApiApplicationGuaranteeTypeEnum.ByDocuments:
      return ApplicationGuaranteeTypeEnum.ByDocuments;
    default:
      throw new Error(`Enum value is not defined: ApiApplicationGuaranteeTypeEnum=${String(source)}`);
  }
}
