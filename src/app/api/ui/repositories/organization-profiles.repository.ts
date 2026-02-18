import { adaptMarketOrganizationCompanyProfileToUI } from '../adapters/toUI/market-organization-company-profile.adapter';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { MarketOrganizationCompanyProfile } from '../models/market-organization-company-profile.interface';
import { Observable } from 'rxjs';
import { OrganizationProfilesApiService } from '../../swagger/services/organization-profiles-api.service';
import { OrganizationProfilesFindOrganizationProfileByGuidParams, organizationProfilesFindOrganizationProfileByGuidParamsAdapter } from './params/organization-profiles-find-organization-profile-by-guid.params';
import { OrganizationProfilesUpdateProfileAppearanceParams, organizationProfilesUpdateProfileAppearanceParamsAdapter } from './params/organization-profiles-update-profile-appearance.params';
import { OrganizationProfilesUpdateProfileContractsParams, organizationProfilesUpdateProfileContractsParamsAdapter } from './params/organization-profiles-update-profile-contracts.params';
import { OrganizationProfilesUpdateProfileDeliveryRegionsParams, organizationProfilesUpdateProfileDeliveryRegionsParamsAdapter } from './params/organization-profiles-update-profile-delivery-regions.params';
import { OrganizationProfilesUpdateProfileDocumentsParams, organizationProfilesUpdateProfileDocumentsParamsAdapter } from './params/organization-profiles-update-profile-documents.params';
import { OrganizationProfilesUpdateProfileGalleryParams, organizationProfilesUpdateProfileGalleryParamsAdapter } from './params/organization-profiles-update-profile-gallery.params';
import { OrganizationProfilesUpdateProfileIndustriesParams, organizationProfilesUpdateProfileIndustriesParamsAdapter } from './params/organization-profiles-update-profile-industries.params';
import { OrganizationProfilesUpdateProfileProductsParams, organizationProfilesUpdateProfileProductsParamsAdapter } from './params/organization-profiles-update-profile-products.params';
import { OrganizationProfilesUpdateProfileTagsParams, organizationProfilesUpdateProfileTagsParamsAdapter } from './params/organization-profiles-update-profile-tags.params';
import { OrganizationProfilesUpdateProfileVideoParams, organizationProfilesUpdateProfileVideoParamsAdapter } from './params/organization-profiles-update-profile-video.params';

@Injectable({ providedIn: 'root' })
export class OrganizationProfilesRepository {
  private readonly _api = inject(OrganizationProfilesApiService);

  organizationProfilesFindOrganizationProfileByGuid(params?: OrganizationProfilesFindOrganizationProfileByGuidParams): Observable<MarketOrganizationCompanyProfile> {
    return this._api.organizationProfilesFindOrganizationProfileByGuid(organizationProfilesFindOrganizationProfileByGuidParamsAdapter.adapt(params)).pipe(
      map((res) => adaptMarketOrganizationCompanyProfileToUI(res?.data))
    );
  }

  organizationProfilesUpdateProfileAppearance(params?: OrganizationProfilesUpdateProfileAppearanceParams): Observable<boolean> {
    return this._api.organizationProfilesUpdateProfileAppearance(organizationProfilesUpdateProfileAppearanceParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  organizationProfilesUpdateProfileContracts(params?: OrganizationProfilesUpdateProfileContractsParams): Observable<boolean> {
    return this._api.organizationProfilesUpdateProfileContracts(organizationProfilesUpdateProfileContractsParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  organizationProfilesUpdateProfileDeliveryRegions(params?: OrganizationProfilesUpdateProfileDeliveryRegionsParams): Observable<boolean> {
    return this._api.organizationProfilesUpdateProfileDeliveryRegions(organizationProfilesUpdateProfileDeliveryRegionsParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  organizationProfilesUpdateProfileDocuments(params?: OrganizationProfilesUpdateProfileDocumentsParams): Observable<boolean> {
    return this._api.organizationProfilesUpdateProfileDocuments(organizationProfilesUpdateProfileDocumentsParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  organizationProfilesUpdateProfileGallery(params?: OrganizationProfilesUpdateProfileGalleryParams): Observable<boolean> {
    return this._api.organizationProfilesUpdateProfileGallery(organizationProfilesUpdateProfileGalleryParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  organizationProfilesUpdateProfileIndustries(params?: OrganizationProfilesUpdateProfileIndustriesParams): Observable<boolean> {
    return this._api.organizationProfilesUpdateProfileIndustries(organizationProfilesUpdateProfileIndustriesParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  organizationProfilesUpdateProfileProducts(params?: OrganizationProfilesUpdateProfileProductsParams): Observable<boolean> {
    return this._api.organizationProfilesUpdateProfileProducts(organizationProfilesUpdateProfileProductsParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  organizationProfilesUpdateProfileTags(params?: OrganizationProfilesUpdateProfileTagsParams): Observable<boolean> {
    return this._api.organizationProfilesUpdateProfileTags(organizationProfilesUpdateProfileTagsParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  organizationProfilesUpdateProfileVideo(params?: OrganizationProfilesUpdateProfileVideoParams): Observable<boolean> {
    return this._api.organizationProfilesUpdateProfileVideo(organizationProfilesUpdateProfileVideoParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

}
