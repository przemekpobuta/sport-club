import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injector } from '@angular/core';
import { Observable } from 'rxjs';

interface RestServiceInterface<T, ID> {
  getAll(): Observable<T[]>;
  post(item: T): Observable<T>;
  get(id: ID): Observable<T>;
  put(id: ID, item: T): Observable<T>;
  delete(id: ID): Observable<T>;
}

interface RestResource {
  module: string;
}

export class RestService<T, ID = number>
  implements RestServiceInterface<T, ID> {
  protected _httpClient: HttpClient;

  constructor(
    protected _injector: Injector,
    protected _serviceConfiguration: RestResource
  ) {
    this._httpClient = _injector.get(HttpClient);
    console.log('Resource endpoint URL:', this.generateEndpointUrl());
  }

  post(
    item: Partial<T> | FormData,
    contentType = 'application/json'
  ): Observable<T> {
    this.logRequest('post', item);
    if (item instanceof FormData) {
      return this._httpClient.post<T>(`${this.generateEndpointUrl()}`, item);
    }

    return this._httpClient.post<T>(`${this.generateEndpointUrl()}`, item, {
      headers: new HttpHeaders().set('Content-Type', contentType)
    });
  }

  get(id: ID): Observable<T> {
    this.logRequest('get', id);
    return this._httpClient.get<T>(`${this.generateEndpointUrl()}/${id}`);
  }

  put(id: ID, item: Partial<T>): Observable<T> {
    this.logRequest('put', { id, item });
    return this._httpClient.put<T>(`${this.generateEndpointUrl()}/${id}`, item);
  }

  delete(id: ID): Observable<T> {
    this.logRequest('delete', id);
    return this._httpClient.delete<T>(`${this.generateEndpointUrl()}/${id}`);
  }

  getAll(): Observable<T[]> {
    this.logRequest('getAll');
    return this._httpClient.get<T[]>(`${this.generateEndpointUrl()}`);
  }

  protected generateEndpointUrl(): string {
    return `/api/${this._serviceConfiguration.module}`;
  }

  protected logRequest(method?: string, message?: any): void {
    console.log(
      `RestService [${this._serviceConfiguration.module}] ${method} `,
      message
    );
  }
}
