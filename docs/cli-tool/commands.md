# Commands

Commands are organised into several groups; [catalog](#catalog), [associations](#associations), [products](#products) and system commands.


## Catalog
### catalog [command]
The `catalog` group of commands are used to manage the catalog hierarchy. Use subcommand [catalog apply](#catalog-apply) to replace the catalog hierarchy, [catalog get](#catalog-get) to get the existing catalog tree or [catalog purge](#catalog-purge) to purge the existing catalog hierarchy.


Without a subcommand, `catalog` will show a summary of available subcommands.

#### Example
``` bash
Catalog management

Usage:
  ecom catalog [command]

Available Commands:
  apply       Create or update the shop catalog.
  get         Get the catalog hierarchy
  purge       Purge the entire catalog

Flags:
  -h, --help   help for catalog

Use "ecom catalog [command] --help" for more information about a command.
```

### catalog get
Retrieve a tree view of the current catalog hierarchy.

#### Example
``` bash
$ ecom catalog get
Spy
├── Spy Cameras
│    ├── Disguised Cameras
│    ├── Camera Recorders
│    └── Systems
├── Wireless CCTV
│    ├── CCTV with Monitor
│    ├── Systems
│    ├── Cameras
│    └── Long Range Equipment
├── Complete CCTV systems
│    ├── Coax HD
│    ├── Network IP
│    ├── 4K CCTV
│    └── Vehicle Security
├── CCTV Cameras
│    ├── Coax HD
│    ├── Network IP
│    ├── 4K CCTV
│    └── Thermal
├── CCTV Recorders
│    ├── Pro HD DVRs
│    ├── NVRs
│    └── 4K NVRs
├── Wildlife Cameras
│    ├── Bird Box Cameras
│    ├── Outdoor Nature Cameras
│    └── Farm & Breeding Kits
├── Accessories
│    ├── Cables
│    ├── Networking
│    ├── Power Supplies
│    ├── Connectors & Adaptors
│    ├── lenses
│    ├── Data Storage
│    └── CCTV Accessories
└── Clearance
     ├── Spy Cameras
     ├── CCTV Cameras
     ├── Recorders
     ├── Wildlife Cameras
     └── Accessories
```


### catalog purge
Purges the existing catalog. You must purge the associations first before running this command. See the [assocs purge](#assocs-purge) command.


## Webhooks

### webhooks [command]
The `webhooks` group of commands are used to manage webhooks. Use the appropriate subcommand [webhooks create](#webhooks-create) to create a new webhook, [webhooks list](#webhooks-list) to list all webhooks, [webhooks get](#webhooks-get) to get details of an individual webhook, [webhooks update](#webhooks-update) to change the url, events or enabled flag of a webhook, or [webhooks delete](#webhook-delete) to delete a webhook.

``` bash
$ ecom webhooks
Webhooks Management

Usage:
  ecom webhooks [command]

Available Commands:
  create      Create a webhook
  delete      Delete webhook
  get         Get a webhook
  list        list webhooks
  update      Get a webhook

Flags:
  -h, --help   help for webhooks

Use "ecom webhooks [command] --help" for more information about a command.
```

## Associations


### assocs [command]
The `assocs` group of commands are used to manage catalog associations. Use the appropriate subcommand [assocs apply](#assocs-apply) to replace the associations with new, [assocs list](#assocs-list) to list the existing associations or [assocs purge](#assoc-purge) to purge all existing associations.

Run without a subcommand, `assocs` will show all available subcommands with a summary.


#### Example


``` bash
$ ecom assocs
Associations management

Usage:
  ecom assocs [command]

Available Commands:
  apply       Create or update an exising catalog association set.
  list        List all catalog associations
  purge       Purge all catalog associations

Flags:
  -h, --help   help for assocs

Use "ecom assocs [command] --help" for more information about a command.
```


### assocs apply &lt;associations.yaml&gt;


This command processes the associations YAML file from the local filesystem and assoicates the products to their destination categories.


### assocs purge


Purges the existing associations.


## Products


### products [command]


#### Example


``` bash
Products management

Usage:
  ecom products [command]

Available Commands:
  apply       Create or update an exising product
  delete      Delete product
  get         Get product

Flags:
  -h, --help   help for products

Use "ecom products [command] --help" for more information about a command.
```


### products apply &lt;product.yaml&gt;


### products delete &lt;sku&gt;


### products get &lt;sku&gt;
Retrieve product details for the product withthe specified SKU.


### version
Shows the version of the command line tool. To find out information about the API service use the [sysinfo](#sysinfo) command.


#### Example


``` bash
$ ecom version
v0.9.0
$

```


### sysinfo


Shows information about the running system including API version, backing Postgres database and Google project details.

This command is useful for administrators that wish to check the ecom system is configured correctly.


#### Example


``` bash
$ ecom sysinfo
API Service
-----------
Version      v0.34.1

Postgres
--------
Host         /cloudsql/open247-gae:europe-west2:open247-postgres
Port         5432
Database     ecom_dev
User         postgres
SSLMode      disable

Google
------
Project ID   test-data-spycameracctv
Web API Key  AIzaSyBGU4AnEHCOXKGkOtwXWyxOBaU3VSTg6wY

App
---
HTTP Port    8081
Root Email   andy+root@andyfusniak.com
```
