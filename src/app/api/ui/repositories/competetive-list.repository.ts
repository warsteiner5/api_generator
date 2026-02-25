import { AcceptedPriceListInfo } from '../models/accepted-price-list-info.interface';
import { AcceptedPriceListsExtendedResultAlt } from '../models/accepted-price-lists-extended-result-alt.interface';
import { acceptedPriceListsExtendedResultAltAdapter } from '../adapters/models/accepted-price-lists-extended-result-alt.adapter';
import { CompetetiveListAddParticipantOfferToCompetitiveListItemParams, competetiveListAddParticipantOfferToCompetitiveListItemAdapter } from './params/competetive-list-add-participant-offer-to-competitive-list-item.params';
import { CompetetiveListApiService } from '../../swagger/services/competetive-list-api.service';
import { CompetetiveListApproveCompetetiveListItemParams, competetiveListApproveCompetetiveListItemAdapter } from './params/competetive-list-approve-competetive-list-item.params';
import { CompetetiveListCanAddOrSetParticipantOfferParams, competetiveListCanAddOrSetParticipantOfferAdapter } from './params/competetive-list-can-add-or-set-participant-offer.params';
import { CompetetiveListCanPublishParams, competetiveListCanPublishAdapter } from './params/competetive-list-can-publish.params';
import { CompetetiveListCanUpdateCompetetiveListItemParams, competetiveListCanUpdateCompetetiveListItemAdapter } from './params/competetive-list-can-update-competetive-list-item.params';
import { CompetetiveListGetAcceptedPriceListsInfoParams, competetiveListGetAcceptedPriceListsInfoAdapter } from './params/competetive-list-get-accepted-price-lists-info.params';
import { CompetetiveListGetAcceptedPriceListsParams, competetiveListGetAcceptedPriceListsAdapter } from './params/competetive-list-get-accepted-price-lists.params';
import { CompetetiveListGetCompetetiveListItemsByFilterParams, competetiveListGetCompetetiveListItemsByFilterAdapter } from './params/competetive-list-get-competetive-list-items-by-filter.params';
import { CompetetiveListGetCompetetiveListItemsByIdParams, competetiveListGetCompetetiveListItemsByIdAdapter } from './params/competetive-list-get-competetive-list-items-by-id.params';
import { CompetetiveListGetCompetetiveListItemsByRequirementRequestIdParams, competetiveListGetCompetetiveListItemsByRequirementRequestIdAdapter } from './params/competetive-list-get-competetive-list-items-by-requirement-request-id.params';
import { CompetetiveListGetCompetetiveListItemsByTradeIdParams, competetiveListGetCompetetiveListItemsByTradeIdAdapter } from './params/competetive-list-get-competetive-list-items-by-trade-id.params';
import { CompetetiveListGetCompetetiveListItemStateParams, competetiveListGetCompetetiveListItemStateAdapter } from './params/competetive-list-get-competetive-list-item-state.params';
import { CompetetiveListGetCompetitiveListItemForParticipantOfferTemplateParams, competetiveListGetCompetitiveListItemForParticipantOfferTemplateAdapter } from './params/competetive-list-get-competitive-list-item-for-participant-offer-template.params';
import { CompetetiveListGetEquivalentCompetetiveListsParams, competetiveListGetEquivalentCompetetiveListsAdapter } from './params/competetive-list-get-equivalent-competetive-lists.params';
import { CompetetiveListPublishParams, competetiveListPublishAdapter } from './params/competetive-list-publish.params';
import { CompetetiveListRejectCompetetiveListItemParams, competetiveListRejectCompetetiveListItemAdapter } from './params/competetive-list-reject-competetive-list-item.params';
import { CompetetiveListRejectCompetetiveListItemWithExplainParams, competetiveListRejectCompetetiveListItemWithExplainAdapter } from './params/competetive-list-reject-competetive-list-item-with-explain.params';
import { CompetetiveListRemoveParticipantOfferFromCompetitiveListItemParams, competetiveListRemoveParticipantOfferFromCompetitiveListItemAdapter } from './params/competetive-list-remove-participant-offer-from-competitive-list-item.params';
import { CompetetiveListUpdateParams, competetiveListUpdateAdapter } from './params/competetive-list-update.params';
import { CompetitiveListItem } from '../models/competitive-list-item.interface';
import { competitiveListItemAdapter } from '../adapters/models/competitive-list-item.adapter';
import { CompetitiveListItemForParticipantOfferTemplate } from '../models/competitive-list-item-for-participant-offer-template.interface';
import { competitiveListItemForParticipantOfferTemplateAdapter } from '../adapters/models/competitive-list-item-for-participant-offer-template.adapter';
import { CompetitiveListItemForView } from '../models/competitive-list-item-for-view.interface';
import { competitiveListItemForViewAdapter } from '../adapters/models/competitive-list-item-for-view.adapter';
import { CompetitiveListItemStateEnum } from '../enums/competitive-list-item-state.enum';
import { competitiveListItemStateEnumAdapter } from '../adapters/enums/competitive-list-item-state-enum.adapter';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { MarketPaginationResult } from '../models/market-pagination-result.interface';
import { marketPaginationResultOfListOfAcceptedPriceListInfoAdapter } from '../adapters/models/market-pagination-result-of-list-of-accepted-price-list-info.adapter';
import { Observable } from 'rxjs';
import { RequirementRequestOfferPricesInfo } from '../models/requirement-request-offer-prices-info.interface';
import { requirementRequestOfferPricesInfoAdapter } from '../adapters/models/requirement-request-offer-prices-info.adapter';

