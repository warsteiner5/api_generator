import { B2BCategory } from './b-2-b-category.interface';
import { OkeiShort } from './okei-short.interface';
import { Okpd2 } from './okpd-2.interface';
import { ParticipantOfferStateEnum } from '../enums/participant-offer-state.enum';
import { RegionKladr } from './region-kladr.interface';

// @ts-ignore
export interface MarketOfferShortModel {
  category: B2BCategory;
  countryCode: string;
  id: number;
  images: string[];
  offerState: ParticipantOfferStateEnum;
  okei: OkeiShort;
  okeiCode: string;
  okpd2Codes: Okpd2[];
  organizationGuid: string;
  price: number;
  priceListId: number;
  productDescription: string;
  productName: string;
  quantity: number;
  regionalProductSignTenantId: number;
  regions: RegionKladr[];
  wasApproved: boolean;
}
