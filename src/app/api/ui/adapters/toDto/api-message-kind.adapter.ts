import { MessageKindAltEnum } from '../../enums/message-kind-alt.enum';
import { ApiMessageKindAltEnum } from '../../../swagger/models/api-message-kind';

export function adaptApiMessageKindAltEnum(source?: MessageKindAltEnum | null): ApiMessageKindAltEnum {
  switch (source) {
    case MessageKindAltEnum.System:
      return ApiMessageKindAltEnum.System;
    case MessageKindAltEnum.Operator:
      return ApiMessageKindAltEnum.Operator;
    case MessageKindAltEnum.User:
      return ApiMessageKindAltEnum.User;
    case MessageKindAltEnum.Mailing:
      return ApiMessageKindAltEnum.Mailing;
    case MessageKindAltEnum.Invite:
      return ApiMessageKindAltEnum.Invite;
    case MessageKindAltEnum.OosIntegration:
      return ApiMessageKindAltEnum.OosIntegration;
    case MessageKindAltEnum.MarketSystem:
      return ApiMessageKindAltEnum.MarketSystem;
    case MessageKindAltEnum.Commercial:
      return ApiMessageKindAltEnum.Commercial;
    case MessageKindAltEnum.EatSystem:
      return ApiMessageKindAltEnum.EatSystem;
    default:
      throw new Error(`Enum value is not defined: MessageKindAltEnum=${String(source)}`);
  }
}
