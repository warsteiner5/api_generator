import { AccountApiService } from '../../swagger/services/account-api.service';
import { AccountBlockUsersForOrganizationParams, accountBlockUsersForOrganizationParamsAdapter } from './params/account-block-users-for-organization.params';
import { AccountCheckOrganizationExistsParams, accountCheckOrganizationExistsParamsAdapter } from './params/account-check-organization-exists.params';
import { AccountGetAllUsersForOrganizationParams, accountGetAllUsersForOrganizationParamsAdapter } from './params/account-get-all-users-for-organization.params';
import { AccountGetCertificateInfoFromSignatureParams, accountGetCertificateInfoFromSignatureParamsAdapter } from './params/account-get-certificate-info-from-signature.params';
import { AccountGetExternalLoginParams, accountGetExternalLoginParamsAdapter } from './params/account-get-external-login.params';
import { AccountGetExternalLoginsParams, accountGetExternalLoginsParamsAdapter } from './params/account-get-external-logins.params';
import { AccountGetExternalUserInfoParams, accountGetExternalUserInfoParamsAdapter } from './params/account-get-external-user-info.params';
import { AccountGetManageInfoParams, accountGetManageInfoParamsAdapter } from './params/account-get-manage-info.params';
import { AccountGetUserRolesParams, accountGetUserRolesParamsAdapter } from './params/account-get-user-roles.params';
import { AccountLogoutParams, accountLogoutParamsAdapter } from './params/account-logout.params';
import { AccountMakeOrganizationDocumentActualParams, accountMakeOrganizationDocumentActualParamsAdapter } from './params/account-make-organization-document-actual.params';
import { AccountMakeOrganizationDocumentNotActualParams, accountMakeOrganizationDocumentNotActualParamsAdapter } from './params/account-make-organization-document-not-actual.params';
import { AccountMakeUsersNotOrgAdminForOrganizationParams, accountMakeUsersNotOrgAdminForOrganizationParamsAdapter } from './params/account-make-users-not-org-admin-for-organization.params';
import { AccountMakeUsersOrgAdminForOrganizationParams, accountMakeUsersOrgAdminForOrganizationParamsAdapter } from './params/account-make-users-org-admin-for-organization.params';
import { AccountPassportAccountsViewParams, accountPassportAccountsViewParamsAdapter } from './params/account-passport-accounts-view.params';
import { AccountRedirectByTenantIdParams, accountRedirectByTenantIdParamsAdapter } from './params/account-redirect-by-tenant-id.params';
import { AccountUnBlockUsersForOrganizationParams, accountUnBlockUsersForOrganizationParamsAdapter } from './params/account-un-block-users-for-organization.params';
import { adaptExternalLoginViewModelAltToUI } from '../adapters/toUI/external-login-view-model-alt.adapter';
import { ExternalLoginViewModelAlt } from '../models/external-login-view-model-alt.interface';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AccountRepository {
  private readonly _api = inject(AccountApiService);

  accountBlockUsersForOrganization(params?: AccountBlockUsersForOrganizationParams): Observable<Blob> {
    return this._api.accountBlockUsersForOrganization(accountBlockUsersForOrganizationParamsAdapter.adapt(params));
  }

  accountCheckOrganizationExists(params?: AccountCheckOrganizationExistsParams): Observable<Blob> {
    return this._api.accountCheckOrganizationExists(accountCheckOrganizationExistsParamsAdapter.adapt(params));
  }

  accountGetAllUsersForOrganization(params?: AccountGetAllUsersForOrganizationParams): Observable<Blob> {
    return this._api.accountGetAllUsersForOrganization(accountGetAllUsersForOrganizationParamsAdapter.adapt(params));
  }

  accountGetCertificateInfoFromSignature(params?: AccountGetCertificateInfoFromSignatureParams): Observable<Blob> {
    return this._api.accountGetCertificateInfoFromSignature(accountGetCertificateInfoFromSignatureParamsAdapter.adapt(params));
  }

  accountGetExternalLogin(params: AccountGetExternalLoginParams): Observable<Blob> {
    return this._api.accountGetExternalLogin(accountGetExternalLoginParamsAdapter.adapt(params));
  }

  accountGetExternalLogins(params: AccountGetExternalLoginsParams): Observable<ExternalLoginViewModelAlt[]> {
    return this._api.accountGetExternalLogins(accountGetExternalLoginsParamsAdapter.adapt(params)).pipe(
      map((res) => (res ?? []).map((item) => adaptExternalLoginViewModelAltToUI(item)))
    );
  }

  accountGetExternalUserInfo(params?: AccountGetExternalUserInfoParams): Observable<Blob> {
    return this._api.accountGetExternalUserInfo(accountGetExternalUserInfoParamsAdapter.adapt(params));
  }

  accountGetManageInfo(params?: AccountGetManageInfoParams): Observable<Blob> {
    return this._api.accountGetManageInfo(accountGetManageInfoParamsAdapter.adapt(params));
  }

  accountGetUserRoles(params?: AccountGetUserRolesParams): Observable<Blob> {
    return this._api.accountGetUserRoles(accountGetUserRolesParamsAdapter.adapt(params));
  }

  accountLogout(params?: AccountLogoutParams): Observable<Blob> {
    return this._api.accountLogout(accountLogoutParamsAdapter.adapt(params));
  }

  accountMakeOrganizationDocumentActual(params?: AccountMakeOrganizationDocumentActualParams): Observable<Blob> {
    return this._api.accountMakeOrganizationDocumentActual(accountMakeOrganizationDocumentActualParamsAdapter.adapt(params));
  }

  accountMakeOrganizationDocumentNotActual(params?: AccountMakeOrganizationDocumentNotActualParams): Observable<Blob> {
    return this._api.accountMakeOrganizationDocumentNotActual(accountMakeOrganizationDocumentNotActualParamsAdapter.adapt(params));
  }

  accountMakeUsersNotOrgAdminForOrganization(params?: AccountMakeUsersNotOrgAdminForOrganizationParams): Observable<Blob> {
    return this._api.accountMakeUsersNotOrgAdminForOrganization(accountMakeUsersNotOrgAdminForOrganizationParamsAdapter.adapt(params));
  }

  accountMakeUsersOrgAdminForOrganization(params?: AccountMakeUsersOrgAdminForOrganizationParams): Observable<Blob> {
    return this._api.accountMakeUsersOrgAdminForOrganization(accountMakeUsersOrgAdminForOrganizationParamsAdapter.adapt(params));
  }

  accountPassportAccountsView(params: AccountPassportAccountsViewParams): Observable<Blob> {
    return this._api.accountPassportAccountsView(accountPassportAccountsViewParamsAdapter.adapt(params));
  }

  accountRedirectByTenantId(params: AccountRedirectByTenantIdParams): Observable<Blob> {
    return this._api.accountRedirectByTenantId(accountRedirectByTenantIdParamsAdapter.adapt(params));
  }

  accountUnBlockUsersForOrganization(params?: AccountUnBlockUsersForOrganizationParams): Observable<Blob> {
    return this._api.accountUnBlockUsersForOrganization(accountUnBlockUsersForOrganizationParamsAdapter.adapt(params));
  }

}
