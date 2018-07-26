// import { Injectable } from "@angular/core";
// import { Observable } from "rxjs/Rx";
// import { environment } from "../../environments/environment";
// import { Http } from "@angular/http";

// @Injectable()
// export class AppConfig {
   
//    //config properties go here

//    load() {
//       return new Promise((resolve, reject) => {
//          var url = "assets/config/config.local.json";

//          if (environment.production) {
//             url = "assets/config/config.deploy.json";
//          }

//          this.http
//             .get(url)
//             .map((res: any) => res.json())
//             .catch((error: any) => {
//                console.log("Configuration file could not be read");
//                resolve(true);
//                return Observable.throw(error.json().error || "Server error");
//             })
//             .subscribe((envResponse: any) => {
//                //set the value of config properties here
//                environment.apiUrl = url;
//                debugger;

//                resolve(true);
//             });
//       });
//    }

//    constructor(private http: Http) {}
// }