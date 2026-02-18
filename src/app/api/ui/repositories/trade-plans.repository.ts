import { adaptMarketSearchResultToUI } from '../adapters/toUI/market-search-result.adapter';
import { adaptTradePlanLotMarketToUI } from '../adapters/toUI/trade-plan-lot-market.adapter';
import { adaptTradePlanMarketShortToUI } from '../adapters/toUI/trade-plan-market-short.adapter';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { MarketSearchResult } from '../models/market-search-result.interface';
import { Observable } from 'rxjs';
import { TradePlanLotMarket } from '../models/trade-plan-lot-market.interface';
import { TradePlanMarketShort } from '../models/trade-plan-market-short.interface';
import { TradePlansApiService } from '../../swagger/services/trade-plans-api.service';
import { TradePlansGetActualPlanParams, tradePlansGetActualPlanParamsAdapter } from './params/trade-plans-get-actual-plan.params';
import { TradePlansGetArchivePlansParams, tradePlansGetArchivePlansParamsAdapter } from './params/trade-plans-get-archive-plans.params';
import { TradePlansGetPaginatePlanLotsParams, tradePlansGetPaginatePlanLotsParamsAdapter } from './params/trade-plans-get-paginate-plan-lots.params';
import { TradePlansGetPaginatePublicPlanLotsParams, tradePlansGetPaginatePublicPlanLotsParamsAdapter } from './params/trade-plans-get-paginate-public-plan-lots.params';
import { TradePlansGetPlanShortDetailsParams, tradePlansGetPlanShortDetailsParamsAdapter } from './params/trade-plans-get-plan-short-details.params';
import { TradePlansGetTradesByPlanPostionParams, tradePlansGetTradesByPlanPostionParamsAdapter } from './params/trade-plans-get-trades-by-plan-postion.params';
import { TradePlansPlanPositionToTradesLinkNotActualParams, tradePlansPlanPositionToTradesLinkNotActualParamsAdapter } from './params/trade-plans-plan-position-to-trades-link-not-actual.params';
import { TradePlansUploadAndSavePlanParams, tradePlansUploadAndSavePlanParamsAdapter } from './params/trade-plans-upload-and-save-plan.params';

@Injectable({ providedIn: 'root' })
export class TradePlansRepository {
  private readonly _api = inject(TradePlansApiService);

  tradePlansGetActualPlan(params?: TradePlansGetActualPlanParams): Observable<TradePlanMarketShort> {
    return this._api.tradePlansGetActualPlan(tradePlansGetActualPlanParamsAdapter.adapt(params)).pipe(
      map((res) => adaptTradePlanMarketShortToUI(res?.data))
    );
  }

  tradePlansGetArchivePlans(params?: TradePlansGetArchivePlansParams): Observable<TradePlanMarketShort[]> {
    return this._api.tradePlansGetArchivePlans(tradePlansGetArchivePlansParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data?.items ?? []).map((item) => adaptTradePlanMarketShortToUI(item)))
    );
  }

  tradePlansGetPaginatePlanLots(params: TradePlansGetPaginatePlanLotsParams): Observable<TradePlanLotMarket[]> {
    return this._api.tradePlansGetPaginatePlanLots(tradePlansGetPaginatePlanLotsParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data?.items ?? []).map((item) => adaptTradePlanLotMarketToUI(item)))
    );
  }

  tradePlansGetPaginatePublicPlanLots(params?: TradePlansGetPaginatePublicPlanLotsParams): Observable<TradePlanLotMarket[]> {
    return this._api.tradePlansGetPaginatePublicPlanLots(tradePlansGetPaginatePublicPlanLotsParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data?.items ?? []).map((item) => adaptTradePlanLotMarketToUI(item)))
    );
  }

  tradePlansGetPlanShortDetails(params: TradePlansGetPlanShortDetailsParams): Observable<TradePlanMarketShort> {
    return this._api.tradePlansGetPlanShortDetails(tradePlansGetPlanShortDetailsParamsAdapter.adapt(params)).pipe(
      map((res) => adaptTradePlanMarketShortToUI(res?.data))
    );
  }

  tradePlansGetTradesByPlanPostion(params: TradePlansGetTradesByPlanPostionParams): Observable<MarketSearchResult[]> {
    return this._api.tradePlansGetTradesByPlanPostion(tradePlansGetTradesByPlanPostionParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data?.items ?? []).map((item) => adaptMarketSearchResultToUI(item)))
    );
  }

  tradePlansPlanPositionToTradesLinkNotActual(params: TradePlansPlanPositionToTradesLinkNotActualParams): Observable<void> {
    return this._api.tradePlansPlanPositionToTradesLinkNotActual(tradePlansPlanPositionToTradesLinkNotActualParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  tradePlansUploadAndSavePlan(params: TradePlansUploadAndSavePlanParams): Observable<number> {
    return this._api.tradePlansUploadAndSavePlan(tradePlansUploadAndSavePlanParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

}
