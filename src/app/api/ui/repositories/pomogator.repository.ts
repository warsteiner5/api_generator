import { adaptMarketSearchResultToUI } from '../adapters/toUI/market-search-result.adapter';
import { adaptPomogatorSettingsResultAltToUI } from '../adapters/toUI/pomogator-settings-result-alt.adapter';
import { adaptPriceListItemAltToUI } from '../adapters/toUI/price-list-item-alt.adapter';
import { adaptSearchRecommendationsResultAltToUI } from '../adapters/toUI/search-recommendations-result-alt.adapter';
import { adaptSettingsAddedResponseAltToUI } from '../adapters/toUI/settings-added-response-alt.adapter';
import { adaptSettingsStatsResultAltToUI } from '../adapters/toUI/settings-stats-result-alt.adapter';
import { adaptTagItemAltToUI } from '../adapters/toUI/tag-item-alt.adapter';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { MarketSearchResult } from '../models/market-search-result.interface';
import { Observable } from 'rxjs';
import { PomogatorAddMultipleTagsSettingsParams, pomogatorAddMultipleTagsSettingsParamsAdapter } from './params/pomogator-add-multiple-tags-settings.params';
import { PomogatorAddPriceListSettingsParams, pomogatorAddPriceListSettingsParamsAdapter } from './params/pomogator-add-price-list-settings.params';
import { PomogatorAddTagsSettingsParams, pomogatorAddTagsSettingsParamsAdapter } from './params/pomogator-add-tags-settings.params';
import { PomogatorApiService } from '../../swagger/services/pomogator-api.service';
import { PomogatorDeletePriceListSettingsParams, pomogatorDeletePriceListSettingsParamsAdapter } from './params/pomogator-delete-price-list-settings.params';
import { PomogatorDeleteTagsSettingsParams, pomogatorDeleteTagsSettingsParamsAdapter } from './params/pomogator-delete-tags-settings.params';
import { PomogatorGetSettingsExistFlagParams, pomogatorGetSettingsExistFlagParamsAdapter } from './params/pomogator-get-settings-exist-flag.params';
import { PomogatorGetSettingsParams, pomogatorGetSettingsParamsAdapter } from './params/pomogator-get-settings.params';
import { PomogatorGetSettingsPriceListParams, pomogatorGetSettingsPriceListParamsAdapter } from './params/pomogator-get-settings-price-list.params';
import { PomogatorGetSettingsPriceListsParams, pomogatorGetSettingsPriceListsParamsAdapter } from './params/pomogator-get-settings-price-lists.params';
import { PomogatorGetSettingsStatsParams, pomogatorGetSettingsStatsParamsAdapter } from './params/pomogator-get-settings-stats.params';
import { PomogatorGetSettingsTagExistParams, pomogatorGetSettingsTagExistParamsAdapter } from './params/pomogator-get-settings-tag-exist.params';
import { PomogatorGetSettingsTagParams, pomogatorGetSettingsTagParamsAdapter } from './params/pomogator-get-settings-tag.params';
import { PomogatorGetSettingsTagsParams, pomogatorGetSettingsTagsParamsAdapter } from './params/pomogator-get-settings-tags.params';
import { PomogatorGetTradeRecommendationsExtendedParams, pomogatorGetTradeRecommendationsExtendedParamsAdapter } from './params/pomogator-get-trade-recommendations-extended.params';
import { PomogatorGetTradeRecommendationsParams, pomogatorGetTradeRecommendationsParamsAdapter } from './params/pomogator-get-trade-recommendations.params';
import { PomogatorSetRegionsForAllTagsParams, pomogatorSetRegionsForAllTagsParamsAdapter } from './params/pomogator-set-regions-for-all-tags.params';
import { PomogatorSettingsResultAlt } from '../models/pomogator-settings-result-alt.interface';
import { PomogatorTogglePriceListSettingsParams, pomogatorTogglePriceListSettingsParamsAdapter } from './params/pomogator-toggle-price-list-settings.params';
import { PomogatorToggleTagSettingsParams, pomogatorToggleTagSettingsParamsAdapter } from './params/pomogator-toggle-tag-settings.params';
import { PomogatorUpdatePriceListSettingsParams, pomogatorUpdatePriceListSettingsParamsAdapter } from './params/pomogator-update-price-list-settings.params';
import { PomogatorUpdateTagsSettingsParams, pomogatorUpdateTagsSettingsParamsAdapter } from './params/pomogator-update-tags-settings.params';
import { PriceListItemAlt } from '../models/price-list-item-alt.interface';
import { SearchRecommendationsResultAlt } from '../models/search-recommendations-result-alt.interface';
import { SettingsAddedResponseAlt } from '../models/settings-added-response-alt.interface';
import { SettingsStatsResultAlt } from '../models/settings-stats-result-alt.interface';
import { TagItemAlt } from '../models/tag-item-alt.interface';

@Injectable({ providedIn: 'root' })
export class PomogatorRepository {
  private readonly _api = inject(PomogatorApiService);

  pomogatorAddMultipleTagsSettings(params?: PomogatorAddMultipleTagsSettingsParams): Observable<SettingsAddedResponseAlt> {
    return this._api.pomogatorAddMultipleTagsSettings(pomogatorAddMultipleTagsSettingsParamsAdapter.adapt(params)).pipe(
      map((res) => adaptSettingsAddedResponseAltToUI(res?.data))
    );
  }

