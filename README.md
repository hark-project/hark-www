# hark-doc

This repository contains the source for the hark website:

<https://hark-project.net/>

## Compiling the Site

First, install [Hugo](https://gohugo.io/). For OSX:

	brew update && brew install hugo

## Uploading a Build

Just run:

	dpkg-buildpackage -us -uc -b

build-depends includes `hugo`, which is not in Debian. Install the `.deb` from [here](https://github.com/spf13/hugo/releases).
