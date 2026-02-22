import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { OrganizationAcceptPartnerRelationParams, organizationAcceptPartnerRelationAdapter } from './params/organization-accept-partner-relation.params';
import { OrganizationAddSubordinateInstitutionParams, organizationAddSubordinateInstitutionAdapter } from './params/organization-add-subordinate-institution.params';
import { OrganizationApiService } from '../../swagger/services/organization-api.service';
import { OrganizationCheckAuthorizationPaymentParams, organizationCheckAuthorizationPaymentAdapter } from './params/organization-check-authorization-payment.params';
import { OrganizationCheckCurrentUserEdsParams, organizationCheckCurrentUserEdsAdapter } from './params/organization-check-current-user-eds.params';
import { OrganizationCheckOrgHasEtpAgreementParams, organizationCheckOrgHasEtpAgreementAdapter } from './params/organization-check-org-has-etp-agreement.params';
import { OrganizationDeleteSubordinateInstitutionParams, organizationDeleteSubordinateInstitutionAdapter } from './params/organization-delete-subordinate-institution.params';
import { OrganizationGenerateDeclarationOfAccessionParams, organizationGenerateDeclarationOfAccessionAdapter } from './params/organization-generate-declaration-of-accession.params';
import { OrganizationGetAuthorizationPaymentDocumentLinkParams, organizationGetAuthorizationPaymentDocumentLinkAdapter } from './params/organization-get-authorization-payment-document-link.params';
import { OrganizationGetDeclarationOfAccessionForSignParams, organizationGetDeclarationOfAccessionForSignAdapter } from './params/organization-get-declaration-of-accession-for-sign.params';
import { OrganizationGetOrganizationInfoParams, organizationGetOrganizationInfoAdapter } from './params/organization-get-organization-info.params';
import { OrganizationGetOrganizationSettingsDtoParams, organizationGetOrganizationSettingsDtoAdapter } from './params/organization-get-organization-settings-dto.params';
import { OrganizationGetSettingsParams, organizationGetSettingsAdapter } from './params/organization-get-settings.params';
import { OrganizationGetSubordinateInstitutionsParams, organizationGetSubordinateInstitutionsAdapter } from './params/organization-get-subordinate-institutions.params';
import { OrganizationIsMspParams, organizationIsMspAdapter } from './params/organization-is-msp.params';
import { OrganizationNeedEdsParams, organizationNeedEdsAdapter } from './params/organization-need-eds.params';
import { OrganizationRefusePartnerRelationParams, organizationRefusePartnerRelationAdapter } from './params/organization-refuse-partner-relation.params';
import { OrganizationRequestSubordinateInstitutionParams, organizationRequestSubordinateInstitutionAdapter } from './params/organization-request-subordinate-institution.params';
import { OrganizationSaveOrganizationInfoParams, organizationSaveOrganizationInfoAdapter } from './params/organization-save-organization-info.params';
import { OrganizationSignAndAgreeDeclarationOfAccessionParams, organizationSignAndAgreeDeclarationOfAccessionAdapter } from './params/organization-sign-and-agree-declaration-of-accession.params';
import { OrganizationUpdateSettingsParams, organizationUpdateSettingsAdapter } from './params/organization-update-settings.params';

@Injectable({ providedIn: 'root' })
export class OrganizationRepository {
  private readonly _api = inject(OrganizationApiService);

  organizationAcceptPartnerRelation(params: OrganizationAcceptPartnerRelationParams): Observable<Blob> {
    return this._api.organizationAcceptPartnerRelation(organizationAcceptPartnerRelationAdapter(params));
  }

  organizationAddSubordinateInstitution(params?: OrganizationAddSubordinateInstitutionParams): Observable<Blob> {
    return this._api.organizationAddSubordinateInstitution(organizationAddSubordinateInstitutionAdapter(params));
  }

  organizationCheckAuthorizationPayment(params?: OrganizationCheckAuthorizationPaymentParams): Observable<Blob> {
    return this._api.organizationCheckAuthorizationPayment(organizationCheckAuthorizationPaymentAdapter(params));
  }

