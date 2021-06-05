# Setup E2E Tests in Github CI

The e2e workflow consists of 3 jobs:

- build-and-push-image-job

    This builds image from the directives in [Dockerfile](./Dockerfile) and pushes it to Github Container Registry.

    The image name is `ghcr.io/<github-repository-owner>/headless-browsers-node-14:latest`.

- test-job

    Tests are run in container spawn from the built image for the widgets.


# Running locally

1. Build the image

    ```bash
    docker build -t headless-browsers-node-14 .
    ```

2. Run the tests

    _Chromium_
    ```bash
    docker run -it -v $PWD:/usr/src/app --network sample headless-browsers-node-14 sh -c "yarn && npm run test:e2e:ci-chromium"
    ```

    _Firefox_
    ```bash
    docker run -it -v $PWD:/usr/src/app --network sample headless-browsers-node-14 sh -c "yarn && npm run test:e2e:ci-firefox"
    ```

# Issue running tests in Firefox headless

Firefox hangs when running in headless mode in the CI. This is not an issue on MacOS.
However it takes about 30 mins to complete running the tests.
See the `try_macos` branch for the Github Actions workflow configuration.
