# Parcel Create React App

An opinionated setup of Parcel that works right out of the box! (Typescript + MobX)
@author Justin Hedani

## Pre-requisites

    Parcel (1.10.0)
    Yarn (1.10.1)

## Development

Develop projects locally with Parcel's dev server and HMR:

    $ git clone https://github.com/jkhedani/parcel-create-react-app.git my-awesome-proj
    $ cd my-awesome-proj
    $ cp .env.sample .env
    $ yarn
    $ yarn start

## Environmental Variables

The `create-react-app` script/package can't deal with simple things like making the changing of environmental variables and deployment locations easy so:
a) Modify .env.local for local env adjustments
b) edit the package the JSON when building for staging or production
c) Use a Parcel bootstrap for first

## Deployment

Deploy your static bundle using a Docker container:

    $ yarn build
    $ yarn docker:build
    $ yarn docker:tag
    $ yarn docker:deploy

## Deployment (AWS)

https://www.npmjs.com/package/serve

1. Create key pair in EC2 Console
2. Launch EC2 Instance and enable inbound traffic for HTTP
3. Update SSH line in package.json
4. Create ECS Registry and push Docker image up
5. SSH, install Docker:

   sudo yum update -y
   sudo yum install -y docker
   sudo usermod -a -G docker ec2-user
   (reboot ec2)
   sudo service docker start

6. Configure your EC2 instance to pull ECR images using user creds and serve:

   aws configure
   \$(aws ecr get-login --no-include-email --region us-west-2)
   docker pull 791906567261.dkr.ecr.us-west-2.amazonaws.com/parcel-bootstrap-ts:latest
   docker run -p 80:3000 791906567261.dkr.ecr.us-west-2.amazonaws.com/parcel-bootstrap-ts:latest

## IDE Config (VSCode)

_Prettier_

- Configuration in `.prettierrc` will override editor settings

_TSLint_

- Rules in `tslint.json` will be used
