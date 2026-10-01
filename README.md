# Request Desk

A tiny request-only intake site for a small seller. It is designed for GitHub Pages and phones.

## What It Does

- Customers submit a request.
- No payment is taken.
- The seller checks availability and replies manually.
- Requests currently submit through FormSubmit to `hello.blis.ai@gmail.com`.

The first real submission to FormSubmit may send an activation email to the seller address.

## Change Seller Email

Edit `config.js`:

```js
window.REQUEST_DESK_CONFIG = {
  sellerEmail: "seller@example.com"
};
```

The first submission to a new email address may trigger a FormSubmit activation
email. Open that inbox and click the activation link before using the form for
real requests.

## Run Locally

Open `index.html`, or run:

```sh
python3 -m http.server 8080
```
