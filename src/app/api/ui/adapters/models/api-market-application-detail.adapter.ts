import { MarketApplicationDetailAlt } from '../../models/market-application-detail-alt.interface';
import { ApiMarketApplicationDetailAltDto } from '../../../swagger/models/api-market-application-detail';
import { apiApplicationSourceEnumAdapter } from '../enums/api-application-source-enum.adapter';
import { apiApplicationStateEnumAdapter } from '../enums/api-application-state-enum.adapter';
import { apiAuctionBidDtoAdapter } from './api-auction-bid-dto.adapter';
import { apiAvailableVatTypeEnumAdapter } from '../enums/api-available-vat-type-enum.adapter';
import { apiManufactureTypeEnumAdapter } from '../enums/api-manufacture-type-enum.adapter';
import { apiMarketApplicationItemDetailAltDtoAdapter } from './api-market-application-item-detail.adapter';
import { apiMeetsRequirementsEnumAdapter } from '../enums/api-meets-requirements-enum.adapter';
import { apiParticipantInfoDtoAdapter } from './api-participant-info-dto.adapter';

export const apiMarketApplicationDetailAltDtoAdapter = (source?: MarketApplicationDetailAlt | null): ApiMarketApplicationDetailAltDto => {
  return {
    ApplicationSource: source?.applicationSource === null ? undefined : apiApplicationSourceEnumAdapter(source?.applicationSource),
    ApplicationState: source?.applicationState === null ? undefined : apiApplicationStateEnumAdapter(source?.applicationState),
    AuctionBids: source?.auctionBids?.map((item) => apiAuctionBidDtoAdapter(item)),
    CommissionBlocked: source?.commissionBlocked,
    ConditionsOfPayment: source?.conditionsOfPayment,
    DeliveryPlace: source?.deliveryPlace,
    DeliveryTerms: source?.deliveryTerms,
    DiscussionId: source?.discussionId,
    GuaranteeBlocked: source?.guaranteeBlocked,
    Id: source?.id,
    IncomplianceReason: source?.incomplianceReason,
    IsApproveBtnShown: source?.isApproveBtnShown,
    IsLotPriceWithVat: source?.isLotPriceWithVat,
    IsMyApplication: source?.isMyApplication,
    IsPriceCorridorExclusion: source?.isPriceCorridorExclusion,
    IsPriceCorridorMatching: source?.isPriceCorridorMatching,
    IsQuotationWithVat: source?.isQuotationWithVat,
    IsRevokeBtnShown: source?.isRevokeBtnShown,
    IsWinner: source?.isWinner,
    LotItemApplications: source?.lotItemApplications?.map((item) => apiMarketApplicationItemDetailAltDtoAdapter(item)),
    ManufactureType: source?.manufactureType === null ? undefined : apiManufactureTypeEnumAdapter(source?.manufactureType),
    MeetsRequirements: source?.meetsRequirements === null ? undefined : apiMeetsRequirementsEnumAdapter(source?.meetsRequirements),
    OrganizationGuid: source?.organizationGuid,
    OrganizationName: source?.organizationName,
    ParticipantInfo: source?.participantInfo === null ? undefined : apiParticipantInfoDtoAdapter(source?.participantInfo),
    ParticipantOfferPublishDate: source?.participantOfferPublishDate,
    Price: source?.price,
    PriceWithVat: source?.priceWithVat,
    PublicationDate: source?.publicationDate,
    RateVat: source?.rateVat === null ? undefined : apiAvailableVatTypeEnumAdapter(source?.rateVat),
    ShipmentPoint: source?.shipmentPoint,
    SumVat: source?.sumVat,
    TaxPercent: source?.taxPercent,
    TenantSource: source?.tenantSource,
    WaitingBank: source?.waitingBank,
  };
}
