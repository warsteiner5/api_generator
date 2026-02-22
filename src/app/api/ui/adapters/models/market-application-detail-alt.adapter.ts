import { ApiMarketApplicationDetailAltDto } from '../../../swagger/models/api-market-application-detail';
import { MarketApplicationDetailAlt } from '../../models/market-application-detail-alt.interface';
import { applicationSourceEnumAdapter } from '../enums/application-source-enum.adapter';
import { applicationStateEnumAdapter } from '../enums/application-state-enum.adapter';
import { auctionBidAdapter } from './auction-bid.adapter';
import { availableVatTypeEnumAdapter } from '../enums/available-vat-type-enum.adapter';
import { manufactureTypeEnumAdapter } from '../enums/manufacture-type-enum.adapter';
import { marketApplicationItemDetailAltAdapter } from './market-application-item-detail-alt.adapter';
import { meetsRequirementsEnumAdapter } from '../enums/meets-requirements-enum.adapter';
import { participantInfoAdapter } from './participant-info.adapter';

export const marketApplicationDetailAltAdapter = (source?: ApiMarketApplicationDetailAltDto | null): MarketApplicationDetailAlt => {
  return {
    applicationSource: source?.ApplicationSource === null ? undefined : applicationSourceEnumAdapter(source?.ApplicationSource),
    applicationState: source?.ApplicationState === null ? undefined : applicationStateEnumAdapter(source?.ApplicationState),
    auctionBids: source?.AuctionBids?.map((item) => auctionBidAdapter(item)),
    commissionBlocked: source?.CommissionBlocked,
    conditionsOfPayment: source?.ConditionsOfPayment,
    deliveryPlace: source?.DeliveryPlace,
    deliveryTerms: source?.DeliveryTerms,
    discussionId: source?.DiscussionId,
    guaranteeBlocked: source?.GuaranteeBlocked,
    id: source?.Id,
    incomplianceReason: source?.IncomplianceReason,
    isApproveBtnShown: source?.IsApproveBtnShown,
    isLotPriceWithVat: source?.IsLotPriceWithVat,
    isMyApplication: source?.IsMyApplication,
    isPriceCorridorExclusion: source?.IsPriceCorridorExclusion,
    isPriceCorridorMatching: source?.IsPriceCorridorMatching,
    isQuotationWithVat: source?.IsQuotationWithVat,
    isRevokeBtnShown: source?.IsRevokeBtnShown,
    isWinner: source?.IsWinner,
    lotItemApplications: source?.LotItemApplications?.map((item) => marketApplicationItemDetailAltAdapter(item)),
    manufactureType: source?.ManufactureType === null ? undefined : manufactureTypeEnumAdapter(source?.ManufactureType),
    meetsRequirements: source?.MeetsRequirements === null ? undefined : meetsRequirementsEnumAdapter(source?.MeetsRequirements),
    organizationGuid: source?.OrganizationGuid,
    organizationName: source?.OrganizationName,
    participantInfo: source?.ParticipantInfo === null ? undefined : participantInfoAdapter(source?.ParticipantInfo),
    participantOfferPublishDate: source?.ParticipantOfferPublishDate,
    price: source?.Price,
    priceWithVat: source?.PriceWithVat,
    publicationDate: source?.PublicationDate,
    rateVat: source?.RateVat === null ? undefined : availableVatTypeEnumAdapter(source?.RateVat),
    shipmentPoint: source?.ShipmentPoint,
    sumVat: source?.SumVat,
    taxPercent: source?.TaxPercent,
    tenantSource: source?.TenantSource,
    waitingBank: source?.WaitingBank,
  };
}
