import { adaptCategoryToUI } from '../adapters/toUI/category.adapter';
import { adaptCategoryWithChildrenToUI } from '../adapters/toUI/category-with-children.adapter';
import { adaptDictionaryItemAltToUI } from '../adapters/toUI/dictionary-item-alt.adapter';
import { adaptIndustryToUI } from '../adapters/toUI/industry.adapter';
import { adaptKeyValuePairOfStringAndStringAltToUI } from '../adapters/toUI/key-value-pair-of-string-and-string-alt.adapter';
import { adaptKsrCategoryAltToUI } from '../adapters/toUI/ksr-category-alt.adapter';
import { adaptKsrValueAltToUI } from '../adapters/toUI/ksr-value-alt.adapter';
import { adaptKtruToUI } from '../adapters/toUI/ktru.adapter';
import { adaptMunicipalityOktmoToUI } from '../adapters/toUI/municipality-oktmo.adapter';
import { adaptOkeiShortToUI } from '../adapters/toUI/okei-short.adapter';
import { adaptOkopfToUI } from '../adapters/toUI/okopf.adapter';
import { adaptOkpd2ValueAltToUI } from '../adapters/toUI/okpd-2-value-alt.adapter';
import { adaptOkved2ValueAltToUI } from '../adapters/toUI/okved-2-value-alt.adapter';
import { adaptOrganizationCountryToUI } from '../adapters/toUI/organization-country.adapter';
import { adaptPagedCollectionOfKtruShortToUI } from '../adapters/toUI/paged-collection-of-ktru-short.adapter';
import { adaptRegionToUI } from '../adapters/toUI/region.adapter';
import { adaptRegistryToUI } from '../adapters/toUI/registry.adapter';
import { Category } from '../models/category.interface';
import { CategoryWithChildren } from '../models/category-with-children.interface';
import { DictionariesApiService } from '../../swagger/services/dictionaries-api.service';
import { DictionariesGetAllOkeiCodesParams, dictionariesGetAllOkeiCodesParamsAdapter } from './params/dictionaries-get-all-okei-codes.params';
import { DictionariesGetCategoryAsync1Params, dictionariesGetCategoryAsync1ParamsAdapter } from './params/dictionaries-get-category-async-1.params';
import { DictionariesGetCategoryByParentCodeParams, dictionariesGetCategoryByParentCodeParamsAdapter } from './params/dictionaries-get-category-by-parent-code.params';
import { DictionariesGetCategoryParams, dictionariesGetCategoryParamsAdapter } from './params/dictionaries-get-category.params';
import { DictionariesGetIndustriesParams, dictionariesGetIndustriesParamsAdapter } from './params/dictionaries-get-industries.params';
import { DictionariesGetKladrRegionListGet2Params, dictionariesGetKladrRegionListGet2ParamsAdapter } from './params/dictionaries-get-kladr-region-list-get-2.params';
import { DictionariesGetKladrRegionListGetParams, dictionariesGetKladrRegionListGetParamsAdapter } from './params/dictionaries-get-kladr-region-list-get.params';
import { DictionariesGetKladrRegionListPostParams, dictionariesGetKladrRegionListPostParamsAdapter } from './params/dictionaries-get-kladr-region-list-post.params';
import { DictionariesGetKsrAutocompleteListGetParams, dictionariesGetKsrAutocompleteListGetParamsAdapter } from './params/dictionaries-get-ksr-autocomplete-list-get.params';
import { DictionariesGetKsrAutocompleteListPostParams, dictionariesGetKsrAutocompleteListPostParamsAdapter } from './params/dictionaries-get-ksr-autocomplete-list-post.params';
import { DictionariesGetKsrByCodeParams, dictionariesGetKsrByCodeParamsAdapter } from './params/dictionaries-get-ksr-by-code.params';
import { DictionariesGetKsrByParentCodeParams, dictionariesGetKsrByParentCodeParamsAdapter } from './params/dictionaries-get-ksr-by-parent-code.params';
import { DictionariesGetKsrMainCategoriesParams, dictionariesGetKsrMainCategoriesParamsAdapter } from './params/dictionaries-get-ksr-main-categories.params';
import { DictionariesGetKtruByCodeParams, dictionariesGetKtruByCodeParamsAdapter } from './params/dictionaries-get-ktru-by-code.params';
import { DictionariesGetKtruByOkpd2Params, dictionariesGetKtruByOkpd2ParamsAdapter } from './params/dictionaries-get-ktru-by-okpd-2.params';
import { DictionariesGetOkdp2AutocompleteListGetParams, dictionariesGetOkdp2AutocompleteListGetParamsAdapter } from './params/dictionaries-get-okdp-2-autocomplete-list-get.params';
import { DictionariesGetOkdp2AutocompleteListPostParams, dictionariesGetOkdp2AutocompleteListPostParamsAdapter } from './params/dictionaries-get-okdp-2-autocomplete-list-post.params';
import { DictionariesGetOkopfByCodeParams, dictionariesGetOkopfByCodeParamsAdapter } from './params/dictionaries-get-okopf-by-code.params';
import { DictionariesGetOkpd2ByCodeParams, dictionariesGetOkpd2ByCodeParamsAdapter } from './params/dictionaries-get-okpd-2-by-code.params';
import { DictionariesGetOkpd2ByParentCodeParams, dictionariesGetOkpd2ByParentCodeParamsAdapter } from './params/dictionaries-get-okpd-2-by-parent-code.params';
import { DictionariesGetOktmoByCodeParams, dictionariesGetOktmoByCodeParamsAdapter } from './params/dictionaries-get-oktmo-by-code.params';
import { DictionariesGetOkved2AutocompleteListGetParams, dictionariesGetOkved2AutocompleteListGetParamsAdapter } from './params/dictionaries-get-okved-2-autocomplete-list-get.params';
import { DictionariesGetOkved2AutocompleteListPostParams, dictionariesGetOkved2AutocompleteListPostParamsAdapter } from './params/dictionaries-get-okved-2-autocomplete-list-post.params';
import { DictionariesGetOkved2ByCodeParams, dictionariesGetOkved2ByCodeParamsAdapter } from './params/dictionaries-get-okved-2-by-code.params';
import { DictionariesGetOkved2ByParentCodeParams, dictionariesGetOkved2ByParentCodeParamsAdapter } from './params/dictionaries-get-okved-2-by-parent-code.params';
import { DictionariesGetOrganizationCountriesParams, dictionariesGetOrganizationCountriesParamsAdapter } from './params/dictionaries-get-organization-countries.params';
import { DictionariesGetRegionsParams, dictionariesGetRegionsParamsAdapter } from './params/dictionaries-get-regions.params';
import { DictionariesGetRegistriesParams, dictionariesGetRegistriesParamsAdapter } from './params/dictionaries-get-registries.params';
import { DictionariesGetRegistryItemsAutocompleteParams, dictionariesGetRegistryItemsAutocompleteParamsAdapter } from './params/dictionaries-get-registry-items-autocomplete.params';
import { DictionariesGetRootKsrParams, dictionariesGetRootKsrParamsAdapter } from './params/dictionaries-get-root-ksr.params';
import { DictionariesSearchKtruByStringParams, dictionariesSearchKtruByStringParamsAdapter } from './params/dictionaries-search-ktru-by-string.params';
import { DictionaryItemAlt } from '../models/dictionary-item-alt.interface';
import { Industry } from '../models/industry.interface';
import { Injectable, inject } from '@angular/core';
import { KeyValuePairOfStringAndStringAlt } from '../models/key-value-pair-of-string-and-string-alt.interface';
import { KsrCategoryAlt } from '../models/ksr-category-alt.interface';
import { KsrValueAlt } from '../models/ksr-value-alt.interface';
import { Ktru } from '../models/ktru.interface';
import { map } from 'rxjs/operators';
import { MunicipalityOktmo } from '../models/municipality-oktmo.interface';
import { Observable } from 'rxjs';
import { OkeiShort } from '../models/okei-short.interface';
import { Okopf } from '../models/okopf.interface';
import { Okpd2ValueAlt } from '../models/okpd-2-value-alt.interface';
import { Okved2ValueAlt } from '../models/okved-2-value-alt.interface';
import { OrganizationCountry } from '../models/organization-country.interface';
import { PagedCollectionOfKtruShort } from '../models/paged-collection-of-ktru-short.interface';
import { Region } from '../models/region.interface';
import { Registry } from '../models/registry.interface';

