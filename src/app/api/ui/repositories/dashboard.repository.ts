import { adaptMarketOfferDatesResultToUI } from '../adapters/toUI/market-offer-dates-result.adapter';
import { adaptMarketOfferStatusResultToUI } from '../adapters/toUI/market-offer-status-result.adapter';
import { DashboardApiService } from '../../swagger/services/dashboard-api.service';
import { DashboardGetAggregationInfoByDaysInMonthParams, dashboardGetAggregationInfoByDaysInMonthParamsAdapter } from './params/dashboard-get-aggregation-info-by-days-in-month.params';
import { DashboardGetAggregationInfoByMonthParams, dashboardGetAggregationInfoByMonthParamsAdapter } from './params/dashboard-get-aggregation-info-by-month.params';
import { DashboardGetAggregationInfoByStatusForUserParams, dashboardGetAggregationInfoByStatusForUserParamsAdapter } from './params/dashboard-get-aggregation-info-by-status-for-user.params';
import { DashboardGetAggregationInfoByStatusParams, dashboardGetAggregationInfoByStatusParamsAdapter } from './params/dashboard-get-aggregation-info-by-status.params';
import { DashboardGetAggregationInfoParams, dashboardGetAggregationInfoParamsAdapter } from './params/dashboard-get-aggregation-info.params';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { MarketOfferDatesResult } from '../models/market-offer-dates-result.interface';
import { MarketOfferStatusResult } from '../models/market-offer-status-result.interface';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DashboardRepository {
  private readonly _api = inject(DashboardApiService);

  dashboardGetAggregationInfo(params?: DashboardGetAggregationInfoParams): Observable<MarketOfferStatusResult[]> {
    return this._api.dashboardGetAggregationInfo(dashboardGetAggregationInfoParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptMarketOfferStatusResultToUI(item)))
    );
  }

  dashboardGetAggregationInfoByDaysInMonth(params: DashboardGetAggregationInfoByDaysInMonthParams): Observable<MarketOfferDatesResult[]> {
    return this._api.dashboardGetAggregationInfoByDaysInMonth(dashboardGetAggregationInfoByDaysInMonthParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptMarketOfferDatesResultToUI(item)))
    );
  }

  dashboardGetAggregationInfoByMonth(params: DashboardGetAggregationInfoByMonthParams): Observable<MarketOfferStatusResult[]> {
    return this._api.dashboardGetAggregationInfoByMonth(dashboardGetAggregationInfoByMonthParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptMarketOfferStatusResultToUI(item)))
    );
  }

  dashboardGetAggregationInfoByStatus(params: DashboardGetAggregationInfoByStatusParams): Observable<MarketOfferStatusResult[]> {
    return this._api.dashboardGetAggregationInfoByStatus(dashboardGetAggregationInfoByStatusParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptMarketOfferStatusResultToUI(item)))
    );
  }

  dashboardGetAggregationInfoByStatusForUser(params: DashboardGetAggregationInfoByStatusForUserParams): Observable<MarketOfferStatusResult[]> {
    return this._api.dashboardGetAggregationInfoByStatusForUser(dashboardGetAggregationInfoByStatusForUserParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptMarketOfferStatusResultToUI(item)))
    );
  }

}
