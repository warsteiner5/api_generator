import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { MarketSearchResult } from '../models/market-search-result.interface';
import { marketSearchResultAdapter } from '../adapters/models/market-search-result.adapter';
import { Observable } from 'rxjs';
import { PomogatorAddMultipleTagsSettingsParams, pomogatorAddMultipleTagsSettingsAdapter } from './params/pomogator-add-multiple-tags-settings.params';
import { PomogatorAddPriceListSettingsParams, pomogatorAddPriceListSettingsAdapter } from './params/pomogator-add-price-list-settings.params';
import { PomogatorAddTagsSettingsParams, pomogatorAddTagsSettingsAdapter } from './params/pomogator-add-tags-settings.params';
import { PomogatorApiService } from '../../swagger/services/pomogator-api.service';
import { PomogatorDeletePriceListSettingsParams, pomogatorDeletePriceListSettingsAdapter } from './params/pomogator-delete-price-list-settings.params';
import { PomogatorDeleteTagsSettingsParams, pomogatorDeleteTagsSettingsAdapter } from './params/pomogator-delete-tags-settings.params';
import { PomogatorGetSettingsExistFlagParams, pomogatorGetSettingsExistFlagAdapter } from './params/pomogator-get-settings-exist-flag.params';
import { PomogatorGetSettingsParams, pomogatorGetSettingsAdapter } from './params/pomogator-get-settings.params';
import { PomogatorGetSettingsPriceListParams, pomogatorGetSettingsPriceListAdapter } from './params/pomogator-get-settings-price-list.params';
import { PomogatorGetSettingsPriceListsParams, pomogatorGetSettingsPriceListsAdapter } from './params/pomogator-get-settings-price-lists.params';
import { PomogatorGetSettingsStatsParams, pomogatorGetSettingsStatsAdapter } from './params/pomogator-get-settings-stats.params';
import { PomogatorGetSettingsTagExistParams, pomogatorGetSettingsTagExistAdapter } from './params/pomogator-get-settings-tag-exist.params';
import { PomogatorGetSettingsTagParams, pomogatorGetSettingsTagAdapter } from './params/pomogator-get-settings-tag.params';
import { PomogatorGetSettingsTagsParams, pomogatorGetSettingsTagsAdapter } from './params/pomogator-get-settings-tags.params';
import { PomogatorGetTradeRecommendationsExtendedParams, pomogatorGetTradeRecommendationsExtendedAdapter } from './params/pomogator-get-trade-recommendations-extended.params';
import { PomogatorGetTradeRecommendationsParams, pomogatorGetTradeRecommendationsAdapter } from './params/pomogator-get-trade-recommendations.params';
import { PomogatorSetRegionsForAllTagsParams, pomogatorSetRegionsForAllTagsAdapter } from './params/pomogator-set-regions-for-all-tags.params';
import { PomogatorSettingsResultAlt } from '../models/pomogator-settings-result-alt.interface';
import { pomogatorSettingsResultAltAdapter } from '../adapters/models/pomogator-settings-result-alt.adapter';
import { PomogatorTogglePriceListSettingsParams, pomogatorTogglePriceListSettingsAdapter } from './params/pomogator-toggle-price-list-settings.params';
import { PomogatorToggleTagSettingsParams, pomogatorToggleTagSettingsAdapter } from './params/pomogator-toggle-tag-settings.params';
import { PomogatorUpdatePriceListSettingsParams, pomogatorUpdatePriceListSettingsAdapter } from './params/pomogator-update-price-list-settings.params';
import { PomogatorUpdateTagsSettingsParams, pomogatorUpdateTagsSettingsAdapter } from './params/pomogator-update-tags-settings.params';
import { PriceListItemAlt } from '../models/price-list-item-alt.interface';
import { priceListItemAltAdapter } from '../adapters/models/price-list-item-alt.adapter';
import { SearchRecommendationsResultAlt } from '../models/search-recommendations-result-alt.interface';
import { searchRecommendationsResultAltAdapter } from '../adapters/models/search-recommendations-result-alt.adapter';
import { SettingsAddedResponseAlt } from '../models/settings-added-response-alt.interface';
import { settingsAddedResponseAltAdapter } from '../adapters/models/settings-added-response-alt.adapter';
import { SettingsStatsResultAlt } from '../models/settings-stats-result-alt.interface';
import { settingsStatsResultAltAdapter } from '../adapters/models/settings-stats-result-alt.adapter';
import { TagItemAlt } from '../models/tag-item-alt.interface';
import { tagItemAltAdapter } from '../adapters/models/tag-item-alt.adapter';

@Injectable({ providedIn: 'root' })
export class PomogatorRepository {
  private readonly _api = inject(PomogatorApiService);

  pomogatorAddMultipleTagsSettings(params?: PomogatorAddMultipleTagsSettingsParams): Observable<SettingsAddedResponseAlt> {
    return this._api.pomogatorAddMultipleTagsSettings(pomogatorAddMultipleTagsSettingsAdapter(params)).pipe(
      map((res) => settingsAddedResponseAltAdapter(res?.data))
    );
  }

  pomogatorAddPriceListSettings(params?: PomogatorAddPriceListSettingsParams): Observable<SettingsAddedResponseAlt> {
    return this._api.pomogatorAddPriceListSettings(pomogatorAddPriceListSettingsAdapter(params)).pipe(
      map((res) => settingsAddedResponseAltAdapter(res?.data))
    );
  }

