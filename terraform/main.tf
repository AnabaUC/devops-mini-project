module "eks" {
  source  = "terraform-aws-modules/eks/aws"
  version = "21.0.0"
  name    = var.cluster_name
  kubernetes_version = "1.33"
  enable_cluster_creator_admin_permissions = true
  endpoint_public_access = true
  addons = {
    coredns = {}
    eks-pod-identity-agent = {}
    kube-proxy = {}
    vpc-cni = {}
  }
  eks_managed_node_groups = {
    default = {
      instance_types = ["t3.small"]
      min_size = 2
      max_size = 3
      desired_size = 2
    }
  }
}
