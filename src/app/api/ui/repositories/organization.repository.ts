import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { OrganizationAcceptPartnerRelationParams, organizationAcceptPartnerRelationParamsAdapter } from './params/organization-accept-partner-relation.params';
import { OrganizationAddSubordinateInstitutionParams, organizationAddSubordinateInstitutionParamsAdapter } from './params/organization-add-subordinate-institution.params';
import { OrganizationApiService } from '../../swagger/services/organization-api.service';
import { OrganizationCheckAuthorizationPaymentParams, organizationCheckAuthorizationPaymentParamsAdapter } from './params/organization-check-authorization-payment.params';
import { OrganizationCheckCurrentUserEdsParams, organizationCheckCurrentUserEdsParamsAdapter } from './params/organization-check-current-user-eds.params';
import { OrganizationCheckOrgHasEtpAgreementParams, organizationCheckOrgHasEtpAgreementParamsAdapter } from './params/organization-check-org-has-etp-agreement.params';
import { OrganizationDeleteSubordinateInstitutionParams, organizationDeleteSubordinateInstitutionParamsAdapter } from './params/organization-delete-subordinate-institution.params';
import { OrganizationGenerateDeclarationOfAccessionParams, organizationGenerateDeclarationOfAccessionParamsAdapter } from './params/organization-generate-declaration-of-accession.params';
import { OrganizationGetAuthorizationPaymentDocumentLinkParams, organizationGetAuthorizationPaymentDocumentLinkParamsAdapter } from './params/organization-get-authorization-payment-document-link.params';
import { OrganizationGetDeclarationOfAccessionForSignParams, organizationGetDeclarationOfAccessionForSignParamsAdapter } from './params/organization-get-declaration-of-accession-for-sign.params';
import { OrganizationGetOrganizationInfoParams, organizationGetOrganizationInfoParamsAdapter } from './params/organization-get-organization-info.params';
import { OrganizationGetOrganizationSettingsDtoParams, organizationGetOrganizationSettingsDtoParamsAdapter } from './params/organization-get-organization-settings-dto.params';
import { OrganizationGetSettingsParams, organizationGetSettingsParamsAdapter } from './params/organization-get-settings.params';
import { OrganizationGetSubordinateInstitutionsParams, organizationGetSubordinateInstitutionsParamsAdapter } from './params/organization-get-subordinate-institutions.params';
import { OrganizationIsMspParams, organizationIsMspParamsAdapter } from './params/organization-is-msp.params';
import { OrganizationNeedEdsParams, organizationNeedEdsParamsAdapter } from './params/organization-need-eds.params';
import { OrganizationRefusePartnerRelationParams, organizationRefusePartnerRelationParamsAdapter } from './params/organization-refuse-partner-relation.params';
import { OrganizationRequestSubordinateInstitutionParams, organizationRequestSubordinateInstitutionParamsAdapter } from './params/organization-request-subordinate-institution.params';
import { OrganizationSaveOrganizationInfoParams, organizationSaveOrganizationInfoParamsAdapter } from './params/organization-save-organization-info.params';
import { OrganizationSignAndAgreeDeclarationOfAccessionParams, organizationSignAndAgreeDeclarationOfAccessionParamsAdapter } from './params/organization-sign-and-agree-declaration-of-accession.params';
import { OrganizationUpdateSettingsParams, organizationUpdateSettingsParamsAdapter } from './params/organization-update-settings.params';

@Injectable({ providedIn: 'root' })
export class OrganizationRepository {
  private readonly _api = inject(OrganizationApiService);

  organizationAcceptPartnerRelation(params: OrganizationAcceptPartnerRelationParams): Observable<Blob> {
    return this._api.organizationAcceptPartnerRelation(organizationAcceptPartnerRelationParamsAdapter.adapt(params));
  }

  organizationAddSubordinateInstitution(params?: OrganizationAddSubordinateInstitutionParams): Observable<Blob> {
    return this._api.organizationAddSubordinateInstitution(organizationAddSubordinateInstitutionParamsAdapter.adapt(params));
  }

  organizationCheckAuthorizationPayment(params?: OrganizationCheckAuthorizationPaymentParams): Observable<Blob> {
    return this._api.organizationCheckAuthorizationPayment(organizationCheckAuthorizationPaymentParamsAdapter.adapt(params));
  }

