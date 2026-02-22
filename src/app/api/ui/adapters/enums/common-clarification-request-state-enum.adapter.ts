import { ApiCommonClarificationRequestStateEnum } from '../../../swagger/models/api-common-clarification-request-state-enum';
import { CommonClarificationRequestStateEnum } from '../../enums/common-clarification-request-state.enum';

export const commonClarificationRequestStateEnumAdapter = (source?: ApiCommonClarificationRequestStateEnum | null): CommonClarificationRequestStateEnum => {
  switch (source) {
    case ApiCommonClarificationRequestStateEnum.New:
      return CommonClarificationRequestStateEnum.New;
    case ApiCommonClarificationRequestStateEnum.Responded:
      return CommonClarificationRequestStateEnum.Responded;
    case ApiCommonClarificationRequestStateEnum.Draft:
      return CommonClarificationRequestStateEnum.Draft;
    case ApiCommonClarificationRequestStateEnum.ResponseExpired:
      return CommonClarificationRequestStateEnum.ResponseExpired;
    case ApiCommonClarificationRequestStateEnum.ReadyToPublish:
      return CommonClarificationRequestStateEnum.ReadyToPublish;
    default:
      throw new Error(`Enum value is not defined: ApiCommonClarificationRequestStateEnum=${String(source)}`);
  }
}
