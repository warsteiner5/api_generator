import { Category } from '../models/category.interface';
import { categoryAdapter } from '../adapters/models/category.adapter';
import { CategoryWithChildren } from '../models/category-with-children.interface';
import { categoryWithChildrenAdapter } from '../adapters/models/category-with-children.adapter';
import { DictionariesApiService } from '../../swagger/services/dictionaries-api.service';
import { DictionariesGetAllOkeiCodesParams, dictionariesGetAllOkeiCodesAdapter } from './params/dictionaries-get-all-okei-codes.params';
import { DictionariesGetCategoryAsync1Params, dictionariesGetCategoryAsync1Adapter } from './params/dictionaries-get-category-async-1.params';
import { DictionariesGetCategoryByParentCodeParams, dictionariesGetCategoryByParentCodeAdapter } from './params/dictionaries-get-category-by-parent-code.params';
import { DictionariesGetCategoryParams, dictionariesGetCategoryAdapter } from './params/dictionaries-get-category.params';
import { DictionariesGetIndustriesParams, dictionariesGetIndustriesAdapter } from './params/dictionaries-get-industries.params';
import { DictionariesGetKladrRegionListGet2Params, dictionariesGetKladrRegionListGet2Adapter } from './params/dictionaries-get-kladr-region-list-get-2.params';
import { DictionariesGetKladrRegionListGetParams, dictionariesGetKladrRegionListGetAdapter } from './params/dictionaries-get-kladr-region-list-get.params';
import { DictionariesGetKladrRegionListPostParams, dictionariesGetKladrRegionListPostAdapter } from './params/dictionaries-get-kladr-region-list-post.params';
import { DictionariesGetKsrAutocompleteListGetParams, dictionariesGetKsrAutocompleteListGetAdapter } from './params/dictionaries-get-ksr-autocomplete-list-get.params';
import { DictionariesGetKsrAutocompleteListPostParams, dictionariesGetKsrAutocompleteListPostAdapter } from './params/dictionaries-get-ksr-autocomplete-list-post.params';
import { DictionariesGetKsrByCodeParams, dictionariesGetKsrByCodeAdapter } from './params/dictionaries-get-ksr-by-code.params';
import { DictionariesGetKsrByParentCodeParams, dictionariesGetKsrByParentCodeAdapter } from './params/dictionaries-get-ksr-by-parent-code.params';
import { DictionariesGetKsrMainCategoriesParams, dictionariesGetKsrMainCategoriesAdapter } from './params/dictionaries-get-ksr-main-categories.params';
import { DictionariesGetKtruByCodeParams, dictionariesGetKtruByCodeAdapter } from './params/dictionaries-get-ktru-by-code.params';
import { DictionariesGetKtruByOkpd2Params, dictionariesGetKtruByOkpd2Adapter } from './params/dictionaries-get-ktru-by-okpd-2.params';
import { DictionariesGetOkdp2AutocompleteListGetParams, dictionariesGetOkdp2AutocompleteListGetAdapter } from './params/dictionaries-get-okdp-2-autocomplete-list-get.params';
import { DictionariesGetOkdp2AutocompleteListPostParams, dictionariesGetOkdp2AutocompleteListPostAdapter } from './params/dictionaries-get-okdp-2-autocomplete-list-post.params';
import { DictionariesGetOkopfByCodeParams, dictionariesGetOkopfByCodeAdapter } from './params/dictionaries-get-okopf-by-code.params';
import { DictionariesGetOkpd2ByCodeParams, dictionariesGetOkpd2ByCodeAdapter } from './params/dictionaries-get-okpd-2-by-code.params';
import { DictionariesGetOkpd2ByParentCodeParams, dictionariesGetOkpd2ByParentCodeAdapter } from './params/dictionaries-get-okpd-2-by-parent-code.params';
import { DictionariesGetOktmoByCodeParams, dictionariesGetOktmoByCodeAdapter } from './params/dictionaries-get-oktmo-by-code.params';
import { DictionariesGetOkved2AutocompleteListGetParams, dictionariesGetOkved2AutocompleteListGetAdapter } from './params/dictionaries-get-okved-2-autocomplete-list-get.params';
import { DictionariesGetOkved2AutocompleteListPostParams, dictionariesGetOkved2AutocompleteListPostAdapter } from './params/dictionaries-get-okved-2-autocomplete-list-post.params';
import { DictionariesGetOkved2ByCodeParams, dictionariesGetOkved2ByCodeAdapter } from './params/dictionaries-get-okved-2-by-code.params';
import { DictionariesGetOkved2ByParentCodeParams, dictionariesGetOkved2ByParentCodeAdapter } from './params/dictionaries-get-okved-2-by-parent-code.params';
import { DictionariesGetOrganizationCountriesParams, dictionariesGetOrganizationCountriesAdapter } from './params/dictionaries-get-organization-countries.params';
import { DictionariesGetRegionsParams, dictionariesGetRegionsAdapter } from './params/dictionaries-get-regions.params';
import { DictionariesGetRegistriesParams, dictionariesGetRegistriesAdapter } from './params/dictionaries-get-registries.params';
import { DictionariesGetRegistryItemsAutocompleteParams, dictionariesGetRegistryItemsAutocompleteAdapter } from './params/dictionaries-get-registry-items-autocomplete.params';
import { DictionariesGetRootKsrParams, dictionariesGetRootKsrAdapter } from './params/dictionaries-get-root-ksr.params';
import { DictionariesSearchKtruByStringParams, dictionariesSearchKtruByStringAdapter } from './params/dictionaries-search-ktru-by-string.params';
import { DictionaryItemAlt } from '../models/dictionary-item-alt.interface';
import { dictionaryItemAltAdapter } from '../adapters/models/dictionary-item-alt.adapter';
import { Industry } from '../models/industry.interface';
import { industryAdapter } from '../adapters/models/industry.adapter';
import { Injectable, inject } from '@angular/core';
import { KeyValuePairOfStringAndStringAlt } from '../models/key-value-pair-of-string-and-string-alt.interface';
import { keyValuePairOfStringAndStringAltAdapter } from '../adapters/models/key-value-pair-of-string-and-string-alt.adapter';
import { KsrCategoryAlt } from '../models/ksr-category-alt.interface';
import { ksrCategoryAltAdapter } from '../adapters/models/ksr-category-alt.adapter';
import { KsrValueAlt } from '../models/ksr-value-alt.interface';
import { ksrValueAltAdapter } from '../adapters/models/ksr-value-alt.adapter';
import { Ktru } from '../models/ktru.interface';
import { ktruAdapter } from '../adapters/models/ktru.adapter';
import { map } from 'rxjs/operators';
import { MunicipalityOktmo } from '../models/municipality-oktmo.interface';
import { municipalityOktmoAdapter } from '../adapters/models/municipality-oktmo.adapter';
import { Observable } from 'rxjs';
import { OkeiShort } from '../models/okei-short.interface';
import { okeiShortAdapter } from '../adapters/models/okei-short.adapter';
import { Okopf } from '../models/okopf.interface';
import { okopfAdapter } from '../adapters/models/okopf.adapter';
import { Okpd2ValueAlt } from '../models/okpd-2-value-alt.interface';
import { okpd2ValueAltAdapter } from '../adapters/models/okpd-2-value-alt.adapter';
import { Okved2ValueAlt } from '../models/okved-2-value-alt.interface';
import { okved2ValueAltAdapter } from '../adapters/models/okved-2-value-alt.adapter';
import { OrganizationCountry } from '../models/organization-country.interface';
import { organizationCountryAdapter } from '../adapters/models/organization-country.adapter';
import { PagedCollectionOfKtruShort } from '../models/paged-collection-of-ktru-short.interface';
import { pagedCollectionOfKtruShortAdapter } from '../adapters/models/paged-collection-of-ktru-short.adapter';
import { Region } from '../models/region.interface';
import { regionAdapter } from '../adapters/models/region.adapter';
import { Registry } from '../models/registry.interface';
import { registryAdapter } from '../adapters/models/registry.adapter';

