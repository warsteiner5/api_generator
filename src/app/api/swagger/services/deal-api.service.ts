/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ApiActualDocumentInfoAltDto } from '../models/api-actual-document-info';
import { ApiApiSearchResultOfDealInfoAltDto } from '../models/api-api-search-result-of-deal-info';
import { ApiCertificateViewModelDto } from '../models/api-certificate-view-model-dto';
import { dealApproveCustomerDeal } from '../fn/deal/deal-approve-customer-deal';
import { DealApproveCustomerDeal$Params } from '../fn/deal/deal-approve-customer-deal';
import { dealApproveCustomerDealOnDemandOfProvider } from '../fn/deal/deal-approve-customer-deal-on-demand-of-provider';
import { DealApproveCustomerDealOnDemandOfProvider$Params } from '../fn/deal/deal-approve-customer-deal-on-demand-of-provider';
import { dealCancelDeal } from '../fn/deal/deal-cancel-deal';
import { DealCancelDeal$Params } from '../fn/deal/deal-cancel-deal';
import { dealCancelDealExternal } from '../fn/deal/deal-cancel-deal-external';
import { DealCancelDealExternal$Params } from '../fn/deal/deal-cancel-deal-external';
import { dealChangeFormToPaper } from '../fn/deal/deal-change-form-to-paper';
import { DealChangeFormToPaper$Params } from '../fn/deal/deal-change-form-to-paper';
import { dealConcludeApprovedDeal } from '../fn/deal/deal-conclude-approved-deal';
import { DealConcludeApprovedDeal$Params } from '../fn/deal/deal-conclude-approved-deal';
import { dealConcludeApprovedDealOnDemandOfCustomer } from '../fn/deal/deal-conclude-approved-deal-on-demand-of-customer';
import { DealConcludeApprovedDealOnDemandOfCustomer$Params } from '../fn/deal/deal-conclude-approved-deal-on-demand-of-customer';
import { dealConcludeApprovedDealOnDemandOfCustomerExternal } from '../fn/deal/deal-conclude-approved-deal-on-demand-of-customer-external';
import { DealConcludeApprovedDealOnDemandOfCustomerExternal$Params } from '../fn/deal/deal-conclude-approved-deal-on-demand-of-customer-external';
import { dealDownloadContractTemplate } from '../fn/deal/deal-download-contract-template';
import { DealDownloadContractTemplate$Params } from '../fn/deal/deal-download-contract-template';
import { dealDownloadSpecification } from '../fn/deal/deal-download-specification';
import { DealDownloadSpecification$Params } from '../fn/deal/deal-download-specification';
import { dealExportToExcel } from '../fn/deal/deal-export-to-excel';
import { DealExportToExcel$Params } from '../fn/deal/deal-export-to-excel';
import { dealExportToExcelByFilter } from '../fn/deal/deal-export-to-excel-by-filter';
import { DealExportToExcelByFilter$Params } from '../fn/deal/deal-export-to-excel-by-filter';
import { dealGetActiveDealForOrder } from '../fn/deal/deal-get-active-deal-for-order';
import { DealGetActiveDealForOrder$Params } from '../fn/deal/deal-get-active-deal-for-order';
import { dealGetActiveDealForTrade } from '../fn/deal/deal-get-active-deal-for-trade';
import { DealGetActiveDealForTrade$Params } from '../fn/deal/deal-get-active-deal-for-trade';
import { dealGetActualDocumentInfoRequest } from '../fn/deal/deal-get-actual-document-info-request';
import { DealGetActualDocumentInfoRequest$Params } from '../fn/deal/deal-get-actual-document-info-request';
import { dealGetDataForDealDocumentSignedByCustomer } from '../fn/deal/deal-get-data-for-deal-document-signed-by-customer';
import { DealGetDataForDealDocumentSignedByCustomer$Params } from '../fn/deal/deal-get-data-for-deal-document-signed-by-customer';
import { dealGetDataForDealDocumentSignedByParticipant } from '../fn/deal/deal-get-data-for-deal-document-signed-by-participant';
import { DealGetDataForDealDocumentSignedByParticipant$Params } from '../fn/deal/deal-get-data-for-deal-document-signed-by-participant';
import { dealGetDataToSignByCustomerForDeal } from '../fn/deal/deal-get-data-to-sign-by-customer-for-deal';
import { DealGetDataToSignByCustomerForDeal$Params } from '../fn/deal/deal-get-data-to-sign-by-customer-for-deal';
import { dealGetDataToSignByParticipantForDeal } from '../fn/deal/deal-get-data-to-sign-by-participant-for-deal';
import { DealGetDataToSignByParticipantForDeal$Params } from '../fn/deal/deal-get-data-to-sign-by-participant-for-deal';
import { dealGetDeal } from '../fn/deal/deal-get-deal';
import { DealGetDeal$Params } from '../fn/deal/deal-get-deal';
import { dealGetDealRejectionReasons } from '../fn/deal/deal-get-deal-rejection-reasons';
import { DealGetDealRejectionReasons$Params } from '../fn/deal/deal-get-deal-rejection-reasons';
import { dealGetDeals } from '../fn/deal/deal-get-deals';
import { DealGetDeals$Params } from '../fn/deal/deal-get-deals';
import { dealGetExportDealDocuments } from '../fn/deal/deal-get-export-deal-documents';
import { DealGetExportDealDocuments$Params } from '../fn/deal/deal-get-export-deal-documents';
import { dealGetExternalDealsInfoByIds } from '../fn/deal/deal-get-external-deals-info-by-ids';
import { DealGetExternalDealsInfoByIds$Params } from '../fn/deal/deal-get-external-deals-info-by-ids';
import { dealGetNextDealNumberIfTenantConfigAllows } from '../fn/deal/deal-get-next-deal-number-if-tenant-config-allows';
import { DealGetNextDealNumberIfTenantConfigAllows$Params } from '../fn/deal/deal-get-next-deal-number-if-tenant-config-allows';
import { dealGetTradeDealForExternal } from '../fn/deal/deal-get-trade-deal-for-external';
import { DealGetTradeDealForExternal$Params } from '../fn/deal/deal-get-trade-deal-for-external';
import { ApiDealHashToSignDto } from '../models/api-deal-hash-to-sign-dto';
import { dealRejectCustomerDeal } from '../fn/deal/deal-reject-customer-deal';
import { DealRejectCustomerDeal$Params } from '../fn/deal/deal-reject-customer-deal';
import { dealRejectCustomerDealOnDemandOfProvider } from '../fn/deal/deal-reject-customer-deal-on-demand-of-provider';
import { DealRejectCustomerDealOnDemandOfProvider$Params } from '../fn/deal/deal-reject-customer-deal-on-demand-of-provider';
import { dealSentForParticipantApprove } from '../fn/deal/deal-sent-for-participant-approve';
import { DealSentForParticipantApprove$Params } from '../fn/deal/deal-sent-for-participant-approve';
import { dealSentForParticipantApproveExternal } from '../fn/deal/deal-sent-for-participant-approve-external';
import { DealSentForParticipantApproveExternal$Params } from '../fn/deal/deal-sent-for-participant-approve-external';
import { dealSentForSignByParticipant } from '../fn/deal/deal-sent-for-sign-by-participant';
import { DealSentForSignByParticipant$Params } from '../fn/deal/deal-sent-for-sign-by-participant';
import { dealSentForSignOnDemandOfProvider } from '../fn/deal/deal-sent-for-sign-on-demand-of-provider';
import { DealSentForSignOnDemandOfProvider$Params } from '../fn/deal/deal-sent-for-sign-on-demand-of-provider';
import { dealSetDealExecuted } from '../fn/deal/deal-set-deal-executed';
import { DealSetDealExecuted$Params } from '../fn/deal/deal-set-deal-executed';
import { dealSetDealIdForOrdersLink } from '../fn/deal/deal-set-deal-id-for-orders-link';
import { DealSetDealIdForOrdersLink$Params } from '../fn/deal/deal-set-deal-id-for-orders-link';
import { dealSetDealTerminated } from '../fn/deal/deal-set-deal-terminated';
import { DealSetDealTerminated$Params } from '../fn/deal/deal-set-deal-terminated';
import { dealSignDealOutsideEShop } from '../fn/deal/deal-sign-deal-outside-e-shop';
import { DealSignDealOutsideEShop$Params } from '../fn/deal/deal-sign-deal-outside-e-shop';
import { dealSignDealOutsideEShopExternal } from '../fn/deal/deal-sign-deal-outside-e-shop-external';
import { DealSignDealOutsideEShopExternal$Params } from '../fn/deal/deal-sign-deal-outside-e-shop-external';
import { dealSuggestElectronicFormSigning } from '../fn/deal/deal-suggest-electronic-form-signing';
import { DealSuggestElectronicFormSigning$Params } from '../fn/deal/deal-suggest-electronic-form-signing';
import { dealSuggestPaperFormSigning } from '../fn/deal/deal-suggest-paper-form-signing';
import { DealSuggestPaperFormSigning$Params } from '../fn/deal/deal-suggest-paper-form-signing';
import { dealSuggestPaperFormSigningOnDemandOfProvider } from '../fn/deal/deal-suggest-paper-form-signing-on-demand-of-provider';
import { DealSuggestPaperFormSigningOnDemandOfProvider$Params } from '../fn/deal/deal-suggest-paper-form-signing-on-demand-of-provider';
import { ApiExternalDealInfoDto } from '../models/api-external-deal-info-dto';
import { ApiFullDealDto } from '../models/api-full-deal-dto';
import { ApiHmaoExternalDealInfoDto } from '../models/api-hmao-external-deal-info-dto';

