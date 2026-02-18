import { adaptAllTradeDocumentsToUI } from '../adapters/toUI/all-trade-documents.adapter';
import { adaptApplicationDocumentToUI } from '../adapters/toUI/application-document.adapter';
import { adaptApplicationDto2ToUI } from '../adapters/toUI/application-dto-2.adapter';
import { adaptApplicationPriceShortInfoToUI } from '../adapters/toUI/application-price-short-info.adapter';
import { adaptCardPaymentAvailabilityAltToUI } from '../adapters/toUI/card-payment-availability-alt.adapter';
import { adaptCharacteristicToUI } from '../adapters/toUI/characteristic.adapter';
import { adaptCustomerComissionProtocolWithDocsToUI } from '../adapters/toUI/customer-comission-protocol-with-docs.adapter';
import { adaptDiscussionFileToUI } from '../adapters/toUI/discussion-file.adapter';
import { adaptDiscussionItemToUI } from '../adapters/toUI/discussion-item.adapter';
import { adaptDiscussionTitleToUI } from '../adapters/toUI/discussion-title.adapter';
import { adaptDiscussionToUI } from '../adapters/toUI/discussion.adapter';
import { adaptEisIntegrationResultToUI } from '../adapters/toUI/eis-integration-result.adapter';
import { adaptFormTemplateToUI } from '../adapters/toUI/form-template.adapter';
import { adaptIDiscussionHistoryToUI } from '../adapters/toUI/i-discussion-history.adapter';
import { adaptImportApplicationProductsResponseAltToUI } from '../adapters/toUI/import-application-products-response-alt.adapter';
import { adaptImportExcelProductResponseAltToUI } from '../adapters/toUI/import-excel-product-response-alt.adapter';
import { adaptMarketApplicationDetailAltToUI } from '../adapters/toUI/market-application-detail-alt.adapter';
import { adaptMarketDealAltToUI } from '../adapters/toUI/market-deal-alt.adapter';
import { adaptMarketSearchResultToUI } from '../adapters/toUI/market-search-result.adapter';
import { adaptMarketTradePersonAltToUI } from '../adapters/toUI/market-trade-person-alt.adapter';
import { adaptMarketTradeViewToUI } from '../adapters/toUI/market-trade-view.adapter';
import { adaptPriceReductionResponseAltToUI } from '../adapters/toUI/price-reduction-response-alt.adapter';
import { adaptPublishApplicationResultAltToUI } from '../adapters/toUI/publish-application-result-alt.adapter';
import { adaptStarLightSearchResultToUI } from '../adapters/toUI/star-light-search-result.adapter';
import { adaptStarSearchObjAltToUI } from '../adapters/toUI/star-search-obj-alt.adapter';
import { adaptStarSuggestObjectAltToUI } from '../adapters/toUI/star-suggest-object-alt.adapter';
import { adaptTradeDto2ToUI } from '../adapters/toUI/trade-dto-2.adapter';
import { adaptTradePublishResultAltToUI } from '../adapters/toUI/trade-publish-result-alt.adapter';
import { adaptTradeRecommendationToUI } from '../adapters/toUI/trade-recommendation.adapter';
import { AllTradeDocuments } from '../models/all-trade-documents.interface';
import { ApplicationDocument } from '../models/application-document.interface';
import { ApplicationDto2 } from '../models/application-dto-2.interface';
import { ApplicationPriceShortInfo } from '../models/application-price-short-info.interface';
import { CardPaymentAvailabilityAlt } from '../models/card-payment-availability-alt.interface';
import { Characteristic } from '../models/characteristic.interface';
import { CustomerComissionProtocolWithDocs } from '../models/customer-comission-protocol-with-docs.interface';
import { Discussion } from '../models/discussion.interface';
import { DiscussionFile } from '../models/discussion-file.interface';
import { DiscussionItem } from '../models/discussion-item.interface';
import { DiscussionTitle } from '../models/discussion-title.interface';
import { EisIntegrationResult } from '../models/eis-integration-result.interface';
import { FormTemplate } from '../models/form-template.interface';
import { IDiscussionHistory } from '../models/i-discussion-history.interface';
import { ImportApplicationProductsResponseAlt } from '../models/import-application-products-response-alt.interface';
import { ImportExcelProductResponseAlt } from '../models/import-excel-product-response-alt.interface';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { MarketApplicationDetailAlt } from '../models/market-application-detail-alt.interface';
import { MarketDealAlt } from '../models/market-deal-alt.interface';
import { MarketSearchResult } from '../models/market-search-result.interface';
import { MarketTradePersonAlt } from '../models/market-trade-person-alt.interface';
import { MarketTradeView } from '../models/market-trade-view.interface';
import { Observable } from 'rxjs';
import { PriceReductionResponseAlt } from '../models/price-reduction-response-alt.interface';
import { PublishApplicationResultAlt } from '../models/publish-application-result-alt.interface';
import { ReadItemInfoAlt } from '../models/read-item-info-alt.interface';
import { StarLightSearchResult } from '../models/star-light-search-result.interface';
import { StarSearchObjAlt } from '../models/star-search-obj-alt.interface';
import { StarSuggestObjectAlt } from '../models/star-suggest-object-alt.interface';
import { TradeDto2 } from '../models/trade-dto-2.interface';
import { TradePublishResultAlt } from '../models/trade-publish-result-alt.interface';
import { TradeRecommendation } from '../models/trade-recommendation.interface';
import { TradesAddChatMessageParams, tradesAddChatMessageParamsAdapter } from './params/trades-add-chat-message.params';
import { TradesAddCustomerDealCommentSystemMessageParams, tradesAddCustomerDealCommentSystemMessageParamsAdapter } from './params/trades-add-customer-deal-comment-system-message.params';
import { TradesAddDealSigningExpiredMessageParams, tradesAddDealSigningExpiredMessageParamsAdapter } from './params/trades-add-deal-signing-expired-message.params';
import { TradesAddMessageToChatParams, tradesAddMessageToChatParamsAdapter } from './params/trades-add-message-to-chat.params';
import { TradesAddMmoCreateDealSystemMessageParams, tradesAddMmoCreateDealSystemMessageParamsAdapter } from './params/trades-add-mmo-create-deal-system-message.params';
import { TradesAddMmoParticipantMissedSigningTimeSystemMessageParams, tradesAddMmoParticipantMissedSigningTimeSystemMessageParamsAdapter } from './params/trades-add-mmo-participant-missed-signing-time-system-message.params';
import { TradesAddMmoTradeFromDealNotSignedToFillingApplicationsSystemMessageParams, tradesAddMmoTradeFromDealNotSignedToFillingApplicationsSystemMessageParamsAdapter } from './params/trades-add-mmo-trade-from-deal-not-signed-to-filling-applications-system-message.params';
import { TradesAddMmoTradeFromDealSigningToDealNotSignedChatSystemMessageParams, tradesAddMmoTradeFromDealSigningToDealNotSignedChatSystemMessageParamsAdapter } from './params/trades-add-mmo-trade-from-deal-signing-to-deal-not-signed-chat-system-message.params';
import { TradesApiService } from '../../swagger/services/trades-api.service';
import { TradesBlockFinanceParams, tradesBlockFinanceParamsAdapter } from './params/trades-block-finance.params';
import { TradesCalculatePriceReductionParams, tradesCalculatePriceReductionParamsAdapter } from './params/trades-calculate-price-reduction.params';
import { TradesCancelTradeExternalParams, tradesCancelTradeExternalParamsAdapter } from './params/trades-cancel-trade-external.params';
import { TradesCancelTradeParams, tradesCancelTradeParamsAdapter } from './params/trades-cancel-trade.params';
import { TradesCloseTradeWithoutDealParams, tradesCloseTradeWithoutDealParamsAdapter } from './params/trades-close-trade-without-deal.params';
import { TradesCreateChatParams, tradesCreateChatParamsAdapter } from './params/trades-create-chat.params';
import { TradesCreateCustomerComissionProtocolParams, tradesCreateCustomerComissionProtocolParamsAdapter } from './params/trades-create-customer-comission-protocol.params';
import { TradesCreatePreliminaryOffers2Params, tradesCreatePreliminaryOffers2ParamsAdapter } from './params/trades-create-preliminary-offers-2.params';
import { TradesCreatePreliminaryOffersForPrivateTrade2Params, tradesCreatePreliminaryOffersForPrivateTrade2ParamsAdapter } from './params/trades-create-preliminary-offers-for-private-trade-2.params';
import { TradesCreatePreliminaryOffersForPrivateTradeParams, tradesCreatePreliminaryOffersForPrivateTradeParamsAdapter } from './params/trades-create-preliminary-offers-for-private-trade.params';
import { TradesCreatePreliminaryOffersParams, tradesCreatePreliminaryOffersParamsAdapter } from './params/trades-create-preliminary-offers.params';
import { TradesCreateTradeFromPlanLotsParams, tradesCreateTradeFromPlanLotsParamsAdapter } from './params/trades-create-trade-from-plan-lots.params';
import { TradesDeleteDealSignerParams, tradesDeleteDealSignerParamsAdapter } from './params/trades-delete-deal-signer.params';
import { TradesDeleteTradeDraftParams, tradesDeleteTradeDraftParamsAdapter } from './params/trades-delete-trade-draft.params';
import { TradesDisableSupplierMessagesParams, tradesDisableSupplierMessagesParamsAdapter } from './params/trades-disable-supplier-messages.params';
import { TradesEditPublishedFromEisParams, tradesEditPublishedFromEisParamsAdapter } from './params/trades-edit-published-from-eis.params';
import { TradesEditPublishedParams, tradesEditPublishedParamsAdapter } from './params/trades-edit-published.params';
import { TradesEnableSupplierMessagesParams, tradesEnableSupplierMessagesParamsAdapter } from './params/trades-enable-supplier-messages.params';
import { TradesExternalSearchParams, tradesExternalSearchParamsAdapter } from './params/trades-external-search.params';
import { TradesFinishReviewApplicationExternalParams, tradesFinishReviewApplicationExternalParamsAdapter } from './params/trades-finish-review-application-external.params';
import { TradesFinishReviewApplicationParams, tradesFinishReviewApplicationParamsAdapter } from './params/trades-finish-review-application.params';
import { TradesGenerateTradeProtocolParams, tradesGenerateTradeProtocolParamsAdapter } from './params/trades-generate-trade-protocol.params';
import { TradesGetAllChatItemsParams, tradesGetAllChatItemsParamsAdapter } from './params/trades-get-all-chat-items.params';
import { TradesGetApplicationDeclarationParams, tradesGetApplicationDeclarationParamsAdapter } from './params/trades-get-application-declaration.params';
import { TradesGetApplicationInfoParams, tradesGetApplicationInfoParamsAdapter } from './params/trades-get-application-info.params';
import { TradesGetApplicationPriceShortInfoParams, tradesGetApplicationPriceShortInfoParamsAdapter } from './params/trades-get-application-price-short-info.params';
import { TradesGetApplicationProductsImportTemplateParams, tradesGetApplicationProductsImportTemplateParamsAdapter } from './params/trades-get-application-products-import-template.params';
import { TradesGetApplicationProductsInfoFromImportTemplateParams, tradesGetApplicationProductsInfoFromImportTemplateParamsAdapter } from './params/trades-get-application-products-info-from-import-template.params';
import { TradesGetApplicationsArchiveParams, tradesGetApplicationsArchiveParamsAdapter } from './params/trades-get-applications-archive.params';
import { TradesGetApplicationsByTradeIdParams, tradesGetApplicationsByTradeIdParamsAdapter } from './params/trades-get-applications-by-trade-id.params';
import { TradesGetArchiveDocumentsParams, tradesGetArchiveDocumentsParamsAdapter } from './params/trades-get-archive-documents.params';
import { TradesGetCardPaymentAvailabilityParams, tradesGetCardPaymentAvailabilityParamsAdapter } from './params/trades-get-card-payment-availability.params';
import { TradesGetCharacteristicsByTradeIdAsFileParams, tradesGetCharacteristicsByTradeIdAsFileParamsAdapter } from './params/trades-get-characteristics-by-trade-id-as-file.params';
import { TradesGetChatFilesParams, tradesGetChatFilesParamsAdapter } from './params/trades-get-chat-files.params';
import { TradesGetChatItemsParams, tradesGetChatItemsParamsAdapter } from './params/trades-get-chat-items.params';
import { TradesGetChatParams, tradesGetChatParamsAdapter } from './params/trades-get-chat.params';
import { TradesGetChatsParams, tradesGetChatsParamsAdapter } from './params/trades-get-chats.params';
import { TradesGetChatsUnreadItemsParams, tradesGetChatsUnreadItemsParamsAdapter } from './params/trades-get-chats-unread-items.params';
import { TradesGetCompetitiveListReportParams, tradesGetCompetitiveListReportParamsAdapter } from './params/trades-get-competitive-list-report.params';
import { TradesGetConsiderationProtocolParams, tradesGetConsiderationProtocolParamsAdapter } from './params/trades-get-consideration-protocol.params';
import { TradesGetCreateApplicationFormTemplateSettingsParams, tradesGetCreateApplicationFormTemplateSettingsParamsAdapter } from './params/trades-get-create-application-form-template-settings.params';
import { TradesGetCustomerChatsParams, tradesGetCustomerChatsParamsAdapter } from './params/trades-get-customer-chats.params';
import { TradesGetCustomerSignerListParams, tradesGetCustomerSignerListParamsAdapter } from './params/trades-get-customer-signer-list.params';
import { TradesGetDealsListParams, tradesGetDealsListParamsAdapter } from './params/trades-get-deals-list.params';
import { TradesGetFilesParams, tradesGetFilesParamsAdapter } from './params/trades-get-files.params';
import { TradesGetImportTemplateGuidByTenantParams, tradesGetImportTemplateGuidByTenantParamsAdapter } from './params/trades-get-import-template-guid-by-tenant.params';
import { TradesGetLastChatItemsParams, tradesGetLastChatItemsParamsAdapter } from './params/trades-get-last-chat-items.params';
import { TradesGetReadItemInfoParams, tradesGetReadItemInfoParamsAdapter } from './params/trades-get-read-item-info.params';
import { TradesGetSpecificationsByParticipantsParams, tradesGetSpecificationsByParticipantsParamsAdapter } from './params/trades-get-specifications-by-participants.params';
import { TradesGetTenantIdByTradeParams, tradesGetTenantIdByTradeParamsAdapter } from './params/trades-get-tenant-id-by-trade.params';
import { TradesGetTenderTenantParams, tradesGetTenderTenantParamsAdapter } from './params/trades-get-tender-tenant.params';
import { TradesGetTradeCharacteristicsParams, tradesGetTradeCharacteristicsParamsAdapter } from './params/trades-get-trade-characteristics.params';
import { TradesGetTradeCopyParams, tradesGetTradeCopyParamsAdapter } from './params/trades-get-trade-copy.params';
import { TradesGetTradeDiscussionHistoryParams, tradesGetTradeDiscussionHistoryParamsAdapter } from './params/trades-get-trade-discussion-history.params';
import { TradesGetTradeForEditParams, tradesGetTradeForEditParamsAdapter } from './params/trades-get-trade-for-edit.params';
import { TradesGetTradeForViewByLotParams, tradesGetTradeForViewByLotParamsAdapter } from './params/trades-get-trade-for-view-by-lot.params';
import { TradesGetTradeForViewParams, tradesGetTradeForViewParamsAdapter } from './params/trades-get-trade-for-view.params';
import { TradesGetTradeRecommendationsParams, tradesGetTradeRecommendationsParamsAdapter } from './params/trades-get-trade-recommendations.params';
import { TradesGetUnreadItemsCountParams, tradesGetUnreadItemsCountParamsAdapter } from './params/trades-get-unread-items-count.params';
import { TradesGetUnreadItemsParams, tradesGetUnreadItemsParamsAdapter } from './params/trades-get-unread-items.params';
import { TradesImportProductsFromExcelWithGuidParams, tradesImportProductsFromExcelWithGuidParamsAdapter } from './params/trades-import-products-from-excel-with-guid.params';
import { TradesNoEisPublishConsiderationProtocolParams, tradesNoEisPublishConsiderationProtocolParamsAdapter } from './params/trades-no-eis-publish-consideration-protocol.params';
import { TradesPrepareTradeFromPlanLotsParams, tradesPrepareTradeFromPlanLotsParamsAdapter } from './params/trades-prepare-trade-from-plan-lots.params';
import { TradesPublicLightSearchParams, tradesPublicLightSearchParamsAdapter } from './params/trades-public-light-search.params';
import { TradesPublicSearch2Params, tradesPublicSearch2ParamsAdapter } from './params/trades-public-search-2.params';
import { TradesPublish2Params, tradesPublish2ParamsAdapter } from './params/trades-publish-2.params';
import { TradesPublishByIdParams, tradesPublishByIdParamsAdapter } from './params/trades-publish-by-id.params';
import { TradesPublishConsiderationProtocolParams, tradesPublishConsiderationProtocolParamsAdapter } from './params/trades-publish-consideration-protocol.params';
import { TradesPublishFromEisParams, tradesPublishFromEisParamsAdapter } from './params/trades-publish-from-eis.params';
import { TradesPublishParams, tradesPublishParamsAdapter } from './params/trades-publish.params';
import { TradesReadAllItemsFromIdParams, tradesReadAllItemsFromIdParamsAdapter } from './params/trades-read-all-items-from-id.params';
import { TradesReadChatItemByIdsParams, tradesReadChatItemByIdsParamsAdapter } from './params/trades-read-chat-item-by-ids.params';
import { TradesRegisterForTradeLotParams, tradesRegisterForTradeLotParamsAdapter } from './params/trades-register-for-trade-lot.params';
import { TradesRemoveApplicationDraftParams, tradesRemoveApplicationDraftParamsAdapter } from './params/trades-remove-application-draft.params';
import { TradesRetradingUpdateParams, tradesRetradingUpdateParamsAdapter } from './params/trades-retrading-update.params';
import { TradesReturnTradeToFillingAppStateParams, tradesReturnTradeToFillingAppStateParamsAdapter } from './params/trades-return-trade-to-filling-app-state.params';
import { TradesReturnTradeToReviewApplicaitonsParams, tradesReturnTradeToReviewApplicaitonsParamsAdapter } from './params/trades-return-trade-to-review-applicaitons.params';
import { TradesRevokeApplicationParams, tradesRevokeApplicationParamsAdapter } from './params/trades-revoke-application.params';
import { TradesSaveApplicationDraftParams, tradesSaveApplicationDraftParamsAdapter } from './params/trades-save-application-draft.params';
import { TradesSaveAsDraftParams, tradesSaveAsDraftParamsAdapter } from './params/trades-save-as-draft.params';
import { TradesSaveContractSignerParams, tradesSaveContractSignerParamsAdapter } from './params/trades-save-contract-signer.params';
import { TradesSaveManufacturerCountryCodesParams, tradesSaveManufacturerCountryCodesParamsAdapter } from './params/trades-save-manufacturer-country-codes.params';
import { TradesSaveSupplierFromMmoParams, tradesSaveSupplierFromMmoParamsAdapter } from './params/trades-save-supplier-from-mmo.params';
import { TradesSearchParams, tradesSearchParamsAdapter } from './params/trades-search.params';
import { TradesSendProtocolToEisParams, tradesSendProtocolToEisParamsAdapter } from './params/trades-send-protocol-to-eis.params';
import { TradesSendTradeCancelToEisParams, tradesSendTradeCancelToEisParamsAdapter } from './params/trades-send-trade-cancel-to-eis.params';
import { TradesSendTradeToEisParams, tradesSendTradeToEisParamsAdapter } from './params/trades-send-trade-to-eis.params';
import { TradesSpeedUpPriceRequestParams, tradesSpeedUpPriceRequestParamsAdapter } from './params/trades-speed-up-price-request.params';
import { TradesStarLightSearchParams, tradesStarLightSearchParamsAdapter } from './params/trades-star-light-search.params';
import { TradesSuggestParams, tradesSuggestParamsAdapter } from './params/trades-suggest.params';
import { TradesTurnSingleSupplierToPriceReuestParams, tradesTurnSingleSupplierToPriceReuestParamsAdapter } from './params/trades-turn-single-supplier-to-price-reuest.params';
import { TradesValidateParams, tradesValidateParamsAdapter } from './params/trades-validate.params';
import { TradesValidateWorkgroupForSignerParams, tradesValidateWorkgroupForSignerParamsAdapter } from './params/trades-validate-workgroup-for-signer.params';

