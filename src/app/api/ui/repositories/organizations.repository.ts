import { adaptAgreement2323ToUI } from '../adapters/toUI/agreement-2323.adapter';
import { adaptCertificateOrganizationToUI } from '../adapters/toUI/certificate-organization.adapter';
import { adaptCertificateViewModelToUI } from '../adapters/toUI/certificate-view-model.adapter';
import { adaptFileInfoForSignToUI } from '../adapters/toUI/file-info-for-sign.adapter';
import { adaptForeignOrganizationToUI } from '../adapters/toUI/foreign-organization.adapter';
import { adaptMarketCompositeOrganizationShortInfoToUI } from '../adapters/toUI/market-composite-organization-short-info.adapter';
import { adaptMarketEmployeeShortInfoAltToUI } from '../adapters/toUI/market-employee-short-info-alt.adapter';
import { adaptMarketOrganizationCommonInfoToUI } from '../adapters/toUI/market-organization-common-info.adapter';
import { adaptMarketOrganizationFullInfoToUI } from '../adapters/toUI/market-organization-full-info.adapter';
import { adaptMarketPartnerOrganizationToUI } from '../adapters/toUI/market-partner-organization.adapter';
import { adaptOrganizanizationFullCardToUI } from '../adapters/toUI/organizanization-full-card.adapter';
import { adaptOrganizationInfoToUI } from '../adapters/toUI/organization-info.adapter';
import { adaptOrganizationProfileDocumentToUI } from '../adapters/toUI/organization-profile-document.adapter';
import { adaptOrganizationWithAddressShortInfoToUI } from '../adapters/toUI/organization-with-address-short-info.adapter';
import { adaptPaginationResultOfForeignOrganizationToUI } from '../adapters/toUI/pagination-result-of-foreign-organization.adapter';
import { adaptPaginationResultOfOrganizationForAutocompleteToUI } from '../adapters/toUI/pagination-result-of-organization-for-autocomplete.adapter';
import { adaptUpdateOrganizationBaseInfoDataToSignAltToUI } from '../adapters/toUI/update-organization-base-info-data-to-sign-alt.adapter';
import { Agreement2323 } from '../models/agreement-2323.interface';
import { CertificateOrganization } from '../models/certificate-organization.interface';
import { CertificateViewModel } from '../models/certificate-view-model.interface';
import { FileInfoForSign } from '../models/file-info-for-sign.interface';
import { ForeignOrganization } from '../models/foreign-organization.interface';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { MarketCompositeOrganizationShortInfo } from '../models/market-composite-organization-short-info.interface';
import { MarketEmployeeShortInfoAlt } from '../models/market-employee-short-info-alt.interface';
import { MarketOrganizationCommonInfo } from '../models/market-organization-common-info.interface';
import { MarketOrganizationFullInfo } from '../models/market-organization-full-info.interface';
import { MarketPartnerOrganization } from '../models/market-partner-organization.interface';
import { Observable } from 'rxjs';
import { OrganizanizationFullCard } from '../models/organizanization-full-card.interface';
import { OrganizationInfo } from '../models/organization-info.interface';
import { OrganizationProfileDocument } from '../models/organization-profile-document.interface';
import { OrganizationsApiService } from '../../swagger/services/organizations-api.service';
import { OrganizationsApplyHomeRegionMessageParams, organizationsApplyHomeRegionMessageParamsAdapter } from './params/organizations-apply-home-region-message.params';
import { OrganizationsAutocompleteForeignOrganizationsParams, organizationsAutocompleteForeignOrganizationsParamsAdapter } from './params/organizations-autocomplete-foreign-organizations.params';
import { OrganizationsCheckAndGetOrganizationParams, organizationsCheckAndGetOrganizationParamsAdapter } from './params/organizations-check-and-get-organization.params';
import { OrganizationsCreateAgreement2323Params, organizationsCreateAgreement2323ParamsAdapter } from './params/organizations-create-agreement-2323.params';
import { OrganizationsCreateOrganizationParams, organizationsCreateOrganizationParamsAdapter } from './params/organizations-create-organization.params';
import { OrganizationsFindOrganizationInfoByGuidParams, organizationsFindOrganizationInfoByGuidParamsAdapter } from './params/organizations-find-organization-info-by-guid.params';
import { OrganizationsFindOrganizationInfoParams, organizationsFindOrganizationInfoParamsAdapter } from './params/organizations-find-organization-info.params';
import { OrganizationsGetAgreementInfoForSignParams, organizationsGetAgreementInfoForSignParamsAdapter } from './params/organizations-get-agreement-info-for-sign.params';
import { OrganizationsGetAgrement2323InfoParams, organizationsGetAgrement2323InfoParamsAdapter } from './params/organizations-get-agrement-2323-info.params';
import { OrganizationsGetCertificateInfoFromFileParams, organizationsGetCertificateInfoFromFileParamsAdapter } from './params/organizations-get-certificate-info-from-file.params';
import { OrganizationsGetCertificateOrganizationsParams, organizationsGetCertificateOrganizationsParamsAdapter } from './params/organizations-get-certificate-organizations.params';
import { OrganizationsGetCurrentOrganizationInfoParams, organizationsGetCurrentOrganizationInfoParamsAdapter } from './params/organizations-get-current-organization-info.params';
import { OrganizationsGetEmployeesParams, organizationsGetEmployeesParamsAdapter } from './params/organizations-get-employees.params';
import { OrganizationsGetForeignOrganizationsParams, organizationsGetForeignOrganizationsParamsAdapter } from './params/organizations-get-foreign-organizations.params';
import { OrganizationsGetMyCustomerPartnersParams, organizationsGetMyCustomerPartnersParamsAdapter } from './params/organizations-get-my-customer-partners.params';
import { OrganizationsGetOrganizationDocuments2Params, organizationsGetOrganizationDocuments2ParamsAdapter } from './params/organizations-get-organization-documents-2.params';
import { OrganizationsGetOrganizationDocumentsParams, organizationsGetOrganizationDocumentsParamsAdapter } from './params/organizations-get-organization-documents.params';
import { OrganizationsGetOrganizationFz223InfoParams, organizationsGetOrganizationFz223InfoParamsAdapter } from './params/organizations-get-organization-fz-223-info.params';
import { OrganizationsGetOrganizationInfoByGuidParams, organizationsGetOrganizationInfoByGuidParamsAdapter } from './params/organizations-get-organization-info-by-guid.params';
import { OrganizationsGetOrganizationsByFilterParams, organizationsGetOrganizationsByFilterParamsAdapter } from './params/organizations-get-organizations-by-filter.params';
import { OrganizationsGetOrganizationsForAutocompleteParams, organizationsGetOrganizationsForAutocompleteParamsAdapter } from './params/organizations-get-organizations-for-autocomplete.params';
import { OrganizationsGetOrganizationsForCurrentUserParams, organizationsGetOrganizationsForCurrentUserParamsAdapter } from './params/organizations-get-organizations-for-current-user.params';
import { OrganizationsGetOrganizationShortInfoParams, organizationsGetOrganizationShortInfoParamsAdapter } from './params/organizations-get-organization-short-info.params';
import { OrganizationsGetOrganizationWorkGroupsParams, organizationsGetOrganizationWorkGroupsParamsAdapter } from './params/organizations-get-organization-work-groups.params';
import { OrganizationsGetUpdateBaseInfoDataToSignParams, organizationsGetUpdateBaseInfoDataToSignParamsAdapter } from './params/organizations-get-update-base-info-data-to-sign.params';
import { OrganizationsGetVCardParams, organizationsGetVCardParamsAdapter } from './params/organizations-get-v-card.params';
import { OrganizationsIsCurrentOrganizationSmspParams, organizationsIsCurrentOrganizationSmspParamsAdapter } from './params/organizations-is-current-organization-smsp.params';
import { OrganizationsIsCurrentUserHaveValidCertParams, organizationsIsCurrentUserHaveValidCertParamsAdapter } from './params/organizations-is-current-user-have-valid-cert.params';
import { OrganizationsPatchOrganizationShortInfoParams, organizationsPatchOrganizationShortInfoParamsAdapter } from './params/organizations-patch-organization-short-info.params';
import { OrganizationsSaveAgreement2323Params, organizationsSaveAgreement2323ParamsAdapter } from './params/organizations-save-agreement-2323.params';
import { OrganizationsSendCustomerCommercialOfferParams, organizationsSendCustomerCommercialOfferParamsAdapter } from './params/organizations-send-customer-commercial-offer.params';
import { OrganizationsSignAgreementParams, organizationsSignAgreementParamsAdapter } from './params/organizations-sign-agreement.params';
import { OrganizationsUpdateAddressesParams, organizationsUpdateAddressesParamsAdapter } from './params/organizations-update-addresses.params';
import { OrganizationsUpdateBaseInfoParams, organizationsUpdateBaseInfoParamsAdapter } from './params/organizations-update-base-info.params';
import { OrganizationsUpdateDocumentsParams, organizationsUpdateDocumentsParamsAdapter } from './params/organizations-update-documents.params';
import { OrganizationWithAddressShortInfo } from '../models/organization-with-address-short-info.interface';
import { PaginationResultOfForeignOrganization } from '../models/pagination-result-of-foreign-organization.interface';
import { PaginationResultOfOrganizationForAutocomplete } from '../models/pagination-result-of-organization-for-autocomplete.interface';
import { UpdateOrganizationBaseInfoDataToSignAlt } from '../models/update-organization-base-info-data-to-sign-alt.interface';

