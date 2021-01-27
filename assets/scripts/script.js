'use strict';
// (() => {
    import * as shopService from './services/shopService';
    // import {ConstantsModule} from './constantsModule';
   // import {ProductModule} from './models/productModule';
   // import {ShopModule} from './models/shopModule';
   // import {ProductShopModule} from './models/productShopModule';


    document.addEventListener("DOMContentLoaded", function (event) {

        //достать данные
        //отрендарить

        shopService.getAll(function (data) {
            debugger
            // ShopApp.MakeupManager.MakeupCreator.createShopsTable(data);
        });
    });


// })();



// <script type="module" src="../scripts/services/shopService.js"></script>
