import { ParticipantOfferSourceEnum } from '../enums/participant-offer-source.enum';

// @ts-ignore
export interface ParticipantOfferFromFile {
  fileGuid: string;
  source: ParticipantOfferSourceEnum;
}
