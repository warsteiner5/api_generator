import { Characteristic } from '../models/characteristic.interface';
import { characteristicAdapter } from '../adapters/models/characteristic.adapter';
import { CompetitiveListMinPrice } from '../models/competitive-list-min-price.interface';
import { competitiveListMinPriceAdapter } from '../adapters/models/competitive-list-min-price.adapter';
import { Discussion } from '../models/discussion.interface';
import { discussionAdapter } from '../adapters/models/discussion.adapter';
import { DiscussionFile } from '../models/discussion-file.interface';
import { discussionFileAdapter } from '../adapters/models/discussion-file.adapter';
import { DiscussionItem } from '../models/discussion-item.interface';
import { discussionItemAdapter } from '../adapters/models/discussion-item.adapter';
import { EquivalentTable } from '../models/equivalent-table.interface';
import { equivalentTableAdapter } from '../adapters/models/equivalent-table.adapter';
import { IdNameAlt } from '../models/id-name-alt.interface';
import { idNameAltAdapter } from '../adapters/models/id-name-alt.adapter';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { MemoryStreamAlt } from '../models/memory-stream-alt.interface';
import { memoryStreamAltAdapter } from '../adapters/models/memory-stream-alt.adapter';
import { Observable } from 'rxjs';
import { OffersTable } from '../models/offers-table.interface';
import { offersTableAdapter } from '../adapters/models/offers-table.adapter';
import { ParticipantOfferItem } from '../models/participant-offer-item.interface';
import { participantOfferItemAdapter } from '../adapters/models/participant-offer-item.adapter';
import { ReadItemInfoAlt } from '../models/read-item-info-alt.interface';
import { RequirementRequestForView } from '../models/requirement-request-for-view.interface';
import { requirementRequestForViewAdapter } from '../adapters/models/requirement-request-for-view.adapter';
import { RequirementRequestsAddChatMessageParams, requirementRequestsAddChatMessageAdapter } from './params/requirement-requests-add-chat-message.params';
import { RequirementRequestsApiService } from '../../swagger/services/requirement-requests-api.service';
import { RequirementRequestsApproveRequirementRequestCharacteristicParams, requirementRequestsApproveRequirementRequestCharacteristicAdapter } from './params/requirement-requests-approve-requirement-request-characteristic.params';
import { RequirementRequestsCancelRequirementRequestParams, requirementRequestsCancelRequirementRequestAdapter } from './params/requirement-requests-cancel-requirement-request.params';
import { RequirementRequestsCanUpdateParams, requirementRequestsCanUpdateAdapter } from './params/requirement-requests-can-update.params';
import { RequirementRequestsCreateEquivalentTableParams, requirementRequestsCreateEquivalentTableAdapter } from './params/requirement-requests-create-equivalent-table.params';
import { RequirementRequestsDownloadComparisonProtocolForCompetitiveListParams, requirementRequestsDownloadComparisonProtocolForCompetitiveListAdapter } from './params/requirement-requests-download-comparison-protocol-for-competitive-list.params';
import { RequirementRequestsDownloadComparisonProtocolParams, requirementRequestsDownloadComparisonProtocolAdapter } from './params/requirement-requests-download-comparison-protocol.params';
import { RequirementRequestsDownloadEquivalentTableParams, requirementRequestsDownloadEquivalentTableAdapter } from './params/requirement-requests-download-equivalent-table.params';
import { RequirementRequestsGetCharacteristicsParams, requirementRequestsGetCharacteristicsAdapter } from './params/requirement-requests-get-characteristics.params';
import { RequirementRequestsGetChatFilesParams, requirementRequestsGetChatFilesAdapter } from './params/requirement-requests-get-chat-files.params';
import { RequirementRequestsGetChatItemsParams, requirementRequestsGetChatItemsAdapter } from './params/requirement-requests-get-chat-items.params';
import { RequirementRequestsGetChatParams, requirementRequestsGetChatAdapter } from './params/requirement-requests-get-chat.params';
import { RequirementRequestsGetChatsParams, requirementRequestsGetChatsAdapter } from './params/requirement-requests-get-chats.params';
import { RequirementRequestsGetCompetitiveListMinPricesParams, requirementRequestsGetCompetitiveListMinPricesAdapter } from './params/requirement-requests-get-competitive-list-min-prices.params';
import { RequirementRequestsGetEquivalentTableParams, requirementRequestsGetEquivalentTableAdapter } from './params/requirement-requests-get-equivalent-table.params';
import { RequirementRequestsGetForViewParams, requirementRequestsGetForViewAdapter } from './params/requirement-requests-get-for-view.params';
import { RequirementRequestsGetLastChatItemsParams, requirementRequestsGetLastChatItemsAdapter } from './params/requirement-requests-get-last-chat-items.params';
import { RequirementRequestsGetPriceListsParams, requirementRequestsGetPriceListsAdapter } from './params/requirement-requests-get-price-lists.params';
import { RequirementRequestsGetReadItemInfoParams, requirementRequestsGetReadItemInfoAdapter } from './params/requirement-requests-get-read-item-info.params';
import { RequirementRequestsGetRequirementRequestCharacteristicTableByFilterParams, requirementRequestsGetRequirementRequestCharacteristicTableByFilterAdapter } from './params/requirement-requests-get-requirement-request-characteristic-table-by-filter.params';
import { RequirementRequestsGetRequirementRequestsByOfferParams, requirementRequestsGetRequirementRequestsByOfferAdapter } from './params/requirement-requests-get-requirement-requests-by-offer.params';
import { RequirementRequestsGetUnreadItemsCountParams, requirementRequestsGetUnreadItemsCountAdapter } from './params/requirement-requests-get-unread-items-count.params';
import { RequirementRequestsGetUnreadItemsParams, requirementRequestsGetUnreadItemsAdapter } from './params/requirement-requests-get-unread-items.params';
import { RequirementRequestShortInfo } from '../models/requirement-request-short-info.interface';
import { requirementRequestShortInfoAdapter } from '../adapters/models/requirement-request-short-info.adapter';
import { RequirementRequestsIsEquivalentTableExistParams, requirementRequestsIsEquivalentTableExistAdapter } from './params/requirement-requests-is-equivalent-table-exist.params';
import { RequirementRequestsPublicSearchParams, requirementRequestsPublicSearchAdapter } from './params/requirement-requests-public-search.params';
import { RequirementRequestsPublishParams, requirementRequestsPublishAdapter } from './params/requirement-requests-publish.params';
import { RequirementRequestsReadAllItemsFromIdParams, requirementRequestsReadAllItemsFromIdAdapter } from './params/requirement-requests-read-all-items-from-id.params';
import { RequirementRequestsReadChatItemByIdsParams, requirementRequestsReadChatItemByIdsAdapter } from './params/requirement-requests-read-chat-item-by-ids.params';
import { RequirementRequestsRejectRequirementRequestCharacteristicParams, requirementRequestsRejectRequirementRequestCharacteristicAdapter } from './params/requirement-requests-reject-requirement-request-characteristic.params';
import { RequirementRequestsSaveAsDraftParams, requirementRequestsSaveAsDraftAdapter } from './params/requirement-requests-save-as-draft.params';
import { RequirementRequestsSearchParams, requirementRequestsSearchAdapter } from './params/requirement-requests-search.params';
import { RequirementRequestsSearchResult } from '../models/requirement-requests-search-result.interface';
import { requirementRequestsSearchResultAdapter } from '../adapters/models/requirement-requests-search-result.adapter';
import { RequirementRequestsUpdateEquivalentTableParams, requirementRequestsUpdateEquivalentTableAdapter } from './params/requirement-requests-update-equivalent-table.params';
import { RequirementRequestsUpdateRequirementRequestStatesParams, requirementRequestsUpdateRequirementRequestStatesAdapter } from './params/requirement-requests-update-requirement-request-states.params';