@Injectable({ providedIn: 'root' })
export class DictionariesRepository {
  private readonly _api = inject(DictionariesApiService);

  dictionariesGetAllOkeiCodes(params?: DictionariesGetAllOkeiCodesParams): Observable<OkeiShort[]> {
    return this._api.dictionariesGetAllOkeiCodes(dictionariesGetAllOkeiCodesAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => okeiShortAdapter(item)))
    );
  }

  dictionariesGetCategory(params: DictionariesGetCategoryParams): Observable<CategoryWithChildren> {
    return this._api.dictionariesGetCategory(dictionariesGetCategoryAdapter(params)).pipe(
      map((res) => categoryWithChildrenAdapter(res?.data))
    );
  }

  dictionariesGetCategoryAsync1(params: DictionariesGetCategoryAsync1Params): Observable<Category[]> {
    return this._api.dictionariesGetCategoryAsync1(dictionariesGetCategoryAsync1Adapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => categoryAdapter(item)))
    );
  }

  dictionariesGetCategoryByParentCode(params: DictionariesGetCategoryByParentCodeParams): Observable<Category[]> {
    return this._api.dictionariesGetCategoryByParentCode(dictionariesGetCategoryByParentCodeAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => categoryAdapter(item)))
    );
  }

  dictionariesGetIndustries(params?: DictionariesGetIndustriesParams): Observable<Industry[]> {
    return this._api.dictionariesGetIndustries(dictionariesGetIndustriesAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => industryAdapter(item)))
    );
  }

  dictionariesGetKladrRegionListGet(params?: DictionariesGetKladrRegionListGetParams): Observable<KeyValuePairOfStringAndStringAlt[]> {
    return this._api.dictionariesGetKladrRegionListGet(dictionariesGetKladrRegionListGetAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => keyValuePairOfStringAndStringAltAdapter(item)))
    );
  }

  dictionariesGetKladrRegionListGet2(params: DictionariesGetKladrRegionListGet2Params): Observable<KeyValuePairOfStringAndStringAlt[]> {
    return this._api.dictionariesGetKladrRegionListGet2(dictionariesGetKladrRegionListGet2Adapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => keyValuePairOfStringAndStringAltAdapter(item)))
    );
  }

  dictionariesGetKladrRegionListPost(params?: DictionariesGetKladrRegionListPostParams): Observable<KeyValuePairOfStringAndStringAlt[]> {
    return this._api.dictionariesGetKladrRegionListPost(dictionariesGetKladrRegionListPostAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => keyValuePairOfStringAndStringAltAdapter(item)))
    );
  }

  dictionariesGetKsrAutocompleteListGet(params: DictionariesGetKsrAutocompleteListGetParams): Observable<KsrValueAlt[]> {
    return this._api.dictionariesGetKsrAutocompleteListGet(dictionariesGetKsrAutocompleteListGetAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => ksrValueAltAdapter(item)))
    );
  }

  dictionariesGetKsrAutocompleteListPost(params?: DictionariesGetKsrAutocompleteListPostParams): Observable<KsrValueAlt[]> {
    return this._api.dictionariesGetKsrAutocompleteListPost(dictionariesGetKsrAutocompleteListPostAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => ksrValueAltAdapter(item)))
    );
  }

  dictionariesGetKsrByCode(params: DictionariesGetKsrByCodeParams): Observable<KsrValueAlt> {
    return this._api.dictionariesGetKsrByCode(dictionariesGetKsrByCodeAdapter(params)).pipe(
      map((res) => ksrValueAltAdapter(res?.data))
    );
  }

  dictionariesGetKsrByParentCode(params: DictionariesGetKsrByParentCodeParams): Observable<KsrValueAlt[]> {
    return this._api.dictionariesGetKsrByParentCode(dictionariesGetKsrByParentCodeAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => ksrValueAltAdapter(item)))
    );
  }

  dictionariesGetKsrMainCategories(params?: DictionariesGetKsrMainCategoriesParams): Observable<KsrCategoryAlt[]> {
    return this._api.dictionariesGetKsrMainCategories(dictionariesGetKsrMainCategoriesAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => ksrCategoryAltAdapter(item)))
    );
  }

  dictionariesGetKtruByCode(params: DictionariesGetKtruByCodeParams): Observable<Ktru> {
    return this._api.dictionariesGetKtruByCode(dictionariesGetKtruByCodeAdapter(params)).pipe(
      map((res) => ktruAdapter(res?.data))
    );
  }

  dictionariesGetKtruByOkpd2(params: DictionariesGetKtruByOkpd2Params): Observable<PagedCollectionOfKtruShort> {
    return this._api.dictionariesGetKtruByOkpd2(dictionariesGetKtruByOkpd2Adapter(params)).pipe(
      map((res) => pagedCollectionOfKtruShortAdapter(res?.data))
    );
  }

  dictionariesGetOkdp2AutocompleteListGet(params: DictionariesGetOkdp2AutocompleteListGetParams): Observable<Okpd2ValueAlt[]> {
    return this._api.dictionariesGetOkdp2AutocompleteListGet(dictionariesGetOkdp2AutocompleteListGetAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => okpd2ValueAltAdapter(item)))
    );
  }

  dictionariesGetOkdp2AutocompleteListPost(params?: DictionariesGetOkdp2AutocompleteListPostParams): Observable<Okpd2ValueAlt[]> {
    return this._api.dictionariesGetOkdp2AutocompleteListPost(dictionariesGetOkdp2AutocompleteListPostAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => okpd2ValueAltAdapter(item)))
    );
  }

  dictionariesGetOkopfByCode(params: DictionariesGetOkopfByCodeParams): Observable<Okopf> {
    return this._api.dictionariesGetOkopfByCode(dictionariesGetOkopfByCodeAdapter(params)).pipe(
      map((res) => okopfAdapter(res?.data))
    );
  }

  dictionariesGetOkpd2ByCode(params: DictionariesGetOkpd2ByCodeParams): Observable<Okpd2ValueAlt> {
    return this._api.dictionariesGetOkpd2ByCode(dictionariesGetOkpd2ByCodeAdapter(params)).pipe(
      map((res) => okpd2ValueAltAdapter(res?.data))
    );
  }

  dictionariesGetOkpd2ByParentCode(params?: DictionariesGetOkpd2ByParentCodeParams): Observable<Okpd2ValueAlt[]> {
    return this._api.dictionariesGetOkpd2ByParentCode(dictionariesGetOkpd2ByParentCodeAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => okpd2ValueAltAdapter(item)))
    );
  }

  dictionariesGetOktmoByCode(params: DictionariesGetOktmoByCodeParams): Observable<MunicipalityOktmo> {
    return this._api.dictionariesGetOktmoByCode(dictionariesGetOktmoByCodeAdapter(params)).pipe(
      map((res) => municipalityOktmoAdapter(res?.data))
    );
  }

  dictionariesGetOkved2AutocompleteListGet(params: DictionariesGetOkved2AutocompleteListGetParams): Observable<Okved2ValueAlt[]> {
    return this._api.dictionariesGetOkved2AutocompleteListGet(dictionariesGetOkved2AutocompleteListGetAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => okved2ValueAltAdapter(item)))
    );
  }

  dictionariesGetOkved2AutocompleteListPost(params?: DictionariesGetOkved2AutocompleteListPostParams): Observable<Okved2ValueAlt[]> {
    return this._api.dictionariesGetOkved2AutocompleteListPost(dictionariesGetOkved2AutocompleteListPostAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => okved2ValueAltAdapter(item)))
    );
  }

  dictionariesGetOkved2ByCode(params: DictionariesGetOkved2ByCodeParams): Observable<Okved2ValueAlt> {
    return this._api.dictionariesGetOkved2ByCode(dictionariesGetOkved2ByCodeAdapter(params)).pipe(
      map((res) => okved2ValueAltAdapter(res?.data))
    );
  }

  dictionariesGetOkved2ByParentCode(params?: DictionariesGetOkved2ByParentCodeParams): Observable<Okved2ValueAlt[]> {
    return this._api.dictionariesGetOkved2ByParentCode(dictionariesGetOkved2ByParentCodeAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => okved2ValueAltAdapter(item)))
    );
  }

  dictionariesGetOrganizationCountries(params?: DictionariesGetOrganizationCountriesParams): Observable<OrganizationCountry[]> {
    return this._api.dictionariesGetOrganizationCountries(dictionariesGetOrganizationCountriesAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => organizationCountryAdapter(item)))
    );
  }

  dictionariesGetRegions(params?: DictionariesGetRegionsParams): Observable<Region[]> {
    return this._api.dictionariesGetRegions(dictionariesGetRegionsAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => regionAdapter(item)))
    );
  }

  dictionariesGetRegistries(params: DictionariesGetRegistriesParams): Observable<DictionaryItemAlt[]> {
    return this._api.dictionariesGetRegistries(dictionariesGetRegistriesAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => dictionaryItemAltAdapter(item)))
    );
  }

  dictionariesGetRegistryItemsAutocomplete(params: DictionariesGetRegistryItemsAutocompleteParams): Observable<Registry[]> {
    return this._api.dictionariesGetRegistryItemsAutocomplete(dictionariesGetRegistryItemsAutocompleteAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => registryAdapter(item)))
    );
  }

  dictionariesGetRootKsr(params?: DictionariesGetRootKsrParams): Observable<KsrValueAlt[]> {
    return this._api.dictionariesGetRootKsr(dictionariesGetRootKsrAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => ksrValueAltAdapter(item)))
    );
  }

  dictionariesSearchKtruByString(params: DictionariesSearchKtruByStringParams): Observable<PagedCollectionOfKtruShort> {
    return this._api.dictionariesSearchKtruByString(dictionariesSearchKtruByStringAdapter(params)).pipe(
      map((res) => pagedCollectionOfKtruShortAdapter(res?.data))
    );
  }

}
