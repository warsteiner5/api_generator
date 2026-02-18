import { MarketApplicationItemDetailAlt } from '../../models/market-application-item-detail-alt.interface';
import { ApiMarketApplicationItemDetailAltDto } from '../../../swagger/models/api-market-application-item-detail';
import { adaptApiCommissionDecisionStatusEnum } from './api-commission-decision-status-enum.adapter';
import { adaptApiManufactureTypeEnum } from './api-manufacture-type-enum.adapter';
import { adaptApiMeetsRequirementsEnum } from './api-meets-requirements-enum.adapter';

export function adaptApiMarketApplicationItemDetailAltDto(source?: MarketApplicationItemDetailAlt | null): ApiMarketApplicationItemDetailAltDto {
  return {
    CountryConfirmation: source?.countryConfirmation,
    DecisionStatus: adaptApiCommissionDecisionStatusEnum(source?.decisionStatus),
    Id: source?.id,
    IncomplianceReason: source?.incomplianceReason,
    IsApproveBtnShown: source?.isApproveBtnShown,
    IsLotPriceWithVat: source?.isLotPriceWithVat,
    IsParticipantOfferActive: source?.isParticipantOfferActive,
    IsParticipantOfferToTradeSourceManual: source?.isParticipantOfferToTradeSourceManual,
    IsWinner: source?.isWinner,
    LotItemId: source?.lotItemId,
    LotItemOrder: source?.lotItemOrder,
    ManufacturerCountryCode: source?.manufacturerCountryCode,
    ManufacturerCountryName: source?.manufacturerCountryName,
    ManufacturerType: adaptApiManufactureTypeEnum(source?.manufacturerType),
    MeetsRequirements: adaptApiMeetsRequirementsEnum(source?.meetsRequirements),
    ParticipantOfferId: source?.participantOfferId,
    ParticipantOfferPublishDate: source?.participantOfferPublishDate,
    Price: source?.price,
    PriceWithVat: source?.priceWithVat,
    Quantity: source?.quantity,
    ResultPosition: source?.resultPosition,
    SumVat: source?.sumVat,
    TaxPercent: source?.taxPercent,
    TradeLotApplicationId: source?.tradeLotApplicationId,
    UnitPrice: source?.unitPrice,
    UnitPriceWithVat: source?.unitPriceWithVat,
  };
}
