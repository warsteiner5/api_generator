import { QuotationSessionView } from '../../models/quotation-session-view.interface';
import { ApiQuotationSessionViewDto } from '../../../swagger/models/api-quotation-session-view-dto';
import { adaptApiAvailableVatTypeEnum } from './api-available-vat-type-enum.adapter';
import { adaptApiConditionsOfVatAltEnum } from './api-conditions-of-vat.adapter';
import { adaptApiDealSignerAltDto } from './api-deal-signer.adapter';
import { adaptApiM4DDealSignRequiredEnum } from './api-m-4-d-deal-sign-required-enum.adapter';
import { adaptApiMarketDealStateEnum } from './api-market-deal-state-enum.adapter';
import { adaptApiMarketTradePersonAltDto } from './api-market-trade-person.adapter';
import { adaptApiQuotationSessionDealDto } from './api-quotation-session-deal-dto.adapter';
import { adaptApiVatRateStateEnum } from './api-vat-rate-state-enum.adapter';
import { adaptApiZmoFinanceSourceEnum } from './api-zmo-finance-source-enum.adapter';

export function adaptApiQuotationSessionViewDto(source?: QuotationSessionView | null): ApiQuotationSessionViewDto {
  return {
    AutoProlongation: source?.autoProlongation,
    ConditionsOfPayment: source?.conditionsOfPayment,
    ConditionsOfVat: adaptApiConditionsOfVatAltEnum(source?.conditionsOfVat),
    ContactPerson: adaptApiMarketTradePersonAltDto(source?.contactPerson),
    CustomerAddress: source?.customerAddress,
    CustomerFullName: source?.customerFullName,
    CustomerGuid: source?.customerGuid,
    CustomerId: source?.customerId,
    CustomerRegionName: source?.customerRegionName,
    Deals: (source?.deals ?? []).map((item) => adaptApiQuotationSessionDealDto(item)),
    DeliveryTerms: source?.deliveryTerms,
    Description: source?.description,
    EndDate: source?.endDate,
    FinanceSource: adaptApiZmoFinanceSourceEnum(source?.financeSource),
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
    M4DDealSignRequired: adaptApiM4DDealSignRequiredEnum(source?.m4DDealSignRequired),
    MaxStepPercent: source?.maxStepPercent,
    MinStepPercent: source?.minStepPercent,
    MonetizationMarketWithoutNmz: source?.monetizationMarketWithoutNmz,
    Name: source?.name,
    PlanedDealSignDate: source?.planedDealSignDate,
    Price: source?.price,
    PriceWithVat: source?.priceWithVat,
    PublicationDate: source?.publicationDate,
    RateVat: adaptApiAvailableVatTypeEnum(source?.rateVat),
    ShowProtocol: source?.showProtocol,
    Signer: adaptApiDealSignerAltDto(source?.signer),
    State: adaptApiMarketDealStateEnum(source?.state),
    StateDescription: source?.stateDescription,
    SupplierWithSmallBusinessRequirements: source?.supplierWithSmallBusinessRequirements,
    SupplierWithUniversalRequirements: source?.supplierWithUniversalRequirements,
    VatRateState: adaptApiVatRateStateEnum(source?.vatRateState),
  };
}
