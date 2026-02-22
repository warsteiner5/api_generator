import { Agreement2323 } from '../models/agreement-2323.interface';
import { agreement2323Adapter } from '../adapters/models/agreement-2323.adapter';
import { CertificateOrganization } from '../models/certificate-organization.interface';
import { certificateOrganizationAdapter } from '../adapters/models/certificate-organization.adapter';
import { CertificateViewModel } from '../models/certificate-view-model.interface';
import { certificateViewModelAdapter } from '../adapters/models/certificate-view-model.adapter';
import { FileInfoForSign } from '../models/file-info-for-sign.interface';
import { fileInfoForSignAdapter } from '../adapters/models/file-info-for-sign.adapter';
import { ForeignOrganization } from '../models/foreign-organization.interface';
import { foreignOrganizationAdapter } from '../adapters/models/foreign-organization.adapter';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { MarketCompositeOrganizationShortInfo } from '../models/market-composite-organization-short-info.interface';
import { marketCompositeOrganizationShortInfoAdapter } from '../adapters/models/market-composite-organization-short-info.adapter';
import { MarketEmployeeShortInfoAlt } from '../models/market-employee-short-info-alt.interface';
import { marketEmployeeShortInfoAltAdapter } from '../adapters/models/market-employee-short-info-alt.adapter';
import { MarketOrganizationCommonInfo } from '../models/market-organization-common-info.interface';
import { marketOrganizationCommonInfoAdapter } from '../adapters/models/market-organization-common-info.adapter';
import { MarketOrganizationFullInfo } from '../models/market-organization-full-info.interface';
import { marketOrganizationFullInfoAdapter } from '../adapters/models/market-organization-full-info.adapter';
import { MarketPartnerOrganization } from '../models/market-partner-organization.interface';
import { marketPartnerOrganizationAdapter } from '../adapters/models/market-partner-organization.adapter';
import { Observable } from 'rxjs';
import { OrganizanizationFullCard } from '../models/organizanization-full-card.interface';
import { organizanizationFullCardAdapter } from '../adapters/models/organizanization-full-card.adapter';
import { OrganizationInfo } from '../models/organization-info.interface';
import { organizationInfoAdapter } from '../adapters/models/organization-info.adapter';
import { OrganizationProfileDocument } from '../models/organization-profile-document.interface';
import { organizationProfileDocumentAdapter } from '../adapters/models/organization-profile-document.adapter';
import { OrganizationsApiService } from '../../swagger/services/organizations-api.service';
import { OrganizationsApplyHomeRegionMessageParams, organizationsApplyHomeRegionMessageAdapter } from './params/organizations-apply-home-region-message.params';
import { OrganizationsAutocompleteForeignOrganizationsParams, organizationsAutocompleteForeignOrganizationsAdapter } from './params/organizations-autocomplete-foreign-organizations.params';
import { OrganizationsCheckAndGetOrganizationParams, organizationsCheckAndGetOrganizationAdapter } from './params/organizations-check-and-get-organization.params';
import { OrganizationsCreateAgreement2323Params, organizationsCreateAgreement2323Adapter } from './params/organizations-create-agreement-2323.params';
import { OrganizationsCreateOrganizationParams, organizationsCreateOrganizationAdapter } from './params/organizations-create-organization.params';
import { OrganizationsFindOrganizationInfoByGuidParams, organizationsFindOrganizationInfoByGuidAdapter } from './params/organizations-find-organization-info-by-guid.params';
import { OrganizationsFindOrganizationInfoParams, organizationsFindOrganizationInfoAdapter } from './params/organizations-find-organization-info.params';
import { OrganizationsGetAgreementInfoForSignParams, organizationsGetAgreementInfoForSignAdapter } from './params/organizations-get-agreement-info-for-sign.params';
import { OrganizationsGetAgrement2323InfoParams, organizationsGetAgrement2323InfoAdapter } from './params/organizations-get-agrement-2323-info.params';
import { OrganizationsGetCertificateInfoFromFileParams, organizationsGetCertificateInfoFromFileAdapter } from './params/organizations-get-certificate-info-from-file.params';
import { OrganizationsGetCertificateOrganizationsParams, organizationsGetCertificateOrganizationsAdapter } from './params/organizations-get-certificate-organizations.params';
import { OrganizationsGetCurrentOrganizationInfoParams, organizationsGetCurrentOrganizationInfoAdapter } from './params/organizations-get-current-organization-info.params';
import { OrganizationsGetEmployeesParams, organizationsGetEmployeesAdapter } from './params/organizations-get-employees.params';
import { OrganizationsGetForeignOrganizationsParams, organizationsGetForeignOrganizationsAdapter } from './params/organizations-get-foreign-organizations.params';
import { OrganizationsGetMyCustomerPartnersParams, organizationsGetMyCustomerPartnersAdapter } from './params/organizations-get-my-customer-partners.params';
import { OrganizationsGetOrganizationDocuments2Params, organizationsGetOrganizationDocuments2Adapter } from './params/organizations-get-organization-documents-2.params';
import { OrganizationsGetOrganizationDocumentsParams, organizationsGetOrganizationDocumentsAdapter } from './params/organizations-get-organization-documents.params';
import { OrganizationsGetOrganizationFz223InfoParams, organizationsGetOrganizationFz223InfoAdapter } from './params/organizations-get-organization-fz-223-info.params';
import { OrganizationsGetOrganizationInfoByGuidParams, organizationsGetOrganizationInfoByGuidAdapter } from './params/organizations-get-organization-info-by-guid.params';
import { OrganizationsGetOrganizationsByFilterParams, organizationsGetOrganizationsByFilterAdapter } from './params/organizations-get-organizations-by-filter.params';
import { OrganizationsGetOrganizationsForAutocompleteParams, organizationsGetOrganizationsForAutocompleteAdapter } from './params/organizations-get-organizations-for-autocomplete.params';
import { OrganizationsGetOrganizationsForCurrentUserParams, organizationsGetOrganizationsForCurrentUserAdapter } from './params/organizations-get-organizations-for-current-user.params';
import { OrganizationsGetOrganizationShortInfoParams, organizationsGetOrganizationShortInfoAdapter } from './params/organizations-get-organization-short-info.params';
import { OrganizationsGetOrganizationWorkGroupsParams, organizationsGetOrganizationWorkGroupsAdapter } from './params/organizations-get-organization-work-groups.params';
import { OrganizationsGetUpdateBaseInfoDataToSignParams, organizationsGetUpdateBaseInfoDataToSignAdapter } from './params/organizations-get-update-base-info-data-to-sign.params';
import { OrganizationsGetVCardParams, organizationsGetVCardAdapter } from './params/organizations-get-v-card.params';
import { OrganizationsIsCurrentOrganizationSmspParams, organizationsIsCurrentOrganizationSmspAdapter } from './params/organizations-is-current-organization-smsp.params';
import { OrganizationsIsCurrentUserHaveValidCertParams, organizationsIsCurrentUserHaveValidCertAdapter } from './params/organizations-is-current-user-have-valid-cert.params';
import { OrganizationsPatchOrganizationShortInfoParams, organizationsPatchOrganizationShortInfoAdapter } from './params/organizations-patch-organization-short-info.params';
import { OrganizationsSaveAgreement2323Params, organizationsSaveAgreement2323Adapter } from './params/organizations-save-agreement-2323.params';
import { OrganizationsSendCustomerCommercialOfferParams, organizationsSendCustomerCommercialOfferAdapter } from './params/organizations-send-customer-commercial-offer.params';
import { OrganizationsSignAgreementParams, organizationsSignAgreementAdapter } from './params/organizations-sign-agreement.params';
import { OrganizationsUpdateAddressesParams, organizationsUpdateAddressesAdapter } from './params/organizations-update-addresses.params';
import { OrganizationsUpdateBaseInfoParams, organizationsUpdateBaseInfoAdapter } from './params/organizations-update-base-info.params';
import { OrganizationsUpdateDocumentsParams, organizationsUpdateDocumentsAdapter } from './params/organizations-update-documents.params';
import { OrganizationWithAddressShortInfo } from '../models/organization-with-address-short-info.interface';
import { organizationWithAddressShortInfoAdapter } from '../adapters/models/organization-with-address-short-info.adapter';
import { PaginationResultOfForeignOrganization } from '../models/pagination-result-of-foreign-organization.interface';
import { paginationResultOfForeignOrganizationAdapter } from '../adapters/models/pagination-result-of-foreign-organization.adapter';
import { PaginationResultOfOrganizationForAutocomplete } from '../models/pagination-result-of-organization-for-autocomplete.interface';
import { paginationResultOfOrganizationForAutocompleteAdapter } from '../adapters/models/pagination-result-of-organization-for-autocomplete.adapter';
import { UpdateOrganizationBaseInfoDataToSignAlt } from '../models/update-organization-base-info-data-to-sign-alt.interface';
import { updateOrganizationBaseInfoDataToSignAltAdapter } from '../adapters/models/update-organization-base-info-data-to-sign-alt.adapter';

