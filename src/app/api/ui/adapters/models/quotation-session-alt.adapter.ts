import { ApiQuotationSessionAltDto } from '../../../swagger/models/api-quotation-session';
import { QuotationSessionAlt } from '../../models/quotation-session-alt.interface';
import { availableVatTypeEnumAdapter } from '../enums/available-vat-type-enum.adapter';
import { conditionsOfVatAltEnumAdapter } from '../enums/conditions-of-vat-alt-enum.adapter';
import { contactInformationAdapter } from './contact-information.adapter';
import { documentAdapter } from './document.adapter';
import { invitationAdapter } from './invitation.adapter';
import { invitationMethodEnumAdapter } from '../enums/invitation-method-enum.adapter';
import { quotationSessionDetailAltAdapter } from './quotation-session-detail-alt.adapter';
import { vatRateStateEnumAdapter } from '../enums/vat-rate-state-enum.adapter';
import { zmoFinanceSourceEnumAdapter } from '../enums/zmo-finance-source-enum.adapter';

export const quotationSessionAltAdapter = (source?: ApiQuotationSessionAltDto | null): QuotationSessionAlt => {
  return {
    autoProlongation: source?.AutoProlongation,
    bidStepInfo: source?.BidStepInfo,
    conditionsOfPayment: source?.ConditionsOfPayment,
    conditionsOfVat: source?.ConditionsOfVat === null ? undefined : conditionsOfVatAltEnumAdapter(source?.ConditionsOfVat),
    contactInfo: source?.ContactInfo === null ? undefined : contactInformationAdapter(source?.ContactInfo),
    customerId: source?.CustomerId,
    deliveryAddress: source?.DeliveryAddress,
    deliveryRegion: source?.DeliveryRegion,
    deliveryTerms: source?.DeliveryTerms,
    description: source?.Description,
    details: source?.Details?.map((item) => quotationSessionDetailAltAdapter(item)),
    documents: source?.Documents?.map((item) => documentAdapter(item)),
    duration: source?.Duration,
    endDate: source?.EndDate,
    guid: source?.Guid,
    id: source?.Id,
    initialPrice: source?.InitialPrice,
    initialPriceWithVat: source?.InitialPriceWithVat,
    initialPriceWithoutVat: source?.InitialPriceWithoutVat,
    invitationIsAllRegions: source?.InvitationIsAllRegions,
    invitationMethod: source?.InvitationMethod === null ? undefined : invitationMethodEnumAdapter(source?.InvitationMethod),
    invitationRegions: source?.InvitationRegions,
    invitationTags: source?.InvitationTags,
    invitations: source?.Invitations?.map((item) => invitationAdapter(item)),
    isContractInElectronicForm: source?.IsContractInElectronicForm,
    isFederalLawsEnable: source?.IsFederalLawsEnable,
    isManualEnterPriceForEachProduct: source?.IsManualEnterPriceForEachProduct,
    isOnlySmp: source?.IsOnlySmp,
    kladrRegionCodes: source?.KladrRegionCodes,
    lotId: source?.LotId,
    name: source?.Name,
    planedDealSignDate: source?.PlanedDealSignDate,
    sumVat: source?.SumVat,
    vatRate: source?.VatRate === null ? undefined : availableVatTypeEnumAdapter(source?.VatRate),
    vatRateState: source?.VatRateState === null ? undefined : vatRateStateEnumAdapter(source?.VatRateState),
    zmoFinanceSource: source?.ZmoFinanceSource === null ? undefined : zmoFinanceSourceEnumAdapter(source?.ZmoFinanceSource),
    zmoFzType: source?.ZmoFzType,
  };
}
