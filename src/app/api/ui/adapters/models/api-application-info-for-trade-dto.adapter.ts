import { ApplicationInfoForTrade } from '../../models/application-info-for-trade.interface';
import { ApiApplicationInfoForTradeDto } from '../../../swagger/models/api-application-info-for-trade-dto';
import { apiApplicationSourceEnumAdapter } from '../enums/api-application-source-enum.adapter';
import { apiApplicationStateEnumAdapter } from '../enums/api-application-state-enum.adapter';
import { apiManufactureTypeEnumAdapter } from '../enums/api-manufacture-type-enum.adapter';
import { apiMeetsRequirementsEnumAdapter } from '../enums/api-meets-requirements-enum.adapter';
import { apiOrganizationCountryAltEnumAdapter } from '../enums/api-organization-country.adapter';
import { apiTradeViewDtoAdapter } from './api-trade-view-dto.adapter';
import { apiVatRateStateEnumAdapter } from '../enums/api-vat-rate-state-enum.adapter';

export const apiApplicationInfoForTradeDtoAdapter = (source?: ApplicationInfoForTrade | null): ApiApplicationInfoForTradeDto => {
  return {
    AbleToSignDeal: source?.ableToSignDeal,
    ApplicationSource: source?.applicationSource === null ? undefined : apiApplicationSourceEnumAdapter(source?.applicationSource),
    ApplicationState: source?.applicationState === null ? undefined : apiApplicationStateEnumAdapter(source?.applicationState),
    ApplicationStateDescription: source?.applicationStateDescription,
    HasSubmitterElectronicSignature: source?.hasSubmitterElectronicSignature,
    Host: source?.host,
    Id: source?.id,
    IncomplianceWithTheRequirementsReason: source?.incomplianceWithTheRequirementsReason,
    IsApplicationForCurrentParticipantOrganization: source?.isApplicationForCurrentParticipantOrganization,
    IsApplicationFromAnotherTenant: source?.isApplicationFromAnotherTenant,
    IsDealCreated: source?.isDealCreated,
    ManufactureType: source?.manufactureType === null ? undefined : apiManufactureTypeEnumAdapter(source?.manufactureType),
    MeetsRequirements: source?.meetsRequirements === null ? undefined : apiMeetsRequirementsEnumAdapter(source?.meetsRequirements),
    NeedEditOnMarket: source?.needEditOnMarket,
    ParticipantCanViewDeal: source?.participantCanViewDeal,
    Price: source?.price,
    PublicationDate: source?.publicationDate,
    RankNumber: source?.rankNumber,
    ResultPosition: source?.resultPosition,
    SubmitterGuid: source?.submitterGuid,
    SubmitterId: source?.submitterId,
    SubmitterLogoUrl: source?.submitterLogoUrl,
    SubmitterName: source?.submitterName,
    SubmitterOrganizationCountry: source?.submitterOrganizationCountry === null ? undefined : apiOrganizationCountryAltEnumAdapter(source?.submitterOrganizationCountry),
    TenantSource: source?.tenantSource,
    Trade: source?.trade === null ? undefined : apiTradeViewDtoAdapter(source?.trade),
    VatRate: source?.vatRate,
    VatRateDescription: source?.vatRateDescription,
    VatRateState: source?.vatRateState === null ? undefined : apiVatRateStateEnumAdapter(source?.vatRateState),
  };
}
