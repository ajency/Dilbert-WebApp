import { SideBarData } from './summary-sidbar.data';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SummarySidebarService {
    private sidebarDataURL:"http://www.mocky.io/v2/594cf0d61100007a22a3d1d9";

    constructor(private http: Http) { }

    getSideBarData(currentDate: String): Promise<SideBarData> {
        return this.http.get(this.sidebarDataURL)
            .toPromise()
            .then(response => response.json().data as SideBarData)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}  