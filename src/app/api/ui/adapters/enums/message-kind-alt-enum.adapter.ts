import { ApiMessageKindAltEnum } from '../../../swagger/models/api-message-kind';
import { MessageKindAltEnum } from '../../enums/message-kind-alt.enum';

export const messageKindAltEnumAdapter = (source?: ApiMessageKindAltEnum | null): MessageKindAltEnum => {
  switch (source) {
    case ApiMessageKindAltEnum.System:
      return MessageKindAltEnum.System;
    case ApiMessageKindAltEnum.Operator:
      return MessageKindAltEnum.Operator;
    case ApiMessageKindAltEnum.User:
      return MessageKindAltEnum.User;
    case ApiMessageKindAltEnum.Mailing:
      return MessageKindAltEnum.Mailing;
    case ApiMessageKindAltEnum.Invite:
      return MessageKindAltEnum.Invite;
    case ApiMessageKindAltEnum.OosIntegration:
      return MessageKindAltEnum.OosIntegration;
    case ApiMessageKindAltEnum.MarketSystem:
      return MessageKindAltEnum.MarketSystem;
    case ApiMessageKindAltEnum.Commercial:
      return MessageKindAltEnum.Commercial;
    case ApiMessageKindAltEnum.EatSystem:
      return MessageKindAltEnum.EatSystem;
    default:
      throw new Error(`Enum value is not defined: ApiMessageKindAltEnum=${String(source)}`);
  }
}
