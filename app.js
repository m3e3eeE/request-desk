const CONFIG = {
  sellerEmail: "hello.blis.ai@gmail.com",
  formEndpoint: "https://formsubmit.co/hello.blis.ai@gmail.com"
};

const form = document.getElementById("requestForm");
const statusEl = document.getElementById("status");
const copyButton = document.getElementById("copyButton");

form.action = CONFIG.formEndpoint;

form.addEventListener("submit", () => {
  statusEl.textContent = "Sending request...";
});

copyButton.addEventListener("click", async () => {
  const text = buildRequestText();
  try {
    await navigator.clipboard.writeText(text);
    statusEl.textContent = "Request copied. You can paste it into email or chat if sending fails.";
  } catch {
    statusEl.textContent = "Copy failed. Select the form text manually and send it to the seller.";
  }
});

function buildRequestText() {
  const data = new FormData(form);
  return [
    "New request",
    "",
    `Name: ${value(data, "name")}`,
    `Contact: ${value(data, "contact")}`,
    `Request: ${value(data, "item")}`,
    `Quantity: ${value(data, "quantity") || "Not specified"}`,
    `Needed by: ${value(data, "needed_by") || "Not specified"}`,
    "",
    "Notes:",
    value(data, "notes") || "No notes"
  ].join("\n");
}

function value(data, key) {
  return String(data.get(key) || "").trim();
}