@Injectable({ providedIn: 'root' })
export class TradesRepository {
  private readonly _api = inject(TradesApiService);

  tradesAddChatMessage(params: TradesAddChatMessageParams): Observable<DiscussionItem> {
    return this._api.tradesAddChatMessage(tradesAddChatMessageParamsAdapter.adapt(params)).pipe(
      map((res) => adaptDiscussionItemToUI(res?.data))
    );
  }

  tradesAddCustomerDealCommentSystemMessage(params: TradesAddCustomerDealCommentSystemMessageParams): Observable<number> {
    return this._api.tradesAddCustomerDealCommentSystemMessage(tradesAddCustomerDealCommentSystemMessageParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  tradesAddDealSigningExpiredMessage(params?: TradesAddDealSigningExpiredMessageParams): Observable<Blob> {
    return this._api.tradesAddDealSigningExpiredMessage(tradesAddDealSigningExpiredMessageParamsAdapter.adapt(params));
  }

  tradesAddMessageToChat(params: TradesAddMessageToChatParams): Observable<number> {
    return this._api.tradesAddMessageToChat(tradesAddMessageToChatParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  tradesAddMmoCreateDealSystemMessage(params: TradesAddMmoCreateDealSystemMessageParams): Observable<Blob> {
    return this._api.tradesAddMmoCreateDealSystemMessage(tradesAddMmoCreateDealSystemMessageParamsAdapter.adapt(params));
  }

  tradesAddMmoParticipantMissedSigningTimeSystemMessage(params: TradesAddMmoParticipantMissedSigningTimeSystemMessageParams): Observable<Blob> {
    return this._api.tradesAddMmoParticipantMissedSigningTimeSystemMessage(tradesAddMmoParticipantMissedSigningTimeSystemMessageParamsAdapter.adapt(params));
  }

  tradesAddMmoTradeFromDealNotSignedToFillingApplicationsSystemMessage(params: TradesAddMmoTradeFromDealNotSignedToFillingApplicationsSystemMessageParams): Observable<Blob> {
    return this._api.tradesAddMmoTradeFromDealNotSignedToFillingApplicationsSystemMessage(tradesAddMmoTradeFromDealNotSignedToFillingApplicationsSystemMessageParamsAdapter.adapt(params));
  }

  tradesAddMmoTradeFromDealSigningToDealNotSignedChatSystemMessage(params: TradesAddMmoTradeFromDealSigningToDealNotSignedChatSystemMessageParams): Observable<Blob> {
    return this._api.tradesAddMmoTradeFromDealSigningToDealNotSignedChatSystemMessage(tradesAddMmoTradeFromDealSigningToDealNotSignedChatSystemMessageParamsAdapter.adapt(params));
  }

  tradesBlockFinance(params?: TradesBlockFinanceParams): Observable<PublishApplicationResultAlt> {
    return this._api.tradesBlockFinance(tradesBlockFinanceParamsAdapter.adapt(params)).pipe(
      map((res) => adaptPublishApplicationResultAltToUI(res?.data))
    );
  }

  tradesCalculatePriceReduction(params?: TradesCalculatePriceReductionParams): Observable<PriceReductionResponseAlt> {
    return this._api.tradesCalculatePriceReduction(tradesCalculatePriceReductionParamsAdapter.adapt(params)).pipe(
      map((res) => adaptPriceReductionResponseAltToUI(res?.data))
    );
  }

  tradesCancelTrade(params?: TradesCancelTradeParams): Observable<boolean> {
    return this._api.tradesCancelTrade(tradesCancelTradeParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  tradesCancelTradeExternal(params?: TradesCancelTradeExternalParams): Observable<boolean> {
    return this._api.tradesCancelTradeExternal(tradesCancelTradeExternalParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  tradesCloseTradeWithoutDeal(params: TradesCloseTradeWithoutDealParams): Observable<void> {
    return this._api.tradesCloseTradeWithoutDeal(tradesCloseTradeWithoutDealParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  tradesCreateChat(params: TradesCreateChatParams): Observable<number> {
    return this._api.tradesCreateChat(tradesCreateChatParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  tradesCreateCustomerComissionProtocol(params: TradesCreateCustomerComissionProtocolParams): Observable<Blob> {
    return this._api.tradesCreateCustomerComissionProtocol(tradesCreateCustomerComissionProtocolParamsAdapter.adapt(params));
  }

  tradesCreatePreliminaryOffers(params: TradesCreatePreliminaryOffersParams): Observable<number[]> {
    return this._api.tradesCreatePreliminaryOffers(tradesCreatePreliminaryOffersParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? [])
    );
  }

  tradesCreatePreliminaryOffers2(params: TradesCreatePreliminaryOffers2Params): Observable<number> {
    return this._api.tradesCreatePreliminaryOffers2(tradesCreatePreliminaryOffers2ParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  tradesCreatePreliminaryOffersForPrivateTrade(params: TradesCreatePreliminaryOffersForPrivateTradeParams): Observable<number[]> {
    return this._api.tradesCreatePreliminaryOffersForPrivateTrade(tradesCreatePreliminaryOffersForPrivateTradeParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? [])
    );
  }

  tradesCreatePreliminaryOffersForPrivateTrade2(params?: TradesCreatePreliminaryOffersForPrivateTrade2Params): Observable<void> {
    return this._api.tradesCreatePreliminaryOffersForPrivateTrade2(tradesCreatePreliminaryOffersForPrivateTrade2ParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  tradesCreateTradeFromPlanLots(params?: TradesCreateTradeFromPlanLotsParams): Observable<number> {
    return this._api.tradesCreateTradeFromPlanLots(tradesCreateTradeFromPlanLotsParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  tradesDeleteDealSigner(params: TradesDeleteDealSignerParams): Observable<void> {
    return this._api.tradesDeleteDealSigner(tradesDeleteDealSignerParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  tradesDeleteTradeDraft(params: TradesDeleteTradeDraftParams): Observable<boolean> {
    return this._api.tradesDeleteTradeDraft(tradesDeleteTradeDraftParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  tradesDisableSupplierMessages(params: TradesDisableSupplierMessagesParams): Observable<Blob> {
    return this._api.tradesDisableSupplierMessages(tradesDisableSupplierMessagesParamsAdapter.adapt(params));
  }

  tradesEditPublished(params?: TradesEditPublishedParams): Observable<number> {
    return this._api.tradesEditPublished(tradesEditPublishedParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  tradesEditPublishedFromEis(params?: TradesEditPublishedFromEisParams): Observable<number> {
    return this._api.tradesEditPublishedFromEis(tradesEditPublishedFromEisParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  tradesEnableSupplierMessages(params: TradesEnableSupplierMessagesParams): Observable<Blob> {
    return this._api.tradesEnableSupplierMessages(tradesEnableSupplierMessagesParamsAdapter.adapt(params));
  }

  tradesExternalSearch(params?: TradesExternalSearchParams): Observable<MarketSearchResult[]> {
    return this._api.tradesExternalSearch(tradesExternalSearchParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data?.items ?? []).map((item) => adaptMarketSearchResultToUI(item)))
    );
  }

  tradesFinishReviewApplication(params: TradesFinishReviewApplicationParams): Observable<boolean> {
    return this._api.tradesFinishReviewApplication(tradesFinishReviewApplicationParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  tradesFinishReviewApplicationExternal(params: TradesFinishReviewApplicationExternalParams): Observable<boolean> {
    return this._api.tradesFinishReviewApplicationExternal(tradesFinishReviewApplicationExternalParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  tradesGenerateTradeProtocol(params?: TradesGenerateTradeProtocolParams): Observable<string> {
    return this._api.tradesGenerateTradeProtocol(tradesGenerateTradeProtocolParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? '')
    );
  }

  tradesGetAllChatItems(params: TradesGetAllChatItemsParams): Observable<Discussion[]> {
    return this._api.tradesGetAllChatItems(tradesGetAllChatItemsParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptDiscussionToUI(item)))
    );
  }

  tradesGetApplicationDeclaration(params?: TradesGetApplicationDeclarationParams): Observable<ApplicationDocument> {
    return this._api.tradesGetApplicationDeclaration(tradesGetApplicationDeclarationParamsAdapter.adapt(params)).pipe(
      map((res) => adaptApplicationDocumentToUI(res?.data))
    );
  }

  tradesGetApplicationInfo(params: TradesGetApplicationInfoParams): Observable<ApplicationDto2> {
    return this._api.tradesGetApplicationInfo(tradesGetApplicationInfoParamsAdapter.adapt(params)).pipe(
      map((res) => adaptApplicationDto2ToUI(res?.data))
    );
  }

  tradesGetApplicationPriceShortInfo(params: TradesGetApplicationPriceShortInfoParams): Observable<ApplicationPriceShortInfo> {
    return this._api.tradesGetApplicationPriceShortInfo(tradesGetApplicationPriceShortInfoParamsAdapter.adapt(params)).pipe(
      map((res) => adaptApplicationPriceShortInfoToUI(res))
    );
  }

  tradesGetApplicationProductsImportTemplate(params: TradesGetApplicationProductsImportTemplateParams): Observable<string> {
    return this._api.tradesGetApplicationProductsImportTemplate(tradesGetApplicationProductsImportTemplateParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? '')
    );
  }

  tradesGetApplicationProductsInfoFromImportTemplate(params: TradesGetApplicationProductsInfoFromImportTemplateParams): Observable<ImportApplicationProductsResponseAlt> {
    return this._api.tradesGetApplicationProductsInfoFromImportTemplate(tradesGetApplicationProductsInfoFromImportTemplateParamsAdapter.adapt(params)).pipe(
      map((res) => adaptImportApplicationProductsResponseAltToUI(res?.data))
    );
  }

  tradesGetApplicationsArchive(params: TradesGetApplicationsArchiveParams): Observable<void> {
    return this._api.tradesGetApplicationsArchive(tradesGetApplicationsArchiveParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  tradesGetApplicationsByTradeId(params: TradesGetApplicationsByTradeIdParams): Observable<MarketApplicationDetailAlt[]> {
    return this._api.tradesGetApplicationsByTradeId(tradesGetApplicationsByTradeIdParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptMarketApplicationDetailAltToUI(item)))
    );
  }

  tradesGetArchiveDocuments(params: TradesGetArchiveDocumentsParams): Observable<Blob> {
    return this._api.tradesGetArchiveDocuments(tradesGetArchiveDocumentsParamsAdapter.adapt(params));
  }

  tradesGetCardPaymentAvailability(params: TradesGetCardPaymentAvailabilityParams): Observable<CardPaymentAvailabilityAlt> {
    return this._api.tradesGetCardPaymentAvailability(tradesGetCardPaymentAvailabilityParamsAdapter.adapt(params)).pipe(
      map((res) => adaptCardPaymentAvailabilityAltToUI(res?.data))
    );
  }

  tradesGetCharacteristicsByTradeIdAsFile(params: TradesGetCharacteristicsByTradeIdAsFileParams): Observable<Blob> {
    return this._api.tradesGetCharacteristicsByTradeIdAsFile(tradesGetCharacteristicsByTradeIdAsFileParamsAdapter.adapt(params));
  }

  tradesGetChat(params: TradesGetChatParams): Observable<Discussion[]> {
    return this._api.tradesGetChat(tradesGetChatParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptDiscussionToUI(item)))
    );
  }

  tradesGetChatFiles(params: TradesGetChatFilesParams): Observable<DiscussionFile[]> {
    return this._api.tradesGetChatFiles(tradesGetChatFilesParamsAdapter.adapt(params)).pipe(
      map((res) => (res ?? []).map((item) => adaptDiscussionFileToUI(item)))
    );
  }

  tradesGetChatItems(params: TradesGetChatItemsParams): Observable<Discussion[]> {
    return this._api.tradesGetChatItems(tradesGetChatItemsParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptDiscussionToUI(item)))
    );
  }

  tradesGetChats(params: TradesGetChatsParams): Observable<({ [key: string]: string> {
    return this._api.tradesGetChats(tradesGetChatsParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data)
    );
  }

  tradesGetChatsUnreadItems(params: TradesGetChatsUnreadItemsParams): Observable<({ [key: string]: number> {
    return this._api.tradesGetChatsUnreadItems(tradesGetChatsUnreadItemsParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data)
    );
  }

  tradesGetCompetitiveListReport(params: TradesGetCompetitiveListReportParams): Observable<void> {
    return this._api.tradesGetCompetitiveListReport(tradesGetCompetitiveListReportParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  tradesGetConsiderationProtocol(params: TradesGetConsiderationProtocolParams): Observable<CustomerComissionProtocolWithDocs> {
    return this._api.tradesGetConsiderationProtocol(tradesGetConsiderationProtocolParamsAdapter.adapt(params)).pipe(
      map((res) => adaptCustomerComissionProtocolWithDocsToUI(res?.data))
    );
  }

  tradesGetCreateApplicationFormTemplateSettings(params: TradesGetCreateApplicationFormTemplateSettingsParams): Observable<FormTemplate> {
    return this._api.tradesGetCreateApplicationFormTemplateSettings(tradesGetCreateApplicationFormTemplateSettingsParamsAdapter.adapt(params)).pipe(
      map((res) => adaptFormTemplateToUI(res?.data))
    );
  }

  tradesGetCustomerChats(params: TradesGetCustomerChatsParams): Observable<DiscussionTitle[]> {
    return this._api.tradesGetCustomerChats(tradesGetCustomerChatsParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptDiscussionTitleToUI(item)))
    );
  }

  tradesGetCustomerSignerList(params?: TradesGetCustomerSignerListParams): Observable<MarketTradePersonAlt[]> {
    return this._api.tradesGetCustomerSignerList(tradesGetCustomerSignerListParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptMarketTradePersonAltToUI(item)))
    );
  }

  tradesGetDealsList(params?: TradesGetDealsListParams): Observable<MarketDealAlt[]> {
    return this._api.tradesGetDealsList(tradesGetDealsListParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data?.items ?? []).map((item) => adaptMarketDealAltToUI(item)))
    );
  }

  tradesGetFiles(params: TradesGetFilesParams): Observable<AllTradeDocuments> {
    return this._api.tradesGetFiles(tradesGetFilesParamsAdapter.adapt(params)).pipe(
      map((res) => adaptAllTradeDocumentsToUI(res?.data))
    );
  }

  tradesGetImportTemplateGuidByTenant(params?: TradesGetImportTemplateGuidByTenantParams): Observable<string> {
    return this._api.tradesGetImportTemplateGuidByTenant(tradesGetImportTemplateGuidByTenantParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? '')
    );
  }

  tradesGetLastChatItems(params: TradesGetLastChatItemsParams): Observable<Discussion[]> {
    return this._api.tradesGetLastChatItems(tradesGetLastChatItemsParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptDiscussionToUI(item)))
    );
  }

  tradesGetReadItemInfo(params: TradesGetReadItemInfoParams): Observable<({ [key: string]: Array<ReadItemInfoAlt>> {
    return this._api.tradesGetReadItemInfo(tradesGetReadItemInfoParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data)
    );
  }

  tradesGetSpecificationsByParticipants(params: TradesGetSpecificationsByParticipantsParams): Observable<void> {
    return this._api.tradesGetSpecificationsByParticipants(tradesGetSpecificationsByParticipantsParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  tradesGetTenantIdByTrade(params: TradesGetTenantIdByTradeParams): Observable<number> {
    return this._api.tradesGetTenantIdByTrade(tradesGetTenantIdByTradeParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  tradesGetTenderTenant(params: TradesGetTenderTenantParams): Observable<number[]> {
    return this._api.tradesGetTenderTenant(tradesGetTenderTenantParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? [])
    );
  }

  tradesGetTradeCharacteristics(params: TradesGetTradeCharacteristicsParams): Observable<Characteristic[]> {
    return this._api.tradesGetTradeCharacteristics(tradesGetTradeCharacteristicsParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptCharacteristicToUI(item)))
    );
  }

  tradesGetTradeCopy(params: TradesGetTradeCopyParams): Observable<TradePublishResultAlt> {
    return this._api.tradesGetTradeCopy(tradesGetTradeCopyParamsAdapter.adapt(params)).pipe(
      map((res) => adaptTradePublishResultAltToUI(res?.data))
    );
  }

  tradesGetTradeDiscussionHistory(params: TradesGetTradeDiscussionHistoryParams): Observable<IDiscussionHistory[]> {
    return this._api.tradesGetTradeDiscussionHistory(tradesGetTradeDiscussionHistoryParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptIDiscussionHistoryToUI(item)))
    );
  }

  tradesGetTradeForEdit(params: TradesGetTradeForEditParams): Observable<TradeDto2> {
    return this._api.tradesGetTradeForEdit(tradesGetTradeForEditParamsAdapter.adapt(params)).pipe(
      map((res) => adaptTradeDto2ToUI(res?.data))
    );
  }

  tradesGetTradeForView(params: TradesGetTradeForViewParams): Observable<MarketTradeView> {
    return this._api.tradesGetTradeForView(tradesGetTradeForViewParamsAdapter.adapt(params)).pipe(
      map((res) => adaptMarketTradeViewToUI(res?.data))
    );
  }

  tradesGetTradeForViewByLot(params: TradesGetTradeForViewByLotParams): Observable<MarketTradeView> {
    return this._api.tradesGetTradeForViewByLot(tradesGetTradeForViewByLotParamsAdapter.adapt(params)).pipe(
      map((res) => adaptMarketTradeViewToUI(res?.data))
    );
  }

  tradesGetTradeRecommendations(params?: TradesGetTradeRecommendationsParams): Observable<TradeRecommendation[]> {
    return this._api.tradesGetTradeRecommendations(tradesGetTradeRecommendationsParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data?.items ?? []).map((item) => adaptTradeRecommendationToUI(item)))
    );
  }

  tradesGetUnreadItems(params: TradesGetUnreadItemsParams): Observable<DiscussionItem[]> {
    return this._api.tradesGetUnreadItems(tradesGetUnreadItemsParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptDiscussionItemToUI(item)))
    );
  }

  tradesGetUnreadItemsCount(params: TradesGetUnreadItemsCountParams): Observable<number> {
    return this._api.tradesGetUnreadItemsCount(tradesGetUnreadItemsCountParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  tradesImportProductsFromExcelWithGuid(params?: TradesImportProductsFromExcelWithGuidParams): Observable<ImportExcelProductResponseAlt> {
    return this._api.tradesImportProductsFromExcelWithGuid(tradesImportProductsFromExcelWithGuidParamsAdapter.adapt(params)).pipe(
      map((res) => adaptImportExcelProductResponseAltToUI(res?.data))
    );
  }

  tradesNoEisPublishConsiderationProtocol(params: TradesNoEisPublishConsiderationProtocolParams): Observable<Blob> {
    return this._api.tradesNoEisPublishConsiderationProtocol(tradesNoEisPublishConsiderationProtocolParamsAdapter.adapt(params));
  }

  tradesPrepareTradeFromPlanLots(params: TradesPrepareTradeFromPlanLotsParams): Observable<TradeDto2> {
    return this._api.tradesPrepareTradeFromPlanLots(tradesPrepareTradeFromPlanLotsParamsAdapter.adapt(params)).pipe(
      map((res) => adaptTradeDto2ToUI(res?.data))
    );
  }

  tradesPublicLightSearch(params: TradesPublicLightSearchParams): Observable<MarketSearchResult[]> {
    return this._api.tradesPublicLightSearch(tradesPublicLightSearchParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data?.items ?? []).map((item) => adaptMarketSearchResultToUI(item)))
    );
  }

  tradesPublicSearch2(params?: TradesPublicSearch2Params): Observable<MarketSearchResult[]> {
    return this._api.tradesPublicSearch2(tradesPublicSearch2ParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data?.items ?? []).map((item) => adaptMarketSearchResultToUI(item)))
    );
  }

  tradesPublish(params?: TradesPublishParams): Observable<PublishApplicationResultAlt> {
    return this._api.tradesPublish(tradesPublishParamsAdapter.adapt(params)).pipe(
      map((res) => adaptPublishApplicationResultAltToUI(res?.data))
    );
  }

  tradesPublish2(params?: TradesPublish2Params): Observable<TradePublishResultAlt> {
    return this._api.tradesPublish2(tradesPublish2ParamsAdapter.adapt(params)).pipe(
      map((res) => adaptTradePublishResultAltToUI(res?.data))
    );
  }

  tradesPublishById(params: TradesPublishByIdParams): Observable<TradePublishResultAlt> {
    return this._api.tradesPublishById(tradesPublishByIdParamsAdapter.adapt(params)).pipe(
      map((res) => adaptTradePublishResultAltToUI(res?.data))
    );
  }

  tradesPublishConsiderationProtocol(params: TradesPublishConsiderationProtocolParams): Observable<Blob> {
    return this._api.tradesPublishConsiderationProtocol(tradesPublishConsiderationProtocolParamsAdapter.adapt(params));
  }

  tradesPublishFromEis(params?: TradesPublishFromEisParams): Observable<TradePublishResultAlt> {
    return this._api.tradesPublishFromEis(tradesPublishFromEisParamsAdapter.adapt(params)).pipe(
      map((res) => adaptTradePublishResultAltToUI(res?.data))
    );
  }

  tradesReadAllItemsFromId(params: TradesReadAllItemsFromIdParams): Observable<boolean> {
    return this._api.tradesReadAllItemsFromId(tradesReadAllItemsFromIdParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  tradesReadChatItemByIds(params: TradesReadChatItemByIdsParams): Observable<boolean> {
    return this._api.tradesReadChatItemByIds(tradesReadChatItemByIdsParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  tradesRegisterForTradeLot(params: TradesRegisterForTradeLotParams): Observable<void> {
    return this._api.tradesRegisterForTradeLot(tradesRegisterForTradeLotParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  tradesRemoveApplicationDraft(params: TradesRemoveApplicationDraftParams): Observable<void> {
    return this._api.tradesRemoveApplicationDraft(tradesRemoveApplicationDraftParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  tradesRetradingUpdate(params?: TradesRetradingUpdateParams): Observable<void> {
    return this._api.tradesRetradingUpdate(tradesRetradingUpdateParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  tradesReturnTradeToFillingAppState(params?: TradesReturnTradeToFillingAppStateParams): Observable<void> {
    return this._api.tradesReturnTradeToFillingAppState(tradesReturnTradeToFillingAppStateParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  tradesReturnTradeToReviewApplicaitons(params: TradesReturnTradeToReviewApplicaitonsParams): Observable<Blob> {
    return this._api.tradesReturnTradeToReviewApplicaitons(tradesReturnTradeToReviewApplicaitonsParamsAdapter.adapt(params));
  }

  tradesRevokeApplication(params: TradesRevokeApplicationParams): Observable<void> {
    return this._api.tradesRevokeApplication(tradesRevokeApplicationParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  tradesSaveApplicationDraft(params?: TradesSaveApplicationDraftParams): Observable<number> {
    return this._api.tradesSaveApplicationDraft(tradesSaveApplicationDraftParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  tradesSaveAsDraft(params?: TradesSaveAsDraftParams): Observable<TradePublishResultAlt> {
    return this._api.tradesSaveAsDraft(tradesSaveAsDraftParamsAdapter.adapt(params)).pipe(
      map((res) => adaptTradePublishResultAltToUI(res?.data))
    );
  }

  tradesSaveContractSigner(params: TradesSaveContractSignerParams): Observable<void> {
    return this._api.tradesSaveContractSigner(tradesSaveContractSignerParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  tradesSaveManufacturerCountryCodes(params?: TradesSaveManufacturerCountryCodesParams): Observable<number> {
    return this._api.tradesSaveManufacturerCountryCodes(tradesSaveManufacturerCountryCodesParamsAdapter.adapt(params));
  }

  tradesSaveSupplierFromMmo(params: TradesSaveSupplierFromMmoParams): Observable<void> {
    return this._api.tradesSaveSupplierFromMmo(tradesSaveSupplierFromMmoParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  tradesSearch(params?: TradesSearchParams): Observable<StarSearchObjAlt> {
    return this._api.tradesSearch(tradesSearchParamsAdapter.adapt(params)).pipe(
      map((res) => adaptStarSearchObjAltToUI(res?.data))
    );
  }

  tradesSendProtocolToEis(params?: TradesSendProtocolToEisParams): Observable<EisIntegrationResult> {
    return this._api.tradesSendProtocolToEis(tradesSendProtocolToEisParamsAdapter.adapt(params)).pipe(
      map((res) => adaptEisIntegrationResultToUI(res?.data))
    );
  }

  tradesSendTradeCancelToEis(params: TradesSendTradeCancelToEisParams): Observable<EisIntegrationResult> {
    return this._api.tradesSendTradeCancelToEis(tradesSendTradeCancelToEisParamsAdapter.adapt(params)).pipe(
      map((res) => adaptEisIntegrationResultToUI(res?.data))
    );
  }

  tradesSendTradeToEis(params?: TradesSendTradeToEisParams): Observable<EisIntegrationResult> {
    return this._api.tradesSendTradeToEis(tradesSendTradeToEisParamsAdapter.adapt(params)).pipe(
      map((res) => adaptEisIntegrationResultToUI(res?.data))
    );
  }

  tradesSpeedUpPriceRequest(params: TradesSpeedUpPriceRequestParams): Observable<void> {
    return this._api.tradesSpeedUpPriceRequest(tradesSpeedUpPriceRequestParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  tradesStarLightSearch(params?: TradesStarLightSearchParams): Observable<StarLightSearchResult> {
    return this._api.tradesStarLightSearch(tradesStarLightSearchParamsAdapter.adapt(params)).pipe(
      map((res) => adaptStarLightSearchResultToUI(res?.data))
    );
  }

  tradesSuggest(params: TradesSuggestParams): Observable<StarSuggestObjectAlt[]> {
    return this._api.tradesSuggest(tradesSuggestParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptStarSuggestObjectAltToUI(item)))
    );
  }

  tradesTurnSingleSupplierToPriceReuest(params: TradesTurnSingleSupplierToPriceReuestParams): Observable<Blob> {
    return this._api.tradesTurnSingleSupplierToPriceReuest(tradesTurnSingleSupplierToPriceReuestParamsAdapter.adapt(params));
  }

  tradesValidate(params?: TradesValidateParams): Observable<boolean> {
    return this._api.tradesValidate(tradesValidateParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  tradesValidateWorkgroupForSigner(params?: TradesValidateWorkgroupForSignerParams): Observable<boolean> {
    return this._api.tradesValidateWorkgroupForSigner(tradesValidateWorkgroupForSignerParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

}