@Injectable({ providedIn: 'root' })
export class CompetetiveListRepository {
  private readonly _api = inject(CompetetiveListApiService);

  competetiveListAddParticipantOfferToCompetitiveListItem(params: CompetetiveListAddParticipantOfferToCompetitiveListItemParams): Observable<Blob> {
    return this._api.competetiveListAddParticipantOfferToCompetitiveListItem(competetiveListAddParticipantOfferToCompetitiveListItemAdapter(params));
  }

  competetiveListApproveCompetetiveListItem(params: CompetetiveListApproveCompetetiveListItemParams): Observable<RequirementRequestOfferPricesInfo> {
    return this._api.competetiveListApproveCompetetiveListItem(competetiveListApproveCompetetiveListItemAdapter(params)).pipe(
      map((res) => requirementRequestOfferPricesInfoAdapter(res?.data))
    );
  }

  competetiveListCanAddOrSetParticipantOffer(params: CompetetiveListCanAddOrSetParticipantOfferParams): Observable<boolean> {
    return this._api.competetiveListCanAddOrSetParticipantOffer(competetiveListCanAddOrSetParticipantOfferAdapter(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  competetiveListCanPublish(params: CompetetiveListCanPublishParams): Observable<boolean> {
    return this._api.competetiveListCanPublish(competetiveListCanPublishAdapter(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  competetiveListCanUpdateCompetetiveListItem(params: CompetetiveListCanUpdateCompetetiveListItemParams): Observable<boolean> {
    return this._api.competetiveListCanUpdateCompetetiveListItem(competetiveListCanUpdateCompetetiveListItemAdapter(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  competetiveListGetAcceptedPriceLists(params?: CompetetiveListGetAcceptedPriceListsParams): Observable<MarketPaginationResult<AcceptedPriceListInfo[]>> {
    return this._api.competetiveListGetAcceptedPriceLists(competetiveListGetAcceptedPriceListsAdapter(params)).pipe(
      map((res) => marketPaginationResultOfListOfAcceptedPriceListInfoAdapter(res?.data))
    );
  }

  competetiveListGetAcceptedPriceListsInfo(params?: CompetetiveListGetAcceptedPriceListsInfoParams): Observable<AcceptedPriceListsExtendedResultAlt> {
    return this._api.competetiveListGetAcceptedPriceListsInfo(competetiveListGetAcceptedPriceListsInfoAdapter(params)).pipe(
      map((res) => acceptedPriceListsExtendedResultAltAdapter(res?.data))
    );
  }

  competetiveListGetCompetetiveListItemsByFilter(params?: CompetetiveListGetCompetetiveListItemsByFilterParams): Observable<CompetitiveListItem[]> {
    return this._api.competetiveListGetCompetetiveListItemsByFilter(competetiveListGetCompetetiveListItemsByFilterAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => competitiveListItemAdapter(item)))
    );
  }

  competetiveListGetCompetetiveListItemsById(params: CompetetiveListGetCompetetiveListItemsByIdParams): Observable<CompetitiveListItemForView> {
    return this._api.competetiveListGetCompetetiveListItemsById(competetiveListGetCompetetiveListItemsByIdAdapter(params)).pipe(
      map((res) => competitiveListItemForViewAdapter(res?.data))
    );
  }

  competetiveListGetCompetetiveListItemsByRequirementRequestId(params: CompetetiveListGetCompetetiveListItemsByRequirementRequestIdParams): Observable<CompetitiveListItem[]> {
    return this._api.competetiveListGetCompetetiveListItemsByRequirementRequestId(competetiveListGetCompetetiveListItemsByRequirementRequestIdAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => competitiveListItemAdapter(item)))
    );
  }

  competetiveListGetCompetetiveListItemsByTradeId(params: CompetetiveListGetCompetetiveListItemsByTradeIdParams): Observable<CompetitiveListItem[]> {
    return this._api.competetiveListGetCompetetiveListItemsByTradeId(competetiveListGetCompetetiveListItemsByTradeIdAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => competitiveListItemAdapter(item)))
    );
  }

  competetiveListGetCompetetiveListItemState(params: CompetetiveListGetCompetetiveListItemStateParams): Observable<CompetitiveListItemStateEnum> {
    return this._api.competetiveListGetCompetetiveListItemState(competetiveListGetCompetetiveListItemStateAdapter(params)).pipe(
      map((res) => competitiveListItemStateEnumAdapter(res?.data))
    );
  }

  competetiveListGetCompetitiveListItemForParticipantOfferTemplate(params: CompetetiveListGetCompetitiveListItemForParticipantOfferTemplateParams): Observable<CompetitiveListItemForParticipantOfferTemplate> {
    return this._api.competetiveListGetCompetitiveListItemForParticipantOfferTemplate(competetiveListGetCompetitiveListItemForParticipantOfferTemplateAdapter(params)).pipe(
      map((res) => competitiveListItemForParticipantOfferTemplateAdapter(res?.data))
    );
  }

  competetiveListGetEquivalentCompetetiveLists(params: CompetetiveListGetEquivalentCompetetiveListsParams): Observable<CompetitiveListItem[]> {
    return this._api.competetiveListGetEquivalentCompetetiveLists(competetiveListGetEquivalentCompetetiveListsAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => competitiveListItemAdapter(item)))
    );
  }

  competetiveListPublish(params?: CompetetiveListPublishParams): Observable<number> {
    return this._api.competetiveListPublish(competetiveListPublishAdapter(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  competetiveListRejectCompetetiveListItem(params: CompetetiveListRejectCompetetiveListItemParams): Observable<Blob> {
    return this._api.competetiveListRejectCompetetiveListItem(competetiveListRejectCompetetiveListItemAdapter(params));
  }

  competetiveListRejectCompetetiveListItemWithExplain(params?: CompetetiveListRejectCompetetiveListItemWithExplainParams): Observable<void> {
    return this._api.competetiveListRejectCompetetiveListItemWithExplain(competetiveListRejectCompetetiveListItemWithExplainAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

  competetiveListRemoveParticipantOfferFromCompetitiveListItem(params: CompetetiveListRemoveParticipantOfferFromCompetitiveListItemParams): Observable<Blob> {
    return this._api.competetiveListRemoveParticipantOfferFromCompetitiveListItem(competetiveListRemoveParticipantOfferFromCompetitiveListItemAdapter(params));
  }

  competetiveListUpdate(params: CompetetiveListUpdateParams): Observable<number> {
    return this._api.competetiveListUpdate(competetiveListUpdateAdapter(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

}
