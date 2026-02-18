import { AcceptedPriceListInfo } from '../models/accepted-price-list-info.interface';
import { AcceptedPriceListsExtendedResultAlt } from '../models/accepted-price-lists-extended-result-alt.interface';
import { adaptAcceptedPriceListInfoToUI } from '../adapters/toUI/accepted-price-list-info.adapter';
import { adaptAcceptedPriceListsExtendedResultAltToUI } from '../adapters/toUI/accepted-price-lists-extended-result-alt.adapter';
import { adaptCompetitiveListItemForParticipantOfferTemplateToUI } from '../adapters/toUI/competitive-list-item-for-participant-offer-template.adapter';
import { adaptCompetitiveListItemForViewToUI } from '../adapters/toUI/competitive-list-item-for-view.adapter';
import { adaptCompetitiveListItemStateEnumToUI } from '../adapters/toUI/competitive-list-item-state-enum.adapter';
import { adaptCompetitiveListItemToUI } from '../adapters/toUI/competitive-list-item.adapter';
import { adaptRequirementRequestOfferPricesInfoToUI } from '../adapters/toUI/requirement-request-offer-prices-info.adapter';
import { CompetetiveListAddParticipantOfferToCompetitiveListItemParams, competetiveListAddParticipantOfferToCompetitiveListItemParamsAdapter } from './params/competetive-list-add-participant-offer-to-competitive-list-item.params';
import { CompetetiveListApiService } from '../../swagger/services/competetive-list-api.service';
import { CompetetiveListApproveCompetetiveListItemParams, competetiveListApproveCompetetiveListItemParamsAdapter } from './params/competetive-list-approve-competetive-list-item.params';
import { CompetetiveListCanAddOrSetParticipantOfferParams, competetiveListCanAddOrSetParticipantOfferParamsAdapter } from './params/competetive-list-can-add-or-set-participant-offer.params';
import { CompetetiveListCanPublishParams, competetiveListCanPublishParamsAdapter } from './params/competetive-list-can-publish.params';
import { CompetetiveListCanUpdateCompetetiveListItemParams, competetiveListCanUpdateCompetetiveListItemParamsAdapter } from './params/competetive-list-can-update-competetive-list-item.params';
import { CompetetiveListGetAcceptedPriceListsInfoParams, competetiveListGetAcceptedPriceListsInfoParamsAdapter } from './params/competetive-list-get-accepted-price-lists-info.params';
import { CompetetiveListGetAcceptedPriceListsParams, competetiveListGetAcceptedPriceListsParamsAdapter } from './params/competetive-list-get-accepted-price-lists.params';
import { CompetetiveListGetCompetetiveListItemsByFilterParams, competetiveListGetCompetetiveListItemsByFilterParamsAdapter } from './params/competetive-list-get-competetive-list-items-by-filter.params';
import { CompetetiveListGetCompetetiveListItemsByIdParams, competetiveListGetCompetetiveListItemsByIdParamsAdapter } from './params/competetive-list-get-competetive-list-items-by-id.params';
import { CompetetiveListGetCompetetiveListItemsByRequirementRequestIdParams, competetiveListGetCompetetiveListItemsByRequirementRequestIdParamsAdapter } from './params/competetive-list-get-competetive-list-items-by-requirement-request-id.params';
import { CompetetiveListGetCompetetiveListItemsByTradeIdParams, competetiveListGetCompetetiveListItemsByTradeIdParamsAdapter } from './params/competetive-list-get-competetive-list-items-by-trade-id.params';
import { CompetetiveListGetCompetetiveListItemStateParams, competetiveListGetCompetetiveListItemStateParamsAdapter } from './params/competetive-list-get-competetive-list-item-state.params';
import { CompetetiveListGetCompetitiveListItemForParticipantOfferTemplateParams, competetiveListGetCompetitiveListItemForParticipantOfferTemplateParamsAdapter } from './params/competetive-list-get-competitive-list-item-for-participant-offer-template.params';
import { CompetetiveListGetEquivalentCompetetiveListsParams, competetiveListGetEquivalentCompetetiveListsParamsAdapter } from './params/competetive-list-get-equivalent-competetive-lists.params';
import { CompetetiveListPublishParams, competetiveListPublishParamsAdapter } from './params/competetive-list-publish.params';
import { CompetetiveListRejectCompetetiveListItemParams, competetiveListRejectCompetetiveListItemParamsAdapter } from './params/competetive-list-reject-competetive-list-item.params';
import { CompetetiveListRejectCompetetiveListItemWithExplainParams, competetiveListRejectCompetetiveListItemWithExplainParamsAdapter } from './params/competetive-list-reject-competetive-list-item-with-explain.params';
import { CompetetiveListRemoveParticipantOfferFromCompetitiveListItemParams, competetiveListRemoveParticipantOfferFromCompetitiveListItemParamsAdapter } from './params/competetive-list-remove-participant-offer-from-competitive-list-item.params';
import { CompetetiveListUpdateParams, competetiveListUpdateParamsAdapter } from './params/competetive-list-update.params';
import { CompetitiveListItem } from '../models/competitive-list-item.interface';
import { CompetitiveListItemForParticipantOfferTemplate } from '../models/competitive-list-item-for-participant-offer-template.interface';
import { CompetitiveListItemForView } from '../models/competitive-list-item-for-view.interface';
import { CompetitiveListItemStateEnum } from '../enums/competitive-list-item-state.enum';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { RequirementRequestOfferPricesInfo } from '../models/requirement-request-offer-prices-info.interface';

