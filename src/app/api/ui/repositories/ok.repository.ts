import { adaptOkServiceBriefReportToUI } from '../adapters/toUI/ok-service-brief-report.adapter';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { OkApiService } from '../../swagger/services/ok-api.service';
import { OkGetBriefListParams, okGetBriefListParamsAdapter } from './params/ok-get-brief-list.params';
import { OkGetParams, okGetParamsAdapter } from './params/ok-get.params';
import { OkGetReportParams, okGetReportParamsAdapter } from './params/ok-get-report.params';
import { OkSendReportOnEmailParams, okSendReportOnEmailParamsAdapter } from './params/ok-send-report-on-email.params';
import { OkServiceBriefReport } from '../models/ok-service-brief-report.interface';

@Injectable({ providedIn: 'root' })
export class OkRepository {
  private readonly _api = inject(OkApiService);

  okGet(params: OkGetParams): Observable<OkServiceBriefReport> {
    return this._api.okGet(okGetParamsAdapter.adapt(params)).pipe(
      map((res) => adaptOkServiceBriefReportToUI(res?.data))
    );
  }

  okGetBriefList(params?: OkGetBriefListParams): Observable<OkServiceBriefReport[]> {
    return this._api.okGetBriefList(okGetBriefListParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptOkServiceBriefReportToUI(item)))
    );
  }

  okGetReport(params: OkGetReportParams): Observable<Blob> {
    return this._api.okGetReport(okGetReportParamsAdapter.adapt(params));
  }

  okSendReportOnEmail(params?: OkSendReportOnEmailParams): Observable<Blob> {
    return this._api.okSendReportOnEmail(okSendReportOnEmailParamsAdapter.adapt(params));
  }

}