@Injectable({ providedIn: 'root' })
export class OrganizationsRepository {
  private readonly _api = inject(OrganizationsApiService);

  organizationsApplyHomeRegionMessage(params?: OrganizationsApplyHomeRegionMessageParams): Observable<Blob> {
    return this._api.organizationsApplyHomeRegionMessage(organizationsApplyHomeRegionMessageAdapter(params));
  }

  organizationsAutocompleteForeignOrganizations(params?: OrganizationsAutocompleteForeignOrganizationsParams): Observable<PaginationResultOfForeignOrganization> {
    return this._api.organizationsAutocompleteForeignOrganizations(organizationsAutocompleteForeignOrganizationsAdapter(params)).pipe(
      map((res) => paginationResultOfForeignOrganizationAdapter(res?.data))
    );
  }

  organizationsCheckAndGetOrganization(params: OrganizationsCheckAndGetOrganizationParams): Observable<Blob> {
    return this._api.organizationsCheckAndGetOrganization(organizationsCheckAndGetOrganizationAdapter(params));
  }

  organizationsCreateAgreement2323(params?: OrganizationsCreateAgreement2323Params): Observable<string> {
    return this._api.organizationsCreateAgreement2323(organizationsCreateAgreement2323Adapter(params)).pipe(
      map((res) => res?.data ?? '')
    );
  }