@Injectable({ providedIn: 'root' })
export class CompetetiveListRepository {
  private readonly _api = inject(CompetetiveListApiService);

  competetiveListAddParticipantOfferToCompetitiveListItem(params: CompetetiveListAddParticipantOfferToCompetitiveListItemParams): Observable<Blob> {
    return this._api.competetiveListAddParticipantOfferToCompetitiveListItem(competetiveListAddParticipantOfferToCompetitiveListItemParamsAdapter.adapt(params));
  }

  competetiveListApproveCompetetiveListItem(params: CompetetiveListApproveCompetetiveListItemParams): Observable<RequirementRequestOfferPricesInfo> {
    return this._api.competetiveListApproveCompetetiveListItem(competetiveListApproveCompetetiveListItemParamsAdapter.adapt(params)).pipe(
      map((res) => adaptRequirementRequestOfferPricesInfoToUI(res?.data))
    );
  }

  competetiveListCanAddOrSetParticipantOffer(params: CompetetiveListCanAddOrSetParticipantOfferParams): Observable<boolean> {
    return this._api.competetiveListCanAddOrSetParticipantOffer(competetiveListCanAddOrSetParticipantOfferParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  competetiveListCanPublish(params: CompetetiveListCanPublishParams): Observable<boolean> {
    return this._api.competetiveListCanPublish(competetiveListCanPublishParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  competetiveListCanUpdateCompetetiveListItem(params: CompetetiveListCanUpdateCompetetiveListItemParams): Observable<boolean> {
    return this._api.competetiveListCanUpdateCompetetiveListItem(competetiveListCanUpdateCompetetiveListItemParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  competetiveListGetAcceptedPriceLists(params?: CompetetiveListGetAcceptedPriceListsParams): Observable<AcceptedPriceListInfo[]> {
    return this._api.competetiveListGetAcceptedPriceLists(competetiveListGetAcceptedPriceListsParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data?.items ?? []).map((item) => adaptAcceptedPriceListInfoToUI(item)))
    );
  }

  competetiveListGetAcceptedPriceListsInfo(params?: CompetetiveListGetAcceptedPriceListsInfoParams): Observable<AcceptedPriceListsExtendedResultAlt> {
    return this._api.competetiveListGetAcceptedPriceListsInfo(competetiveListGetAcceptedPriceListsInfoParamsAdapter.adapt(params)).pipe(
      map((res) => adaptAcceptedPriceListsExtendedResultAltToUI(res?.data))
    );
  }

  competetiveListGetCompetetiveListItemsByFilter(params?: CompetetiveListGetCompetetiveListItemsByFilterParams): Observable<CompetitiveListItem[]> {
    return this._api.competetiveListGetCompetetiveListItemsByFilter(competetiveListGetCompetetiveListItemsByFilterParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptCompetitiveListItemToUI(item)))
    );
  }

  competetiveListGetCompetetiveListItemsById(params: CompetetiveListGetCompetetiveListItemsByIdParams): Observable<CompetitiveListItemForView> {
    return this._api.competetiveListGetCompetetiveListItemsById(competetiveListGetCompetetiveListItemsByIdParamsAdapter.adapt(params)).pipe(
      map((res) => adaptCompetitiveListItemForViewToUI(res?.data))
    );
  }

  competetiveListGetCompetetiveListItemsByRequirementRequestId(params: CompetetiveListGetCompetetiveListItemsByRequirementRequestIdParams): Observable<CompetitiveListItem[]> {
    return this._api.competetiveListGetCompetetiveListItemsByRequirementRequestId(competetiveListGetCompetetiveListItemsByRequirementRequestIdParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptCompetitiveListItemToUI(item)))
    );
  }

