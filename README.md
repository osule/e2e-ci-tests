# Setup E2E Tests in Github CI

There are two workflows in this project. 

- `first-widget.yml`
- `second-widget.yml`

Both workflows consists of 2 jobs:

- build-and-push-image-job

    This builds image from the directives in [Dockerfile](./Dockerfile) and pushes it to Google Artifact Registry.

    The image name is `<Your Repository URL>/e2e-test:latest`.

    Refer to [Step 6 in  the documentation on setting up repository in Artifact Registry](./SETUP-REPOSITORY.md) on where to find your Repository URL.

- test-job

    Tests for the widget in focus are run in container spawn from the built image for the widgets.


# Running locally

1. Build the image

    ```bash
    docker build -t <Your Repository URL>/e2e-test .
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

3. Push to Repository in Artifact Registry from local machine.
    
    - Login to your registory

    ```bash
    cat cloud-account-secret-key.json | docker login ghcr.io -u _json_key --password-stdin 
    ```
    `cloud-account-secret-key.json` should be the Service account key file.
    
     Refer to [Step 4 in  the documentation on setting up repository in Artifact Registry](./SETUP-REPOSITORY.md) on how to create this file.

    - Push to the repository

    ```bash
    docker push <Your Repository URL>/e2e-test
    ```