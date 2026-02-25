import { CompanyCatalogApiService } from '../../swagger/services/company-catalog-api.service';
import { CompanyCatalogGetIndustryGroupsParams, companyCatalogGetIndustryGroupsAdapter } from './params/company-catalog-get-industry-groups.params';
import { CompanyCatalogGetIndustryParams, companyCatalogGetIndustryAdapter } from './params/company-catalog-get-industry.params';
import { CompanyCatalogGetOrganizationsForAutocompleteParams, companyCatalogGetOrganizationsForAutocompleteAdapter } from './params/company-catalog-get-organizations-for-autocomplete.params';
import { CompanyCatalogOrganization } from '../models/company-catalog-organization.interface';
import { CompanyCatalogSearchCompaniesParams, companyCatalogSearchCompaniesAdapter } from './params/company-catalog-search-companies.params';
import { CompanyCatalogSearchFavoriteCompaniesParams, companyCatalogSearchFavoriteCompaniesAdapter } from './params/company-catalog-search-favorite-companies.params';
import { Industry } from '../models/industry.interface';
import { industryAdapter } from '../adapters/models/industry.adapter';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { MarketPaginationResult } from '../models/market-pagination-result.interface';
import { marketPaginationResultOfListOfCompanyCatalogOrganizationAdapter } from '../adapters/models/market-pagination-result-of-list-of-company-catalog-organization.adapter';
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

  companyCatalogSearchCompanies(params?: CompanyCatalogSearchCompaniesParams): Observable<MarketPaginationResult<CompanyCatalogOrganization[]>> {
    return this._api.companyCatalogSearchCompanies(companyCatalogSearchCompaniesAdapter(params)).pipe(
      map((res) => marketPaginationResultOfListOfCompanyCatalogOrganizationAdapter(res?.data))
    );
  }

  companyCatalogSearchFavoriteCompanies(params?: CompanyCatalogSearchFavoriteCompaniesParams): Observable<MarketPaginationResult<CompanyCatalogOrganization[]>> {
    return this._api.companyCatalogSearchFavoriteCompanies(companyCatalogSearchFavoriteCompaniesAdapter(params)).pipe(
      map((res) => marketPaginationResultOfListOfCompanyCatalogOrganizationAdapter(res?.data))
    );
  }

}
