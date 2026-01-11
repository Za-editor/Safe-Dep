export const mockPackageOverview = {
  name: "next",
  version: "1.2.4",
  analyzedAt: "24 Oct 2025, 13:06",
  sourceUrl: "https://registry.npmjs.org/next/-/next-15.5.4.tgz",
  sha256: "5118b3f18fe8a6bfa109a18ed479c09a92bc7950ac0ed849a7a8c47ef4d7e9f28",
  confidence: "F30aff6e94da9547ca96e073a6f9d380793d7e037448768d7a9c9",
  vulnerabilities: 5,
  openssfScore: 9.5,
  license: "Apache-2.0",
  ecosystem: "Go",
  summary:
    "This analysis was performed using vet and SafeDep Cloud Malicious Package Analysis. Integrate with GitHub using vet-action GitHub Action.",
  summaryNote: "This report is updated by a verification record",
  summaryDetails:
    "Multiple files flagged for potential data exfiltration, XSS, and RCE vulnerabilities. High confidence of malicious intent due to combined factors.",
  verification: "Manual analysis confirmed that the package is clean.",
  details:
    "The package exhibits multiple concerning behaviors. Several files match the 'sys_net_recon_axfr' YARA rule, suggesting potential system and network information exfiltration. Additionally, the code constructs javascript URLs and assigns them to formAction attributes, which can lead to XSS or RCE if user-controlled data is involved. Furthermore, dynamic code execution is possible via formatDynamicImportPath if the cacheHandlers configuration is compromised. These factors, combined, indicate malicious intent.",
  detailsNote: "This report is updated by a verification record",
};
