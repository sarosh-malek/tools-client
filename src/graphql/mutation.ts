import { gql } from '@apollo/client';
export const GET_USER = gql`
  mutation LoginUser($password: String!, $userNameOrEmail: String!) {
    loginUser(password: $password, userNameOrEmail: $userNameOrEmail) {
      errors {
        field
        message
      }
      user {
        userName
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation RegisterNewUser(
    $password: String!
    $email: String!
    $userName: String!
  ) {
    registerNewUser(password: $password, Email: $email, userName: $userName) {
      user {
        userName
      }
      errors {
        message
      }
    }
  }
`;
