/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { dealsAddDealProvisionBySupplier } from '../fn/deals/deals-add-deal-provision-by-supplier';
import { DealsAddDealProvisionBySupplier$Params } from '../fn/deals/deals-add-deal-provision-by-supplier';
import { dealsAddPaperDealDocuments } from '../fn/deals/deals-add-paper-deal-documents';
import { DealsAddPaperDealDocuments$Params } from '../fn/deals/deals-add-paper-deal-documents';
import { dealsApproveCustomerDeal } from '../fn/deals/deals-approve-customer-deal';
import { DealsApproveCustomerDeal$Params } from '../fn/deals/deals-approve-customer-deal';
import { dealsAutoCreateDeals } from '../fn/deals/deals-auto-create-deals';
import { DealsAutoCreateDeals$Params } from '../fn/deals/deals-auto-create-deals';
import { dealsCancelDeal } from '../fn/deals/deals-cancel-deal';
import { DealsCancelDeal$Params } from '../fn/deals/deals-cancel-deal';
import { dealsCancelExternalDeal } from '../fn/deals/deals-cancel-external-deal';
import { DealsCancelExternalDeal$Params } from '../fn/deals/deals-cancel-external-deal';
import { dealsChangeContractByCustomer } from '../fn/deals/deals-change-contract-by-customer';
import { DealsChangeContractByCustomer$Params } from '../fn/deals/deals-change-contract-by-customer';
import { dealsChangeContractBySupplier } from '../fn/deals/deals-change-contract-by-supplier';
import { DealsChangeContractBySupplier$Params } from '../fn/deals/deals-change-contract-by-supplier';
import { dealsChangeDealByParticipant } from '../fn/deals/deals-change-deal-by-participant';
import { DealsChangeDealByParticipant$Params } from '../fn/deals/deals-change-deal-by-participant';
import { dealsChangeForm } from '../fn/deals/deals-change-form';
import { DealsChangeForm$Params } from '../fn/deals/deals-change-form';
import { dealsChangeFormToPaper } from '../fn/deals/deals-change-form-to-paper';
import { DealsChangeFormToPaper$Params } from '../fn/deals/deals-change-form-to-paper';
import { dealsChangeFormToPaperByCustomer } from '../fn/deals/deals-change-form-to-paper-by-customer';
import { DealsChangeFormToPaperByCustomer$Params } from '../fn/deals/deals-change-form-to-paper-by-customer';
import { dealsConcludeApprovedDeal } from '../fn/deals/deals-conclude-approved-deal';
import { DealsConcludeApprovedDeal$Params } from '../fn/deals/deals-conclude-approved-deal';
import { dealsConcludeApprovedExternalDeal } from '../fn/deals/deals-conclude-approved-external-deal';
import { DealsConcludeApprovedExternalDeal$Params } from '../fn/deals/deals-conclude-approved-external-deal';
import { dealsCreateDeal } from '../fn/deals/deals-create-deal';
import { DealsCreateDeal$Params } from '../fn/deals/deals-create-deal';
import { dealsCreateDealExternal } from '../fn/deals/deals-create-deal-external';
import { DealsCreateDealExternal$Params } from '../fn/deals/deals-create-deal-external';
import { dealsCreateDealInternal } from '../fn/deals/deals-create-deal-internal';
import { DealsCreateDealInternal$Params } from '../fn/deals/deals-create-deal-internal';
import { dealsCreateDeals } from '../fn/deals/deals-create-deals';
import { DealsCreateDeals$Params } from '../fn/deals/deals-create-deals';
import { dealsCreateDealsExternal } from '../fn/deals/deals-create-deals-external';
import { DealsCreateDealsExternal$Params } from '../fn/deals/deals-create-deals-external';
import { dealsCreateDifferenceProtocolBySupplier } from '../fn/deals/deals-create-difference-protocol-by-supplier';
import { DealsCreateDifferenceProtocolBySupplier$Params } from '../fn/deals/deals-create-difference-protocol-by-supplier';
import { dealsDoNotConcludeDeal } from '../fn/deals/deals-do-not-conclude-deal';
import { DealsDoNotConcludeDeal$Params } from '../fn/deals/deals-do-not-conclude-deal';
import { dealsEditWorkGroups } from '../fn/deals/deals-edit-work-groups';
import { DealsEditWorkGroups$Params } from '../fn/deals/deals-edit-work-groups';
import { dealsExportDealsInfoIntoExcel } from '../fn/deals/deals-export-deals-info-into-excel';
import { DealsExportDealsInfoIntoExcel$Params } from '../fn/deals/deals-export-deals-info-into-excel';
import { dealsGenerateDealNumber } from '../fn/deals/deals-generate-deal-number';
import { DealsGenerateDealNumber$Params } from '../fn/deals/deals-generate-deal-number';
import { dealsGetCountDownTime } from '../fn/deals/deals-get-count-down-time';
import { DealsGetCountDownTime$Params } from '../fn/deals/deals-get-count-down-time';
import { dealsGetCustomerSignInfo } from '../fn/deals/deals-get-customer-sign-info';
import { DealsGetCustomerSignInfo$Params } from '../fn/deals/deals-get-customer-sign-info';
import { dealsGetDataToSignByCustomerForDeal } from '../fn/deals/deals-get-data-to-sign-by-customer-for-deal';
import { DealsGetDataToSignByCustomerForDeal$Params } from '../fn/deals/deals-get-data-to-sign-by-customer-for-deal';
import { dealsGetDataToSignByParticipantForDeal } from '../fn/deals/deals-get-data-to-sign-by-participant-for-deal';
import { DealsGetDataToSignByParticipantForDeal$Params } from '../fn/deals/deals-get-data-to-sign-by-participant-for-deal';
import { dealsGetDeal } from '../fn/deals/deals-get-deal';
import { DealsGetDeal$Params } from '../fn/deals/deals-get-deal';
import { dealsGetDealDocumentPacks } from '../fn/deals/deals-get-deal-document-packs';
import { DealsGetDealDocumentPacks$Params } from '../fn/deals/deals-get-deal-document-packs';
import { dealsGetDealExtendedInfo } from '../fn/deals/deals-get-deal-extended-info';
import { DealsGetDealExtendedInfo$Params } from '../fn/deals/deals-get-deal-extended-info';
import { dealsGetDeals } from '../fn/deals/deals-get-deals';
import { DealsGetDeals$Params } from '../fn/deals/deals-get-deals';
import { dealsGetDeals2 } from '../fn/deals/deals-get-deals-2';
import { DealsGetDeals2$Params } from '../fn/deals/deals-get-deals-2';
import { dealsGetExportDealDocuments } from '../fn/deals/deals-get-export-deal-documents';
import { DealsGetExportDealDocuments$Params } from '../fn/deals/deals-get-export-deal-documents';
import { dealsGetExportDealDocumentsFile } from '../fn/deals/deals-get-export-deal-documents-file';
import { DealsGetExportDealDocumentsFile$Params } from '../fn/deals/deals-get-export-deal-documents-file';
import { dealsGetLastDealFullPriceChange } from '../fn/deals/deals-get-last-deal-full-price-change';
import { DealsGetLastDealFullPriceChange$Params } from '../fn/deals/deals-get-last-deal-full-price-change';
import { dealsGetSupplierSignInfo } from '../fn/deals/deals-get-supplier-sign-info';
import { DealsGetSupplierSignInfo$Params } from '../fn/deals/deals-get-supplier-sign-info';
import { dealsGetTradeActualDeal } from '../fn/deals/deals-get-trade-actual-deal';
import { DealsGetTradeActualDeal$Params } from '../fn/deals/deals-get-trade-actual-deal';
import { dealsGetTradeActualDeals } from '../fn/deals/deals-get-trade-actual-deals';
import { DealsGetTradeActualDeals$Params } from '../fn/deals/deals-get-trade-actual-deals';
import { dealsGetTradeAndDealDiscussionHistory } from '../fn/deals/deals-get-trade-and-deal-discussion-history';
import { DealsGetTradeAndDealDiscussionHistory$Params } from '../fn/deals/deals-get-trade-and-deal-discussion-history';
import { dealsGetTradeAndDealHistory } from '../fn/deals/deals-get-trade-and-deal-history';
import { DealsGetTradeAndDealHistory$Params } from '../fn/deals/deals-get-trade-and-deal-history';
import { dealsGetTradeHistory } from '../fn/deals/deals-get-trade-history';
import { DealsGetTradeHistory$Params } from '../fn/deals/deals-get-trade-history';
import { dealsRejectChangeFormToPaper } from '../fn/deals/deals-reject-change-form-to-paper';
import { DealsRejectChangeFormToPaper$Params } from '../fn/deals/deals-reject-change-form-to-paper';
import { dealsRejectCustomerDeal } from '../fn/deals/deals-reject-customer-deal';
import { DealsRejectCustomerDeal$Params } from '../fn/deals/deals-reject-customer-deal';
import { dealsRevokeDealByCustomer } from '../fn/deals/deals-revoke-deal-by-customer';
import { DealsRevokeDealByCustomer$Params } from '../fn/deals/deals-revoke-deal-by-customer';
import { dealsRevokeDealBySupplier } from '../fn/deals/deals-revoke-deal-by-supplier';
import { DealsRevokeDealBySupplier$Params } from '../fn/deals/deals-revoke-deal-by-supplier';
import { dealsReworkDeal } from '../fn/deals/deals-rework-deal';
import { DealsReworkDeal$Params } from '../fn/deals/deals-rework-deal';
import { dealsSaveDealEisDataDraft } from '../fn/deals/deals-save-deal-eis-data-draft';
import { DealsSaveDealEisDataDraft$Params } from '../fn/deals/deals-save-deal-eis-data-draft';
import { dealsSaveDealExtendedInfo } from '../fn/deals/deals-save-deal-extended-info';
import { DealsSaveDealExtendedInfo$Params } from '../fn/deals/deals-save-deal-extended-info';
import { dealsSendContractFromCustomerToSupplier } from '../fn/deals/deals-send-contract-from-customer-to-supplier';
import { DealsSendContractFromCustomerToSupplier$Params } from '../fn/deals/deals-send-contract-from-customer-to-supplier';
import { dealsSendContractFromSupplierToCustomer } from '../fn/deals/deals-send-contract-from-supplier-to-customer';
import { DealsSendContractFromSupplierToCustomer$Params } from '../fn/deals/deals-send-contract-from-supplier-to-customer';
import { dealsSendDealToEis } from '../fn/deals/deals-send-deal-to-eis';
import { DealsSendDealToEis$Params } from '../fn/deals/deals-send-deal-to-eis';
import { dealsSentForParticipantApprove } from '../fn/deals/deals-sent-for-participant-approve';
import { DealsSentForParticipantApprove$Params } from '../fn/deals/deals-sent-for-participant-approve';
import { dealsSentForParticipantApproveExternal } from '../fn/deals/deals-sent-for-participant-approve-external';
import { DealsSentForParticipantApproveExternal$Params } from '../fn/deals/deals-sent-for-participant-approve-external';
import { dealsSetDealExecuted } from '../fn/deals/deals-set-deal-executed';
import { DealsSetDealExecuted$Params } from '../fn/deals/deals-set-deal-executed';
import { dealsSetDealTerminated } from '../fn/deals/deals-set-deal-terminated';
import { DealsSetDealTerminated$Params } from '../fn/deals/deals-set-deal-terminated';
import { dealsSignDealOutsideEShop } from '../fn/deals/deals-sign-deal-outside-e-shop';
import { DealsSignDealOutsideEShop$Params } from '../fn/deals/deals-sign-deal-outside-e-shop';
import { dealsSuggestPaperFormSigning } from '../fn/deals/deals-suggest-paper-form-signing';
import { DealsSuggestPaperFormSigning$Params } from '../fn/deals/deals-suggest-paper-form-signing';
import { dealsUpdateDealDocumentsExternal } from '../fn/deals/deals-update-deal-documents-external';
import { DealsUpdateDealDocumentsExternal$Params } from '../fn/deals/deals-update-deal-documents-external';
import { dealsUpdateFullDealPrice } from '../fn/deals/deals-update-full-deal-price';
import { DealsUpdateFullDealPrice$Params } from '../fn/deals/deals-update-full-deal-price';
import { ApiMarketJsonResultOfBooleanAltDto } from '../models/api-market-json-result-of-boolean';
import { ApiMarketJsonResultOfCertificateViewModelDto } from '../models/api-market-json-result-of-certificate-view-model-dto';
import { ApiMarketJsonResultOfDealCountdownDto } from '../models/api-market-json-result-of-deal-countdown-dto';
import { ApiMarketJsonResultOfDealExtendedInfoAltDto } from '../models/api-market-json-result-of-deal-extended-info';
import { ApiMarketJsonResultOfDealFullPriceChangeDto } from '../models/api-market-json-result-of-deal-full-price-change-dto';
import { ApiMarketJsonResultOfDealHashToSignDto } from '../models/api-market-json-result-of-deal-hash-to-sign-dto';
import { ApiMarketJsonResultOfDocumentPackDtoOf } from '../models/api-market-json-result-of-document-pack-dto-of';
import { ApiMarketJsonResultOfEisIntegrationResultDto } from '../models/api-market-json-result-of-eis-integration-result-dto';
import { ApiMarketJsonResultOfIntegerAltDto } from '../models/api-market-json-result-of-integer';
import { ApiMarketJsonResultOfIReadOnlyCollectionOfIntegerAltDto } from '../models/api-market-json-result-of-i-read-only-collection-of-integer';
import { ApiMarketJsonResultOfListOfDiscussionDto } from '../models/api-market-json-result-of-list-of-discussion-dto';
import { ApiMarketJsonResultOfListOfIDiscussionHistoryDto } from '../models/api-market-json-result-of-list-of-i-discussion-history-dto';
import { ApiMarketJsonResultOfLongAltDto } from '../models/api-market-json-result-of-long';
import { ApiMarketJsonResultOfMarketDealDto } from '../models/api-market-json-result-of-market-deal-dto';
import { ApiMarketJsonResultOfMarketDealDtoOf } from '../models/api-market-json-result-of-market-deal-dto-of';
import { ApiMarketJsonResultOfMarketFullDealDto } from '../models/api-market-json-result-of-market-full-deal-dto';
import { ApiMarketJsonResultOfMarketFullOrderDealDto } from '../models/api-market-json-result-of-market-full-order-deal-dto';
import { ApiMarketJsonResultOfMarketPaginationResultOfListOfDealInfoAltDto } from '../models/api-market-json-result-of-market-pagination-result-of-list-of-deal-info';
import { ApiMarketJsonResultOfMarketPaginationResultOfListOfDealListItemDto } from '../models/api-market-json-result-of-market-pagination-result-of-list-of-deal-list-item-dto';
import { ApiMarketJsonResultOfNullableGuidAltDto } from '../models/api-market-json-result-of-nullable-guid';
import { ApiMarketJsonResultOfStringAltDto } from '../models/api-market-json-result-of-string';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';

