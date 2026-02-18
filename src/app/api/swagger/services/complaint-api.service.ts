/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { complaintClose } from '../fn/complaint/complaint-close';
import { ComplaintClose$Params } from '../fn/complaint/complaint-close';
import { complaintComplaintTypes } from '../fn/complaint/complaint-complaint-types';
import { ComplaintComplaintTypes$Params } from '../fn/complaint/complaint-complaint-types';
import { complaintCreate } from '../fn/complaint/complaint-create';
import { ComplaintCreate$Params } from '../fn/complaint/complaint-create';
import { ApiComplaintDto } from '../models/api-complaint-dto';
import { complaintGetPriceListComplaints } from '../fn/complaint/complaint-get-price-list-complaints';
import { ComplaintGetPriceListComplaints$Params } from '../fn/complaint/complaint-get-price-list-complaints';
import { ApiComplaintInfoDto } from '../models/api-complaint-info-dto';
import { ApiComplaintTypeDto } from '../models/api-complaint-type-dto';

@Injectable({ providedIn: 'root' })
export class ComplaintApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `complaintCreate()` */
  static readonly ComplaintCreatePath = '/bla-bla-vla/complaint/create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `complaintCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  complaintCreate$Response(params?: ComplaintCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiComplaintDto>> {
    return complaintCreate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `complaintCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  complaintCreate(params?: ComplaintCreate$Params, context?: HttpContext): Observable<ApiComplaintDto> {
    return this.complaintCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiComplaintDto>): ApiComplaintDto => r.body)
    );
  }

  /** Path part for operation `complaintComplaintTypes()` */
  static readonly ComplaintComplaintTypesPath = '/bla-bla-vla/complaint/types';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `complaintComplaintTypes()` instead.
   *
   * This method doesn't expect any request body.
   */
  complaintComplaintTypes$Response(params?: ComplaintComplaintTypes$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ApiComplaintTypeDto>>> {
    return complaintComplaintTypes(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `complaintComplaintTypes$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  complaintComplaintTypes(params?: ComplaintComplaintTypes$Params, context?: HttpContext): Observable<Array<ApiComplaintTypeDto>> {
    return this.complaintComplaintTypes$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ApiComplaintTypeDto>>): Array<ApiComplaintTypeDto> => r.body)
    );
  }

  /** Path part for operation `complaintGetPriceListComplaints()` */
  static readonly ComplaintGetPriceListComplaintsPath = '/bla-bla-vla/complaint/price-list/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `complaintGetPriceListComplaints()` instead.
   *
   * This method doesn't expect any request body.
   */
  complaintGetPriceListComplaints$Response(params: ComplaintGetPriceListComplaints$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ApiComplaintInfoDto>>> {
    return complaintGetPriceListComplaints(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `complaintGetPriceListComplaints$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  complaintGetPriceListComplaints(params: ComplaintGetPriceListComplaints$Params, context?: HttpContext): Observable<Array<ApiComplaintInfoDto>> {
    return this.complaintGetPriceListComplaints$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ApiComplaintInfoDto>>): Array<ApiComplaintInfoDto> => r.body)
    );
  }

  /** Path part for operation `complaintClose()` */
  static readonly ComplaintClosePath = '/bla-bla-vla/complaint/close';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `complaintClose()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  complaintClose$Response(params?: ComplaintClose$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return complaintClose(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `complaintClose$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  complaintClose(params?: ComplaintClose$Params, context?: HttpContext): Observable<Blob> {
    return this.complaintClose$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

}