  competetiveListGetCompetetiveListItemsByTradeId(params: CompetetiveListGetCompetetiveListItemsByTradeIdParams): Observable<CompetitiveListItem[]> {
    return this._api.competetiveListGetCompetetiveListItemsByTradeId(competetiveListGetCompetetiveListItemsByTradeIdParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptCompetitiveListItemToUI(item)))
    );
  }

  competetiveListGetCompetetiveListItemState(params: CompetetiveListGetCompetetiveListItemStateParams): Observable<CompetitiveListItemStateEnum> {
    return this._api.competetiveListGetCompetetiveListItemState(competetiveListGetCompetetiveListItemStateParamsAdapter.adapt(params)).pipe(
      map((res) => adaptCompetitiveListItemStateEnumToUI(res?.data))
    );
  }

  competetiveListGetCompetitiveListItemForParticipantOfferTemplate(params: CompetetiveListGetCompetitiveListItemForParticipantOfferTemplateParams): Observable<CompetitiveListItemForParticipantOfferTemplate> {
    return this._api.competetiveListGetCompetitiveListItemForParticipantOfferTemplate(competetiveListGetCompetitiveListItemForParticipantOfferTemplateParamsAdapter.adapt(params)).pipe(
      map((res) => adaptCompetitiveListItemForParticipantOfferTemplateToUI(res?.data))
    );
  }

  competetiveListGetEquivalentCompetetiveLists(params: CompetetiveListGetEquivalentCompetetiveListsParams): Observable<CompetitiveListItem[]> {
    return this._api.competetiveListGetEquivalentCompetetiveLists(competetiveListGetEquivalentCompetetiveListsParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptCompetitiveListItemToUI(item)))
    );
  }

  competetiveListPublish(params?: CompetetiveListPublishParams): Observable<number> {
    return this._api.competetiveListPublish(competetiveListPublishParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  competetiveListRejectCompetetiveListItem(params: CompetetiveListRejectCompetetiveListItemParams): Observable<Blob> {
    return this._api.competetiveListRejectCompetetiveListItem(competetiveListRejectCompetetiveListItemParamsAdapter.adapt(params));
  }

  competetiveListRejectCompetetiveListItemWithExplain(params?: CompetetiveListRejectCompetetiveListItemWithExplainParams): Observable<void> {
    return this._api.competetiveListRejectCompetetiveListItemWithExplain(competetiveListRejectCompetetiveListItemWithExplainParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  competetiveListRemoveParticipantOfferFromCompetitiveListItem(params: CompetetiveListRemoveParticipantOfferFromCompetitiveListItemParams): Observable<Blob> {
    return this._api.competetiveListRemoveParticipantOfferFromCompetitiveListItem(competetiveListRemoveParticipantOfferFromCompetitiveListItemParamsAdapter.adapt(params));
  }

  competetiveListUpdate(params: CompetetiveListUpdateParams): Observable<number> {
    return this._api.competetiveListUpdate(competetiveListUpdateParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

}
