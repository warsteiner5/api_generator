import { adaptCompanyCatalogOrganizationToUI } from '../adapters/toUI/company-catalog-organization.adapter';
import { adaptIndustryToUI } from '../adapters/toUI/industry.adapter';
import { adaptPaginationResultOfOrganizationForAutocompleteToUI } from '../adapters/toUI/pagination-result-of-organization-for-autocomplete.adapter';
import { CompanyCatalogApiService } from '../../swagger/services/company-catalog-api.service';
import { CompanyCatalogGetIndustryGroupsParams, companyCatalogGetIndustryGroupsParamsAdapter } from './params/company-catalog-get-industry-groups.params';
import { CompanyCatalogGetIndustryParams, companyCatalogGetIndustryParamsAdapter } from './params/company-catalog-get-industry.params';
import { CompanyCatalogGetOrganizationsForAutocompleteParams, companyCatalogGetOrganizationsForAutocompleteParamsAdapter } from './params/company-catalog-get-organizations-for-autocomplete.params';
import { CompanyCatalogOrganization } from '../models/company-catalog-organization.interface';
import { CompanyCatalogSearchCompaniesParams, companyCatalogSearchCompaniesParamsAdapter } from './params/company-catalog-search-companies.params';
import { CompanyCatalogSearchFavoriteCompaniesParams, companyCatalogSearchFavoriteCompaniesParamsAdapter } from './params/company-catalog-search-favorite-companies.params';
import { Industry } from '../models/industry.interface';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { PaginationResultOfOrganizationForAutocomplete } from '../models/pagination-result-of-organization-for-autocomplete.interface';

@Injectable({ providedIn: 'root' })
export class CompanyCatalogRepository {
  private readonly _api = inject(CompanyCatalogApiService);

  companyCatalogGetIndustry(params: CompanyCatalogGetIndustryParams): Observable<Industry> {
    return this._api.companyCatalogGetIndustry(companyCatalogGetIndustryParamsAdapter.adapt(params)).pipe(
      map((res) => adaptIndustryToUI(res?.data))
    );
  }

  companyCatalogGetIndustryGroups(params?: CompanyCatalogGetIndustryGroupsParams): Observable<Industry[]> {
    return this._api.companyCatalogGetIndustryGroups(companyCatalogGetIndustryGroupsParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptIndustryToUI(item)))
    );
  }

  companyCatalogGetOrganizationsForAutocomplete(params?: CompanyCatalogGetOrganizationsForAutocompleteParams): Observable<PaginationResultOfOrganizationForAutocomplete> {
    return this._api.companyCatalogGetOrganizationsForAutocomplete(companyCatalogGetOrganizationsForAutocompleteParamsAdapter.adapt(params)).pipe(
      map((res) => adaptPaginationResultOfOrganizationForAutocompleteToUI(res?.data))
    );
  }

  companyCatalogSearchCompanies(params?: CompanyCatalogSearchCompaniesParams): Observable<CompanyCatalogOrganization[]> {
    return this._api.companyCatalogSearchCompanies(companyCatalogSearchCompaniesParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data?.items ?? []).map((item) => adaptCompanyCatalogOrganizationToUI(item)))
    );
  }

  companyCatalogSearchFavoriteCompanies(params?: CompanyCatalogSearchFavoriteCompaniesParams): Observable<CompanyCatalogOrganization[]> {
    return this._api.companyCatalogSearchFavoriteCompanies(companyCatalogSearchFavoriteCompaniesParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data?.items ?? []).map((item) => adaptCompanyCatalogOrganizationToUI(item)))
    );
  }

}
