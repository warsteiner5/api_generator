import { ClarificationRequestSideEnum } from '../../enums/clarification-request-side.enum';
import { ApiClarificationRequestSideEnum } from '../../../swagger/models/api-clarification-request-side-enum';

export const apiClarificationRequestSideEnumAdapter = (source?: ClarificationRequestSideEnum | null): ApiClarificationRequestSideEnum => {
  switch (source) {
    case ClarificationRequestSideEnum.Organizer:
      return ApiClarificationRequestSideEnum.Organizer;
    case ClarificationRequestSideEnum.Customer:
      return ApiClarificationRequestSideEnum.Customer;
    case ClarificationRequestSideEnum.Participant:
      return ApiClarificationRequestSideEnum.Participant;
    default:
      throw new Error(`Enum value is not defined: ClarificationRequestSideEnum=${String(source)}`);
  }
}
