/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ApiApplicationPriceShortInfoDto } from '../models/api-application-price-short-info-dto';
import { ApiDiscussionFileDto } from '../models/api-discussion-file-dto';
import { ApiMarketJsonResultOfAllTradeDocumentsDto } from '../models/api-market-json-result-of-all-trade-documents-dto';
import { ApiMarketJsonResultOfApplicationDocumentDto } from '../models/api-market-json-result-of-application-document-dto';
import { ApiMarketJsonResultOfApplicationDto } from '../models/api-market-json-result-of-application-dto';
import { ApiMarketJsonResultOfBooleanAltDto } from '../models/api-market-json-result-of-boolean';
import { ApiMarketJsonResultOfCardPaymentAvailabilityAltDto } from '../models/api-market-json-result-of-card-payment-availability';
import { ApiMarketJsonResultOfCustomerComissionProtocolWithDocsDto } from '../models/api-market-json-result-of-customer-comission-protocol-with-docs-dto';
import { ApiMarketJsonResultOfDictionaryOfIntegerAndIntegerAltDto } from '../models/api-market-json-result-of-dictionary-of-integer-and-integer';
import { ApiMarketJsonResultOfDictionaryOfIntegerAndListOfReadItemInfoAltDto } from '../models/api-market-json-result-of-dictionary-of-integer-and-list-of-read-item-info';
import { ApiMarketJsonResultOfDictionaryOfIntegerAndStringAltDto } from '../models/api-market-json-result-of-dictionary-of-integer-and-string';
import { ApiMarketJsonResultOfDiscussionItemDto } from '../models/api-market-json-result-of-discussion-item-dto';
import { ApiMarketJsonResultOfEisIntegrationResultDto } from '../models/api-market-json-result-of-eis-integration-result-dto';
import { ApiMarketJsonResultOfFormTemplateDto } from '../models/api-market-json-result-of-form-template-dto';
import { ApiMarketJsonResultOfGuidAltDto } from '../models/api-market-json-result-of-guid';
import { ApiMarketJsonResultOfIEnumerableOfIntegerAltDto } from '../models/api-market-json-result-of-i-enumerable-of-integer';
import { ApiMarketJsonResultOfImportApplicationProductsResponseAltDto } from '../models/api-market-json-result-of-import-application-products-response';
import { ApiMarketJsonResultOfImportExcelProductResponseAltDto } from '../models/api-market-json-result-of-import-excel-product-response';
import { ApiMarketJsonResultOfIntegerAltDto } from '../models/api-market-json-result-of-integer';
import { ApiMarketJsonResultOfListOfCharacteristicDto } from '../models/api-market-json-result-of-list-of-characteristic-dto';
import { ApiMarketJsonResultOfListOfDiscussionDto } from '../models/api-market-json-result-of-list-of-discussion-dto';
import { ApiMarketJsonResultOfListOfDiscussionItemDto } from '../models/api-market-json-result-of-list-of-discussion-item-dto';
import { ApiMarketJsonResultOfListOfDiscussionTitleDto } from '../models/api-market-json-result-of-list-of-discussion-title-dto';
import { ApiMarketJsonResultOfListOfIDiscussionHistoryDto } from '../models/api-market-json-result-of-list-of-i-discussion-history-dto';
import { ApiMarketJsonResultOfListOfIntegerAltDto } from '../models/api-market-json-result-of-list-of-integer';
import { ApiMarketJsonResultOfListOfMarketApplicationDetailAltDto } from '../models/api-market-json-result-of-list-of-market-application-detail';
import { ApiMarketJsonResultOfListOfMarketTradePersonAltDto } from '../models/api-market-json-result-of-list-of-market-trade-person';
import { ApiMarketJsonResultOfLongAltDto } from '../models/api-market-json-result-of-long';
import { ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketDealAltDto } from '../models/api-market-json-result-of-market-pagination-result-of-list-of-market-deal';
import { ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketSearchResultDto } from '../models/api-market-json-result-of-market-pagination-result-of-list-of-market-search-result-dto';
import { ApiMarketJsonResultOfMarketPaginationResultOfListOfTradeRecommendationDto } from '../models/api-market-json-result-of-market-pagination-result-of-list-of-trade-recommendation-dto';
import { ApiMarketJsonResultOfMarketTradeViewDto } from '../models/api-market-json-result-of-market-trade-view-dto';
import { ApiMarketJsonResultOfPriceReductionResponseAltDto } from '../models/api-market-json-result-of-price-reduction-response';
import { ApiMarketJsonResultOfPublishApplicationResultAltDto } from '../models/api-market-json-result-of-publish-application-result';
import { ApiMarketJsonResultOfStarLightSearchResultDto } from '../models/api-market-json-result-of-star-light-search-result-dto';
import { ApiMarketJsonResultOfStarSearchObjAltDto } from '../models/api-market-json-result-of-star-search-obj';
import { ApiMarketJsonResultOfStarSuggestObjectOfAltDto } from '../models/api-market-json-result-of-star-suggest-object-of';
import { ApiMarketJsonResultOfStringAltDto } from '../models/api-market-json-result-of-string';
import { ApiMarketJsonResultOfTradeDto } from '../models/api-market-json-result-of-trade-dto';
import { ApiMarketJsonResultOfTradePublishResultAltDto } from '../models/api-market-json-result-of-trade-publish-result';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { tradesAddChatMessage } from '../fn/trades/trades-add-chat-message';
import { TradesAddChatMessage$Params } from '../fn/trades/trades-add-chat-message';
import { tradesAddCustomerDealCommentSystemMessage } from '../fn/trades/trades-add-customer-deal-comment-system-message';
import { TradesAddCustomerDealCommentSystemMessage$Params } from '../fn/trades/trades-add-customer-deal-comment-system-message';
import { tradesAddDealSigningExpiredMessage } from '../fn/trades/trades-add-deal-signing-expired-message';
import { TradesAddDealSigningExpiredMessage$Params } from '../fn/trades/trades-add-deal-signing-expired-message';
import { tradesAddMessageToChat } from '../fn/trades/trades-add-message-to-chat';
import { TradesAddMessageToChat$Params } from '../fn/trades/trades-add-message-to-chat';
import { tradesAddMmoCreateDealSystemMessage } from '../fn/trades/trades-add-mmo-create-deal-system-message';
import { TradesAddMmoCreateDealSystemMessage$Params } from '../fn/trades/trades-add-mmo-create-deal-system-message';
import { tradesAddMmoParticipantMissedSigningTimeSystemMessage } from '../fn/trades/trades-add-mmo-participant-missed-signing-time-system-message';
import { TradesAddMmoParticipantMissedSigningTimeSystemMessage$Params } from '../fn/trades/trades-add-mmo-participant-missed-signing-time-system-message';
import { tradesAddMmoTradeFromDealNotSignedToFillingApplicationsSystemMessage } from '../fn/trades/trades-add-mmo-trade-from-deal-not-signed-to-filling-applications-system-message';
import { TradesAddMmoTradeFromDealNotSignedToFillingApplicationsSystemMessage$Params } from '../fn/trades/trades-add-mmo-trade-from-deal-not-signed-to-filling-applications-system-message';
import { tradesAddMmoTradeFromDealSigningToDealNotSignedChatSystemMessage } from '../fn/trades/trades-add-mmo-trade-from-deal-signing-to-deal-not-signed-chat-system-message';
import { TradesAddMmoTradeFromDealSigningToDealNotSignedChatSystemMessage$Params } from '../fn/trades/trades-add-mmo-trade-from-deal-signing-to-deal-not-signed-chat-system-message';
import { tradesBlockFinance } from '../fn/trades/trades-block-finance';
import { TradesBlockFinance$Params } from '../fn/trades/trades-block-finance';
import { tradesCalculatePriceReduction } from '../fn/trades/trades-calculate-price-reduction';
import { TradesCalculatePriceReduction$Params } from '../fn/trades/trades-calculate-price-reduction';
import { tradesCancelTrade } from '../fn/trades/trades-cancel-trade';
import { TradesCancelTrade$Params } from '../fn/trades/trades-cancel-trade';
import { tradesCancelTradeExternal } from '../fn/trades/trades-cancel-trade-external';
import { TradesCancelTradeExternal$Params } from '../fn/trades/trades-cancel-trade-external';
import { tradesCloseTradeWithoutDeal } from '../fn/trades/trades-close-trade-without-deal';
import { TradesCloseTradeWithoutDeal$Params } from '../fn/trades/trades-close-trade-without-deal';
import { tradesCreateChat } from '../fn/trades/trades-create-chat';
import { TradesCreateChat$Params } from '../fn/trades/trades-create-chat';
import { tradesCreateCustomerComissionProtocol } from '../fn/trades/trades-create-customer-comission-protocol';
import { TradesCreateCustomerComissionProtocol$Params } from '../fn/trades/trades-create-customer-comission-protocol';
import { tradesCreatePreliminaryOffers } from '../fn/trades/trades-create-preliminary-offers';
import { TradesCreatePreliminaryOffers$Params } from '../fn/trades/trades-create-preliminary-offers';
import { tradesCreatePreliminaryOffers2 } from '../fn/trades/trades-create-preliminary-offers-2';
import { TradesCreatePreliminaryOffers2$Params } from '../fn/trades/trades-create-preliminary-offers-2';
import { tradesCreatePreliminaryOffersForPrivateTrade } from '../fn/trades/trades-create-preliminary-offers-for-private-trade';
import { TradesCreatePreliminaryOffersForPrivateTrade$Params } from '../fn/trades/trades-create-preliminary-offers-for-private-trade';
import { tradesCreatePreliminaryOffersForPrivateTrade2 } from '../fn/trades/trades-create-preliminary-offers-for-private-trade-2';
import { TradesCreatePreliminaryOffersForPrivateTrade2$Params } from '../fn/trades/trades-create-preliminary-offers-for-private-trade-2';
import { tradesCreateTradeFromPlanLots } from '../fn/trades/trades-create-trade-from-plan-lots';
import { TradesCreateTradeFromPlanLots$Params } from '../fn/trades/trades-create-trade-from-plan-lots';
import { tradesDeleteDealSigner } from '../fn/trades/trades-delete-deal-signer';
import { TradesDeleteDealSigner$Params } from '../fn/trades/trades-delete-deal-signer';
import { tradesDeleteTradeDraft } from '../fn/trades/trades-delete-trade-draft';
import { TradesDeleteTradeDraft$Params } from '../fn/trades/trades-delete-trade-draft';
import { tradesDisableSupplierMessages } from '../fn/trades/trades-disable-supplier-messages';
import { TradesDisableSupplierMessages$Params } from '../fn/trades/trades-disable-supplier-messages';
import { tradesEditPublished } from '../fn/trades/trades-edit-published';
import { TradesEditPublished$Params } from '../fn/trades/trades-edit-published';
import { tradesEditPublishedFromEis } from '../fn/trades/trades-edit-published-from-eis';
import { TradesEditPublishedFromEis$Params } from '../fn/trades/trades-edit-published-from-eis';
import { tradesEnableSupplierMessages } from '../fn/trades/trades-enable-supplier-messages';
import { TradesEnableSupplierMessages$Params } from '../fn/trades/trades-enable-supplier-messages';
import { tradesExternalSearch } from '../fn/trades/trades-external-search';
import { TradesExternalSearch$Params } from '../fn/trades/trades-external-search';
import { tradesFinishReviewApplication } from '../fn/trades/trades-finish-review-application';
import { TradesFinishReviewApplication$Params } from '../fn/trades/trades-finish-review-application';
import { tradesFinishReviewApplicationExternal } from '../fn/trades/trades-finish-review-application-external';
import { TradesFinishReviewApplicationExternal$Params } from '../fn/trades/trades-finish-review-application-external';
import { tradesGenerateTradeProtocol } from '../fn/trades/trades-generate-trade-protocol';
import { TradesGenerateTradeProtocol$Params } from '../fn/trades/trades-generate-trade-protocol';
import { tradesGetAllChatItems } from '../fn/trades/trades-get-all-chat-items';
import { TradesGetAllChatItems$Params } from '../fn/trades/trades-get-all-chat-items';
import { tradesGetApplicationDeclaration } from '../fn/trades/trades-get-application-declaration';
import { TradesGetApplicationDeclaration$Params } from '../fn/trades/trades-get-application-declaration';
import { tradesGetApplicationInfo } from '../fn/trades/trades-get-application-info';
import { TradesGetApplicationInfo$Params } from '../fn/trades/trades-get-application-info';
import { tradesGetApplicationPriceShortInfo } from '../fn/trades/trades-get-application-price-short-info';
import { TradesGetApplicationPriceShortInfo$Params } from '../fn/trades/trades-get-application-price-short-info';
import { tradesGetApplicationProductsImportTemplate } from '../fn/trades/trades-get-application-products-import-template';
import { TradesGetApplicationProductsImportTemplate$Params } from '../fn/trades/trades-get-application-products-import-template';
import { tradesGetApplicationProductsInfoFromImportTemplate } from '../fn/trades/trades-get-application-products-info-from-import-template';
import { TradesGetApplicationProductsInfoFromImportTemplate$Params } from '../fn/trades/trades-get-application-products-info-from-import-template';
import { tradesGetApplicationsArchive } from '../fn/trades/trades-get-applications-archive';
import { TradesGetApplicationsArchive$Params } from '../fn/trades/trades-get-applications-archive';
import { tradesGetApplicationsByTradeId } from '../fn/trades/trades-get-applications-by-trade-id';
import { TradesGetApplicationsByTradeId$Params } from '../fn/trades/trades-get-applications-by-trade-id';
import { tradesGetArchiveDocuments } from '../fn/trades/trades-get-archive-documents';
import { TradesGetArchiveDocuments$Params } from '../fn/trades/trades-get-archive-documents';
import { tradesGetCardPaymentAvailability } from '../fn/trades/trades-get-card-payment-availability';
import { TradesGetCardPaymentAvailability$Params } from '../fn/trades/trades-get-card-payment-availability';
import { tradesGetCharacteristicsByTradeIdAsFile } from '../fn/trades/trades-get-characteristics-by-trade-id-as-file';
import { TradesGetCharacteristicsByTradeIdAsFile$Params } from '../fn/trades/trades-get-characteristics-by-trade-id-as-file';
import { tradesGetChat } from '../fn/trades/trades-get-chat';
import { TradesGetChat$Params } from '../fn/trades/trades-get-chat';
import { tradesGetChatFiles } from '../fn/trades/trades-get-chat-files';
import { TradesGetChatFiles$Params } from '../fn/trades/trades-get-chat-files';
import { tradesGetChatItems } from '../fn/trades/trades-get-chat-items';
import { TradesGetChatItems$Params } from '../fn/trades/trades-get-chat-items';
import { tradesGetChats } from '../fn/trades/trades-get-chats';
import { TradesGetChats$Params } from '../fn/trades/trades-get-chats';
import { tradesGetChatsUnreadItems } from '../fn/trades/trades-get-chats-unread-items';
import { TradesGetChatsUnreadItems$Params } from '../fn/trades/trades-get-chats-unread-items';
import { tradesGetCompetitiveListReport } from '../fn/trades/trades-get-competitive-list-report';
import { TradesGetCompetitiveListReport$Params } from '../fn/trades/trades-get-competitive-list-report';
import { tradesGetConsiderationProtocol } from '../fn/trades/trades-get-consideration-protocol';
import { TradesGetConsiderationProtocol$Params } from '../fn/trades/trades-get-consideration-protocol';
import { tradesGetCreateApplicationFormTemplateSettings } from '../fn/trades/trades-get-create-application-form-template-settings';
import { TradesGetCreateApplicationFormTemplateSettings$Params } from '../fn/trades/trades-get-create-application-form-template-settings';
import { tradesGetCustomerChats } from '../fn/trades/trades-get-customer-chats';
import { TradesGetCustomerChats$Params } from '../fn/trades/trades-get-customer-chats';
import { tradesGetCustomerSignerList } from '../fn/trades/trades-get-customer-signer-list';
import { TradesGetCustomerSignerList$Params } from '../fn/trades/trades-get-customer-signer-list';
import { tradesGetDealsList } from '../fn/trades/trades-get-deals-list';
import { TradesGetDealsList$Params } from '../fn/trades/trades-get-deals-list';
import { tradesGetFiles } from '../fn/trades/trades-get-files';
import { TradesGetFiles$Params } from '../fn/trades/trades-get-files';
import { tradesGetImportTemplateGuidByTenant } from '../fn/trades/trades-get-import-template-guid-by-tenant';
import { TradesGetImportTemplateGuidByTenant$Params } from '../fn/trades/trades-get-import-template-guid-by-tenant';
import { tradesGetLastChatItems } from '../fn/trades/trades-get-last-chat-items';
import { TradesGetLastChatItems$Params } from '../fn/trades/trades-get-last-chat-items';
import { tradesGetReadItemInfo } from '../fn/trades/trades-get-read-item-info';
import { TradesGetReadItemInfo$Params } from '../fn/trades/trades-get-read-item-info';
import { tradesGetSpecificationsByParticipants } from '../fn/trades/trades-get-specifications-by-participants';
import { TradesGetSpecificationsByParticipants$Params } from '../fn/trades/trades-get-specifications-by-participants';
import { tradesGetTenantIdByTrade } from '../fn/trades/trades-get-tenant-id-by-trade';
import { TradesGetTenantIdByTrade$Params } from '../fn/trades/trades-get-tenant-id-by-trade';
import { tradesGetTenderTenant } from '../fn/trades/trades-get-tender-tenant';
import { TradesGetTenderTenant$Params } from '../fn/trades/trades-get-tender-tenant';
import { tradesGetTradeCharacteristics } from '../fn/trades/trades-get-trade-characteristics';
import { TradesGetTradeCharacteristics$Params } from '../fn/trades/trades-get-trade-characteristics';
import { tradesGetTradeCopy } from '../fn/trades/trades-get-trade-copy';
import { TradesGetTradeCopy$Params } from '../fn/trades/trades-get-trade-copy';
import { tradesGetTradeDiscussionHistory } from '../fn/trades/trades-get-trade-discussion-history';
import { TradesGetTradeDiscussionHistory$Params } from '../fn/trades/trades-get-trade-discussion-history';
import { tradesGetTradeForEdit } from '../fn/trades/trades-get-trade-for-edit';
import { TradesGetTradeForEdit$Params } from '../fn/trades/trades-get-trade-for-edit';
import { tradesGetTradeForView } from '../fn/trades/trades-get-trade-for-view';
import { TradesGetTradeForView$Params } from '../fn/trades/trades-get-trade-for-view';
import { tradesGetTradeForViewByLot } from '../fn/trades/trades-get-trade-for-view-by-lot';
import { TradesGetTradeForViewByLot$Params } from '../fn/trades/trades-get-trade-for-view-by-lot';
import { tradesGetTradeRecommendations } from '../fn/trades/trades-get-trade-recommendations';
import { TradesGetTradeRecommendations$Params } from '../fn/trades/trades-get-trade-recommendations';
import { tradesGetUnreadItems } from '../fn/trades/trades-get-unread-items';
import { TradesGetUnreadItems$Params } from '../fn/trades/trades-get-unread-items';
import { tradesGetUnreadItemsCount } from '../fn/trades/trades-get-unread-items-count';
import { TradesGetUnreadItemsCount$Params } from '../fn/trades/trades-get-unread-items-count';
import { tradesImportProductsFromExcelWithGuid } from '../fn/trades/trades-import-products-from-excel-with-guid';
import { TradesImportProductsFromExcelWithGuid$Params } from '../fn/trades/trades-import-products-from-excel-with-guid';
import { tradesNoEisPublishConsiderationProtocol } from '../fn/trades/trades-no-eis-publish-consideration-protocol';
import { TradesNoEisPublishConsiderationProtocol$Params } from '../fn/trades/trades-no-eis-publish-consideration-protocol';
import { tradesPrepareTradeFromPlanLots } from '../fn/trades/trades-prepare-trade-from-plan-lots';
import { TradesPrepareTradeFromPlanLots$Params } from '../fn/trades/trades-prepare-trade-from-plan-lots';
import { tradesPublicLightSearch } from '../fn/trades/trades-public-light-search';
import { TradesPublicLightSearch$Params } from '../fn/trades/trades-public-light-search';
import { tradesPublicSearch2 } from '../fn/trades/trades-public-search-2';
import { TradesPublicSearch2$Params } from '../fn/trades/trades-public-search-2';
import { tradesPublish } from '../fn/trades/trades-publish';
import { TradesPublish$Params } from '../fn/trades/trades-publish';
import { tradesPublish2 } from '../fn/trades/trades-publish-2';
import { TradesPublish2$Params } from '../fn/trades/trades-publish-2';
import { tradesPublishById } from '../fn/trades/trades-publish-by-id';
import { TradesPublishById$Params } from '../fn/trades/trades-publish-by-id';
import { tradesPublishConsiderationProtocol } from '../fn/trades/trades-publish-consideration-protocol';
import { TradesPublishConsiderationProtocol$Params } from '../fn/trades/trades-publish-consideration-protocol';
import { tradesPublishFromEis } from '../fn/trades/trades-publish-from-eis';
import { TradesPublishFromEis$Params } from '../fn/trades/trades-publish-from-eis';
import { tradesReadAllItemsFromId } from '../fn/trades/trades-read-all-items-from-id';
import { TradesReadAllItemsFromId$Params } from '../fn/trades/trades-read-all-items-from-id';
import { tradesReadChatItemByIds } from '../fn/trades/trades-read-chat-item-by-ids';
import { TradesReadChatItemByIds$Params } from '../fn/trades/trades-read-chat-item-by-ids';
import { tradesRegisterForTradeLot } from '../fn/trades/trades-register-for-trade-lot';
import { TradesRegisterForTradeLot$Params } from '../fn/trades/trades-register-for-trade-lot';
import { tradesRemoveApplicationDraft } from '../fn/trades/trades-remove-application-draft';
import { TradesRemoveApplicationDraft$Params } from '../fn/trades/trades-remove-application-draft';
import { tradesRetradingUpdate } from '../fn/trades/trades-retrading-update';
import { TradesRetradingUpdate$Params } from '../fn/trades/trades-retrading-update';
import { tradesReturnTradeToFillingAppState } from '../fn/trades/trades-return-trade-to-filling-app-state';
import { TradesReturnTradeToFillingAppState$Params } from '../fn/trades/trades-return-trade-to-filling-app-state';
import { tradesReturnTradeToReviewApplicaitons } from '../fn/trades/trades-return-trade-to-review-applicaitons';
import { TradesReturnTradeToReviewApplicaitons$Params } from '../fn/trades/trades-return-trade-to-review-applicaitons';
import { tradesRevokeApplication } from '../fn/trades/trades-revoke-application';
import { TradesRevokeApplication$Params } from '../fn/trades/trades-revoke-application';
import { tradesSaveApplicationDraft } from '../fn/trades/trades-save-application-draft';
import { TradesSaveApplicationDraft$Params } from '../fn/trades/trades-save-application-draft';
import { tradesSaveAsDraft } from '../fn/trades/trades-save-as-draft';
import { TradesSaveAsDraft$Params } from '../fn/trades/trades-save-as-draft';
import { tradesSaveContractSigner } from '../fn/trades/trades-save-contract-signer';
import { TradesSaveContractSigner$Params } from '../fn/trades/trades-save-contract-signer';
import { tradesSaveManufacturerCountryCodes } from '../fn/trades/trades-save-manufacturer-country-codes';
import { TradesSaveManufacturerCountryCodes$Params } from '../fn/trades/trades-save-manufacturer-country-codes';
import { tradesSaveSupplierFromMmo } from '../fn/trades/trades-save-supplier-from-mmo';
import { TradesSaveSupplierFromMmo$Params } from '../fn/trades/trades-save-supplier-from-mmo';
import { tradesSearch } from '../fn/trades/trades-search';
import { TradesSearch$Params } from '../fn/trades/trades-search';
import { tradesSendProtocolToEis } from '../fn/trades/trades-send-protocol-to-eis';
import { TradesSendProtocolToEis$Params } from '../fn/trades/trades-send-protocol-to-eis';
import { tradesSendTradeCancelToEis } from '../fn/trades/trades-send-trade-cancel-to-eis';
import { TradesSendTradeCancelToEis$Params } from '../fn/trades/trades-send-trade-cancel-to-eis';
import { tradesSendTradeToEis } from '../fn/trades/trades-send-trade-to-eis';
import { TradesSendTradeToEis$Params } from '../fn/trades/trades-send-trade-to-eis';
import { tradesSpeedUpPriceRequest } from '../fn/trades/trades-speed-up-price-request';
import { TradesSpeedUpPriceRequest$Params } from '../fn/trades/trades-speed-up-price-request';
import { tradesStarLightSearch } from '../fn/trades/trades-star-light-search';
import { TradesStarLightSearch$Params } from '../fn/trades/trades-star-light-search';
import { tradesSuggest } from '../fn/trades/trades-suggest';
import { TradesSuggest$Params } from '../fn/trades/trades-suggest';
import { tradesTurnSingleSupplierToPriceReuest } from '../fn/trades/trades-turn-single-supplier-to-price-reuest';
import { TradesTurnSingleSupplierToPriceReuest$Params } from '../fn/trades/trades-turn-single-supplier-to-price-reuest';
import { tradesValidate } from '../fn/trades/trades-validate';
import { TradesValidate$Params } from '../fn/trades/trades-validate';
import { tradesValidateWorkgroupForSigner } from '../fn/trades/trades-validate-workgroup-for-signer';
import { TradesValidateWorkgroupForSigner$Params } from '../fn/trades/trades-validate-workgroup-for-signer';