  pomogatorAddPriceListSettings(params?: PomogatorAddPriceListSettingsParams): Observable<SettingsAddedResponseAlt> {
    return this._api.pomogatorAddPriceListSettings(pomogatorAddPriceListSettingsParamsAdapter.adapt(params)).pipe(
      map((res) => adaptSettingsAddedResponseAltToUI(res?.data))
    );
  }

  pomogatorAddTagsSettings(params?: PomogatorAddTagsSettingsParams): Observable<SettingsAddedResponseAlt> {
    return this._api.pomogatorAddTagsSettings(pomogatorAddTagsSettingsParamsAdapter.adapt(params)).pipe(
      map((res) => adaptSettingsAddedResponseAltToUI(res?.data))
    );
  }

  pomogatorDeletePriceListSettings(params?: PomogatorDeletePriceListSettingsParams): Observable<void> {
    return this._api.pomogatorDeletePriceListSettings(pomogatorDeletePriceListSettingsParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  pomogatorDeleteTagsSettings(params?: PomogatorDeleteTagsSettingsParams): Observable<void> {
    return this._api.pomogatorDeleteTagsSettings(pomogatorDeleteTagsSettingsParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  pomogatorGetSettings(params?: PomogatorGetSettingsParams): Observable<PomogatorSettingsResultAlt> {
    return this._api.pomogatorGetSettings(pomogatorGetSettingsParamsAdapter.adapt(params)).pipe(
      map((res) => adaptPomogatorSettingsResultAltToUI(res?.data))
    );
  }

  pomogatorGetSettingsExistFlag(params?: PomogatorGetSettingsExistFlagParams): Observable<boolean> {
    return this._api.pomogatorGetSettingsExistFlag(pomogatorGetSettingsExistFlagParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  pomogatorGetSettingsPriceList(params: PomogatorGetSettingsPriceListParams): Observable<PriceListItemAlt> {
    return this._api.pomogatorGetSettingsPriceList(pomogatorGetSettingsPriceListParamsAdapter.adapt(params)).pipe(
      map((res) => adaptPriceListItemAltToUI(res?.data))
    );
  }

  pomogatorGetSettingsPriceLists(params?: PomogatorGetSettingsPriceListsParams): Observable<PriceListItemAlt[]> {
    return this._api.pomogatorGetSettingsPriceLists(pomogatorGetSettingsPriceListsParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data?.items ?? []).map((item) => adaptPriceListItemAltToUI(item)))
    );
  }

  pomogatorGetSettingsStats(params?: PomogatorGetSettingsStatsParams): Observable<SettingsStatsResultAlt> {
    return this._api.pomogatorGetSettingsStats(pomogatorGetSettingsStatsParamsAdapter.adapt(params)).pipe(
      map((res) => adaptSettingsStatsResultAltToUI(res?.data))
    );
  }

  pomogatorGetSettingsTag(params: PomogatorGetSettingsTagParams): Observable<TagItemAlt> {
    return this._api.pomogatorGetSettingsTag(pomogatorGetSettingsTagParamsAdapter.adapt(params)).pipe(
      map((res) => adaptTagItemAltToUI(res?.data))
    );
  }

  pomogatorGetSettingsTagExist(params: PomogatorGetSettingsTagExistParams): Observable<boolean> {
    return this._api.pomogatorGetSettingsTagExist(pomogatorGetSettingsTagExistParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  pomogatorGetSettingsTags(params?: PomogatorGetSettingsTagsParams): Observable<TagItemAlt[]> {
    return this._api.pomogatorGetSettingsTags(pomogatorGetSettingsTagsParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data?.items ?? []).map((item) => adaptTagItemAltToUI(item)))
    );
  }

  pomogatorGetTradeRecommendations(params?: PomogatorGetTradeRecommendationsParams): Observable<SearchRecommendationsResultAlt> {
    return this._api.pomogatorGetTradeRecommendations(pomogatorGetTradeRecommendationsParamsAdapter.adapt(params)).pipe(
      map((res) => adaptSearchRecommendationsResultAltToUI(res?.data))
    );
  }

  pomogatorGetTradeRecommendationsExtended(params?: PomogatorGetTradeRecommendationsExtendedParams): Observable<MarketSearchResult[]> {
    return this._api.pomogatorGetTradeRecommendationsExtended(pomogatorGetTradeRecommendationsExtendedParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data?.items ?? []).map((item) => adaptMarketSearchResultToUI(item)))
    );
  }

  pomogatorSetRegionsForAllTags(params?: PomogatorSetRegionsForAllTagsParams): Observable<void> {
    return this._api.pomogatorSetRegionsForAllTags(pomogatorSetRegionsForAllTagsParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  pomogatorTogglePriceListSettings(params?: PomogatorTogglePriceListSettingsParams): Observable<void> {
    return this._api.pomogatorTogglePriceListSettings(pomogatorTogglePriceListSettingsParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  pomogatorToggleTagSettings(params?: PomogatorToggleTagSettingsParams): Observable<void> {
    return this._api.pomogatorToggleTagSettings(pomogatorToggleTagSettingsParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  pomogatorUpdatePriceListSettings(params?: PomogatorUpdatePriceListSettingsParams): Observable<void> {
    return this._api.pomogatorUpdatePriceListSettings(pomogatorUpdatePriceListSettingsParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  pomogatorUpdateTagsSettings(params?: PomogatorUpdateTagsSettingsParams): Observable<void> {
    return this._api.pomogatorUpdateTagsSettings(pomogatorUpdateTagsSettingsParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

}
