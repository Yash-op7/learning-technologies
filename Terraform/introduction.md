# Introduction
- Terraform is an Infrastructure as code tool.
- Enables you to define, provision and manage infra resources such as servers, databases and networking components using a configuration language called HCL
- It can help automate and manage infra deployments, making it easier to maintain consistency, reduce manual errors.

# Key concepts:
- IaC: define infrastructure using code instead of manual configuration
- Providers: Terraform uses providers to interact with cloud platforms.
- Resources: Fundamental building blocks in Terraform, individual infra components, example: EC2 instances, S3 buckets, RDS databases, etc.
- State: Terraform maintains the state of your infrastructure in a file (`terraform.tfstate`). It tracks the current state of the resources so that Terraform can make decisons about creating, updating or deleting resources
- Modules: Reusable configurations that package related resources together, for example: a module might define a web server setup with an EC2 instance, an S3 bucket and security groups.
- Provisioners: used to execute scripts on a local/remote machine for resource creation or destruction. Help with bootstrapping infra such as runnign a script after an EC2 instance is launced.
- Variables and Outputs: variables allow you to parameterize configurations, making them flexible and reusable. Outputs are used to extract values from your Terraform configuration which can be used as input to other configurations or returned to user.

# How Terraforms Works:
1. Write configuration: You define your infra in `.tf` files using HCL.
2. Initialize Terraform:
    - `terraform init`
    - this command initiailizes the working dir, downloading necessary plugins ex AWS.
3. Plan Infra changes:
    - `terraform plan`
    - this command generates an execution plan showinh you what changes Terraform will make to your infra.
4. Apply changes:
    - `terraform apply`
    - this applies the changes described in the plan, it creates, updates or deletes resources as needed.
5. Destroy infra:
    - `terraform destroy`
    - Destroys the infra managed by your Terraform config, its useful for tearing down environments after testing.