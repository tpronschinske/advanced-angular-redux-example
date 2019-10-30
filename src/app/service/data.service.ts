import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Injectable()
export class DataService {

  private apiUrl: string = 'http://northwind.cooneycreative.net';

  constructor(private http: HttpClient) {
  }

	/**
	 * Sets Global Header For All Calls To API
	 *
	 */
  private setHeaders() {
    var headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('Accept', 'application/json');
    return headers;
  }

	/**
	 * Sends a Get Request
	 *
	 */
  getRequest(apiRoute: any) {
    return this.http.get(this.apiUrl + apiRoute, {
      headers: this.setHeaders(),
    });
  }


	/**
	 * Sends a Post Request
	 *
	 */
  postRequest(data: any, apiRoute: any) {
    const body = data;
    return this.http.post(this.apiUrl + apiRoute, body, {
      headers: this.setHeaders(),
    });
  }


	/**
	 * Sends a Put Request
	 *
	 */
  putRequest(data: any, apiRoute: any) {
    const body = data;

    return this.http.put(this.apiUrl + apiRoute, body, {
      headers: this.setHeaders(),
    });
  }

	/**
	 * Sends a Delete Request
	 *
	 */
  deleteRequest(apiRoute: any) {
    return this.http.delete(this.apiUrl + apiRoute, {
      headers: this.setHeaders(),
    });
  }


}
