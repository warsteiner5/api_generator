import { AccountApiService } from '../../swagger/services/account-api.service';
import { AccountBlockUsersForOrganizationParams, accountBlockUsersForOrganizationAdapter } from './params/account-block-users-for-organization.params';
import { AccountCheckOrganizationExistsParams, accountCheckOrganizationExistsAdapter } from './params/account-check-organization-exists.params';
import { AccountGetAllUsersForOrganizationParams, accountGetAllUsersForOrganizationAdapter } from './params/account-get-all-users-for-organization.params';
import { AccountGetCertificateInfoFromSignatureParams, accountGetCertificateInfoFromSignatureAdapter } from './params/account-get-certificate-info-from-signature.params';
import { AccountGetExternalLoginParams, accountGetExternalLoginAdapter } from './params/account-get-external-login.params';
import { AccountGetExternalLoginsParams, accountGetExternalLoginsAdapter } from './params/account-get-external-logins.params';
import { AccountGetExternalUserInfoParams, accountGetExternalUserInfoAdapter } from './params/account-get-external-user-info.params';
import { AccountGetManageInfoParams, accountGetManageInfoAdapter } from './params/account-get-manage-info.params';
import { AccountGetUserRolesParams, accountGetUserRolesAdapter } from './params/account-get-user-roles.params';
import { AccountLogoutParams, accountLogoutAdapter } from './params/account-logout.params';
import { AccountMakeOrganizationDocumentActualParams, accountMakeOrganizationDocumentActualAdapter } from './params/account-make-organization-document-actual.params';
import { AccountMakeOrganizationDocumentNotActualParams, accountMakeOrganizationDocumentNotActualAdapter } from './params/account-make-organization-document-not-actual.params';
import { AccountMakeUsersNotOrgAdminForOrganizationParams, accountMakeUsersNotOrgAdminForOrganizationAdapter } from './params/account-make-users-not-org-admin-for-organization.params';
import { AccountMakeUsersOrgAdminForOrganizationParams, accountMakeUsersOrgAdminForOrganizationAdapter } from './params/account-make-users-org-admin-for-organization.params';
import { AccountPassportAccountsViewParams, accountPassportAccountsViewAdapter } from './params/account-passport-accounts-view.params';
import { AccountRedirectByTenantIdParams, accountRedirectByTenantIdAdapter } from './params/account-redirect-by-tenant-id.params';
import { AccountUnBlockUsersForOrganizationParams, accountUnBlockUsersForOrganizationAdapter } from './params/account-un-block-users-for-organization.params';
import { ExternalLoginViewModelAlt } from '../models/external-login-view-model-alt.interface';
import { externalLoginViewModelAltAdapter } from '../adapters/models/external-login-view-model-alt.adapter';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AccountRepository {
  private readonly _api = inject(AccountApiService);

  accountBlockUsersForOrganization(params?: AccountBlockUsersForOrganizationParams): Observable<Blob> {
    return this._api.accountBlockUsersForOrganization(accountBlockUsersForOrganizationAdapter(params));
  }

  accountCheckOrganizationExists(params?: AccountCheckOrganizationExistsParams): Observable<Blob> {
    return this._api.accountCheckOrganizationExists(accountCheckOrganizationExistsAdapter(params));
  }

  accountGetAllUsersForOrganization(params?: AccountGetAllUsersForOrganizationParams): Observable<Blob> {
    return this._api.accountGetAllUsersForOrganization(accountGetAllUsersForOrganizationAdapter(params));
  }

  accountGetCertificateInfoFromSignature(params?: AccountGetCertificateInfoFromSignatureParams): Observable<Blob> {
    return this._api.accountGetCertificateInfoFromSignature(accountGetCertificateInfoFromSignatureAdapter(params));
  }

  accountGetExternalLogin(params: AccountGetExternalLoginParams): Observable<Blob> {
    return this._api.accountGetExternalLogin(accountGetExternalLoginAdapter(params));
  }

  accountGetExternalLogins(params: AccountGetExternalLoginsParams): Observable<ExternalLoginViewModelAlt[]> {
    return this._api.accountGetExternalLogins(accountGetExternalLoginsAdapter(params)).pipe(
      map((res) => (res ?? []).map((item) => externalLoginViewModelAltAdapter(item)))
    );
  }

  accountGetExternalUserInfo(params?: AccountGetExternalUserInfoParams): Observable<Blob> {
    return this._api.accountGetExternalUserInfo(accountGetExternalUserInfoAdapter(params));
  }

  accountGetManageInfo(params?: AccountGetManageInfoParams): Observable<Blob> {
    return this._api.accountGetManageInfo(accountGetManageInfoAdapter(params));
  }

  accountGetUserRoles(params?: AccountGetUserRolesParams): Observable<Blob> {
    return this._api.accountGetUserRoles(accountGetUserRolesAdapter(params));
  }

  accountLogout(params?: AccountLogoutParams): Observable<Blob> {
    return this._api.accountLogout(accountLogoutAdapter(params));
  }

  accountMakeOrganizationDocumentActual(params?: AccountMakeOrganizationDocumentActualParams): Observable<Blob> {
    return this._api.accountMakeOrganizationDocumentActual(accountMakeOrganizationDocumentActualAdapter(params));
  }

  accountMakeOrganizationDocumentNotActual(params?: AccountMakeOrganizationDocumentNotActualParams): Observable<Blob> {
    return this._api.accountMakeOrganizationDocumentNotActual(accountMakeOrganizationDocumentNotActualAdapter(params));
  }

  accountMakeUsersNotOrgAdminForOrganization(params?: AccountMakeUsersNotOrgAdminForOrganizationParams): Observable<Blob> {
    return this._api.accountMakeUsersNotOrgAdminForOrganization(accountMakeUsersNotOrgAdminForOrganizationAdapter(params));
  }

  accountMakeUsersOrgAdminForOrganization(params?: AccountMakeUsersOrgAdminForOrganizationParams): Observable<Blob> {
    return this._api.accountMakeUsersOrgAdminForOrganization(accountMakeUsersOrgAdminForOrganizationAdapter(params));
  }

  accountPassportAccountsView(params: AccountPassportAccountsViewParams): Observable<Blob> {
    return this._api.accountPassportAccountsView(accountPassportAccountsViewAdapter(params));
  }

  accountRedirectByTenantId(params: AccountRedirectByTenantIdParams): Observable<Blob> {
    return this._api.accountRedirectByTenantId(accountRedirectByTenantIdAdapter(params));
  }

  accountUnBlockUsersForOrganization(params?: AccountUnBlockUsersForOrganizationParams): Observable<Blob> {
    return this._api.accountUnBlockUsersForOrganization(accountUnBlockUsersForOrganizationAdapter(params));
  }

}
