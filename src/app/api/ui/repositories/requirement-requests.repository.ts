import { adaptCharacteristicToUI } from '../adapters/toUI/characteristic.adapter';
import { adaptCompetitiveListMinPriceToUI } from '../adapters/toUI/competitive-list-min-price.adapter';
import { adaptDiscussionFileToUI } from '../adapters/toUI/discussion-file.adapter';
import { adaptDiscussionItemToUI } from '../adapters/toUI/discussion-item.adapter';
import { adaptDiscussionToUI } from '../adapters/toUI/discussion.adapter';
import { adaptEquivalentTableToUI } from '../adapters/toUI/equivalent-table.adapter';
import { adaptIdNameAltToUI } from '../adapters/toUI/id-name-alt.adapter';
import { adaptMemoryStreamAltToUI } from '../adapters/toUI/memory-stream-alt.adapter';
import { adaptOffersTableToUI } from '../adapters/toUI/offers-table.adapter';
import { adaptParticipantOfferItemToUI } from '../adapters/toUI/participant-offer-item.adapter';
import { adaptRequirementRequestForViewToUI } from '../adapters/toUI/requirement-request-for-view.adapter';
import { adaptRequirementRequestShortInfoToUI } from '../adapters/toUI/requirement-request-short-info.adapter';
import { adaptRequirementRequestsSearchResultToUI } from '../adapters/toUI/requirement-requests-search-result.adapter';
import { Characteristic } from '../models/characteristic.interface';
import { CompetitiveListMinPrice } from '../models/competitive-list-min-price.interface';
import { Discussion } from '../models/discussion.interface';
import { DiscussionFile } from '../models/discussion-file.interface';
import { DiscussionItem } from '../models/discussion-item.interface';
import { EquivalentTable } from '../models/equivalent-table.interface';
import { IdNameAlt } from '../models/id-name-alt.interface';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { MemoryStreamAlt } from '../models/memory-stream-alt.interface';
import { Observable } from 'rxjs';
import { OffersTable } from '../models/offers-table.interface';
import { ParticipantOfferItem } from '../models/participant-offer-item.interface';
import { ReadItemInfoAlt } from '../models/read-item-info-alt.interface';
import { RequirementRequestForView } from '../models/requirement-request-for-view.interface';
import { RequirementRequestsAddChatMessageParams, requirementRequestsAddChatMessageParamsAdapter } from './params/requirement-requests-add-chat-message.params';
import { RequirementRequestsApiService } from '../../swagger/services/requirement-requests-api.service';
import { RequirementRequestsApproveRequirementRequestCharacteristicParams, requirementRequestsApproveRequirementRequestCharacteristicParamsAdapter } from './params/requirement-requests-approve-requirement-request-characteristic.params';
import { RequirementRequestsCancelRequirementRequestParams, requirementRequestsCancelRequirementRequestParamsAdapter } from './params/requirement-requests-cancel-requirement-request.params';
import { RequirementRequestsCanUpdateParams, requirementRequestsCanUpdateParamsAdapter } from './params/requirement-requests-can-update.params';
import { RequirementRequestsCreateEquivalentTableParams, requirementRequestsCreateEquivalentTableParamsAdapter } from './params/requirement-requests-create-equivalent-table.params';
import { RequirementRequestsDownloadComparisonProtocolForCompetitiveListParams, requirementRequestsDownloadComparisonProtocolForCompetitiveListParamsAdapter } from './params/requirement-requests-download-comparison-protocol-for-competitive-list.params';
import { RequirementRequestsDownloadComparisonProtocolParams, requirementRequestsDownloadComparisonProtocolParamsAdapter } from './params/requirement-requests-download-comparison-protocol.params';
import { RequirementRequestsDownloadEquivalentTableParams, requirementRequestsDownloadEquivalentTableParamsAdapter } from './params/requirement-requests-download-equivalent-table.params';
import { RequirementRequestsGetCharacteristicsParams, requirementRequestsGetCharacteristicsParamsAdapter } from './params/requirement-requests-get-characteristics.params';
import { RequirementRequestsGetChatFilesParams, requirementRequestsGetChatFilesParamsAdapter } from './params/requirement-requests-get-chat-files.params';
import { RequirementRequestsGetChatItemsParams, requirementRequestsGetChatItemsParamsAdapter } from './params/requirement-requests-get-chat-items.params';
import { RequirementRequestsGetChatParams, requirementRequestsGetChatParamsAdapter } from './params/requirement-requests-get-chat.params';
import { RequirementRequestsGetChatsParams, requirementRequestsGetChatsParamsAdapter } from './params/requirement-requests-get-chats.params';
import { RequirementRequestsGetCompetitiveListMinPricesParams, requirementRequestsGetCompetitiveListMinPricesParamsAdapter } from './params/requirement-requests-get-competitive-list-min-prices.params';
import { RequirementRequestsGetEquivalentTableParams, requirementRequestsGetEquivalentTableParamsAdapter } from './params/requirement-requests-get-equivalent-table.params';
import { RequirementRequestsGetForViewParams, requirementRequestsGetForViewParamsAdapter } from './params/requirement-requests-get-for-view.params';
import { RequirementRequestsGetLastChatItemsParams, requirementRequestsGetLastChatItemsParamsAdapter } from './params/requirement-requests-get-last-chat-items.params';
import { RequirementRequestsGetPriceListsParams, requirementRequestsGetPriceListsParamsAdapter } from './params/requirement-requests-get-price-lists.params';
import { RequirementRequestsGetReadItemInfoParams, requirementRequestsGetReadItemInfoParamsAdapter } from './params/requirement-requests-get-read-item-info.params';
import { RequirementRequestsGetRequirementRequestCharacteristicTableByFilterParams, requirementRequestsGetRequirementRequestCharacteristicTableByFilterParamsAdapter } from './params/requirement-requests-get-requirement-request-characteristic-table-by-filter.params';
import { RequirementRequestsGetRequirementRequestsByOfferParams, requirementRequestsGetRequirementRequestsByOfferParamsAdapter } from './params/requirement-requests-get-requirement-requests-by-offer.params';
import { RequirementRequestsGetUnreadItemsCountParams, requirementRequestsGetUnreadItemsCountParamsAdapter } from './params/requirement-requests-get-unread-items-count.params';
import { RequirementRequestsGetUnreadItemsParams, requirementRequestsGetUnreadItemsParamsAdapter } from './params/requirement-requests-get-unread-items.params';
import { RequirementRequestShortInfo } from '../models/requirement-request-short-info.interface';
import { RequirementRequestsIsEquivalentTableExistParams, requirementRequestsIsEquivalentTableExistParamsAdapter } from './params/requirement-requests-is-equivalent-table-exist.params';
import { RequirementRequestsPublicSearchParams, requirementRequestsPublicSearchParamsAdapter } from './params/requirement-requests-public-search.params';
import { RequirementRequestsPublishParams, requirementRequestsPublishParamsAdapter } from './params/requirement-requests-publish.params';
import { RequirementRequestsReadAllItemsFromIdParams, requirementRequestsReadAllItemsFromIdParamsAdapter } from './params/requirement-requests-read-all-items-from-id.params';
import { RequirementRequestsReadChatItemByIdsParams, requirementRequestsReadChatItemByIdsParamsAdapter } from './params/requirement-requests-read-chat-item-by-ids.params';
import { RequirementRequestsRejectRequirementRequestCharacteristicParams, requirementRequestsRejectRequirementRequestCharacteristicParamsAdapter } from './params/requirement-requests-reject-requirement-request-characteristic.params';
import { RequirementRequestsSaveAsDraftParams, requirementRequestsSaveAsDraftParamsAdapter } from './params/requirement-requests-save-as-draft.params';
import { RequirementRequestsSearchParams, requirementRequestsSearchParamsAdapter } from './params/requirement-requests-search.params';
import { RequirementRequestsSearchResult } from '../models/requirement-requests-search-result.interface';
import { RequirementRequestsUpdateEquivalentTableParams, requirementRequestsUpdateEquivalentTableParamsAdapter } from './params/requirement-requests-update-equivalent-table.params';
import { RequirementRequestsUpdateRequirementRequestStatesParams, requirementRequestsUpdateRequirementRequestStatesParamsAdapter } from './params/requirement-requests-update-requirement-request-states.params';

