# Getting Started


## Setting up the CLI Tool


### Introduction


Before you can use the Ecom CLI Tool you must setup a profile. A profile links the CLI tool to the Service API where your shop data is held. A profile consists of an Endpoint (a URL of the live Service API) and a Developer Key (a secret string of characters that acts as a substitute for a password).


You receive your Endpoint and Developer Key from your system administrator.


### Setup Steps

1. Download the command line tool binary for your PC or Mac. [See Installation](/cli-tool/installation.md).


2. Confirm the binary is correctly installed.


``` bash
$ ecom version
v0.9.0
```


3. Before you use the Ecom CLI tool for the first time you need to setup a new profile. A profile links your account to a particular shop's service endpoint.


``` bash
$ ecom profiles create
? Endpoint: https://open247-gae.appspot.com
? Developer Key: ********
```


::: tip TIP
Successful operations result in no warnings or error messages. This is the norm. You should only receieve additional ouput as a result of running the Ecom CLI Tool for non successful operations.
:::


::: tip NOTE
The Service Endpoint should be secure URL starting with `https://` given to your by your system administrator.
:::


4. Confirm your profile has been successfully added.


``` bash
Active  Endpoint                         Email                    Role   Dev Key
------  --------                         -----                    ----   -------
        https://open247-gae.appspot.com  jamie@open24seven.co.uk  admin  9VizP******
```

5. Select your project to begin.

``` bash
$ ecom profiles select
? Select a profile:  [Use arrows to move, type to filter]
> open247-gae_appspot_com-9vizpa (https://open247-gae.appspot.com jamie@open24seven.co.uk admin)
```

Press enter to select your project.

``` bash
? Select a profile: open247-gae_appspot_com-9vizpa (https://open247-gae.appspot.com jamie@open24seven.co.uk admin)
Profile "open247-gae_appspot_com-9vizpa" selected.
```

A confirmation line will appear. Run `ecom profiles list` to confirm your project has been selected.


``` bash
Active  Endpoint                         Email                    Role   Dev Key
------  --------                         -----                    ----   -------
  *     https://open247-gae.appspot.com  jamie@open24seven.co.uk  admin  9VizP******
```

::: tip NOTE
The current profile is shown with an asterix in the Active column.
:::

You have completed the Ecom CLI Tool Setup and can now set up your shop.


## Building your first shop



