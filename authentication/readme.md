# Authentication

- As user logged in we will give a token to them.
- that token will help the user to authenticate.
  - the token should be different for every client/user.
  - Token should be unique.
  - To implement this - JWT will help us. ( json web token )
  

# Important -
- header will contain the encryption algorithm and type of token.
- payload will contain some extra information by the help of which token is generated
- verifying signature will contain the secret key by the help of it token gets decrypted and use it for authrozation.