@Injectable({ providedIn: 'root' })
export class RequirementRequestsRepository {
  private readonly _api = inject(RequirementRequestsApiService);

  requirementRequestsAddChatMessage(params: RequirementRequestsAddChatMessageParams): Observable<DiscussionItem> {
    return this._api.requirementRequestsAddChatMessage(requirementRequestsAddChatMessageParamsAdapter.adapt(params)).pipe(
      map((res) => adaptDiscussionItemToUI(res?.data))
    );
  }

  requirementRequestsApproveRequirementRequestCharacteristic(params: RequirementRequestsApproveRequirementRequestCharacteristicParams): Observable<Blob> {
    return this._api.requirementRequestsApproveRequirementRequestCharacteristic(requirementRequestsApproveRequirementRequestCharacteristicParamsAdapter.adapt(params));
  }

  requirementRequestsCancelRequirementRequest(params: RequirementRequestsCancelRequirementRequestParams): Observable<Blob> {
    return this._api.requirementRequestsCancelRequirementRequest(requirementRequestsCancelRequirementRequestParamsAdapter.adapt(params));
  }

  requirementRequestsCanUpdate(params: RequirementRequestsCanUpdateParams): Observable<boolean> {
    return this._api.requirementRequestsCanUpdate(requirementRequestsCanUpdateParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  requirementRequestsCreateEquivalentTable(params: RequirementRequestsCreateEquivalentTableParams): Observable<boolean> {
    return this._api.requirementRequestsCreateEquivalentTable(requirementRequestsCreateEquivalentTableParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  requirementRequestsDownloadComparisonProtocol(params: RequirementRequestsDownloadComparisonProtocolParams): Observable<MemoryStreamAlt> {
    return this._api.requirementRequestsDownloadComparisonProtocol(requirementRequestsDownloadComparisonProtocolParamsAdapter.adapt(params)).pipe(
      map((res) => adaptMemoryStreamAltToUI(res?.data))
    );
  }

  requirementRequestsDownloadComparisonProtocolForCompetitiveList(params: RequirementRequestsDownloadComparisonProtocolForCompetitiveListParams): Observable<MemoryStreamAlt> {
    return this._api.requirementRequestsDownloadComparisonProtocolForCompetitiveList(requirementRequestsDownloadComparisonProtocolForCompetitiveListParamsAdapter.adapt(params)).pipe(
      map((res) => adaptMemoryStreamAltToUI(res?.data))
    );
  }

  requirementRequestsDownloadEquivalentTable(params: RequirementRequestsDownloadEquivalentTableParams): Observable<MemoryStreamAlt> {
    return this._api.requirementRequestsDownloadEquivalentTable(requirementRequestsDownloadEquivalentTableParamsAdapter.adapt(params)).pipe(
      map((res) => adaptMemoryStreamAltToUI(res?.data))
    );
  }

  requirementRequestsGetCharacteristics(params: RequirementRequestsGetCharacteristicsParams): Observable<Characteristic[]> {
    return this._api.requirementRequestsGetCharacteristics(requirementRequestsGetCharacteristicsParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptCharacteristicToUI(item)))
    );
  }

  requirementRequestsGetChat(params: RequirementRequestsGetChatParams): Observable<Discussion> {
    return this._api.requirementRequestsGetChat(requirementRequestsGetChatParamsAdapter.adapt(params)).pipe(
      map((res) => adaptDiscussionToUI(res?.data))
    );
  }

  requirementRequestsGetChatFiles(params: RequirementRequestsGetChatFilesParams): Observable<DiscussionFile[]> {
    return this._api.requirementRequestsGetChatFiles(requirementRequestsGetChatFilesParamsAdapter.adapt(params)).pipe(
      map((res) => (res ?? []).map((item) => adaptDiscussionFileToUI(item)))
    );
  }

  requirementRequestsGetChatItems(params: RequirementRequestsGetChatItemsParams): Observable<Discussion[]> {
    return this._api.requirementRequestsGetChatItems(requirementRequestsGetChatItemsParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptDiscussionToUI(item)))
    );
  }

