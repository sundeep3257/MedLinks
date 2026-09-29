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
 * To change the passphrase hash, run:
 *   node -e "console.log(require('crypto').createHash('sha256').update('YOUR_PASSWORD').digest('hex'))"
 */
window.MEDLINKS_CONFIG = {
  /** Google Analytics 4 Measurement ID. Leave "" until configured. */
  gaMeasurementId: "G-6LQZ0BMRB5",

  /** SHA-256 hex of the owner passphrase for metrics.html */
  metricsPassphraseSha256:
    "64ce49d5a68726b0d2fed2d9613bcf58b409e05ff7c67c77dc4702e0e0f4f30a",
};
