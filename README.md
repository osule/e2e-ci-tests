# Setup E2E Tests in Github CI

The e2e workflow consists of 3 jobs:

- build-and-push-image-job

    This builds image from the directives in [Dockerfile](./Dockerfile) and pushes it to Github Container Registry.

    The image name is `ghcr.io/<github-repository-owner>/headless-browsers-node-14:latest`.

- test-job

    Tests are run in container spawn from the built image for the widgets.
