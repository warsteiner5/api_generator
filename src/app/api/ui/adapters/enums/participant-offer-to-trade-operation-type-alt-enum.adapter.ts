import { ApiParticipantOfferToTradeOperationTypeAltEnum } from '../../../swagger/models/api-participant-offer-to-trade-operation-type';
import { ParticipantOfferToTradeOperationTypeAltEnum } from '../../enums/participant-offer-to-trade-operation-type-alt.enum';

export const participantOfferToTradeOperationTypeAltEnumAdapter = (source?: ApiParticipantOfferToTradeOperationTypeAltEnum | null): ParticipantOfferToTradeOperationTypeAltEnum => {
  switch (source) {
    case ApiParticipantOfferToTradeOperationTypeAltEnum.Unknow:
      return ParticipantOfferToTradeOperationTypeAltEnum.Unknow;
    case ApiParticipantOfferToTradeOperationTypeAltEnum.SendNotification:
      return ParticipantOfferToTradeOperationTypeAltEnum.SendNotification;
    case ApiParticipantOfferToTradeOperationTypeAltEnum.CreateApplication:
      return ParticipantOfferToTradeOperationTypeAltEnum.CreateApplication;
    case ApiParticipantOfferToTradeOperationTypeAltEnum.CreateParticipantOffer:
      return ParticipantOfferToTradeOperationTypeAltEnum.CreateParticipantOffer;
    case ApiParticipantOfferToTradeOperationTypeAltEnum.CreateExclusiveParticipantOffer:
      return ParticipantOfferToTradeOperationTypeAltEnum.CreateExclusiveParticipantOffer;
    default:
      throw new Error(`Enum value is not defined: ApiParticipantOfferToTradeOperationTypeAltEnum=${String(source)}`);
  }
}
