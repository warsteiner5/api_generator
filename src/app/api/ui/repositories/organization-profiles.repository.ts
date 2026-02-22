import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { MarketOrganizationCompanyProfile } from '../models/market-organization-company-profile.interface';
import { marketOrganizationCompanyProfileAdapter } from '../adapters/models/market-organization-company-profile.adapter';
import { Observable } from 'rxjs';
import { OrganizationProfilesApiService } from '../../swagger/services/organization-profiles-api.service';
import { OrganizationProfilesFindOrganizationProfileByGuidParams, organizationProfilesFindOrganizationProfileByGuidAdapter } from './params/organization-profiles-find-organization-profile-by-guid.params';
import { OrganizationProfilesUpdateProfileAppearanceParams, organizationProfilesUpdateProfileAppearanceAdapter } from './params/organization-profiles-update-profile-appearance.params';
import { OrganizationProfilesUpdateProfileContractsParams, organizationProfilesUpdateProfileContractsAdapter } from './params/organization-profiles-update-profile-contracts.params';
import { OrganizationProfilesUpdateProfileDeliveryRegionsParams, organizationProfilesUpdateProfileDeliveryRegionsAdapter } from './params/organization-profiles-update-profile-delivery-regions.params';
import { OrganizationProfilesUpdateProfileDocumentsParams, organizationProfilesUpdateProfileDocumentsAdapter } from './params/organization-profiles-update-profile-documents.params';
import { OrganizationProfilesUpdateProfileGalleryParams, organizationProfilesUpdateProfileGalleryAdapter } from './params/organization-profiles-update-profile-gallery.params';
import { OrganizationProfilesUpdateProfileIndustriesParams, organizationProfilesUpdateProfileIndustriesAdapter } from './params/organization-profiles-update-profile-industries.params';
import { OrganizationProfilesUpdateProfileProductsParams, organizationProfilesUpdateProfileProductsAdapter } from './params/organization-profiles-update-profile-products.params';
import { OrganizationProfilesUpdateProfileTagsParams, organizationProfilesUpdateProfileTagsAdapter } from './params/organization-profiles-update-profile-tags.params';
import { OrganizationProfilesUpdateProfileVideoParams, organizationProfilesUpdateProfileVideoAdapter } from './params/organization-profiles-update-profile-video.params';

@Injectable({ providedIn: 'root' })
export class OrganizationProfilesRepository {
  private readonly _api = inject(OrganizationProfilesApiService);

  organizationProfilesFindOrganizationProfileByGuid(params?: OrganizationProfilesFindOrganizationProfileByGuidParams): Observable<MarketOrganizationCompanyProfile> {
    return this._api.organizationProfilesFindOrganizationProfileByGuid(organizationProfilesFindOrganizationProfileByGuidAdapter(params)).pipe(
      map((res) => marketOrganizationCompanyProfileAdapter(res?.data))
    );
  }

  organizationProfilesUpdateProfileAppearance(params?: OrganizationProfilesUpdateProfileAppearanceParams): Observable<boolean> {
    return this._api.organizationProfilesUpdateProfileAppearance(organizationProfilesUpdateProfileAppearanceAdapter(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  organizationProfilesUpdateProfileContracts(params?: OrganizationProfilesUpdateProfileContractsParams): Observable<boolean> {
    return this._api.organizationProfilesUpdateProfileContracts(organizationProfilesUpdateProfileContractsAdapter(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  organizationProfilesUpdateProfileDeliveryRegions(params?: OrganizationProfilesUpdateProfileDeliveryRegionsParams): Observable<boolean> {
    return this._api.organizationProfilesUpdateProfileDeliveryRegions(organizationProfilesUpdateProfileDeliveryRegionsAdapter(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  organizationProfilesUpdateProfileDocuments(params?: OrganizationProfilesUpdateProfileDocumentsParams): Observable<boolean> {
    return this._api.organizationProfilesUpdateProfileDocuments(organizationProfilesUpdateProfileDocumentsAdapter(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  organizationProfilesUpdateProfileGallery(params?: OrganizationProfilesUpdateProfileGalleryParams): Observable<boolean> {
    return this._api.organizationProfilesUpdateProfileGallery(organizationProfilesUpdateProfileGalleryAdapter(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  organizationProfilesUpdateProfileIndustries(params?: OrganizationProfilesUpdateProfileIndustriesParams): Observable<boolean> {
    return this._api.organizationProfilesUpdateProfileIndustries(organizationProfilesUpdateProfileIndustriesAdapter(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  organizationProfilesUpdateProfileProducts(params?: OrganizationProfilesUpdateProfileProductsParams): Observable<boolean> {
    return this._api.organizationProfilesUpdateProfileProducts(organizationProfilesUpdateProfileProductsAdapter(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  organizationProfilesUpdateProfileTags(params?: OrganizationProfilesUpdateProfileTagsParams): Observable<boolean> {
    return this._api.organizationProfilesUpdateProfileTags(organizationProfilesUpdateProfileTagsAdapter(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  organizationProfilesUpdateProfileVideo(params?: OrganizationProfilesUpdateProfileVideoParams): Observable<boolean> {
    return this._api.organizationProfilesUpdateProfileVideo(organizationProfilesUpdateProfileVideoAdapter(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

}
