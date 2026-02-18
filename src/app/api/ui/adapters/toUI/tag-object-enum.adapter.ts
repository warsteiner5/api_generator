import { ApiTagObjectEnum } from '../../../swagger/models/api-tag-object-enum';
import { TagObjectEnum } from '../../enums/tag-object.enum';

export function adaptTagObjectEnumToUI(source?: ApiTagObjectEnum | null): TagObjectEnum {
  switch (source) {
    case ApiTagObjectEnum.Participant:
      return TagObjectEnum.Participant;
    case ApiTagObjectEnum.ParticipantOffer:
      return TagObjectEnum.ParticipantOffer;
    default:
      throw new Error(`Enum value is not defined: ApiTagObjectEnum=${String(source)}`);
  }
}