  pomogatorAddTagsSettings(params?: PomogatorAddTagsSettingsParams): Observable<SettingsAddedResponseAlt> {
    return this._api.pomogatorAddTagsSettings(pomogatorAddTagsSettingsAdapter(params)).pipe(
      map((res) => settingsAddedResponseAltAdapter(res?.data))
    );
  }

  pomogatorDeletePriceListSettings(params?: PomogatorDeletePriceListSettingsParams): Observable<void> {
    return this._api.pomogatorDeletePriceListSettings(pomogatorDeletePriceListSettingsAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

  pomogatorDeleteTagsSettings(params?: PomogatorDeleteTagsSettingsParams): Observable<void> {
    return this._api.pomogatorDeleteTagsSettings(pomogatorDeleteTagsSettingsAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

  pomogatorGetSettings(params?: PomogatorGetSettingsParams): Observable<PomogatorSettingsResultAlt> {
    return this._api.pomogatorGetSettings(pomogatorGetSettingsAdapter(params)).pipe(
      map((res) => pomogatorSettingsResultAltAdapter(res?.data))
    );
  }

  pomogatorGetSettingsExistFlag(params?: PomogatorGetSettingsExistFlagParams): Observable<boolean> {
    return this._api.pomogatorGetSettingsExistFlag(pomogatorGetSettingsExistFlagAdapter(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  pomogatorGetSettingsPriceList(params: PomogatorGetSettingsPriceListParams): Observable<PriceListItemAlt> {
    return this._api.pomogatorGetSettingsPriceList(pomogatorGetSettingsPriceListAdapter(params)).pipe(
      map((res) => priceListItemAltAdapter(res?.data))
    );
  }

  pomogatorGetSettingsPriceLists(params?: PomogatorGetSettingsPriceListsParams): Observable<PriceListItemAlt[]> {
    return this._api.pomogatorGetSettingsPriceLists(pomogatorGetSettingsPriceListsAdapter(params)).pipe(
      map((res) => (res?.data?.items ?? []).map((item) => priceListItemAltAdapter(item)))
    );
  }

  pomogatorGetSettingsStats(params?: PomogatorGetSettingsStatsParams): Observable<SettingsStatsResultAlt> {
    return this._api.pomogatorGetSettingsStats(pomogatorGetSettingsStatsAdapter(params)).pipe(
      map((res) => settingsStatsResultAltAdapter(res?.data))
    );
  }

  pomogatorGetSettingsTag(params: PomogatorGetSettingsTagParams): Observable<TagItemAlt> {
    return this._api.pomogatorGetSettingsTag(pomogatorGetSettingsTagAdapter(params)).pipe(
      map((res) => tagItemAltAdapter(res?.data))
    );
  }

  pomogatorGetSettingsTagExist(params: PomogatorGetSettingsTagExistParams): Observable<boolean> {
    return this._api.pomogatorGetSettingsTagExist(pomogatorGetSettingsTagExistAdapter(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  pomogatorGetSettingsTags(params?: PomogatorGetSettingsTagsParams): Observable<TagItemAlt[]> {
    return this._api.pomogatorGetSettingsTags(pomogatorGetSettingsTagsAdapter(params)).pipe(
      map((res) => (res?.data?.items ?? []).map((item) => tagItemAltAdapter(item)))
    );
  }

  pomogatorGetTradeRecommendations(params?: PomogatorGetTradeRecommendationsParams): Observable<SearchRecommendationsResultAlt> {
    return this._api.pomogatorGetTradeRecommendations(pomogatorGetTradeRecommendationsAdapter(params)).pipe(
      map((res) => searchRecommendationsResultAltAdapter(res?.data))
    );
  }

  pomogatorGetTradeRecommendationsExtended(params?: PomogatorGetTradeRecommendationsExtendedParams): Observable<MarketSearchResult[]> {
    return this._api.pomogatorGetTradeRecommendationsExtended(pomogatorGetTradeRecommendationsExtendedAdapter(params)).pipe(
      map((res) => (res?.data?.items ?? []).map((item) => marketSearchResultAdapter(item)))
    );
  }

  pomogatorSetRegionsForAllTags(params?: PomogatorSetRegionsForAllTagsParams): Observable<void> {
    return this._api.pomogatorSetRegionsForAllTags(pomogatorSetRegionsForAllTagsAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

  pomogatorTogglePriceListSettings(params?: PomogatorTogglePriceListSettingsParams): Observable<void> {
    return this._api.pomogatorTogglePriceListSettings(pomogatorTogglePriceListSettingsAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

  pomogatorToggleTagSettings(params?: PomogatorToggleTagSettingsParams): Observable<void> {
    return this._api.pomogatorToggleTagSettings(pomogatorToggleTagSettingsAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

  pomogatorUpdatePriceListSettings(params?: PomogatorUpdatePriceListSettingsParams): Observable<void> {
    return this._api.pomogatorUpdatePriceListSettings(pomogatorUpdatePriceListSettingsAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

  pomogatorUpdateTagsSettings(params?: PomogatorUpdateTagsSettingsParams): Observable<void> {
    return this._api.pomogatorUpdateTagsSettings(pomogatorUpdateTagsSettingsAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

}
