import { ApiParticipantOfferDocumentTypeEnum } from '../../../swagger/models/api-participant-offer-document-type-enum';
import { ParticipantOfferDocumentTypeEnum } from '../../enums/participant-offer-document-type.enum';

export function adaptParticipantOfferDocumentTypeEnumToUI(source?: ApiParticipantOfferDocumentTypeEnum | null): ParticipantOfferDocumentTypeEnum {
  switch (source) {
    case ApiParticipantOfferDocumentTypeEnum.Other:
      return ParticipantOfferDocumentTypeEnum.Other;
    case ApiParticipantOfferDocumentTypeEnum.MainPicture:
      return ParticipantOfferDocumentTypeEnum.MainPicture;
    case ApiParticipantOfferDocumentTypeEnum.Picture:
      return ParticipantOfferDocumentTypeEnum.Picture;
    case ApiParticipantOfferDocumentTypeEnum.Characteristics:
      return ParticipantOfferDocumentTypeEnum.Characteristics;
    case ApiParticipantOfferDocumentTypeEnum.Smsp:
      return ParticipantOfferDocumentTypeEnum.Smsp;
    default:
      throw new Error(`Enum value is not defined: ApiParticipantOfferDocumentTypeEnum=${String(source)}`);
  }
}
