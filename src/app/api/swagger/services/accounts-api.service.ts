/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { accountsCreateBanksDetailsByAccount } from '../fn/accounts/accounts-create-banks-details-by-account';
import { AccountsCreateBanksDetailsByAccount$Params } from '../fn/accounts/accounts-create-banks-details-by-account';
import { accountsEditBanksDetailsByAccount } from '../fn/accounts/accounts-edit-banks-details-by-account';
import { AccountsEditBanksDetailsByAccount$Params } from '../fn/accounts/accounts-edit-banks-details-by-account';
import { accountsExportTransactionToExcel } from '../fn/accounts/accounts-export-transaction-to-excel';
import { AccountsExportTransactionToExcel$Params } from '../fn/accounts/accounts-export-transaction-to-excel';
import { accountsGetAccountRefillDocument } from '../fn/accounts/accounts-get-account-refill-document';
import { AccountsGetAccountRefillDocument$Params } from '../fn/accounts/accounts-get-account-refill-document';
import { accountsGetAccountRefillHtmlDocument } from '../fn/accounts/accounts-get-account-refill-html-document';
import { AccountsGetAccountRefillHtmlDocument$Params } from '../fn/accounts/accounts-get-account-refill-html-document';
import { accountsGetBanksDetailsByAccount } from '../fn/accounts/accounts-get-banks-details-by-account';
import { AccountsGetBanksDetailsByAccount$Params } from '../fn/accounts/accounts-get-banks-details-by-account';
import { accountsGetBanksDetailsListByAccount } from '../fn/accounts/accounts-get-banks-details-list-by-account';
import { AccountsGetBanksDetailsListByAccount$Params } from '../fn/accounts/accounts-get-banks-details-list-by-account';
import { accountsGetCommissionByQuotation } from '../fn/accounts/accounts-get-commission-by-quotation';
import { AccountsGetCommissionByQuotation$Params } from '../fn/accounts/accounts-get-commission-by-quotation';
import { accountsGetCommissionByTrade } from '../fn/accounts/accounts-get-commission-by-trade';
import { AccountsGetCommissionByTrade$Params } from '../fn/accounts/accounts-get-commission-by-trade';
import { accountsGetDocumentsByAccount } from '../fn/accounts/accounts-get-documents-by-account';
import { AccountsGetDocumentsByAccount$Params } from '../fn/accounts/accounts-get-documents-by-account';
import { accountsGetExternalUserInfo } from '../fn/accounts/accounts-get-external-user-info';
import { AccountsGetExternalUserInfo$Params } from '../fn/accounts/accounts-get-external-user-info';
import { accountsGetLotCommissionByLot } from '../fn/accounts/accounts-get-lot-commission-by-lot';
import { AccountsGetLotCommissionByLot$Params } from '../fn/accounts/accounts-get-lot-commission-by-lot';
import { accountsGetLotCommissionByQuotation } from '../fn/accounts/accounts-get-lot-commission-by-quotation';
import { AccountsGetLotCommissionByQuotation$Params } from '../fn/accounts/accounts-get-lot-commission-by-quotation';
import { accountsGetLotCommissionInternal } from '../fn/accounts/accounts-get-lot-commission-internal';
import { AccountsGetLotCommissionInternal$Params } from '../fn/accounts/accounts-get-lot-commission-internal';
import { accountsGetMyAccounts } from '../fn/accounts/accounts-get-my-accounts';
import { AccountsGetMyAccounts$Params } from '../fn/accounts/accounts-get-my-accounts';
import { accountsGetTransaction } from '../fn/accounts/accounts-get-transaction';
import { AccountsGetTransaction$Params } from '../fn/accounts/accounts-get-transaction';
import { accountsGetTransactionsByAccount } from '../fn/accounts/accounts-get-transactions-by-account';
import { AccountsGetTransactionsByAccount$Params } from '../fn/accounts/accounts-get-transactions-by-account';
import { ApiMarketJsonResultOfBankingDetailsDto } from '../models/api-market-json-result-of-banking-details-dto';
import { ApiMarketJsonResultOfDecimal } from '../models/api-market-json-result-of-decimal';
import { ApiMarketJsonResultOfExternalUserInfo } from '../models/api-market-json-result-of-external-user-info';
import { ApiMarketJsonResultOfInteger } from '../models/api-market-json-result-of-integer';
import { ApiMarketJsonResultOfListOfAccountDto } from '../models/api-market-json-result-of-list-of-account-dto';
import { ApiMarketJsonResultOfListOfBankingDetailsDto } from '../models/api-market-json-result-of-list-of-banking-details-dto';
import { ApiMarketJsonResultOfMarketPaginationResultOfListOfFinDocumentDto } from '../models/api-market-json-result-of-market-pagination-result-of-list-of-fin-document-dto';
import { ApiMarketJsonResultOfMarketPaginationResultOfListOfTransactionShortDto } from '../models/api-market-json-result-of-market-pagination-result-of-list-of-transaction-short-dto';
import { ApiMarketJsonResultOfString } from '../models/api-market-json-result-of-string';
import { ApiMarketJsonResultOfTransactionDto } from '../models/api-market-json-result-of-transaction-dto';

