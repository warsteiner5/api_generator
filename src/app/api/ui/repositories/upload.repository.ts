import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { UploadApiService } from '../../swagger/services/upload-api.service';
import { UploadByUrlParams, uploadByUrlAdapter } from './params/upload-by-url.params';
import { UploadGetParams, uploadGetAdapter } from './params/upload-get.params';
import { UploadPostParams, uploadPostAdapter } from './params/upload-post.params';
import { UploadPutParams, uploadPutAdapter } from './params/upload-put.params';

@Injectable({ providedIn: 'root' })
export class UploadRepository {
  private readonly _api = inject(UploadApiService);

  uploadByUrl(params?: UploadByUrlParams): Observable<Blob> {
    return this._api.uploadByUrl(uploadByUrlAdapter(params));
  }

  uploadGet(params?: UploadGetParams): Observable<Blob> {
    return this._api.uploadGet(uploadGetAdapter(params));
  }

  uploadPost(params?: UploadPostParams): Observable<Blob> {
    return this._api.uploadPost(uploadPostAdapter(params));
  }

  uploadPut(params?: UploadPutParams): Observable<Blob> {
    return this._api.uploadPut(uploadPutAdapter(params));
  }

}
