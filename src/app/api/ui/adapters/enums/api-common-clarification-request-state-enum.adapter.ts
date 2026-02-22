import { CommonClarificationRequestStateEnum } from '../../enums/common-clarification-request-state.enum';
import { ApiCommonClarificationRequestStateEnum } from '../../../swagger/models/api-common-clarification-request-state-enum';

export const apiCommonClarificationRequestStateEnumAdapter = (source?: CommonClarificationRequestStateEnum | null): ApiCommonClarificationRequestStateEnum => {
  switch (source) {
    case CommonClarificationRequestStateEnum.New:
      return ApiCommonClarificationRequestStateEnum.New;
    case CommonClarificationRequestStateEnum.Responded:
      return ApiCommonClarificationRequestStateEnum.Responded;
    case CommonClarificationRequestStateEnum.Draft:
      return ApiCommonClarificationRequestStateEnum.Draft;
    case CommonClarificationRequestStateEnum.ResponseExpired:
      return ApiCommonClarificationRequestStateEnum.ResponseExpired;
    case CommonClarificationRequestStateEnum.ReadyToPublish:
      return ApiCommonClarificationRequestStateEnum.ReadyToPublish;
    default:
      throw new Error(`Enum value is not defined: CommonClarificationRequestStateEnum=${String(source)}`);
  }
}