  requirementRequestsGetChats(params: RequirementRequestsGetChatsParams): Observable<IdNameAlt[]> {
    return this._api.requirementRequestsGetChats(requirementRequestsGetChatsParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptIdNameAltToUI(item)))
    );
  }

  requirementRequestsGetCompetitiveListMinPrices(params: RequirementRequestsGetCompetitiveListMinPricesParams): Observable<CompetitiveListMinPrice[]> {
    return this._api.requirementRequestsGetCompetitiveListMinPrices(requirementRequestsGetCompetitiveListMinPricesParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptCompetitiveListMinPriceToUI(item)))
    );
  }

  requirementRequestsGetEquivalentTable(params: RequirementRequestsGetEquivalentTableParams): Observable<EquivalentTable> {
    return this._api.requirementRequestsGetEquivalentTable(requirementRequestsGetEquivalentTableParamsAdapter.adapt(params)).pipe(
      map((res) => adaptEquivalentTableToUI(res?.data))
    );
  }

  requirementRequestsGetForView(params: RequirementRequestsGetForViewParams): Observable<RequirementRequestForView> {
    return this._api.requirementRequestsGetForView(requirementRequestsGetForViewParamsAdapter.adapt(params)).pipe(
      map((res) => adaptRequirementRequestForViewToUI(res?.data))
    );
  }

  requirementRequestsGetLastChatItems(params: RequirementRequestsGetLastChatItemsParams): Observable<Discussion> {
    return this._api.requirementRequestsGetLastChatItems(requirementRequestsGetLastChatItemsParamsAdapter.adapt(params)).pipe(
      map((res) => adaptDiscussionToUI(res?.data))
    );
  }

  requirementRequestsGetPriceLists(params: RequirementRequestsGetPriceListsParams): Observable<ParticipantOfferItem[]> {
    return this._api.requirementRequestsGetPriceLists(requirementRequestsGetPriceListsParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptParticipantOfferItemToUI(item)))
    );
  }

  requirementRequestsGetReadItemInfo(params: RequirementRequestsGetReadItemInfoParams): Observable<({ [key: string]: Array<ReadItemInfoAlt>> {
    return this._api.requirementRequestsGetReadItemInfo(requirementRequestsGetReadItemInfoParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data)
    );
  }

  requirementRequestsGetRequirementRequestCharacteristicTableByFilter(params?: RequirementRequestsGetRequirementRequestCharacteristicTableByFilterParams): Observable<OffersTable> {
    return this._api.requirementRequestsGetRequirementRequestCharacteristicTableByFilter(requirementRequestsGetRequirementRequestCharacteristicTableByFilterParamsAdapter.adapt(params)).pipe(
      map((res) => adaptOffersTableToUI(res?.data))
    );
  }

  requirementRequestsGetRequirementRequestsByOffer(params: RequirementRequestsGetRequirementRequestsByOfferParams): Observable<RequirementRequestShortInfo[]> {
    return this._api.requirementRequestsGetRequirementRequestsByOffer(requirementRequestsGetRequirementRequestsByOfferParamsAdapter.adapt(params)).pipe(
      map((res) => (res ?? []).map((item) => adaptRequirementRequestShortInfoToUI(item)))
    );
  }

  requirementRequestsGetUnreadItems(params: RequirementRequestsGetUnreadItemsParams): Observable<DiscussionItem[]> {
    return this._api.requirementRequestsGetUnreadItems(requirementRequestsGetUnreadItemsParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptDiscussionItemToUI(item)))
    );
  }

  requirementRequestsGetUnreadItemsCount(params: RequirementRequestsGetUnreadItemsCountParams): Observable<number> {
    return this._api.requirementRequestsGetUnreadItemsCount(requirementRequestsGetUnreadItemsCountParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  requirementRequestsIsEquivalentTableExist(params: RequirementRequestsIsEquivalentTableExistParams): Observable<boolean> {
    return this._api.requirementRequestsIsEquivalentTableExist(requirementRequestsIsEquivalentTableExistParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  requirementRequestsPublicSearch(params?: RequirementRequestsPublicSearchParams): Observable<RequirementRequestsSearchResult[]> {
    return this._api.requirementRequestsPublicSearch(requirementRequestsPublicSearchParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data?.items ?? []).map((item) => adaptRequirementRequestsSearchResultToUI(item)))
    );
  }

  requirementRequestsPublish(params?: RequirementRequestsPublishParams): Observable<number> {
    return this._api.requirementRequestsPublish(requirementRequestsPublishParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  requirementRequestsReadAllItemsFromId(params: RequirementRequestsReadAllItemsFromIdParams): Observable<boolean> {
    return this._api.requirementRequestsReadAllItemsFromId(requirementRequestsReadAllItemsFromIdParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  requirementRequestsReadChatItemByIds(params: RequirementRequestsReadChatItemByIdsParams): Observable<boolean> {
    return this._api.requirementRequestsReadChatItemByIds(requirementRequestsReadChatItemByIdsParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  requirementRequestsRejectRequirementRequestCharacteristic(params: RequirementRequestsRejectRequirementRequestCharacteristicParams): Observable<Blob> {
    return this._api.requirementRequestsRejectRequirementRequestCharacteristic(requirementRequestsRejectRequirementRequestCharacteristicParamsAdapter.adapt(params));
  }

  requirementRequestsSaveAsDraft(params?: RequirementRequestsSaveAsDraftParams): Observable<number> {
    return this._api.requirementRequestsSaveAsDraft(requirementRequestsSaveAsDraftParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  requirementRequestsSearch(params?: RequirementRequestsSearchParams): Observable<RequirementRequestsSearchResult[]> {
    return this._api.requirementRequestsSearch(requirementRequestsSearchParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data?.items ?? []).map((item) => adaptRequirementRequestsSearchResultToUI(item)))
    );
  }

  requirementRequestsUpdateEquivalentTable(params: RequirementRequestsUpdateEquivalentTableParams): Observable<boolean> {
    return this._api.requirementRequestsUpdateEquivalentTable(requirementRequestsUpdateEquivalentTableParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  requirementRequestsUpdateRequirementRequestStates(params?: RequirementRequestsUpdateRequirementRequestStatesParams): Observable<Blob> {
    return this._api.requirementRequestsUpdateRequirementRequestStates(requirementRequestsUpdateRequirementRequestStatesParamsAdapter.adapt(params));
  }

}
