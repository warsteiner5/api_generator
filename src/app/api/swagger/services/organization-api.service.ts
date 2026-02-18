/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { organizationAcceptPartnerRelation } from '../fn/organization/organization-accept-partner-relation';
import { OrganizationAcceptPartnerRelation$Params } from '../fn/organization/organization-accept-partner-relation';
import { organizationAddSubordinateInstitution } from '../fn/organization/organization-add-subordinate-institution';
import { OrganizationAddSubordinateInstitution$Params } from '../fn/organization/organization-add-subordinate-institution';
import { organizationCheckAuthorizationPayment } from '../fn/organization/organization-check-authorization-payment';
import { OrganizationCheckAuthorizationPayment$Params } from '../fn/organization/organization-check-authorization-payment';
import { organizationCheckCurrentUserEds } from '../fn/organization/organization-check-current-user-eds';
import { OrganizationCheckCurrentUserEds$Params } from '../fn/organization/organization-check-current-user-eds';
import { organizationCheckOrgHasEtpAgreement } from '../fn/organization/organization-check-org-has-etp-agreement';
import { OrganizationCheckOrgHasEtpAgreement$Params } from '../fn/organization/organization-check-org-has-etp-agreement';
import { organizationDeleteSubordinateInstitution } from '../fn/organization/organization-delete-subordinate-institution';
import { OrganizationDeleteSubordinateInstitution$Params } from '../fn/organization/organization-delete-subordinate-institution';
import { organizationGenerateDeclarationOfAccession } from '../fn/organization/organization-generate-declaration-of-accession';
import { OrganizationGenerateDeclarationOfAccession$Params } from '../fn/organization/organization-generate-declaration-of-accession';
import { organizationGetAuthorizationPaymentDocumentLink } from '../fn/organization/organization-get-authorization-payment-document-link';
import { OrganizationGetAuthorizationPaymentDocumentLink$Params } from '../fn/organization/organization-get-authorization-payment-document-link';
import { organizationGetDeclarationOfAccessionForSign } from '../fn/organization/organization-get-declaration-of-accession-for-sign';
import { OrganizationGetDeclarationOfAccessionForSign$Params } from '../fn/organization/organization-get-declaration-of-accession-for-sign';
import { organizationGetOrganizationInfo } from '../fn/organization/organization-get-organization-info';
import { OrganizationGetOrganizationInfo$Params } from '../fn/organization/organization-get-organization-info';
import { organizationGetOrganizationSettingsDto } from '../fn/organization/organization-get-organization-settings-dto';
import { OrganizationGetOrganizationSettingsDto$Params } from '../fn/organization/organization-get-organization-settings-dto';
import { organizationGetSettings } from '../fn/organization/organization-get-settings';
import { OrganizationGetSettings$Params } from '../fn/organization/organization-get-settings';
import { organizationGetSubordinateInstitutions } from '../fn/organization/organization-get-subordinate-institutions';
import { OrganizationGetSubordinateInstitutions$Params } from '../fn/organization/organization-get-subordinate-institutions';
import { organizationIsMsp } from '../fn/organization/organization-is-msp';
import { OrganizationIsMsp$Params } from '../fn/organization/organization-is-msp';
import { organizationNeedEds } from '../fn/organization/organization-need-eds';
import { OrganizationNeedEds$Params } from '../fn/organization/organization-need-eds';
import { organizationRefusePartnerRelation } from '../fn/organization/organization-refuse-partner-relation';
import { OrganizationRefusePartnerRelation$Params } from '../fn/organization/organization-refuse-partner-relation';
import { organizationRequestSubordinateInstitution } from '../fn/organization/organization-request-subordinate-institution';
import { OrganizationRequestSubordinateInstitution$Params } from '../fn/organization/organization-request-subordinate-institution';
import { organizationSaveOrganizationInfo } from '../fn/organization/organization-save-organization-info';
import { OrganizationSaveOrganizationInfo$Params } from '../fn/organization/organization-save-organization-info';
import { organizationSignAndAgreeDeclarationOfAccession } from '../fn/organization/organization-sign-and-agree-declaration-of-accession';
import { OrganizationSignAndAgreeDeclarationOfAccession$Params } from '../fn/organization/organization-sign-and-agree-declaration-of-accession';
import { organizationUpdateSettings } from '../fn/organization/organization-update-settings';
import { OrganizationUpdateSettings$Params } from '../fn/organization/organization-update-settings';

