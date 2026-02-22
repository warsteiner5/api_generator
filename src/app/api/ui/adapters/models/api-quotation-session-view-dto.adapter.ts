import { QuotationSessionView } from '../../models/quotation-session-view.interface';
import { ApiQuotationSessionViewDto } from '../../../swagger/models/api-quotation-session-view-dto';
import { apiAvailableVatTypeEnumAdapter } from '../enums/api-available-vat-type-enum.adapter';
import { apiConditionsOfVatAltEnumAdapter } from '../enums/api-conditions-of-vat.adapter';
import { apiDealSignerAltDtoAdapter } from './api-deal-signer.adapter';
import { apiM4DDealSignRequiredEnumAdapter } from '../enums/api-m-4-d-deal-sign-required-enum.adapter';
import { apiMarketDealStateEnumAdapter } from '../enums/api-market-deal-state-enum.adapter';
import { apiMarketTradePersonAltDtoAdapter } from './api-market-trade-person.adapter';
import { apiQuotationSessionDealDtoAdapter } from './api-quotation-session-deal-dto.adapter';
import { apiVatRateStateEnumAdapter } from '../enums/api-vat-rate-state-enum.adapter';
import { apiZmoFinanceSourceEnumAdapter } from '../enums/api-zmo-finance-source-enum.adapter';

export const apiQuotationSessionViewDtoAdapter = (source?: QuotationSessionView | null): ApiQuotationSessionViewDto => {
  return {
    AutoProlongation: source?.autoProlongation,
    ConditionsOfPayment: source?.conditionsOfPayment,
    ConditionsOfVat: source?.conditionsOfVat === null ? undefined : apiConditionsOfVatAltEnumAdapter(source?.conditionsOfVat),
    ContactPerson: source?.contactPerson === null ? undefined : apiMarketTradePersonAltDtoAdapter(source?.contactPerson),
    CustomerAddress: source?.customerAddress,
    CustomerFullName: source?.customerFullName,
    CustomerGuid: source?.customerGuid,
    CustomerId: source?.customerId,
    CustomerRegionName: source?.customerRegionName,
    Deals: source?.deals?.map((item) => apiQuotationSessionDealDtoAdapter(item)),
    DeliveryTerms: source?.deliveryTerms,
    Description: source?.description,
    EndDate: source?.endDate,
    FinanceSource: source?.financeSource === null ? undefined : apiZmoFinanceSourceEnumAdapter(source?.financeSource),
    FinanceSourceDescription: source?.financeSourceDescription,
    FzType: source?.fzType,
    FzTypeDescription: source?.fzTypeDescription,
    FzTypeHint: source?.fzTypeHint,
    FzTypeName: source?.fzTypeName,
    Id: source?.id,
    IsContractInElectronicForm: source?.isContractInElectronicForm,
    IsCustomer: source?.isCustomer,
    IsEisConcludeDealRequired: source?.isEisConcludeDealRequired,
    IsOnlySmp: source?.isOnlySmp,
    IsOrganizer: source?.isOrganizer,
    ItemsCount: source?.itemsCount,
    LotId: source?.lotId,
    M4DDealSignRequired: source?.m4DDealSignRequired === null ? undefined : apiM4DDealSignRequiredEnumAdapter(source?.m4DDealSignRequired),
    MaxStepPercent: source?.maxStepPercent,
    MinStepPercent: source?.minStepPercent,
    MonetizationMarketWithoutNmz: source?.monetizationMarketWithoutNmz,
    Name: source?.name,
    PlanedDealSignDate: source?.planedDealSignDate,
    Price: source?.price,
    PriceWithVat: source?.priceWithVat,
    PublicationDate: source?.publicationDate,
    RateVat: source?.rateVat === null ? undefined : apiAvailableVatTypeEnumAdapter(source?.rateVat),
    ShowProtocol: source?.showProtocol,
    Signer: source?.signer === null ? undefined : apiDealSignerAltDtoAdapter(source?.signer),
    State: source?.state === null ? undefined : apiMarketDealStateEnumAdapter(source?.state),
    StateDescription: source?.stateDescription,
    SupplierWithSmallBusinessRequirements: source?.supplierWithSmallBusinessRequirements,
    SupplierWithUniversalRequirements: source?.supplierWithUniversalRequirements,
    VatRateState: source?.vatRateState === null ? undefined : apiVatRateStateEnumAdapter(source?.vatRateState),
  };
}
