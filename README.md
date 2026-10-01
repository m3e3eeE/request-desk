# Request Desk

A tiny request-only intake site for a small seller. It is designed for GitHub Pages and phones.

## What It Does

- Customers submit a request.
- No payment is taken.
- The seller checks availability and replies manually.
- Requests currently submit through FormSubmit to `hello.blis.ai@gmail.com`.

The first real submission to FormSubmit may send an activation email to the seller address.

## Change Seller Email

Edit `app.js`:

```js
sellerEmail: "seller@example.com",
formEndpoint: "https://formsubmit.co/seller@example.com"
```

## Run Locally

Open `index.html`, or run:

```sh
python3 -m http.server 8080
```
