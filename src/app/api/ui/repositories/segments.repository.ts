import { adaptCharacteristicToUI } from '../adapters/toUI/characteristic.adapter';
import { adaptSegmentInfoToUI } from '../adapters/toUI/segment-info.adapter';
import { adaptSegmentSearchResultToUI } from '../adapters/toUI/segment-search-result.adapter';
import { adaptSegmentToUI } from '../adapters/toUI/segment.adapter';
import { Characteristic } from '../models/characteristic.interface';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Segment } from '../models/segment.interface';
import { SegmentInfo } from '../models/segment-info.interface';
import { SegmentsActivateSegmentParams, segmentsActivateSegmentParamsAdapter } from './params/segments-activate-segment.params';
import { SegmentsApiService } from '../../swagger/services/segments-api.service';
import { SegmentsCreateParams, segmentsCreateParamsAdapter } from './params/segments-create.params';
import { SegmentSearchResult } from '../models/segment-search-result.interface';
import { SegmentsGetByIdParams, segmentsGetByIdParamsAdapter } from './params/segments-get-by-id.params';
import { SegmentsGetByNameParams, segmentsGetByNameParamsAdapter } from './params/segments-get-by-name.params';
import { SegmentsParseSegmentFormExcelParams, segmentsParseSegmentFormExcelParamsAdapter } from './params/segments-parse-segment-form-excel.params';
import { SegmentsSearchParams, segmentsSearchParamsAdapter } from './params/segments-search.params';

@Injectable({ providedIn: 'root' })
export class SegmentsRepository {
  private readonly _api = inject(SegmentsApiService);

  segmentsActivateSegment(params?: SegmentsActivateSegmentParams): Observable<Blob> {
    return this._api.segmentsActivateSegment(segmentsActivateSegmentParamsAdapter.adapt(params));
  }

  segmentsCreate(params?: SegmentsCreateParams): Observable<number> {
    return this._api.segmentsCreate(segmentsCreateParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  segmentsGetById(params: SegmentsGetByIdParams): Observable<SegmentInfo> {
    return this._api.segmentsGetById(segmentsGetByIdParamsAdapter.adapt(params)).pipe(
      map((res) => adaptSegmentInfoToUI(res?.data))
    );
  }

  segmentsGetByName(params?: SegmentsGetByNameParams): Observable<Segment> {
    return this._api.segmentsGetByName(segmentsGetByNameParamsAdapter.adapt(params)).pipe(
      map((res) => adaptSegmentToUI(res?.data))
    );
  }

  segmentsParseSegmentFormExcel(params: SegmentsParseSegmentFormExcelParams): Observable<Characteristic[]> {
    return this._api.segmentsParseSegmentFormExcel(segmentsParseSegmentFormExcelParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptCharacteristicToUI(item)))
    );
  }

  segmentsSearch(params?: SegmentsSearchParams): Observable<SegmentSearchResult[]> {
    return this._api.segmentsSearch(segmentsSearchParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptSegmentSearchResultToUI(item)))
    );
  }

}
