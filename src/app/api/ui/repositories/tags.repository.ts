import { adaptTagOperatorViewToUI } from '../adapters/toUI/tag-operator-view.adapter';
import { adaptTagParticipantViewToUI } from '../adapters/toUI/tag-participant-view.adapter';
import { adaptTagViewToUI } from '../adapters/toUI/tag-view.adapter';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { TagOperatorView } from '../models/tag-operator-view.interface';
import { TagParticipantView } from '../models/tag-participant-view.interface';
import { TagsApiService } from '../../swagger/services/tags-api.service';
import { TagsDeleteTagParams, tagsDeleteTagParamsAdapter } from './params/tags-delete-tag.params';
import { TagsDeleteTagParticipantOfferRuleParams, tagsDeleteTagParticipantOfferRuleParamsAdapter } from './params/tags-delete-tag-participant-offer-rule.params';
import { TagsDeleteTagParticipantRuleParams, tagsDeleteTagParticipantRuleParamsAdapter } from './params/tags-delete-tag-participant-rule.params';
import { TagsGetTagForOperatorParams, tagsGetTagForOperatorParamsAdapter } from './params/tags-get-tag-for-operator.params';
import { TagsGetTagsForCurrentTenantParams, tagsGetTagsForCurrentTenantParamsAdapter } from './params/tags-get-tags-for-current-tenant.params';
import { TagsGetTagsForOperatorParams, tagsGetTagsForOperatorParamsAdapter } from './params/tags-get-tags-for-operator.params';
import { TagsGetTagsForParticipantParams, tagsGetTagsForParticipantParamsAdapter } from './params/tags-get-tags-for-participant.params';
import { TagsSaveSettingsParams, tagsSaveSettingsParamsAdapter } from './params/tags-save-settings.params';
import { TagsSaveTagParams, tagsSaveTagParamsAdapter } from './params/tags-save-tag.params';
import { TagsSaveTagParticipantOfferRuleParams, tagsSaveTagParticipantOfferRuleParamsAdapter } from './params/tags-save-tag-participant-offer-rule.params';
import { TagsSaveTagParticipantRuleParams, tagsSaveTagParticipantRuleParamsAdapter } from './params/tags-save-tag-participant-rule.params';
import { TagView } from '../models/tag-view.interface';

@Injectable({ providedIn: 'root' })
export class TagsRepository {
  private readonly _api = inject(TagsApiService);

  tagsDeleteTag(params: TagsDeleteTagParams): Observable<Blob> {
    return this._api.tagsDeleteTag(tagsDeleteTagParamsAdapter.adapt(params));
  }

  tagsDeleteTagParticipantOfferRule(params: TagsDeleteTagParticipantOfferRuleParams): Observable<Blob> {
    return this._api.tagsDeleteTagParticipantOfferRule(tagsDeleteTagParticipantOfferRuleParamsAdapter.adapt(params));
  }

  tagsDeleteTagParticipantRule(params: TagsDeleteTagParticipantRuleParams): Observable<Blob> {
    return this._api.tagsDeleteTagParticipantRule(tagsDeleteTagParticipantRuleParamsAdapter.adapt(params));
  }

  tagsGetTagForOperator(params: TagsGetTagForOperatorParams): Observable<TagOperatorView> {
    return this._api.tagsGetTagForOperator(tagsGetTagForOperatorParamsAdapter.adapt(params)).pipe(
      map((res) => adaptTagOperatorViewToUI(res?.data))
    );
  }

  tagsGetTagsForCurrentTenant(params?: TagsGetTagsForCurrentTenantParams): Observable<TagView[]> {
    return this._api.tagsGetTagsForCurrentTenant(tagsGetTagsForCurrentTenantParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptTagViewToUI(item)))
    );
  }

  tagsGetTagsForOperator(params?: TagsGetTagsForOperatorParams): Observable<TagOperatorView[]> {
    return this._api.tagsGetTagsForOperator(tagsGetTagsForOperatorParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data?.items ?? []).map((item) => adaptTagOperatorViewToUI(item)))
    );
  }

  tagsGetTagsForParticipant(params?: TagsGetTagsForParticipantParams): Observable<TagParticipantView[]> {
    return this._api.tagsGetTagsForParticipant(tagsGetTagsForParticipantParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data?.items ?? []).map((item) => adaptTagParticipantViewToUI(item)))
    );
  }

  tagsSaveSettings(params?: TagsSaveSettingsParams): Observable<Blob> {
    return this._api.tagsSaveSettings(tagsSaveSettingsParamsAdapter.adapt(params));
  }

  tagsSaveTag(params?: TagsSaveTagParams): Observable<number> {
    return this._api.tagsSaveTag(tagsSaveTagParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  tagsSaveTagParticipantOfferRule(params?: TagsSaveTagParticipantOfferRuleParams): Observable<number> {
    return this._api.tagsSaveTagParticipantOfferRule(tagsSaveTagParticipantOfferRuleParamsAdapter.adapt(params));
  }

  tagsSaveTagParticipantRule(params?: TagsSaveTagParticipantRuleParams): Observable<number> {
    return this._api.tagsSaveTagParticipantRule(tagsSaveTagParticipantRuleParamsAdapter.adapt(params));
  }

}
