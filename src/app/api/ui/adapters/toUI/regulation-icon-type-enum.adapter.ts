import { ApiRegulationIconTypeEnum } from '../../../swagger/models/api-regulation-icon-type-enum';
import { RegulationIconTypeEnum } from '../../enums/regulation-icon-type.enum';

export function adaptRegulationIconTypeEnumToUI(source?: ApiRegulationIconTypeEnum | null): RegulationIconTypeEnum {
  switch (source) {
    case ApiRegulationIconTypeEnum.Link:
      return RegulationIconTypeEnum.Link;
    case ApiRegulationIconTypeEnum.Document:
      return RegulationIconTypeEnum.Document;
    default:
      throw new Error(`Enum value is not defined: ApiRegulationIconTypeEnum=${String(source)}`);
  }
}
