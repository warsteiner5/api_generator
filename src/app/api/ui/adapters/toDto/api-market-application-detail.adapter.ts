import { MarketApplicationDetailAlt } from '../../models/market-application-detail-alt.interface';
import { ApiMarketApplicationDetailAltDto } from '../../../swagger/models/api-market-application-detail';
import { adaptApiApplicationSourceEnum } from './api-application-source-enum.adapter';
import { adaptApiApplicationStateEnum } from './api-application-state-enum.adapter';
import { adaptApiAuctionBidDto } from './api-auction-bid-dto.adapter';
import { adaptApiAvailableVatTypeEnum } from './api-available-vat-type-enum.adapter';
import { adaptApiManufactureTypeEnum } from './api-manufacture-type-enum.adapter';
import { adaptApiMarketApplicationItemDetailAltDto } from './api-market-application-item-detail.adapter';
import { adaptApiMeetsRequirementsEnum } from './api-meets-requirements-enum.adapter';
import { adaptApiParticipantInfoDto } from './api-participant-info-dto.adapter';

export function adaptApiMarketApplicationDetailAltDto(source?: MarketApplicationDetailAlt | null): ApiMarketApplicationDetailAltDto {
  return {
    ApplicationSource: adaptApiApplicationSourceEnum(source?.applicationSource),
    ApplicationState: adaptApiApplicationStateEnum(source?.applicationState),
    AuctionBids: (source?.auctionBids ?? []).map((item) => adaptApiAuctionBidDto(item)),
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
    LotItemApplications: (source?.lotItemApplications ?? []).map((item) => adaptApiMarketApplicationItemDetailAltDto(item)),
    ManufactureType: adaptApiManufactureTypeEnum(source?.manufactureType),
    MeetsRequirements: adaptApiMeetsRequirementsEnum(source?.meetsRequirements),
    OrganizationGuid: source?.organizationGuid,
    OrganizationName: source?.organizationName,
    ParticipantInfo: adaptApiParticipantInfoDto(source?.participantInfo),
    ParticipantOfferPublishDate: source?.participantOfferPublishDate,
    Price: source?.price,
    PriceWithVat: source?.priceWithVat,
    PublicationDate: source?.publicationDate,
    RateVat: adaptApiAvailableVatTypeEnum(source?.rateVat),
    ShipmentPoint: source?.shipmentPoint,
    SumVat: source?.sumVat,
    TaxPercent: source?.taxPercent,
    TenantSource: source?.tenantSource,
    WaitingBank: source?.waitingBank,
  };
}