@Injectable({ providedIn: 'root' })
export class RequirementRequestsRepository {
  private readonly _api = inject(RequirementRequestsApiService);

  requirementRequestsAddChatMessage(params: RequirementRequestsAddChatMessageParams): Observable<DiscussionItem> {
    return this._api.requirementRequestsAddChatMessage(requirementRequestsAddChatMessageAdapter(params)).pipe(
      map((res) => discussionItemAdapter(res?.data))
    );
  }

  requirementRequestsApproveRequirementRequestCharacteristic(params: RequirementRequestsApproveRequirementRequestCharacteristicParams): Observable<Blob> {
    return this._api.requirementRequestsApproveRequirementRequestCharacteristic(requirementRequestsApproveRequirementRequestCharacteristicAdapter(params));
  }

  requirementRequestsCancelRequirementRequest(params: RequirementRequestsCancelRequirementRequestParams): Observable<Blob> {
    return this._api.requirementRequestsCancelRequirementRequest(requirementRequestsCancelRequirementRequestAdapter(params));
  }

  requirementRequestsCanUpdate(params: RequirementRequestsCanUpdateParams): Observable<boolean> {
    return this._api.requirementRequestsCanUpdate(requirementRequestsCanUpdateAdapter(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  requirementRequestsCreateEquivalentTable(params: RequirementRequestsCreateEquivalentTableParams): Observable<boolean> {
    return this._api.requirementRequestsCreateEquivalentTable(requirementRequestsCreateEquivalentTableAdapter(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  requirementRequestsDownloadComparisonProtocol(params: RequirementRequestsDownloadComparisonProtocolParams): Observable<MemoryStreamAlt> {
    return this._api.requirementRequestsDownloadComparisonProtocol(requirementRequestsDownloadComparisonProtocolAdapter(params)).pipe(
      map((res) => memoryStreamAltAdapter(res?.data))
    );
  }

  requirementRequestsDownloadComparisonProtocolForCompetitiveList(params: RequirementRequestsDownloadComparisonProtocolForCompetitiveListParams): Observable<MemoryStreamAlt> {
    return this._api.requirementRequestsDownloadComparisonProtocolForCompetitiveList(requirementRequestsDownloadComparisonProtocolForCompetitiveListAdapter(params)).pipe(
      map((res) => memoryStreamAltAdapter(res?.data))
    );
  }

  requirementRequestsDownloadEquivalentTable(params: RequirementRequestsDownloadEquivalentTableParams): Observable<MemoryStreamAlt> {
    return this._api.requirementRequestsDownloadEquivalentTable(requirementRequestsDownloadEquivalentTableAdapter(params)).pipe(
      map((res) => memoryStreamAltAdapter(res?.data))
    );
  }

  requirementRequestsGetCharacteristics(params: RequirementRequestsGetCharacteristicsParams): Observable<Characteristic[]> {
    return this._api.requirementRequestsGetCharacteristics(requirementRequestsGetCharacteristicsAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => characteristicAdapter(item)))
    );
  }

  requirementRequestsGetChat(params: RequirementRequestsGetChatParams): Observable<Discussion> {
    return this._api.requirementRequestsGetChat(requirementRequestsGetChatAdapter(params)).pipe(
      map((res) => discussionAdapter(res?.data))
    );
  }

  requirementRequestsGetChatFiles(params: RequirementRequestsGetChatFilesParams): Observable<DiscussionFile[]> {
    return this._api.requirementRequestsGetChatFiles(requirementRequestsGetChatFilesAdapter(params)).pipe(
      map((res) => (res ?? []).map((item) => discussionFileAdapter(item)))
    );
  }

  requirementRequestsGetChatItems(params: RequirementRequestsGetChatItemsParams): Observable<Discussion[]> {
    return this._api.requirementRequestsGetChatItems(requirementRequestsGetChatItemsAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => discussionAdapter(item)))
    );
  }

  requirementRequestsGetChats(params: RequirementRequestsGetChatsParams): Observable<IdNameAlt[]> {
    return this._api.requirementRequestsGetChats(requirementRequestsGetChatsAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => idNameAltAdapter(item)))
    );
  }

