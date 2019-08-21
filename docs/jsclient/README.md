---
sidebar: auto
---
# Ecom JavaScript Client SDK Library


## Installation

For Vue.js, React or Angular builds install the publicly hosted npm package into your local project.

The Ecom JavaScript Client library requires Google's Firebase Auth module.


Install the Firebase JavaScript SDK:


1. If you don't already have a `package.json` file, create one by running the following command from the root of your JavaScript project:

``` bash
npm init
```


2. Install the firebase npm package and save it to your `package.json` file by running:

``` bash
npm install --save firebase
```


3. Install the Ecom JavaScript client library and save it to your `package.json` file by running:

``` bash
npm i @ecommerce-builder/ecom-js-client
```


4. Import Firebase and Ecom Client modules:

``` javascript
// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase auth component
import 'firebase/auth';

// Add the Ecom Client library
import EcomClient from '@ecommerce-builder/ecom-js-client';
```


5. Initialize Firebase and the Ecom Client library in your app:

``` javascript
// TODO: Replace the following with your app's Firebase project configuration.
// Ask your system adminstrator for this.
const firebaseConfig = {
  // ...
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
```

## Authentication

The Ecom JavaScript Client library requires Google's Firebase Auth. Behind the scenes the Ecom client authenticates requests using JavaScript Web Tokens (JWTs).

The examples in this document use the more modern ES6 syntax with async/await.

###  Sign in existing customers
Create a form that allows existing customers to sign in using their email address and password. When a customer completes the form, call the `signInWithEmailAndPassword` method:

``` javascript
try {
  let userCredentials = await firebase.auth().signInWithEmailAndPassword(email, password);
} catch (error) {
  // Handle errors here
  let errorMessage = error.message;
  // ...
}
```


### Initiate an Ecom client.

Before you can interact with the Ecom API you must first initiate an Ecom client. The `endpoint` should be set to a the URL of your API (this will be given to you prior to building your site by the system administrator). The `imageBaseURL` should be the web root where your product images are hosted.


``` javascript
let client = new EcomClient({
  endpoint: 'https://open247-gae.appspot.com',
  imageBaseURL: 'https://images.your-shop-name.com'
});
```


