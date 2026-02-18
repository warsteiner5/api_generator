import { ApiQuotationSessionViewDto } from '../../../swagger/models/api-quotation-session-view-dto';
import { QuotationSessionView } from '../../models/quotation-session-view.interface';
import { adaptAvailableVatTypeEnumToUI } from './available-vat-type-enum.adapter';
import { adaptConditionsOfVatAltEnumToUI } from './conditions-of-vat-alt-enum.adapter';
import { adaptDealSignerAltToUI } from './deal-signer-alt.adapter';
import { adaptM4DDealSignRequiredEnumToUI } from './m-4-d-deal-sign-required-enum.adapter';
import { adaptMarketDealStateEnumToUI } from './market-deal-state-enum.adapter';
import { adaptMarketTradePersonAltToUI } from './market-trade-person-alt.adapter';
import { adaptQuotationSessionDealToUI } from './quotation-session-deal.adapter';
import { adaptVatRateStateEnumToUI } from './vat-rate-state-enum.adapter';
import { adaptZmoFinanceSourceEnumToUI } from './zmo-finance-source-enum.adapter';

export function adaptQuotationSessionViewToUI(source?: ApiQuotationSessionViewDto | null): QuotationSessionView {
  return {
    autoProlongation: source?.AutoProlongation ?? 0,
    conditionsOfPayment: source?.ConditionsOfPayment ?? '',
    conditionsOfVat: adaptConditionsOfVatAltEnumToUI(source?.ConditionsOfVat),
    contactPerson: adaptMarketTradePersonAltToUI(source?.ContactPerson),
    customerAddress: source?.CustomerAddress ?? '',
    customerFullName: source?.CustomerFullName ?? '',
    customerGuid: source?.CustomerGuid ?? '',
    customerId: source?.CustomerId ?? 0,
    customerRegionName: source?.CustomerRegionName ?? '',
    deals: (source?.Deals ?? []).map((item) => adaptQuotationSessionDealToUI(item)),
    deliveryTerms: source?.DeliveryTerms ?? '',
    description: source?.Description ?? '',
    endDate: source?.EndDate ?? '',
    financeSource: adaptZmoFinanceSourceEnumToUI(source?.FinanceSource),
    financeSourceDescription: source?.FinanceSourceDescription ?? '',
    fzType: source?.FzType ?? 0,
    fzTypeDescription: source?.FzTypeDescription ?? '',
    fzTypeHint: source?.FzTypeHint ?? '',
    fzTypeName: source?.FzTypeName ?? '',
    id: source?.Id ?? 0,
    isContractInElectronicForm: source?.IsContractInElectronicForm ?? false,
    isCustomer: source?.IsCustomer ?? false,
    isEisConcludeDealRequired: source?.IsEisConcludeDealRequired ?? false,
    isOnlySmp: source?.IsOnlySmp ?? false,
    isOrganizer: source?.IsOrganizer ?? false,
    itemsCount: source?.ItemsCount ?? 0,
    lotId: source?.LotId ?? 0,
    m4DDealSignRequired: adaptM4DDealSignRequiredEnumToUI(source?.M4DDealSignRequired),
    maxStepPercent: source?.MaxStepPercent ?? 0,
    minStepPercent: source?.MinStepPercent ?? 0,
    monetizationMarketWithoutNmz: source?.MonetizationMarketWithoutNmz ?? false,
    name: source?.Name ?? '',
    planedDealSignDate: source?.PlanedDealSignDate ?? '',
    price: source?.Price ?? 0,
    priceWithVat: source?.PriceWithVat ?? 0,
    publicationDate: source?.PublicationDate ?? '',
    rateVat: adaptAvailableVatTypeEnumToUI(source?.RateVat),
    showProtocol: source?.ShowProtocol ?? false,
    signer: adaptDealSignerAltToUI(source?.Signer),
    state: adaptMarketDealStateEnumToUI(source?.State),
    stateDescription: source?.StateDescription ?? '',
    supplierWithSmallBusinessRequirements: source?.SupplierWithSmallBusinessRequirements ?? false,
    supplierWithUniversalRequirements: source?.SupplierWithUniversalRequirements ?? false,
    vatRateState: adaptVatRateStateEnumToUI(source?.VatRateState),
  };
}