@Injectable({ providedIn: 'root' })
export class OrganizationsRepository {
  private readonly _api = inject(OrganizationsApiService);

  organizationsApplyHomeRegionMessage(params?: OrganizationsApplyHomeRegionMessageParams): Observable<Blob> {
    return this._api.organizationsApplyHomeRegionMessage(organizationsApplyHomeRegionMessageParamsAdapter.adapt(params));
  }

  organizationsAutocompleteForeignOrganizations(params?: OrganizationsAutocompleteForeignOrganizationsParams): Observable<PaginationResultOfForeignOrganization> {
    return this._api.organizationsAutocompleteForeignOrganizations(organizationsAutocompleteForeignOrganizationsParamsAdapter.adapt(params)).pipe(
      map((res) => adaptPaginationResultOfForeignOrganizationToUI(res?.data))
    );
  }

  organizationsCheckAndGetOrganization(params: OrganizationsCheckAndGetOrganizationParams): Observable<Blob> {
    return this._api.organizationsCheckAndGetOrganization(organizationsCheckAndGetOrganizationParamsAdapter.adapt(params));
  }

  organizationsCreateAgreement2323(params?: OrganizationsCreateAgreement2323Params): Observable<string> {
    return this._api.organizationsCreateAgreement2323(organizationsCreateAgreement2323ParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? '')
    );
  }

  organizationsCreateOrganization(params?: OrganizationsCreateOrganizationParams): Observable<Blob> {
    return this._api.organizationsCreateOrganization(organizationsCreateOrganizationParamsAdapter.adapt(params));
  }

  organizationsFindOrganizationInfo(params?: OrganizationsFindOrganizationInfoParams): Observable<MarketOrganizationCommonInfo> {
    return this._api.organizationsFindOrganizationInfo(organizationsFindOrganizationInfoParamsAdapter.adapt(params)).pipe(
      map((res) => adaptMarketOrganizationCommonInfoToUI(res?.data))
    );
  }

  organizationsFindOrganizationInfoByGuid(params: OrganizationsFindOrganizationInfoByGuidParams): Observable<MarketOrganizationFullInfo> {
    return this._api.organizationsFindOrganizationInfoByGuid(organizationsFindOrganizationInfoByGuidParamsAdapter.adapt(params)).pipe(
      map((res) => adaptMarketOrganizationFullInfoToUI(res?.data))
    );
  }

  organizationsGetAgreementInfoForSign(params?: OrganizationsGetAgreementInfoForSignParams): Observable<FileInfoForSign> {
    return this._api.organizationsGetAgreementInfoForSign(organizationsGetAgreementInfoForSignParamsAdapter.adapt(params)).pipe(
      map((res) => adaptFileInfoForSignToUI(res?.data))
    );
  }

  organizationsGetAgrement2323Info(params?: OrganizationsGetAgrement2323InfoParams): Observable<Agreement2323> {
    return this._api.organizationsGetAgrement2323Info(organizationsGetAgrement2323InfoParamsAdapter.adapt(params)).pipe(
      map((res) => adaptAgreement2323ToUI(res?.data))
    );
  }

  organizationsGetCertificateInfoFromFile(params: OrganizationsGetCertificateInfoFromFileParams): Observable<CertificateViewModel> {
    return this._api.organizationsGetCertificateInfoFromFile(organizationsGetCertificateInfoFromFileParamsAdapter.adapt(params)).pipe(
      map((res) => adaptCertificateViewModelToUI(res?.data))
    );
  }

  organizationsGetCertificateOrganizations(params?: OrganizationsGetCertificateOrganizationsParams): Observable<CertificateOrganization[]> {
    return this._api.organizationsGetCertificateOrganizations(organizationsGetCertificateOrganizationsParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptCertificateOrganizationToUI(item)))
    );
  }

  organizationsGetCurrentOrganizationInfo(params?: OrganizationsGetCurrentOrganizationInfoParams): Observable<MarketOrganizationFullInfo> {
    return this._api.organizationsGetCurrentOrganizationInfo(organizationsGetCurrentOrganizationInfoParamsAdapter.adapt(params)).pipe(
      map((res) => adaptMarketOrganizationFullInfoToUI(res?.data))
    );
  }

  organizationsGetEmployees(params?: OrganizationsGetEmployeesParams): Observable<MarketEmployeeShortInfoAlt> {
    return this._api.organizationsGetEmployees(organizationsGetEmployeesParamsAdapter.adapt(params)).pipe(
      map((res) => adaptMarketEmployeeShortInfoAltToUI(res?.data))
    );
  }

  organizationsGetForeignOrganizations(params?: OrganizationsGetForeignOrganizationsParams): Observable<ForeignOrganization[]> {
    return this._api.organizationsGetForeignOrganizations(organizationsGetForeignOrganizationsParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptForeignOrganizationToUI(item)))
    );
  }

  organizationsGetMyCustomerPartners(params?: OrganizationsGetMyCustomerPartnersParams): Observable<MarketPartnerOrganization[]> {
    return this._api.organizationsGetMyCustomerPartners(organizationsGetMyCustomerPartnersParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptMarketPartnerOrganizationToUI(item)))
    );
  }

  organizationsGetOrganizationDocuments(params?: OrganizationsGetOrganizationDocumentsParams): Observable<OrganizationProfileDocument> {
    return this._api.organizationsGetOrganizationDocuments(organizationsGetOrganizationDocumentsParamsAdapter.adapt(params)).pipe(
      map((res) => adaptOrganizationProfileDocumentToUI(res?.data))
    );
  }

  organizationsGetOrganizationDocuments2(params: OrganizationsGetOrganizationDocuments2Params): Observable<OrganizationProfileDocument> {
    return this._api.organizationsGetOrganizationDocuments2(organizationsGetOrganizationDocuments2ParamsAdapter.adapt(params)).pipe(
      map((res) => adaptOrganizationProfileDocumentToUI(res?.data))
    );
  }

  organizationsGetOrganizationFz223Info(params?: OrganizationsGetOrganizationFz223InfoParams): Observable<OrganizationInfo> {
    return this._api.organizationsGetOrganizationFz223Info(organizationsGetOrganizationFz223InfoParamsAdapter.adapt(params)).pipe(
      map((res) => adaptOrganizationInfoToUI(res?.data))
    );
  }

  organizationsGetOrganizationInfoByGuid(params: OrganizationsGetOrganizationInfoByGuidParams): Observable<OrganizanizationFullCard> {
    return this._api.organizationsGetOrganizationInfoByGuid(organizationsGetOrganizationInfoByGuidParamsAdapter.adapt(params)).pipe(
      map((res) => adaptOrganizanizationFullCardToUI(res?.data))
    );
  }

  organizationsGetOrganizationsByFilter(params?: OrganizationsGetOrganizationsByFilterParams): Observable<OrganizationWithAddressShortInfo[]> {
    return this._api.organizationsGetOrganizationsByFilter(organizationsGetOrganizationsByFilterParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data?.items ?? []).map((item) => adaptOrganizationWithAddressShortInfoToUI(item)))
    );
  }

  organizationsGetOrganizationsForAutocomplete(params?: OrganizationsGetOrganizationsForAutocompleteParams): Observable<PaginationResultOfOrganizationForAutocomplete> {
    return this._api.organizationsGetOrganizationsForAutocomplete(organizationsGetOrganizationsForAutocompleteParamsAdapter.adapt(params)).pipe(
      map((res) => adaptPaginationResultOfOrganizationForAutocompleteToUI(res?.data))
    );
  }

  organizationsGetOrganizationsForCurrentUser(params?: OrganizationsGetOrganizationsForCurrentUserParams): Observable<MarketOrganizationFullInfo[]> {
    return this._api.organizationsGetOrganizationsForCurrentUser(organizationsGetOrganizationsForCurrentUserParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptMarketOrganizationFullInfoToUI(item)))
    );
  }

  organizationsGetOrganizationShortInfo(params?: OrganizationsGetOrganizationShortInfoParams): Observable<MarketCompositeOrganizationShortInfo> {
    return this._api.organizationsGetOrganizationShortInfo(organizationsGetOrganizationShortInfoParamsAdapter.adapt(params)).pipe(
      map((res) => adaptMarketCompositeOrganizationShortInfoToUI(res?.data))
    );
  }

  organizationsGetOrganizationWorkGroups(params?: OrganizationsGetOrganizationWorkGroupsParams): Observable<Blob> {
    return this._api.organizationsGetOrganizationWorkGroups(organizationsGetOrganizationWorkGroupsParamsAdapter.adapt(params));
  }

  organizationsGetUpdateBaseInfoDataToSign(params?: OrganizationsGetUpdateBaseInfoDataToSignParams): Observable<UpdateOrganizationBaseInfoDataToSignAlt> {
    return this._api.organizationsGetUpdateBaseInfoDataToSign(organizationsGetUpdateBaseInfoDataToSignParamsAdapter.adapt(params)).pipe(
      map((res) => adaptUpdateOrganizationBaseInfoDataToSignAltToUI(res?.data))
    );
  }

  organizationsGetVCard(params: OrganizationsGetVCardParams): Observable<Blob> {
    return this._api.organizationsGetVCard(organizationsGetVCardParamsAdapter.adapt(params));
  }

  organizationsIsCurrentOrganizationSmsp(params?: OrganizationsIsCurrentOrganizationSmspParams): Observable<boolean[]> {
    return this._api.organizationsIsCurrentOrganizationSmsp(organizationsIsCurrentOrganizationSmspParamsAdapter.adapt(params)).pipe(
      map((res) => res ?? [])
    );
  }

  organizationsIsCurrentUserHaveValidCert(params?: OrganizationsIsCurrentUserHaveValidCertParams): Observable<boolean> {
    return this._api.organizationsIsCurrentUserHaveValidCert(organizationsIsCurrentUserHaveValidCertParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  organizationsPatchOrganizationShortInfo(params?: OrganizationsPatchOrganizationShortInfoParams): Observable<void> {
    return this._api.organizationsPatchOrganizationShortInfo(organizationsPatchOrganizationShortInfoParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  organizationsSaveAgreement2323(params?: OrganizationsSaveAgreement2323Params): Observable<void> {
    return this._api.organizationsSaveAgreement2323(organizationsSaveAgreement2323ParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  organizationsSendCustomerCommercialOffer(params: OrganizationsSendCustomerCommercialOfferParams): Observable<void> {
    return this._api.organizationsSendCustomerCommercialOffer(organizationsSendCustomerCommercialOfferParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  organizationsSignAgreement(params?: OrganizationsSignAgreementParams): Observable<boolean> {
    return this._api.organizationsSignAgreement(organizationsSignAgreementParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  organizationsUpdateAddresses(params?: OrganizationsUpdateAddressesParams): Observable<void> {
    return this._api.organizationsUpdateAddresses(organizationsUpdateAddressesParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  organizationsUpdateBaseInfo(params?: OrganizationsUpdateBaseInfoParams): Observable<void> {
    return this._api.organizationsUpdateBaseInfo(organizationsUpdateBaseInfoParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  organizationsUpdateDocuments(params?: OrganizationsUpdateDocumentsParams): Observable<void> {
    return this._api.organizationsUpdateDocuments(organizationsUpdateDocumentsParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

}
