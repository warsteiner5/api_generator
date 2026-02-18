/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { accountBlockUsersForOrganization } from '../fn/account/account-block-users-for-organization';
import { AccountBlockUsersForOrganization$Params } from '../fn/account/account-block-users-for-organization';
import { accountCheckOrganizationExists } from '../fn/account/account-check-organization-exists';
import { AccountCheckOrganizationExists$Params } from '../fn/account/account-check-organization-exists';
import { accountGetAllUsersForOrganization } from '../fn/account/account-get-all-users-for-organization';
import { AccountGetAllUsersForOrganization$Params } from '../fn/account/account-get-all-users-for-organization';
import { accountGetCertificateInfoFromSignature } from '../fn/account/account-get-certificate-info-from-signature';
import { AccountGetCertificateInfoFromSignature$Params } from '../fn/account/account-get-certificate-info-from-signature';
import { accountGetExternalLogin } from '../fn/account/account-get-external-login';
import { AccountGetExternalLogin$Params } from '../fn/account/account-get-external-login';
import { accountGetExternalLogins } from '../fn/account/account-get-external-logins';
import { AccountGetExternalLogins$Params } from '../fn/account/account-get-external-logins';
import { accountGetExternalUserInfo } from '../fn/account/account-get-external-user-info';
import { AccountGetExternalUserInfo$Params } from '../fn/account/account-get-external-user-info';
import { accountGetManageInfo } from '../fn/account/account-get-manage-info';
import { AccountGetManageInfo$Params } from '../fn/account/account-get-manage-info';
import { accountGetUserRoles } from '../fn/account/account-get-user-roles';
import { AccountGetUserRoles$Params } from '../fn/account/account-get-user-roles';
import { accountLogout } from '../fn/account/account-logout';
import { AccountLogout$Params } from '../fn/account/account-logout';
import { accountMakeOrganizationDocumentActual } from '../fn/account/account-make-organization-document-actual';
import { AccountMakeOrganizationDocumentActual$Params } from '../fn/account/account-make-organization-document-actual';
import { accountMakeOrganizationDocumentNotActual } from '../fn/account/account-make-organization-document-not-actual';
import { AccountMakeOrganizationDocumentNotActual$Params } from '../fn/account/account-make-organization-document-not-actual';
import { accountMakeUsersNotOrgAdminForOrganization } from '../fn/account/account-make-users-not-org-admin-for-organization';
import { AccountMakeUsersNotOrgAdminForOrganization$Params } from '../fn/account/account-make-users-not-org-admin-for-organization';
import { accountMakeUsersOrgAdminForOrganization } from '../fn/account/account-make-users-org-admin-for-organization';
import { AccountMakeUsersOrgAdminForOrganization$Params } from '../fn/account/account-make-users-org-admin-for-organization';
import { accountPassportAccountsView } from '../fn/account/account-passport-accounts-view';
import { AccountPassportAccountsView$Params } from '../fn/account/account-passport-accounts-view';
import { accountRedirectByTenantId } from '../fn/account/account-redirect-by-tenant-id';
import { AccountRedirectByTenantId$Params } from '../fn/account/account-redirect-by-tenant-id';
import { accountUnBlockUsersForOrganization } from '../fn/account/account-un-block-users-for-organization';
import { AccountUnBlockUsersForOrganization$Params } from '../fn/account/account-un-block-users-for-organization';
import { ApiExternalLoginViewModelAltDto } from '../models/api-external-login-view-model';