@Injectable({ providedIn: 'root' })
export class DealApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `dealSentForParticipantApprove()` */
  static readonly DealSentForParticipantApprovePath = '/api/Deal/SentForParticipantApprove';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealSentForParticipantApprove()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealSentForParticipantApprove$Response(params?: DealSentForParticipantApprove$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return dealSentForParticipantApprove(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealSentForParticipantApprove$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealSentForParticipantApprove(params?: DealSentForParticipantApprove$Params, context?: HttpContext): Observable<number> {
    return this.dealSentForParticipantApprove$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `dealSentForParticipantApproveExternal()` */
  static readonly DealSentForParticipantApproveExternalPath = '/api/Deal/SentForParticipantApprove/external';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealSentForParticipantApproveExternal()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealSentForParticipantApproveExternal$Response(params?: DealSentForParticipantApproveExternal$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return dealSentForParticipantApproveExternal(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealSentForParticipantApproveExternal$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealSentForParticipantApproveExternal(params?: DealSentForParticipantApproveExternal$Params, context?: HttpContext): Observable<number> {
    return this.dealSentForParticipantApproveExternal$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `dealSentForSignByParticipant()` */
  static readonly DealSentForSignByParticipantPath = '/api/Deal/SentForSignByParticipant';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealSentForSignByParticipant()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealSentForSignByParticipant$Response(params?: DealSentForSignByParticipant$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return dealSentForSignByParticipant(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealSentForSignByParticipant$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealSentForSignByParticipant(params?: DealSentForSignByParticipant$Params, context?: HttpContext): Observable<number> {
    return this.dealSentForSignByParticipant$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `dealSentForSignOnDemandOfProvider()` */
  static readonly DealSentForSignOnDemandOfProviderPath = '/api/Deal/SentForSignOnDemandOfProvider';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealSentForSignOnDemandOfProvider()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealSentForSignOnDemandOfProvider$Response(params?: DealSentForSignOnDemandOfProvider$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return dealSentForSignOnDemandOfProvider(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealSentForSignOnDemandOfProvider$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealSentForSignOnDemandOfProvider(params?: DealSentForSignOnDemandOfProvider$Params, context?: HttpContext): Observable<number> {
    return this.dealSentForSignOnDemandOfProvider$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `dealChangeFormToPaper()` */
  static readonly DealChangeFormToPaperPath = '/api/Deal/ChangeFormToPaper';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealChangeFormToPaper()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealChangeFormToPaper$Response(params?: DealChangeFormToPaper$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return dealChangeFormToPaper(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealChangeFormToPaper$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealChangeFormToPaper(params?: DealChangeFormToPaper$Params, context?: HttpContext): Observable<number> {
    return this.dealChangeFormToPaper$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `dealApproveCustomerDeal()` */
  static readonly DealApproveCustomerDealPath = '/api/Deal/ApproveCustomerDeal';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealApproveCustomerDeal()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealApproveCustomerDeal$Response(params?: DealApproveCustomerDeal$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return dealApproveCustomerDeal(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealApproveCustomerDeal$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealApproveCustomerDeal(params?: DealApproveCustomerDeal$Params, context?: HttpContext): Observable<boolean> {
    return this.dealApproveCustomerDeal$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /** Path part for operation `dealApproveCustomerDealOnDemandOfProvider()` */
  static readonly DealApproveCustomerDealOnDemandOfProviderPath = '/api/Deal/ApproveCustomerDealOnDemandOfProvider';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealApproveCustomerDealOnDemandOfProvider()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealApproveCustomerDealOnDemandOfProvider$Response(params?: DealApproveCustomerDealOnDemandOfProvider$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return dealApproveCustomerDealOnDemandOfProvider(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealApproveCustomerDealOnDemandOfProvider$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealApproveCustomerDealOnDemandOfProvider(params?: DealApproveCustomerDealOnDemandOfProvider$Params, context?: HttpContext): Observable<boolean> {
    return this.dealApproveCustomerDealOnDemandOfProvider$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /** Path part for operation `dealConcludeApprovedDeal()` */
  static readonly DealConcludeApprovedDealPath = '/api/Deal/ConcludeApprovedDeal';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealConcludeApprovedDeal()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealConcludeApprovedDeal$Response(params?: DealConcludeApprovedDeal$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return dealConcludeApprovedDeal(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealConcludeApprovedDeal$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealConcludeApprovedDeal(params?: DealConcludeApprovedDeal$Params, context?: HttpContext): Observable<boolean> {
    return this.dealConcludeApprovedDeal$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /** Path part for operation `dealConcludeApprovedDealOnDemandOfCustomer()` */
  static readonly DealConcludeApprovedDealOnDemandOfCustomerPath = '/api/Deal/ConcludeApprovedDealOnDemandOfCustomer';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealConcludeApprovedDealOnDemandOfCustomer()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealConcludeApprovedDealOnDemandOfCustomer$Response(params?: DealConcludeApprovedDealOnDemandOfCustomer$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return dealConcludeApprovedDealOnDemandOfCustomer(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealConcludeApprovedDealOnDemandOfCustomer$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealConcludeApprovedDealOnDemandOfCustomer(params?: DealConcludeApprovedDealOnDemandOfCustomer$Params, context?: HttpContext): Observable<void> {
    return this.dealConcludeApprovedDealOnDemandOfCustomer$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `dealConcludeApprovedDealOnDemandOfCustomerExternal()` */
  static readonly DealConcludeApprovedDealOnDemandOfCustomerExternalPath = '/api/Deal/ConcludeApprovedDealOnDemandOfCustomerExternal';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealConcludeApprovedDealOnDemandOfCustomerExternal()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealConcludeApprovedDealOnDemandOfCustomerExternal$Response(params?: DealConcludeApprovedDealOnDemandOfCustomerExternal$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return dealConcludeApprovedDealOnDemandOfCustomerExternal(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealConcludeApprovedDealOnDemandOfCustomerExternal$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealConcludeApprovedDealOnDemandOfCustomerExternal(params?: DealConcludeApprovedDealOnDemandOfCustomerExternal$Params, context?: HttpContext): Observable<void> {
    return this.dealConcludeApprovedDealOnDemandOfCustomerExternal$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `dealCancelDeal()` */
  static readonly DealCancelDealPath = '/api/Deal/CancelDeal';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealCancelDeal()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealCancelDeal$Response(params?: DealCancelDeal$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return dealCancelDeal(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealCancelDeal$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealCancelDeal(params?: DealCancelDeal$Params, context?: HttpContext): Observable<boolean> {
    return this.dealCancelDeal$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /** Path part for operation `dealCancelDealExternal()` */
  static readonly DealCancelDealExternalPath = '/api/Deal/CancelDeal/External';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealCancelDealExternal()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealCancelDealExternal$Response(params?: DealCancelDealExternal$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return dealCancelDealExternal(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealCancelDealExternal$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealCancelDealExternal(params?: DealCancelDealExternal$Params, context?: HttpContext): Observable<boolean> {
    return this.dealCancelDealExternal$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /** Path part for operation `dealRejectCustomerDeal()` */
  static readonly DealRejectCustomerDealPath = '/api/Deal/RejectCustomerDeal';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealRejectCustomerDeal()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealRejectCustomerDeal$Response(params?: DealRejectCustomerDeal$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return dealRejectCustomerDeal(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealRejectCustomerDeal$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealRejectCustomerDeal(params?: DealRejectCustomerDeal$Params, context?: HttpContext): Observable<boolean> {
    return this.dealRejectCustomerDeal$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /** Path part for operation `dealRejectCustomerDealOnDemandOfProvider()` */
  static readonly DealRejectCustomerDealOnDemandOfProviderPath = '/api/Deal/RejectCustomerDealOnDemandOfProvider';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealRejectCustomerDealOnDemandOfProvider()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealRejectCustomerDealOnDemandOfProvider$Response(params?: DealRejectCustomerDealOnDemandOfProvider$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return dealRejectCustomerDealOnDemandOfProvider(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealRejectCustomerDealOnDemandOfProvider$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealRejectCustomerDealOnDemandOfProvider(params?: DealRejectCustomerDealOnDemandOfProvider$Params, context?: HttpContext): Observable<boolean> {
    return this.dealRejectCustomerDealOnDemandOfProvider$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /** Path part for operation `dealSetDealExecuted()` */
  static readonly DealSetDealExecutedPath = '/api/Deal/Executed/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealSetDealExecuted()` instead.
   *
   * This method doesn't expect any request body.
   */
  dealSetDealExecuted$Response(params: DealSetDealExecuted$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return dealSetDealExecuted(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealSetDealExecuted$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dealSetDealExecuted(params: DealSetDealExecuted$Params, context?: HttpContext): Observable<Blob> {
    return this.dealSetDealExecuted$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `dealSetDealTerminated()` */
  static readonly DealSetDealTerminatedPath = '/api/Deal/Terminated/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealSetDealTerminated()` instead.
   *
   * This method doesn't expect any request body.
   */
  dealSetDealTerminated$Response(params: DealSetDealTerminated$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return dealSetDealTerminated(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealSetDealTerminated$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dealSetDealTerminated(params: DealSetDealTerminated$Params, context?: HttpContext): Observable<Blob> {
    return this.dealSetDealTerminated$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `dealGetDeals()` */
  static readonly DealGetDealsPath = '/api/Deal/GetDeals';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealGetDeals()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealGetDeals$Response(params?: DealGetDeals$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiApiSearchResultOfDealInfoAltDto>> {
    return dealGetDeals(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealGetDeals$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealGetDeals(params?: DealGetDeals$Params, context?: HttpContext): Observable<ApiApiSearchResultOfDealInfoAltDto> {
    return this.dealGetDeals$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiApiSearchResultOfDealInfoAltDto>): ApiApiSearchResultOfDealInfoAltDto => r.body)
    );
  }

  /** Path part for operation `dealGetActiveDealForTrade()` */
  static readonly DealGetActiveDealForTradePath = '/api/Deal/GetActiveDealForTrade/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealGetActiveDealForTrade()` instead.
   *
   * This method doesn't expect any request body.
   */
  dealGetActiveDealForTrade$Response(params: DealGetActiveDealForTrade$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiFullDealDto>> {
    return dealGetActiveDealForTrade(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealGetActiveDealForTrade$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dealGetActiveDealForTrade(params: DealGetActiveDealForTrade$Params, context?: HttpContext): Observable<ApiFullDealDto> {
    return this.dealGetActiveDealForTrade$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiFullDealDto>): ApiFullDealDto => r.body)
    );
  }

  /** Path part for operation `dealGetActiveDealForOrder()` */
  static readonly DealGetActiveDealForOrderPath = '/api/Deal/GetActiveDealForOrder/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealGetActiveDealForOrder()` instead.
   *
   * This method doesn't expect any request body.
   */
  dealGetActiveDealForOrder$Response(params: DealGetActiveDealForOrder$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiFullDealDto>> {
    return dealGetActiveDealForOrder(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealGetActiveDealForOrder$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dealGetActiveDealForOrder(params: DealGetActiveDealForOrder$Params, context?: HttpContext): Observable<ApiFullDealDto> {
    return this.dealGetActiveDealForOrder$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiFullDealDto>): ApiFullDealDto => r.body)
    );
  }

  /** Path part for operation `dealGetDeal()` */
  static readonly DealGetDealPath = '/api/Deal/GetDeal/{id}/{dealObject}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealGetDeal()` instead.
   *
   * This method doesn't expect any request body.
   */
  dealGetDeal$Response(params: DealGetDeal$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiFullDealDto>> {
    return dealGetDeal(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealGetDeal$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dealGetDeal(params: DealGetDeal$Params, context?: HttpContext): Observable<ApiFullDealDto> {
    return this.dealGetDeal$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiFullDealDto>): ApiFullDealDto => r.body)
    );
  }

  /** Path part for operation `dealSignDealOutsideEShop()` */
  static readonly DealSignDealOutsideEShopPath = '/api/Deal/SignDealOutsideEShop';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealSignDealOutsideEShop()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealSignDealOutsideEShop$Response(params?: DealSignDealOutsideEShop$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return dealSignDealOutsideEShop(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealSignDealOutsideEShop$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealSignDealOutsideEShop(params?: DealSignDealOutsideEShop$Params, context?: HttpContext): Observable<number> {
    return this.dealSignDealOutsideEShop$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `dealSignDealOutsideEShopExternal()` */
  static readonly DealSignDealOutsideEShopExternalPath = '/api/Deal/SignDealOutsideEShop/External';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealSignDealOutsideEShopExternal()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealSignDealOutsideEShopExternal$Response(params?: DealSignDealOutsideEShopExternal$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return dealSignDealOutsideEShopExternal(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealSignDealOutsideEShopExternal$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealSignDealOutsideEShopExternal(params?: DealSignDealOutsideEShopExternal$Params, context?: HttpContext): Observable<number> {
    return this.dealSignDealOutsideEShopExternal$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `dealSuggestPaperFormSigning()` */
  static readonly DealSuggestPaperFormSigningPath = '/api/Deal/SuggestPaperFormSigning';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealSuggestPaperFormSigning()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealSuggestPaperFormSigning$Response(params?: DealSuggestPaperFormSigning$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return dealSuggestPaperFormSigning(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealSuggestPaperFormSigning$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealSuggestPaperFormSigning(params?: DealSuggestPaperFormSigning$Params, context?: HttpContext): Observable<boolean> {
    return this.dealSuggestPaperFormSigning$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /** Path part for operation `dealSuggestPaperFormSigningOnDemandOfProvider()` */
  static readonly DealSuggestPaperFormSigningOnDemandOfProviderPath = '/api/Deal/SuggestPaperFormSigningOnDemandOfProvider';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealSuggestPaperFormSigningOnDemandOfProvider()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealSuggestPaperFormSigningOnDemandOfProvider$Response(params?: DealSuggestPaperFormSigningOnDemandOfProvider$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return dealSuggestPaperFormSigningOnDemandOfProvider(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealSuggestPaperFormSigningOnDemandOfProvider$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealSuggestPaperFormSigningOnDemandOfProvider(params?: DealSuggestPaperFormSigningOnDemandOfProvider$Params, context?: HttpContext): Observable<boolean> {
    return this.dealSuggestPaperFormSigningOnDemandOfProvider$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /** Path part for operation `dealSuggestElectronicFormSigning()` */
  static readonly DealSuggestElectronicFormSigningPath = '/api/Deal/SuggestElectronicFormSigning';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealSuggestElectronicFormSigning()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealSuggestElectronicFormSigning$Response(params?: DealSuggestElectronicFormSigning$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return dealSuggestElectronicFormSigning(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealSuggestElectronicFormSigning$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealSuggestElectronicFormSigning(params?: DealSuggestElectronicFormSigning$Params, context?: HttpContext): Observable<boolean> {
    return this.dealSuggestElectronicFormSigning$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /** Path part for operation `dealGetDataToSignByParticipantForDeal()` */
  static readonly DealGetDataToSignByParticipantForDealPath = '/api/Deal/GetDataToSignByParticipantForDeal';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealGetDataToSignByParticipantForDeal()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealGetDataToSignByParticipantForDeal$Response(params?: DealGetDataToSignByParticipantForDeal$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiDealHashToSignDto>> {
    return dealGetDataToSignByParticipantForDeal(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealGetDataToSignByParticipantForDeal$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealGetDataToSignByParticipantForDeal(params?: DealGetDataToSignByParticipantForDeal$Params, context?: HttpContext): Observable<ApiDealHashToSignDto> {
    return this.dealGetDataToSignByParticipantForDeal$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiDealHashToSignDto>): ApiDealHashToSignDto => r.body)
    );
  }

  /** Path part for operation `dealGetDataToSignByCustomerForDeal()` */
  static readonly DealGetDataToSignByCustomerForDealPath = '/api/Deal/GetDataToSignByCustomerForDeal';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealGetDataToSignByCustomerForDeal()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealGetDataToSignByCustomerForDeal$Response(params?: DealGetDataToSignByCustomerForDeal$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiDealHashToSignDto>> {
    return dealGetDataToSignByCustomerForDeal(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealGetDataToSignByCustomerForDeal$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealGetDataToSignByCustomerForDeal(params?: DealGetDataToSignByCustomerForDeal$Params, context?: HttpContext): Observable<ApiDealHashToSignDto> {
    return this.dealGetDataToSignByCustomerForDeal$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiDealHashToSignDto>): ApiDealHashToSignDto => r.body)
    );
  }

  /** Path part for operation `dealGetDataForDealDocumentSignedByCustomer()` */
  static readonly DealGetDataForDealDocumentSignedByCustomerPath = '/api/Deal/GetDataForDealDocumentSignedByCustomer';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealGetDataForDealDocumentSignedByCustomer()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealGetDataForDealDocumentSignedByCustomer$Response(params?: DealGetDataForDealDocumentSignedByCustomer$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiCertificateViewModelDto>> {
    return dealGetDataForDealDocumentSignedByCustomer(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealGetDataForDealDocumentSignedByCustomer$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealGetDataForDealDocumentSignedByCustomer(params?: DealGetDataForDealDocumentSignedByCustomer$Params, context?: HttpContext): Observable<ApiCertificateViewModelDto> {
    return this.dealGetDataForDealDocumentSignedByCustomer$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiCertificateViewModelDto>): ApiCertificateViewModelDto => r.body)
    );
  }

  /** Path part for operation `dealGetDataForDealDocumentSignedByParticipant()` */
  static readonly DealGetDataForDealDocumentSignedByParticipantPath = '/api/Deal/GetDataForDealDocumentSignedByParticipant';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealGetDataForDealDocumentSignedByParticipant()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealGetDataForDealDocumentSignedByParticipant$Response(params?: DealGetDataForDealDocumentSignedByParticipant$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiCertificateViewModelDto>> {
    return dealGetDataForDealDocumentSignedByParticipant(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealGetDataForDealDocumentSignedByParticipant$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealGetDataForDealDocumentSignedByParticipant(params?: DealGetDataForDealDocumentSignedByParticipant$Params, context?: HttpContext): Observable<ApiCertificateViewModelDto> {
    return this.dealGetDataForDealDocumentSignedByParticipant$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiCertificateViewModelDto>): ApiCertificateViewModelDto => r.body)
    );
  }

  /** Path part for operation `dealExportToExcel()` */
  static readonly DealExportToExcelPath = '/api/Deal/ExportToExcel';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealExportToExcel()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealExportToExcel$Response(params?: DealExportToExcel$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return dealExportToExcel(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealExportToExcel$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealExportToExcel(params?: DealExportToExcel$Params, context?: HttpContext): Observable<Blob> {
    return this.dealExportToExcel$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `dealExportToExcelByFilter()` */
  static readonly DealExportToExcelByFilterPath = '/api/Deal/ExportToExcelByFilter';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealExportToExcelByFilter()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealExportToExcelByFilter$Response(params?: DealExportToExcelByFilter$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return dealExportToExcelByFilter(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealExportToExcelByFilter$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealExportToExcelByFilter(params?: DealExportToExcelByFilter$Params, context?: HttpContext): Observable<Blob> {
    return this.dealExportToExcelByFilter$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `dealGetExportDealDocuments()` */
  static readonly DealGetExportDealDocumentsPath = '/api/Deal/GetExportDealDocuments';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealGetExportDealDocuments()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealGetExportDealDocuments$Response(params?: DealGetExportDealDocuments$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return dealGetExportDealDocuments(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealGetExportDealDocuments$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealGetExportDealDocuments(params?: DealGetExportDealDocuments$Params, context?: HttpContext): Observable<Blob> {
    return this.dealGetExportDealDocuments$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `dealGetNextDealNumberIfTenantConfigAllows()` */
  static readonly DealGetNextDealNumberIfTenantConfigAllowsPath = '/api/Deal/GetNextDealNumberIfTenantConfigAllows';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealGetNextDealNumberIfTenantConfigAllows()` instead.
   *
   * This method doesn't expect any request body.
   */
  dealGetNextDealNumberIfTenantConfigAllows$Response(params?: DealGetNextDealNumberIfTenantConfigAllows$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return dealGetNextDealNumberIfTenantConfigAllows(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealGetNextDealNumberIfTenantConfigAllows$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dealGetNextDealNumberIfTenantConfigAllows(params?: DealGetNextDealNumberIfTenantConfigAllows$Params, context?: HttpContext): Observable<string> {
    return this.dealGetNextDealNumberIfTenantConfigAllows$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `dealGetDealRejectionReasons()` */
  static readonly DealGetDealRejectionReasonsPath = '/api/Deal/GetDealRejectionReasons/{dealObject}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealGetDealRejectionReasons()` instead.
   *
   * This method doesn't expect any request body.
   */
  dealGetDealRejectionReasons$Response(params: DealGetDealRejectionReasons$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return dealGetDealRejectionReasons(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealGetDealRejectionReasons$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dealGetDealRejectionReasons(params: DealGetDealRejectionReasons$Params, context?: HttpContext): Observable<Blob> {
    return this.dealGetDealRejectionReasons$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `dealSetDealIdForOrdersLink()` */
  static readonly DealSetDealIdForOrdersLinkPath = '/api/Deal/SetDealIdForOrdersLink';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealSetDealIdForOrdersLink()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealSetDealIdForOrdersLink$Response(params?: DealSetDealIdForOrdersLink$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return dealSetDealIdForOrdersLink(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealSetDealIdForOrdersLink$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealSetDealIdForOrdersLink(params?: DealSetDealIdForOrdersLink$Params, context?: HttpContext): Observable<number> {
    return this.dealSetDealIdForOrdersLink$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `dealDownloadContractTemplate()` */
  static readonly DealDownloadContractTemplatePath = '/api/Deal/{dealId}/application/{applicationId}/download/contract-template';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealDownloadContractTemplate()` instead.
   *
   * This method doesn't expect any request body.
   */
  dealDownloadContractTemplate$Response(params: DealDownloadContractTemplate$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return dealDownloadContractTemplate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealDownloadContractTemplate$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dealDownloadContractTemplate(params: DealDownloadContractTemplate$Params, context?: HttpContext): Observable<Blob> {
    return this.dealDownloadContractTemplate$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `dealDownloadSpecification()` */
  static readonly DealDownloadSpecificationPath = '/api/Deal/{dealId}/application/{applicationId}/download/specification';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealDownloadSpecification()` instead.
   *
   * This method doesn't expect any request body.
   */
  dealDownloadSpecification$Response(params: DealDownloadSpecification$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return dealDownloadSpecification(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealDownloadSpecification$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dealDownloadSpecification(params: DealDownloadSpecification$Params, context?: HttpContext): Observable<Blob> {
    return this.dealDownloadSpecification$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `dealGetTradeDealForExternal()` */
  static readonly DealGetTradeDealForExternalPath = '/api/Deal/GetTradeDealEx/{id}/{externalSystemId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealGetTradeDealForExternal()` instead.
   *
   * This method doesn't expect any request body.
   */
  dealGetTradeDealForExternal$Response(params: DealGetTradeDealForExternal$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiExternalDealInfoDto>> {
    return dealGetTradeDealForExternal(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealGetTradeDealForExternal$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dealGetTradeDealForExternal(params: DealGetTradeDealForExternal$Params, context?: HttpContext): Observable<ApiExternalDealInfoDto> {
    return this.dealGetTradeDealForExternal$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiExternalDealInfoDto>): ApiExternalDealInfoDto => r.body)
    );
  }

  /** Path part for operation `dealGetExternalDealsInfoByIds()` */
  static readonly DealGetExternalDealsInfoByIdsPath = '/api/Deal/GetExternalDealsInfoByIds';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealGetExternalDealsInfoByIds()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealGetExternalDealsInfoByIds$Response(params?: DealGetExternalDealsInfoByIds$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ApiHmaoExternalDealInfoDto>>> {
    return dealGetExternalDealsInfoByIds(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealGetExternalDealsInfoByIds$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealGetExternalDealsInfoByIds(params?: DealGetExternalDealsInfoByIds$Params, context?: HttpContext): Observable<Array<ApiHmaoExternalDealInfoDto>> {
    return this.dealGetExternalDealsInfoByIds$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ApiHmaoExternalDealInfoDto>>): Array<ApiHmaoExternalDealInfoDto> => r.body)
    );
  }

  /** Path part for operation `dealGetActualDocumentInfoRequest()` */
  static readonly DealGetActualDocumentInfoRequestPath = '/api/Deal/GetActualDocumentInfo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealGetActualDocumentInfoRequest()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealGetActualDocumentInfoRequest$Response(params?: DealGetActualDocumentInfoRequest$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiActualDocumentInfoAltDto>> {
    return dealGetActualDocumentInfoRequest(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealGetActualDocumentInfoRequest$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealGetActualDocumentInfoRequest(params?: DealGetActualDocumentInfoRequest$Params, context?: HttpContext): Observable<ApiActualDocumentInfoAltDto> {
    return this.dealGetActualDocumentInfoRequest$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiActualDocumentInfoAltDto>): ApiActualDocumentInfoAltDto => r.body)
    );
  }

}
