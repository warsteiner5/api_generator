import { Okpd2Market } from './okpd-2-market.interface';
import { ParticipantOfferStateEnum } from '../enums/participant-offer-state.enum';

export interface ParticipantOfferDto2 {
  id: number;
  imageUrl: string;
  offerState: ParticipantOfferStateEnum;
  offerTerms: string;
  okeiCode: string;
  okeiDescription: string;
  okpd2Values: Okpd2Market[];
  participantInn: string;
  participantKpp: string;
  productName: string;
  quantity: number;
  unitPrice: number;
}
