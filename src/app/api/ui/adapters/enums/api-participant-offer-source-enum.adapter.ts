import { ParticipantOfferSourceEnum } from '../../enums/participant-offer-source.enum';
import { ApiParticipantOfferSourceEnum } from '../../../swagger/models/api-participant-offer-source-enum';

export const apiParticipantOfferSourceEnumAdapter = (source?: ParticipantOfferSourceEnum | null): ApiParticipantOfferSourceEnum => {
  switch (source) {
    case ParticipantOfferSourceEnum.Zmo:
      return ApiParticipantOfferSourceEnum.Zmo;
    case ParticipantOfferSourceEnum.Market:
      return ApiParticipantOfferSourceEnum.Market;
    case ParticipantOfferSourceEnum.StarDrug:
      return ApiParticipantOfferSourceEnum.StarDrug;
    case ParticipantOfferSourceEnum.MinPromTorg:
      return ApiParticipantOfferSourceEnum.MinPromTorg;
    case ParticipantOfferSourceEnum.SalesTech:
      return ApiParticipantOfferSourceEnum.SalesTech;
    case ParticipantOfferSourceEnum.ExportBy:
      return ApiParticipantOfferSourceEnum.ExportBy;
    default:
      throw new Error(`Enum value is not defined: ParticipantOfferSourceEnum=${String(source)}`);
  }
}
