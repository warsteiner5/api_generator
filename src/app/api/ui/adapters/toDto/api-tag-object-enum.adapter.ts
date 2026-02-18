import { TagObjectEnum } from '../../enums/tag-object.enum';
import { ApiTagObjectEnum } from '../../../swagger/models/api-tag-object-enum';

export function adaptApiTagObjectEnum(source?: TagObjectEnum | null): ApiTagObjectEnum {
  switch (source) {
    case TagObjectEnum.Participant:
      return ApiTagObjectEnum.Participant;
    case TagObjectEnum.ParticipantOffer:
      return ApiTagObjectEnum.ParticipantOffer;
    default:
      throw new Error(`Enum value is not defined: TagObjectEnum=${String(source)}`);
  }
}
