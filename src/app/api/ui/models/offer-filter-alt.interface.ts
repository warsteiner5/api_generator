import { BaseFilterObjectAlt } from './base-filter-object-alt.interface';
import { ParticipantOfferSourceEnum } from '../enums/participant-offer-source.enum';
import { ParticipantOfferStateEnum } from '../enums/participant-offer-state.enum';
import { ParticipantOfferTypeEnum } from '../enums/participant-offer-type.enum';
import { UsedClassificatorTypeEnum } from '../enums/used-classificator-type.enum';

// @ts-ignore
export interface OfferFilterAlt extends BaseFilterObjectAlt {
  productName: string;
  subProductName: string;
  usedClassificator: UsedClassificatorTypeEnum;
  classificatorCodes: string[];
  priceFrom: number;
  priceTo: number;
  offerTermsFrom: string;
  offerTermsTo: string;
  offerState: ParticipantOfferStateEnum;
  participantInn: string;
  participantName: string;
  offerType: ParticipantOfferTypeEnum;
  publishDateFrom: string;
  publishDateTo: string;
  isPublicOffer: boolean;
  onlyWithoutPictures: boolean;
  participantOfferSource: ParticipantOfferSourceEnum;
  onlyMyOffers: boolean;
  itemInStock: boolean;
  onOrder: boolean;
  hasPhoto: boolean;
  quantityInStockFrom: number;
  quantityInStockTo: number;
  lastModificationDateFrom: string;
  lastModificationDateTo: string;
  viewsCountFrom: number;
  viewsCountTo: number;
  startedDealsCountFrom: number;
  startedDealsCountTo: number;
  hasStartedDeals: boolean;
  hasCompletedDeals: boolean;
  organizationId: number;
  userId: number;
  parentObjectId: number;
  vendorCode: string;
  sellerCode: string;
  barCode: string;
  categoryIds: string[];
  kladrCodeProductionRegions: string[];
}
