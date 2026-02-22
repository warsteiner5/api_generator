import { QuotationSessionAlt } from '../../models/quotation-session-alt.interface';
import { ApiQuotationSessionAltDto } from '../../../swagger/models/api-quotation-session';
import { apiAvailableVatTypeEnumAdapter } from '../enums/api-available-vat-type-enum.adapter';
import { apiConditionsOfVatAltEnumAdapter } from '../enums/api-conditions-of-vat.adapter';
import { apiContactInformationDtoAdapter } from './api-contact-information-dto.adapter';
import { apiDocumentDtoAdapter } from './api-document-dto.adapter';
import { apiInvitationDtoAdapter } from './api-invitation-dto.adapter';
import { apiInvitationMethodEnumAdapter } from '../enums/api-invitation-method-enum.adapter';
import { apiQuotationSessionDetailAltDtoAdapter } from './api-quotation-session-detail.adapter';
import { apiVatRateStateEnumAdapter } from '../enums/api-vat-rate-state-enum.adapter';
import { apiZmoFinanceSourceEnumAdapter } from '../enums/api-zmo-finance-source-enum.adapter';

export const apiQuotationSessionAltDtoAdapter = (source?: QuotationSessionAlt | null): ApiQuotationSessionAltDto => {
  return {
    AutoProlongation: source?.autoProlongation,
    BidStepInfo: source?.bidStepInfo,
    ConditionsOfPayment: source?.conditionsOfPayment,
    ConditionsOfVat: source?.conditionsOfVat === null ? undefined : apiConditionsOfVatAltEnumAdapter(source?.conditionsOfVat),
    ContactInfo: source?.contactInfo === null ? undefined : apiContactInformationDtoAdapter(source?.contactInfo),
    CustomerId: source?.customerId,
    DeliveryAddress: source?.deliveryAddress,
    DeliveryRegion: source?.deliveryRegion,
    DeliveryTerms: source?.deliveryTerms,
    Description: source?.description,
    Details: source?.details?.map((item) => apiQuotationSessionDetailAltDtoAdapter(item)),
    Documents: source?.documents?.map((item) => apiDocumentDtoAdapter(item)),
    Duration: source?.duration,
    EndDate: source?.endDate,
    Guid: source?.guid,
    Id: source?.id,
    InitialPrice: source?.initialPrice,
    InitialPriceWithVat: source?.initialPriceWithVat,
    InitialPriceWithoutVat: source?.initialPriceWithoutVat,
    InvitationIsAllRegions: source?.invitationIsAllRegions,
    InvitationMethod: source?.invitationMethod === null ? undefined : apiInvitationMethodEnumAdapter(source?.invitationMethod),
    InvitationRegions: source?.invitationRegions,
    InvitationTags: source?.invitationTags,
    Invitations: source?.invitations?.map((item) => apiInvitationDtoAdapter(item)),
    IsContractInElectronicForm: source?.isContractInElectronicForm,
    IsFederalLawsEnable: source?.isFederalLawsEnable,
    IsManualEnterPriceForEachProduct: source?.isManualEnterPriceForEachProduct,
    IsOnlySmp: source?.isOnlySmp,
    KladrRegionCodes: source?.kladrRegionCodes,
    LotId: source?.lotId,
    Name: source?.name,
    PlanedDealSignDate: source?.planedDealSignDate,
    SumVat: source?.sumVat,
    VatRate: source?.vatRate === null ? undefined : apiAvailableVatTypeEnumAdapter(source?.vatRate),
    VatRateState: source?.vatRateState === null ? undefined : apiVatRateStateEnumAdapter(source?.vatRateState),
    ZmoFinanceSource: source?.zmoFinanceSource === null ? undefined : apiZmoFinanceSourceEnumAdapter(source?.zmoFinanceSource),
    ZmoFzType: source?.zmoFzType,
  };
}
