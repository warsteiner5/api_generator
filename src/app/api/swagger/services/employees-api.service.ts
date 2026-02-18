/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { employeesBlock } from '../fn/employees/employees-block';
import { EmployeesBlock$Params } from '../fn/employees/employees-block';
import { employeesGet } from '../fn/employees/employees-get';
import { EmployeesGet$Params } from '../fn/employees/employees-get';
import { employeesGetEmployeeDataToSign } from '../fn/employees/employees-get-employee-data-to-sign';
import { EmployeesGetEmployeeDataToSign$Params } from '../fn/employees/employees-get-employee-data-to-sign';
import { employeesSearch } from '../fn/employees/employees-search';
import { EmployeesSearch$Params } from '../fn/employees/employees-search';
import { employeesSelf } from '../fn/employees/employees-self';
import { EmployeesSelf$Params } from '../fn/employees/employees-self';
import { employeesUnblock } from '../fn/employees/employees-unblock';
import { EmployeesUnblock$Params } from '../fn/employees/employees-unblock';
import { employeesUpdate } from '../fn/employees/employees-update';
import { EmployeesUpdate$Params } from '../fn/employees/employees-update';
import { employeesUpdateSignedEmployee } from '../fn/employees/employees-update-signed-employee';
import { EmployeesUpdateSignedEmployee$Params } from '../fn/employees/employees-update-signed-employee';
import { ApiMarketJsonResultOfBoolean } from '../models/api-market-json-result-of-boolean';
import { ApiMarketJsonResultOfEmployeeDataToSignDto } from '../models/api-market-json-result-of-employee-data-to-sign-dto';
import { ApiMarketJsonResultOfEmployeeDto } from '../models/api-market-json-result-of-employee-dto';
import { ApiMarketJsonResultOfMarketPaginationResultOfListOfEmployeeItemDto } from '../models/api-market-json-result-of-market-pagination-result-of-list-of-employee-item-dto';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';

@Injectable({ providedIn: 'root' })
export class EmployeesApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `employeesSelf()` */
  static readonly EmployeesSelfPath = '/bla-bla-vla/employees/self';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `employeesSelf()` instead.
   *
   * This method doesn't expect any request body.
   */
  employeesSelf$Response(params?: EmployeesSelf$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfEmployeeDto>> {
    return employeesSelf(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `employeesSelf$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  employeesSelf(params?: EmployeesSelf$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfEmployeeDto> {
    return this.employeesSelf$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfEmployeeDto>): ApiMarketJsonResultOfEmployeeDto => r.body)
    );
  }

  /** Path part for operation `employeesSearch()` */
  static readonly EmployeesSearchPath = '/bla-bla-vla/employees/search';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `employeesSearch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  employeesSearch$Response(params?: EmployeesSearch$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfEmployeeItemDto>> {
    return employeesSearch(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `employeesSearch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  employeesSearch(params?: EmployeesSearch$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfMarketPaginationResultOfListOfEmployeeItemDto> {
    return this.employeesSearch$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfEmployeeItemDto>): ApiMarketJsonResultOfMarketPaginationResultOfListOfEmployeeItemDto => r.body)
    );
  }

  /** Path part for operation `employeesGet()` */
  static readonly EmployeesGetPath = '/bla-bla-vla/employees/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `employeesGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  employeesGet$Response(params: EmployeesGet$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfEmployeeDto>> {
    return employeesGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `employeesGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  employeesGet(params: EmployeesGet$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfEmployeeDto> {
    return this.employeesGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfEmployeeDto>): ApiMarketJsonResultOfEmployeeDto => r.body)
    );
  }

  /** Path part for operation `employeesUpdate()` */
  static readonly EmployeesUpdatePath = '/bla-bla-vla/employees/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `employeesUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  employeesUpdate$Response(params: EmployeesUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return employeesUpdate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `employeesUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  employeesUpdate(params: EmployeesUpdate$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.employeesUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

  /** Path part for operation `employeesGetEmployeeDataToSign()` */
  static readonly EmployeesGetEmployeeDataToSignPath = '/bla-bla-vla/employees/{id}/data-to-sign';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `employeesGetEmployeeDataToSign()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  employeesGetEmployeeDataToSign$Response(params: EmployeesGetEmployeeDataToSign$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfEmployeeDataToSignDto>> {
    return employeesGetEmployeeDataToSign(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `employeesGetEmployeeDataToSign$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  employeesGetEmployeeDataToSign(params: EmployeesGetEmployeeDataToSign$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfEmployeeDataToSignDto> {
    return this.employeesGetEmployeeDataToSign$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfEmployeeDataToSignDto>): ApiMarketJsonResultOfEmployeeDataToSignDto => r.body)
    );
  }

  /** Path part for operation `employeesUpdateSignedEmployee()` */
  static readonly EmployeesUpdateSignedEmployeePath = '/bla-bla-vla/employees/{id}/signed';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `employeesUpdateSignedEmployee()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  employeesUpdateSignedEmployee$Response(params: EmployeesUpdateSignedEmployee$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBoolean>> {
    return employeesUpdateSignedEmployee(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `employeesUpdateSignedEmployee$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  employeesUpdateSignedEmployee(params: EmployeesUpdateSignedEmployee$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfBoolean> {
    return this.employeesUpdateSignedEmployee$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfBoolean>): ApiMarketJsonResultOfBoolean => r.body)
    );
  }

  /** Path part for operation `employeesBlock()` */
  static readonly EmployeesBlockPath = '/bla-bla-vla/employees/{id}/block';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `employeesBlock()` instead.
   *
   * This method doesn't expect any request body.
   */
  employeesBlock$Response(params: EmployeesBlock$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return employeesBlock(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `employeesBlock$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  employeesBlock(params: EmployeesBlock$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.employeesBlock$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

  /** Path part for operation `employeesUnblock()` */
  static readonly EmployeesUnblockPath = '/bla-bla-vla/employees/{id}/unblock';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `employeesUnblock()` instead.
   *
   * This method doesn't expect any request body.
   */
  employeesUnblock$Response(params: EmployeesUnblock$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return employeesUnblock(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `employeesUnblock$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  employeesUnblock(params: EmployeesUnblock$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.employeesUnblock$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

}