  organizationCheckCurrentUserEds(params?: OrganizationCheckCurrentUserEdsParams): Observable<Blob> {
    return this._api.organizationCheckCurrentUserEds(organizationCheckCurrentUserEdsAdapter(params));
  }

  organizationCheckOrgHasEtpAgreement(params?: OrganizationCheckOrgHasEtpAgreementParams): Observable<Blob> {
    return this._api.organizationCheckOrgHasEtpAgreement(organizationCheckOrgHasEtpAgreementAdapter(params));
  }

  organizationDeleteSubordinateInstitution(params: OrganizationDeleteSubordinateInstitutionParams): Observable<Blob> {
    return this._api.organizationDeleteSubordinateInstitution(organizationDeleteSubordinateInstitutionAdapter(params));
  }

  organizationGenerateDeclarationOfAccession(params?: OrganizationGenerateDeclarationOfAccessionParams): Observable<Blob> {
    return this._api.organizationGenerateDeclarationOfAccession(organizationGenerateDeclarationOfAccessionAdapter(params));
  }

  organizationGetAuthorizationPaymentDocumentLink(params?: OrganizationGetAuthorizationPaymentDocumentLinkParams): Observable<Blob> {
    return this._api.organizationGetAuthorizationPaymentDocumentLink(organizationGetAuthorizationPaymentDocumentLinkAdapter(params));
  }

  organizationGetDeclarationOfAccessionForSign(params?: OrganizationGetDeclarationOfAccessionForSignParams): Observable<Blob> {
    return this._api.organizationGetDeclarationOfAccessionForSign(organizationGetDeclarationOfAccessionForSignAdapter(params));
  }

  organizationGetOrganizationInfo(params?: OrganizationGetOrganizationInfoParams): Observable<Blob> {
    return this._api.organizationGetOrganizationInfo(organizationGetOrganizationInfoAdapter(params));
  }

  organizationGetOrganizationSettingsDto(params: OrganizationGetOrganizationSettingsDtoParams): Observable<Blob> {
    return this._api.organizationGetOrganizationSettingsDto(organizationGetOrganizationSettingsDtoAdapter(params));
  }

  organizationGetSettings(params?: OrganizationGetSettingsParams): Observable<Blob> {
    return this._api.organizationGetSettings(organizationGetSettingsAdapter(params));
  }

  organizationGetSubordinateInstitutions(params?: OrganizationGetSubordinateInstitutionsParams): Observable<Blob> {
    return this._api.organizationGetSubordinateInstitutions(organizationGetSubordinateInstitutionsAdapter(params));
  }

  organizationIsMsp(params: OrganizationIsMspParams): Observable<Blob> {
    return this._api.organizationIsMsp(organizationIsMspAdapter(params));
  }

  organizationNeedEds(params?: OrganizationNeedEdsParams): Observable<Blob> {
    return this._api.organizationNeedEds(organizationNeedEdsAdapter(params));
  }

  organizationRefusePartnerRelation(params: OrganizationRefusePartnerRelationParams): Observable<Blob> {
    return this._api.organizationRefusePartnerRelation(organizationRefusePartnerRelationAdapter(params));
  }

  organizationRequestSubordinateInstitution(params: OrganizationRequestSubordinateInstitutionParams): Observable<Blob> {
    return this._api.organizationRequestSubordinateInstitution(organizationRequestSubordinateInstitutionAdapter(params));
  }

  organizationSaveOrganizationInfo(params?: OrganizationSaveOrganizationInfoParams): Observable<Blob> {
    return this._api.organizationSaveOrganizationInfo(organizationSaveOrganizationInfoAdapter(params));
  }

  organizationSignAndAgreeDeclarationOfAccession(params?: OrganizationSignAndAgreeDeclarationOfAccessionParams): Observable<Blob> {
    return this._api.organizationSignAndAgreeDeclarationOfAccession(organizationSignAndAgreeDeclarationOfAccessionAdapter(params));
  }

  organizationUpdateSettings(params?: OrganizationUpdateSettingsParams): Observable<Blob> {
    return this._api.organizationUpdateSettings(organizationUpdateSettingsAdapter(params));
  }

}
