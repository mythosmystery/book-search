import { gql } from '@apollo/client';
export const LOGIN_USER = gql`
   mutation login($email: String!, $password: String!) {
      login(email: $email, password: $password) {
         token
         user {
            _id
            username
            email
         }
      }
   }
`;
export const ADD_USER = gql`
   mutation addUser($username: String!, $email: String!, $password: String!) {
      addUser(username: $username, email: $email, password: $password) {
         token
         user {
            _id
            username
            email
         }
      }
   }
`;
export const SAVE_BOOK = gql`
   mutation saveBook($bookInput: BookInput!) {
      saveBook(bookInput: $bookInput) {
         _id
         username
         savedBooks {
            authors
            title
         }
      }
   }
`;
export const REMOVE_BOOK = gql`
   mutation removeBook($bookId: ID!) {
      removeBook(bookId: $bookId) {
         username
         savedBooks {
            title
            authors
         }
      }
   }
`;
