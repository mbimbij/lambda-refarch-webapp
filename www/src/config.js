// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "233q2orojsqr9gb3kem3aee883",     // CognitoClientID
  "api_base_url": "https://3rg0cmduvh.execute-api.eu-west-3.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-lambda-refarch-webapp.auth.eu-west-3.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d1crudp3djjgou.amplifyapp.com"                                      // AmplifyURL
};

export default config;
