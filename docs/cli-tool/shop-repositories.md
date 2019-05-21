# Shop Repositories


## Overview
At a minimum a shop consists of one or more products, a catalog and an associations file. The catalog are associations are maintained in individual YAML files with a `.yaml` file extension, `catalog.yaml` and `associations.yaml`. Products are typically stored with a filename matching their corresponding SKU, for example `PH701.yaml` or `DIG123.yaml` and so on.

As your shop grows it becomes more important to keep the related files grouped consistently. This section details the expect repository layout.

## Structure

The `catalog.yaml` and `associations.yaml` files live in the root directory of the repository and must be named as such.

All product YAML files are held in a directory named `products` within the root directory. The `README.md` is optional and can be used for your own purposes.

```sh
.
├── associations.yaml
├── catalog
│   └── spy:spy-cameras:hidden-cameras.yaml
├── catalog.yaml
├── images
├── products
│   ├── 1DIGLAN1005.yaml
│   ├── GTIP2PHWFGB.yaml
│   ├── PH701.yaml
│   └── PHC701.yaml
└── README.md
```

::: warning
Make sure to name the catalog and associations files exactly as `catalog.yaml` and `associations.yaml` respectively.

Although the ecom command line tool can operate on individual files of any filename, when working on repositories it expects to filename to be named exactly as indicated, including its position in the file hierarchy.
:::
