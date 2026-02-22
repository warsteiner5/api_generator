import { Characteristic } from '../models/characteristic.interface';
import { characteristicAdapter } from '../adapters/models/characteristic.adapter';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Segment } from '../models/segment.interface';
import { segmentAdapter } from '../adapters/models/segment.adapter';
import { SegmentInfo } from '../models/segment-info.interface';
import { segmentInfoAdapter } from '../adapters/models/segment-info.adapter';
import { SegmentsActivateSegmentParams, segmentsActivateSegmentAdapter } from './params/segments-activate-segment.params';
import { SegmentsApiService } from '../../swagger/services/segments-api.service';
import { SegmentsCreateParams, segmentsCreateAdapter } from './params/segments-create.params';
import { SegmentSearchResult } from '../models/segment-search-result.interface';
import { segmentSearchResultAdapter } from '../adapters/models/segment-search-result.adapter';
import { SegmentsGetByIdParams, segmentsGetByIdAdapter } from './params/segments-get-by-id.params';
import { SegmentsGetByNameParams, segmentsGetByNameAdapter } from './params/segments-get-by-name.params';
import { SegmentsParseSegmentFormExcelParams, segmentsParseSegmentFormExcelAdapter } from './params/segments-parse-segment-form-excel.params';
import { SegmentsSearchParams, segmentsSearchAdapter } from './params/segments-search.params';

@Injectable({ providedIn: 'root' })
export class SegmentsRepository {
  private readonly _api = inject(SegmentsApiService);

  segmentsActivateSegment(params?: SegmentsActivateSegmentParams): Observable<Blob> {
    return this._api.segmentsActivateSegment(segmentsActivateSegmentAdapter(params));
  }

  segmentsCreate(params?: SegmentsCreateParams): Observable<number> {
    return this._api.segmentsCreate(segmentsCreateAdapter(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  segmentsGetById(params: SegmentsGetByIdParams): Observable<SegmentInfo> {
    return this._api.segmentsGetById(segmentsGetByIdAdapter(params)).pipe(
      map((res) => segmentInfoAdapter(res?.data))
    );
  }

  segmentsGetByName(params?: SegmentsGetByNameParams): Observable<Segment> {
    return this._api.segmentsGetByName(segmentsGetByNameAdapter(params)).pipe(
      map((res) => segmentAdapter(res?.data))
    );
  }

  segmentsParseSegmentFormExcel(params: SegmentsParseSegmentFormExcelParams): Observable<Characteristic[]> {
    return this._api.segmentsParseSegmentFormExcel(segmentsParseSegmentFormExcelAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => characteristicAdapter(item)))
    );
  }

  segmentsSearch(params?: SegmentsSearchParams): Observable<SegmentSearchResult[]> {
    return this._api.segmentsSearch(segmentsSearchAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => segmentSearchResultAdapter(item)))
    );
  }

}
