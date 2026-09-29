# DevOps Mini Project — Git → CI → Docker → EKS → Helm → GitOps → Ingress

A beginner-friendly project that demonstrates a real DevOps workflow.

## Flow
Developer → Git branch → Pull Request → GitHub Actions CI → Docker image → ECR → GitOps repo change → Argo CD → EKS → Helm → Deployment → Service → AWS ALB Ingress → App

## Git exercise
1. `git init`
2. commit initial website
3. create `dev` branch
4. change website
5. commit feature
6. merge `dev` into `main`
7. push to GitHub

## Local Docker
`docker build -t devops-mini-app:1.0 .`
`docker run --rm -p 3000:3000 devops-mini-app:1.0`
Open http://localhost:3000

## Kubernetes local test
`kubectl apply -f k8s/`
For EKS, replace the ECR image and use the Helm chart instead.

## EKS
From `terraform/`: `terraform init && terraform plan && terraform apply`
Then configure kubectl with AWS CLI.

## Helm
`helm upgrade --install devops-mini-app ./helm/devops-mini-app -n devops --create-namespace`

## GitOps
Argo CD watches the Git repository. Kubernetes desired state lives in Git. CI builds/tests the image; the deployment controller (Argo CD) reconciles the cluster from Git.

## Important production note
Do not put AWS access keys in GitHub secrets if you can use GitHub OIDC with an IAM role. Keep Terraform state in an encrypted, locked remote backend for team use.
