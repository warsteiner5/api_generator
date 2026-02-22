import { CompanyCatalogApiService } from '../../swagger/services/company-catalog-api.service';
import { CompanyCatalogGetIndustryGroupsParams, companyCatalogGetIndustryGroupsAdapter } from './params/company-catalog-get-industry-groups.params';
import { CompanyCatalogGetIndustryParams, companyCatalogGetIndustryAdapter } from './params/company-catalog-get-industry.params';
import { CompanyCatalogGetOrganizationsForAutocompleteParams, companyCatalogGetOrganizationsForAutocompleteAdapter } from './params/company-catalog-get-organizations-for-autocomplete.params';
import { CompanyCatalogOrganization } from '../models/company-catalog-organization.interface';
import { companyCatalogOrganizationAdapter } from '../adapters/models/company-catalog-organization.adapter';
import { CompanyCatalogSearchCompaniesParams, companyCatalogSearchCompaniesAdapter } from './params/company-catalog-search-companies.params';
import { CompanyCatalogSearchFavoriteCompaniesParams, companyCatalogSearchFavoriteCompaniesAdapter } from './params/company-catalog-search-favorite-companies.params';
import { Industry } from '../models/industry.interface';
import { industryAdapter } from '../adapters/models/industry.adapter';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { PaginationResultOfOrganizationForAutocomplete } from '../models/pagination-result-of-organization-for-autocomplete.interface';
import { paginationResultOfOrganizationForAutocompleteAdapter } from '../adapters/models/pagination-result-of-organization-for-autocomplete.adapter';

@Injectable({ providedIn: 'root' })
export class CompanyCatalogRepository {
  private readonly _api = inject(CompanyCatalogApiService);

  companyCatalogGetIndustry(params: CompanyCatalogGetIndustryParams): Observable<Industry> {
    return this._api.companyCatalogGetIndustry(companyCatalogGetIndustryAdapter(params)).pipe(
      map((res) => industryAdapter(res?.data))
    );
  }

  companyCatalogGetIndustryGroups(params?: CompanyCatalogGetIndustryGroupsParams): Observable<Industry[]> {
    return this._api.companyCatalogGetIndustryGroups(companyCatalogGetIndustryGroupsAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => industryAdapter(item)))
    );
  }

  companyCatalogGetOrganizationsForAutocomplete(params?: CompanyCatalogGetOrganizationsForAutocompleteParams): Observable<PaginationResultOfOrganizationForAutocomplete> {
    return this._api.companyCatalogGetOrganizationsForAutocomplete(companyCatalogGetOrganizationsForAutocompleteAdapter(params)).pipe(
      map((res) => paginationResultOfOrganizationForAutocompleteAdapter(res?.data))
    );
  }

  companyCatalogSearchCompanies(params?: CompanyCatalogSearchCompaniesParams): Observable<CompanyCatalogOrganization[]> {
    return this._api.companyCatalogSearchCompanies(companyCatalogSearchCompaniesAdapter(params)).pipe(
      map((res) => (res?.data?.items ?? []).map((item) => companyCatalogOrganizationAdapter(item)))
    );
  }

  companyCatalogSearchFavoriteCompanies(params?: CompanyCatalogSearchFavoriteCompaniesParams): Observable<CompanyCatalogOrganization[]> {
    return this._api.companyCatalogSearchFavoriteCompanies(companyCatalogSearchFavoriteCompaniesAdapter(params)).pipe(
      map((res) => (res?.data?.items ?? []).map((item) => companyCatalogOrganizationAdapter(item)))
    );
  }

}
