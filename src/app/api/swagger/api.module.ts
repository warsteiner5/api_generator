/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { AdditionalAgreementApiService } from './services/additional-agreement-api.service';
import { MikIntegrationApiService } from './services/mik-integration-api.service';
import { DeclarationApiService } from './services/declaration-api.service';
import { DisseminationAgreementApiService } from './services/dissemination-agreement-api.service';
import { AuthenticationApiService } from './services/authentication-api.service';
import { BelgorodBudgetsApiService } from './services/belgorod-budgets-api.service';
import { NicRegistriesApiService } from './services/nic-registries-api.service';
import { OrgSettingApiService } from './services/org-setting-api.service';
import { ProhibitionExclusionRegisterApiService } from './services/prohibition-exclusion-register-api.service';
import { ReportApiService } from './services/report-api.service';
import { SuggestApiService } from './services/suggest-api.service';
import { TenantApiService } from './services/tenant-api.service';
import { SignedOutOfEpReasonsApiService } from './services/signed-out-of-ep-reasons-api.service';
import { ExternalDealApiService } from './services/external-deal-api.service';
import { ExternalSystemsApiService } from './services/external-systems-api.service';
import { FileSignApiService } from './services/file-sign-api.service';
import { InvitationApiService } from './services/invitation-api.service';
import { KladrRegionApiService } from './services/kladr-region-api.service';
import { MetricApiService } from './services/metric-api.service';
import { NotificationApiService } from './services/notification-api.service';
import { OkeiApiService } from './services/okei-api.service';
import { DictionaryApiService } from './services/dictionary-api.service';
import { OrderApiService } from './services/order-api.service';
import { OrganizationApiService } from './services/organization-api.service';
import { OutDocumentApiService } from './services/out-document-api.service';
import { ParticipantRatingApiService } from './services/participant-rating-api.service';
import { ParticipantApiService } from './services/participant-api.service';
import { ParticipantOfferApiService } from './services/participant-offer-api.service';
import { RegionApiService } from './services/region-api.service';
import { TariffApiService } from './services/tariff-api.service';
import { UploadApiService } from './services/upload-api.service';
import { AccountApiService } from './services/account-api.service';
import { ApplicationApiService } from './services/application-api.service';
import { DealApiService } from './services/deal-api.service';
import { TradeApiService } from './services/trade-api.service';
import { FileV2ApiService } from './services/file-v-2-api.service';
import { AccountsApiService } from './services/accounts-api.service';
import { ApprovalRequestApiService } from './services/approval-request-api.service';
import { AvailableOperationsApiService } from './services/available-operations-api.service';
import { BannersApiService } from './services/banners-api.service';
import { BidApiService } from './services/bid-api.service';
import { BiddingApiService } from './services/bidding-api.service';
import { BiddingDataApiService } from './services/bidding-data-api.service';
import { BiddingDataNewApiService } from './services/bidding-data-new-api.service';
import { BiddingNewApiService } from './services/bidding-new-api.service';
import { BidNewApiService } from './services/bid-new-api.service';
import { BubblesApiService } from './services/bubbles-api.service';
import { CalendarApiService } from './services/calendar-api.service';
import { CertificatesApiService } from './services/certificates-api.service';
import { CompanyCatalogApiService } from './services/company-catalog-api.service';
import { CatalogApiService } from './services/catalog-api.service';
import { AdditionalAgreementsApiService } from './services/additional-agreements-api.service';
import { ChatsApiService } from './services/chats-api.service';
import { ClarificationRequestsApiService } from './services/clarification-requests-api.service';
import { DealAgreementsApiService } from './services/deal-agreements-api.service';
import { EmployeesApiService } from './services/employees-api.service';
import { FinalProposalNewApiService } from './services/final-proposal-new-api.service';
import { ItemApiService } from './services/item-api.service';
import { MovingProApiService } from './services/moving-pro-api.service';
import { NicRegistryApiService } from './services/nic-registry-api.service';
import { FinalProposalApiService } from './services/final-proposal-api.service';
import { OrganizationAgreementApiService } from './services/organization-agreement-api.service';
import { OrganizationProfilesApiService } from './services/organization-profiles-api.service';
import { OrganizationRegistrationApiService } from './services/organization-registration-api.service';
import { PartnersApiService } from './services/partners-api.service';
import { OrganizationPurchasePrefsApiService } from './services/organization-purchase-prefs-api.service';
import { RolesApiService } from './services/roles-api.service';
import { QuotationSessionAgreementApiService } from './services/quotation-session-agreement-api.service';
import { QuotationSessionApiService } from './services/quotation-session-api.service';
import { ImagesApiService } from './services/images-api.service';
import { QuotationSessionNewApiService } from './services/quotation-session-new-api.service';
import { SingleSupplierApiService } from './services/single-supplier-api.service';
import { SupplierFinanceApiService } from './services/supplier-finance-api.service';
import { TagsApiService } from './services/tags-api.service';
import { ExternalDealsApiService } from './services/external-deals-api.service';
import { EisDataApiService } from './services/eis-data-api.service';
import { FederalLawsApiService } from './services/federal-laws-api.service';
import { FinanceSourcesApiService } from './services/finance-sources-api.service';
import { IntegrationApiService } from './services/integration-api.service';
import { InviteApiService } from './services/invite-api.service';
import { ManagerAgentApiService } from './services/manager-agent-api.service';
import { MessageQueueServiceApiService } from './services/message-queue-service-api.service';
import { ModeratorApiService } from './services/moderator-api.service';
import { ComplaintApiService } from './services/complaint-api.service';
import { NotificationFilterApiService } from './services/notification-filter-api.service';
import { ParticipantOfferToTradeApiService } from './services/participant-offer-to-trade-api.service';
import { TradeProtocolsApiService } from './services/trade-protocols-api.service';
import { SuspensionApiService } from './services/suspension-api.service';
import { ExportByUsersApiService } from './services/export-by-users-api.service';
import { TradesNotTookPlaceApiService } from './services/trades-not-took-place-api.service';
import { VatApiService } from './services/vat-api.service';
import { MessengerApiService } from './services/messenger-api.service';
import { PomogatorApiService } from './services/pomogator-api.service';
import { PriceListsApiService } from './services/price-lists-api.service';
import { RegulationApiService } from './services/regulation-api.service';
import { NsiApiService } from './services/nsi-api.service';
import { ReportsApiService } from './services/reports-api.service';
import { SegmentsApiService } from './services/segments-api.service';
import { StopListItemApiService } from './services/stop-list-item-api.service';
import { CompetetiveListApiService } from './services/competetive-list-api.service';
import { DashboardApiService } from './services/dashboard-api.service';
import { DocumentsApiService } from './services/documents-api.service';
import { FavoritesApiService } from './services/favorites-api.service';
import { FeedbackApiService } from './services/feedback-api.service';
import { FilterApiService } from './services/filter-api.service';
import { LogApiService } from './services/log-api.service';
import { MetricsApiService } from './services/metrics-api.service';
import { OrganizationSettingApiService } from './services/organization-setting-api.service';
import { PermissionApiService } from './services/permission-api.service';
import { RequirementRequestsApiService } from './services/requirement-requests-api.service';
import { TenantsApiService } from './services/tenants-api.service';
import { TimeApiService } from './services/time-api.service';
import { TradePlansApiService } from './services/trade-plans-api.service';
import { NotificationsApiService } from './services/notifications-api.service';
import { OffersApiService } from './services/offers-api.service';
import { OrganizationsApiService } from './services/organizations-api.service';
import { ParticipantOfferImportApiService } from './services/participant-offer-import-api.service';
import { TradesApiService } from './services/trades-api.service';
import { UsersApiService } from './services/users-api.service';
import { DealsApiService } from './services/deals-api.service';
import { DictionariesApiService } from './services/dictionaries-api.service';
import { FilesApiService } from './services/files-api.service';
import { OrdersApiService } from './services/orders-api.service';
import { OkApiService } from './services/ok-api.service';
import { AccreditationApiService } from './services/accreditation-api.service';
import { AuthApiService } from './services/auth-api.service';
import { CartApiService } from './services/cart-api.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    AdditionalAgreementApiService,
    MikIntegrationApiService,
    DeclarationApiService,
    DisseminationAgreementApiService,
    AuthenticationApiService,
    BelgorodBudgetsApiService,
    NicRegistriesApiService,
    OrgSettingApiService,
    ProhibitionExclusionRegisterApiService,
    ReportApiService,
    SuggestApiService,
    TenantApiService,
    SignedOutOfEpReasonsApiService,
    ExternalDealApiService,
    ExternalSystemsApiService,
    FileSignApiService,
    InvitationApiService,
    KladrRegionApiService,
    MetricApiService,
    NotificationApiService,
    OkeiApiService,
    DictionaryApiService,
    OrderApiService,
    OrganizationApiService,
    OutDocumentApiService,
    ParticipantRatingApiService,
    ParticipantApiService,
    ParticipantOfferApiService,
    RegionApiService,
    TariffApiService,
    UploadApiService,
    AccountApiService,
    ApplicationApiService,
    DealApiService,
    TradeApiService,
    FileV2ApiService,
    AccountsApiService,
    ApprovalRequestApiService,
    AvailableOperationsApiService,
    BannersApiService,
    BidApiService,
    BiddingApiService,
    BiddingDataApiService,
    BiddingDataNewApiService,
    BiddingNewApiService,
    BidNewApiService,
    BubblesApiService,
    CalendarApiService,
    CertificatesApiService,
    CompanyCatalogApiService,
    CatalogApiService,
    AdditionalAgreementsApiService,
    ChatsApiService,
    ClarificationRequestsApiService,
    DealAgreementsApiService,
    EmployeesApiService,
    FinalProposalNewApiService,
    ItemApiService,
    MovingProApiService,
    NicRegistryApiService,
    FinalProposalApiService,
    OrganizationAgreementApiService,
    OrganizationProfilesApiService,
    OrganizationRegistrationApiService,
    PartnersApiService,
    OrganizationPurchasePrefsApiService,
    RolesApiService,
    QuotationSessionAgreementApiService,
    QuotationSessionApiService,
    ImagesApiService,
    QuotationSessionNewApiService,
    SingleSupplierApiService,
    SupplierFinanceApiService,
    TagsApiService,
    ExternalDealsApiService,
    EisDataApiService,
    FederalLawsApiService,
    FinanceSourcesApiService,
    IntegrationApiService,
    InviteApiService,
    ManagerAgentApiService,
    MessageQueueServiceApiService,
    ModeratorApiService,
    ComplaintApiService,
    NotificationFilterApiService,
    ParticipantOfferToTradeApiService,
    TradeProtocolsApiService,
    SuspensionApiService,
    ExportByUsersApiService,
    TradesNotTookPlaceApiService,
    VatApiService,
    MessengerApiService,
    PomogatorApiService,
    PriceListsApiService,
    RegulationApiService,
    NsiApiService,
    ReportsApiService,
    SegmentsApiService,
    StopListItemApiService,
    CompetetiveListApiService,
    DashboardApiService,
    DocumentsApiService,
    FavoritesApiService,
    FeedbackApiService,
    FilterApiService,
    LogApiService,
    MetricsApiService,
    OrganizationSettingApiService,
    PermissionApiService,
    RequirementRequestsApiService,
    TenantsApiService,
    TimeApiService,
    TradePlansApiService,
    NotificationsApiService,
    OffersApiService,
    OrganizationsApiService,
    ParticipantOfferImportApiService,
    TradesApiService,
    UsersApiService,
    DealsApiService,
    DictionariesApiService,
    FilesApiService,
    OrdersApiService,
    OkApiService,
    AccreditationApiService,
    AuthApiService,
    CartApiService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
