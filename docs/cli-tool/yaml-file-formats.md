# YAML File Formats
All store data is held in YAML files.


## catalog.yaml

Categories are organised into a hierarchy.

The `catalog.yaml` file contains a single root category from which all top level categories hang.

``` yaml
catalog:
  segment: spy
  name: Spy Shop
  categories:
```

The first `segment` entry of in `catalog` is a single entry and contains no leading `- ` prefix. Subsequent `segment` entries are listed off the `categories` section.

``` yaml
catalog:
  segment: spy
  name: Spy Shop
  categories:
    - segment: spy-cameras # first entry prefixed with leading - character
      name: Spy Cameras
    - segment: hidden-cameras # second entry also prefixed with lead - character
      name: Hidden Cameras
```

Leaf categories `spy-cameras` and `hidden-cameras` do not contain further `categories` entries.


A full example is shown below.

```yaml
catalog:
  segment: spy
  name: Spy Shop
  categories:
  - segment: spy-cameras # SPY CAMERAS
    name: Spy Cameras
    categories:
    - segment: hidden-cameras
      name: Disguised Cameras
    - segment: camera-recorder
      name: Camera Recorders
    - segment: systems
      name: Systems
  - segment: wireless-cctv # WIRELESS CCTV
    name: Wireless CCTV
    categories:
    - segment: portable-lcd-monitor
      name: CCTV with Monitor
    - segment: systems
      name: Systems
    - segment: cameras
      name: Cameras
    - segment: long-range-equipment
      name: Long Range Equipment
  - segment: cctv-systems # CCTV SYSTEMS
    name: Complete CCTV systems
    categories:
    - segment: coax-hd
      name: Coax HD
    - segment: network-ip
      name: Network IP
    - segment: 4k-cctv
      name: 4K CCTV
    - segment: vehicle-security
      name: Vehicle Security
  - segment: cctv-cameras # CCTV CAMERAS
    name: CCTV Cameras
    categories:
    - segment: coax-hd
      name: Coax HD
    - segment: network-ip
      name: Network IP
    - segment: 4k-cctv
      name: 4K CCTV
    - segment: thermal
      name: Thermal
  - segment: cctv-recorders # CCTV RECORDERS
    name: CCTV Recorders
    categories:
    - segment: dvrs
      name: Pro HD DVRs
    - segment: nvrs
      name: NVRs
    - segment: 4k-nvrs
      name: 4K NVRs
  - segment: wildlife-cameras # WILDLIFE CAMERAS
    name: Wildlife Cameras
    categories:
    - segment: bird-box-cameras
      name: Bird Box Cameras
    - segment: outdoor-nature-cameras
      name: Outdoor Nature Cameras
    - segment: farm-kits
      name: "Farm & Breeding Kits"
  - segment: accessories # ACCESSORIES
    name: Accessories
    categories:
    - segment: cables
      name: Cables
    - segment: networking
      name: Networking
    - segment: power-supplies
      name: Power Supplies
    - segment: connectors
      name: "Connectors & Adaptors"
    - segment: lenses
      name: lenses
    - segment: data-storage
      name: Data Storage
    - segment: cctv-accessories
      name: CCTV Accessories
  - segment: clearance # CLEARANCE
    name: Clearance
    categories:
    - segment: spy-cameras
      name: Spy Cameras
    - segment: cctv-cameras
      name: CCTV Cameras
    - segment: cctv-recorders
      name: Recorders
    - segment: wildlife-cameras
      name: Wildlife Cameras
    - segment: accessories
      name: Accessories
```

To load the catalog use the ecom CLI tool.

``` bash
ecom catalog apply catalog.yaml
```

## associations.yaml

An associations file starts with the `associations` keyword and contains a map of path -> product sku lists.

In the example below the first path is `spy/spy-cameras/hidden-cameras` and contains a list of two items `WATER-SKU` and `TV-SKU`. A list element is denoted by the `-` prefix.

The association paths `spy/spy-cameras/hidden-cameras` and `spy/accessories/power-supplies` can occur in any order and are nested inside the `associations` section.

```yaml
associations:
  spy/spy-cameras/hidden-cameras:
      - WATER-SKU
      - TV-SKU
  spy/accessories/power-supplies:
    products:
      - DESK-SKU
```

To load a set of catalog to product associations use the ecom CLI tool.

``` bash
ecom assocs apply assocations.yaml`
```

::: note
Before applying the `associations.yaml` file to the system you must first have created a catalog.
:::

## product.yaml

Products should be stored in the products directory. Each file matches the corrseponding product SKU with the `.yaml` exension. For example, the file below would be called `GT4TV2PIRGB.yaml` since it has `sku: GT4TV2PIRGB` entry.


```yaml
product:
  sku: GT4TV2PIRGB
  ean: "5060423073383"
  path: hd-spy-camera-1080p-tvi-hidden-security-camera-pir-sensor
  name: 1080p TVI HD Spy Camera Hidden in PIR Sensor
  images:
  - path: 5059.jpg
    title: 1080p TVI HD Spy Camera Hidden in PIR Sensor
  pricing:
  - tier_ref: default
    unit_price: 57.55
  content:
    meta:
      title: ""
      description: ""
    videos: []
    manuals:
    - 1463138389.pdf
    software: []
    description: |
      Looking for a professional quality security camera for monitoring
      a office, shop or house? This camera, when attached to the wall, will covertly
      record video without anyone noticing. Hiding a HD spy camera within a casing
      of a PIR sensor, the camera captures footage through a tiny pinhole on the front
      of the casing unbeknown to the unexpecting eye. When installed on the corner
      of a hallway or stockroom it looks like any other PIR sensor but this one enables
      you to monitor the room in 1080p HD
    specification:
      + Image Sensor: 1/2.9 SONY 2.4MP CMOS Sensor
      + Resolution: 1080p Full HD
      + Signal System: PAL / NTSC
```
