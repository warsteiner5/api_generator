import { MarketApplicationItemDetailAlt } from '../../models/market-application-item-detail-alt.interface';
import { ApiMarketApplicationItemDetailAltDto } from '../../../swagger/models/api-market-application-item-detail';
import { apiCommissionDecisionStatusEnumAdapter } from '../enums/api-commission-decision-status-enum.adapter';
import { apiManufactureTypeEnumAdapter } from '../enums/api-manufacture-type-enum.adapter';
import { apiMeetsRequirementsEnumAdapter } from '../enums/api-meets-requirements-enum.adapter';

export const apiMarketApplicationItemDetailAltDtoAdapter = (source?: MarketApplicationItemDetailAlt | null): ApiMarketApplicationItemDetailAltDto => {
  return {
    CountryConfirmation: source?.countryConfirmation,
    DecisionStatus: source?.decisionStatus === null ? undefined : apiCommissionDecisionStatusEnumAdapter(source?.decisionStatus),
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
    ManufacturerType: source?.manufacturerType === null ? undefined : apiManufactureTypeEnumAdapter(source?.manufacturerType),
    MeetsRequirements: source?.meetsRequirements === null ? undefined : apiMeetsRequirementsEnumAdapter(source?.meetsRequirements),
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
