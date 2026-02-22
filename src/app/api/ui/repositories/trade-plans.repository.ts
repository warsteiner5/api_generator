import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { MarketSearchResult } from '../models/market-search-result.interface';
import { marketSearchResultAdapter } from '../adapters/models/market-search-result.adapter';
import { Observable } from 'rxjs';
import { TradePlanLotMarket } from '../models/trade-plan-lot-market.interface';
import { tradePlanLotMarketAdapter } from '../adapters/models/trade-plan-lot-market.adapter';
import { TradePlanMarketShort } from '../models/trade-plan-market-short.interface';
import { tradePlanMarketShortAdapter } from '../adapters/models/trade-plan-market-short.adapter';
import { TradePlansApiService } from '../../swagger/services/trade-plans-api.service';
import { TradePlansGetActualPlanParams, tradePlansGetActualPlanAdapter } from './params/trade-plans-get-actual-plan.params';
import { TradePlansGetArchivePlansParams, tradePlansGetArchivePlansAdapter } from './params/trade-plans-get-archive-plans.params';
import { TradePlansGetPaginatePlanLotsParams, tradePlansGetPaginatePlanLotsAdapter } from './params/trade-plans-get-paginate-plan-lots.params';
import { TradePlansGetPaginatePublicPlanLotsParams, tradePlansGetPaginatePublicPlanLotsAdapter } from './params/trade-plans-get-paginate-public-plan-lots.params';
import { TradePlansGetPlanShortDetailsParams, tradePlansGetPlanShortDetailsAdapter } from './params/trade-plans-get-plan-short-details.params';
import { TradePlansGetTradesByPlanPostionParams, tradePlansGetTradesByPlanPostionAdapter } from './params/trade-plans-get-trades-by-plan-postion.params';
import { TradePlansPlanPositionToTradesLinkNotActualParams, tradePlansPlanPositionToTradesLinkNotActualAdapter } from './params/trade-plans-plan-position-to-trades-link-not-actual.params';
import { TradePlansUploadAndSavePlanParams, tradePlansUploadAndSavePlanAdapter } from './params/trade-plans-upload-and-save-plan.params';

@Injectable({ providedIn: 'root' })
export class TradePlansRepository {
  private readonly _api = inject(TradePlansApiService);

  tradePlansGetActualPlan(params?: TradePlansGetActualPlanParams): Observable<TradePlanMarketShort> {
    return this._api.tradePlansGetActualPlan(tradePlansGetActualPlanAdapter(params)).pipe(
      map((res) => tradePlanMarketShortAdapter(res?.data))
    );
  }

  tradePlansGetArchivePlans(params?: TradePlansGetArchivePlansParams): Observable<TradePlanMarketShort[]> {
    return this._api.tradePlansGetArchivePlans(tradePlansGetArchivePlansAdapter(params)).pipe(
      map((res) => (res?.data?.items ?? []).map((item) => tradePlanMarketShortAdapter(item)))
    );
  }

  tradePlansGetPaginatePlanLots(params: TradePlansGetPaginatePlanLotsParams): Observable<TradePlanLotMarket[]> {
    return this._api.tradePlansGetPaginatePlanLots(tradePlansGetPaginatePlanLotsAdapter(params)).pipe(
      map((res) => (res?.data?.items ?? []).map((item) => tradePlanLotMarketAdapter(item)))
    );
  }

  tradePlansGetPaginatePublicPlanLots(params?: TradePlansGetPaginatePublicPlanLotsParams): Observable<TradePlanLotMarket[]> {
    return this._api.tradePlansGetPaginatePublicPlanLots(tradePlansGetPaginatePublicPlanLotsAdapter(params)).pipe(
      map((res) => (res?.data?.items ?? []).map((item) => tradePlanLotMarketAdapter(item)))
    );
  }

  tradePlansGetPlanShortDetails(params: TradePlansGetPlanShortDetailsParams): Observable<TradePlanMarketShort> {
    return this._api.tradePlansGetPlanShortDetails(tradePlansGetPlanShortDetailsAdapter(params)).pipe(
      map((res) => tradePlanMarketShortAdapter(res?.data))
    );
  }

  tradePlansGetTradesByPlanPostion(params: TradePlansGetTradesByPlanPostionParams): Observable<MarketSearchResult[]> {
    return this._api.tradePlansGetTradesByPlanPostion(tradePlansGetTradesByPlanPostionAdapter(params)).pipe(
      map((res) => (res?.data?.items ?? []).map((item) => marketSearchResultAdapter(item)))
    );
  }

  tradePlansPlanPositionToTradesLinkNotActual(params: TradePlansPlanPositionToTradesLinkNotActualParams): Observable<void> {
    return this._api.tradePlansPlanPositionToTradesLinkNotActual(tradePlansPlanPositionToTradesLinkNotActualAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

  tradePlansUploadAndSavePlan(params: TradePlansUploadAndSavePlanParams): Observable<number> {
    return this._api.tradePlansUploadAndSavePlan(tradePlansUploadAndSavePlanAdapter(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

}