@Injectable({ providedIn: 'root' })
export class DictionariesRepository {
  private readonly _api = inject(DictionariesApiService);

  dictionariesGetAllOkeiCodes(params?: DictionariesGetAllOkeiCodesParams): Observable<OkeiShort[]> {
    return this._api.dictionariesGetAllOkeiCodes(dictionariesGetAllOkeiCodesParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptOkeiShortToUI(item)))
    );
  }

  dictionariesGetCategory(params: DictionariesGetCategoryParams): Observable<CategoryWithChildren> {
    return this._api.dictionariesGetCategory(dictionariesGetCategoryParamsAdapter.adapt(params)).pipe(
      map((res) => adaptCategoryWithChildrenToUI(res?.data))
    );
  }

  dictionariesGetCategoryAsync1(params: DictionariesGetCategoryAsync1Params): Observable<Category[]> {
    return this._api.dictionariesGetCategoryAsync1(dictionariesGetCategoryAsync1ParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptCategoryToUI(item)))
    );
  }

  dictionariesGetCategoryByParentCode(params: DictionariesGetCategoryByParentCodeParams): Observable<Category[]> {
    return this._api.dictionariesGetCategoryByParentCode(dictionariesGetCategoryByParentCodeParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptCategoryToUI(item)))
    );
  }

  dictionariesGetIndustries(params?: DictionariesGetIndustriesParams): Observable<Industry[]> {
    return this._api.dictionariesGetIndustries(dictionariesGetIndustriesParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptIndustryToUI(item)))
    );
  }

  dictionariesGetKladrRegionListGet(params?: DictionariesGetKladrRegionListGetParams): Observable<KeyValuePairOfStringAndStringAlt[]> {
    return this._api.dictionariesGetKladrRegionListGet(dictionariesGetKladrRegionListGetParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptKeyValuePairOfStringAndStringAltToUI(item)))
    );
  }

  dictionariesGetKladrRegionListGet2(params: DictionariesGetKladrRegionListGet2Params): Observable<KeyValuePairOfStringAndStringAlt[]> {
    return this._api.dictionariesGetKladrRegionListGet2(dictionariesGetKladrRegionListGet2ParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptKeyValuePairOfStringAndStringAltToUI(item)))
    );
  }

  dictionariesGetKladrRegionListPost(params?: DictionariesGetKladrRegionListPostParams): Observable<KeyValuePairOfStringAndStringAlt[]> {
    return this._api.dictionariesGetKladrRegionListPost(dictionariesGetKladrRegionListPostParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptKeyValuePairOfStringAndStringAltToUI(item)))
    );
  }

  dictionariesGetKsrAutocompleteListGet(params: DictionariesGetKsrAutocompleteListGetParams): Observable<KsrValueAlt[]> {
    return this._api.dictionariesGetKsrAutocompleteListGet(dictionariesGetKsrAutocompleteListGetParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptKsrValueAltToUI(item)))
    );
  }

  dictionariesGetKsrAutocompleteListPost(params?: DictionariesGetKsrAutocompleteListPostParams): Observable<KsrValueAlt[]> {
    return this._api.dictionariesGetKsrAutocompleteListPost(dictionariesGetKsrAutocompleteListPostParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptKsrValueAltToUI(item)))
    );
  }

  dictionariesGetKsrByCode(params: DictionariesGetKsrByCodeParams): Observable<KsrValueAlt> {
    return this._api.dictionariesGetKsrByCode(dictionariesGetKsrByCodeParamsAdapter.adapt(params)).pipe(
      map((res) => adaptKsrValueAltToUI(res?.data))
    );
  }

  dictionariesGetKsrByParentCode(params: DictionariesGetKsrByParentCodeParams): Observable<KsrValueAlt[]> {
    return this._api.dictionariesGetKsrByParentCode(dictionariesGetKsrByParentCodeParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptKsrValueAltToUI(item)))
    );
  }

  dictionariesGetKsrMainCategories(params?: DictionariesGetKsrMainCategoriesParams): Observable<KsrCategoryAlt[]> {
    return this._api.dictionariesGetKsrMainCategories(dictionariesGetKsrMainCategoriesParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptKsrCategoryAltToUI(item)))
    );
  }

  dictionariesGetKtruByCode(params: DictionariesGetKtruByCodeParams): Observable<Ktru> {
    return this._api.dictionariesGetKtruByCode(dictionariesGetKtruByCodeParamsAdapter.adapt(params)).pipe(
      map((res) => adaptKtruToUI(res?.data))
    );
  }

  dictionariesGetKtruByOkpd2(params: DictionariesGetKtruByOkpd2Params): Observable<PagedCollectionOfKtruShort> {
    return this._api.dictionariesGetKtruByOkpd2(dictionariesGetKtruByOkpd2ParamsAdapter.adapt(params)).pipe(
      map((res) => adaptPagedCollectionOfKtruShortToUI(res?.data))
    );
  }

  dictionariesGetOkdp2AutocompleteListGet(params: DictionariesGetOkdp2AutocompleteListGetParams): Observable<Okpd2ValueAlt[]> {
    return this._api.dictionariesGetOkdp2AutocompleteListGet(dictionariesGetOkdp2AutocompleteListGetParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptOkpd2ValueAltToUI(item)))
    );
  }

  dictionariesGetOkdp2AutocompleteListPost(params?: DictionariesGetOkdp2AutocompleteListPostParams): Observable<Okpd2ValueAlt[]> {
    return this._api.dictionariesGetOkdp2AutocompleteListPost(dictionariesGetOkdp2AutocompleteListPostParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptOkpd2ValueAltToUI(item)))
    );
  }

  dictionariesGetOkopfByCode(params: DictionariesGetOkopfByCodeParams): Observable<Okopf> {
    return this._api.dictionariesGetOkopfByCode(dictionariesGetOkopfByCodeParamsAdapter.adapt(params)).pipe(
      map((res) => adaptOkopfToUI(res?.data))
    );
  }

  dictionariesGetOkpd2ByCode(params: DictionariesGetOkpd2ByCodeParams): Observable<Okpd2ValueAlt> {
    return this._api.dictionariesGetOkpd2ByCode(dictionariesGetOkpd2ByCodeParamsAdapter.adapt(params)).pipe(
      map((res) => adaptOkpd2ValueAltToUI(res?.data))
    );
  }

  dictionariesGetOkpd2ByParentCode(params?: DictionariesGetOkpd2ByParentCodeParams): Observable<Okpd2ValueAlt[]> {
    return this._api.dictionariesGetOkpd2ByParentCode(dictionariesGetOkpd2ByParentCodeParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptOkpd2ValueAltToUI(item)))
    );
  }

  dictionariesGetOktmoByCode(params: DictionariesGetOktmoByCodeParams): Observable<MunicipalityOktmo> {
    return this._api.dictionariesGetOktmoByCode(dictionariesGetOktmoByCodeParamsAdapter.adapt(params)).pipe(
      map((res) => adaptMunicipalityOktmoToUI(res?.data))
    );
  }

  dictionariesGetOkved2AutocompleteListGet(params: DictionariesGetOkved2AutocompleteListGetParams): Observable<Okved2ValueAlt[]> {
    return this._api.dictionariesGetOkved2AutocompleteListGet(dictionariesGetOkved2AutocompleteListGetParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptOkved2ValueAltToUI(item)))
    );
  }

  dictionariesGetOkved2AutocompleteListPost(params?: DictionariesGetOkved2AutocompleteListPostParams): Observable<Okved2ValueAlt[]> {
    return this._api.dictionariesGetOkved2AutocompleteListPost(dictionariesGetOkved2AutocompleteListPostParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptOkved2ValueAltToUI(item)))
    );
  }

  dictionariesGetOkved2ByCode(params: DictionariesGetOkved2ByCodeParams): Observable<Okved2ValueAlt> {
    return this._api.dictionariesGetOkved2ByCode(dictionariesGetOkved2ByCodeParamsAdapter.adapt(params)).pipe(
      map((res) => adaptOkved2ValueAltToUI(res?.data))
    );
  }

  dictionariesGetOkved2ByParentCode(params?: DictionariesGetOkved2ByParentCodeParams): Observable<Okved2ValueAlt[]> {
    return this._api.dictionariesGetOkved2ByParentCode(dictionariesGetOkved2ByParentCodeParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptOkved2ValueAltToUI(item)))
    );
  }

  dictionariesGetOrganizationCountries(params?: DictionariesGetOrganizationCountriesParams): Observable<OrganizationCountry[]> {
    return this._api.dictionariesGetOrganizationCountries(dictionariesGetOrganizationCountriesParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptOrganizationCountryToUI(item)))
    );
  }

  dictionariesGetRegions(params?: DictionariesGetRegionsParams): Observable<Region[]> {
    return this._api.dictionariesGetRegions(dictionariesGetRegionsParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptRegionToUI(item)))
    );
  }

  dictionariesGetRegistries(params: DictionariesGetRegistriesParams): Observable<DictionaryItemAlt[]> {
    return this._api.dictionariesGetRegistries(dictionariesGetRegistriesParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptDictionaryItemAltToUI(item)))
    );
  }

  dictionariesGetRegistryItemsAutocomplete(params: DictionariesGetRegistryItemsAutocompleteParams): Observable<Registry[]> {
    return this._api.dictionariesGetRegistryItemsAutocomplete(dictionariesGetRegistryItemsAutocompleteParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptRegistryToUI(item)))
    );
  }

  dictionariesGetRootKsr(params?: DictionariesGetRootKsrParams): Observable<KsrValueAlt[]> {
    return this._api.dictionariesGetRootKsr(dictionariesGetRootKsrParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptKsrValueAltToUI(item)))
    );
  }

  dictionariesSearchKtruByString(params: DictionariesSearchKtruByStringParams): Observable<PagedCollectionOfKtruShort> {
    return this._api.dictionariesSearchKtruByString(dictionariesSearchKtruByStringParamsAdapter.adapt(params)).pipe(
      map((res) => adaptPagedCollectionOfKtruShortToUI(res?.data))
    );
  }

}
