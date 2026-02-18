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
import { ApiMarketJsonResultOfBoolean } from '../models/api-market-json-result-of-boolean';
import { ApiMarketJsonResultOfCardPaymentAvailability } from '../models/api-market-json-result-of-card-payment-availability';
import { ApiMarketJsonResultOfCustomerComissionProtocolWithDocsDto } from '../models/api-market-json-result-of-customer-comission-protocol-with-docs-dto';
import { ApiMarketJsonResultOfDictionaryOfIntegerAndInteger } from '../models/api-market-json-result-of-dictionary-of-integer-and-integer';
import { ApiMarketJsonResultOfDictionaryOfIntegerAndListOfReadItemInfo } from '../models/api-market-json-result-of-dictionary-of-integer-and-list-of-read-item-info';
import { ApiMarketJsonResultOfDictionaryOfIntegerAndString } from '../models/api-market-json-result-of-dictionary-of-integer-and-string';
import { ApiMarketJsonResultOfDiscussionItemDto } from '../models/api-market-json-result-of-discussion-item-dto';
import { ApiMarketJsonResultOfEisIntegrationResultDto } from '../models/api-market-json-result-of-eis-integration-result-dto';
import { ApiMarketJsonResultOfFormTemplateDto } from '../models/api-market-json-result-of-form-template-dto';
import { ApiMarketJsonResultOfGuid } from '../models/api-market-json-result-of-guid';
import { ApiMarketJsonResultOfIEnumerableOfInteger } from '../models/api-market-json-result-of-i-enumerable-of-integer';
import { ApiMarketJsonResultOfImportApplicationProductsResponse } from '../models/api-market-json-result-of-import-application-products-response';
import { ApiMarketJsonResultOfImportExcelProductResponse } from '../models/api-market-json-result-of-import-excel-product-response';
import { ApiMarketJsonResultOfInteger } from '../models/api-market-json-result-of-integer';
import { ApiMarketJsonResultOfListOfCharacteristicDto } from '../models/api-market-json-result-of-list-of-characteristic-dto';
import { ApiMarketJsonResultOfListOfDiscussionDto } from '../models/api-market-json-result-of-list-of-discussion-dto';
import { ApiMarketJsonResultOfListOfDiscussionItemDto } from '../models/api-market-json-result-of-list-of-discussion-item-dto';
import { ApiMarketJsonResultOfListOfDiscussionTitleDto } from '../models/api-market-json-result-of-list-of-discussion-title-dto';
import { ApiMarketJsonResultOfListOfIDiscussionHistoryDto } from '../models/api-market-json-result-of-list-of-i-discussion-history-dto';
import { ApiMarketJsonResultOfListOfInteger } from '../models/api-market-json-result-of-list-of-integer';
import { ApiMarketJsonResultOfListOfMarketApplicationDetail } from '../models/api-market-json-result-of-list-of-market-application-detail';
import { ApiMarketJsonResultOfListOfMarketTradePerson } from '../models/api-market-json-result-of-list-of-market-trade-person';
import { ApiMarketJsonResultOfLong } from '../models/api-market-json-result-of-long';
import { ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketDeal } from '../models/api-market-json-result-of-market-pagination-result-of-list-of-market-deal';
import { ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketSearchResultDto } from '../models/api-market-json-result-of-market-pagination-result-of-list-of-market-search-result-dto';
import { ApiMarketJsonResultOfMarketPaginationResultOfListOfTradeRecommendationDto } from '../models/api-market-json-result-of-market-pagination-result-of-list-of-trade-recommendation-dto';
import { ApiMarketJsonResultOfMarketTradeViewDto } from '../models/api-market-json-result-of-market-trade-view-dto';
import { ApiMarketJsonResultOfPriceReductionResponse } from '../models/api-market-json-result-of-price-reduction-response';
import { ApiMarketJsonResultOfPublishApplicationResult } from '../models/api-market-json-result-of-publish-application-result';
import { ApiMarketJsonResultOfStarLightSearchResultDto } from '../models/api-market-json-result-of-star-light-search-result-dto';
import { ApiMarketJsonResultOfStarSearchObj } from '../models/api-market-json-result-of-star-search-obj';
import { ApiMarketJsonResultOfStarSuggestObjectOf } from '../models/api-market-json-result-of-star-suggest-object-of';
import { ApiMarketJsonResultOfString } from '../models/api-market-json-result-of-string';
import { ApiMarketJsonResultOfTradeDto } from '../models/api-market-json-result-of-trade-dto';
import { ApiMarketJsonResultOfTradePublishResult } from '../models/api-market-json-result-of-trade-publish-result';
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
  static readonly TradesFinishReviewApplicationPath = '/bla-bla-vla/trades/{id}/applications/review/finish';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesFinishReviewApplication()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesFinishReviewApplication$Response(params: TradesFinishReviewApplication$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBoolean>> {
    return tradesFinishReviewApplication(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesFinishReviewApplication$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesFinishReviewApplication(params: TradesFinishReviewApplication$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfBoolean> {
    return this.tradesFinishReviewApplication$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfBoolean>): ApiMarketJsonResultOfBoolean => r.body)
    );
  }

  /** Path part for operation `tradesFinishReviewApplicationExternal()` */
  static readonly TradesFinishReviewApplicationExternalPath = '/bla-bla-vla/trades/{id}/applications/review/finish-external';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesFinishReviewApplicationExternal()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesFinishReviewApplicationExternal$Response(params: TradesFinishReviewApplicationExternal$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBoolean>> {
    return tradesFinishReviewApplicationExternal(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesFinishReviewApplicationExternal$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesFinishReviewApplicationExternal(params: TradesFinishReviewApplicationExternal$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfBoolean> {
    return this.tradesFinishReviewApplicationExternal$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfBoolean>): ApiMarketJsonResultOfBoolean => r.body)
    );
  }

  /** Path part for operation `tradesSaveApplicationDraft()` */
  static readonly TradesSaveApplicationDraftPath = '/bla-bla-vla/trades/applications/draft';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesSaveApplicationDraft()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesSaveApplicationDraft$Response(params?: TradesSaveApplicationDraft$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfInteger>> {
    return tradesSaveApplicationDraft(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesSaveApplicationDraft$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesSaveApplicationDraft(params?: TradesSaveApplicationDraft$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfInteger> {
    return this.tradesSaveApplicationDraft$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfInteger>): ApiMarketJsonResultOfInteger => r.body)
    );
  }

  /** Path part for operation `tradesPublish()` */
  static readonly TradesPublishPath = '/bla-bla-vla/trades/applications/publish';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesPublish()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesPublish$Response(params?: TradesPublish$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfPublishApplicationResult>> {
    return tradesPublish(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesPublish$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesPublish(params?: TradesPublish$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfPublishApplicationResult> {
    return this.tradesPublish$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfPublishApplicationResult>): ApiMarketJsonResultOfPublishApplicationResult => r.body)
    );
  }

  /** Path part for operation `tradesValidate()` */
  static readonly TradesValidatePath = '/bla-bla-vla/trades/applications/validate';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesValidate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesValidate$Response(params?: TradesValidate$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBoolean>> {
    return tradesValidate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesValidate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesValidate(params?: TradesValidate$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfBoolean> {
    return this.tradesValidate$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfBoolean>): ApiMarketJsonResultOfBoolean => r.body)
    );
  }

  /** Path part for operation `tradesRevokeApplication()` */
  static readonly TradesRevokeApplicationPath = '/bla-bla-vla/trades/{tradeId}/applications/{applicationId}/revoke';

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
  static readonly TradesRemoveApplicationDraftPath = '/bla-bla-vla/trades/applications/{applicationId}';

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
  static readonly TradesGetApplicationInfoPath = '/bla-bla-vla/trades/{id}/applications/{applicationId}';

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
  static readonly TradesGetApplicationsByTradeIdPath = '/bla-bla-vla/trades/{id}/applications';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesGetApplicationsByTradeId()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetApplicationsByTradeId$Response(params: TradesGetApplicationsByTradeId$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfMarketApplicationDetail>> {
    return tradesGetApplicationsByTradeId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesGetApplicationsByTradeId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetApplicationsByTradeId(params: TradesGetApplicationsByTradeId$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfListOfMarketApplicationDetail> {
    return this.tradesGetApplicationsByTradeId$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfListOfMarketApplicationDetail>): ApiMarketJsonResultOfListOfMarketApplicationDetail => r.body)
    );
  }

  /** Path part for operation `tradesRetradingUpdate()` */
  static readonly TradesRetradingUpdatePath = '/bla-bla-vla/trades/application/RetradingUpdate';

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
  static readonly TradesSaveManufacturerCountryCodesPath = '/bla-bla-vla/trades/application/SaveCountryCodes';

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
  static readonly TradesGetApplicationPriceShortInfoPath = '/bla-bla-vla/trades/application/{applicationId}/price';

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
  static readonly TradesGetApplicationDeclarationPath = '/bla-bla-vla/trades/application/declaration';

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
  static readonly TradesCreatePreliminaryOffersPath = '/bla-bla-vla/trades/{tradeId}/application/create-preliminary-offers';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesCreatePreliminaryOffers()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesCreatePreliminaryOffers$Response(params: TradesCreatePreliminaryOffers$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIEnumerableOfInteger>> {
    return tradesCreatePreliminaryOffers(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesCreatePreliminaryOffers$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesCreatePreliminaryOffers(params: TradesCreatePreliminaryOffers$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfIEnumerableOfInteger> {
    return this.tradesCreatePreliminaryOffers$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfIEnumerableOfInteger>): ApiMarketJsonResultOfIEnumerableOfInteger => r.body)
    );
  }

  /** Path part for operation `tradesCreatePreliminaryOffers2()` */
  static readonly TradesCreatePreliminaryOffers2Path = '/bla-bla-vla/trades/{tradeId}/application/create-preliminary-offers-by-operator';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesCreatePreliminaryOffers2()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesCreatePreliminaryOffers2$Response(params: TradesCreatePreliminaryOffers2$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfInteger>> {
    return tradesCreatePreliminaryOffers2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesCreatePreliminaryOffers2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesCreatePreliminaryOffers2(params: TradesCreatePreliminaryOffers2$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfInteger> {
    return this.tradesCreatePreliminaryOffers2$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfInteger>): ApiMarketJsonResultOfInteger => r.body)
    );
  }

  /** Path part for operation `tradesCreatePreliminaryOffersForPrivateTrade()` */
  static readonly TradesCreatePreliminaryOffersForPrivateTradePath = '/bla-bla-vla/trades/{tradeId}/application/create-preliminary-offers/private';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesCreatePreliminaryOffersForPrivateTrade()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesCreatePreliminaryOffersForPrivateTrade$Response(params: TradesCreatePreliminaryOffersForPrivateTrade$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIEnumerableOfInteger>> {
    return tradesCreatePreliminaryOffersForPrivateTrade(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesCreatePreliminaryOffersForPrivateTrade$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesCreatePreliminaryOffersForPrivateTrade(params: TradesCreatePreliminaryOffersForPrivateTrade$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfIEnumerableOfInteger> {
    return this.tradesCreatePreliminaryOffersForPrivateTrade$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfIEnumerableOfInteger>): ApiMarketJsonResultOfIEnumerableOfInteger => r.body)
    );
  }

  /** Path part for operation `tradesBlockFinance()` */
  static readonly TradesBlockFinancePath = '/bla-bla-vla/trades/applications/block-finance';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesBlockFinance()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesBlockFinance$Response(params?: TradesBlockFinance$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfPublishApplicationResult>> {
    return tradesBlockFinance(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesBlockFinance$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesBlockFinance(params?: TradesBlockFinance$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfPublishApplicationResult> {
    return this.tradesBlockFinance$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfPublishApplicationResult>): ApiMarketJsonResultOfPublishApplicationResult => r.body)
    );
  }

  /** Path part for operation `tradesGetArchiveDocuments()` */
  static readonly TradesGetArchiveDocumentsPath = '/bla-bla-vla/trades/application/{applicationId}/documents/archive';

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
  static readonly TradesGetApplicationProductsImportTemplatePath = '/bla-bla-vla/trades/{tradeId}/application/products/import/template';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesGetApplicationProductsImportTemplate()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetApplicationProductsImportTemplate$Response(params: TradesGetApplicationProductsImportTemplate$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfString>> {
    return tradesGetApplicationProductsImportTemplate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesGetApplicationProductsImportTemplate$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetApplicationProductsImportTemplate(params: TradesGetApplicationProductsImportTemplate$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfString> {
    return this.tradesGetApplicationProductsImportTemplate$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfString>): ApiMarketJsonResultOfString => r.body)
    );
  }

  /** Path part for operation `tradesGetApplicationProductsInfoFromImportTemplate()` */
  static readonly TradesGetApplicationProductsInfoFromImportTemplatePath = '/bla-bla-vla/trades/{tradeId}/application/products/import/{fileGuid}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesGetApplicationProductsInfoFromImportTemplate()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetApplicationProductsInfoFromImportTemplate$Response(params: TradesGetApplicationProductsInfoFromImportTemplate$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfImportApplicationProductsResponse>> {
    return tradesGetApplicationProductsInfoFromImportTemplate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesGetApplicationProductsInfoFromImportTemplate$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetApplicationProductsInfoFromImportTemplate(params: TradesGetApplicationProductsInfoFromImportTemplate$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfImportApplicationProductsResponse> {
    return this.tradesGetApplicationProductsInfoFromImportTemplate$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfImportApplicationProductsResponse>): ApiMarketJsonResultOfImportApplicationProductsResponse => r.body)
    );
  }

  /** Path part for operation `tradesGetCardPaymentAvailability()` */
  static readonly TradesGetCardPaymentAvailabilityPath = '/bla-bla-vla/trades/{tradeId}/application/card-payment/available';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesGetCardPaymentAvailability()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesGetCardPaymentAvailability$Response(params: TradesGetCardPaymentAvailability$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfCardPaymentAvailability>> {
    return tradesGetCardPaymentAvailability(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesGetCardPaymentAvailability$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesGetCardPaymentAvailability(params: TradesGetCardPaymentAvailability$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfCardPaymentAvailability> {
    return this.tradesGetCardPaymentAvailability$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfCardPaymentAvailability>): ApiMarketJsonResultOfCardPaymentAvailability => r.body)
    );
  }

  /** Path part for operation `tradesGetChat()` */
  static readonly TradesGetChatPath = '/bla-bla-vla/trades/{id}/chat/{chatId}';

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
  static readonly TradesAddChatMessagePath = '/bla-bla-vla/trades/{id}/chat/{chatId}';

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
  static readonly TradesGetAllChatItemsPath = '/bla-bla-vla/trades/{id}/chat/{chatId}/items';

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
  static readonly TradesGetChatItemsPath = '/bla-bla-vla/trades/{id}/chat/{chatId}/read/items';

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
  static readonly TradesGetReadItemInfoPath = '/bla-bla-vla/trades/{id}/chat/{itemId}/who';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesGetReadItemInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetReadItemInfo$Response(params: TradesGetReadItemInfo$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfDictionaryOfIntegerAndListOfReadItemInfo>> {
    return tradesGetReadItemInfo(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesGetReadItemInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetReadItemInfo(params: TradesGetReadItemInfo$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfDictionaryOfIntegerAndListOfReadItemInfo> {
    return this.tradesGetReadItemInfo$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfDictionaryOfIntegerAndListOfReadItemInfo>): ApiMarketJsonResultOfDictionaryOfIntegerAndListOfReadItemInfo => r.body)
    );
  }

  /** Path part for operation `tradesGetUnreadItems()` */
  static readonly TradesGetUnreadItemsPath = '/bla-bla-vla/trades/{id}/chat/{chatId}/unread/items';

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
  static readonly TradesGetUnreadItemsCountPath = '/bla-bla-vla/trades/{id}/chat/{chatId}/unread/count';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesGetUnreadItemsCount()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetUnreadItemsCount$Response(params: TradesGetUnreadItemsCount$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfInteger>> {
    return tradesGetUnreadItemsCount(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesGetUnreadItemsCount$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetUnreadItemsCount(params: TradesGetUnreadItemsCount$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfInteger> {
    return this.tradesGetUnreadItemsCount$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfInteger>): ApiMarketJsonResultOfInteger => r.body)
    );
  }

  /** Path part for operation `tradesGetChatsUnreadItems()` */
  static readonly TradesGetChatsUnreadItemsPath = '/bla-bla-vla/trades/{id}/chat/unread';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesGetChatsUnreadItems()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetChatsUnreadItems$Response(params: TradesGetChatsUnreadItems$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfDictionaryOfIntegerAndInteger>> {
    return tradesGetChatsUnreadItems(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesGetChatsUnreadItems$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetChatsUnreadItems(params: TradesGetChatsUnreadItems$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfDictionaryOfIntegerAndInteger> {
    return this.tradesGetChatsUnreadItems$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfDictionaryOfIntegerAndInteger>): ApiMarketJsonResultOfDictionaryOfIntegerAndInteger => r.body)
    );
  }

  /** Path part for operation `tradesReadChatItemByIds()` */
  static readonly TradesReadChatItemByIdsPath = '/bla-bla-vla/trades/{id}/chat/{chatId}/read';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesReadChatItemByIds()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesReadChatItemByIds$Response(params: TradesReadChatItemByIds$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBoolean>> {
    return tradesReadChatItemByIds(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesReadChatItemByIds$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesReadChatItemByIds(params: TradesReadChatItemByIds$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfBoolean> {
    return this.tradesReadChatItemByIds$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfBoolean>): ApiMarketJsonResultOfBoolean => r.body)
    );
  }

  /** Path part for operation `tradesReadAllItemsFromId()` */
  static readonly TradesReadAllItemsFromIdPath = '/bla-bla-vla/trades/{id}/chat/{chatId}/read/{itemId}/all';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesReadAllItemsFromId()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesReadAllItemsFromId$Response(params: TradesReadAllItemsFromId$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBoolean>> {
    return tradesReadAllItemsFromId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesReadAllItemsFromId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesReadAllItemsFromId(params: TradesReadAllItemsFromId$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfBoolean> {
    return this.tradesReadAllItemsFromId$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfBoolean>): ApiMarketJsonResultOfBoolean => r.body)
    );
  }

  /** Path part for operation `tradesGetLastChatItems()` */
  static readonly TradesGetLastChatItemsPath = '/bla-bla-vla/trades/{id}/chat/{chatId}/{lastId}';

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
  static readonly TradesGetChatsPath = '/bla-bla-vla/trades/{id}/chats';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesGetChats()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetChats$Response(params: TradesGetChats$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfDictionaryOfIntegerAndString>> {
    return tradesGetChats(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesGetChats$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetChats(params: TradesGetChats$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfDictionaryOfIntegerAndString> {
    return this.tradesGetChats$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfDictionaryOfIntegerAndString>): ApiMarketJsonResultOfDictionaryOfIntegerAndString => r.body)
    );
  }

  /** Path part for operation `tradesCreateChat()` */
  static readonly TradesCreateChatPath = '/bla-bla-vla/trades/{id}/chats';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesCreateChat()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesCreateChat$Response(params: TradesCreateChat$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfInteger>> {
    return tradesCreateChat(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesCreateChat$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesCreateChat(params: TradesCreateChat$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfInteger> {
    return this.tradesCreateChat$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfInteger>): ApiMarketJsonResultOfInteger => r.body)
    );
  }

  /** Path part for operation `tradesGetCustomerChats()` */
  static readonly TradesGetCustomerChatsPath = '/bla-bla-vla/trades/{id}/customer-chats';

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
  static readonly TradesAddMessageToChatPath = '/bla-bla-vla/trades/{id}/chat/add/{chatOwnerId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesAddMessageToChat()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesAddMessageToChat$Response(params: TradesAddMessageToChat$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfLong>> {
    return tradesAddMessageToChat(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesAddMessageToChat$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesAddMessageToChat(params: TradesAddMessageToChat$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfLong> {
    return this.tradesAddMessageToChat$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfLong>): ApiMarketJsonResultOfLong => r.body)
    );
  }

  /** Path part for operation `tradesAddCustomerDealCommentSystemMessage()` */
  static readonly TradesAddCustomerDealCommentSystemMessagePath = '/bla-bla-vla/trades/{id}/chat/{chatOwnerId}/AddCustomerDealCommentSystemMessage';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesAddCustomerDealCommentSystemMessage()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesAddCustomerDealCommentSystemMessage$Response(params: TradesAddCustomerDealCommentSystemMessage$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfLong>> {
    return tradesAddCustomerDealCommentSystemMessage(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesAddCustomerDealCommentSystemMessage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesAddCustomerDealCommentSystemMessage(params: TradesAddCustomerDealCommentSystemMessage$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfLong> {
    return this.tradesAddCustomerDealCommentSystemMessage$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfLong>): ApiMarketJsonResultOfLong => r.body)
    );
  }

  /** Path part for operation `tradesAddMmoCreateDealSystemMessage()` */
  static readonly TradesAddMmoCreateDealSystemMessagePath = '/bla-bla-vla/trades/{tradeId}/chat/AddMmoCreateDealSystemMessage/{discussionOwnerId}';

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
  static readonly TradesAddMmoTradeFromDealNotSignedToFillingApplicationsSystemMessagePath = '/bla-bla-vla/trades/{tradeId}/chat/add/MmoTradeFromDealNotSignedToFillingApplicationsSystemMessage';

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
  static readonly TradesAddMmoParticipantMissedSigningTimeSystemMessagePath = '/bla-bla-vla/trades/{tradeId}/chat/MmoParticipantMissedSigningTimeSystemMessage/{discussionOwnerId}';

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
  static readonly TradesAddMmoTradeFromDealSigningToDealNotSignedChatSystemMessagePath = '/bla-bla-vla/trades/{tradeId}/chat/MmoTradeFromDealSigningToDealNotSignedChatSystemMessage/{dealId}';

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
  static readonly TradesGetChatFilesPath = '/bla-bla-vla/trades/chat/{chatId}/files';

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
  static readonly TradesAddDealSigningExpiredMessagePath = '/bla-bla-vla/trades/chat/add-deal-signing-expired-message';

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
  static readonly TradesDisableSupplierMessagesPath = '/bla-bla-vla/trades/chat/{chatId}/disable-supplier-messages';

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
  static readonly TradesEnableSupplierMessagesPath = '/bla-bla-vla/trades/chat/{chatId}/enable-supplier-messages';

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
  static readonly TradesSpeedUpPriceRequestPath = '/bla-bla-vla/trades/speedup/{tradeId}';

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
  static readonly TradesGetDealsListPath = '/bla-bla-vla/trades/deals';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesGetDealsList()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesGetDealsList$Response(params?: TradesGetDealsList$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketDeal>> {
    return tradesGetDealsList(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesGetDealsList$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesGetDealsList(params?: TradesGetDealsList$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketDeal> {
    return this.tradesGetDealsList$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketDeal>): ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketDeal => r.body)
    );
  }

  /** Path part for operation `tradesStarLightSearch()` */
  static readonly TradesStarLightSearchPath = '/bla-bla-vla/trades/star-light-search';

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
  static readonly TradesPublicLightSearchPath = '/bla-bla-vla/trades/public-light-search';

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
  static readonly TradesPublicSearch2Path = '/bla-bla-vla/trades/publicsearch2';

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
  static readonly TradesExternalSearchPath = '/bla-bla-vla/trades/external/search';

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
  static readonly TradesGetTradeRecommendationsPath = '/bla-bla-vla/trades/recommendations';

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
  static readonly TradesSuggestPath = '/bla-bla-vla/trades/suggest';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesSuggest()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesSuggest$Response(params: TradesSuggest$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfStarSuggestObjectOf>> {
    return tradesSuggest(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesSuggest$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesSuggest(params: TradesSuggest$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfStarSuggestObjectOf> {
    return this.tradesSuggest$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfStarSuggestObjectOf>): ApiMarketJsonResultOfStarSuggestObjectOf => r.body)
    );
  }

  /** Path part for operation `tradesSearch()` */
  static readonly TradesSearchPath = '/bla-bla-vla/trades/search';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesSearch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesSearch$Response(params?: TradesSearch$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfStarSearchObj>> {
    return tradesSearch(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesSearch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesSearch(params?: TradesSearch$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfStarSearchObj> {
    return this.tradesSearch$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfStarSearchObj>): ApiMarketJsonResultOfStarSearchObj => r.body)
    );
  }

  /** Path part for operation `tradesPublish2()` */
  static readonly TradesPublish2Path = '/bla-bla-vla/trades';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesPublish2()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesPublish2$Response(params?: TradesPublish2$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfTradePublishResult>> {
    return tradesPublish2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesPublish2$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesPublish2(params?: TradesPublish2$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfTradePublishResult> {
    return this.tradesPublish2$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfTradePublishResult>): ApiMarketJsonResultOfTradePublishResult => r.body)
    );
  }

  /** Path part for operation `tradesPublishFromEis()` */
  static readonly TradesPublishFromEisPath = '/bla-bla-vla/trades/eis/publish';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesPublishFromEis()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesPublishFromEis$Response(params?: TradesPublishFromEis$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfTradePublishResult>> {
    return tradesPublishFromEis(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesPublishFromEis$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesPublishFromEis(params?: TradesPublishFromEis$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfTradePublishResult> {
    return this.tradesPublishFromEis$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfTradePublishResult>): ApiMarketJsonResultOfTradePublishResult => r.body)
    );
  }

  /** Path part for operation `tradesSaveAsDraft()` */
  static readonly TradesSaveAsDraftPath = '/bla-bla-vla/trades/draft';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesSaveAsDraft()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesSaveAsDraft$Response(params?: TradesSaveAsDraft$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfTradePublishResult>> {
    return tradesSaveAsDraft(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesSaveAsDraft$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesSaveAsDraft(params?: TradesSaveAsDraft$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfTradePublishResult> {
    return this.tradesSaveAsDraft$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfTradePublishResult>): ApiMarketJsonResultOfTradePublishResult => r.body)
    );
  }

  /** Path part for operation `tradesPublishById()` */
  static readonly TradesPublishByIdPath = '/bla-bla-vla/trades/publish/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesPublishById()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesPublishById$Response(params: TradesPublishById$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfTradePublishResult>> {
    return tradesPublishById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesPublishById$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesPublishById(params: TradesPublishById$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfTradePublishResult> {
    return this.tradesPublishById$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfTradePublishResult>): ApiMarketJsonResultOfTradePublishResult => r.body)
    );
  }

  /** Path part for operation `tradesCreateTradeFromPlanLots()` */
  static readonly TradesCreateTradeFromPlanLotsPath = '/bla-bla-vla/trades/create-from-plan';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesCreateTradeFromPlanLots()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesCreateTradeFromPlanLots$Response(params?: TradesCreateTradeFromPlanLots$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfInteger>> {
    return tradesCreateTradeFromPlanLots(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesCreateTradeFromPlanLots$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesCreateTradeFromPlanLots(params?: TradesCreateTradeFromPlanLots$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfInteger> {
    return this.tradesCreateTradeFromPlanLots$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfInteger>): ApiMarketJsonResultOfInteger => r.body)
    );
  }

  /** Path part for operation `tradesPrepareTradeFromPlanLots()` */
  static readonly TradesPrepareTradeFromPlanLotsPath = '/bla-bla-vla/trades/prepare-from-plan/{marketPlanLotId}';

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
  static readonly TradesCancelTradePath = '/bla-bla-vla/trades/cancel';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesCancelTrade()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesCancelTrade$Response(params?: TradesCancelTrade$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBoolean>> {
    return tradesCancelTrade(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesCancelTrade$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesCancelTrade(params?: TradesCancelTrade$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfBoolean> {
    return this.tradesCancelTrade$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfBoolean>): ApiMarketJsonResultOfBoolean => r.body)
    );
  }

  /** Path part for operation `tradesCancelTradeExternal()` */
  static readonly TradesCancelTradeExternalPath = '/bla-bla-vla/trades/cancel/external';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesCancelTradeExternal()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesCancelTradeExternal$Response(params?: TradesCancelTradeExternal$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBoolean>> {
    return tradesCancelTradeExternal(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesCancelTradeExternal$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesCancelTradeExternal(params?: TradesCancelTradeExternal$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfBoolean> {
    return this.tradesCancelTradeExternal$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfBoolean>): ApiMarketJsonResultOfBoolean => r.body)
    );
  }

  /** Path part for operation `tradesGetTradeForView()` */
  static readonly TradesGetTradeForViewPath = '/bla-bla-vla/trades/{id}';

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
  static readonly TradesGetTradeForViewByLotPath = '/bla-bla-vla/trades/byLotId/{id}';

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
  static readonly TradesRegisterForTradeLotPath = '/bla-bla-vla/trades/registerForTradeLot/{id}';

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
  static readonly TradesGetTradeForEditPath = '/bla-bla-vla/trades/{id}/full';

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
  static readonly TradesGetTradeCopyPath = '/bla-bla-vla/trades/{id}/copy';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesGetTradeCopy()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetTradeCopy$Response(params: TradesGetTradeCopy$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfTradePublishResult>> {
    return tradesGetTradeCopy(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesGetTradeCopy$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetTradeCopy(params: TradesGetTradeCopy$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfTradePublishResult> {
    return this.tradesGetTradeCopy$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfTradePublishResult>): ApiMarketJsonResultOfTradePublishResult => r.body)
    );
  }

  /** Path part for operation `tradesEditPublished()` */
  static readonly TradesEditPublishedPath = '/bla-bla-vla/trades/editpublished';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesEditPublished()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesEditPublished$Response(params?: TradesEditPublished$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfInteger>> {
    return tradesEditPublished(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesEditPublished$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesEditPublished(params?: TradesEditPublished$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfInteger> {
    return this.tradesEditPublished$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfInteger>): ApiMarketJsonResultOfInteger => r.body)
    );
  }

  /** Path part for operation `tradesEditPublishedFromEis()` */
  static readonly TradesEditPublishedFromEisPath = '/bla-bla-vla/trades/eis/editpublished';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesEditPublishedFromEis()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesEditPublishedFromEis$Response(params?: TradesEditPublishedFromEis$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfInteger>> {
    return tradesEditPublishedFromEis(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesEditPublishedFromEis$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesEditPublishedFromEis(params?: TradesEditPublishedFromEis$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfInteger> {
    return this.tradesEditPublishedFromEis$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfInteger>): ApiMarketJsonResultOfInteger => r.body)
    );
  }

  /** Path part for operation `tradesGetTenderTenant()` */
  static readonly TradesGetTenderTenantPath = '/bla-bla-vla/trades/{id}/tenants';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesGetTenderTenant()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetTenderTenant$Response(params: TradesGetTenderTenant$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfInteger>> {
    return tradesGetTenderTenant(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesGetTenderTenant$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetTenderTenant(params: TradesGetTenderTenant$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfListOfInteger> {
    return this.tradesGetTenderTenant$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfListOfInteger>): ApiMarketJsonResultOfListOfInteger => r.body)
    );
  }

  /** Path part for operation `tradesReturnTradeToFillingAppState()` */
  static readonly TradesReturnTradeToFillingAppStatePath = '/bla-bla-vla/trades/tofillingappstate';

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
  static readonly TradesCreatePreliminaryOffersForPrivateTrade2Path = '/bla-bla-vla/trades/preliminary-offer/tofillingappstate';

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
  static readonly TradesCloseTradeWithoutDealPath = '/bla-bla-vla/trades/{id}/close';

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
  static readonly TradesGetTradeCharacteristicsPath = '/bla-bla-vla/trades/{id}/characteristics';

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
  static readonly TradesGetCharacteristicsByTradeIdAsFilePath = '/bla-bla-vla/trades/{id}/characteristics/file';

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
  static readonly TradesImportProductsFromExcelWithGuidPath = '/bla-bla-vla/trades/import-products';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesImportProductsFromExcelWithGuid()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesImportProductsFromExcelWithGuid$Response(params?: TradesImportProductsFromExcelWithGuid$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfImportExcelProductResponse>> {
    return tradesImportProductsFromExcelWithGuid(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesImportProductsFromExcelWithGuid$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesImportProductsFromExcelWithGuid(params?: TradesImportProductsFromExcelWithGuid$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfImportExcelProductResponse> {
    return this.tradesImportProductsFromExcelWithGuid$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfImportExcelProductResponse>): ApiMarketJsonResultOfImportExcelProductResponse => r.body)
    );
  }

  /** Path part for operation `tradesGetImportTemplateGuidByTenant()` */
  static readonly TradesGetImportTemplateGuidByTenantPath = '/bla-bla-vla/trades/import-template-guid';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesGetImportTemplateGuidByTenant()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetImportTemplateGuidByTenant$Response(params?: TradesGetImportTemplateGuidByTenant$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfGuid>> {
    return tradesGetImportTemplateGuidByTenant(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesGetImportTemplateGuidByTenant$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetImportTemplateGuidByTenant(params?: TradesGetImportTemplateGuidByTenant$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfGuid> {
    return this.tradesGetImportTemplateGuidByTenant$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfGuid>): ApiMarketJsonResultOfGuid => r.body)
    );
  }

  /** Path part for operation `tradesDeleteTradeDraft()` */
  static readonly TradesDeleteTradeDraftPath = '/bla-bla-vla/trades/deleteDraft/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesDeleteTradeDraft()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesDeleteTradeDraft$Response(params: TradesDeleteTradeDraft$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBoolean>> {
    return tradesDeleteTradeDraft(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesDeleteTradeDraft$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesDeleteTradeDraft(params: TradesDeleteTradeDraft$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfBoolean> {
    return this.tradesDeleteTradeDraft$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfBoolean>): ApiMarketJsonResultOfBoolean => r.body)
    );
  }

  /** Path part for operation `tradesGenerateTradeProtocol()` */
  static readonly TradesGenerateTradeProtocolPath = '/bla-bla-vla/trades/tradeProtocol';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesGenerateTradeProtocol()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesGenerateTradeProtocol$Response(params?: TradesGenerateTradeProtocol$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfGuid>> {
    return tradesGenerateTradeProtocol(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesGenerateTradeProtocol$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesGenerateTradeProtocol(params?: TradesGenerateTradeProtocol$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfGuid> {
    return this.tradesGenerateTradeProtocol$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfGuid>): ApiMarketJsonResultOfGuid => r.body)
    );
  }

  /** Path part for operation `tradesSaveSupplierFromMmo()` */
  static readonly TradesSaveSupplierFromMmoPath = '/bla-bla-vla/trades/{tradeId}/save-supplier-from-mmo/{sessionGuid}';

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
  static readonly TradesGetTenantIdByTradePath = '/bla-bla-vla/trades/GetTenantIdByTrade/{tradeId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesGetTenantIdByTrade()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetTenantIdByTrade$Response(params: TradesGetTenantIdByTrade$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfInteger>> {
    return tradesGetTenantIdByTrade(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesGetTenantIdByTrade$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetTenantIdByTrade(params: TradesGetTenantIdByTrade$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfInteger> {
    return this.tradesGetTenantIdByTrade$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfInteger>): ApiMarketJsonResultOfInteger => r.body)
    );
  }

  /** Path part for operation `tradesSendTradeToEis()` */
  static readonly TradesSendTradeToEisPath = '/bla-bla-vla/trades/send-trade-to-eis';

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
  static readonly TradesSendTradeCancelToEisPath = '/bla-bla-vla/trades/sendTradeCancelToEis/{tradeId}';

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
  static readonly TradesSendProtocolToEisPath = '/bla-bla-vla/trades/send-protocol-to-eis';

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
  static readonly TradesCreateCustomerComissionProtocolPath = '/bla-bla-vla/trades/{id}/customer-comission-protocol/create';

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
  static readonly TradesPublishConsiderationProtocolPath = '/bla-bla-vla/trades/{id}/customer-comission-protocol/publish';

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
  static readonly TradesNoEisPublishConsiderationProtocolPath = '/bla-bla-vla/trades/{id}/customer-comission-protocol/no-eis-publish';

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
  static readonly TradesGetConsiderationProtocolPath = '/bla-bla-vla/trades/{id}/customer-comission-protocol';

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
  static readonly TradesGetCustomerSignerListPath = '/bla-bla-vla/trades/deal-signer-list';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesGetCustomerSignerList()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetCustomerSignerList$Response(params?: TradesGetCustomerSignerList$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfMarketTradePerson>> {
    return tradesGetCustomerSignerList(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesGetCustomerSignerList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradesGetCustomerSignerList(params?: TradesGetCustomerSignerList$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfListOfMarketTradePerson> {
    return this.tradesGetCustomerSignerList$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfListOfMarketTradePerson>): ApiMarketJsonResultOfListOfMarketTradePerson => r.body)
    );
  }

  /** Path part for operation `tradesSaveContractSigner()` */
  static readonly TradesSaveContractSignerPath = '/bla-bla-vla/trades/save-deal-signer/{tradeId}/{userId}';

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
  static readonly TradesDeleteDealSignerPath = '/bla-bla-vla/trades/delete-deal-signer/{tradeId}/{userId}';

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
  static readonly TradesGetCompetitiveListReportPath = '/bla-bla-vla/trades/{tradeId}/competitive-list/excel';

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
  static readonly TradesGetApplicationsArchivePath = '/bla-bla-vla/trades/{tradeId}/applications/arhive';

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
  static readonly TradesTurnSingleSupplierToPriceReuestPath = '/bla-bla-vla/trades/{tradeId}/to-price-request';

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
  static readonly TradesValidateWorkgroupForSignerPath = '/bla-bla-vla/trades/validate-work-groups-signer';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesValidateWorkgroupForSigner()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesValidateWorkgroupForSigner$Response(params?: TradesValidateWorkgroupForSigner$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBoolean>> {
    return tradesValidateWorkgroupForSigner(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesValidateWorkgroupForSigner$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesValidateWorkgroupForSigner(params?: TradesValidateWorkgroupForSigner$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfBoolean> {
    return this.tradesValidateWorkgroupForSigner$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfBoolean>): ApiMarketJsonResultOfBoolean => r.body)
    );
  }

  /** Path part for operation `tradesGetFiles()` */
  static readonly TradesGetFilesPath = '/bla-bla-vla/trades/{tradeId}/files';

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
  static readonly TradesReturnTradeToReviewApplicaitonsPath = '/bla-bla-vla/trades/{tradeId}/review-applications/return';

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
  static readonly TradesGetCreateApplicationFormTemplateSettingsPath = '/bla-bla-vla/trades/{tradeId}/application-template';

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
  static readonly TradesGetTradeDiscussionHistoryPath = '/bla-bla-vla/trades/{tradeId}/discussion-history';

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
  static readonly TradesGetSpecificationsByParticipantsPath = '/bla-bla-vla/trades/{tradeId}/specifications-by-participants-archive';

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
  static readonly TradesCalculatePriceReductionPath = '/bla-bla-vla/trades/price/reduction/calculate';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradesCalculatePriceReduction()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesCalculatePriceReduction$Response(params?: TradesCalculatePriceReduction$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfPriceReductionResponse>> {
    return tradesCalculatePriceReduction(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradesCalculatePriceReduction$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradesCalculatePriceReduction(params?: TradesCalculatePriceReduction$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfPriceReductionResponse> {
    return this.tradesCalculatePriceReduction$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfPriceReductionResponse>): ApiMarketJsonResultOfPriceReductionResponse => r.body)
    );
  }

}
