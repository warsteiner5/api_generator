import { ApiMarketApplicationItemDetailAltDto } from '../../../swagger/models/api-market-application-item-detail';
import { MarketApplicationItemDetailAlt } from '../../models/market-application-item-detail-alt.interface';
import { commissionDecisionStatusEnumAdapter } from '../enums/commission-decision-status-enum.adapter';
import { manufactureTypeEnumAdapter } from '../enums/manufacture-type-enum.adapter';
import { meetsRequirementsEnumAdapter } from '../enums/meets-requirements-enum.adapter';

export const marketApplicationItemDetailAltAdapter = (source?: ApiMarketApplicationItemDetailAltDto | null): MarketApplicationItemDetailAlt => {
  return {
    countryConfirmation: source?.CountryConfirmation,
    decisionStatus: source?.DecisionStatus === null ? undefined : commissionDecisionStatusEnumAdapter(source?.DecisionStatus),
    id: source?.Id,
    incomplianceReason: source?.IncomplianceReason,
    isApproveBtnShown: source?.IsApproveBtnShown,
    isLotPriceWithVat: source?.IsLotPriceWithVat,
    isParticipantOfferActive: source?.IsParticipantOfferActive,
    isParticipantOfferToTradeSourceManual: source?.IsParticipantOfferToTradeSourceManual,
    isWinner: source?.IsWinner,
    lotItemId: source?.LotItemId,
    lotItemOrder: source?.LotItemOrder,
    manufacturerCountryCode: source?.ManufacturerCountryCode,
    manufacturerCountryName: source?.ManufacturerCountryName,
    manufacturerType: source?.ManufacturerType === null ? undefined : manufactureTypeEnumAdapter(source?.ManufacturerType),
    meetsRequirements: source?.MeetsRequirements === null ? undefined : meetsRequirementsEnumAdapter(source?.MeetsRequirements),
    participantOfferId: source?.ParticipantOfferId,
    participantOfferPublishDate: source?.ParticipantOfferPublishDate,
    price: source?.Price,
    priceWithVat: source?.PriceWithVat,
    quantity: source?.Quantity,
    resultPosition: source?.ResultPosition,
    sumVat: source?.SumVat,
    taxPercent: source?.TaxPercent,
    tradeLotApplicationId: source?.TradeLotApplicationId,
    unitPrice: source?.UnitPrice,
    unitPriceWithVat: source?.UnitPriceWithVat,
  };
}
