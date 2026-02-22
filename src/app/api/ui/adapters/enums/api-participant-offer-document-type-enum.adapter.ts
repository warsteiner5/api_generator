import { ParticipantOfferDocumentTypeEnum } from '../../enums/participant-offer-document-type.enum';
import { ApiParticipantOfferDocumentTypeEnum } from '../../../swagger/models/api-participant-offer-document-type-enum';

export const apiParticipantOfferDocumentTypeEnumAdapter = (source?: ParticipantOfferDocumentTypeEnum | null): ApiParticipantOfferDocumentTypeEnum => {
  switch (source) {
    case ParticipantOfferDocumentTypeEnum.Other:
      return ApiParticipantOfferDocumentTypeEnum.Other;
    case ParticipantOfferDocumentTypeEnum.MainPicture:
      return ApiParticipantOfferDocumentTypeEnum.MainPicture;
    case ParticipantOfferDocumentTypeEnum.Picture:
      return ApiParticipantOfferDocumentTypeEnum.Picture;
    case ParticipantOfferDocumentTypeEnum.Characteristics:
      return ApiParticipantOfferDocumentTypeEnum.Characteristics;
    case ParticipantOfferDocumentTypeEnum.Smsp:
      return ApiParticipantOfferDocumentTypeEnum.Smsp;
    default:
      throw new Error(`Enum value is not defined: ParticipantOfferDocumentTypeEnum=${String(source)}`);
  }
}
