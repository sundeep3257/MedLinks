/**
 * Site configuration (safe to commit).
 *
 * === Google Analytics 4 setup ===
 * 1. Go to https://analytics.google.com/ → Admin → Create Property (GA4).
 * 2. Create a Web data stream for your MedLinks URL.
 * 3. Copy the Measurement ID (looks like G-XXXXXXXXXX).
 * 4. Paste it into gaMeasurementId below and redeploy.
 *
 * Owner portal: click "MedLinks" 5× quickly, or open /metrics.html
 * Default passphrase: medlinks-owner
 * To change it, replace metricsPassphraseSha256 with the output of:
 *   node -e "console.log(require('crypto').createHash('sha256').update('YOUR_PASSWORD').digest('hex'))"
 */
window.MEDLINKS_CONFIG = {
  /** Google Analytics 4 Measurement ID. Leave "" until configured. */
  gaMeasurementId: "G-6LQZ0BMRB5",

  /** SHA-256 hex of the owner passphrase for metrics.html */
  metricsPassphraseSha256:
    "7187c1107ea9d02f359c1ed76561726b2851efac347cbf0d8f80afaff50dab8f",
};