  organizationsCreateOrganization(params?: OrganizationsCreateOrganizationParams): Observable<Blob> {
    return this._api.organizationsCreateOrganization(organizationsCreateOrganizationAdapter(params));
  }

  organizationsFindOrganizationInfo(params?: OrganizationsFindOrganizationInfoParams): Observable<MarketOrganizationCommonInfo> {
    return this._api.organizationsFindOrganizationInfo(organizationsFindOrganizationInfoAdapter(params)).pipe(
      map((res) => marketOrganizationCommonInfoAdapter(res?.data))
    );
  }

  organizationsFindOrganizationInfoByGuid(params: OrganizationsFindOrganizationInfoByGuidParams): Observable<MarketOrganizationFullInfo> {
    return this._api.organizationsFindOrganizationInfoByGuid(organizationsFindOrganizationInfoByGuidAdapter(params)).pipe(
      map((res) => marketOrganizationFullInfoAdapter(res?.data))
    );
  }

  organizationsGetAgreementInfoForSign(params?: OrganizationsGetAgreementInfoForSignParams): Observable<FileInfoForSign> {
    return this._api.organizationsGetAgreementInfoForSign(organizationsGetAgreementInfoForSignAdapter(params)).pipe(
      map((res) => fileInfoForSignAdapter(res?.data))
    );
  }

  organizationsGetAgrement2323Info(params?: OrganizationsGetAgrement2323InfoParams): Observable<Agreement2323> {
    return this._api.organizationsGetAgrement2323Info(organizationsGetAgrement2323InfoAdapter(params)).pipe(
      map((res) => agreement2323Adapter(res?.data))
    );
  }