@Injectable({ providedIn: 'root' })
export class AccountsApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `accountsGetMyAccounts()` */
  static readonly AccountsGetMyAccountsPath = '/bla-bla-vla/accounts/my';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountsGetMyAccounts()` instead.
   *
   * This method doesn't expect any request body.
   */
  accountsGetMyAccounts$Response(params?: AccountsGetMyAccounts$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfAccountDto>> {
    return accountsGetMyAccounts(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `accountsGetMyAccounts$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  accountsGetMyAccounts(params?: AccountsGetMyAccounts$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfListOfAccountDto> {
    return this.accountsGetMyAccounts$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfListOfAccountDto>): ApiMarketJsonResultOfListOfAccountDto => r.body)
    );
  }

  /** Path part for operation `accountsGetLotCommissionByLot()` */
  static readonly AccountsGetLotCommissionByLotPath = '/bla-bla-vla/accounts/lotcommission/{lotId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountsGetLotCommissionByLot()` instead.
   *
   * This method doesn't expect any request body.
   */
  accountsGetLotCommissionByLot$Response(params: AccountsGetLotCommissionByLot$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfDecimal>> {
    return accountsGetLotCommissionByLot(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `accountsGetLotCommissionByLot$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  accountsGetLotCommissionByLot(params: AccountsGetLotCommissionByLot$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfDecimal> {
    return this.accountsGetLotCommissionByLot$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfDecimal>): ApiMarketJsonResultOfDecimal => r.body)
    );
  }

  /** Path part for operation `accountsGetLotCommissionByQuotation()` */
  static readonly AccountsGetLotCommissionByQuotationPath = '/bla-bla-vla/accounts/lotcommission/{lotId}/quotation/{quotation}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountsGetLotCommissionByQuotation()` instead.
   *
   * This method doesn't expect any request body.
   */
  accountsGetLotCommissionByQuotation$Response(params: AccountsGetLotCommissionByQuotation$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfDecimal>> {
    return accountsGetLotCommissionByQuotation(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `accountsGetLotCommissionByQuotation$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  accountsGetLotCommissionByQuotation(params: AccountsGetLotCommissionByQuotation$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfDecimal> {
    return this.accountsGetLotCommissionByQuotation$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfDecimal>): ApiMarketJsonResultOfDecimal => r.body)
    );
  }

  /** Path part for operation `accountsGetLotCommissionInternal()` */
  static readonly AccountsGetLotCommissionInternalPath = '/bla-bla-vla/accounts/lotcommission/{lotId}/organization/{supplierOrganizationId}/quotation/{quotation}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountsGetLotCommissionInternal()` instead.
   *
   * This method doesn't expect any request body.
   */
  accountsGetLotCommissionInternal$Response(params: AccountsGetLotCommissionInternal$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfDecimal>> {
    return accountsGetLotCommissionInternal(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `accountsGetLotCommissionInternal$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  accountsGetLotCommissionInternal(params: AccountsGetLotCommissionInternal$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfDecimal> {
    return this.accountsGetLotCommissionInternal$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfDecimal>): ApiMarketJsonResultOfDecimal => r.body)
    );
  }

  /** Path part for operation `accountsGetCommissionByTrade()` */
  static readonly AccountsGetCommissionByTradePath = '/bla-bla-vla/accounts/commission/{tradeId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountsGetCommissionByTrade()` instead.
   *
   * This method doesn't expect any request body.
   */
  accountsGetCommissionByTrade$Response(params: AccountsGetCommissionByTrade$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfDecimal>> {
    return accountsGetCommissionByTrade(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `accountsGetCommissionByTrade$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  accountsGetCommissionByTrade(params: AccountsGetCommissionByTrade$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfDecimal> {
    return this.accountsGetCommissionByTrade$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfDecimal>): ApiMarketJsonResultOfDecimal => r.body)
    );
  }

  /** Path part for operation `accountsGetCommissionByQuotation()` */
  static readonly AccountsGetCommissionByQuotationPath = '/bla-bla-vla/accounts/commission/{tradeId}/quotation/{quotation}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountsGetCommissionByQuotation()` instead.
   *
   * This method doesn't expect any request body.
   */
  accountsGetCommissionByQuotation$Response(params: AccountsGetCommissionByQuotation$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfDecimal>> {
    return accountsGetCommissionByQuotation(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `accountsGetCommissionByQuotation$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  accountsGetCommissionByQuotation(params: AccountsGetCommissionByQuotation$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfDecimal> {
    return this.accountsGetCommissionByQuotation$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfDecimal>): ApiMarketJsonResultOfDecimal => r.body)
    );
  }

  /** Path part for operation `accountsGetTransactionsByAccount()` */
  static readonly AccountsGetTransactionsByAccountPath = '/bla-bla-vla/accounts/my/{accountNumber}/transactions';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountsGetTransactionsByAccount()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  accountsGetTransactionsByAccount$Response(params: AccountsGetTransactionsByAccount$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfTransactionShortDto>> {
    return accountsGetTransactionsByAccount(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `accountsGetTransactionsByAccount$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  accountsGetTransactionsByAccount(params: AccountsGetTransactionsByAccount$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfMarketPaginationResultOfListOfTransactionShortDto> {
    return this.accountsGetTransactionsByAccount$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfTransactionShortDto>): ApiMarketJsonResultOfMarketPaginationResultOfListOfTransactionShortDto => r.body)
    );
  }

  /** Path part for operation `accountsGetTransaction()` */
  static readonly AccountsGetTransactionPath = '/bla-bla-vla/accounts/my/{accountNumber}/transactions/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountsGetTransaction()` instead.
   *
   * This method doesn't expect any request body.
   */
  accountsGetTransaction$Response(params: AccountsGetTransaction$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfTransactionDto>> {
    return accountsGetTransaction(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `accountsGetTransaction$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  accountsGetTransaction(params: AccountsGetTransaction$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfTransactionDto> {
    return this.accountsGetTransaction$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfTransactionDto>): ApiMarketJsonResultOfTransactionDto => r.body)
    );
  }

  /** Path part for operation `accountsExportTransactionToExcel()` */
  static readonly AccountsExportTransactionToExcelPath = '/bla-bla-vla/accounts/my/{accountNumber}/transactions/export';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountsExportTransactionToExcel()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  accountsExportTransactionToExcel$Response(params: AccountsExportTransactionToExcel$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return accountsExportTransactionToExcel(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `accountsExportTransactionToExcel$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  accountsExportTransactionToExcel(params: AccountsExportTransactionToExcel$Params, context?: HttpContext): Observable<Blob> {
    return this.accountsExportTransactionToExcel$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `accountsGetAccountRefillDocument()` */
  static readonly AccountsGetAccountRefillDocumentPath = '/bla-bla-vla/accounts/my/{accountNumber}/refill/{sum}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountsGetAccountRefillDocument()` instead.
   *
   * This method doesn't expect any request body.
   */
  accountsGetAccountRefillDocument$Response(params: AccountsGetAccountRefillDocument$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return accountsGetAccountRefillDocument(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `accountsGetAccountRefillDocument$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  accountsGetAccountRefillDocument(params: AccountsGetAccountRefillDocument$Params, context?: HttpContext): Observable<Blob> {
    return this.accountsGetAccountRefillDocument$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `accountsGetAccountRefillHtmlDocument()` */
  static readonly AccountsGetAccountRefillHtmlDocumentPath = '/bla-bla-vla/accounts/my/{accountNumber}/refill/{sum}/html';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountsGetAccountRefillHtmlDocument()` instead.
   *
   * This method doesn't expect any request body.
   */
  accountsGetAccountRefillHtmlDocument$Response(params: AccountsGetAccountRefillHtmlDocument$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfString>> {
    return accountsGetAccountRefillHtmlDocument(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `accountsGetAccountRefillHtmlDocument$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  accountsGetAccountRefillHtmlDocument(params: AccountsGetAccountRefillHtmlDocument$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfString> {
    return this.accountsGetAccountRefillHtmlDocument$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfString>): ApiMarketJsonResultOfString => r.body)
    );
  }

  /** Path part for operation `accountsGetDocumentsByAccount()` */
  static readonly AccountsGetDocumentsByAccountPath = '/bla-bla-vla/accounts/my/{accountNumber}/documents';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountsGetDocumentsByAccount()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  accountsGetDocumentsByAccount$Response(params: AccountsGetDocumentsByAccount$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfFinDocumentDto>> {
    return accountsGetDocumentsByAccount(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `accountsGetDocumentsByAccount$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  accountsGetDocumentsByAccount(params: AccountsGetDocumentsByAccount$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfMarketPaginationResultOfListOfFinDocumentDto> {
    return this.accountsGetDocumentsByAccount$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfFinDocumentDto>): ApiMarketJsonResultOfMarketPaginationResultOfListOfFinDocumentDto => r.body)
    );
  }

  /** Path part for operation `accountsGetBanksDetailsByAccount()` */
  static readonly AccountsGetBanksDetailsByAccountPath = '/bla-bla-vla/accounts/my/{accountNumber}/bankDetails';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountsGetBanksDetailsByAccount()` instead.
   *
   * This method doesn't expect any request body.
   */
  accountsGetBanksDetailsByAccount$Response(params: AccountsGetBanksDetailsByAccount$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBankingDetailsDto>> {
    return accountsGetBanksDetailsByAccount(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `accountsGetBanksDetailsByAccount$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  accountsGetBanksDetailsByAccount(params: AccountsGetBanksDetailsByAccount$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfBankingDetailsDto> {
    return this.accountsGetBanksDetailsByAccount$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfBankingDetailsDto>): ApiMarketJsonResultOfBankingDetailsDto => r.body)
    );
  }

  /** Path part for operation `accountsGetBanksDetailsListByAccount()` */
  static readonly AccountsGetBanksDetailsListByAccountPath = '/bla-bla-vla/accounts/my/{accountNumber}/bankDetailsList';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountsGetBanksDetailsListByAccount()` instead.
   *
   * This method doesn't expect any request body.
   */
  accountsGetBanksDetailsListByAccount$Response(params: AccountsGetBanksDetailsListByAccount$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfBankingDetailsDto>> {
    return accountsGetBanksDetailsListByAccount(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `accountsGetBanksDetailsListByAccount$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  accountsGetBanksDetailsListByAccount(params: AccountsGetBanksDetailsListByAccount$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfListOfBankingDetailsDto> {
    return this.accountsGetBanksDetailsListByAccount$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfListOfBankingDetailsDto>): ApiMarketJsonResultOfListOfBankingDetailsDto => r.body)
    );
  }

  /** Path part for operation `accountsCreateBanksDetailsByAccount()` */
  static readonly AccountsCreateBanksDetailsByAccountPath = '/bla-bla-vla/accounts/my/{accountNumber}/bankDetails/create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountsCreateBanksDetailsByAccount()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  accountsCreateBanksDetailsByAccount$Response(params: AccountsCreateBanksDetailsByAccount$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfInteger>> {
    return accountsCreateBanksDetailsByAccount(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `accountsCreateBanksDetailsByAccount$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  accountsCreateBanksDetailsByAccount(params: AccountsCreateBanksDetailsByAccount$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfInteger> {
    return this.accountsCreateBanksDetailsByAccount$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfInteger>): ApiMarketJsonResultOfInteger => r.body)
    );
  }

  /** Path part for operation `accountsEditBanksDetailsByAccount()` */
  static readonly AccountsEditBanksDetailsByAccountPath = '/bla-bla-vla/accounts/my/{accountNumber}/bankDetails/{bankingDetailsId}/edit';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountsEditBanksDetailsByAccount()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  accountsEditBanksDetailsByAccount$Response(params: AccountsEditBanksDetailsByAccount$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfInteger>> {
    return accountsEditBanksDetailsByAccount(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `accountsEditBanksDetailsByAccount$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  accountsEditBanksDetailsByAccount(params: AccountsEditBanksDetailsByAccount$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfInteger> {
    return this.accountsEditBanksDetailsByAccount$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfInteger>): ApiMarketJsonResultOfInteger => r.body)
    );
  }

  /** Path part for operation `accountsGetExternalUserInfo()` */
  static readonly AccountsGetExternalUserInfoPath = '/bla-bla-vla/accounts/externalUserInfo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountsGetExternalUserInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  accountsGetExternalUserInfo$Response(params?: AccountsGetExternalUserInfo$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfExternalUserInfo>> {
    return accountsGetExternalUserInfo(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `accountsGetExternalUserInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  accountsGetExternalUserInfo(params?: AccountsGetExternalUserInfo$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfExternalUserInfo> {
    return this.accountsGetExternalUserInfo$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfExternalUserInfo>): ApiMarketJsonResultOfExternalUserInfo => r.body)
    );
  }

}
