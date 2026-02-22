import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { OkApiService } from '../../swagger/services/ok-api.service';
import { OkGetBriefListParams, okGetBriefListAdapter } from './params/ok-get-brief-list.params';
import { OkGetParams, okGetAdapter } from './params/ok-get.params';
import { OkGetReportParams, okGetReportAdapter } from './params/ok-get-report.params';
import { OkSendReportOnEmailParams, okSendReportOnEmailAdapter } from './params/ok-send-report-on-email.params';
import { OkServiceBriefReport } from '../models/ok-service-brief-report.interface';
import { okServiceBriefReportAdapter } from '../adapters/models/ok-service-brief-report.adapter';

@Injectable({ providedIn: 'root' })
export class OkRepository {
  private readonly _api = inject(OkApiService);

  okGet(params: OkGetParams): Observable<OkServiceBriefReport> {
    return this._api.okGet(okGetAdapter(params)).pipe(
      map((res) => okServiceBriefReportAdapter(res?.data))
    );
  }

  okGetBriefList(params?: OkGetBriefListParams): Observable<OkServiceBriefReport[]> {
    return this._api.okGetBriefList(okGetBriefListAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => okServiceBriefReportAdapter(item)))
    );
  }

  okGetReport(params: OkGetReportParams): Observable<Blob> {
    return this._api.okGetReport(okGetReportAdapter(params));
  }

  okSendReportOnEmail(params?: OkSendReportOnEmailParams): Observable<Blob> {
    return this._api.okSendReportOnEmail(okSendReportOnEmailAdapter(params));
  }

}
