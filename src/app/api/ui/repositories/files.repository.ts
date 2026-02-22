import { FileInfoForSign } from '../models/file-info-for-sign.interface';
import { fileInfoForSignAdapter } from '../adapters/models/file-info-for-sign.adapter';
import { FilesApiService } from '../../swagger/services/files-api.service';
import { FilesByUrlParams, filesByUrlAdapter } from './params/files-by-url.params';
import { FilesDownloadExternalParams, filesDownloadExternalAdapter } from './params/files-download-external.params';
import { FilesDownloadParams, filesDownloadAdapter } from './params/files-download.params';
import { FilesGetInfoForSignParams, filesGetInfoForSignAdapter } from './params/files-get-info-for-sign.params';
import { FilesGetInfosForSignParams, filesGetInfosForSignAdapter } from './params/files-get-infos-for-sign.params';
import { FilesUploadParams, filesUploadAdapter } from './params/files-upload.params';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FilesRepository {
  private readonly _api = inject(FilesApiService);

  filesByUrl(params?: FilesByUrlParams): Observable<Blob> {
    return this._api.filesByUrl(filesByUrlAdapter(params));
  }

  filesDownload(params: FilesDownloadParams): Observable<Blob> {
    return this._api.filesDownload(filesDownloadAdapter(params));
  }

  filesDownloadExternal(params: FilesDownloadExternalParams): Observable<Blob> {
    return this._api.filesDownloadExternal(filesDownloadExternalAdapter(params));
  }

  filesGetInfoForSign(params?: FilesGetInfoForSignParams): Observable<FileInfoForSign> {
    return this._api.filesGetInfoForSign(filesGetInfoForSignAdapter(params)).pipe(
      map((res) => fileInfoForSignAdapter(res?.data))
    );
  }

  filesGetInfosForSign(params?: FilesGetInfosForSignParams): Observable<FileInfoForSign[]> {
    return this._api.filesGetInfosForSign(filesGetInfosForSignAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => fileInfoForSignAdapter(item)))
    );
  }

  filesUpload(params?: FilesUploadParams): Observable<any> {
    return this._api.filesUpload(filesUploadAdapter(params));
  }

}
