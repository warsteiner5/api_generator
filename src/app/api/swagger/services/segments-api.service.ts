/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ApiMarketJsonResultOfInteger } from '../models/api-market-json-result-of-integer';
import { ApiMarketJsonResultOfListOfCharacteristicDto } from '../models/api-market-json-result-of-list-of-characteristic-dto';
import { ApiMarketJsonResultOfListOfSegmentSearchResultDto } from '../models/api-market-json-result-of-list-of-segment-search-result-dto';
import { ApiMarketJsonResultOfSegmentDto } from '../models/api-market-json-result-of-segment-dto';
import { ApiMarketJsonResultOfSegmentInfoDto } from '../models/api-market-json-result-of-segment-info-dto';
import { segmentsActivateSegment } from '../fn/segments/segments-activate-segment';
import { SegmentsActivateSegment$Params } from '../fn/segments/segments-activate-segment';
import { segmentsCreate } from '../fn/segments/segments-create';
import { SegmentsCreate$Params } from '../fn/segments/segments-create';
import { segmentsGetById } from '../fn/segments/segments-get-by-id';
import { SegmentsGetById$Params } from '../fn/segments/segments-get-by-id';
import { segmentsGetByName } from '../fn/segments/segments-get-by-name';
import { SegmentsGetByName$Params } from '../fn/segments/segments-get-by-name';
import { segmentsParseSegmentFormExcel } from '../fn/segments/segments-parse-segment-form-excel';
import { SegmentsParseSegmentFormExcel$Params } from '../fn/segments/segments-parse-segment-form-excel';
import { segmentsSearch } from '../fn/segments/segments-search';
import { SegmentsSearch$Params } from '../fn/segments/segments-search';

@Injectable({ providedIn: 'root' })
export class SegmentsApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `segmentsSearch()` */
  static readonly SegmentsSearchPath = '/bla-bla-vla/Segment/Search';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `segmentsSearch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  segmentsSearch$Response(params?: SegmentsSearch$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfSegmentSearchResultDto>> {
    return segmentsSearch(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `segmentsSearch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  segmentsSearch(params?: SegmentsSearch$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfListOfSegmentSearchResultDto> {
    return this.segmentsSearch$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfListOfSegmentSearchResultDto>): ApiMarketJsonResultOfListOfSegmentSearchResultDto => r.body)
    );
  }

  /** Path part for operation `segmentsGetByName()` */
  static readonly SegmentsGetByNamePath = '/bla-bla-vla/Segment/GetByName';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `segmentsGetByName()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  segmentsGetByName$Response(params?: SegmentsGetByName$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfSegmentDto>> {
    return segmentsGetByName(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `segmentsGetByName$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  segmentsGetByName(params?: SegmentsGetByName$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfSegmentDto> {
    return this.segmentsGetByName$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfSegmentDto>): ApiMarketJsonResultOfSegmentDto => r.body)
    );
  }

  /** Path part for operation `segmentsCreate()` */
  static readonly SegmentsCreatePath = '/bla-bla-vla/Segment';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `segmentsCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  segmentsCreate$Response(params?: SegmentsCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfInteger>> {
    return segmentsCreate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `segmentsCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  segmentsCreate(params?: SegmentsCreate$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfInteger> {
    return this.segmentsCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfInteger>): ApiMarketJsonResultOfInteger => r.body)
    );
  }

  /** Path part for operation `segmentsGetById()` */
  static readonly SegmentsGetByIdPath = '/bla-bla-vla/Segment/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `segmentsGetById()` instead.
   *
   * This method doesn't expect any request body.
   */
  segmentsGetById$Response(params: SegmentsGetById$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfSegmentInfoDto>> {
    return segmentsGetById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `segmentsGetById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  segmentsGetById(params: SegmentsGetById$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfSegmentInfoDto> {
    return this.segmentsGetById$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfSegmentInfoDto>): ApiMarketJsonResultOfSegmentInfoDto => r.body)
    );
  }

  /** Path part for operation `segmentsActivateSegment()` */
  static readonly SegmentsActivateSegmentPath = '/bla-bla-vla/Segment/ActivateSegment';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `segmentsActivateSegment()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  segmentsActivateSegment$Response(params?: SegmentsActivateSegment$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return segmentsActivateSegment(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `segmentsActivateSegment$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  segmentsActivateSegment(params?: SegmentsActivateSegment$Params, context?: HttpContext): Observable<Blob> {
    return this.segmentsActivateSegment$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `segmentsParseSegmentFormExcel()` */
  static readonly SegmentsParseSegmentFormExcelPath = '/bla-bla-vla/Segment/ParseSegmentFormExcel';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `segmentsParseSegmentFormExcel()` instead.
   *
   * This method doesn't expect any request body.
   */
  segmentsParseSegmentFormExcel$Response(params: SegmentsParseSegmentFormExcel$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfCharacteristicDto>> {
    return segmentsParseSegmentFormExcel(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `segmentsParseSegmentFormExcel$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  segmentsParseSegmentFormExcel(params: SegmentsParseSegmentFormExcel$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfListOfCharacteristicDto> {
    return this.segmentsParseSegmentFormExcel$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfListOfCharacteristicDto>): ApiMarketJsonResultOfListOfCharacteristicDto => r.body)
    );
  }

}
