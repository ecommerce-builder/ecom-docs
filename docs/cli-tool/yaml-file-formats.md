# YAML File Formats
All store data is held in YAML files.

## catalog.yaml
```yaml
catalog:
  segment: spy
  name: Spy
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

## associations.yaml

```yaml
associations:
  - path: spy/spy-cameras/hidden-cameras
    products:
      - sku: WATER-SKU
  - path: spy/accessories/power-supplies
    products:
      - sku: DESK-SKU
```

## product.yaml
```yaml
product:
  sku: PH701
  ean: PH701-ean
  url: pinhole-wireless-nanny-hidden-camera
  name: Tiny Covert Wireless Pinhole Spy Camera with Receiver
```