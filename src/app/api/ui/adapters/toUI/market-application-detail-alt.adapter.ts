import { ApiMarketApplicationDetailAltDto } from '../../../swagger/models/api-market-application-detail';
import { MarketApplicationDetailAlt } from '../../models/market-application-detail-alt.interface';
import { adaptApplicationSourceEnumToUI } from './application-source-enum.adapter';
import { adaptApplicationStateEnumToUI } from './application-state-enum.adapter';
import { adaptAuctionBidToUI } from './auction-bid.adapter';
import { adaptAvailableVatTypeEnumToUI } from './available-vat-type-enum.adapter';
import { adaptManufactureTypeEnumToUI } from './manufacture-type-enum.adapter';
import { adaptMarketApplicationItemDetailAltToUI } from './market-application-item-detail-alt.adapter';
import { adaptMeetsRequirementsEnumToUI } from './meets-requirements-enum.adapter';
import { adaptParticipantInfoToUI } from './participant-info.adapter';

export function adaptMarketApplicationDetailAltToUI(source?: ApiMarketApplicationDetailAltDto | null): MarketApplicationDetailAlt {
  return {
    applicationSource: adaptApplicationSourceEnumToUI(source?.ApplicationSource),
    applicationState: adaptApplicationStateEnumToUI(source?.ApplicationState),
    auctionBids: (source?.AuctionBids ?? []).map((item) => adaptAuctionBidToUI(item)),
    commissionBlocked: source?.CommissionBlocked ?? 0,
    conditionsOfPayment: source?.ConditionsOfPayment ?? '',
    deliveryPlace: source?.DeliveryPlace ?? '',
    deliveryTerms: source?.DeliveryTerms ?? '',
    discussionId: source?.DiscussionId ?? 0,
    guaranteeBlocked: source?.GuaranteeBlocked ?? 0,
    id: source?.Id ?? 0,
    incomplianceReason: source?.IncomplianceReason ?? '',
    isApproveBtnShown: source?.IsApproveBtnShown ?? false,
    isLotPriceWithVat: source?.IsLotPriceWithVat ?? false,
    isMyApplication: source?.IsMyApplication ?? false,
    isPriceCorridorExclusion: source?.IsPriceCorridorExclusion ?? false,
    isPriceCorridorMatching: source?.IsPriceCorridorMatching ?? false,
    isQuotationWithVat: source?.IsQuotationWithVat ?? false,
    isRevokeBtnShown: source?.IsRevokeBtnShown ?? false,
    isWinner: source?.IsWinner ?? false,
    lotItemApplications: (source?.LotItemApplications ?? []).map((item) => adaptMarketApplicationItemDetailAltToUI(item)),
    manufactureType: adaptManufactureTypeEnumToUI(source?.ManufactureType),
    meetsRequirements: adaptMeetsRequirementsEnumToUI(source?.MeetsRequirements),
    organizationGuid: source?.OrganizationGuid ?? '',
    organizationName: source?.OrganizationName ?? '',
    participantInfo: adaptParticipantInfoToUI(source?.ParticipantInfo),
    participantOfferPublishDate: source?.ParticipantOfferPublishDate ?? '',
    price: source?.Price ?? 0,
    priceWithVat: source?.PriceWithVat ?? 0,
    publicationDate: source?.PublicationDate ?? '',
    rateVat: adaptAvailableVatTypeEnumToUI(source?.RateVat),
    shipmentPoint: source?.ShipmentPoint ?? '',
    sumVat: source?.SumVat ?? 0,
    taxPercent: source?.TaxPercent ?? 0,
    tenantSource: source?.TenantSource ?? 0,
    waitingBank: source?.WaitingBank ?? false,
  };
}
