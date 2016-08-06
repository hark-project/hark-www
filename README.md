# hark-doc

This repository contains the source for the hark website:

<https://hark-project.net/>

## Compiling the Site

First, install [Hugo](https://gohugo.io/). For OSX:

	brew update && brew install hugo

## Uploading a Build

Run a build with a version:

	./scripts/build.sh $version

Upload to the bucket:

	./scripts/build.sh hark-www-$version.tar.gz

	export AWS_PROFILE=CeraInfraDeployUpload
	aws s3 cp $artifact s3://cera-infra/deploy/hark-www/
