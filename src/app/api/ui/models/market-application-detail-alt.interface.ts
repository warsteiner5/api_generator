import { ApplicationSourceEnum } from '../enums/application-source.enum';
import { ApplicationStateEnum } from '../enums/application-state.enum';
import { AuctionBid } from './auction-bid.interface';
import { AvailableVatTypeEnum } from '../enums/available-vat-type.enum';
import { ManufactureTypeEnum } from '../enums/manufacture-type.enum';
import { MarketApplicationItemDetailAlt } from './market-application-item-detail-alt.interface';
import { MeetsRequirementsEnum } from '../enums/meets-requirements.enum';
import { ParticipantInfo } from './participant-info.interface';

// @ts-ignore
export interface MarketApplicationDetailAlt {
  applicationSource: ApplicationSourceEnum;
  applicationState: ApplicationStateEnum;
  auctionBids: AuctionBid[];
  commissionBlocked: number;
  conditionsOfPayment: string;
  deliveryPlace: string;
  deliveryTerms: string;
  discussionId: number;
  guaranteeBlocked: number;
  id: number;
  incomplianceReason: string;
  isApproveBtnShown: boolean;
  isLotPriceWithVat: boolean;
  isMyApplication: boolean;
  isPriceCorridorExclusion: boolean;
  isPriceCorridorMatching: boolean;
  isQuotationWithVat: boolean;
  isRevokeBtnShown: boolean;
  isWinner: boolean;
  lotItemApplications: MarketApplicationItemDetailAlt[];
  manufactureType: ManufactureTypeEnum;
  meetsRequirements: MeetsRequirementsEnum;
  organizationGuid: string;
  organizationName: string;
  participantInfo: ParticipantInfo;
  participantOfferPublishDate: string;
  price: number;
  priceWithVat: number;
  publicationDate: string;
  rateVat: AvailableVatTypeEnum;
  shipmentPoint: string;
  sumVat: number;
  taxPercent: number;
  tenantSource: number;
  waitingBank: boolean;
}
