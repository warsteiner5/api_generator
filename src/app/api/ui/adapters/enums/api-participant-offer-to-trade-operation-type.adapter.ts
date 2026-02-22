import { ParticipantOfferToTradeOperationTypeAltEnum } from '../../enums/participant-offer-to-trade-operation-type-alt.enum';
import { ApiParticipantOfferToTradeOperationTypeAltEnum } from '../../../swagger/models/api-participant-offer-to-trade-operation-type';

export const apiParticipantOfferToTradeOperationTypeAltEnumAdapter = (source?: ParticipantOfferToTradeOperationTypeAltEnum | null): ApiParticipantOfferToTradeOperationTypeAltEnum => {
  switch (source) {
    case ParticipantOfferToTradeOperationTypeAltEnum.Unknow:
      return ApiParticipantOfferToTradeOperationTypeAltEnum.Unknow;
    case ParticipantOfferToTradeOperationTypeAltEnum.SendNotification:
      return ApiParticipantOfferToTradeOperationTypeAltEnum.SendNotification;
    case ParticipantOfferToTradeOperationTypeAltEnum.CreateApplication:
      return ApiParticipantOfferToTradeOperationTypeAltEnum.CreateApplication;
    case ParticipantOfferToTradeOperationTypeAltEnum.CreateParticipantOffer:
      return ApiParticipantOfferToTradeOperationTypeAltEnum.CreateParticipantOffer;
    case ParticipantOfferToTradeOperationTypeAltEnum.CreateExclusiveParticipantOffer:
      return ApiParticipantOfferToTradeOperationTypeAltEnum.CreateExclusiveParticipantOffer;
    default:
      throw new Error(`Enum value is not defined: ParticipantOfferToTradeOperationTypeAltEnum=${String(source)}`);
  }
}
