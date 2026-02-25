import { AllTradeDocuments } from '../models/all-trade-documents.interface';
import { allTradeDocumentsAdapter } from '../adapters/models/all-trade-documents.adapter';
import { ApplicationDocument } from '../models/application-document.interface';
import { applicationDocumentAdapter } from '../adapters/models/application-document.adapter';
import { ApplicationDto2 } from '../models/application-dto-2.interface';
import { applicationDto2Adapter } from '../adapters/models/application-dto-2.adapter';
import { ApplicationPriceShortInfo } from '../models/application-price-short-info.interface';
import { applicationPriceShortInfoAdapter } from '../adapters/models/application-price-short-info.adapter';
import { CardPaymentAvailabilityAlt } from '../models/card-payment-availability-alt.interface';
import { cardPaymentAvailabilityAltAdapter } from '../adapters/models/card-payment-availability-alt.adapter';
import { Characteristic } from '../models/characteristic.interface';
import { characteristicAdapter } from '../adapters/models/characteristic.adapter';
import { CustomerComissionProtocolWithDocs } from '../models/customer-comission-protocol-with-docs.interface';
import { customerComissionProtocolWithDocsAdapter } from '../adapters/models/customer-comission-protocol-with-docs.adapter';
import { Discussion } from '../models/discussion.interface';
import { discussionAdapter } from '../adapters/models/discussion.adapter';
import { DiscussionFile } from '../models/discussion-file.interface';
import { discussionFileAdapter } from '../adapters/models/discussion-file.adapter';
import { DiscussionItem } from '../models/discussion-item.interface';
import { discussionItemAdapter } from '../adapters/models/discussion-item.adapter';
import { DiscussionTitle } from '../models/discussion-title.interface';
import { discussionTitleAdapter } from '../adapters/models/discussion-title.adapter';
import { EisIntegrationResult } from '../models/eis-integration-result.interface';
import { eisIntegrationResultAdapter } from '../adapters/models/eis-integration-result.adapter';
import { FormTemplate } from '../models/form-template.interface';
import { formTemplateAdapter } from '../adapters/models/form-template.adapter';
import { IDiscussionHistory } from '../models/i-discussion-history.interface';
import { iDiscussionHistoryAdapter } from '../adapters/models/i-discussion-history.adapter';
import { ImportApplicationProductsResponseAlt } from '../models/import-application-products-response-alt.interface';
import { importApplicationProductsResponseAltAdapter } from '../adapters/models/import-application-products-response-alt.adapter';
import { ImportExcelProductResponseAlt } from '../models/import-excel-product-response-alt.interface';
import { importExcelProductResponseAltAdapter } from '../adapters/models/import-excel-product-response-alt.adapter';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { MarketApplicationDetailAlt } from '../models/market-application-detail-alt.interface';
import { marketApplicationDetailAltAdapter } from '../adapters/models/market-application-detail-alt.adapter';
import { MarketDealAlt } from '../models/market-deal-alt.interface';
import { MarketPaginationResult } from '../models/market-pagination-result.interface';
import { marketPaginationResultOfListOfMarketDealAltAdapter } from '../adapters/models/market-pagination-result-of-list-of-market-deal-alt.adapter';
import { marketPaginationResultOfListOfMarketSearchResultAdapter } from '../adapters/models/market-pagination-result-of-list-of-market-search-result.adapter';
import { marketPaginationResultOfListOfTradeRecommendationAdapter } from '../adapters/models/market-pagination-result-of-list-of-trade-recommendation.adapter';
import { MarketSearchResult } from '../models/market-search-result.interface';
import { MarketTradePersonAlt } from '../models/market-trade-person-alt.interface';
import { marketTradePersonAltAdapter } from '../adapters/models/market-trade-person-alt.adapter';
import { MarketTradeView } from '../models/market-trade-view.interface';
import { marketTradeViewAdapter } from '../adapters/models/market-trade-view.adapter';
import { Observable } from 'rxjs';
import { PriceReductionResponseAlt } from '../models/price-reduction-response-alt.interface';
import { priceReductionResponseAltAdapter } from '../adapters/models/price-reduction-response-alt.adapter';
import { PublishApplicationResultAlt } from '../models/publish-application-result-alt.interface';
import { publishApplicationResultAltAdapter } from '../adapters/models/publish-application-result-alt.adapter';
import { ReadItemInfoAlt } from '../models/read-item-info-alt.interface';
import { readItemInfoAltAdapter } from '../adapters/models/read-item-info-alt.adapter';
import { StarLightSearchResult } from '../models/star-light-search-result.interface';
import { starLightSearchResultAdapter } from '../adapters/models/star-light-search-result.adapter';
import { StarSearchObjAlt } from '../models/star-search-obj-alt.interface';
import { starSearchObjAltAdapter } from '../adapters/models/star-search-obj-alt.adapter';
import { StarSuggestObjectAlt } from '../models/star-suggest-object-alt.interface';
import { starSuggestObjectAltAdapter } from '../adapters/models/star-suggest-object-alt.adapter';
import { TradeDto2 } from '../models/trade-dto-2.interface';
import { tradeDto2Adapter } from '../adapters/models/trade-dto-2.adapter';
import { TradePublishResultAlt } from '../models/trade-publish-result-alt.interface';
import { tradePublishResultAltAdapter } from '../adapters/models/trade-publish-result-alt.adapter';
import { TradeRecommendation } from '../models/trade-recommendation.interface';
import { TradesAddChatMessageParams, tradesAddChatMessageAdapter } from './params/trades-add-chat-message.params';
import { TradesAddCustomerDealCommentSystemMessageParams, tradesAddCustomerDealCommentSystemMessageAdapter } from './params/trades-add-customer-deal-comment-system-message.params';
import { TradesAddDealSigningExpiredMessageParams, tradesAddDealSigningExpiredMessageAdapter } from './params/trades-add-deal-signing-expired-message.params';
import { TradesAddMessageToChatParams, tradesAddMessageToChatAdapter } from './params/trades-add-message-to-chat.params';
import { TradesAddMmoCreateDealSystemMessageParams, tradesAddMmoCreateDealSystemMessageAdapter } from './params/trades-add-mmo-create-deal-system-message.params';
import { TradesAddMmoParticipantMissedSigningTimeSystemMessageParams, tradesAddMmoParticipantMissedSigningTimeSystemMessageAdapter } from './params/trades-add-mmo-participant-missed-signing-time-system-message.params';
import { TradesAddMmoTradeFromDealNotSignedToFillingApplicationsSystemMessageParams, tradesAddMmoTradeFromDealNotSignedToFillingApplicationsSystemMessageAdapter } from './params/trades-add-mmo-trade-from-deal-not-signed-to-filling-applications-system-message.params';
import { TradesAddMmoTradeFromDealSigningToDealNotSignedChatSystemMessageParams, tradesAddMmoTradeFromDealSigningToDealNotSignedChatSystemMessageAdapter } from './params/trades-add-mmo-trade-from-deal-signing-to-deal-not-signed-chat-system-message.params';
import { TradesApiService } from '../../swagger/services/trades-api.service';
import { TradesBlockFinanceParams, tradesBlockFinanceAdapter } from './params/trades-block-finance.params';
import { TradesCalculatePriceReductionParams, tradesCalculatePriceReductionAdapter } from './params/trades-calculate-price-reduction.params';
import { TradesCancelTradeExternalParams, tradesCancelTradeExternalAdapter } from './params/trades-cancel-trade-external.params';
import { TradesCancelTradeParams, tradesCancelTradeAdapter } from './params/trades-cancel-trade.params';
import { TradesCloseTradeWithoutDealParams, tradesCloseTradeWithoutDealAdapter } from './params/trades-close-trade-without-deal.params';
import { TradesCreateChatParams, tradesCreateChatAdapter } from './params/trades-create-chat.params';
import { TradesCreateCustomerComissionProtocolParams, tradesCreateCustomerComissionProtocolAdapter } from './params/trades-create-customer-comission-protocol.params';
import { TradesCreatePreliminaryOffers2Params, tradesCreatePreliminaryOffers2Adapter } from './params/trades-create-preliminary-offers-2.params';
import { TradesCreatePreliminaryOffersForPrivateTrade2Params, tradesCreatePreliminaryOffersForPrivateTrade2Adapter } from './params/trades-create-preliminary-offers-for-private-trade-2.params';
import { TradesCreatePreliminaryOffersForPrivateTradeParams, tradesCreatePreliminaryOffersForPrivateTradeAdapter } from './params/trades-create-preliminary-offers-for-private-trade.params';
import { TradesCreatePreliminaryOffersParams, tradesCreatePreliminaryOffersAdapter } from './params/trades-create-preliminary-offers.params';
import { TradesCreateTradeFromPlanLotsParams, tradesCreateTradeFromPlanLotsAdapter } from './params/trades-create-trade-from-plan-lots.params';
import { TradesDeleteDealSignerParams, tradesDeleteDealSignerAdapter } from './params/trades-delete-deal-signer.params';
import { TradesDeleteTradeDraftParams, tradesDeleteTradeDraftAdapter } from './params/trades-delete-trade-draft.params';
import { TradesDisableSupplierMessagesParams, tradesDisableSupplierMessagesAdapter } from './params/trades-disable-supplier-messages.params';
import { TradesEditPublishedFromEisParams, tradesEditPublishedFromEisAdapter } from './params/trades-edit-published-from-eis.params';
import { TradesEditPublishedParams, tradesEditPublishedAdapter } from './params/trades-edit-published.params';
import { TradesEnableSupplierMessagesParams, tradesEnableSupplierMessagesAdapter } from './params/trades-enable-supplier-messages.params';
import { TradesExternalSearchParams, tradesExternalSearchAdapter } from './params/trades-external-search.params';
import { TradesFinishReviewApplicationExternalParams, tradesFinishReviewApplicationExternalAdapter } from './params/trades-finish-review-application-external.params';
import { TradesFinishReviewApplicationParams, tradesFinishReviewApplicationAdapter } from './params/trades-finish-review-application.params';
import { TradesGenerateTradeProtocolParams, tradesGenerateTradeProtocolAdapter } from './params/trades-generate-trade-protocol.params';
import { TradesGetAllChatItemsParams, tradesGetAllChatItemsAdapter } from './params/trades-get-all-chat-items.params';
import { TradesGetApplicationDeclarationParams, tradesGetApplicationDeclarationAdapter } from './params/trades-get-application-declaration.params';
import { TradesGetApplicationInfoParams, tradesGetApplicationInfoAdapter } from './params/trades-get-application-info.params';
import { TradesGetApplicationPriceShortInfoParams, tradesGetApplicationPriceShortInfoAdapter } from './params/trades-get-application-price-short-info.params';
import { TradesGetApplicationProductsImportTemplateParams, tradesGetApplicationProductsImportTemplateAdapter } from './params/trades-get-application-products-import-template.params';
import { TradesGetApplicationProductsInfoFromImportTemplateParams, tradesGetApplicationProductsInfoFromImportTemplateAdapter } from './params/trades-get-application-products-info-from-import-template.params';
import { TradesGetApplicationsArchiveParams, tradesGetApplicationsArchiveAdapter } from './params/trades-get-applications-archive.params';
import { TradesGetApplicationsByTradeIdParams, tradesGetApplicationsByTradeIdAdapter } from './params/trades-get-applications-by-trade-id.params';
import { TradesGetArchiveDocumentsParams, tradesGetArchiveDocumentsAdapter } from './params/trades-get-archive-documents.params';
import { TradesGetCardPaymentAvailabilityParams, tradesGetCardPaymentAvailabilityAdapter } from './params/trades-get-card-payment-availability.params';
import { TradesGetCharacteristicsByTradeIdAsFileParams, tradesGetCharacteristicsByTradeIdAsFileAdapter } from './params/trades-get-characteristics-by-trade-id-as-file.params';
import { TradesGetChatFilesParams, tradesGetChatFilesAdapter } from './params/trades-get-chat-files.params';
import { TradesGetChatItemsParams, tradesGetChatItemsAdapter } from './params/trades-get-chat-items.params';
import { TradesGetChatParams, tradesGetChatAdapter } from './params/trades-get-chat.params';
import { TradesGetChatsParams, tradesGetChatsAdapter } from './params/trades-get-chats.params';
import { TradesGetChatsUnreadItemsParams, tradesGetChatsUnreadItemsAdapter } from './params/trades-get-chats-unread-items.params';
import { TradesGetCompetitiveListReportParams, tradesGetCompetitiveListReportAdapter } from './params/trades-get-competitive-list-report.params';
import { TradesGetConsiderationProtocolParams, tradesGetConsiderationProtocolAdapter } from './params/trades-get-consideration-protocol.params';
import { TradesGetCreateApplicationFormTemplateSettingsParams, tradesGetCreateApplicationFormTemplateSettingsAdapter } from './params/trades-get-create-application-form-template-settings.params';
import { TradesGetCustomerChatsParams, tradesGetCustomerChatsAdapter } from './params/trades-get-customer-chats.params';
import { TradesGetCustomerSignerListParams, tradesGetCustomerSignerListAdapter } from './params/trades-get-customer-signer-list.params';
import { TradesGetDealsListParams, tradesGetDealsListAdapter } from './params/trades-get-deals-list.params';
import { TradesGetFilesParams, tradesGetFilesAdapter } from './params/trades-get-files.params';
import { TradesGetImportTemplateGuidByTenantParams, tradesGetImportTemplateGuidByTenantAdapter } from './params/trades-get-import-template-guid-by-tenant.params';
import { TradesGetLastChatItemsParams, tradesGetLastChatItemsAdapter } from './params/trades-get-last-chat-items.params';
import { TradesGetReadItemInfoParams, tradesGetReadItemInfoAdapter } from './params/trades-get-read-item-info.params';
import { TradesGetSpecificationsByParticipantsParams, tradesGetSpecificationsByParticipantsAdapter } from './params/trades-get-specifications-by-participants.params';
import { TradesGetTenantIdByTradeParams, tradesGetTenantIdByTradeAdapter } from './params/trades-get-tenant-id-by-trade.params';
import { TradesGetTenderTenantParams, tradesGetTenderTenantAdapter } from './params/trades-get-tender-tenant.params';
import { TradesGetTradeCharacteristicsParams, tradesGetTradeCharacteristicsAdapter } from './params/trades-get-trade-characteristics.params';
import { TradesGetTradeCopyParams, tradesGetTradeCopyAdapter } from './params/trades-get-trade-copy.params';
import { TradesGetTradeDiscussionHistoryParams, tradesGetTradeDiscussionHistoryAdapter } from './params/trades-get-trade-discussion-history.params';
import { TradesGetTradeForEditParams, tradesGetTradeForEditAdapter } from './params/trades-get-trade-for-edit.params';
import { TradesGetTradeForViewByLotParams, tradesGetTradeForViewByLotAdapter } from './params/trades-get-trade-for-view-by-lot.params';
import { TradesGetTradeForViewParams, tradesGetTradeForViewAdapter } from './params/trades-get-trade-for-view.params';
import { TradesGetTradeRecommendationsParams, tradesGetTradeRecommendationsAdapter } from './params/trades-get-trade-recommendations.params';
import { TradesGetUnreadItemsCountParams, tradesGetUnreadItemsCountAdapter } from './params/trades-get-unread-items-count.params';
import { TradesGetUnreadItemsParams, tradesGetUnreadItemsAdapter } from './params/trades-get-unread-items.params';
import { TradesImportProductsFromExcelWithGuidParams, tradesImportProductsFromExcelWithGuidAdapter } from './params/trades-import-products-from-excel-with-guid.params';
import { TradesNoEisPublishConsiderationProtocolParams, tradesNoEisPublishConsiderationProtocolAdapter } from './params/trades-no-eis-publish-consideration-protocol.params';
import { TradesPrepareTradeFromPlanLotsParams, tradesPrepareTradeFromPlanLotsAdapter } from './params/trades-prepare-trade-from-plan-lots.params';
import { TradesPublicLightSearchParams, tradesPublicLightSearchAdapter } from './params/trades-public-light-search.params';
import { TradesPublicSearch2Params, tradesPublicSearch2Adapter } from './params/trades-public-search-2.params';
import { TradesPublish2Params, tradesPublish2Adapter } from './params/trades-publish-2.params';
import { TradesPublishByIdParams, tradesPublishByIdAdapter } from './params/trades-publish-by-id.params';
import { TradesPublishConsiderationProtocolParams, tradesPublishConsiderationProtocolAdapter } from './params/trades-publish-consideration-protocol.params';
import { TradesPublishFromEisParams, tradesPublishFromEisAdapter } from './params/trades-publish-from-eis.params';
import { TradesPublishParams, tradesPublishAdapter } from './params/trades-publish.params';
import { TradesReadAllItemsFromIdParams, tradesReadAllItemsFromIdAdapter } from './params/trades-read-all-items-from-id.params';
import { TradesReadChatItemByIdsParams, tradesReadChatItemByIdsAdapter } from './params/trades-read-chat-item-by-ids.params';
import { TradesRegisterForTradeLotParams, tradesRegisterForTradeLotAdapter } from './params/trades-register-for-trade-lot.params';
import { TradesRemoveApplicationDraftParams, tradesRemoveApplicationDraftAdapter } from './params/trades-remove-application-draft.params';
import { TradesRetradingUpdateParams, tradesRetradingUpdateAdapter } from './params/trades-retrading-update.params';
import { TradesReturnTradeToFillingAppStateParams, tradesReturnTradeToFillingAppStateAdapter } from './params/trades-return-trade-to-filling-app-state.params';
import { TradesReturnTradeToReviewApplicaitonsParams, tradesReturnTradeToReviewApplicaitonsAdapter } from './params/trades-return-trade-to-review-applicaitons.params';
import { TradesRevokeApplicationParams, tradesRevokeApplicationAdapter } from './params/trades-revoke-application.params';
import { TradesSaveApplicationDraftParams, tradesSaveApplicationDraftAdapter } from './params/trades-save-application-draft.params';
import { TradesSaveAsDraftParams, tradesSaveAsDraftAdapter } from './params/trades-save-as-draft.params';
import { TradesSaveContractSignerParams, tradesSaveContractSignerAdapter } from './params/trades-save-contract-signer.params';
import { TradesSaveManufacturerCountryCodesParams, tradesSaveManufacturerCountryCodesAdapter } from './params/trades-save-manufacturer-country-codes.params';
import { TradesSaveSupplierFromMmoParams, tradesSaveSupplierFromMmoAdapter } from './params/trades-save-supplier-from-mmo.params';
import { TradesSearchParams, tradesSearchAdapter } from './params/trades-search.params';
import { TradesSendProtocolToEisParams, tradesSendProtocolToEisAdapter } from './params/trades-send-protocol-to-eis.params';
import { TradesSendTradeCancelToEisParams, tradesSendTradeCancelToEisAdapter } from './params/trades-send-trade-cancel-to-eis.params';
import { TradesSendTradeToEisParams, tradesSendTradeToEisAdapter } from './params/trades-send-trade-to-eis.params';
import { TradesSpeedUpPriceRequestParams, tradesSpeedUpPriceRequestAdapter } from './params/trades-speed-up-price-request.params';
import { TradesStarLightSearchParams, tradesStarLightSearchAdapter } from './params/trades-star-light-search.params';
import { TradesSuggestParams, tradesSuggestAdapter } from './params/trades-suggest.params';
import { TradesTurnSingleSupplierToPriceReuestParams, tradesTurnSingleSupplierToPriceReuestAdapter } from './params/trades-turn-single-supplier-to-price-reuest.params';
import { TradesValidateParams, tradesValidateAdapter } from './params/trades-validate.params';
import { TradesValidateWorkgroupForSignerParams, tradesValidateWorkgroupForSignerAdapter } from './params/trades-validate-workgroup-for-signer.params';

