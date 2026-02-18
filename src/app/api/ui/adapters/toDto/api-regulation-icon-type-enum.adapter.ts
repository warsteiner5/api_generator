import { RegulationIconTypeEnum } from '../../enums/regulation-icon-type.enum';
import { ApiRegulationIconTypeEnum } from '../../../swagger/models/api-regulation-icon-type-enum';

export function adaptApiRegulationIconTypeEnum(source?: RegulationIconTypeEnum | null): ApiRegulationIconTypeEnum {
  switch (source) {
    case RegulationIconTypeEnum.Link:
      return ApiRegulationIconTypeEnum.Link;
    case RegulationIconTypeEnum.Document:
      return ApiRegulationIconTypeEnum.Document;
    default:
      throw new Error(`Enum value is not defined: RegulationIconTypeEnum=${String(source)}`);
  }
}
