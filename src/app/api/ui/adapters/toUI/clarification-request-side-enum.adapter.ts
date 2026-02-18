import { ApiClarificationRequestSideEnum } from '../../../swagger/models/api-clarification-request-side-enum';
import { ClarificationRequestSideEnum } from '../../enums/clarification-request-side.enum';

export function adaptClarificationRequestSideEnumToUI(source?: ApiClarificationRequestSideEnum | null): ClarificationRequestSideEnum {
  switch (source) {
    case ApiClarificationRequestSideEnum.Organizer:
      return ClarificationRequestSideEnum.Organizer;
    case ApiClarificationRequestSideEnum.Customer:
      return ClarificationRequestSideEnum.Customer;
    case ApiClarificationRequestSideEnum.Participant:
      return ClarificationRequestSideEnum.Participant;
    default:
      throw new Error(`Enum value is not defined: ApiClarificationRequestSideEnum=${String(source)}`);
  }
}
