import { ApiQuotationSessionViewDto } from '../../../swagger/models/api-quotation-session-view-dto';
import { QuotationSessionView } from '../../models/quotation-session-view.interface';
import { availableVatTypeEnumAdapter } from '../enums/available-vat-type-enum.adapter';
import { conditionsOfVatAltEnumAdapter } from '../enums/conditions-of-vat-alt-enum.adapter';
import { dealSignerAltAdapter } from './deal-signer-alt.adapter';
import { m4DDealSignRequiredEnumAdapter } from '../enums/m-4-d-deal-sign-required-enum.adapter';
import { marketDealStateEnumAdapter } from '../enums/market-deal-state-enum.adapter';
import { marketTradePersonAltAdapter } from './market-trade-person-alt.adapter';
import { quotationSessionDealAdapter } from './quotation-session-deal.adapter';
import { vatRateStateEnumAdapter } from '../enums/vat-rate-state-enum.adapter';
import { zmoFinanceSourceEnumAdapter } from '../enums/zmo-finance-source-enum.adapter';

export const quotationSessionViewAdapter = (source?: ApiQuotationSessionViewDto | null): QuotationSessionView => {
  return {
    autoProlongation: source?.AutoProlongation,
    conditionsOfPayment: source?.ConditionsOfPayment,
    conditionsOfVat: source?.ConditionsOfVat === null ? undefined : conditionsOfVatAltEnumAdapter(source?.ConditionsOfVat),
    contactPerson: source?.ContactPerson === null ? undefined : marketTradePersonAltAdapter(source?.ContactPerson),
    customerAddress: source?.CustomerAddress,
    customerFullName: source?.CustomerFullName,
    customerGuid: source?.CustomerGuid,
    customerId: source?.CustomerId,
    customerRegionName: source?.CustomerRegionName,
    deals: source?.Deals?.map((item) => quotationSessionDealAdapter(item)),
    deliveryTerms: source?.DeliveryTerms,
    description: source?.Description,
    endDate: source?.EndDate,
    financeSource: source?.FinanceSource === null ? undefined : zmoFinanceSourceEnumAdapter(source?.FinanceSource),
    financeSourceDescription: source?.FinanceSourceDescription,
    fzType: source?.FzType,
    fzTypeDescription: source?.FzTypeDescription,
    fzTypeHint: source?.FzTypeHint,
    fzTypeName: source?.FzTypeName,
    id: source?.Id,
    isContractInElectronicForm: source?.IsContractInElectronicForm,
    isCustomer: source?.IsCustomer,
    isEisConcludeDealRequired: source?.IsEisConcludeDealRequired,
    isOnlySmp: source?.IsOnlySmp,
    isOrganizer: source?.IsOrganizer,
    itemsCount: source?.ItemsCount,
    lotId: source?.LotId,
    m4DDealSignRequired: source?.M4DDealSignRequired === null ? undefined : m4DDealSignRequiredEnumAdapter(source?.M4DDealSignRequired),
    maxStepPercent: source?.MaxStepPercent,
    minStepPercent: source?.MinStepPercent,
    monetizationMarketWithoutNmz: source?.MonetizationMarketWithoutNmz,
    name: source?.Name,
    planedDealSignDate: source?.PlanedDealSignDate,
    price: source?.Price,
    priceWithVat: source?.PriceWithVat,
    publicationDate: source?.PublicationDate,
    rateVat: source?.RateVat === null ? undefined : availableVatTypeEnumAdapter(source?.RateVat),
    showProtocol: source?.ShowProtocol,
    signer: source?.Signer === null ? undefined : dealSignerAltAdapter(source?.Signer),
    state: source?.State === null ? undefined : marketDealStateEnumAdapter(source?.State),
    stateDescription: source?.StateDescription,
    supplierWithSmallBusinessRequirements: source?.SupplierWithSmallBusinessRequirements,
    supplierWithUniversalRequirements: source?.SupplierWithUniversalRequirements,
    vatRateState: source?.VatRateState === null ? undefined : vatRateStateEnumAdapter(source?.VatRateState),
  };
}