For a more detailed explanation read the Firebase documentation for [`signInWithEmailAndPassword`](https://firebase.google.com/docs/reference/node/firebase.auth.Auth#sign-inwith-email-and-password).


### Set an authentication state observer and get customer data

For each of your app's pages that need information about the signed-in customer, attach an observer to the global authentication object. This observer gets called whenever the customer's sign-in state changes.

Attach the observer using the `onAuthStateChanged` method. When a customer successfully signs in, you can get information about the customer in the observer.


``` javascript
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // Customer is signed in.
    let displayName = user.displayName;
    let email = user.email;
    let uid = user.uid;

    // Inject the JWT into
    let jwt = user.getIdToken();
    client.setJWT(jwt);
  } else {
    // Customer is signed out.
    // ...
  }
});
```

## Catalog

Before you can interact with the catalog call the asyncronous `catalog.load()` method.


``` javascript
try {
  let catalog = client.createCatalog();
  await catalog.load();
} catch (error) {
  // Handle errors here
  let errorMessage = error.message;
  // ...
}
```

`catalog.load() retrieves the catalog hierarchy from the Ecom API and stores it internally as a tree structure onboard the Catalog instance. To retrieve the root `Category` call the `catalog.getRootCategory()` method.


``` javascript
let rootCategory = catalog.getRootCategory();
```

### Setup routing for your app

It's likely that you'll want to provide several different views on your site depending on the context. In the Ecom system products are attached only to bottom level categories (leaf nodes in tree terminology). A typical layout configuration consists of three views; product pages, product summary pages and category pages.


#### Category Pages

Category pages include all middle level categories in the catalog hierarchy excluding the root category and bottom level categories. They are typically used to display information about the sub-categories below them so the shopper can navigate further down the hierarchy.


``` javascript
let nonLeafCategories = catalog.getMidRangeCategories();

// returns an Array of objects
// nonLeafCategories = [
//   { segment: 'garden', path: 'flowers/garden', name: 'Garden Variety Flower' },
//   { segment: 'wall', path: 'flowers/wall', name: 'Wall Flowers' },
//   { ... }
// ]

// iterate the mid-range categories
nonLeafCategories.forEach(category => {
  // attach category.path to your router, mapping it to your Category page view
});
```


#### Product Summary Pages

Product summary pages show a row by row summary of products in a bottom level category. The initial display order is determined by the Ecom API.


``` javascript
let leafCategories = catalog.getBottomLevelCategories();

// returns an Array of objects
// leafCategories = [
//   { segment: 'lillies', path: 'flowers/garden/lillies', name: 'Lilly Flower' },
//   { segment: 'vines', path: 'flowers/wall/vines', name: 'Vine Flowers' },
//   { ... }
// ]

// iterate the bottom-level categories
leafCategories.forEach(category => {
  // attach category.path to your router, mapping it to your Product Summary page view
});
```


#### Product pages

Product pages display details of a specific product. They can be reached directly from an offsite link or by clicking on product on the product summary page.

To retrieve a list of all products use the `catalog.getAllProducts()` method. The list is pre-generated at the time `catalog.load()` is called. Duplicate products are removed. Iterate the list and attach the `path` value to your router in your chosen framework, for exampe Vuex Router for Vue.js routing it to your product page view layout.


``` javascript
let leafProducts = catalog.getAllProducts();

// leafProducts = [ {sku: 'FL402', path: 'flowers/garden/purple-lilly', name: 'Lilly flower'}, { ... } ]

// iterate the Array in a functional style using the built-in .forEach method
leafProducts.forEach(product => {
  // attach product.path to your router mapping it to your product page view
});

// alternative procedural style for iterating the list of products
for (let i = 0; i < leafProducts.length; i++) {
  let product = leafs[i];
  // attach product.path to your router mapping it to your product page view
}

```


## Products

``` javascript
let category = catalog.findCategoryByPath('flowers/garden/purple-lilly')`
category.products


```

## More Information

View the [source code for the Ecom JavaScript client library](https://github.com/ecommerce-builder/ecom-js-client) or find instructions for installing the [npm package](https://www.npmjs.com/package/@ecommerce-builder/ecom-js-client). The source code is written in Typescript and compiled to ES5. Common JS, ES Module packages are both available as well as UMD brower builds.

## Price Lists

Below are some examples using node.js from the command-line.

Set the `JWT` environment variable to a fresh JSON Web Token and set `ENDPOINT` to your API endpoint.

``` shell
export JWT=`ecom token show`
export ENDPOINT='http://localhost:8080'
```

Copy and paste the following code to `test.js` in a directory. Run `npm init -y` and install the necessary dependencies `npm install node-fetch @ecommerce-builder/ecom-js-client`


### Create a new price list

The `ecom.createPriceList(priceListCode: string, currencyCode: string, strategy: string, incTax: boolean, name: string, description: string)` method creates a new price list.

`currencyCode` should be set to a 3 character currency code `GBP`, `EUR` or `USD`.

`strategy` determines the price list strategy to use for evaluating the cart and order. It should be set to either `simple` for the basic pricing model, `volume` for Volume Pricing or `tiered` for the Tiered Pricing model.

`incTax` should be set to `false` to indicate that prices are stored excluding tax (e.g. VAT).

`name` and `description` are used to indentify the price list in the control panel.

``` javascript
//
// create-price-list.js
//
const token = process.env.JWT;
const endpoint = process.env.ENDPOINT;
const fetch = require('node-fetch');
global.fetch = fetch;

// setup client
EcomClient = require('@ecommerce-builder/ecom-js-client');

const ecom = new EcomClient({
  fetch,
  endpoint
});
ecom.setJWT(token);

(async () => {
  try {
    let priceList = await ecom.createPriceList('tradea', 'GBP', 'simple', false, 'Trade Price A', 'Entry trade prices');
    console.dir(priceList.toString());
  } catch (err) {
    if (err.code === 'price-list/price-list-code-taken') {
      console.log('The price_list_code "tradea" already exists');
      process.exit(1);
    }
    throw err;
  }
})();

```


### Get a price list

The `ecom.getPriceList(priceListId: string)` method retrieves a price list object.

``` javascript
//
// get-price-list.js
//
const token = process.env.JWT;
const endpoint = process.env.ENDPOINT;
const fetch = require('node-fetch');
global.fetch = fetch;

// setup client
EcomClient = require('@ecommerce-builder/ecom-js-client');

const ecom = new EcomClient({
  fetch,
  endpoint
});
ecom.setJWT(token);

(async () => {
  try {
    let priceList = await ecom.getPriceList('debfc117-9e78-40c5-b8f5-c16f2a1d5be5');
    console.dir(priceList);
  } catch (err) {
    throw err;
  }
})();
```


### Get a list of price lists

The `ecom.getPriceLists()` method returns a list of price list objects. Only administrator roles can call this method.

``` javascript
//
// get-price-lists.js
//
const token = process.env.JWT;
const endpoint = process.env.ENDPOINT;
const fetch = require('node-fetch');
global.fetch = fetch;

// setup client
EcomClient = require('@ecommerce-builder/ecom-js-client');

const ecom = new EcomClient({
  fetch,
  endpoint
});
ecom.setJWT(token);

(async () => {
  try {
    let priceLists = await ecom.getPriceLists();
    console.dir(priceLists);
  } catch (err) {
    throw err;
  }
})();
```


### Update a price list

To update a price list, first retrieve an existing price list object from the library.

Set the properties `priceListCode`, `currencyCode`, `strategy`, `name` and `description` before calling the `.save()` method on your price list object.

Only administrator roles can call this method.

``` javascript
//
// update-price-list.js
//
const token = process.env.JWT;
const endpoint = process.env.ENDPOINT;
const fetch = require('node-fetch');
global.fetch = fetch;

// setup client
EcomClient = require('@ecommerce-builder/ecom-js-client');

const ecom = new EcomClient({
  fetch,
  endpoint
});
ecom.setJWT(token);

(async () => {
  try {
    let priceList = await ecom.getPriceList('debfc117-9e78-40c5-b8f5-c16f2a1d5be5');
    console.dir(priceList);

    priceList.priceListCode = 'zray';
    priceList.strategy = 'volume';
    priceList.name = 'my name';
    priceList.incTax = true;
    priceList.currencyCode = 'GBP';
    priceList.description = 'my desc';
    await priceList.save();
    console.dir(priceList);
  } catch (err) {
    throw err;
  }
})();
```


### Delete a price list

Call the `.delete()` method directly on a price list object. After the call is successful the `priceListCode`, `strategy`, `name` and `description` properties are set to the empty string. `incTax` is set to `false` and the `created` and `modified` properties are set to the epoch date.

The deleted price list object should be discarded.

Only administrator roles can call this method.

``` javascript
//
// delete-price-list.js
//
const token = process.env.JWT;
const endpoint = process.env.ENDPOINT;
const fetch = require('node-fetch');
global.fetch = fetch;

// setup client
EcomClient = require('@ecommerce-builder/ecom-js-client');


const ecom = new EcomClient({
  fetch,
  endpoint
});
ecom.setJWT(token);

(async () => {
  try {
    let priceList = await ecom.getPriceList('debfc117-9e78-40c5-b8f5-c16f2a1d5be5');
    console.log(priceList.toString());
    await priceList.delete();
    console.log(priceList.toString());
  } catch (err) {
    if (err.code === 'price-list/price-list-in-use') {
      console.log('You cannot delete this price list as it is in use.');
      process.exit(1);
    }
    throw err;
  }
})();
```
