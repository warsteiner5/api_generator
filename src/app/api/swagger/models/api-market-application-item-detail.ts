/* tslint:disable */
/* eslint-disable */
import { ApiCommissionDecisionStatusEnum } from '../models/api-commission-decision-status-enum';
import { ApiManufactureTypeEnum } from '../models/api-manufacture-type-enum';
import { ApiMeetsRequirementsEnum } from '../models/api-meets-requirements-enum';
export interface ApiMarketApplicationItemDetailAltDto {
  CountryConfirmation?: string | null;
  DecisionStatus?: ApiCommissionDecisionStatusEnum | null;
  Id?: number;
  IncomplianceReason?: string | null;
  IsApproveBtnShown?: boolean;
  IsLotPriceWithVat?: boolean | null;
  IsParticipantOfferActive?: boolean | null;
  IsParticipantOfferToTradeSourceManual?: boolean | null;
  IsWinner?: boolean | null;
  LotItemId?: number;
  LotItemOrder?: number;
  ManufacturerCountryCode?: string | null;
  ManufacturerCountryName?: string | null;
  ManufacturerType?: ApiManufactureTypeEnum;
  MeetsRequirements?: ApiMeetsRequirementsEnum;
  ParticipantOfferId?: number | null;
  ParticipantOfferPublishDate?: string | null;
  Price?: number | null;
  PriceWithVat?: number | null;
  Quantity?: number | null;
  ResultPosition?: number | null;
  SumVat?: number | null;
  TaxPercent?: number | null;
  TradeLotApplicationId?: number;
  UnitPrice?: number | null;
  UnitPriceWithVat?: number | null;
}