@Injectable({ providedIn: 'root' })
export class OrganizationApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `organizationGetOrganizationInfo()` */
  static readonly OrganizationGetOrganizationInfoPath = '/api/Organization/GetOrganizationInfo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `organizationGetOrganizationInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  organizationGetOrganizationInfo$Response(params?: OrganizationGetOrganizationInfo$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return organizationGetOrganizationInfo(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `organizationGetOrganizationInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  organizationGetOrganizationInfo(params?: OrganizationGetOrganizationInfo$Params, context?: HttpContext): Observable<Blob> {
    return this.organizationGetOrganizationInfo$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `organizationIsMsp()` */
  static readonly OrganizationIsMspPath = '/api/Organization/{id}/IsMsp';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `organizationIsMsp()` instead.
   *
   * This method doesn't expect any request body.
   */
  organizationIsMsp$Response(params: OrganizationIsMsp$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return organizationIsMsp(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `organizationIsMsp$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  organizationIsMsp(params: OrganizationIsMsp$Params, context?: HttpContext): Observable<Blob> {
    return this.organizationIsMsp$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `organizationNeedEds()` */
  static readonly OrganizationNeedEdsPath = '/api/Organization/NeedEds';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `organizationNeedEds()` instead.
   *
   * This method doesn't expect any request body.
   */
  organizationNeedEds$Response(params?: OrganizationNeedEds$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return organizationNeedEds(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `organizationNeedEds$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  organizationNeedEds(params?: OrganizationNeedEds$Params, context?: HttpContext): Observable<Blob> {
    return this.organizationNeedEds$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `organizationGetSubordinateInstitutions()` */
  static readonly OrganizationGetSubordinateInstitutionsPath = '/api/Organization/GetSubordinateInstitutions';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `organizationGetSubordinateInstitutions()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  organizationGetSubordinateInstitutions$Response(params?: OrganizationGetSubordinateInstitutions$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return organizationGetSubordinateInstitutions(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `organizationGetSubordinateInstitutions$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  organizationGetSubordinateInstitutions(params?: OrganizationGetSubordinateInstitutions$Params, context?: HttpContext): Observable<Blob> {
    return this.organizationGetSubordinateInstitutions$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `organizationAddSubordinateInstitution()` */
  static readonly OrganizationAddSubordinateInstitutionPath = '/api/Organization/AddSubordinateInstitution';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `organizationAddSubordinateInstitution()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  organizationAddSubordinateInstitution$Response(params?: OrganizationAddSubordinateInstitution$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return organizationAddSubordinateInstitution(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `organizationAddSubordinateInstitution$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  organizationAddSubordinateInstitution(params?: OrganizationAddSubordinateInstitution$Params, context?: HttpContext): Observable<Blob> {
    return this.organizationAddSubordinateInstitution$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `organizationDeleteSubordinateInstitution()` */
  static readonly OrganizationDeleteSubordinateInstitutionPath = '/api/Organization/DeleteSubordinateInstitution';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `organizationDeleteSubordinateInstitution()` instead.
   *
   * This method doesn't expect any request body.
   */
  organizationDeleteSubordinateInstitution$Response(params: OrganizationDeleteSubordinateInstitution$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return organizationDeleteSubordinateInstitution(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `organizationDeleteSubordinateInstitution$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  organizationDeleteSubordinateInstitution(params: OrganizationDeleteSubordinateInstitution$Params, context?: HttpContext): Observable<Blob> {
    return this.organizationDeleteSubordinateInstitution$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `organizationRequestSubordinateInstitution()` */
  static readonly OrganizationRequestSubordinateInstitutionPath = '/api/Organization/RequestSubordinateInstitution';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `organizationRequestSubordinateInstitution()` instead.
   *
   * This method doesn't expect any request body.
   */
  organizationRequestSubordinateInstitution$Response(params: OrganizationRequestSubordinateInstitution$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return organizationRequestSubordinateInstitution(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `organizationRequestSubordinateInstitution$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  organizationRequestSubordinateInstitution(params: OrganizationRequestSubordinateInstitution$Params, context?: HttpContext): Observable<Blob> {
    return this.organizationRequestSubordinateInstitution$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `organizationAcceptPartnerRelation()` */
  static readonly OrganizationAcceptPartnerRelationPath = '/api/Organization/AcceptPartnerRelation';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `organizationAcceptPartnerRelation()` instead.
   *
   * This method doesn't expect any request body.
   */
  organizationAcceptPartnerRelation$Response(params: OrganizationAcceptPartnerRelation$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return organizationAcceptPartnerRelation(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `organizationAcceptPartnerRelation$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  organizationAcceptPartnerRelation(params: OrganizationAcceptPartnerRelation$Params, context?: HttpContext): Observable<Blob> {
    return this.organizationAcceptPartnerRelation$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `organizationRefusePartnerRelation()` */
  static readonly OrganizationRefusePartnerRelationPath = '/api/Organization/RefusePartnerRelation';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `organizationRefusePartnerRelation()` instead.
   *
   * This method doesn't expect any request body.
   */
  organizationRefusePartnerRelation$Response(params: OrganizationRefusePartnerRelation$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return organizationRefusePartnerRelation(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `organizationRefusePartnerRelation$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  organizationRefusePartnerRelation(params: OrganizationRefusePartnerRelation$Params, context?: HttpContext): Observable<Blob> {
    return this.organizationRefusePartnerRelation$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `organizationSaveOrganizationInfo()` */
  static readonly OrganizationSaveOrganizationInfoPath = '/api/Organization/SaveOrganizationInfo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `organizationSaveOrganizationInfo()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  organizationSaveOrganizationInfo$Response(params?: OrganizationSaveOrganizationInfo$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return organizationSaveOrganizationInfo(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `organizationSaveOrganizationInfo$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  organizationSaveOrganizationInfo(params?: OrganizationSaveOrganizationInfo$Params, context?: HttpContext): Observable<Blob> {
    return this.organizationSaveOrganizationInfo$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `organizationCheckCurrentUserEds()` */
  static readonly OrganizationCheckCurrentUserEdsPath = '/api/Organization/CheckCurrentUserEds';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `organizationCheckCurrentUserEds()` instead.
   *
   * This method doesn't expect any request body.
   */
  organizationCheckCurrentUserEds$Response(params?: OrganizationCheckCurrentUserEds$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return organizationCheckCurrentUserEds(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `organizationCheckCurrentUserEds$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  organizationCheckCurrentUserEds(params?: OrganizationCheckCurrentUserEds$Params, context?: HttpContext): Observable<Blob> {
    return this.organizationCheckCurrentUserEds$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `organizationCheckAuthorizationPayment()` */
  static readonly OrganizationCheckAuthorizationPaymentPath = '/api/Organization/CheckAuthorizationPayment';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `organizationCheckAuthorizationPayment()` instead.
   *
   * This method doesn't expect any request body.
   */
  organizationCheckAuthorizationPayment$Response(params?: OrganizationCheckAuthorizationPayment$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return organizationCheckAuthorizationPayment(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `organizationCheckAuthorizationPayment$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  organizationCheckAuthorizationPayment(params?: OrganizationCheckAuthorizationPayment$Params, context?: HttpContext): Observable<Blob> {
    return this.organizationCheckAuthorizationPayment$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `organizationGetAuthorizationPaymentDocumentLink()` */
  static readonly OrganizationGetAuthorizationPaymentDocumentLinkPath = '/api/Organization/GetAuthorizationPaymentDocumentLink';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `organizationGetAuthorizationPaymentDocumentLink()` instead.
   *
   * This method doesn't expect any request body.
   */
  organizationGetAuthorizationPaymentDocumentLink$Response(params?: OrganizationGetAuthorizationPaymentDocumentLink$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return organizationGetAuthorizationPaymentDocumentLink(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `organizationGetAuthorizationPaymentDocumentLink$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  organizationGetAuthorizationPaymentDocumentLink(params?: OrganizationGetAuthorizationPaymentDocumentLink$Params, context?: HttpContext): Observable<Blob> {
    return this.organizationGetAuthorizationPaymentDocumentLink$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `organizationCheckOrgHasEtpAgreement()` */
  static readonly OrganizationCheckOrgHasEtpAgreementPath = '/api/Organization/CheckOrgHasEtpAgreement';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `organizationCheckOrgHasEtpAgreement()` instead.
   *
   * This method doesn't expect any request body.
   */
  organizationCheckOrgHasEtpAgreement$Response(params?: OrganizationCheckOrgHasEtpAgreement$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return organizationCheckOrgHasEtpAgreement(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `organizationCheckOrgHasEtpAgreement$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  organizationCheckOrgHasEtpAgreement(params?: OrganizationCheckOrgHasEtpAgreement$Params, context?: HttpContext): Observable<Blob> {
    return this.organizationCheckOrgHasEtpAgreement$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `organizationGenerateDeclarationOfAccession()` */
  static readonly OrganizationGenerateDeclarationOfAccessionPath = '/api/Organization/GenerateDeclarationOfAccession';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `organizationGenerateDeclarationOfAccession()` instead.
   *
   * This method doesn't expect any request body.
   */
  organizationGenerateDeclarationOfAccession$Response(params?: OrganizationGenerateDeclarationOfAccession$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return organizationGenerateDeclarationOfAccession(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `organizationGenerateDeclarationOfAccession$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  organizationGenerateDeclarationOfAccession(params?: OrganizationGenerateDeclarationOfAccession$Params, context?: HttpContext): Observable<Blob> {
    return this.organizationGenerateDeclarationOfAccession$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `organizationGetDeclarationOfAccessionForSign()` */
  static readonly OrganizationGetDeclarationOfAccessionForSignPath = '/api/Organization/GetDeclarationOfAccessionForSign';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `organizationGetDeclarationOfAccessionForSign()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  organizationGetDeclarationOfAccessionForSign$Response(params?: OrganizationGetDeclarationOfAccessionForSign$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return organizationGetDeclarationOfAccessionForSign(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `organizationGetDeclarationOfAccessionForSign$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  organizationGetDeclarationOfAccessionForSign(params?: OrganizationGetDeclarationOfAccessionForSign$Params, context?: HttpContext): Observable<Blob> {
    return this.organizationGetDeclarationOfAccessionForSign$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `organizationSignAndAgreeDeclarationOfAccession()` */
  static readonly OrganizationSignAndAgreeDeclarationOfAccessionPath = '/api/Organization/SignAndAgreeDeclarationOfAccession';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `organizationSignAndAgreeDeclarationOfAccession()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  organizationSignAndAgreeDeclarationOfAccession$Response(params?: OrganizationSignAndAgreeDeclarationOfAccession$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return organizationSignAndAgreeDeclarationOfAccession(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `organizationSignAndAgreeDeclarationOfAccession$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  organizationSignAndAgreeDeclarationOfAccession(params?: OrganizationSignAndAgreeDeclarationOfAccession$Params, context?: HttpContext): Observable<Blob> {
    return this.organizationSignAndAgreeDeclarationOfAccession$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `organizationGetSettings()` */
  static readonly OrganizationGetSettingsPath = '/api/Organization/GetSettings';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `organizationGetSettings()` instead.
   *
   * This method doesn't expect any request body.
   */
  organizationGetSettings$Response(params?: OrganizationGetSettings$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return organizationGetSettings(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `organizationGetSettings$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  organizationGetSettings(params?: OrganizationGetSettings$Params, context?: HttpContext): Observable<Blob> {
    return this.organizationGetSettings$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `organizationUpdateSettings()` */
  static readonly OrganizationUpdateSettingsPath = '/api/Organization/UpdateSettings';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `organizationUpdateSettings()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  organizationUpdateSettings$Response(params?: OrganizationUpdateSettings$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return organizationUpdateSettings(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `organizationUpdateSettings$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  organizationUpdateSettings(params?: OrganizationUpdateSettings$Params, context?: HttpContext): Observable<Blob> {
    return this.organizationUpdateSettings$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `organizationGetOrganizationSettingsDto()` */
  static readonly OrganizationGetOrganizationSettingsDtoPath = '/api/Organization/GetOrganizationSettingsDto';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `organizationGetOrganizationSettingsDto()` instead.
   *
   * This method doesn't expect any request body.
   */
  organizationGetOrganizationSettingsDto$Response(params: OrganizationGetOrganizationSettingsDto$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return organizationGetOrganizationSettingsDto(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `organizationGetOrganizationSettingsDto$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  organizationGetOrganizationSettingsDto(params: OrganizationGetOrganizationSettingsDto$Params, context?: HttpContext): Observable<Blob> {
    return this.organizationGetOrganizationSettingsDto$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

}
