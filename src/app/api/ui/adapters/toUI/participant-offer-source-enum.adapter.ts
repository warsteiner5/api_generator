import { ApiParticipantOfferSourceEnum } from '../../../swagger/models/api-participant-offer-source-enum';
import { ParticipantOfferSourceEnum } from '../../enums/participant-offer-source.enum';

export function adaptParticipantOfferSourceEnumToUI(source?: ApiParticipantOfferSourceEnum | null): ParticipantOfferSourceEnum {
  switch (source) {
    case ApiParticipantOfferSourceEnum.Zmo:
      return ParticipantOfferSourceEnum.Zmo;
    case ApiParticipantOfferSourceEnum.Market:
      return ParticipantOfferSourceEnum.Market;
    case ApiParticipantOfferSourceEnum.StarDrug:
      return ParticipantOfferSourceEnum.StarDrug;
    case ApiParticipantOfferSourceEnum.MinPromTorg:
      return ParticipantOfferSourceEnum.MinPromTorg;
    case ApiParticipantOfferSourceEnum.SalesTech:
      return ParticipantOfferSourceEnum.SalesTech;
    case ApiParticipantOfferSourceEnum.ExportBy:
      return ParticipantOfferSourceEnum.ExportBy;
    default:
      throw new Error(`Enum value is not defined: ApiParticipantOfferSourceEnum=${String(source)}`);
  }
}
