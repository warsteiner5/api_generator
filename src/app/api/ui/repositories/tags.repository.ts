import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { MarketPaginationResult } from '../models/market-pagination-result.interface';
import { marketPaginationResultOfListOfTagOperatorViewAdapter } from '../adapters/models/market-pagination-result-of-list-of-tag-operator-view.adapter';
import { marketPaginationResultOfListOfTagParticipantViewAdapter } from '../adapters/models/market-pagination-result-of-list-of-tag-participant-view.adapter';
import { Observable } from 'rxjs';
import { TagOperatorView } from '../models/tag-operator-view.interface';
import { tagOperatorViewAdapter } from '../adapters/models/tag-operator-view.adapter';
import { TagParticipantView } from '../models/tag-participant-view.interface';
import { TagsApiService } from '../../swagger/services/tags-api.service';
import { TagsDeleteTagParams, tagsDeleteTagAdapter } from './params/tags-delete-tag.params';
import { TagsDeleteTagParticipantOfferRuleParams, tagsDeleteTagParticipantOfferRuleAdapter } from './params/tags-delete-tag-participant-offer-rule.params';
import { TagsDeleteTagParticipantRuleParams, tagsDeleteTagParticipantRuleAdapter } from './params/tags-delete-tag-participant-rule.params';
import { TagsGetTagForOperatorParams, tagsGetTagForOperatorAdapter } from './params/tags-get-tag-for-operator.params';
import { TagsGetTagsForCurrentTenantParams, tagsGetTagsForCurrentTenantAdapter } from './params/tags-get-tags-for-current-tenant.params';
import { TagsGetTagsForOperatorParams, tagsGetTagsForOperatorAdapter } from './params/tags-get-tags-for-operator.params';
import { TagsGetTagsForParticipantParams, tagsGetTagsForParticipantAdapter } from './params/tags-get-tags-for-participant.params';
import { TagsSaveSettingsParams, tagsSaveSettingsAdapter } from './params/tags-save-settings.params';
import { TagsSaveTagParams, tagsSaveTagAdapter } from './params/tags-save-tag.params';
import { TagsSaveTagParticipantOfferRuleParams, tagsSaveTagParticipantOfferRuleAdapter } from './params/tags-save-tag-participant-offer-rule.params';
import { TagsSaveTagParticipantRuleParams, tagsSaveTagParticipantRuleAdapter } from './params/tags-save-tag-participant-rule.params';
import { TagView } from '../models/tag-view.interface';
import { tagViewAdapter } from '../adapters/models/tag-view.adapter';

@Injectable({ providedIn: 'root' })
export class TagsRepository {
  private readonly _api = inject(TagsApiService);

  tagsDeleteTag(params: TagsDeleteTagParams): Observable<Blob> {
    return this._api.tagsDeleteTag(tagsDeleteTagAdapter(params));
  }

  tagsDeleteTagParticipantOfferRule(params: TagsDeleteTagParticipantOfferRuleParams): Observable<Blob> {
    return this._api.tagsDeleteTagParticipantOfferRule(tagsDeleteTagParticipantOfferRuleAdapter(params));
  }

  tagsDeleteTagParticipantRule(params: TagsDeleteTagParticipantRuleParams): Observable<Blob> {
    return this._api.tagsDeleteTagParticipantRule(tagsDeleteTagParticipantRuleAdapter(params));
  }

  tagsGetTagForOperator(params: TagsGetTagForOperatorParams): Observable<TagOperatorView> {
    return this._api.tagsGetTagForOperator(tagsGetTagForOperatorAdapter(params)).pipe(
      map((res) => tagOperatorViewAdapter(res?.data))
    );
  }

  tagsGetTagsForCurrentTenant(params?: TagsGetTagsForCurrentTenantParams): Observable<TagView[]> {
    return this._api.tagsGetTagsForCurrentTenant(tagsGetTagsForCurrentTenantAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => tagViewAdapter(item)))
    );
  }

  tagsGetTagsForOperator(params?: TagsGetTagsForOperatorParams): Observable<MarketPaginationResult<TagOperatorView[]>> {
    return this._api.tagsGetTagsForOperator(tagsGetTagsForOperatorAdapter(params)).pipe(
      map((res) => marketPaginationResultOfListOfTagOperatorViewAdapter(res?.data))
    );
  }

  tagsGetTagsForParticipant(params?: TagsGetTagsForParticipantParams): Observable<MarketPaginationResult<TagParticipantView[]>> {
    return this._api.tagsGetTagsForParticipant(tagsGetTagsForParticipantAdapter(params)).pipe(
      map((res) => marketPaginationResultOfListOfTagParticipantViewAdapter(res?.data))
    );
  }

  tagsSaveSettings(params?: TagsSaveSettingsParams): Observable<Blob> {
    return this._api.tagsSaveSettings(tagsSaveSettingsAdapter(params));
  }

  tagsSaveTag(params?: TagsSaveTagParams): Observable<number> {
    return this._api.tagsSaveTag(tagsSaveTagAdapter(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  tagsSaveTagParticipantOfferRule(params?: TagsSaveTagParticipantOfferRuleParams): Observable<number> {
    return this._api.tagsSaveTagParticipantOfferRule(tagsSaveTagParticipantOfferRuleAdapter(params));
  }

  tagsSaveTagParticipantRule(params?: TagsSaveTagParticipantRuleParams): Observable<number> {
    return this._api.tagsSaveTagParticipantRule(tagsSaveTagParticipantRuleAdapter(params));
  }

}
