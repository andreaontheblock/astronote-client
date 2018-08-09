// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/',

  mapbox: {
    accessToken: 'pk.eyJ1IjoiYW5kcmVhb250aGVibG9jayIsImEiOiJjamtsMW04YjIxZGluM3BwMDY5MGR3YmZ1In0.USeB0wgXa0wu47T41CpBlA'

  }
};



/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
