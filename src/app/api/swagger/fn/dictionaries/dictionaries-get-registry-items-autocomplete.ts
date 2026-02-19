/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ApiManufacturerCountryRegistryTypeEnum } from '../../models/api-manufacturer-country-registry-type-enum';
import { ApiMarketJsonResultOfIReadOnlyCollectionOfRegistryDto } from '../../models/api-market-json-result-of-i-read-only-collection-of-registry-dto';

export interface DictionariesGetRegistryItemsAutocomplete$Params {
  type: ApiManufacturerCountryRegistryTypeEnum;
  searchValue: string | null;
  maxReturnCount: number | null;
}

export function dictionariesGetRegistryItemsAutocomplete(http: HttpClient, rootUrl: string, params: DictionariesGetRegistryItemsAutocomplete$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIReadOnlyCollectionOfRegistryDto>> {
  const rb = new RequestBuilder(rootUrl, dictionariesGetRegistryItemsAutocomplete.PATH, 'get');
  if (params) {
    rb.path('type', params.type, {});
    rb.path('searchValue', params.searchValue, {});
    rb.path('maxReturnCount', params.maxReturnCount, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ApiMarketJsonResultOfIReadOnlyCollectionOfRegistryDto>;
    })
  );
}

dictionariesGetRegistryItemsAutocomplete.PATH = '/market/api/v1/dictionaries/registries/{type}/autocomplete/{searchValue}/maxReturnCount/{maxReturnCount}';
