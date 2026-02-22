import { DashboardApiService } from '../../swagger/services/dashboard-api.service';
import { DashboardGetAggregationInfoByDaysInMonthParams, dashboardGetAggregationInfoByDaysInMonthAdapter } from './params/dashboard-get-aggregation-info-by-days-in-month.params';
import { DashboardGetAggregationInfoByMonthParams, dashboardGetAggregationInfoByMonthAdapter } from './params/dashboard-get-aggregation-info-by-month.params';
import { DashboardGetAggregationInfoByStatusForUserParams, dashboardGetAggregationInfoByStatusForUserAdapter } from './params/dashboard-get-aggregation-info-by-status-for-user.params';
import { DashboardGetAggregationInfoByStatusParams, dashboardGetAggregationInfoByStatusAdapter } from './params/dashboard-get-aggregation-info-by-status.params';
import { DashboardGetAggregationInfoParams, dashboardGetAggregationInfoAdapter } from './params/dashboard-get-aggregation-info.params';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { MarketOfferDatesResult } from '../models/market-offer-dates-result.interface';
import { marketOfferDatesResultAdapter } from '../adapters/models/market-offer-dates-result.adapter';
import { MarketOfferStatusResult } from '../models/market-offer-status-result.interface';
import { marketOfferStatusResultAdapter } from '../adapters/models/market-offer-status-result.adapter';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DashboardRepository {
  private readonly _api = inject(DashboardApiService);

  dashboardGetAggregationInfo(params?: DashboardGetAggregationInfoParams): Observable<MarketOfferStatusResult[]> {
    return this._api.dashboardGetAggregationInfo(dashboardGetAggregationInfoAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => marketOfferStatusResultAdapter(item)))
    );
  }

  dashboardGetAggregationInfoByDaysInMonth(params: DashboardGetAggregationInfoByDaysInMonthParams): Observable<MarketOfferDatesResult[]> {
    return this._api.dashboardGetAggregationInfoByDaysInMonth(dashboardGetAggregationInfoByDaysInMonthAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => marketOfferDatesResultAdapter(item)))
    );
  }

  dashboardGetAggregationInfoByMonth(params: DashboardGetAggregationInfoByMonthParams): Observable<MarketOfferStatusResult[]> {
    return this._api.dashboardGetAggregationInfoByMonth(dashboardGetAggregationInfoByMonthAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => marketOfferStatusResultAdapter(item)))
    );
  }

  dashboardGetAggregationInfoByStatus(params: DashboardGetAggregationInfoByStatusParams): Observable<MarketOfferStatusResult[]> {
    return this._api.dashboardGetAggregationInfoByStatus(dashboardGetAggregationInfoByStatusAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => marketOfferStatusResultAdapter(item)))
    );
  }

  dashboardGetAggregationInfoByStatusForUser(params: DashboardGetAggregationInfoByStatusForUserParams): Observable<MarketOfferStatusResult[]> {
    return this._api.dashboardGetAggregationInfoByStatusForUser(dashboardGetAggregationInfoByStatusForUserAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => marketOfferStatusResultAdapter(item)))
    );
  }

}
