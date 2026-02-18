import { ApplicationGuaranteeTypeEnum } from '../../enums/application-guarantee-type.enum';
import { ApiApplicationGuaranteeTypeEnum } from '../../../swagger/models/api-application-guarantee-type-enum';

export function adaptApiApplicationGuaranteeTypeEnum(source?: ApplicationGuaranteeTypeEnum | null): ApiApplicationGuaranteeTypeEnum {
  switch (source) {
    case ApplicationGuaranteeTypeEnum.Undefined:
      return ApiApplicationGuaranteeTypeEnum.Undefined;
    case ApplicationGuaranteeTypeEnum.Percent:
      return ApiApplicationGuaranteeTypeEnum.Percent;
    case ApplicationGuaranteeTypeEnum.Fixed:
      return ApiApplicationGuaranteeTypeEnum.Fixed;
    case ApplicationGuaranteeTypeEnum.Bank:
      return ApiApplicationGuaranteeTypeEnum.Bank;
    case ApplicationGuaranteeTypeEnum.No:
      return ApiApplicationGuaranteeTypeEnum.No;
    case ApplicationGuaranteeTypeEnum.ByDocuments:
      return ApiApplicationGuaranteeTypeEnum.ByDocuments;
    default:
      throw new Error(`Enum value is not defined: ApplicationGuaranteeTypeEnum=${String(source)}`);
  }
}
