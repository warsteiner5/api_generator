/* tslint:disable */
/* eslint-disable */
import { ApiApplicationSourceEnum } from '../models/api-application-source-enum';
import { ApiApplicationStateEnum } from '../models/api-application-state-enum';
import { ApiAuctionBidDto } from '../models/api-auction-bid-dto';
import { ApiAvailableVatTypeEnum } from '../models/api-available-vat-type-enum';
import { ApiManufactureTypeEnum } from '../models/api-manufacture-type-enum';
import { ApiMarketApplicationItemDetailAltDto } from '../models/api-market-application-item-detail';
import { ApiMeetsRequirementsEnum } from '../models/api-meets-requirements-enum';
import { ApiParticipantInfoDto } from '../models/api-participant-info-dto';
export interface ApiMarketApplicationDetailAltDto {
  ApplicationSource?: ApiApplicationSourceEnum | null;
  ApplicationState?: ApiApplicationStateEnum;
  AuctionBids?: Array<ApiAuctionBidDto> | null;
  CommissionBlocked?: number | null;
  ConditionsOfPayment?: string | null;
  DeliveryPlace?: string | null;
  DeliveryTerms?: string | null;
  DiscussionId?: number | null;
  GuaranteeBlocked?: number | null;
  Id?: number;
  IncomplianceReason?: string | null;
  IsApproveBtnShown?: boolean;
  /** @deprecated */IsLotPriceWithVat?: boolean;
  IsMyApplication?: boolean;
  IsPriceCorridorExclusion?: boolean | null;
  IsPriceCorridorMatching?: boolean | null;
  IsQuotationWithVat?: boolean | null;
  IsRevokeBtnShown?: boolean;
  IsWinner?: boolean;
  LotItemApplications?: Array<ApiMarketApplicationItemDetailAltDto> | null;
  ManufactureType?: ApiManufactureTypeEnum;
  MeetsRequirements?: ApiMeetsRequirementsEnum;
  OrganizationGuid?: string;
  OrganizationName?: string | null;
  ParticipantInfo?: ApiParticipantInfoDto | null;
  ParticipantOfferPublishDate?: string | null;
  Price?: number | null;
  PriceWithVat?: number | null;
  PublicationDate?: string | null;
  RateVat?: ApiAvailableVatTypeEnum | null;
  ShipmentPoint?: string | null;
  SumVat?: number | null;
  TaxPercent?: number | null;
  TenantSource?: number | null;
  WaitingBank?: boolean;
}
