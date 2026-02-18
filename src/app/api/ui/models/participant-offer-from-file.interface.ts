import { ParticipantOfferSourceEnum } from '../enums/participant-offer-source.enum';

export interface ParticipantOfferFromFile {
  fileGuid: string;
  source: ParticipantOfferSourceEnum;
}
