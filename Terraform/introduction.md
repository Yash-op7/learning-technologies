# Introduction
- Terraform is an Infrastructure as code tool.
- Enables you to define, provision and manage infra resources such as servers, databases and networking components using a configuration language called HCL
- It can help automate and manage infra deployments, making it easier to maintain consistency, reduce manual errors.

# Key concepts:
- IaC: define infrastructure using code instead of manual configuration
- Providers: Terraform uses providers to interact with cloud platforms.
- Resources: Fundamental building blocks in Terraform, individual infra components, example: EC2 instances, S3 buckets, RDS databases, etc.
- State: Terraform maintains the state of your infrastructure in a file (`terraform.tfstate`). It tracks the current state of the resources so that Terraform can make decisons about creating, updating or deleting resources