@Injectable({ providedIn: 'root' })
export class TradesRepository {
  private readonly _api = inject(TradesApiService);

  tradesAddChatMessage(params: TradesAddChatMessageParams): Observable<DiscussionItem> {
    return this._api.tradesAddChatMessage(tradesAddChatMessageAdapter(params)).pipe(
      map((res) => discussionItemAdapter(res?.data))
    );
  }

  tradesAddCustomerDealCommentSystemMessage(params: TradesAddCustomerDealCommentSystemMessageParams): Observable<number> {
    return this._api.tradesAddCustomerDealCommentSystemMessage(tradesAddCustomerDealCommentSystemMessageAdapter(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  tradesAddDealSigningExpiredMessage(params?: TradesAddDealSigningExpiredMessageParams): Observable<Blob> {
    return this._api.tradesAddDealSigningExpiredMessage(tradesAddDealSigningExpiredMessageAdapter(params));
  }

  tradesAddMessageToChat(params: TradesAddMessageToChatParams): Observable<number> {
    return this._api.tradesAddMessageToChat(tradesAddMessageToChatAdapter(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  tradesAddMmoCreateDealSystemMessage(params: TradesAddMmoCreateDealSystemMessageParams): Observable<Blob> {
    return this._api.tradesAddMmoCreateDealSystemMessage(tradesAddMmoCreateDealSystemMessageAdapter(params));
  }

  tradesAddMmoParticipantMissedSigningTimeSystemMessage(params: TradesAddMmoParticipantMissedSigningTimeSystemMessageParams): Observable<Blob> {
    return this._api.tradesAddMmoParticipantMissedSigningTimeSystemMessage(tradesAddMmoParticipantMissedSigningTimeSystemMessageAdapter(params));
  }

  tradesAddMmoTradeFromDealNotSignedToFillingApplicationsSystemMessage(params: TradesAddMmoTradeFromDealNotSignedToFillingApplicationsSystemMessageParams): Observable<Blob> {
    return this._api.tradesAddMmoTradeFromDealNotSignedToFillingApplicationsSystemMessage(tradesAddMmoTradeFromDealNotSignedToFillingApplicationsSystemMessageAdapter(params));
  }

  tradesAddMmoTradeFromDealSigningToDealNotSignedChatSystemMessage(params: TradesAddMmoTradeFromDealSigningToDealNotSignedChatSystemMessageParams): Observable<Blob> {
    return this._api.tradesAddMmoTradeFromDealSigningToDealNotSignedChatSystemMessage(tradesAddMmoTradeFromDealSigningToDealNotSignedChatSystemMessageAdapter(params));
  }

  tradesBlockFinance(params?: TradesBlockFinanceParams): Observable<PublishApplicationResultAlt> {
    return this._api.tradesBlockFinance(tradesBlockFinanceAdapter(params)).pipe(
      map((res) => publishApplicationResultAltAdapter(res?.data))
    );
  }

  tradesCalculatePriceReduction(params?: TradesCalculatePriceReductionParams): Observable<PriceReductionResponseAlt> {
    return this._api.tradesCalculatePriceReduction(tradesCalculatePriceReductionAdapter(params)).pipe(
      map((res) => priceReductionResponseAltAdapter(res?.data))
    );
  }

  tradesCancelTrade(params?: TradesCancelTradeParams): Observable<boolean> {
    return this._api.tradesCancelTrade(tradesCancelTradeAdapter(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  tradesCancelTradeExternal(params?: TradesCancelTradeExternalParams): Observable<boolean> {
    return this._api.tradesCancelTradeExternal(tradesCancelTradeExternalAdapter(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  tradesCloseTradeWithoutDeal(params: TradesCloseTradeWithoutDealParams): Observable<void> {
    return this._api.tradesCloseTradeWithoutDeal(tradesCloseTradeWithoutDealAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

  tradesCreateChat(params: TradesCreateChatParams): Observable<number> {
    return this._api.tradesCreateChat(tradesCreateChatAdapter(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  tradesCreateCustomerComissionProtocol(params: TradesCreateCustomerComissionProtocolParams): Observable<Blob> {
    return this._api.tradesCreateCustomerComissionProtocol(tradesCreateCustomerComissionProtocolAdapter(params));
  }

  tradesCreatePreliminaryOffers(params: TradesCreatePreliminaryOffersParams): Observable<number[]> {
    return this._api.tradesCreatePreliminaryOffers(tradesCreatePreliminaryOffersAdapter(params)).pipe(
      map((res) => res?.data ?? [])
    );
  }

  tradesCreatePreliminaryOffers2(params: TradesCreatePreliminaryOffers2Params): Observable<number> {
    return this._api.tradesCreatePreliminaryOffers2(tradesCreatePreliminaryOffers2Adapter(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  tradesCreatePreliminaryOffersForPrivateTrade(params: TradesCreatePreliminaryOffersForPrivateTradeParams): Observable<number[]> {
    return this._api.tradesCreatePreliminaryOffersForPrivateTrade(tradesCreatePreliminaryOffersForPrivateTradeAdapter(params)).pipe(
      map((res) => res?.data ?? [])
    );
  }

  tradesCreatePreliminaryOffersForPrivateTrade2(params?: TradesCreatePreliminaryOffersForPrivateTrade2Params): Observable<void> {
    return this._api.tradesCreatePreliminaryOffersForPrivateTrade2(tradesCreatePreliminaryOffersForPrivateTrade2Adapter(params)).pipe(
      map((res) => void 0)
    );
  }

  tradesCreateTradeFromPlanLots(params?: TradesCreateTradeFromPlanLotsParams): Observable<number> {
    return this._api.tradesCreateTradeFromPlanLots(tradesCreateTradeFromPlanLotsAdapter(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  tradesDeleteDealSigner(params: TradesDeleteDealSignerParams): Observable<void> {
    return this._api.tradesDeleteDealSigner(tradesDeleteDealSignerAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

  tradesDeleteTradeDraft(params: TradesDeleteTradeDraftParams): Observable<boolean> {
    return this._api.tradesDeleteTradeDraft(tradesDeleteTradeDraftAdapter(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  tradesDisableSupplierMessages(params: TradesDisableSupplierMessagesParams): Observable<Blob> {
    return this._api.tradesDisableSupplierMessages(tradesDisableSupplierMessagesAdapter(params));
  }

  tradesEditPublished(params?: TradesEditPublishedParams): Observable<number> {
    return this._api.tradesEditPublished(tradesEditPublishedAdapter(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  tradesEditPublishedFromEis(params?: TradesEditPublishedFromEisParams): Observable<number> {
    return this._api.tradesEditPublishedFromEis(tradesEditPublishedFromEisAdapter(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  tradesEnableSupplierMessages(params: TradesEnableSupplierMessagesParams): Observable<Blob> {
    return this._api.tradesEnableSupplierMessages(tradesEnableSupplierMessagesAdapter(params));
  }

  tradesExternalSearch(params?: TradesExternalSearchParams): Observable<MarketPaginationResult<MarketSearchResult[]>> {
    return this._api.tradesExternalSearch(tradesExternalSearchAdapter(params)).pipe(
      map((res) => marketPaginationResultOfListOfMarketSearchResultAdapter(res?.data))
    );
  }

  tradesFinishReviewApplication(params: TradesFinishReviewApplicationParams): Observable<boolean> {
    return this._api.tradesFinishReviewApplication(tradesFinishReviewApplicationAdapter(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  tradesFinishReviewApplicationExternal(params: TradesFinishReviewApplicationExternalParams): Observable<boolean> {
    return this._api.tradesFinishReviewApplicationExternal(tradesFinishReviewApplicationExternalAdapter(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  tradesGenerateTradeProtocol(params?: TradesGenerateTradeProtocolParams): Observable<string> {
    return this._api.tradesGenerateTradeProtocol(tradesGenerateTradeProtocolAdapter(params)).pipe(
      map((res) => res?.data ?? '')
    );
  }

  tradesGetAllChatItems(params: TradesGetAllChatItemsParams): Observable<Discussion[]> {
    return this._api.tradesGetAllChatItems(tradesGetAllChatItemsAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => discussionAdapter(item)))
    );
  }

  tradesGetApplicationDeclaration(params?: TradesGetApplicationDeclarationParams): Observable<ApplicationDocument> {
    return this._api.tradesGetApplicationDeclaration(tradesGetApplicationDeclarationAdapter(params)).pipe(
      map((res) => applicationDocumentAdapter(res?.data))
    );
  }

  tradesGetApplicationInfo(params: TradesGetApplicationInfoParams): Observable<ApplicationDto2> {
    return this._api.tradesGetApplicationInfo(tradesGetApplicationInfoAdapter(params)).pipe(
      map((res) => applicationDto2Adapter(res?.data))
    );
  }

  tradesGetApplicationPriceShortInfo(params: TradesGetApplicationPriceShortInfoParams): Observable<ApplicationPriceShortInfo> {
    return this._api.tradesGetApplicationPriceShortInfo(tradesGetApplicationPriceShortInfoAdapter(params)).pipe(
      map((res) => applicationPriceShortInfoAdapter(res))
    );
  }

  tradesGetApplicationProductsImportTemplate(params: TradesGetApplicationProductsImportTemplateParams): Observable<string> {
    return this._api.tradesGetApplicationProductsImportTemplate(tradesGetApplicationProductsImportTemplateAdapter(params)).pipe(
      map((res) => res?.data ?? '')
    );
  }

  tradesGetApplicationProductsInfoFromImportTemplate(params: TradesGetApplicationProductsInfoFromImportTemplateParams): Observable<ImportApplicationProductsResponseAlt> {
    return this._api.tradesGetApplicationProductsInfoFromImportTemplate(tradesGetApplicationProductsInfoFromImportTemplateAdapter(params)).pipe(
      map((res) => importApplicationProductsResponseAltAdapter(res?.data))
    );
  }

  tradesGetApplicationsArchive(params: TradesGetApplicationsArchiveParams): Observable<void> {
    return this._api.tradesGetApplicationsArchive(tradesGetApplicationsArchiveAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

  tradesGetApplicationsByTradeId(params: TradesGetApplicationsByTradeIdParams): Observable<MarketApplicationDetailAlt[]> {
    return this._api.tradesGetApplicationsByTradeId(tradesGetApplicationsByTradeIdAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => marketApplicationDetailAltAdapter(item)))
    );
  }

  tradesGetArchiveDocuments(params: TradesGetArchiveDocumentsParams): Observable<Blob> {
    return this._api.tradesGetArchiveDocuments(tradesGetArchiveDocumentsAdapter(params));
  }

  tradesGetCardPaymentAvailability(params: TradesGetCardPaymentAvailabilityParams): Observable<CardPaymentAvailabilityAlt> {
    return this._api.tradesGetCardPaymentAvailability(tradesGetCardPaymentAvailabilityAdapter(params)).pipe(
      map((res) => cardPaymentAvailabilityAltAdapter(res?.data))
    );
  }

  tradesGetCharacteristicsByTradeIdAsFile(params: TradesGetCharacteristicsByTradeIdAsFileParams): Observable<Blob> {
    return this._api.tradesGetCharacteristicsByTradeIdAsFile(tradesGetCharacteristicsByTradeIdAsFileAdapter(params));
  }

  tradesGetChat(params: TradesGetChatParams): Observable<Discussion[]> {
    return this._api.tradesGetChat(tradesGetChatAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => discussionAdapter(item)))
    );
  }

  tradesGetChatFiles(params: TradesGetChatFilesParams): Observable<DiscussionFile[]> {
    return this._api.tradesGetChatFiles(tradesGetChatFilesAdapter(params)).pipe(
      map((res) => (res ?? []).map((item) => discussionFileAdapter(item)))
    );
  }

  tradesGetChatItems(params: TradesGetChatItemsParams): Observable<Discussion[]> {
    return this._api.tradesGetChatItems(tradesGetChatItemsAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => discussionAdapter(item)))
    );
  }

  tradesGetChats(params: TradesGetChatsParams): Observable<{ [key: string]: string }> {
    return this._api.tradesGetChats(tradesGetChatsAdapter(params)).pipe(
      map((res) => Object.keys((res?.data ?? {})).reduce((acc, key) => { const value = (res?.data ?? {})[key]; acc[key] = value; return acc; }, {} as { [key: string]: string }))
    );
  }

  tradesGetChatsUnreadItems(params: TradesGetChatsUnreadItemsParams): Observable<{ [key: string]: number }> {
    return this._api.tradesGetChatsUnreadItems(tradesGetChatsUnreadItemsAdapter(params)).pipe(
      map((res) => Object.keys((res?.data ?? {})).reduce((acc, key) => { const value = (res?.data ?? {})[key]; acc[key] = value; return acc; }, {} as { [key: string]: number }))
    );
  }

  tradesGetCompetitiveListReport(params: TradesGetCompetitiveListReportParams): Observable<void> {
    return this._api.tradesGetCompetitiveListReport(tradesGetCompetitiveListReportAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

  tradesGetConsiderationProtocol(params: TradesGetConsiderationProtocolParams): Observable<CustomerComissionProtocolWithDocs> {
    return this._api.tradesGetConsiderationProtocol(tradesGetConsiderationProtocolAdapter(params)).pipe(
      map((res) => customerComissionProtocolWithDocsAdapter(res?.data))
    );
  }

  tradesGetCreateApplicationFormTemplateSettings(params: TradesGetCreateApplicationFormTemplateSettingsParams): Observable<FormTemplate> {
    return this._api.tradesGetCreateApplicationFormTemplateSettings(tradesGetCreateApplicationFormTemplateSettingsAdapter(params)).pipe(
      map((res) => formTemplateAdapter(res?.data))
    );
  }

  tradesGetCustomerChats(params: TradesGetCustomerChatsParams): Observable<DiscussionTitle[]> {
    return this._api.tradesGetCustomerChats(tradesGetCustomerChatsAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => discussionTitleAdapter(item)))
    );
  }

  tradesGetCustomerSignerList(params?: TradesGetCustomerSignerListParams): Observable<MarketTradePersonAlt[]> {
    return this._api.tradesGetCustomerSignerList(tradesGetCustomerSignerListAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => marketTradePersonAltAdapter(item)))
    );
  }

  tradesGetDealsList(params?: TradesGetDealsListParams): Observable<MarketPaginationResult<MarketDealAlt[]>> {
    return this._api.tradesGetDealsList(tradesGetDealsListAdapter(params)).pipe(
      map((res) => marketPaginationResultOfListOfMarketDealAltAdapter(res?.data))
    );
  }

  tradesGetFiles(params: TradesGetFilesParams): Observable<AllTradeDocuments> {
    return this._api.tradesGetFiles(tradesGetFilesAdapter(params)).pipe(
      map((res) => allTradeDocumentsAdapter(res?.data))
    );
  }

  tradesGetImportTemplateGuidByTenant(params?: TradesGetImportTemplateGuidByTenantParams): Observable<string> {
    return this._api.tradesGetImportTemplateGuidByTenant(tradesGetImportTemplateGuidByTenantAdapter(params)).pipe(
      map((res) => res?.data ?? '')
    );
  }

  tradesGetLastChatItems(params: TradesGetLastChatItemsParams): Observable<Discussion[]> {
    return this._api.tradesGetLastChatItems(tradesGetLastChatItemsAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => discussionAdapter(item)))
    );
  }

  tradesGetReadItemInfo(params: TradesGetReadItemInfoParams): Observable<{ [key: string]: ReadItemInfoAlt[] }> {
    return this._api.tradesGetReadItemInfo(tradesGetReadItemInfoAdapter(params)).pipe(
      map((res) => Object.keys((res?.data ?? {})).reduce((acc, key) => { const value = (res?.data ?? {})[key]; acc[key] = (value ?? []).map((item) => readItemInfoAltAdapter(item)); return acc; }, {} as { [key: string]: ReadItemInfoAlt[] }))
    );
  }

  tradesGetSpecificationsByParticipants(params: TradesGetSpecificationsByParticipantsParams): Observable<void> {
    return this._api.tradesGetSpecificationsByParticipants(tradesGetSpecificationsByParticipantsAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

  tradesGetTenantIdByTrade(params: TradesGetTenantIdByTradeParams): Observable<number> {
    return this._api.tradesGetTenantIdByTrade(tradesGetTenantIdByTradeAdapter(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  tradesGetTenderTenant(params: TradesGetTenderTenantParams): Observable<number[]> {
    return this._api.tradesGetTenderTenant(tradesGetTenderTenantAdapter(params)).pipe(
      map((res) => res?.data ?? [])
    );
  }

  tradesGetTradeCharacteristics(params: TradesGetTradeCharacteristicsParams): Observable<Characteristic[]> {
    return this._api.tradesGetTradeCharacteristics(tradesGetTradeCharacteristicsAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => characteristicAdapter(item)))
    );
  }

  tradesGetTradeCopy(params: TradesGetTradeCopyParams): Observable<TradePublishResultAlt> {
    return this._api.tradesGetTradeCopy(tradesGetTradeCopyAdapter(params)).pipe(
      map((res) => tradePublishResultAltAdapter(res?.data))
    );
  }

  tradesGetTradeDiscussionHistory(params: TradesGetTradeDiscussionHistoryParams): Observable<IDiscussionHistory[]> {
    return this._api.tradesGetTradeDiscussionHistory(tradesGetTradeDiscussionHistoryAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => iDiscussionHistoryAdapter(item)))
    );
  }

  tradesGetTradeForEdit(params: TradesGetTradeForEditParams): Observable<TradeDto2> {
    return this._api.tradesGetTradeForEdit(tradesGetTradeForEditAdapter(params)).pipe(
      map((res) => tradeDto2Adapter(res?.data))
    );
  }

  tradesGetTradeForView(params: TradesGetTradeForViewParams): Observable<MarketTradeView> {
    return this._api.tradesGetTradeForView(tradesGetTradeForViewAdapter(params)).pipe(
      map((res) => marketTradeViewAdapter(res?.data))
    );
  }

  tradesGetTradeForViewByLot(params: TradesGetTradeForViewByLotParams): Observable<MarketTradeView> {
    return this._api.tradesGetTradeForViewByLot(tradesGetTradeForViewByLotAdapter(params)).pipe(
      map((res) => marketTradeViewAdapter(res?.data))
    );
  }

  tradesGetTradeRecommendations(params?: TradesGetTradeRecommendationsParams): Observable<MarketPaginationResult<TradeRecommendation[]>> {
    return this._api.tradesGetTradeRecommendations(tradesGetTradeRecommendationsAdapter(params)).pipe(
      map((res) => marketPaginationResultOfListOfTradeRecommendationAdapter(res?.data))
    );
  }

  tradesGetUnreadItems(params: TradesGetUnreadItemsParams): Observable<DiscussionItem[]> {
    return this._api.tradesGetUnreadItems(tradesGetUnreadItemsAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => discussionItemAdapter(item)))
    );
  }

  tradesGetUnreadItemsCount(params: TradesGetUnreadItemsCountParams): Observable<number> {
    return this._api.tradesGetUnreadItemsCount(tradesGetUnreadItemsCountAdapter(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  tradesImportProductsFromExcelWithGuid(params?: TradesImportProductsFromExcelWithGuidParams): Observable<ImportExcelProductResponseAlt> {
    return this._api.tradesImportProductsFromExcelWithGuid(tradesImportProductsFromExcelWithGuidAdapter(params)).pipe(
      map((res) => importExcelProductResponseAltAdapter(res?.data))
    );
  }

  tradesNoEisPublishConsiderationProtocol(params: TradesNoEisPublishConsiderationProtocolParams): Observable<Blob> {
    return this._api.tradesNoEisPublishConsiderationProtocol(tradesNoEisPublishConsiderationProtocolAdapter(params));
  }

  tradesPrepareTradeFromPlanLots(params: TradesPrepareTradeFromPlanLotsParams): Observable<TradeDto2> {
    return this._api.tradesPrepareTradeFromPlanLots(tradesPrepareTradeFromPlanLotsAdapter(params)).pipe(
      map((res) => tradeDto2Adapter(res?.data))
    );
  }

  tradesPublicLightSearch(params: TradesPublicLightSearchParams): Observable<MarketPaginationResult<MarketSearchResult[]>> {
    return this._api.tradesPublicLightSearch(tradesPublicLightSearchAdapter(params)).pipe(
      map((res) => marketPaginationResultOfListOfMarketSearchResultAdapter(res?.data))
    );
  }

  tradesPublicSearch2(params?: TradesPublicSearch2Params): Observable<MarketPaginationResult<MarketSearchResult[]>> {
    return this._api.tradesPublicSearch2(tradesPublicSearch2Adapter(params)).pipe(
      map((res) => marketPaginationResultOfListOfMarketSearchResultAdapter(res?.data))
    );
  }

  tradesPublish(params?: TradesPublishParams): Observable<PublishApplicationResultAlt> {
    return this._api.tradesPublish(tradesPublishAdapter(params)).pipe(
      map((res) => publishApplicationResultAltAdapter(res?.data))
    );
  }

  tradesPublish2(params?: TradesPublish2Params): Observable<TradePublishResultAlt> {
    return this._api.tradesPublish2(tradesPublish2Adapter(params)).pipe(
      map((res) => tradePublishResultAltAdapter(res?.data))
    );
  }

  tradesPublishById(params: TradesPublishByIdParams): Observable<TradePublishResultAlt> {
    return this._api.tradesPublishById(tradesPublishByIdAdapter(params)).pipe(
      map((res) => tradePublishResultAltAdapter(res?.data))
    );
  }

  tradesPublishConsiderationProtocol(params: TradesPublishConsiderationProtocolParams): Observable<Blob> {
    return this._api.tradesPublishConsiderationProtocol(tradesPublishConsiderationProtocolAdapter(params));
  }

  tradesPublishFromEis(params?: TradesPublishFromEisParams): Observable<TradePublishResultAlt> {
    return this._api.tradesPublishFromEis(tradesPublishFromEisAdapter(params)).pipe(
      map((res) => tradePublishResultAltAdapter(res?.data))
    );
  }

  tradesReadAllItemsFromId(params: TradesReadAllItemsFromIdParams): Observable<boolean> {
    return this._api.tradesReadAllItemsFromId(tradesReadAllItemsFromIdAdapter(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  tradesReadChatItemByIds(params: TradesReadChatItemByIdsParams): Observable<boolean> {
    return this._api.tradesReadChatItemByIds(tradesReadChatItemByIdsAdapter(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  tradesRegisterForTradeLot(params: TradesRegisterForTradeLotParams): Observable<void> {
    return this._api.tradesRegisterForTradeLot(tradesRegisterForTradeLotAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

  tradesRemoveApplicationDraft(params: TradesRemoveApplicationDraftParams): Observable<void> {
    return this._api.tradesRemoveApplicationDraft(tradesRemoveApplicationDraftAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

  tradesRetradingUpdate(params?: TradesRetradingUpdateParams): Observable<void> {
    return this._api.tradesRetradingUpdate(tradesRetradingUpdateAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

  tradesReturnTradeToFillingAppState(params?: TradesReturnTradeToFillingAppStateParams): Observable<void> {
    return this._api.tradesReturnTradeToFillingAppState(tradesReturnTradeToFillingAppStateAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

  tradesReturnTradeToReviewApplicaitons(params: TradesReturnTradeToReviewApplicaitonsParams): Observable<Blob> {
    return this._api.tradesReturnTradeToReviewApplicaitons(tradesReturnTradeToReviewApplicaitonsAdapter(params));
  }

  tradesRevokeApplication(params: TradesRevokeApplicationParams): Observable<void> {
    return this._api.tradesRevokeApplication(tradesRevokeApplicationAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

  tradesSaveApplicationDraft(params?: TradesSaveApplicationDraftParams): Observable<number> {
    return this._api.tradesSaveApplicationDraft(tradesSaveApplicationDraftAdapter(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  tradesSaveAsDraft(params?: TradesSaveAsDraftParams): Observable<TradePublishResultAlt> {
    return this._api.tradesSaveAsDraft(tradesSaveAsDraftAdapter(params)).pipe(
      map((res) => tradePublishResultAltAdapter(res?.data))
    );
  }

  tradesSaveContractSigner(params: TradesSaveContractSignerParams): Observable<void> {
    return this._api.tradesSaveContractSigner(tradesSaveContractSignerAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

  tradesSaveManufacturerCountryCodes(params?: TradesSaveManufacturerCountryCodesParams): Observable<number> {
    return this._api.tradesSaveManufacturerCountryCodes(tradesSaveManufacturerCountryCodesAdapter(params));
  }

  tradesSaveSupplierFromMmo(params: TradesSaveSupplierFromMmoParams): Observable<void> {
    return this._api.tradesSaveSupplierFromMmo(tradesSaveSupplierFromMmoAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

  tradesSearch(params?: TradesSearchParams): Observable<StarSearchObjAlt> {
    return this._api.tradesSearch(tradesSearchAdapter(params)).pipe(
      map((res) => starSearchObjAltAdapter(res?.data))
    );
  }

  tradesSendProtocolToEis(params?: TradesSendProtocolToEisParams): Observable<EisIntegrationResult> {
    return this._api.tradesSendProtocolToEis(tradesSendProtocolToEisAdapter(params)).pipe(
      map((res) => eisIntegrationResultAdapter(res?.data))
    );
  }

  tradesSendTradeCancelToEis(params: TradesSendTradeCancelToEisParams): Observable<EisIntegrationResult> {
    return this._api.tradesSendTradeCancelToEis(tradesSendTradeCancelToEisAdapter(params)).pipe(
      map((res) => eisIntegrationResultAdapter(res?.data))
    );
  }

  tradesSendTradeToEis(params?: TradesSendTradeToEisParams): Observable<EisIntegrationResult> {
    return this._api.tradesSendTradeToEis(tradesSendTradeToEisAdapter(params)).pipe(
      map((res) => eisIntegrationResultAdapter(res?.data))
    );
  }

  tradesSpeedUpPriceRequest(params: TradesSpeedUpPriceRequestParams): Observable<void> {
    return this._api.tradesSpeedUpPriceRequest(tradesSpeedUpPriceRequestAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

  tradesStarLightSearch(params?: TradesStarLightSearchParams): Observable<StarLightSearchResult> {
    return this._api.tradesStarLightSearch(tradesStarLightSearchAdapter(params)).pipe(
      map((res) => starLightSearchResultAdapter(res?.data))
    );
  }

  tradesSuggest(params: TradesSuggestParams): Observable<StarSuggestObjectAlt[]> {
    return this._api.tradesSuggest(tradesSuggestAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => starSuggestObjectAltAdapter(item)))
    );
  }

  tradesTurnSingleSupplierToPriceReuest(params: TradesTurnSingleSupplierToPriceReuestParams): Observable<Blob> {
    return this._api.tradesTurnSingleSupplierToPriceReuest(tradesTurnSingleSupplierToPriceReuestAdapter(params));
  }

  tradesValidate(params?: TradesValidateParams): Observable<boolean> {
    return this._api.tradesValidate(tradesValidateAdapter(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  tradesValidateWorkgroupForSigner(params?: TradesValidateWorkgroupForSignerParams): Observable<boolean> {
    return this._api.tradesValidateWorkgroupForSigner(tradesValidateWorkgroupForSignerAdapter(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

}
