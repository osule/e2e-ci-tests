1. Enable Artifact Registry API for the project.

    https://console.cloud.google.com/apis/library/artifactregistry.googleapis.com?project=<project_id>

    ![Enable Artifact Registry API](./assets/enable-artifact-registry-api.png)

2. Create repository in Artifact Registry

    https://console.cloud.google.com/artifacts?folder=&organizationId=&project=<project_id>

    ![View Artifact Registry](./assets/view-artifact-registry.png)

    ![Create Artifact Repository](./assets/create-repository.png)


3. Create Service account

    https://console.cloud.google.com/iam-admin/serviceaccounts?project=<project_id>

    ![Create Service Account](./assets/create-service-account.png)

4. Create Service account key of JSON type and download the key file.

    ![Create Key for Service Account](./assets/create-key-for-service-account.png)


5. Add Service account to artifact repository with following role:

    - Artifact Registry Writer
    
    Select the checkbox by the repository name and click `Add  Members` button in `Permissions` tab from the right panel.

    Add the service account email and select the `Artifact Registry Writer` role.
    
    ![Add Service Account Member](./assets/add-service-account-member-in-repository.png)

    Then click `Save` button.

6. Click the repository name to reveal the images in the repository. 

    Then click the copy icon to copy the repository URL.

    ![Copy repository URL](./assets/copy-repository-url.png)


7. Set the copied URL in the workflow files.

    ![Set repository URL](./assets/set-repository-url-workflow-container.png)
    ![Set repository URL](./assets/set-repository-url-workflow-registry-1.png)
    ![Set repository URL](./assets/set-repository-url-workflow-registry-2.png)


8. Set Service account key file contents in Secrets for the project.

    The Secret Name is `GCLOUD_SERVICE_ACCOUNT_KEY_JSON`

    ![Set secret GCLOUD_SERVICE_ACCOUNT_KEY_JSON](./assets/set-secret-gcloud-service-account-key.png)