  organizationsGetCertificateInfoFromFile(params: OrganizationsGetCertificateInfoFromFileParams): Observable<CertificateViewModel> {
    return this._api.organizationsGetCertificateInfoFromFile(organizationsGetCertificateInfoFromFileAdapter(params)).pipe(
      map((res) => certificateViewModelAdapter(res?.data))
    );
  }

  organizationsGetCertificateOrganizations(params?: OrganizationsGetCertificateOrganizationsParams): Observable<CertificateOrganization[]> {
    return this._api.organizationsGetCertificateOrganizations(organizationsGetCertificateOrganizationsAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => certificateOrganizationAdapter(item)))
    );
  }

  organizationsGetCurrentOrganizationInfo(params?: OrganizationsGetCurrentOrganizationInfoParams): Observable<MarketOrganizationFullInfo> {
    return this._api.organizationsGetCurrentOrganizationInfo(organizationsGetCurrentOrganizationInfoAdapter(params)).pipe(
      map((res) => marketOrganizationFullInfoAdapter(res?.data))
    );
  }

  organizationsGetEmployees(params?: OrganizationsGetEmployeesParams): Observable<MarketEmployeeShortInfoAlt> {
    return this._api.organizationsGetEmployees(organizationsGetEmployeesAdapter(params)).pipe(
      map((res) => marketEmployeeShortInfoAltAdapter(res?.data))
    );
  }

  organizationsGetForeignOrganizations(params?: OrganizationsGetForeignOrganizationsParams): Observable<ForeignOrganization[]> {
    return this._api.organizationsGetForeignOrganizations(organizationsGetForeignOrganizationsAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => foreignOrganizationAdapter(item)))
    );
  }

  organizationsGetMyCustomerPartners(params?: OrganizationsGetMyCustomerPartnersParams): Observable<MarketPartnerOrganization[]> {
    return this._api.organizationsGetMyCustomerPartners(organizationsGetMyCustomerPartnersAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => marketPartnerOrganizationAdapter(item)))
    );
  }

  organizationsGetOrganizationDocuments(params?: OrganizationsGetOrganizationDocumentsParams): Observable<OrganizationProfileDocument> {
    return this._api.organizationsGetOrganizationDocuments(organizationsGetOrganizationDocumentsAdapter(params)).pipe(
      map((res) => organizationProfileDocumentAdapter(res?.data))
    );
  }

  organizationsGetOrganizationDocuments2(params: OrganizationsGetOrganizationDocuments2Params): Observable<OrganizationProfileDocument> {
    return this._api.organizationsGetOrganizationDocuments2(organizationsGetOrganizationDocuments2Adapter(params)).pipe(
      map((res) => organizationProfileDocumentAdapter(res?.data))
    );
  }

  organizationsGetOrganizationFz223Info(params?: OrganizationsGetOrganizationFz223InfoParams): Observable<OrganizationInfo> {
    return this._api.organizationsGetOrganizationFz223Info(organizationsGetOrganizationFz223InfoAdapter(params)).pipe(
      map((res) => organizationInfoAdapter(res?.data))
    );
  }

  organizationsGetOrganizationInfoByGuid(params: OrganizationsGetOrganizationInfoByGuidParams): Observable<OrganizanizationFullCard> {
    return this._api.organizationsGetOrganizationInfoByGuid(organizationsGetOrganizationInfoByGuidAdapter(params)).pipe(
      map((res) => organizanizationFullCardAdapter(res?.data))
    );
  }

  organizationsGetOrganizationsByFilter(params?: OrganizationsGetOrganizationsByFilterParams): Observable<OrganizationWithAddressShortInfo[]> {
    return this._api.organizationsGetOrganizationsByFilter(organizationsGetOrganizationsByFilterAdapter(params)).pipe(
      map((res) => (res?.data?.items ?? []).map((item) => organizationWithAddressShortInfoAdapter(item)))
    );
  }

  organizationsGetOrganizationsForAutocomplete(params?: OrganizationsGetOrganizationsForAutocompleteParams): Observable<PaginationResultOfOrganizationForAutocomplete> {
    return this._api.organizationsGetOrganizationsForAutocomplete(organizationsGetOrganizationsForAutocompleteAdapter(params)).pipe(
      map((res) => paginationResultOfOrganizationForAutocompleteAdapter(res?.data))
    );
  }

  organizationsGetOrganizationsForCurrentUser(params?: OrganizationsGetOrganizationsForCurrentUserParams): Observable<MarketOrganizationFullInfo[]> {
    return this._api.organizationsGetOrganizationsForCurrentUser(organizationsGetOrganizationsForCurrentUserAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => marketOrganizationFullInfoAdapter(item)))
    );
  }

  organizationsGetOrganizationShortInfo(params?: OrganizationsGetOrganizationShortInfoParams): Observable<MarketCompositeOrganizationShortInfo> {
    return this._api.organizationsGetOrganizationShortInfo(organizationsGetOrganizationShortInfoAdapter(params)).pipe(
      map((res) => marketCompositeOrganizationShortInfoAdapter(res?.data))
    );
  }

  organizationsGetOrganizationWorkGroups(params?: OrganizationsGetOrganizationWorkGroupsParams): Observable<Blob> {
    return this._api.organizationsGetOrganizationWorkGroups(organizationsGetOrganizationWorkGroupsAdapter(params));
  }

  organizationsGetUpdateBaseInfoDataToSign(params?: OrganizationsGetUpdateBaseInfoDataToSignParams): Observable<UpdateOrganizationBaseInfoDataToSignAlt> {
    return this._api.organizationsGetUpdateBaseInfoDataToSign(organizationsGetUpdateBaseInfoDataToSignAdapter(params)).pipe(
      map((res) => updateOrganizationBaseInfoDataToSignAltAdapter(res?.data))
    );
  }

  organizationsGetVCard(params: OrganizationsGetVCardParams): Observable<Blob> {
    return this._api.organizationsGetVCard(organizationsGetVCardAdapter(params));
  }

  organizationsIsCurrentOrganizationSmsp(params?: OrganizationsIsCurrentOrganizationSmspParams): Observable<boolean[]> {
    return this._api.organizationsIsCurrentOrganizationSmsp(organizationsIsCurrentOrganizationSmspAdapter(params)).pipe(
      map((res) => res ?? [])
    );
  }

  organizationsIsCurrentUserHaveValidCert(params?: OrganizationsIsCurrentUserHaveValidCertParams): Observable<boolean> {
    return this._api.organizationsIsCurrentUserHaveValidCert(organizationsIsCurrentUserHaveValidCertAdapter(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  organizationsPatchOrganizationShortInfo(params?: OrganizationsPatchOrganizationShortInfoParams): Observable<void> {
    return this._api.organizationsPatchOrganizationShortInfo(organizationsPatchOrganizationShortInfoAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

  organizationsSaveAgreement2323(params?: OrganizationsSaveAgreement2323Params): Observable<void> {
    return this._api.organizationsSaveAgreement2323(organizationsSaveAgreement2323Adapter(params)).pipe(
      map((res) => void 0)
    );
  }

  organizationsSendCustomerCommercialOffer(params: OrganizationsSendCustomerCommercialOfferParams): Observable<void> {
    return this._api.organizationsSendCustomerCommercialOffer(organizationsSendCustomerCommercialOfferAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

  organizationsSignAgreement(params?: OrganizationsSignAgreementParams): Observable<boolean> {
    return this._api.organizationsSignAgreement(organizationsSignAgreementAdapter(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  organizationsUpdateAddresses(params?: OrganizationsUpdateAddressesParams): Observable<void> {
    return this._api.organizationsUpdateAddresses(organizationsUpdateAddressesAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

  organizationsUpdateBaseInfo(params?: OrganizationsUpdateBaseInfoParams): Observable<void> {
    return this._api.organizationsUpdateBaseInfo(organizationsUpdateBaseInfoAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

  organizationsUpdateDocuments(params?: OrganizationsUpdateDocumentsParams): Observable<void> {
    return this._api.organizationsUpdateDocuments(organizationsUpdateDocumentsAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

}