@Injectable({ providedIn: 'root' })
export class DealsApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `dealsCreateDeal()` */
  static readonly DealsCreateDealPath = '/market/api/v1/deals';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealsCreateDeal()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsCreateDeal$Response(params?: DealsCreateDeal$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>> {
    return dealsCreateDeal(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealsCreateDeal$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsCreateDeal(params?: DealsCreateDeal$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfIntegerAltDto> {
    return this.dealsCreateDeal$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>): ApiMarketJsonResultOfIntegerAltDto => r.body)
    );
  }

  /** Path part for operation `dealsCreateDealInternal()` */
  static readonly DealsCreateDealInternalPath = '/market/api/v1/deals/internal';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealsCreateDealInternal()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsCreateDealInternal$Response(params?: DealsCreateDealInternal$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>> {
    return dealsCreateDealInternal(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealsCreateDealInternal$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsCreateDealInternal(params?: DealsCreateDealInternal$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfIntegerAltDto> {
    return this.dealsCreateDealInternal$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>): ApiMarketJsonResultOfIntegerAltDto => r.body)
    );
  }

  /** Path part for operation `dealsCreateDealExternal()` */
  static readonly DealsCreateDealExternalPath = '/market/api/v1/deals/external';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealsCreateDealExternal()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsCreateDealExternal$Response(params?: DealsCreateDealExternal$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>> {
    return dealsCreateDealExternal(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealsCreateDealExternal$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsCreateDealExternal(params?: DealsCreateDealExternal$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfIntegerAltDto> {
    return this.dealsCreateDealExternal$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>): ApiMarketJsonResultOfIntegerAltDto => r.body)
    );
  }

  /** Path part for operation `dealsCreateDeals()` */
  static readonly DealsCreateDealsPath = '/market/api/v1/deals/create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealsCreateDeals()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsCreateDeals$Response(params?: DealsCreateDeals$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIReadOnlyCollectionOfIntegerAltDto>> {
    return dealsCreateDeals(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealsCreateDeals$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsCreateDeals(params?: DealsCreateDeals$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfIReadOnlyCollectionOfIntegerAltDto> {
    return this.dealsCreateDeals$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfIReadOnlyCollectionOfIntegerAltDto>): ApiMarketJsonResultOfIReadOnlyCollectionOfIntegerAltDto => r.body)
    );
  }

  /** Path part for operation `dealsCreateDealsExternal()` */
  static readonly DealsCreateDealsExternalPath = '/market/api/v1/deals/create/external';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealsCreateDealsExternal()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsCreateDealsExternal$Response(params?: DealsCreateDealsExternal$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIReadOnlyCollectionOfIntegerAltDto>> {
    return dealsCreateDealsExternal(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealsCreateDealsExternal$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsCreateDealsExternal(params?: DealsCreateDealsExternal$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfIReadOnlyCollectionOfIntegerAltDto> {
    return this.dealsCreateDealsExternal$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfIReadOnlyCollectionOfIntegerAltDto>): ApiMarketJsonResultOfIReadOnlyCollectionOfIntegerAltDto => r.body)
    );
  }

  /** Path part for operation `dealsAutoCreateDeals()` */
  static readonly DealsAutoCreateDealsPath = '/market/api/v1/deals/create/lot/{tradeLotId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealsAutoCreateDeals()` instead.
   *
   * This method doesn't expect any request body.
   */
  dealsAutoCreateDeals$Response(params: DealsAutoCreateDeals$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIReadOnlyCollectionOfIntegerAltDto>> {
    return dealsAutoCreateDeals(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealsAutoCreateDeals$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dealsAutoCreateDeals(params: DealsAutoCreateDeals$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfIReadOnlyCollectionOfIntegerAltDto> {
    return this.dealsAutoCreateDeals$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfIReadOnlyCollectionOfIntegerAltDto>): ApiMarketJsonResultOfIReadOnlyCollectionOfIntegerAltDto => r.body)
    );
  }

  /** Path part for operation `dealsGetDeals()` */
  static readonly DealsGetDealsPath = '/market/api/v1/deals/my';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealsGetDeals()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsGetDeals$Response(params?: DealsGetDeals$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfDealInfoAltDto>> {
    return dealsGetDeals(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealsGetDeals$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsGetDeals(params?: DealsGetDeals$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfMarketPaginationResultOfListOfDealInfoAltDto> {
    return this.dealsGetDeals$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfDealInfoAltDto>): ApiMarketJsonResultOfMarketPaginationResultOfListOfDealInfoAltDto => r.body)
    );
  }

  /** Path part for operation `dealsGetDeals2()` */
  static readonly DealsGetDeals2Path = '/market/api/v1/deals/search';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealsGetDeals2()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsGetDeals2$Response(params?: DealsGetDeals2$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfDealListItemDto>> {
    return dealsGetDeals2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealsGetDeals2$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsGetDeals2(params?: DealsGetDeals2$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfMarketPaginationResultOfListOfDealListItemDto> {
    return this.dealsGetDeals2$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfDealListItemDto>): ApiMarketJsonResultOfMarketPaginationResultOfListOfDealListItemDto => r.body)
    );
  }

  /** Path part for operation `dealsGetDeal()` */
  static readonly DealsGetDealPath = '/market/api/v1/deals/{id}/{dealObject}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealsGetDeal()` instead.
   *
   * This method doesn't expect any request body.
   */
  dealsGetDeal$Response(params: DealsGetDeal$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketFullOrderDealDto>> {
    return dealsGetDeal(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealsGetDeal$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dealsGetDeal(params: DealsGetDeal$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfMarketFullOrderDealDto> {
    return this.dealsGetDeal$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfMarketFullOrderDealDto>): ApiMarketJsonResultOfMarketFullOrderDealDto => r.body)
    );
  }

  /** Path part for operation `dealsGetCustomerSignInfo()` */
  static readonly DealsGetCustomerSignInfoPath = '/market/api/v1/deals/customer_sign_info';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealsGetCustomerSignInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  dealsGetCustomerSignInfo$Response(params?: DealsGetCustomerSignInfo$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfCertificateViewModelDto>> {
    return dealsGetCustomerSignInfo(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealsGetCustomerSignInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dealsGetCustomerSignInfo(params?: DealsGetCustomerSignInfo$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfCertificateViewModelDto> {
    return this.dealsGetCustomerSignInfo$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfCertificateViewModelDto>): ApiMarketJsonResultOfCertificateViewModelDto => r.body)
    );
  }

  /** Path part for operation `dealsGetSupplierSignInfo()` */
  static readonly DealsGetSupplierSignInfoPath = '/market/api/v1/deals/supplier_sign_info';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealsGetSupplierSignInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  dealsGetSupplierSignInfo$Response(params?: DealsGetSupplierSignInfo$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfCertificateViewModelDto>> {
    return dealsGetSupplierSignInfo(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealsGetSupplierSignInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dealsGetSupplierSignInfo(params?: DealsGetSupplierSignInfo$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfCertificateViewModelDto> {
    return this.dealsGetSupplierSignInfo$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfCertificateViewModelDto>): ApiMarketJsonResultOfCertificateViewModelDto => r.body)
    );
  }

  /** Path part for operation `dealsGetDataToSignByParticipantForDeal()` */
  static readonly DealsGetDataToSignByParticipantForDealPath = '/market/api/v1/deals/participants/data_to_sign';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealsGetDataToSignByParticipantForDeal()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsGetDataToSignByParticipantForDeal$Response(params?: DealsGetDataToSignByParticipantForDeal$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfDealHashToSignDto>> {
    return dealsGetDataToSignByParticipantForDeal(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealsGetDataToSignByParticipantForDeal$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsGetDataToSignByParticipantForDeal(params?: DealsGetDataToSignByParticipantForDeal$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfDealHashToSignDto> {
    return this.dealsGetDataToSignByParticipantForDeal$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfDealHashToSignDto>): ApiMarketJsonResultOfDealHashToSignDto => r.body)
    );
  }

  /** Path part for operation `dealsApproveCustomerDeal()` */
  static readonly DealsApproveCustomerDealPath = '/market/api/v1/deals/participants/approve';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealsApproveCustomerDeal()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsApproveCustomerDeal$Response(params?: DealsApproveCustomerDeal$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>> {
    return dealsApproveCustomerDeal(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealsApproveCustomerDeal$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsApproveCustomerDeal(params?: DealsApproveCustomerDeal$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfBooleanAltDto> {
    return this.dealsApproveCustomerDeal$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>): ApiMarketJsonResultOfBooleanAltDto => r.body)
    );
  }

  /** Path part for operation `dealsRejectCustomerDeal()` */
  static readonly DealsRejectCustomerDealPath = '/market/api/v1/deals/participants/reject';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealsRejectCustomerDeal()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsRejectCustomerDeal$Response(params?: DealsRejectCustomerDeal$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>> {
    return dealsRejectCustomerDeal(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealsRejectCustomerDeal$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsRejectCustomerDeal(params?: DealsRejectCustomerDeal$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfBooleanAltDto> {
    return this.dealsRejectCustomerDeal$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>): ApiMarketJsonResultOfBooleanAltDto => r.body)
    );
  }

  /** Path part for operation `dealsSuggestPaperFormSigning()` */
  static readonly DealsSuggestPaperFormSigningPath = '/market/api/v1/deals/participants/paper_form/suggest';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealsSuggestPaperFormSigning()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsSuggestPaperFormSigning$Response(params?: DealsSuggestPaperFormSigning$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>> {
    return dealsSuggestPaperFormSigning(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealsSuggestPaperFormSigning$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsSuggestPaperFormSigning(params?: DealsSuggestPaperFormSigning$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfBooleanAltDto> {
    return this.dealsSuggestPaperFormSigning$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>): ApiMarketJsonResultOfBooleanAltDto => r.body)
    );
  }

  /** Path part for operation `dealsChangeDealByParticipant()` */
  static readonly DealsChangeDealByParticipantPath = '/market/api/v1/deals/participants/change';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealsChangeDealByParticipant()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsChangeDealByParticipant$Response(params?: DealsChangeDealByParticipant$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>> {
    return dealsChangeDealByParticipant(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealsChangeDealByParticipant$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsChangeDealByParticipant(params?: DealsChangeDealByParticipant$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfBooleanAltDto> {
    return this.dealsChangeDealByParticipant$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>): ApiMarketJsonResultOfBooleanAltDto => r.body)
    );
  }

  /** Path part for operation `dealsGetDataToSignByCustomerForDeal()` */
  static readonly DealsGetDataToSignByCustomerForDealPath = '/market/api/v1/deals/customers/data_to_sign';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealsGetDataToSignByCustomerForDeal()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsGetDataToSignByCustomerForDeal$Response(params?: DealsGetDataToSignByCustomerForDeal$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfDealHashToSignDto>> {
    return dealsGetDataToSignByCustomerForDeal(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealsGetDataToSignByCustomerForDeal$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsGetDataToSignByCustomerForDeal(params?: DealsGetDataToSignByCustomerForDeal$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfDealHashToSignDto> {
    return this.dealsGetDataToSignByCustomerForDeal$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfDealHashToSignDto>): ApiMarketJsonResultOfDealHashToSignDto => r.body)
    );
  }

  /** Path part for operation `dealsReworkDeal()` */
  static readonly DealsReworkDealPath = '/market/api/v1/deals/customers/rework';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealsReworkDeal()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsReworkDeal$Response(params?: DealsReworkDeal$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>> {
    return dealsReworkDeal(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealsReworkDeal$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsReworkDeal(params?: DealsReworkDeal$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfBooleanAltDto> {
    return this.dealsReworkDeal$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>): ApiMarketJsonResultOfBooleanAltDto => r.body)
    );
  }

  /** Path part for operation `dealsCancelDeal()` */
  static readonly DealsCancelDealPath = '/market/api/v1/deals/customers/cancel';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealsCancelDeal()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsCancelDeal$Response(params?: DealsCancelDeal$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>> {
    return dealsCancelDeal(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealsCancelDeal$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsCancelDeal(params?: DealsCancelDeal$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfBooleanAltDto> {
    return this.dealsCancelDeal$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>): ApiMarketJsonResultOfBooleanAltDto => r.body)
    );
  }

  /** Path part for operation `dealsCancelExternalDeal()` */
  static readonly DealsCancelExternalDealPath = '/market/api/v1/deals/{dealId}/customers/{organizationId}/users/{userId}/cancel/external';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealsCancelExternalDeal()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsCancelExternalDeal$Response(params: DealsCancelExternalDeal$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>> {
    return dealsCancelExternalDeal(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealsCancelExternalDeal$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsCancelExternalDeal(params: DealsCancelExternalDeal$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfBooleanAltDto> {
    return this.dealsCancelExternalDeal$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>): ApiMarketJsonResultOfBooleanAltDto => r.body)
    );
  }

  /** Path part for operation `dealsConcludeApprovedDeal()` */
  static readonly DealsConcludeApprovedDealPath = '/market/api/v1/deals/customers/conclude';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealsConcludeApprovedDeal()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsConcludeApprovedDeal$Response(params?: DealsConcludeApprovedDeal$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>> {
    return dealsConcludeApprovedDeal(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealsConcludeApprovedDeal$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsConcludeApprovedDeal(params?: DealsConcludeApprovedDeal$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfBooleanAltDto> {
    return this.dealsConcludeApprovedDeal$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>): ApiMarketJsonResultOfBooleanAltDto => r.body)
    );
  }

  /** Path part for operation `dealsConcludeApprovedExternalDeal()` */
  static readonly DealsConcludeApprovedExternalDealPath = '/market/api/v1/deals/{dealId}/customers/{organizationId}/users/{userId}/conclude/external';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealsConcludeApprovedExternalDeal()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsConcludeApprovedExternalDeal$Response(params: DealsConcludeApprovedExternalDeal$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>> {
    return dealsConcludeApprovedExternalDeal(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealsConcludeApprovedExternalDeal$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsConcludeApprovedExternalDeal(params: DealsConcludeApprovedExternalDeal$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfBooleanAltDto> {
    return this.dealsConcludeApprovedExternalDeal$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>): ApiMarketJsonResultOfBooleanAltDto => r.body)
    );
  }

  /** Path part for operation `dealsSentForParticipantApprove()` */
  static readonly DealsSentForParticipantApprovePath = '/market/api/v1/deals/customers/sent_for_approve';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealsSentForParticipantApprove()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsSentForParticipantApprove$Response(params?: DealsSentForParticipantApprove$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfLongAltDto>> {
    return dealsSentForParticipantApprove(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealsSentForParticipantApprove$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsSentForParticipantApprove(params?: DealsSentForParticipantApprove$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfLongAltDto> {
    return this.dealsSentForParticipantApprove$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfLongAltDto>): ApiMarketJsonResultOfLongAltDto => r.body)
    );
  }

  /** Path part for operation `dealsSentForParticipantApproveExternal()` */
  static readonly DealsSentForParticipantApproveExternalPath = '/market/api/v1/deals/customers/sent_for_approve_external';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealsSentForParticipantApproveExternal()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsSentForParticipantApproveExternal$Response(params?: DealsSentForParticipantApproveExternal$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfLongAltDto>> {
    return dealsSentForParticipantApproveExternal(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealsSentForParticipantApproveExternal$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsSentForParticipantApproveExternal(params?: DealsSentForParticipantApproveExternal$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfLongAltDto> {
    return this.dealsSentForParticipantApproveExternal$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfLongAltDto>): ApiMarketJsonResultOfLongAltDto => r.body)
    );
  }

  /** Path part for operation `dealsUpdateDealDocumentsExternal()` */
  static readonly DealsUpdateDealDocumentsExternalPath = '/market/api/v1/deals/customers/update_deal_documents_external';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealsUpdateDealDocumentsExternal()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsUpdateDealDocumentsExternal$Response(params?: DealsUpdateDealDocumentsExternal$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return dealsUpdateDealDocumentsExternal(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealsUpdateDealDocumentsExternal$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsUpdateDealDocumentsExternal(params?: DealsUpdateDealDocumentsExternal$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.dealsUpdateDealDocumentsExternal$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

  /** Path part for operation `dealsChangeFormToPaper()` */
  static readonly DealsChangeFormToPaperPath = '/market/api/v1/deals/customers/paper_form/change';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealsChangeFormToPaper()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsChangeFormToPaper$Response(params?: DealsChangeFormToPaper$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfLongAltDto>> {
    return dealsChangeFormToPaper(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealsChangeFormToPaper$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsChangeFormToPaper(params?: DealsChangeFormToPaper$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfLongAltDto> {
    return this.dealsChangeFormToPaper$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfLongAltDto>): ApiMarketJsonResultOfLongAltDto => r.body)
    );
  }

  /** Path part for operation `dealsRejectChangeFormToPaper()` */
  static readonly DealsRejectChangeFormToPaperPath = '/market/api/v1/deals/customers/paper_form/reject';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealsRejectChangeFormToPaper()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsRejectChangeFormToPaper$Response(params?: DealsRejectChangeFormToPaper$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>> {
    return dealsRejectChangeFormToPaper(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealsRejectChangeFormToPaper$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsRejectChangeFormToPaper(params?: DealsRejectChangeFormToPaper$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfBooleanAltDto> {
    return this.dealsRejectChangeFormToPaper$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>): ApiMarketJsonResultOfBooleanAltDto => r.body)
    );
  }

  /** Path part for operation `dealsChangeForm()` */
  static readonly DealsChangeFormPath = '/market/api/v1/deals/customers/form/change';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealsChangeForm()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsChangeForm$Response(params?: DealsChangeForm$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return dealsChangeForm(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealsChangeForm$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsChangeForm(params?: DealsChangeForm$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.dealsChangeForm$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

  /** Path part for operation `dealsEditWorkGroups()` */
  static readonly DealsEditWorkGroupsPath = '/market/api/v1/deals/customers/work_groups/edit';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealsEditWorkGroups()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsEditWorkGroups$Response(params?: DealsEditWorkGroups$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>> {
    return dealsEditWorkGroups(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealsEditWorkGroups$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsEditWorkGroups(params?: DealsEditWorkGroups$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfBooleanAltDto> {
    return this.dealsEditWorkGroups$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>): ApiMarketJsonResultOfBooleanAltDto => r.body)
    );
  }

  /** Path part for operation `dealsSetDealExecuted()` */
  static readonly DealsSetDealExecutedPath = '/market/api/v1/deals/{id}/customers/execute';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealsSetDealExecuted()` instead.
   *
   * This method doesn't expect any request body.
   */
  dealsSetDealExecuted$Response(params: DealsSetDealExecuted$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketFullDealDto>> {
    return dealsSetDealExecuted(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealsSetDealExecuted$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dealsSetDealExecuted(params: DealsSetDealExecuted$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfMarketFullDealDto> {
    return this.dealsSetDealExecuted$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfMarketFullDealDto>): ApiMarketJsonResultOfMarketFullDealDto => r.body)
    );
  }

  /** Path part for operation `dealsSetDealTerminated()` */
  static readonly DealsSetDealTerminatedPath = '/market/api/v1/deals/{dealId}/customers/terminate';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealsSetDealTerminated()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsSetDealTerminated$Response(params: DealsSetDealTerminated$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketFullDealDto>> {
    return dealsSetDealTerminated(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealsSetDealTerminated$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsSetDealTerminated(params: DealsSetDealTerminated$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfMarketFullDealDto> {
    return this.dealsSetDealTerminated$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfMarketFullDealDto>): ApiMarketJsonResultOfMarketFullDealDto => r.body)
    );
  }

  /** Path part for operation `dealsSaveDealExtendedInfo()` */
  static readonly DealsSaveDealExtendedInfoPath = '/market/api/v1/deals/SaveDealExtendedInfo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealsSaveDealExtendedInfo()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsSaveDealExtendedInfo$Response(params?: DealsSaveDealExtendedInfo$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return dealsSaveDealExtendedInfo(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealsSaveDealExtendedInfo$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsSaveDealExtendedInfo(params?: DealsSaveDealExtendedInfo$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.dealsSaveDealExtendedInfo$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

  /** Path part for operation `dealsGetDealExtendedInfo()` */
  static readonly DealsGetDealExtendedInfoPath = '/market/api/v1/deals/{dealId}/ExtendedInfo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealsGetDealExtendedInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  dealsGetDealExtendedInfo$Response(params: DealsGetDealExtendedInfo$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfDealExtendedInfoAltDto>> {
    return dealsGetDealExtendedInfo(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealsGetDealExtendedInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dealsGetDealExtendedInfo(params: DealsGetDealExtendedInfo$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfDealExtendedInfoAltDto> {
    return this.dealsGetDealExtendedInfo$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfDealExtendedInfoAltDto>): ApiMarketJsonResultOfDealExtendedInfoAltDto => r.body)
    );
  }

  /** Path part for operation `dealsGetTradeActualDeal()` */
  static readonly DealsGetTradeActualDealPath = '/market/api/v1/deals/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealsGetTradeActualDeal()` instead.
   *
   * This method doesn't expect any request body.
   */
  dealsGetTradeActualDeal$Response(params: DealsGetTradeActualDeal$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketDealDto>> {
    return dealsGetTradeActualDeal(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealsGetTradeActualDeal$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dealsGetTradeActualDeal(params: DealsGetTradeActualDeal$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfMarketDealDto> {
    return this.dealsGetTradeActualDeal$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfMarketDealDto>): ApiMarketJsonResultOfMarketDealDto => r.body)
    );
  }

  /** Path part for operation `dealsGetTradeActualDeals()` */
  static readonly DealsGetTradeActualDealsPath = '/market/api/v1/deals/GetDealsByTradeId/{tradeId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealsGetTradeActualDeals()` instead.
   *
   * This method doesn't expect any request body.
   */
  dealsGetTradeActualDeals$Response(params: DealsGetTradeActualDeals$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketDealDtoOf>> {
    return dealsGetTradeActualDeals(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealsGetTradeActualDeals$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dealsGetTradeActualDeals(params: DealsGetTradeActualDeals$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfMarketDealDtoOf> {
    return this.dealsGetTradeActualDeals$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfMarketDealDtoOf>): ApiMarketJsonResultOfMarketDealDtoOf => r.body)
    );
  }

  /** Path part for operation `dealsGetTradeHistory()` */
  static readonly DealsGetTradeHistoryPath = '/market/api/v1/deals/GetTradeDealsHistory/{tradeId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealsGetTradeHistory()` instead.
   *
   * This method doesn't expect any request body.
   */
  dealsGetTradeHistory$Response(params: DealsGetTradeHistory$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfDiscussionDto>> {
    return dealsGetTradeHistory(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealsGetTradeHistory$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dealsGetTradeHistory(params: DealsGetTradeHistory$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfListOfDiscussionDto> {
    return this.dealsGetTradeHistory$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfListOfDiscussionDto>): ApiMarketJsonResultOfListOfDiscussionDto => r.body)
    );
  }

  /** Path part for operation `dealsGetTradeAndDealHistory()` */
  static readonly DealsGetTradeAndDealHistoryPath = '/market/api/v1/deals/GetTradeDealsHistory/{tradeId}/{dealId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealsGetTradeAndDealHistory()` instead.
   *
   * This method doesn't expect any request body.
   */
  dealsGetTradeAndDealHistory$Response(params: DealsGetTradeAndDealHistory$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfDiscussionDto>> {
    return dealsGetTradeAndDealHistory(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealsGetTradeAndDealHistory$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dealsGetTradeAndDealHistory(params: DealsGetTradeAndDealHistory$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfListOfDiscussionDto> {
    return this.dealsGetTradeAndDealHistory$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfListOfDiscussionDto>): ApiMarketJsonResultOfListOfDiscussionDto => r.body)
    );
  }

  /** Path part for operation `dealsGetTradeAndDealDiscussionHistory()` */
  static readonly DealsGetTradeAndDealDiscussionHistoryPath = '/market/api/v1/deals/{dealId}/discussion-history';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealsGetTradeAndDealDiscussionHistory()` instead.
   *
   * This method doesn't expect any request body.
   */
  dealsGetTradeAndDealDiscussionHistory$Response(params: DealsGetTradeAndDealDiscussionHistory$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfIDiscussionHistoryDto>> {
    return dealsGetTradeAndDealDiscussionHistory(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealsGetTradeAndDealDiscussionHistory$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dealsGetTradeAndDealDiscussionHistory(params: DealsGetTradeAndDealDiscussionHistory$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfListOfIDiscussionHistoryDto> {
    return this.dealsGetTradeAndDealDiscussionHistory$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfListOfIDiscussionHistoryDto>): ApiMarketJsonResultOfListOfIDiscussionHistoryDto => r.body)
    );
  }

  /** Path part for operation `dealsExportDealsInfoIntoExcel()` */
  static readonly DealsExportDealsInfoIntoExcelPath = '/market/api/v1/deals/export-into-excel';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealsExportDealsInfoIntoExcel()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsExportDealsInfoIntoExcel$Response(params?: DealsExportDealsInfoIntoExcel$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfNullableGuidAltDto>> {
    return dealsExportDealsInfoIntoExcel(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealsExportDealsInfoIntoExcel$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsExportDealsInfoIntoExcel(params?: DealsExportDealsInfoIntoExcel$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfNullableGuidAltDto> {
    return this.dealsExportDealsInfoIntoExcel$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfNullableGuidAltDto>): ApiMarketJsonResultOfNullableGuidAltDto => r.body)
    );
  }

  /** Path part for operation `dealsUpdateFullDealPrice()` */
  static readonly DealsUpdateFullDealPricePath = '/market/api/v1/deals/price/change';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealsUpdateFullDealPrice()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsUpdateFullDealPrice$Response(params?: DealsUpdateFullDealPrice$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return dealsUpdateFullDealPrice(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealsUpdateFullDealPrice$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsUpdateFullDealPrice(params?: DealsUpdateFullDealPrice$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.dealsUpdateFullDealPrice$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

  /** Path part for operation `dealsGetLastDealFullPriceChange()` */
  static readonly DealsGetLastDealFullPriceChangePath = '/market/api/v1/deals/price/lastPriceChange';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealsGetLastDealFullPriceChange()` instead.
   *
   * This method doesn't expect any request body.
   */
  dealsGetLastDealFullPriceChange$Response(params: DealsGetLastDealFullPriceChange$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfDealFullPriceChangeDto>> {
    return dealsGetLastDealFullPriceChange(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealsGetLastDealFullPriceChange$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dealsGetLastDealFullPriceChange(params: DealsGetLastDealFullPriceChange$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfDealFullPriceChangeDto> {
    return this.dealsGetLastDealFullPriceChange$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfDealFullPriceChangeDto>): ApiMarketJsonResultOfDealFullPriceChangeDto => r.body)
    );
  }

  /** Path part for operation `dealsDoNotConcludeDeal()` */
  static readonly DealsDoNotConcludeDealPath = '/market/api/v1/deals/do_not_conclude';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealsDoNotConcludeDeal()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsDoNotConcludeDeal$Response(params?: DealsDoNotConcludeDeal$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>> {
    return dealsDoNotConcludeDeal(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealsDoNotConcludeDeal$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsDoNotConcludeDeal(params?: DealsDoNotConcludeDeal$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfBooleanAltDto> {
    return this.dealsDoNotConcludeDeal$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>): ApiMarketJsonResultOfBooleanAltDto => r.body)
    );
  }

  /** Path part for operation `dealsSaveDealEisDataDraft()` */
  static readonly DealsSaveDealEisDataDraftPath = '/market/api/v1/deals/save/eis/draft';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealsSaveDealEisDataDraft()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsSaveDealEisDataDraft$Response(params?: DealsSaveDealEisDataDraft$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return dealsSaveDealEisDataDraft(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealsSaveDealEisDataDraft$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsSaveDealEisDataDraft(params?: DealsSaveDealEisDataDraft$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.dealsSaveDealEisDataDraft$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

  /** Path part for operation `dealsSendDealToEis()` */
  static readonly DealsSendDealToEisPath = '/market/api/v1/deals/send_to_eis';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealsSendDealToEis()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsSendDealToEis$Response(params?: DealsSendDealToEis$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfEisIntegrationResultDto>> {
    return dealsSendDealToEis(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealsSendDealToEis$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsSendDealToEis(params?: DealsSendDealToEis$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfEisIntegrationResultDto> {
    return this.dealsSendDealToEis$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfEisIntegrationResultDto>): ApiMarketJsonResultOfEisIntegrationResultDto => r.body)
    );
  }

  /** Path part for operation `dealsGetExportDealDocuments()` */
  static readonly DealsGetExportDealDocumentsPath = '/market/api/v1/deals/export_documents';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealsGetExportDealDocuments()` instead.
   *
   * This method doesn't expect any request body.
   */
  dealsGetExportDealDocuments$Response(params: DealsGetExportDealDocuments$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfNullableGuidAltDto>> {
    return dealsGetExportDealDocuments(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealsGetExportDealDocuments$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dealsGetExportDealDocuments(params: DealsGetExportDealDocuments$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfNullableGuidAltDto> {
    return this.dealsGetExportDealDocuments$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfNullableGuidAltDto>): ApiMarketJsonResultOfNullableGuidAltDto => r.body)
    );
  }

  /** Path part for operation `dealsGetExportDealDocumentsFile()` */
  static readonly DealsGetExportDealDocumentsFilePath = '/market/api/v1/deals/export_documents/file';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealsGetExportDealDocumentsFile()` instead.
   *
   * This method doesn't expect any request body.
   */
  dealsGetExportDealDocumentsFile$Response(params: DealsGetExportDealDocumentsFile$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return dealsGetExportDealDocumentsFile(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealsGetExportDealDocumentsFile$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dealsGetExportDealDocumentsFile(params: DealsGetExportDealDocumentsFile$Params, context?: HttpContext): Observable<Blob> {
    return this.dealsGetExportDealDocumentsFile$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `dealsGetDealDocumentPacks()` */
  static readonly DealsGetDealDocumentPacksPath = '/market/api/v1/deals/{id}/document-packs';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealsGetDealDocumentPacks()` instead.
   *
   * This method doesn't expect any request body.
   */
  dealsGetDealDocumentPacks$Response(params: DealsGetDealDocumentPacks$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfDocumentPackDtoOf>> {
    return dealsGetDealDocumentPacks(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealsGetDealDocumentPacks$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dealsGetDealDocumentPacks(params: DealsGetDealDocumentPacks$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfDocumentPackDtoOf> {
    return this.dealsGetDealDocumentPacks$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfDocumentPackDtoOf>): ApiMarketJsonResultOfDocumentPackDtoOf => r.body)
    );
  }

  /** Path part for operation `dealsAddPaperDealDocuments()` */
  static readonly DealsAddPaperDealDocumentsPath = '/market/api/v1/deals/{id}/paper-documents';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealsAddPaperDealDocuments()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsAddPaperDealDocuments$Response(params: DealsAddPaperDealDocuments$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return dealsAddPaperDealDocuments(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealsAddPaperDealDocuments$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsAddPaperDealDocuments(params: DealsAddPaperDealDocuments$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.dealsAddPaperDealDocuments$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

  /** Path part for operation `dealsGenerateDealNumber()` */
  static readonly DealsGenerateDealNumberPath = '/market/api/v1/deals/number/generate';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealsGenerateDealNumber()` instead.
   *
   * This method doesn't expect any request body.
   */
  dealsGenerateDealNumber$Response(params?: DealsGenerateDealNumber$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfStringAltDto>> {
    return dealsGenerateDealNumber(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealsGenerateDealNumber$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dealsGenerateDealNumber(params?: DealsGenerateDealNumber$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfStringAltDto> {
    return this.dealsGenerateDealNumber$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfStringAltDto>): ApiMarketJsonResultOfStringAltDto => r.body)
    );
  }

  /** Path part for operation `dealsSignDealOutsideEShop()` */
  static readonly DealsSignDealOutsideEShopPath = '/market/api/v1/deals/SignDealOutsideEShop';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealsSignDealOutsideEShop()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsSignDealOutsideEShop$Response(params?: DealsSignDealOutsideEShop$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return dealsSignDealOutsideEShop(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealsSignDealOutsideEShop$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsSignDealOutsideEShop(params?: DealsSignDealOutsideEShop$Params, context?: HttpContext): Observable<number> {
    return this.dealsSignDealOutsideEShop$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `dealsGetCountDownTime()` */
  static readonly DealsGetCountDownTimePath = '/market/api/v1/deals/{dealId}/countdown-time';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealsGetCountDownTime()` instead.
   *
   * This method doesn't expect any request body.
   */
  dealsGetCountDownTime$Response(params: DealsGetCountDownTime$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfDealCountdownDto>> {
    return dealsGetCountDownTime(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealsGetCountDownTime$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dealsGetCountDownTime(params: DealsGetCountDownTime$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfDealCountdownDto> {
    return this.dealsGetCountDownTime$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfDealCountdownDto>): ApiMarketJsonResultOfDealCountdownDto => r.body)
    );
  }

  /** Path part for operation `dealsSendContractFromCustomerToSupplier()` */
  static readonly DealsSendContractFromCustomerToSupplierPath = '/market/api/v1/deals/{id}/customer/send';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealsSendContractFromCustomerToSupplier()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsSendContractFromCustomerToSupplier$Response(params: DealsSendContractFromCustomerToSupplier$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>> {
    return dealsSendContractFromCustomerToSupplier(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealsSendContractFromCustomerToSupplier$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsSendContractFromCustomerToSupplier(params: DealsSendContractFromCustomerToSupplier$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfIntegerAltDto> {
    return this.dealsSendContractFromCustomerToSupplier$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>): ApiMarketJsonResultOfIntegerAltDto => r.body)
    );
  }

  /** Path part for operation `dealsSendContractFromSupplierToCustomer()` */
  static readonly DealsSendContractFromSupplierToCustomerPath = '/market/api/v1/deals/{id}/participant/send';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealsSendContractFromSupplierToCustomer()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsSendContractFromSupplierToCustomer$Response(params: DealsSendContractFromSupplierToCustomer$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>> {
    return dealsSendContractFromSupplierToCustomer(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealsSendContractFromSupplierToCustomer$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsSendContractFromSupplierToCustomer(params: DealsSendContractFromSupplierToCustomer$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfIntegerAltDto> {
    return this.dealsSendContractFromSupplierToCustomer$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>): ApiMarketJsonResultOfIntegerAltDto => r.body)
    );
  }

  /** Path part for operation `dealsChangeContractByCustomer()` */
  static readonly DealsChangeContractByCustomerPath = '/market/api/v1/deals/{id}/customer/change';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealsChangeContractByCustomer()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsChangeContractByCustomer$Response(params: DealsChangeContractByCustomer$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>> {
    return dealsChangeContractByCustomer(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealsChangeContractByCustomer$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsChangeContractByCustomer(params: DealsChangeContractByCustomer$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfIntegerAltDto> {
    return this.dealsChangeContractByCustomer$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>): ApiMarketJsonResultOfIntegerAltDto => r.body)
    );
  }

  /** Path part for operation `dealsChangeContractBySupplier()` */
  static readonly DealsChangeContractBySupplierPath = '/market/api/v1/deals/{id}/participant/change';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealsChangeContractBySupplier()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsChangeContractBySupplier$Response(params: DealsChangeContractBySupplier$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>> {
    return dealsChangeContractBySupplier(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealsChangeContractBySupplier$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsChangeContractBySupplier(params: DealsChangeContractBySupplier$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfIntegerAltDto> {
    return this.dealsChangeContractBySupplier$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfIntegerAltDto>): ApiMarketJsonResultOfIntegerAltDto => r.body)
    );
  }

  /** Path part for operation `dealsRevokeDealByCustomer()` */
  static readonly DealsRevokeDealByCustomerPath = '/market/api/v1/deals/{id}/customer/revoke';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealsRevokeDealByCustomer()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsRevokeDealByCustomer$Response(params: DealsRevokeDealByCustomer$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return dealsRevokeDealByCustomer(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealsRevokeDealByCustomer$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsRevokeDealByCustomer(params: DealsRevokeDealByCustomer$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.dealsRevokeDealByCustomer$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

  /** Path part for operation `dealsRevokeDealBySupplier()` */
  static readonly DealsRevokeDealBySupplierPath = '/market/api/v1/deals/{id}/participant/revoke';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealsRevokeDealBySupplier()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsRevokeDealBySupplier$Response(params: DealsRevokeDealBySupplier$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return dealsRevokeDealBySupplier(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealsRevokeDealBySupplier$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsRevokeDealBySupplier(params: DealsRevokeDealBySupplier$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.dealsRevokeDealBySupplier$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

  /** Path part for operation `dealsAddDealProvisionBySupplier()` */
  static readonly DealsAddDealProvisionBySupplierPath = '/market/api/v1/deals/{id}/participant/provision';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealsAddDealProvisionBySupplier()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsAddDealProvisionBySupplier$Response(params: DealsAddDealProvisionBySupplier$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return dealsAddDealProvisionBySupplier(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealsAddDealProvisionBySupplier$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsAddDealProvisionBySupplier(params: DealsAddDealProvisionBySupplier$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.dealsAddDealProvisionBySupplier$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

  /** Path part for operation `dealsCreateDifferenceProtocolBySupplier()` */
  static readonly DealsCreateDifferenceProtocolBySupplierPath = '/market/api/v1/deals/{id}/participant/difference-protocol';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealsCreateDifferenceProtocolBySupplier()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsCreateDifferenceProtocolBySupplier$Response(params: DealsCreateDifferenceProtocolBySupplier$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return dealsCreateDifferenceProtocolBySupplier(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealsCreateDifferenceProtocolBySupplier$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsCreateDifferenceProtocolBySupplier(params: DealsCreateDifferenceProtocolBySupplier$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.dealsCreateDifferenceProtocolBySupplier$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

  /** Path part for operation `dealsChangeFormToPaperByCustomer()` */
  static readonly DealsChangeFormToPaperByCustomerPath = '/market/api/v1/deals/{id}/customer/form/change/paper';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dealsChangeFormToPaperByCustomer()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsChangeFormToPaperByCustomer$Response(params: DealsChangeFormToPaperByCustomer$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return dealsChangeFormToPaperByCustomer(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dealsChangeFormToPaperByCustomer$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dealsChangeFormToPaperByCustomer(params: DealsChangeFormToPaperByCustomer$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.dealsChangeFormToPaperByCustomer$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

}