@Injectable({ providedIn: 'root' })
export class AccountApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `accountGetExternalUserInfo()` */
  static readonly AccountGetExternalUserInfoPath = '/api/Account/ExternalUserInfo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountGetExternalUserInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  accountGetExternalUserInfo$Response(params?: AccountGetExternalUserInfo$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return accountGetExternalUserInfo(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `accountGetExternalUserInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  accountGetExternalUserInfo(params?: AccountGetExternalUserInfo$Params, context?: HttpContext): Observable<Blob> {
    return this.accountGetExternalUserInfo$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `accountLogout()` */
  static readonly AccountLogoutPath = '/api/Account/Logout';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountLogout()` instead.
   *
   * This method doesn't expect any request body.
   */
  accountLogout$Response(params?: AccountLogout$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return accountLogout(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `accountLogout$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  accountLogout(params?: AccountLogout$Params, context?: HttpContext): Observable<Blob> {
    return this.accountLogout$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `accountGetExternalLogin()` */
  static readonly AccountGetExternalLoginPath = '/api/Account/ExternalLogin';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountGetExternalLogin()` instead.
   *
   * This method doesn't expect any request body.
   */
  accountGetExternalLogin$Response(params: AccountGetExternalLogin$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return accountGetExternalLogin(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `accountGetExternalLogin$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  accountGetExternalLogin(params: AccountGetExternalLogin$Params, context?: HttpContext): Observable<Blob> {
    return this.accountGetExternalLogin$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `accountRedirectByTenantId()` */
  static readonly AccountRedirectByTenantIdPath = '/api/Account/RedirectByTenantId';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountRedirectByTenantId()` instead.
   *
   * This method doesn't expect any request body.
   */
  accountRedirectByTenantId$Response(params: AccountRedirectByTenantId$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return accountRedirectByTenantId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `accountRedirectByTenantId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  accountRedirectByTenantId(params: AccountRedirectByTenantId$Params, context?: HttpContext): Observable<Blob> {
    return this.accountRedirectByTenantId$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `accountPassportAccountsView()` */
  static readonly AccountPassportAccountsViewPath = '/api/Account/PassportAccountsView';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountPassportAccountsView()` instead.
   *
   * This method doesn't expect any request body.
   */
  accountPassportAccountsView$Response(params: AccountPassportAccountsView$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return accountPassportAccountsView(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `accountPassportAccountsView$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  accountPassportAccountsView(params: AccountPassportAccountsView$Params, context?: HttpContext): Observable<Blob> {
    return this.accountPassportAccountsView$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `accountGetExternalLogins()` */
  static readonly AccountGetExternalLoginsPath = '/api/Account/ExternalLogins';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountGetExternalLogins()` instead.
   *
   * This method doesn't expect any request body.
   */
  accountGetExternalLogins$Response(params: AccountGetExternalLogins$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ApiExternalLoginViewModelAltDto> | null>> {
    return accountGetExternalLogins(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `accountGetExternalLogins$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  accountGetExternalLogins(params: AccountGetExternalLogins$Params, context?: HttpContext): Observable<Array<ApiExternalLoginViewModelAltDto> | null> {
    return this.accountGetExternalLogins$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ApiExternalLoginViewModelAltDto> | null>): Array<ApiExternalLoginViewModelAltDto> | null => r.body)
    );
  }

  /** Path part for operation `accountCheckOrganizationExists()` */
  static readonly AccountCheckOrganizationExistsPath = '/api/Account/CheckOrganizationExists';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountCheckOrganizationExists()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  accountCheckOrganizationExists$Response(params?: AccountCheckOrganizationExists$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return accountCheckOrganizationExists(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `accountCheckOrganizationExists$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  accountCheckOrganizationExists(params?: AccountCheckOrganizationExists$Params, context?: HttpContext): Observable<Blob> {
    return this.accountCheckOrganizationExists$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `accountGetManageInfo()` */
  static readonly AccountGetManageInfoPath = '/api/Account/ManageInfo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountGetManageInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  accountGetManageInfo$Response(params?: AccountGetManageInfo$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return accountGetManageInfo(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `accountGetManageInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  accountGetManageInfo(params?: AccountGetManageInfo$Params, context?: HttpContext): Observable<Blob> {
    return this.accountGetManageInfo$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `accountGetUserRoles()` */
  static readonly AccountGetUserRolesPath = '/api/Account/UserRoles';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountGetUserRoles()` instead.
   *
   * This method doesn't expect any request body.
   */
  accountGetUserRoles$Response(params?: AccountGetUserRoles$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return accountGetUserRoles(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `accountGetUserRoles$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  accountGetUserRoles(params?: AccountGetUserRoles$Params, context?: HttpContext): Observable<Blob> {
    return this.accountGetUserRoles$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `accountMakeOrganizationDocumentNotActual()` */
  static readonly AccountMakeOrganizationDocumentNotActualPath = '/api/Account/MakeOrganizationDocumentNotActual';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountMakeOrganizationDocumentNotActual()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  accountMakeOrganizationDocumentNotActual$Response(params?: AccountMakeOrganizationDocumentNotActual$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return accountMakeOrganizationDocumentNotActual(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `accountMakeOrganizationDocumentNotActual$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  accountMakeOrganizationDocumentNotActual(params?: AccountMakeOrganizationDocumentNotActual$Params, context?: HttpContext): Observable<Blob> {
    return this.accountMakeOrganizationDocumentNotActual$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `accountMakeOrganizationDocumentActual()` */
  static readonly AccountMakeOrganizationDocumentActualPath = '/api/Account/MakeOrganizationDocumentActual';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountMakeOrganizationDocumentActual()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  accountMakeOrganizationDocumentActual$Response(params?: AccountMakeOrganizationDocumentActual$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return accountMakeOrganizationDocumentActual(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `accountMakeOrganizationDocumentActual$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  accountMakeOrganizationDocumentActual(params?: AccountMakeOrganizationDocumentActual$Params, context?: HttpContext): Observable<Blob> {
    return this.accountMakeOrganizationDocumentActual$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `accountGetAllUsersForOrganization()` */
  static readonly AccountGetAllUsersForOrganizationPath = '/api/Account/GetAllUsersForOrganization';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountGetAllUsersForOrganization()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  accountGetAllUsersForOrganization$Response(params?: AccountGetAllUsersForOrganization$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return accountGetAllUsersForOrganization(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `accountGetAllUsersForOrganization$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  accountGetAllUsersForOrganization(params?: AccountGetAllUsersForOrganization$Params, context?: HttpContext): Observable<Blob> {
    return this.accountGetAllUsersForOrganization$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `accountMakeUsersNotOrgAdminForOrganization()` */
  static readonly AccountMakeUsersNotOrgAdminForOrganizationPath = '/api/Account/MakeUsersNotOrgAdminForOrganization';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountMakeUsersNotOrgAdminForOrganization()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  accountMakeUsersNotOrgAdminForOrganization$Response(params?: AccountMakeUsersNotOrgAdminForOrganization$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return accountMakeUsersNotOrgAdminForOrganization(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `accountMakeUsersNotOrgAdminForOrganization$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  accountMakeUsersNotOrgAdminForOrganization(params?: AccountMakeUsersNotOrgAdminForOrganization$Params, context?: HttpContext): Observable<Blob> {
    return this.accountMakeUsersNotOrgAdminForOrganization$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `accountMakeUsersOrgAdminForOrganization()` */
  static readonly AccountMakeUsersOrgAdminForOrganizationPath = '/api/Account/MakeUsersOrgAdminForOrganization';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountMakeUsersOrgAdminForOrganization()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  accountMakeUsersOrgAdminForOrganization$Response(params?: AccountMakeUsersOrgAdminForOrganization$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return accountMakeUsersOrgAdminForOrganization(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `accountMakeUsersOrgAdminForOrganization$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  accountMakeUsersOrgAdminForOrganization(params?: AccountMakeUsersOrgAdminForOrganization$Params, context?: HttpContext): Observable<Blob> {
    return this.accountMakeUsersOrgAdminForOrganization$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `accountBlockUsersForOrganization()` */
  static readonly AccountBlockUsersForOrganizationPath = '/api/Account/BlockUsersForOrganization';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountBlockUsersForOrganization()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  accountBlockUsersForOrganization$Response(params?: AccountBlockUsersForOrganization$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return accountBlockUsersForOrganization(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `accountBlockUsersForOrganization$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  accountBlockUsersForOrganization(params?: AccountBlockUsersForOrganization$Params, context?: HttpContext): Observable<Blob> {
    return this.accountBlockUsersForOrganization$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `accountUnBlockUsersForOrganization()` */
  static readonly AccountUnBlockUsersForOrganizationPath = '/api/Account/UnBlockUsersForOrganization';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountUnBlockUsersForOrganization()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  accountUnBlockUsersForOrganization$Response(params?: AccountUnBlockUsersForOrganization$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return accountUnBlockUsersForOrganization(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `accountUnBlockUsersForOrganization$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  accountUnBlockUsersForOrganization(params?: AccountUnBlockUsersForOrganization$Params, context?: HttpContext): Observable<Blob> {
    return this.accountUnBlockUsersForOrganization$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `accountGetCertificateInfoFromSignature()` */
  static readonly AccountGetCertificateInfoFromSignaturePath = '/api/Account/GetCertificateInfoFromSignature';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountGetCertificateInfoFromSignature()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  accountGetCertificateInfoFromSignature$Response(params?: AccountGetCertificateInfoFromSignature$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return accountGetCertificateInfoFromSignature(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `accountGetCertificateInfoFromSignature$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  accountGetCertificateInfoFromSignature(params?: AccountGetCertificateInfoFromSignature$Params, context?: HttpContext): Observable<Blob> {
    return this.accountGetCertificateInfoFromSignature$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

}