@Injectable({ providedIn: 'root' })
export class TradesApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `tradesFinishReviewApplication()` */
  static readonly TradesFinishReviewApplicationPath = '/market/api/v1/trades/{id}/applications/review/finish';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesFinishReviewApplication()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesFinishReviewApplication$Response(params: TradesFinishReviewApplication$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>> {
    return tradesFinishReviewApplication(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesFinishReviewApplication$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesFinishReviewApplication(params: TradesFinishReviewApplication$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfBooleanAltDto> {
    return this.tradesFinishReviewApplication$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>): ApiMarketJsonResultOfBooleanAltDto => r.body)
    );
  }

  /** Path part for operation `tradesFinishReviewApplicationExternal()` */
  static readonly TradesFinishReviewApplicationExternalPath = '/market/api/v1/trades/{id}/applications/review/finish-external';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesFinishReviewApplicationExternal()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesFinishReviewApplicationExternal$Response(params: TradesFinishReviewApplicationExternal$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>> {
    return tradesFinishReviewApplicationExternal(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesFinishReviewApplicationExternal$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesFinishReviewApplicationExternal(params: TradesFinishReviewApplicationExternal$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfBooleanAltDto> {
    return this.tradesFinishReviewApplicationExternal$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>): ApiMarketJsonResultOfBooleanAltDto => r.body)
    );
  }

  /** Path part for operation `tradesSaveApplicationDraft()` */
  static readonly TradesSaveApplicationDraftPath = '/market/api/v1/trades/applications/draft';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesSaveApplicationDraft()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesSaveApplicationDraft$Response(params?: TradesSaveApplicationDraft$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>> {
    return tradesSaveApplicationDraft(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesSaveApplicationDraft$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesSaveApplicationDraft(params?: TradesSaveApplicationDraft$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfIntegerAltDto> {
    return this.tradesSaveApplicationDraft$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>): ApiMarketJsonResultOfIntegerAltDto => r.body)
    );
  }

  /** Path part for operation `tradesPublish()` */
  static readonly TradesPublishPath = '/market/api/v1/trades/applications/publish';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesPublish()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesPublish$Response(params?: TradesPublish$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfPublishApplicationResultAltDto>> {
    return tradesPublish(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesPublish$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesPublish(params?: TradesPublish$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfPublishApplicationResultAltDto> {
    return this.tradesPublish$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfPublishApplicationResultAltDto>): ApiMarketJsonResultOfPublishApplicationResultAltDto => r.body)
    );
  }

  /** Path part for operation `tradesValidate()` */
  static readonly TradesValidatePath = '/market/api/v1/trades/applications/validate';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesValidate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesValidate$Response(params?: TradesValidate$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>> {
    return tradesValidate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesValidate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesValidate(params?: TradesValidate$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfBooleanAltDto> {
    return this.tradesValidate$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>): ApiMarketJsonResultOfBooleanAltDto => r.body)
    );
  }

  /** Path part for operation `tradesRevokeApplication()` */
  static readonly TradesRevokeApplicationPath = '/market/api/v1/trades/{tradeId}/applications/{applicationId}/revoke';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesRevokeApplication()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesRevokeApplication$Response(params: TradesRevokeApplication$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return tradesRevokeApplication(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesRevokeApplication$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesRevokeApplication(params: TradesRevokeApplication$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.tradesRevokeApplication$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

  /** Path part for operation `tradesRemoveApplicationDraft()` */
  static readonly TradesRemoveApplicationDraftPath = '/market/api/v1/trades/applications/{applicationId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesRemoveApplicationDraft()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesRemoveApplicationDraft$Response(params: TradesRemoveApplicationDraft$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return tradesRemoveApplicationDraft(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesRemoveApplicationDraft$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesRemoveApplicationDraft(params: TradesRemoveApplicationDraft$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.tradesRemoveApplicationDraft$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

  /** Path part for operation `tradesGetApplicationInfo()` */
  static readonly TradesGetApplicationInfoPath = '/market/api/v1/trades/{id}/applications/{applicationId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesGetApplicationInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetApplicationInfo$Response(params: TradesGetApplicationInfo$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfApplicationDto>> {
    return tradesGetApplicationInfo(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesGetApplicationInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetApplicationInfo(params: TradesGetApplicationInfo$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfApplicationDto> {
    return this.tradesGetApplicationInfo$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfApplicationDto>): ApiMarketJsonResultOfApplicationDto => r.body)
    );
  }

  /** Path part for operation `tradesGetApplicationsByTradeId()` */
  static readonly TradesGetApplicationsByTradeIdPath = '/market/api/v1/trades/{id}/applications';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesGetApplicationsByTradeId()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetApplicationsByTradeId$Response(params: TradesGetApplicationsByTradeId$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfMarketApplicationDetailAltDto>> {
    return tradesGetApplicationsByTradeId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesGetApplicationsByTradeId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetApplicationsByTradeId(params: TradesGetApplicationsByTradeId$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfListOfMarketApplicationDetailAltDto> {
    return this.tradesGetApplicationsByTradeId$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfListOfMarketApplicationDetailAltDto>): ApiMarketJsonResultOfListOfMarketApplicationDetailAltDto => r.body)
    );
  }

  /** Path part for operation `tradesRetradingUpdate()` */
  static readonly TradesRetradingUpdatePath = '/market/api/v1/trades/application/RetradingUpdate';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesRetradingUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesRetradingUpdate$Response(params?: TradesRetradingUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return tradesRetradingUpdate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesRetradingUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesRetradingUpdate(params?: TradesRetradingUpdate$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.tradesRetradingUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

  /** Path part for operation `tradesSaveManufacturerCountryCodes()` */
  static readonly TradesSaveManufacturerCountryCodesPath = '/market/api/v1/trades/application/SaveCountryCodes';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesSaveManufacturerCountryCodes()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesSaveManufacturerCountryCodes$Response(params?: TradesSaveManufacturerCountryCodes$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return tradesSaveManufacturerCountryCodes(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesSaveManufacturerCountryCodes$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesSaveManufacturerCountryCodes(params?: TradesSaveManufacturerCountryCodes$Params, context?: HttpContext): Observable<number> {
    return this.tradesSaveManufacturerCountryCodes$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `tradesGetApplicationPriceShortInfo()` */
  static readonly TradesGetApplicationPriceShortInfoPath = '/market/api/v1/trades/application/{applicationId}/price';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesGetApplicationPriceShortInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetApplicationPriceShortInfo$Response(params: TradesGetApplicationPriceShortInfo$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiApplicationPriceShortInfoDto>> {
    return tradesGetApplicationPriceShortInfo(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesGetApplicationPriceShortInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetApplicationPriceShortInfo(params: TradesGetApplicationPriceShortInfo$Params, context?: HttpContext): Observable<ApiApplicationPriceShortInfoDto> {
    return this.tradesGetApplicationPriceShortInfo$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiApplicationPriceShortInfoDto>): ApiApplicationPriceShortInfoDto => r.body)
    );
  }

  /** Path part for operation `tradesGetApplicationDeclaration()` */
  static readonly TradesGetApplicationDeclarationPath = '/market/api/v1/trades/application/declaration';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesGetApplicationDeclaration()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetApplicationDeclaration$Response(params?: TradesGetApplicationDeclaration$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfApplicationDocumentDto>> {
    return tradesGetApplicationDeclaration(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesGetApplicationDeclaration$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetApplicationDeclaration(params?: TradesGetApplicationDeclaration$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfApplicationDocumentDto> {
    return this.tradesGetApplicationDeclaration$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfApplicationDocumentDto>): ApiMarketJsonResultOfApplicationDocumentDto => r.body)
    );
  }

  /** Path part for operation `tradesCreatePreliminaryOffers()` */
  static readonly TradesCreatePreliminaryOffersPath = '/market/api/v1/trades/{tradeId}/application/create-preliminary-offers';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesCreatePreliminaryOffers()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesCreatePreliminaryOffers$Response(params: TradesCreatePreliminaryOffers$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIEnumerableOfIntegerAltDto>> {
    return tradesCreatePreliminaryOffers(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesCreatePreliminaryOffers$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesCreatePreliminaryOffers(params: TradesCreatePreliminaryOffers$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfIEnumerableOfIntegerAltDto> {
    return this.tradesCreatePreliminaryOffers$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfIEnumerableOfIntegerAltDto>): ApiMarketJsonResultOfIEnumerableOfIntegerAltDto => r.body)
    );
  }

  /** Path part for operation `tradesCreatePreliminaryOffers2()` */
  static readonly TradesCreatePreliminaryOffers2Path = '/market/api/v1/trades/{tradeId}/application/create-preliminary-offers-by-operator';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesCreatePreliminaryOffers2()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesCreatePreliminaryOffers2$Response(params: TradesCreatePreliminaryOffers2$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>> {
    return tradesCreatePreliminaryOffers2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesCreatePreliminaryOffers2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesCreatePreliminaryOffers2(params: TradesCreatePreliminaryOffers2$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfIntegerAltDto> {
    return this.tradesCreatePreliminaryOffers2$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>): ApiMarketJsonResultOfIntegerAltDto => r.body)
    );
  }

  /** Path part for operation `tradesCreatePreliminaryOffersForPrivateTrade()` */
  static readonly TradesCreatePreliminaryOffersForPrivateTradePath = '/market/api/v1/trades/{tradeId}/application/create-preliminary-offers/private';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesCreatePreliminaryOffersForPrivateTrade()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesCreatePreliminaryOffersForPrivateTrade$Response(params: TradesCreatePreliminaryOffersForPrivateTrade$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIEnumerableOfIntegerAltDto>> {
    return tradesCreatePreliminaryOffersForPrivateTrade(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesCreatePreliminaryOffersForPrivateTrade$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesCreatePreliminaryOffersForPrivateTrade(params: TradesCreatePreliminaryOffersForPrivateTrade$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfIEnumerableOfIntegerAltDto> {
    return this.tradesCreatePreliminaryOffersForPrivateTrade$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfIEnumerableOfIntegerAltDto>): ApiMarketJsonResultOfIEnumerableOfIntegerAltDto => r.body)
    );
  }

  /** Path part for operation `tradesBlockFinance()` */
  static readonly TradesBlockFinancePath = '/market/api/v1/trades/applications/block-finance';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesBlockFinance()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesBlockFinance$Response(params?: TradesBlockFinance$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfPublishApplicationResultAltDto>> {
    return tradesBlockFinance(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesBlockFinance$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesBlockFinance(params?: TradesBlockFinance$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfPublishApplicationResultAltDto> {
    return this.tradesBlockFinance$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfPublishApplicationResultAltDto>): ApiMarketJsonResultOfPublishApplicationResultAltDto => r.body)
    );
  }

  /** Path part for operation `tradesGetArchiveDocuments()` */
  static readonly TradesGetArchiveDocumentsPath = '/market/api/v1/trades/application/{applicationId}/documents/archive';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesGetArchiveDocuments()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetArchiveDocuments$Response(params: TradesGetArchiveDocuments$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return tradesGetArchiveDocuments(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesGetArchiveDocuments$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetArchiveDocuments(params: TradesGetArchiveDocuments$Params, context?: HttpContext): Observable<Blob> {
    return this.tradesGetArchiveDocuments$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `tradesGetApplicationProductsImportTemplate()` */
  static readonly TradesGetApplicationProductsImportTemplatePath = '/market/api/v1/trades/{tradeId}/application/products/import/template';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesGetApplicationProductsImportTemplate()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetApplicationProductsImportTemplate$Response(params: TradesGetApplicationProductsImportTemplate$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfStringAltDto>> {
    return tradesGetApplicationProductsImportTemplate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesGetApplicationProductsImportTemplate$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetApplicationProductsImportTemplate(params: TradesGetApplicationProductsImportTemplate$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfStringAltDto> {
    return this.tradesGetApplicationProductsImportTemplate$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfStringAltDto>): ApiMarketJsonResultOfStringAltDto => r.body)
    );
  }

  /** Path part for operation `tradesGetApplicationProductsInfoFromImportTemplate()` */
  static readonly TradesGetApplicationProductsInfoFromImportTemplatePath = '/market/api/v1/trades/{tradeId}/application/products/import/{fileGuid}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesGetApplicationProductsInfoFromImportTemplate()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetApplicationProductsInfoFromImportTemplate$Response(params: TradesGetApplicationProductsInfoFromImportTemplate$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfImportApplicationProductsResponseAltDto>> {
    return tradesGetApplicationProductsInfoFromImportTemplate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesGetApplicationProductsInfoFromImportTemplate$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetApplicationProductsInfoFromImportTemplate(params: TradesGetApplicationProductsInfoFromImportTemplate$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfImportApplicationProductsResponseAltDto> {
    return this.tradesGetApplicationProductsInfoFromImportTemplate$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfImportApplicationProductsResponseAltDto>): ApiMarketJsonResultOfImportApplicationProductsResponseAltDto => r.body)
    );
  }

  /** Path part for operation `tradesGetCardPaymentAvailability()` */
  static readonly TradesGetCardPaymentAvailabilityPath = '/market/api/v1/trades/{tradeId}/application/card-payment/available';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesGetCardPaymentAvailability()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesGetCardPaymentAvailability$Response(params: TradesGetCardPaymentAvailability$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfCardPaymentAvailabilityAltDto>> {
    return tradesGetCardPaymentAvailability(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesGetCardPaymentAvailability$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesGetCardPaymentAvailability(params: TradesGetCardPaymentAvailability$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfCardPaymentAvailabilityAltDto> {
    return this.tradesGetCardPaymentAvailability$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfCardPaymentAvailabilityAltDto>): ApiMarketJsonResultOfCardPaymentAvailabilityAltDto => r.body)
    );
  }

  /** Path part for operation `tradesGetChat()` */
  static readonly TradesGetChatPath = '/market/api/v1/trades/{id}/chat/{chatId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesGetChat()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetChat$Response(params: TradesGetChat$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfDiscussionDto>> {
    return tradesGetChat(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesGetChat$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetChat(params: TradesGetChat$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfListOfDiscussionDto> {
    return this.tradesGetChat$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfListOfDiscussionDto>): ApiMarketJsonResultOfListOfDiscussionDto => r.body)
    );
  }

  /** Path part for operation `tradesAddChatMessage()` */
  static readonly TradesAddChatMessagePath = '/market/api/v1/trades/{id}/chat/{chatId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesAddChatMessage()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesAddChatMessage$Response(params: TradesAddChatMessage$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfDiscussionItemDto>> {
    return tradesAddChatMessage(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesAddChatMessage$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesAddChatMessage(params: TradesAddChatMessage$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfDiscussionItemDto> {
    return this.tradesAddChatMessage$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfDiscussionItemDto>): ApiMarketJsonResultOfDiscussionItemDto => r.body)
    );
  }

  /** Path part for operation `tradesGetAllChatItems()` */
  static readonly TradesGetAllChatItemsPath = '/market/api/v1/trades/{id}/chat/{chatId}/items';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesGetAllChatItems()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetAllChatItems$Response(params: TradesGetAllChatItems$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfDiscussionDto>> {
    return tradesGetAllChatItems(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesGetAllChatItems$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetAllChatItems(params: TradesGetAllChatItems$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfListOfDiscussionDto> {
    return this.tradesGetAllChatItems$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfListOfDiscussionDto>): ApiMarketJsonResultOfListOfDiscussionDto => r.body)
    );
  }

  /** Path part for operation `tradesGetChatItems()` */
  static readonly TradesGetChatItemsPath = '/market/api/v1/trades/{id}/chat/{chatId}/read/items';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesGetChatItems()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesGetChatItems$Response(params: TradesGetChatItems$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfDiscussionDto>> {
    return tradesGetChatItems(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesGetChatItems$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesGetChatItems(params: TradesGetChatItems$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfListOfDiscussionDto> {
    return this.tradesGetChatItems$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfListOfDiscussionDto>): ApiMarketJsonResultOfListOfDiscussionDto => r.body)
    );
  }

  /** Path part for operation `tradesGetReadItemInfo()` */
  static readonly TradesGetReadItemInfoPath = '/market/api/v1/trades/{id}/chat/{itemId}/who';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesGetReadItemInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetReadItemInfo$Response(params: TradesGetReadItemInfo$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfDictionaryOfIntegerAndListOfReadItemInfoAltDto>> {
    return tradesGetReadItemInfo(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesGetReadItemInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetReadItemInfo(params: TradesGetReadItemInfo$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfDictionaryOfIntegerAndListOfReadItemInfoAltDto> {
    return this.tradesGetReadItemInfo$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfDictionaryOfIntegerAndListOfReadItemInfoAltDto>): ApiMarketJsonResultOfDictionaryOfIntegerAndListOfReadItemInfoAltDto => r.body)
    );
  }

  /** Path part for operation `tradesGetUnreadItems()` */
  static readonly TradesGetUnreadItemsPath = '/market/api/v1/trades/{id}/chat/{chatId}/unread/items';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesGetUnreadItems()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetUnreadItems$Response(params: TradesGetUnreadItems$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfDiscussionItemDto>> {
    return tradesGetUnreadItems(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesGetUnreadItems$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetUnreadItems(params: TradesGetUnreadItems$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfListOfDiscussionItemDto> {
    return this.tradesGetUnreadItems$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfListOfDiscussionItemDto>): ApiMarketJsonResultOfListOfDiscussionItemDto => r.body)
    );
  }

  /** Path part for operation `tradesGetUnreadItemsCount()` */
  static readonly TradesGetUnreadItemsCountPath = '/market/api/v1/trades/{id}/chat/{chatId}/unread/count';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesGetUnreadItemsCount()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetUnreadItemsCount$Response(params: TradesGetUnreadItemsCount$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>> {
    return tradesGetUnreadItemsCount(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesGetUnreadItemsCount$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetUnreadItemsCount(params: TradesGetUnreadItemsCount$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfIntegerAltDto> {
    return this.tradesGetUnreadItemsCount$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>): ApiMarketJsonResultOfIntegerAltDto => r.body)
    );
  }

  /** Path part for operation `tradesGetChatsUnreadItems()` */
  static readonly TradesGetChatsUnreadItemsPath = '/market/api/v1/trades/{id}/chat/unread';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesGetChatsUnreadItems()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetChatsUnreadItems$Response(params: TradesGetChatsUnreadItems$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfDictionaryOfIntegerAndIntegerAltDto>> {
    return tradesGetChatsUnreadItems(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesGetChatsUnreadItems$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetChatsUnreadItems(params: TradesGetChatsUnreadItems$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfDictionaryOfIntegerAndIntegerAltDto> {
    return this.tradesGetChatsUnreadItems$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfDictionaryOfIntegerAndIntegerAltDto>): ApiMarketJsonResultOfDictionaryOfIntegerAndIntegerAltDto => r.body)
    );
  }

  /** Path part for operation `tradesReadChatItemByIds()` */
  static readonly TradesReadChatItemByIdsPath = '/market/api/v1/trades/{id}/chat/{chatId}/read';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesReadChatItemByIds()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesReadChatItemByIds$Response(params: TradesReadChatItemByIds$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>> {
    return tradesReadChatItemByIds(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesReadChatItemByIds$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesReadChatItemByIds(params: TradesReadChatItemByIds$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfBooleanAltDto> {
    return this.tradesReadChatItemByIds$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>): ApiMarketJsonResultOfBooleanAltDto => r.body)
    );
  }

  /** Path part for operation `tradesReadAllItemsFromId()` */
  static readonly TradesReadAllItemsFromIdPath = '/market/api/v1/trades/{id}/chat/{chatId}/read/{itemId}/all';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesReadAllItemsFromId()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesReadAllItemsFromId$Response(params: TradesReadAllItemsFromId$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>> {
    return tradesReadAllItemsFromId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesReadAllItemsFromId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesReadAllItemsFromId(params: TradesReadAllItemsFromId$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfBooleanAltDto> {
    return this.tradesReadAllItemsFromId$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>): ApiMarketJsonResultOfBooleanAltDto => r.body)
    );
  }

  /** Path part for operation `tradesGetLastChatItems()` */
  static readonly TradesGetLastChatItemsPath = '/market/api/v1/trades/{id}/chat/{chatId}/{lastId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesGetLastChatItems()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetLastChatItems$Response(params: TradesGetLastChatItems$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfDiscussionDto>> {
    return tradesGetLastChatItems(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesGetLastChatItems$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetLastChatItems(params: TradesGetLastChatItems$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfListOfDiscussionDto> {
    return this.tradesGetLastChatItems$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfListOfDiscussionDto>): ApiMarketJsonResultOfListOfDiscussionDto => r.body)
    );
  }

  /** Path part for operation `tradesGetChats()` */
  static readonly TradesGetChatsPath = '/market/api/v1/trades/{id}/chats';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesGetChats()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetChats$Response(params: TradesGetChats$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfDictionaryOfIntegerAndStringAltDto>> {
    return tradesGetChats(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesGetChats$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetChats(params: TradesGetChats$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfDictionaryOfIntegerAndStringAltDto> {
    return this.tradesGetChats$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfDictionaryOfIntegerAndStringAltDto>): ApiMarketJsonResultOfDictionaryOfIntegerAndStringAltDto => r.body)
    );
  }

  /** Path part for operation `tradesCreateChat()` */
  static readonly TradesCreateChatPath = '/market/api/v1/trades/{id}/chats';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesCreateChat()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesCreateChat$Response(params: TradesCreateChat$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>> {
    return tradesCreateChat(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesCreateChat$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesCreateChat(params: TradesCreateChat$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfIntegerAltDto> {
    return this.tradesCreateChat$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>): ApiMarketJsonResultOfIntegerAltDto => r.body)
    );
  }

  /** Path part for operation `tradesGetCustomerChats()` */
  static readonly TradesGetCustomerChatsPath = '/market/api/v1/trades/{id}/customer-chats';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesGetCustomerChats()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetCustomerChats$Response(params: TradesGetCustomerChats$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfDiscussionTitleDto>> {
    return tradesGetCustomerChats(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesGetCustomerChats$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetCustomerChats(params: TradesGetCustomerChats$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfListOfDiscussionTitleDto> {
    return this.tradesGetCustomerChats$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfListOfDiscussionTitleDto>): ApiMarketJsonResultOfListOfDiscussionTitleDto => r.body)
    );
  }

  /** Path part for operation `tradesAddMessageToChat()` */
  static readonly TradesAddMessageToChatPath = '/market/api/v1/trades/{id}/chat/add/{chatOwnerId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesAddMessageToChat()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesAddMessageToChat$Response(params: TradesAddMessageToChat$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfLongAltDto>> {
    return tradesAddMessageToChat(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesAddMessageToChat$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesAddMessageToChat(params: TradesAddMessageToChat$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfLongAltDto> {
    return this.tradesAddMessageToChat$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfLongAltDto>): ApiMarketJsonResultOfLongAltDto => r.body)
    );
  }

  /** Path part for operation `tradesAddCustomerDealCommentSystemMessage()` */
  static readonly TradesAddCustomerDealCommentSystemMessagePath = '/market/api/v1/trades/{id}/chat/{chatOwnerId}/AddCustomerDealCommentSystemMessage';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesAddCustomerDealCommentSystemMessage()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesAddCustomerDealCommentSystemMessage$Response(params: TradesAddCustomerDealCommentSystemMessage$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfLongAltDto>> {
    return tradesAddCustomerDealCommentSystemMessage(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesAddCustomerDealCommentSystemMessage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesAddCustomerDealCommentSystemMessage(params: TradesAddCustomerDealCommentSystemMessage$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfLongAltDto> {
    return this.tradesAddCustomerDealCommentSystemMessage$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfLongAltDto>): ApiMarketJsonResultOfLongAltDto => r.body)
    );
  }

  /** Path part for operation `tradesAddMmoCreateDealSystemMessage()` */
  static readonly TradesAddMmoCreateDealSystemMessagePath = '/market/api/v1/trades/{tradeId}/chat/AddMmoCreateDealSystemMessage/{discussionOwnerId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesAddMmoCreateDealSystemMessage()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesAddMmoCreateDealSystemMessage$Response(params: TradesAddMmoCreateDealSystemMessage$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return tradesAddMmoCreateDealSystemMessage(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesAddMmoCreateDealSystemMessage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesAddMmoCreateDealSystemMessage(params: TradesAddMmoCreateDealSystemMessage$Params, context?: HttpContext): Observable<Blob> {
    return this.tradesAddMmoCreateDealSystemMessage$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `tradesAddMmoTradeFromDealNotSignedToFillingApplicationsSystemMessage()` */
  static readonly TradesAddMmoTradeFromDealNotSignedToFillingApplicationsSystemMessagePath = '/market/api/v1/trades/{tradeId}/chat/add/MmoTradeFromDealNotSignedToFillingApplicationsSystemMessage';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesAddMmoTradeFromDealNotSignedToFillingApplicationsSystemMessage()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesAddMmoTradeFromDealNotSignedToFillingApplicationsSystemMessage$Response(params: TradesAddMmoTradeFromDealNotSignedToFillingApplicationsSystemMessage$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return tradesAddMmoTradeFromDealNotSignedToFillingApplicationsSystemMessage(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesAddMmoTradeFromDealNotSignedToFillingApplicationsSystemMessage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesAddMmoTradeFromDealNotSignedToFillingApplicationsSystemMessage(params: TradesAddMmoTradeFromDealNotSignedToFillingApplicationsSystemMessage$Params, context?: HttpContext): Observable<Blob> {
    return this.tradesAddMmoTradeFromDealNotSignedToFillingApplicationsSystemMessage$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `tradesAddMmoParticipantMissedSigningTimeSystemMessage()` */
  static readonly TradesAddMmoParticipantMissedSigningTimeSystemMessagePath = '/market/api/v1/trades/{tradeId}/chat/MmoParticipantMissedSigningTimeSystemMessage/{discussionOwnerId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesAddMmoParticipantMissedSigningTimeSystemMessage()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesAddMmoParticipantMissedSigningTimeSystemMessage$Response(params: TradesAddMmoParticipantMissedSigningTimeSystemMessage$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return tradesAddMmoParticipantMissedSigningTimeSystemMessage(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesAddMmoParticipantMissedSigningTimeSystemMessage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesAddMmoParticipantMissedSigningTimeSystemMessage(params: TradesAddMmoParticipantMissedSigningTimeSystemMessage$Params, context?: HttpContext): Observable<Blob> {
    return this.tradesAddMmoParticipantMissedSigningTimeSystemMessage$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `tradesAddMmoTradeFromDealSigningToDealNotSignedChatSystemMessage()` */
  static readonly TradesAddMmoTradeFromDealSigningToDealNotSignedChatSystemMessagePath = '/market/api/v1/trades/{tradeId}/chat/MmoTradeFromDealSigningToDealNotSignedChatSystemMessage/{dealId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesAddMmoTradeFromDealSigningToDealNotSignedChatSystemMessage()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesAddMmoTradeFromDealSigningToDealNotSignedChatSystemMessage$Response(params: TradesAddMmoTradeFromDealSigningToDealNotSignedChatSystemMessage$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return tradesAddMmoTradeFromDealSigningToDealNotSignedChatSystemMessage(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesAddMmoTradeFromDealSigningToDealNotSignedChatSystemMessage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesAddMmoTradeFromDealSigningToDealNotSignedChatSystemMessage(params: TradesAddMmoTradeFromDealSigningToDealNotSignedChatSystemMessage$Params, context?: HttpContext): Observable<Blob> {
    return this.tradesAddMmoTradeFromDealSigningToDealNotSignedChatSystemMessage$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `tradesGetChatFiles()` */
  static readonly TradesGetChatFilesPath = '/market/api/v1/trades/chat/{chatId}/files';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesGetChatFiles()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetChatFiles$Response(params: TradesGetChatFiles$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ApiDiscussionFileDto>>> {
    return tradesGetChatFiles(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesGetChatFiles$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetChatFiles(params: TradesGetChatFiles$Params, context?: HttpContext): Observable<Array<ApiDiscussionFileDto>> {
    return this.tradesGetChatFiles$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ApiDiscussionFileDto>>): Array<ApiDiscussionFileDto> => r.body)
    );
  }

  /** Path part for operation `tradesAddDealSigningExpiredMessage()` */
  static readonly TradesAddDealSigningExpiredMessagePath = '/market/api/v1/trades/chat/add-deal-signing-expired-message';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesAddDealSigningExpiredMessage()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesAddDealSigningExpiredMessage$Response(params?: TradesAddDealSigningExpiredMessage$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return tradesAddDealSigningExpiredMessage(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesAddDealSigningExpiredMessage$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesAddDealSigningExpiredMessage(params?: TradesAddDealSigningExpiredMessage$Params, context?: HttpContext): Observable<Blob> {
    return this.tradesAddDealSigningExpiredMessage$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `tradesDisableSupplierMessages()` */
  static readonly TradesDisableSupplierMessagesPath = '/market/api/v1/trades/chat/{chatId}/disable-supplier-messages';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesDisableSupplierMessages()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesDisableSupplierMessages$Response(params: TradesDisableSupplierMessages$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return tradesDisableSupplierMessages(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesDisableSupplierMessages$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesDisableSupplierMessages(params: TradesDisableSupplierMessages$Params, context?: HttpContext): Observable<Blob> {
    return this.tradesDisableSupplierMessages$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `tradesEnableSupplierMessages()` */
  static readonly TradesEnableSupplierMessagesPath = '/market/api/v1/trades/chat/{chatId}/enable-supplier-messages';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesEnableSupplierMessages()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesEnableSupplierMessages$Response(params: TradesEnableSupplierMessages$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return tradesEnableSupplierMessages(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesEnableSupplierMessages$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesEnableSupplierMessages(params: TradesEnableSupplierMessages$Params, context?: HttpContext): Observable<Blob> {
    return this.tradesEnableSupplierMessages$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `tradesSpeedUpPriceRequest()` */
  static readonly TradesSpeedUpPriceRequestPath = '/market/api/v1/trades/speedup/{tradeId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesSpeedUpPriceRequest()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesSpeedUpPriceRequest$Response(params: TradesSpeedUpPriceRequest$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return tradesSpeedUpPriceRequest(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesSpeedUpPriceRequest$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesSpeedUpPriceRequest(params: TradesSpeedUpPriceRequest$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.tradesSpeedUpPriceRequest$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

  /** Path part for operation `tradesGetDealsList()` */
  static readonly TradesGetDealsListPath = '/market/api/v1/trades/deals';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesGetDealsList()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesGetDealsList$Response(params?: TradesGetDealsList$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketDealAltDto>> {
    return tradesGetDealsList(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesGetDealsList$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesGetDealsList(params?: TradesGetDealsList$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketDealAltDto> {
    return this.tradesGetDealsList$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketDealAltDto>): ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketDealAltDto => r.body)
    );
  }

  /** Path part for operation `tradesStarLightSearch()` */
  static readonly TradesStarLightSearchPath = '/market/api/v1/trades/star-light-search';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesStarLightSearch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesStarLightSearch$Response(params?: TradesStarLightSearch$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfStarLightSearchResultDto>> {
    return tradesStarLightSearch(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesStarLightSearch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesStarLightSearch(params?: TradesStarLightSearch$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfStarLightSearchResultDto> {
    return this.tradesStarLightSearch$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfStarLightSearchResultDto>): ApiMarketJsonResultOfStarLightSearchResultDto => r.body)
    );
  }

  /** Path part for operation `tradesPublicLightSearch()` */
  static readonly TradesPublicLightSearchPath = '/market/api/v1/trades/public-light-search';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesPublicLightSearch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesPublicLightSearch$Response(params: TradesPublicLightSearch$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketSearchResultDto>> {
    return tradesPublicLightSearch(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesPublicLightSearch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesPublicLightSearch(params: TradesPublicLightSearch$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketSearchResultDto> {
    return this.tradesPublicLightSearch$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketSearchResultDto>): ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketSearchResultDto => r.body)
    );
  }

  /** Path part for operation `tradesPublicSearch2()` */
  static readonly TradesPublicSearch2Path = '/market/api/v1/trades/publicsearch2';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesPublicSearch2()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesPublicSearch2$Response(params?: TradesPublicSearch2$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketSearchResultDto>> {
    return tradesPublicSearch2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesPublicSearch2$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesPublicSearch2(params?: TradesPublicSearch2$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketSearchResultDto> {
    return this.tradesPublicSearch2$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketSearchResultDto>): ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketSearchResultDto => r.body)
    );
  }

  /** Path part for operation `tradesExternalSearch()` */
  static readonly TradesExternalSearchPath = '/market/api/v1/trades/external/search';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesExternalSearch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesExternalSearch$Response(params?: TradesExternalSearch$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketSearchResultDto>> {
    return tradesExternalSearch(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesExternalSearch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesExternalSearch(params?: TradesExternalSearch$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketSearchResultDto> {
    return this.tradesExternalSearch$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketSearchResultDto>): ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketSearchResultDto => r.body)
    );
  }

  /** Path part for operation `tradesGetTradeRecommendations()` */
  static readonly TradesGetTradeRecommendationsPath = '/market/api/v1/trades/recommendations';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesGetTradeRecommendations()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesGetTradeRecommendations$Response(params?: TradesGetTradeRecommendations$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfTradeRecommendationDto>> {
    return tradesGetTradeRecommendations(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesGetTradeRecommendations$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesGetTradeRecommendations(params?: TradesGetTradeRecommendations$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfMarketPaginationResultOfListOfTradeRecommendationDto> {
    return this.tradesGetTradeRecommendations$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfTradeRecommendationDto>): ApiMarketJsonResultOfMarketPaginationResultOfListOfTradeRecommendationDto => r.body)
    );
  }

  /** Path part for operation `tradesSuggest()` */
  static readonly TradesSuggestPath = '/market/api/v1/trades/suggest';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesSuggest()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesSuggest$Response(params: TradesSuggest$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfStarSuggestObjectOfAltDto>> {
    return tradesSuggest(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesSuggest$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesSuggest(params: TradesSuggest$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfStarSuggestObjectOfAltDto> {
    return this.tradesSuggest$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfStarSuggestObjectOfAltDto>): ApiMarketJsonResultOfStarSuggestObjectOfAltDto => r.body)
    );
  }

  /** Path part for operation `tradesSearch()` */
  static readonly TradesSearchPath = '/market/api/v1/trades/search';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesSearch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesSearch$Response(params?: TradesSearch$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfStarSearchObjAltDto>> {
    return tradesSearch(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesSearch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesSearch(params?: TradesSearch$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfStarSearchObjAltDto> {
    return this.tradesSearch$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfStarSearchObjAltDto>): ApiMarketJsonResultOfStarSearchObjAltDto => r.body)
    );
  }

  /** Path part for operation `tradesPublish2()` */
  static readonly TradesPublish2Path = '/market/api/v1/trades';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesPublish2()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesPublish2$Response(params?: TradesPublish2$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfTradePublishResultAltDto>> {
    return tradesPublish2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesPublish2$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesPublish2(params?: TradesPublish2$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfTradePublishResultAltDto> {
    return this.tradesPublish2$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfTradePublishResultAltDto>): ApiMarketJsonResultOfTradePublishResultAltDto => r.body)
    );
  }

  /** Path part for operation `tradesPublishFromEis()` */
  static readonly TradesPublishFromEisPath = '/market/api/v1/trades/eis/publish';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesPublishFromEis()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesPublishFromEis$Response(params?: TradesPublishFromEis$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfTradePublishResultAltDto>> {
    return tradesPublishFromEis(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesPublishFromEis$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesPublishFromEis(params?: TradesPublishFromEis$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfTradePublishResultAltDto> {
    return this.tradesPublishFromEis$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfTradePublishResultAltDto>): ApiMarketJsonResultOfTradePublishResultAltDto => r.body)
    );
  }

  /** Path part for operation `tradesSaveAsDraft()` */
  static readonly TradesSaveAsDraftPath = '/market/api/v1/trades/draft';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesSaveAsDraft()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesSaveAsDraft$Response(params?: TradesSaveAsDraft$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfTradePublishResultAltDto>> {
    return tradesSaveAsDraft(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesSaveAsDraft$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesSaveAsDraft(params?: TradesSaveAsDraft$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfTradePublishResultAltDto> {
    return this.tradesSaveAsDraft$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfTradePublishResultAltDto>): ApiMarketJsonResultOfTradePublishResultAltDto => r.body)
    );
  }

  /** Path part for operation `tradesPublishById()` */
  static readonly TradesPublishByIdPath = '/market/api/v1/trades/publish/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesPublishById()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesPublishById$Response(params: TradesPublishById$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfTradePublishResultAltDto>> {
    return tradesPublishById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesPublishById$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesPublishById(params: TradesPublishById$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfTradePublishResultAltDto> {
    return this.tradesPublishById$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfTradePublishResultAltDto>): ApiMarketJsonResultOfTradePublishResultAltDto => r.body)
    );
  }

  /** Path part for operation `tradesCreateTradeFromPlanLots()` */
  static readonly TradesCreateTradeFromPlanLotsPath = '/market/api/v1/trades/create-from-plan';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesCreateTradeFromPlanLots()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesCreateTradeFromPlanLots$Response(params?: TradesCreateTradeFromPlanLots$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>> {
    return tradesCreateTradeFromPlanLots(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesCreateTradeFromPlanLots$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesCreateTradeFromPlanLots(params?: TradesCreateTradeFromPlanLots$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfIntegerAltDto> {
    return this.tradesCreateTradeFromPlanLots$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>): ApiMarketJsonResultOfIntegerAltDto => r.body)
    );
  }

  /** Path part for operation `tradesPrepareTradeFromPlanLots()` */
  static readonly TradesPrepareTradeFromPlanLotsPath = '/market/api/v1/trades/prepare-from-plan/{marketPlanLotId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesPrepareTradeFromPlanLots()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesPrepareTradeFromPlanLots$Response(params: TradesPrepareTradeFromPlanLots$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfTradeDto>> {
    return tradesPrepareTradeFromPlanLots(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesPrepareTradeFromPlanLots$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesPrepareTradeFromPlanLots(params: TradesPrepareTradeFromPlanLots$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfTradeDto> {
    return this.tradesPrepareTradeFromPlanLots$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfTradeDto>): ApiMarketJsonResultOfTradeDto => r.body)
    );
  }

  /** Path part for operation `tradesCancelTrade()` */
  static readonly TradesCancelTradePath = '/market/api/v1/trades/cancel';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesCancelTrade()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesCancelTrade$Response(params?: TradesCancelTrade$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>> {
    return tradesCancelTrade(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesCancelTrade$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesCancelTrade(params?: TradesCancelTrade$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfBooleanAltDto> {
    return this.tradesCancelTrade$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>): ApiMarketJsonResultOfBooleanAltDto => r.body)
    );
  }

  /** Path part for operation `tradesCancelTradeExternal()` */
  static readonly TradesCancelTradeExternalPath = '/market/api/v1/trades/cancel/external';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesCancelTradeExternal()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesCancelTradeExternal$Response(params?: TradesCancelTradeExternal$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>> {
    return tradesCancelTradeExternal(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesCancelTradeExternal$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesCancelTradeExternal(params?: TradesCancelTradeExternal$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfBooleanAltDto> {
    return this.tradesCancelTradeExternal$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>): ApiMarketJsonResultOfBooleanAltDto => r.body)
    );
  }

  /** Path part for operation `tradesGetTradeForView()` */
  static readonly TradesGetTradeForViewPath = '/market/api/v1/trades/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesGetTradeForView()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetTradeForView$Response(params: TradesGetTradeForView$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketTradeViewDto>> {
    return tradesGetTradeForView(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesGetTradeForView$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetTradeForView(params: TradesGetTradeForView$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfMarketTradeViewDto> {
    return this.tradesGetTradeForView$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfMarketTradeViewDto>): ApiMarketJsonResultOfMarketTradeViewDto => r.body)
    );
  }

  /** Path part for operation `tradesGetTradeForViewByLot()` */
  static readonly TradesGetTradeForViewByLotPath = '/market/api/v1/trades/byLotId/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesGetTradeForViewByLot()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetTradeForViewByLot$Response(params: TradesGetTradeForViewByLot$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketTradeViewDto>> {
    return tradesGetTradeForViewByLot(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesGetTradeForViewByLot$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetTradeForViewByLot(params: TradesGetTradeForViewByLot$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfMarketTradeViewDto> {
    return this.tradesGetTradeForViewByLot$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfMarketTradeViewDto>): ApiMarketJsonResultOfMarketTradeViewDto => r.body)
    );
  }

  /** Path part for operation `tradesRegisterForTradeLot()` */
  static readonly TradesRegisterForTradeLotPath = '/market/api/v1/trades/registerForTradeLot/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesRegisterForTradeLot()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesRegisterForTradeLot$Response(params: TradesRegisterForTradeLot$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return tradesRegisterForTradeLot(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesRegisterForTradeLot$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesRegisterForTradeLot(params: TradesRegisterForTradeLot$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.tradesRegisterForTradeLot$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

  /** Path part for operation `tradesGetTradeForEdit()` */
  static readonly TradesGetTradeForEditPath = '/market/api/v1/trades/{id}/full';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesGetTradeForEdit()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetTradeForEdit$Response(params: TradesGetTradeForEdit$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfTradeDto>> {
    return tradesGetTradeForEdit(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesGetTradeForEdit$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetTradeForEdit(params: TradesGetTradeForEdit$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfTradeDto> {
    return this.tradesGetTradeForEdit$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfTradeDto>): ApiMarketJsonResultOfTradeDto => r.body)
    );
  }

  /** Path part for operation `tradesGetTradeCopy()` */
  static readonly TradesGetTradeCopyPath = '/market/api/v1/trades/{id}/copy';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesGetTradeCopy()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetTradeCopy$Response(params: TradesGetTradeCopy$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfTradePublishResultAltDto>> {
    return tradesGetTradeCopy(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesGetTradeCopy$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetTradeCopy(params: TradesGetTradeCopy$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfTradePublishResultAltDto> {
    return this.tradesGetTradeCopy$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfTradePublishResultAltDto>): ApiMarketJsonResultOfTradePublishResultAltDto => r.body)
    );
  }

  /** Path part for operation `tradesEditPublished()` */
  static readonly TradesEditPublishedPath = '/market/api/v1/trades/editpublished';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesEditPublished()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesEditPublished$Response(params?: TradesEditPublished$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>> {
    return tradesEditPublished(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesEditPublished$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesEditPublished(params?: TradesEditPublished$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfIntegerAltDto> {
    return this.tradesEditPublished$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>): ApiMarketJsonResultOfIntegerAltDto => r.body)
    );
  }

  /** Path part for operation `tradesEditPublishedFromEis()` */
  static readonly TradesEditPublishedFromEisPath = '/market/api/v1/trades/eis/editpublished';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesEditPublishedFromEis()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesEditPublishedFromEis$Response(params?: TradesEditPublishedFromEis$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>> {
    return tradesEditPublishedFromEis(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesEditPublishedFromEis$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesEditPublishedFromEis(params?: TradesEditPublishedFromEis$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfIntegerAltDto> {
    return this.tradesEditPublishedFromEis$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>): ApiMarketJsonResultOfIntegerAltDto => r.body)
    );
  }

  /** Path part for operation `tradesGetTenderTenant()` */
  static readonly TradesGetTenderTenantPath = '/market/api/v1/trades/{id}/tenants';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesGetTenderTenant()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetTenderTenant$Response(params: TradesGetTenderTenant$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfIntegerAltDto>> {
    return tradesGetTenderTenant(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesGetTenderTenant$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetTenderTenant(params: TradesGetTenderTenant$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfListOfIntegerAltDto> {
    return this.tradesGetTenderTenant$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfListOfIntegerAltDto>): ApiMarketJsonResultOfListOfIntegerAltDto => r.body)
    );
  }

  /** Path part for operation `tradesReturnTradeToFillingAppState()` */
  static readonly TradesReturnTradeToFillingAppStatePath = '/market/api/v1/trades/tofillingappstate';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesReturnTradeToFillingAppState()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesReturnTradeToFillingAppState$Response(params?: TradesReturnTradeToFillingAppState$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return tradesReturnTradeToFillingAppState(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesReturnTradeToFillingAppState$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesReturnTradeToFillingAppState(params?: TradesReturnTradeToFillingAppState$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.tradesReturnTradeToFillingAppState$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

  /** Path part for operation `tradesCreatePreliminaryOffersForPrivateTrade2()` */
  static readonly TradesCreatePreliminaryOffersForPrivateTrade2Path = '/market/api/v1/trades/preliminary-offer/tofillingappstate';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesCreatePreliminaryOffersForPrivateTrade2()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesCreatePreliminaryOffersForPrivateTrade2$Response(params?: TradesCreatePreliminaryOffersForPrivateTrade2$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return tradesCreatePreliminaryOffersForPrivateTrade2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesCreatePreliminaryOffersForPrivateTrade2$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesCreatePreliminaryOffersForPrivateTrade2(params?: TradesCreatePreliminaryOffersForPrivateTrade2$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.tradesCreatePreliminaryOffersForPrivateTrade2$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

  /** Path part for operation `tradesCloseTradeWithoutDeal()` */
  static readonly TradesCloseTradeWithoutDealPath = '/market/api/v1/trades/{id}/close';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesCloseTradeWithoutDeal()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesCloseTradeWithoutDeal$Response(params: TradesCloseTradeWithoutDeal$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return tradesCloseTradeWithoutDeal(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesCloseTradeWithoutDeal$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesCloseTradeWithoutDeal(params: TradesCloseTradeWithoutDeal$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.tradesCloseTradeWithoutDeal$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

  /** Path part for operation `tradesGetTradeCharacteristics()` */
  static readonly TradesGetTradeCharacteristicsPath = '/market/api/v1/trades/{id}/characteristics';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesGetTradeCharacteristics()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetTradeCharacteristics$Response(params: TradesGetTradeCharacteristics$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfCharacteristicDto>> {
    return tradesGetTradeCharacteristics(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesGetTradeCharacteristics$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetTradeCharacteristics(params: TradesGetTradeCharacteristics$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfListOfCharacteristicDto> {
    return this.tradesGetTradeCharacteristics$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfListOfCharacteristicDto>): ApiMarketJsonResultOfListOfCharacteristicDto => r.body)
    );
  }

  /** Path part for operation `tradesGetCharacteristicsByTradeIdAsFile()` */
  static readonly TradesGetCharacteristicsByTradeIdAsFilePath = '/market/api/v1/trades/{id}/characteristics/file';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesGetCharacteristicsByTradeIdAsFile()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetCharacteristicsByTradeIdAsFile$Response(params: TradesGetCharacteristicsByTradeIdAsFile$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return tradesGetCharacteristicsByTradeIdAsFile(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesGetCharacteristicsByTradeIdAsFile$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetCharacteristicsByTradeIdAsFile(params: TradesGetCharacteristicsByTradeIdAsFile$Params, context?: HttpContext): Observable<Blob> {
    return this.tradesGetCharacteristicsByTradeIdAsFile$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `tradesImportProductsFromExcelWithGuid()` */
  static readonly TradesImportProductsFromExcelWithGuidPath = '/market/api/v1/trades/import-products';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesImportProductsFromExcelWithGuid()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesImportProductsFromExcelWithGuid$Response(params?: TradesImportProductsFromExcelWithGuid$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfImportExcelProductResponseAltDto>> {
    return tradesImportProductsFromExcelWithGuid(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesImportProductsFromExcelWithGuid$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesImportProductsFromExcelWithGuid(params?: TradesImportProductsFromExcelWithGuid$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfImportExcelProductResponseAltDto> {
    return this.tradesImportProductsFromExcelWithGuid$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfImportExcelProductResponseAltDto>): ApiMarketJsonResultOfImportExcelProductResponseAltDto => r.body)
    );
  }

  /** Path part for operation `tradesGetImportTemplateGuidByTenant()` */
  static readonly TradesGetImportTemplateGuidByTenantPath = '/market/api/v1/trades/import-template-guid';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesGetImportTemplateGuidByTenant()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetImportTemplateGuidByTenant$Response(params?: TradesGetImportTemplateGuidByTenant$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfGuidAltDto>> {
    return tradesGetImportTemplateGuidByTenant(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesGetImportTemplateGuidByTenant$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetImportTemplateGuidByTenant(params?: TradesGetImportTemplateGuidByTenant$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfGuidAltDto> {
    return this.tradesGetImportTemplateGuidByTenant$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfGuidAltDto>): ApiMarketJsonResultOfGuidAltDto => r.body)
    );
  }

  /** Path part for operation `tradesDeleteTradeDraft()` */
  static readonly TradesDeleteTradeDraftPath = '/market/api/v1/trades/deleteDraft/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesDeleteTradeDraft()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesDeleteTradeDraft$Response(params: TradesDeleteTradeDraft$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>> {
    return tradesDeleteTradeDraft(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesDeleteTradeDraft$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesDeleteTradeDraft(params: TradesDeleteTradeDraft$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfBooleanAltDto> {
    return this.tradesDeleteTradeDraft$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>): ApiMarketJsonResultOfBooleanAltDto => r.body)
    );
  }

  /** Path part for operation `tradesGenerateTradeProtocol()` */
  static readonly TradesGenerateTradeProtocolPath = '/market/api/v1/trades/tradeProtocol';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesGenerateTradeProtocol()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesGenerateTradeProtocol$Response(params?: TradesGenerateTradeProtocol$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfGuidAltDto>> {
    return tradesGenerateTradeProtocol(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesGenerateTradeProtocol$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesGenerateTradeProtocol(params?: TradesGenerateTradeProtocol$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfGuidAltDto> {
    return this.tradesGenerateTradeProtocol$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfGuidAltDto>): ApiMarketJsonResultOfGuidAltDto => r.body)
    );
  }

  /** Path part for operation `tradesSaveSupplierFromMmo()` */
  static readonly TradesSaveSupplierFromMmoPath = '/market/api/v1/trades/{tradeId}/save-supplier-from-mmo/{sessionGuid}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesSaveSupplierFromMmo()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesSaveSupplierFromMmo$Response(params: TradesSaveSupplierFromMmo$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return tradesSaveSupplierFromMmo(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesSaveSupplierFromMmo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesSaveSupplierFromMmo(params: TradesSaveSupplierFromMmo$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.tradesSaveSupplierFromMmo$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

  /** Path part for operation `tradesGetTenantIdByTrade()` */
  static readonly TradesGetTenantIdByTradePath = '/market/api/v1/trades/GetTenantIdByTrade/{tradeId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesGetTenantIdByTrade()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetTenantIdByTrade$Response(params: TradesGetTenantIdByTrade$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>> {
    return tradesGetTenantIdByTrade(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesGetTenantIdByTrade$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetTenantIdByTrade(params: TradesGetTenantIdByTrade$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfIntegerAltDto> {
    return this.tradesGetTenantIdByTrade$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>): ApiMarketJsonResultOfIntegerAltDto => r.body)
    );
  }

  /** Path part for operation `tradesSendTradeToEis()` */
  static readonly TradesSendTradeToEisPath = '/market/api/v1/trades/send-trade-to-eis';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesSendTradeToEis()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesSendTradeToEis$Response(params?: TradesSendTradeToEis$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfEisIntegrationResultDto>> {
    return tradesSendTradeToEis(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesSendTradeToEis$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesSendTradeToEis(params?: TradesSendTradeToEis$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfEisIntegrationResultDto> {
    return this.tradesSendTradeToEis$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfEisIntegrationResultDto>): ApiMarketJsonResultOfEisIntegrationResultDto => r.body)
    );
  }

  /** Path part for operation `tradesSendTradeCancelToEis()` */
  static readonly TradesSendTradeCancelToEisPath = '/market/api/v1/trades/sendTradeCancelToEis/{tradeId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesSendTradeCancelToEis()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesSendTradeCancelToEis$Response(params: TradesSendTradeCancelToEis$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfEisIntegrationResultDto>> {
    return tradesSendTradeCancelToEis(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesSendTradeCancelToEis$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesSendTradeCancelToEis(params: TradesSendTradeCancelToEis$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfEisIntegrationResultDto> {
    return this.tradesSendTradeCancelToEis$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfEisIntegrationResultDto>): ApiMarketJsonResultOfEisIntegrationResultDto => r.body)
    );
  }

  /** Path part for operation `tradesSendProtocolToEis()` */
  static readonly TradesSendProtocolToEisPath = '/market/api/v1/trades/send-protocol-to-eis';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesSendProtocolToEis()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesSendProtocolToEis$Response(params?: TradesSendProtocolToEis$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfEisIntegrationResultDto>> {
    return tradesSendProtocolToEis(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesSendProtocolToEis$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesSendProtocolToEis(params?: TradesSendProtocolToEis$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfEisIntegrationResultDto> {
    return this.tradesSendProtocolToEis$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfEisIntegrationResultDto>): ApiMarketJsonResultOfEisIntegrationResultDto => r.body)
    );
  }

  /** Path part for operation `tradesCreateCustomerComissionProtocol()` */
  static readonly TradesCreateCustomerComissionProtocolPath = '/market/api/v1/trades/{id}/customer-comission-protocol/create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesCreateCustomerComissionProtocol()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesCreateCustomerComissionProtocol$Response(params: TradesCreateCustomerComissionProtocol$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return tradesCreateCustomerComissionProtocol(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesCreateCustomerComissionProtocol$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesCreateCustomerComissionProtocol(params: TradesCreateCustomerComissionProtocol$Params, context?: HttpContext): Observable<Blob> {
    return this.tradesCreateCustomerComissionProtocol$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `tradesPublishConsiderationProtocol()` */
  static readonly TradesPublishConsiderationProtocolPath = '/market/api/v1/trades/{id}/customer-comission-protocol/publish';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesPublishConsiderationProtocol()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesPublishConsiderationProtocol$Response(params: TradesPublishConsiderationProtocol$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return tradesPublishConsiderationProtocol(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesPublishConsiderationProtocol$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesPublishConsiderationProtocol(params: TradesPublishConsiderationProtocol$Params, context?: HttpContext): Observable<Blob> {
    return this.tradesPublishConsiderationProtocol$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `tradesNoEisPublishConsiderationProtocol()` */
  static readonly TradesNoEisPublishConsiderationProtocolPath = '/market/api/v1/trades/{id}/customer-comission-protocol/no-eis-publish';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesNoEisPublishConsiderationProtocol()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesNoEisPublishConsiderationProtocol$Response(params: TradesNoEisPublishConsiderationProtocol$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return tradesNoEisPublishConsiderationProtocol(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesNoEisPublishConsiderationProtocol$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesNoEisPublishConsiderationProtocol(params: TradesNoEisPublishConsiderationProtocol$Params, context?: HttpContext): Observable<Blob> {
    return this.tradesNoEisPublishConsiderationProtocol$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `tradesGetConsiderationProtocol()` */
  static readonly TradesGetConsiderationProtocolPath = '/market/api/v1/trades/{id}/customer-comission-protocol';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesGetConsiderationProtocol()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetConsiderationProtocol$Response(params: TradesGetConsiderationProtocol$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfCustomerComissionProtocolWithDocsDto>> {
    return tradesGetConsiderationProtocol(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesGetConsiderationProtocol$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetConsiderationProtocol(params: TradesGetConsiderationProtocol$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfCustomerComissionProtocolWithDocsDto> {
    return this.tradesGetConsiderationProtocol$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfCustomerComissionProtocolWithDocsDto>): ApiMarketJsonResultOfCustomerComissionProtocolWithDocsDto => r.body)
    );
  }

  /** Path part for operation `tradesGetCustomerSignerList()` */
  static readonly TradesGetCustomerSignerListPath = '/market/api/v1/trades/deal-signer-list';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesGetCustomerSignerList()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetCustomerSignerList$Response(params?: TradesGetCustomerSignerList$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfMarketTradePersonAltDto>> {
    return tradesGetCustomerSignerList(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesGetCustomerSignerList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetCustomerSignerList(params?: TradesGetCustomerSignerList$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfListOfMarketTradePersonAltDto> {
    return this.tradesGetCustomerSignerList$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfListOfMarketTradePersonAltDto>): ApiMarketJsonResultOfListOfMarketTradePersonAltDto => r.body)
    );
  }

  /** Path part for operation `tradesSaveContractSigner()` */
  static readonly TradesSaveContractSignerPath = '/market/api/v1/trades/save-deal-signer/{tradeId}/{userId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesSaveContractSigner()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesSaveContractSigner$Response(params: TradesSaveContractSigner$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return tradesSaveContractSigner(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesSaveContractSigner$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesSaveContractSigner(params: TradesSaveContractSigner$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.tradesSaveContractSigner$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

  /** Path part for operation `tradesDeleteDealSigner()` */
  static readonly TradesDeleteDealSignerPath = '/market/api/v1/trades/delete-deal-signer/{tradeId}/{userId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesDeleteDealSigner()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesDeleteDealSigner$Response(params: TradesDeleteDealSigner$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return tradesDeleteDealSigner(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesDeleteDealSigner$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesDeleteDealSigner(params: TradesDeleteDealSigner$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.tradesDeleteDealSigner$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

  /** Path part for operation `tradesGetCompetitiveListReport()` */
  static readonly TradesGetCompetitiveListReportPath = '/market/api/v1/trades/{tradeId}/competitive-list/excel';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesGetCompetitiveListReport()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetCompetitiveListReport$Response(params: TradesGetCompetitiveListReport$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return tradesGetCompetitiveListReport(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesGetCompetitiveListReport$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetCompetitiveListReport(params: TradesGetCompetitiveListReport$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.tradesGetCompetitiveListReport$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

  /** Path part for operation `tradesGetApplicationsArchive()` */
  static readonly TradesGetApplicationsArchivePath = '/market/api/v1/trades/{tradeId}/applications/arhive';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesGetApplicationsArchive()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetApplicationsArchive$Response(params: TradesGetApplicationsArchive$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return tradesGetApplicationsArchive(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesGetApplicationsArchive$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetApplicationsArchive(params: TradesGetApplicationsArchive$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.tradesGetApplicationsArchive$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

  /** Path part for operation `tradesTurnSingleSupplierToPriceReuest()` */
  static readonly TradesTurnSingleSupplierToPriceReuestPath = '/market/api/v1/trades/{tradeId}/to-price-request';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesTurnSingleSupplierToPriceReuest()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesTurnSingleSupplierToPriceReuest$Response(params: TradesTurnSingleSupplierToPriceReuest$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return tradesTurnSingleSupplierToPriceReuest(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesTurnSingleSupplierToPriceReuest$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesTurnSingleSupplierToPriceReuest(params: TradesTurnSingleSupplierToPriceReuest$Params, context?: HttpContext): Observable<Blob> {
    return this.tradesTurnSingleSupplierToPriceReuest$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `tradesValidateWorkgroupForSigner()` */
  static readonly TradesValidateWorkgroupForSignerPath = '/market/api/v1/trades/validate-work-groups-signer';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesValidateWorkgroupForSigner()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesValidateWorkgroupForSigner$Response(params?: TradesValidateWorkgroupForSigner$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>> {
    return tradesValidateWorkgroupForSigner(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesValidateWorkgroupForSigner$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesValidateWorkgroupForSigner(params?: TradesValidateWorkgroupForSigner$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfBooleanAltDto> {
    return this.tradesValidateWorkgroupForSigner$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>): ApiMarketJsonResultOfBooleanAltDto => r.body)
    );
  }

  /** Path part for operation `tradesGetFiles()` */
  static readonly TradesGetFilesPath = '/market/api/v1/trades/{tradeId}/files';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesGetFiles()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetFiles$Response(params: TradesGetFiles$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfAllTradeDocumentsDto>> {
    return tradesGetFiles(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesGetFiles$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetFiles(params: TradesGetFiles$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfAllTradeDocumentsDto> {
    return this.tradesGetFiles$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfAllTradeDocumentsDto>): ApiMarketJsonResultOfAllTradeDocumentsDto => r.body)
    );
  }

  /** Path part for operation `tradesReturnTradeToReviewApplicaitons()` */
  static readonly TradesReturnTradeToReviewApplicaitonsPath = '/market/api/v1/trades/{tradeId}/review-applications/return';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesReturnTradeToReviewApplicaitons()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesReturnTradeToReviewApplicaitons$Response(params: TradesReturnTradeToReviewApplicaitons$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return tradesReturnTradeToReviewApplicaitons(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesReturnTradeToReviewApplicaitons$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesReturnTradeToReviewApplicaitons(params: TradesReturnTradeToReviewApplicaitons$Params, context?: HttpContext): Observable<Blob> {
    return this.tradesReturnTradeToReviewApplicaitons$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `tradesGetCreateApplicationFormTemplateSettings()` */
  static readonly TradesGetCreateApplicationFormTemplateSettingsPath = '/market/api/v1/trades/{tradeId}/application-template';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesGetCreateApplicationFormTemplateSettings()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetCreateApplicationFormTemplateSettings$Response(params: TradesGetCreateApplicationFormTemplateSettings$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfFormTemplateDto>> {
    return tradesGetCreateApplicationFormTemplateSettings(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesGetCreateApplicationFormTemplateSettings$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetCreateApplicationFormTemplateSettings(params: TradesGetCreateApplicationFormTemplateSettings$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfFormTemplateDto> {
    return this.tradesGetCreateApplicationFormTemplateSettings$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfFormTemplateDto>): ApiMarketJsonResultOfFormTemplateDto => r.body)
    );
  }

  /** Path part for operation `tradesGetTradeDiscussionHistory()` */
  static readonly TradesGetTradeDiscussionHistoryPath = '/market/api/v1/trades/{tradeId}/discussion-history';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesGetTradeDiscussionHistory()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetTradeDiscussionHistory$Response(params: TradesGetTradeDiscussionHistory$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfIDiscussionHistoryDto>> {
    return tradesGetTradeDiscussionHistory(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesGetTradeDiscussionHistory$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetTradeDiscussionHistory(params: TradesGetTradeDiscussionHistory$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfListOfIDiscussionHistoryDto> {
    return this.tradesGetTradeDiscussionHistory$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfListOfIDiscussionHistoryDto>): ApiMarketJsonResultOfListOfIDiscussionHistoryDto => r.body)
    );
  }

  /** Path part for operation `tradesGetSpecificationsByParticipants()` */
  static readonly TradesGetSpecificationsByParticipantsPath = '/market/api/v1/trades/{tradeId}/specifications-by-participants-archive';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesGetSpecificationsByParticipants()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetSpecificationsByParticipants$Response(params: TradesGetSpecificationsByParticipants$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return tradesGetSpecificationsByParticipants(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesGetSpecificationsByParticipants$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetSpecificationsByParticipants(params: TradesGetSpecificationsByParticipants$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.tradesGetSpecificationsByParticipants$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

  /** Path part for operation `tradesCalculatePriceReduction()` */
  static readonly TradesCalculatePriceReductionPath = '/market/api/v1/trades/price/reduction/calculate';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesCalculatePriceReduction()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesCalculatePriceReduction$Response(params?: TradesCalculatePriceReduction$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfPriceReductionResponseAltDto>> {
    return tradesCalculatePriceReduction(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesCalculatePriceReduction$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesCalculatePriceReduction(params?: TradesCalculatePriceReduction$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfPriceReductionResponseAltDto> {
    return this.tradesCalculatePriceReduction$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfPriceReductionResponseAltDto>): ApiMarketJsonResultOfPriceReductionResponseAltDto => r.body)
    );
  }

}
