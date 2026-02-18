import { QuotationSessionAlt } from '../../models/quotation-session-alt.interface';
import { ApiQuotationSessionAltDto } from '../../../swagger/models/api-quotation-session';
import { adaptApiAvailableVatTypeEnum } from './api-available-vat-type-enum.adapter';
import { adaptApiConditionsOfVatAltEnum } from './api-conditions-of-vat.adapter';
import { adaptApiContactInformationDto } from './api-contact-information-dto.adapter';
import { adaptApiDocumentDto } from './api-document-dto.adapter';
import { adaptApiInvitationDto } from './api-invitation-dto.adapter';
import { adaptApiInvitationMethodEnum } from './api-invitation-method-enum.adapter';
import { adaptApiQuotationSessionDetailAltDto } from './api-quotation-session-detail.adapter';
import { adaptApiVatRateStateEnum } from './api-vat-rate-state-enum.adapter';
import { adaptApiZmoFinanceSourceEnum } from './api-zmo-finance-source-enum.adapter';

export function adaptApiQuotationSessionAltDto(source?: QuotationSessionAlt | null): ApiQuotationSessionAltDto {
  return {
    AutoProlongation: source?.autoProlongation,
    BidStepInfo: source?.bidStepInfo,
    ConditionsOfPayment: source?.conditionsOfPayment,
    ConditionsOfVat: adaptApiConditionsOfVatAltEnum(source?.conditionsOfVat),
    ContactInfo: adaptApiContactInformationDto(source?.contactInfo),
    CustomerId: source?.customerId,
    DeliveryAddress: source?.deliveryAddress,
    DeliveryRegion: source?.deliveryRegion,
    DeliveryTerms: source?.deliveryTerms,
    Description: source?.description,
    Details: (source?.details ?? []).map((item) => adaptApiQuotationSessionDetailAltDto(item)),
    Documents: (source?.documents ?? []).map((item) => adaptApiDocumentDto(item)),
    Duration: source?.duration,
    EndDate: source?.endDate,
    Guid: source?.guid,
    Id: source?.id,
    InitialPrice: source?.initialPrice,
    InitialPriceWithVat: source?.initialPriceWithVat,
    InitialPriceWithoutVat: source?.initialPriceWithoutVat,
    InvitationIsAllRegions: source?.invitationIsAllRegions,
    InvitationMethod: adaptApiInvitationMethodEnum(source?.invitationMethod),
    InvitationRegions: source?.invitationRegions ?? [],
    InvitationTags: source?.invitationTags ?? [],
    Invitations: (source?.invitations ?? []).map((item) => adaptApiInvitationDto(item)),
    IsContractInElectronicForm: source?.isContractInElectronicForm,
    IsFederalLawsEnable: source?.isFederalLawsEnable,
    IsManualEnterPriceForEachProduct: source?.isManualEnterPriceForEachProduct,
    IsOnlySmp: source?.isOnlySmp,
    KladrRegionCodes: source?.kladrRegionCodes ?? [],
    LotId: source?.lotId,
    Name: source?.name,
    PlanedDealSignDate: source?.planedDealSignDate,
    SumVat: source?.sumVat,
    VatRate: adaptApiAvailableVatTypeEnum(source?.vatRate),
    VatRateState: adaptApiVatRateStateEnum(source?.vatRateState),
    ZmoFinanceSource: adaptApiZmoFinanceSourceEnum(source?.zmoFinanceSource),
    ZmoFzType: source?.zmoFzType,
  };
}