  organizationCheckCurrentUserEds(params?: OrganizationCheckCurrentUserEdsParams): Observable<Blob> {
    return this._api.organizationCheckCurrentUserEds(organizationCheckCurrentUserEdsParamsAdapter.adapt(params));
  }

  organizationCheckOrgHasEtpAgreement(params?: OrganizationCheckOrgHasEtpAgreementParams): Observable<Blob> {
    return this._api.organizationCheckOrgHasEtpAgreement(organizationCheckOrgHasEtpAgreementParamsAdapter.adapt(params));
  }

  organizationDeleteSubordinateInstitution(params: OrganizationDeleteSubordinateInstitutionParams): Observable<Blob> {
    return this._api.organizationDeleteSubordinateInstitution(organizationDeleteSubordinateInstitutionParamsAdapter.adapt(params));
  }

  organizationGenerateDeclarationOfAccession(params?: OrganizationGenerateDeclarationOfAccessionParams): Observable<Blob> {
    return this._api.organizationGenerateDeclarationOfAccession(organizationGenerateDeclarationOfAccessionParamsAdapter.adapt(params));
  }

  organizationGetAuthorizationPaymentDocumentLink(params?: OrganizationGetAuthorizationPaymentDocumentLinkParams): Observable<Blob> {
    return this._api.organizationGetAuthorizationPaymentDocumentLink(organizationGetAuthorizationPaymentDocumentLinkParamsAdapter.adapt(params));
  }

  organizationGetDeclarationOfAccessionForSign(params?: OrganizationGetDeclarationOfAccessionForSignParams): Observable<Blob> {
    return this._api.organizationGetDeclarationOfAccessionForSign(organizationGetDeclarationOfAccessionForSignParamsAdapter.adapt(params));
  }

  organizationGetOrganizationInfo(params?: OrganizationGetOrganizationInfoParams): Observable<Blob> {
    return this._api.organizationGetOrganizationInfo(organizationGetOrganizationInfoParamsAdapter.adapt(params));
  }

  organizationGetOrganizationSettingsDto(params: OrganizationGetOrganizationSettingsDtoParams): Observable<Blob> {
    return this._api.organizationGetOrganizationSettingsDto(organizationGetOrganizationSettingsDtoParamsAdapter.adapt(params));
  }

  organizationGetSettings(params?: OrganizationGetSettingsParams): Observable<Blob> {
    return this._api.organizationGetSettings(organizationGetSettingsParamsAdapter.adapt(params));
  }

  organizationGetSubordinateInstitutions(params?: OrganizationGetSubordinateInstitutionsParams): Observable<Blob> {
    return this._api.organizationGetSubordinateInstitutions(organizationGetSubordinateInstitutionsParamsAdapter.adapt(params));
  }

  organizationIsMsp(params: OrganizationIsMspParams): Observable<Blob> {
    return this._api.organizationIsMsp(organizationIsMspParamsAdapter.adapt(params));
  }

  organizationNeedEds(params?: OrganizationNeedEdsParams): Observable<Blob> {
    return this._api.organizationNeedEds(organizationNeedEdsParamsAdapter.adapt(params));
  }

  organizationRefusePartnerRelation(params: OrganizationRefusePartnerRelationParams): Observable<Blob> {
    return this._api.organizationRefusePartnerRelation(organizationRefusePartnerRelationParamsAdapter.adapt(params));
  }

  organizationRequestSubordinateInstitution(params: OrganizationRequestSubordinateInstitutionParams): Observable<Blob> {
    return this._api.organizationRequestSubordinateInstitution(organizationRequestSubordinateInstitutionParamsAdapter.adapt(params));
  }

  organizationSaveOrganizationInfo(params?: OrganizationSaveOrganizationInfoParams): Observable<Blob> {
    return this._api.organizationSaveOrganizationInfo(organizationSaveOrganizationInfoParamsAdapter.adapt(params));
  }

  organizationSignAndAgreeDeclarationOfAccession(params?: OrganizationSignAndAgreeDeclarationOfAccessionParams): Observable<Blob> {
    return this._api.organizationSignAndAgreeDeclarationOfAccession(organizationSignAndAgreeDeclarationOfAccessionParamsAdapter.adapt(params));
  }

  organizationUpdateSettings(params?: OrganizationUpdateSettingsParams): Observable<Blob> {
    return this._api.organizationUpdateSettings(organizationUpdateSettingsParamsAdapter.adapt(params));
  }

}
