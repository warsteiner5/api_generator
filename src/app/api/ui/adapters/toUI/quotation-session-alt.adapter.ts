import { ApiQuotationSessionAltDto } from '../../../swagger/models/api-quotation-session';
import { QuotationSessionAlt } from '../../models/quotation-session-alt.interface';
import { adaptAvailableVatTypeEnumToUI } from './available-vat-type-enum.adapter';
import { adaptConditionsOfVatAltEnumToUI } from './conditions-of-vat-alt-enum.adapter';
import { adaptContactInformationToUI } from './contact-information.adapter';
import { adaptDocumentToUI } from './document.adapter';
import { adaptInvitationMethodEnumToUI } from './invitation-method-enum.adapter';
import { adaptInvitationToUI } from './invitation.adapter';
import { adaptQuotationSessionDetailAltToUI } from './quotation-session-detail-alt.adapter';
import { adaptVatRateStateEnumToUI } from './vat-rate-state-enum.adapter';
import { adaptZmoFinanceSourceEnumToUI } from './zmo-finance-source-enum.adapter';

export function adaptQuotationSessionAltToUI(source?: ApiQuotationSessionAltDto | null): QuotationSessionAlt {
  return {
    autoProlongation: source?.AutoProlongation ?? 0,
    bidStepInfo: source?.BidStepInfo ?? '',
    conditionsOfPayment: source?.ConditionsOfPayment ?? '',
    conditionsOfVat: adaptConditionsOfVatAltEnumToUI(source?.ConditionsOfVat),
    contactInfo: adaptContactInformationToUI(source?.ContactInfo),
    customerId: source?.CustomerId ?? 0,
    deliveryAddress: source?.DeliveryAddress ?? '',
    deliveryRegion: source?.DeliveryRegion ?? '',
    deliveryTerms: source?.DeliveryTerms ?? '',
    description: source?.Description ?? '',
    details: (source?.Details ?? []).map((item) => adaptQuotationSessionDetailAltToUI(item)),
    documents: (source?.Documents ?? []).map((item) => adaptDocumentToUI(item)),
    duration: source?.Duration ?? 0,
    endDate: source?.EndDate ?? '',
    guid: source?.Guid ?? '',
    id: source?.Id ?? 0,
    initialPrice: source?.InitialPrice ?? 0,
    initialPriceWithVat: source?.InitialPriceWithVat ?? 0,
    initialPriceWithoutVat: source?.InitialPriceWithoutVat ?? 0,
    invitationIsAllRegions: source?.InvitationIsAllRegions ?? false,
    invitationMethod: adaptInvitationMethodEnumToUI(source?.InvitationMethod),
    invitationRegions: source?.InvitationRegions ?? [],
    invitationTags: source?.InvitationTags ?? [],
    invitations: (source?.Invitations ?? []).map((item) => adaptInvitationToUI(item)),
    isContractInElectronicForm: source?.IsContractInElectronicForm ?? false,
    isFederalLawsEnable: source?.IsFederalLawsEnable ?? false,
    isManualEnterPriceForEachProduct: source?.IsManualEnterPriceForEachProduct ?? false,
    isOnlySmp: source?.IsOnlySmp ?? false,
    kladrRegionCodes: source?.KladrRegionCodes ?? [],
    lotId: source?.LotId ?? 0,
    name: source?.Name ?? '',
    planedDealSignDate: source?.PlanedDealSignDate ?? '',
    sumVat: source?.SumVat ?? 0,
    vatRate: adaptAvailableVatTypeEnumToUI(source?.VatRate),
    vatRateState: adaptVatRateStateEnumToUI(source?.VatRateState),
    zmoFinanceSource: adaptZmoFinanceSourceEnumToUI(source?.ZmoFinanceSource),
    zmoFzType: source?.ZmoFzType ?? 0,
  };
}