  requirementRequestsGetCompetitiveListMinPrices(params: RequirementRequestsGetCompetitiveListMinPricesParams): Observable<CompetitiveListMinPrice[]> {
    return this._api.requirementRequestsGetCompetitiveListMinPrices(requirementRequestsGetCompetitiveListMinPricesAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => competitiveListMinPriceAdapter(item)))
    );
  }

  requirementRequestsGetEquivalentTable(params: RequirementRequestsGetEquivalentTableParams): Observable<EquivalentTable> {
    return this._api.requirementRequestsGetEquivalentTable(requirementRequestsGetEquivalentTableAdapter(params)).pipe(
      map((res) => equivalentTableAdapter(res?.data))
    );
  }

  requirementRequestsGetForView(params: RequirementRequestsGetForViewParams): Observable<RequirementRequestForView> {
    return this._api.requirementRequestsGetForView(requirementRequestsGetForViewAdapter(params)).pipe(
      map((res) => requirementRequestForViewAdapter(res?.data))
    );
  }

  requirementRequestsGetLastChatItems(params: RequirementRequestsGetLastChatItemsParams): Observable<Discussion> {
    return this._api.requirementRequestsGetLastChatItems(requirementRequestsGetLastChatItemsAdapter(params)).pipe(
      map((res) => discussionAdapter(res?.data))
    );
  }

  requirementRequestsGetPriceLists(params: RequirementRequestsGetPriceListsParams): Observable<ParticipantOfferItem[]> {
    return this._api.requirementRequestsGetPriceLists(requirementRequestsGetPriceListsAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => participantOfferItemAdapter(item)))
    );
  }

  requirementRequestsGetReadItemInfo(params: RequirementRequestsGetReadItemInfoParams): Observable<({ [key: string]: Array<ReadItemInfoAlt>> {
    return this._api.requirementRequestsGetReadItemInfo(requirementRequestsGetReadItemInfoAdapter(params)).pipe(
      map((res) => res?.data)
    );
  }

  requirementRequestsGetRequirementRequestCharacteristicTableByFilter(params?: RequirementRequestsGetRequirementRequestCharacteristicTableByFilterParams): Observable<OffersTable> {
    return this._api.requirementRequestsGetRequirementRequestCharacteristicTableByFilter(requirementRequestsGetRequirementRequestCharacteristicTableByFilterAdapter(params)).pipe(
      map((res) => offersTableAdapter(res?.data))
    );
  }

  requirementRequestsGetRequirementRequestsByOffer(params: RequirementRequestsGetRequirementRequestsByOfferParams): Observable<RequirementRequestShortInfo[]> {
    return this._api.requirementRequestsGetRequirementRequestsByOffer(requirementRequestsGetRequirementRequestsByOfferAdapter(params)).pipe(
      map((res) => (res ?? []).map((item) => requirementRequestShortInfoAdapter(item)))
    );
  }

  requirementRequestsGetUnreadItems(params: RequirementRequestsGetUnreadItemsParams): Observable<DiscussionItem[]> {
    return this._api.requirementRequestsGetUnreadItems(requirementRequestsGetUnreadItemsAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => discussionItemAdapter(item)))
    );
  }

  requirementRequestsGetUnreadItemsCount(params: RequirementRequestsGetUnreadItemsCountParams): Observable<number> {
    return this._api.requirementRequestsGetUnreadItemsCount(requirementRequestsGetUnreadItemsCountAdapter(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  requirementRequestsIsEquivalentTableExist(params: RequirementRequestsIsEquivalentTableExistParams): Observable<boolean> {
    return this._api.requirementRequestsIsEquivalentTableExist(requirementRequestsIsEquivalentTableExistAdapter(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  requirementRequestsPublicSearch(params?: RequirementRequestsPublicSearchParams): Observable<RequirementRequestsSearchResult[]> {
    return this._api.requirementRequestsPublicSearch(requirementRequestsPublicSearchAdapter(params)).pipe(
      map((res) => (res?.data?.items ?? []).map((item) => requirementRequestsSearchResultAdapter(item)))
    );
  }

  requirementRequestsPublish(params?: RequirementRequestsPublishParams): Observable<number> {
    return this._api.requirementRequestsPublish(requirementRequestsPublishAdapter(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  requirementRequestsReadAllItemsFromId(params: RequirementRequestsReadAllItemsFromIdParams): Observable<boolean> {
    return this._api.requirementRequestsReadAllItemsFromId(requirementRequestsReadAllItemsFromIdAdapter(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  requirementRequestsReadChatItemByIds(params: RequirementRequestsReadChatItemByIdsParams): Observable<boolean> {
    return this._api.requirementRequestsReadChatItemByIds(requirementRequestsReadChatItemByIdsAdapter(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  requirementRequestsRejectRequirementRequestCharacteristic(params: RequirementRequestsRejectRequirementRequestCharacteristicParams): Observable<Blob> {
    return this._api.requirementRequestsRejectRequirementRequestCharacteristic(requirementRequestsRejectRequirementRequestCharacteristicAdapter(params));
  }

  requirementRequestsSaveAsDraft(params?: RequirementRequestsSaveAsDraftParams): Observable<number> {
    return this._api.requirementRequestsSaveAsDraft(requirementRequestsSaveAsDraftAdapter(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  requirementRequestsSearch(params?: RequirementRequestsSearchParams): Observable<RequirementRequestsSearchResult[]> {
    return this._api.requirementRequestsSearch(requirementRequestsSearchAdapter(params)).pipe(
      map((res) => (res?.data?.items ?? []).map((item) => requirementRequestsSearchResultAdapter(item)))
    );
  }

  requirementRequestsUpdateEquivalentTable(params: RequirementRequestsUpdateEquivalentTableParams): Observable<boolean> {
    return this._api.requirementRequestsUpdateEquivalentTable(requirementRequestsUpdateEquivalentTableAdapter(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  requirementRequestsUpdateRequirementRequestStates(params?: RequirementRequestsUpdateRequirementRequestStatesParams): Observable<Blob> {
    return this._api.requirementRequestsUpdateRequirementRequestStates(requirementRequestsUpdateRequirementRequestStatesAdapter(params));
  }

}
