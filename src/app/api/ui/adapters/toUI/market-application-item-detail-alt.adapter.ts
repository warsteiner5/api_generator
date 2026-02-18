import { ApiMarketApplicationItemDetailAltDto } from '../../../swagger/models/api-market-application-item-detail';
import { MarketApplicationItemDetailAlt } from '../../models/market-application-item-detail-alt.interface';
import { adaptCommissionDecisionStatusEnumToUI } from './commission-decision-status-enum.adapter';
import { adaptManufactureTypeEnumToUI } from './manufacture-type-enum.adapter';
import { adaptMeetsRequirementsEnumToUI } from './meets-requirements-enum.adapter';

export function adaptMarketApplicationItemDetailAltToUI(source?: ApiMarketApplicationItemDetailAltDto | null): MarketApplicationItemDetailAlt {
  return {
    countryConfirmation: source?.CountryConfirmation ?? '',
    decisionStatus: adaptCommissionDecisionStatusEnumToUI(source?.DecisionStatus),
    id: source?.Id ?? 0,
    incomplianceReason: source?.IncomplianceReason ?? '',
    isApproveBtnShown: source?.IsApproveBtnShown ?? false,
    isLotPriceWithVat: source?.IsLotPriceWithVat ?? false,
    isParticipantOfferActive: source?.IsParticipantOfferActive ?? false,
    isParticipantOfferToTradeSourceManual: source?.IsParticipantOfferToTradeSourceManual ?? false,
    isWinner: source?.IsWinner ?? false,
    lotItemId: source?.LotItemId ?? 0,
    lotItemOrder: source?.LotItemOrder ?? 0,
    manufacturerCountryCode: source?.ManufacturerCountryCode ?? '',
    manufacturerCountryName: source?.ManufacturerCountryName ?? '',
    manufacturerType: adaptManufactureTypeEnumToUI(source?.ManufacturerType),
    meetsRequirements: adaptMeetsRequirementsEnumToUI(source?.MeetsRequirements),
    participantOfferId: source?.ParticipantOfferId ?? 0,
    participantOfferPublishDate: source?.ParticipantOfferPublishDate ?? '',
    price: source?.Price ?? 0,
    priceWithVat: source?.PriceWithVat ?? 0,
    quantity: source?.Quantity ?? 0,
    resultPosition: source?.ResultPosition ?? 0,
    sumVat: source?.SumVat ?? 0,
    taxPercent: source?.TaxPercent ?? 0,
    tradeLotApplicationId: source?.TradeLotApplicationId ?? 0,
    unitPrice: source?.UnitPrice ?? 0,
    unitPriceWithVat: source?.UnitPriceWithVat ?? 0,
  };
}
