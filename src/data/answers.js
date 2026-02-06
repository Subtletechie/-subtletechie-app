export const exampleQuestions = [
  // Cloud Security
  "What is cloud security?",
  "How do I secure my AWS S3 buckets?",
  "What's the difference between encryption at rest and in transit?",
  "What is zero-trust security?",
  // AI Security
  "How can AI improve cybersecurity?",
  "What are AI security risks?",
  // Cybersecurity General
  "What is phishing and how do I prevent it?",
  "What's the best way to create strong passwords?",
  // IT Career
  "How do I start a career in cybersecurity?",
  "What certifications should I get for cloud security?"
];

// Each entry: { match: (q) => boolean, answer: string }
export const answerDatabase = [
  // ========== CLOUD SECURITY QUESTIONS (20) ==========
  {
    match: (q) => q.includes('what is cloud security') || (q.includes('cloud') && q.includes('security') && (q.includes('what') || q.includes('define'))),
    answer: "Hey there! I am SubtleTechie and it's always a pleasure to answer your questions. Cloud security is all about protecting your data, applications, and infrastructure when they're hosted on cloud platforms like AWS, Azure, or Google Cloud. Think of it like securing your house - but instead of locks and alarms, we use encryption, access controls, and monitoring tools. It matters because more companies are moving to the cloud every day, and with that comes new security challenges. The cloud is super convenient, but if not secured properly, it's like leaving your front door wide open!"
  },
  {
    match: (q) => q.includes('s3') && (q.includes('secure') || q.includes('bucket') || q.includes('protect')),
    answer: "Hey there! I am SubtleTechie and it's always a pleasure to answer your questions. Great question about S3 buckets! Here's how to lock them down: First, NEVER make them public unless absolutely necessary. Use bucket policies to control who can access what. Enable versioning so you can recover from accidental deletions. Turn on encryption - both at rest and in transit. Set up logging and monitoring. Use AWS IAM roles instead of hard-coding access keys. Enable MFA Delete for critical buckets. Think of S3 security like a bank vault - multiple layers of protection working together!"
  },
  {
    match: (q) => q.includes('encryption') && (q.includes('rest') || q.includes('transit') || q.includes('difference')),
    answer: "Hey there! I am SubtleTechie and it's always a pleasure to answer your questions. Love this question! Encryption at REST protects data while it's sitting in storage - like files on a hard drive or database. It's like locking valuables in a safe. Encryption in TRANSIT protects data while it's moving between systems - like when you send an email or upload a file. It's like putting valuables in an armored truck. In the cloud, you need BOTH! AWS, Azure, and GCP all offer easy ways to enable both types. The key is: encrypted data is useless to hackers without the decryption key!"
  },
  {
    match: (q) => q.includes('zero trust') || q.includes('zero-trust'),
    answer: "Hey there! I am SubtleTechie and it's always a pleasure to answer your questions. Zero-trust security is based on one simple principle: 'Never trust, always verify.' Traditional security was like a castle - hard shell outside, soft inside. Once you're in, you can roam freely. Zero-trust says NOPE! Every user, device, and application must be verified every single time - even if they're 'inside.' In the cloud, this means: verify identity constantly, grant least-privilege access, assume breach has already happened, and monitor everything. Think of it like a high-security building where you need to show your badge at every door!"
  },
  {
    match: (q) => (q.includes('aws') || q.includes('azure') || q.includes('gcp')) && (q.includes('secure') || q.includes('best practice')),
    answer: "Hey there! I am SubtleTechie and it's always a pleasure to answer your questions. Great question about cloud platforms! Key things to secure: 1) IAM - control who can do what with least-privilege access. 2) Network security - use VPCs, security groups, and firewalls. 3) Data encryption - both at rest and in transit. 4) Enable logging and monitoring everywhere. 5) Regular security audits and compliance checks. 6) Implement MFA for all accounts. 7) Keep services updated and patched. Each platform has free security tools built-in - use them! Security is a journey, not a destination!"
  },
  {
    match: (q) => q.includes('iam') && q.includes('cloud'),
    answer: "Hey there! I am SubtleTechie and it's always a pleasure to answer your questions. IAM (Identity and Access Management) is the gatekeeper of your cloud! It controls WHO can access WHAT resources. Best practices: Use least-privilege principle (only give access needed for the job), enable MFA everywhere, use roles instead of long-term credentials, regularly audit permissions, implement password policies, use groups to manage permissions at scale, and enable CloudTrail/logging to track all actions. Think of IAM as your bouncer - it decides who gets in and what they can do once they're inside!"
  },
  {
    match: (q) => q.includes('shared responsibility') || (q.includes('cloud') && q.includes('responsibility')),
    answer: "Hey there! I am SubtleTechie and it's always a pleasure to answer your questions. The Shared Responsibility Model is SUPER important! Here's the deal: Cloud providers (AWS, Azure, GCP) are responsible for security OF the cloud - physical infrastructure, hardware, networking. YOU are responsible for security IN the cloud - your data, applications, access management, encryption. Think of it like renting an apartment: the landlord secures the building, but YOU lock your door and protect your stuff. Many breaches happen because people don't realize what THEY need to secure!"
  },
  {
    match: (q) => q.includes('cloud') && (q.includes('threat') || q.includes('risk') || q.includes('vulnerability')),
    answer: "Hey there! I am SubtleTechie and it's always a pleasure to answer your questions. Top cloud security threats: 1) Misconfigured storage (public S3 buckets). 2) Weak access controls and overprivileged accounts. 3) Insecure APIs. 4) Account hijacking through weak passwords. 5) Insider threats. 6) Data breaches from unencrypted data. 7) DDoS attacks. 8) Inadequate security monitoring. 9) Lack of cloud security expertise. 10) Shadow IT (unauthorized cloud usage). The good news? Most are preventable with proper configuration and monitoring!"
  },
  {
    match: (q) => q.includes('vpc') || q.includes('virtual private cloud'),
    answer: "Hey there! I am SubtleTechie and it's always a pleasure to answer your questions. A VPC (Virtual Private Cloud) is your own private section of the cloud! It's like having your own gated community within a big city. You control IP address ranges, create subnets (public and private), set up route tables, and configure network gateways. Security best practices: Use private subnets for sensitive resources, implement security groups as virtual firewalls, use NACLs for subnet-level security, enable VPC Flow Logs for monitoring, and use VPN or Direct Connect for secure connections. VPCs are fundamental to cloud network security!"
  },
  {
    match: (q) => q.includes('cloud') && q.includes('compliance'),
    answer: "Hey there! I am SubtleTechie and it's always a pleasure to answer your questions. Cloud compliance sounds scary, but here's the deal: Different industries have different requirements (HIPAA for healthcare, PCI-DSS for payments, GDPR for EU data, SOC 2 for SaaS, FedRAMP for government). Major cloud providers are already compliant with most standards - they do the heavy lifting! Your job: configure correctly, document everything, enable encryption, control access, maintain audit logs, ensure data residency requirements, and regularly review security posture. Use compliance frameworks like CIS or NIST as checklists!"
  },
  {
    match: (q) => q.includes('cloudtrail') || q.includes('cloud') && q.includes('logging'),
    answer: "Hey there! I am SubtleTechie and it's always a pleasure to answer your questions. CloudTrail (AWS) and equivalent logging services are your security camera system! They record every action in your cloud environment - who did what, when, and from where. Why it matters: incident investigation, compliance audits, detecting unauthorized access, tracking configuration changes, and meeting regulatory requirements. Best practices: Enable in ALL regions, send logs to encrypted S3 buckets, set up log file integrity validation, enable log file encryption, and use CloudWatch to alert on suspicious activities. If you're not logging, you're flying blind!"
  },
  {
    match: (q) => q.includes('cloud') && (q.includes('backup') || q.includes('disaster recovery') || q.includes('dr')),
    answer: "Hey there! I am SubtleTechie and it's always a pleasure to answer your questions. Cloud backups are your insurance policy! Follow the 3-2-1 rule: 3 copies of data, 2 different storage types, 1 offsite copy. In the cloud: automate backups, use multiple regions, test your recovery process regularly (backups are useless if you can't restore!), encrypt everything, implement versioning, set retention policies, and document your recovery procedures. Cloud services like AWS Backup, Azure Backup make this easy. Remember: it's not IF something goes wrong, it's WHEN. Be prepared!"
  },
  {
    match: (q) => q.includes('kubernetes') && q.includes('security'),
    answer: "Hey there! I am SubtleTechie and it's always a pleasure to answer your questions. Kubernetes security is critical! Key areas: 1) Secure the API server with RBAC. 2) Use network policies to control pod communication. 3) Scan container images for vulnerabilities. 4) Implement Pod Security Standards. 5) Enable audit logging. 6) Use secrets management (never hardcode credentials). 7) Keep K8s updated. 8) Limit resource consumption. 9) Use service mesh for advanced security. 10) Monitor everything with tools like Falco. Kubernetes is powerful but complex - security requires attention at every layer!"
  },
  {
    match: (q) => q.includes('serverless') && q.includes('security'),
    answer: "Hey there! I am SubtleTechie and it's always a pleasure to answer your questions. Serverless security is different from traditional! Key concerns: 1) Function permissions - use least privilege IAM. 2) API Gateway security - implement authentication and rate limiting. 3) Dependency vulnerabilities - scan your code and libraries. 4) Secrets management - use parameter stores, not environment variables. 5) Input validation - prevent injection attacks. 6) Monitor function execution with logging. 7) Set appropriate timeouts and memory limits. Just because you don't manage servers doesn't mean you can ignore security!"
  },
  {
    match: (q) => q.includes('cloud') && q.includes('firewall'),
    answer: "Hey there! I am SubtleTechie and it's always a pleasure to answer your questions. Cloud firewalls are your first line of defense! They come in different forms: Security Groups (instance-level), Network ACLs (subnet-level), Web Application Firewalls (WAF for applications), and Cloud-native firewalls. Best practices: Start with deny-all rules, only open necessary ports, use the principle of least privilege, regularly review and audit rules, implement layered security, enable logging, and consider managed firewall services. Think of firewalls as your bouncer - they decide what traffic gets in and out!"
  },
  {
    match: (q) => q.includes('container') && q.includes('security'),
    answer: "Hey there! I am SubtleTechie and it's always a pleasure to answer your questions. Container security is crucial! Key areas: 1) Image security - scan for vulnerabilities, use trusted base images, sign images, keep them updated. 2) Runtime security - use read-only filesystems, drop unnecessary capabilities, run as non-root. 3) Network security - segment with network policies. 4) Secrets management - never bake secrets into images. 5) Registry security - use private registries with access controls. 6) Host security - keep the host OS secure. Containers are isolated, but not invulnerable!"
  },
  {
    match: (q) => q.includes('cloud') && (q.includes('cost') || q.includes('budget')) && q.includes('security'),
    answer: "Hey there! I am SubtleTechie and it's always a pleasure to answer your questions. Security doesn't have to break the bank! Free/low-cost wins: 1) Use built-in security tools (AWS Security Hub, Azure Security Center). 2) Enable free-tier services like CloudTrail, VPC Flow Logs. 3) Implement proper IAM (costs nothing, prevents millions in breaches). 4) Use resource tagging for visibility. 5) Set up billing alerts. 6) Right-size your security tools. 7) Automate with Infrastructure as Code. Remember: prevention is ALWAYS cheaper than dealing with a breach!"
  },
  {
    match: (q) => q.includes('multi-cloud') || q.includes('hybrid cloud'),
    answer: "Hey there! I am SubtleTechie and it's always a pleasure to answer your questions. Multi-cloud and hybrid security is complex but manageable! Challenges: different security tools, varying compliance requirements, complex identity management, network security across clouds. Solutions: 1) Use cloud-agnostic security tools. 2) Centralized identity management (like Okta, Azure AD). 3) Consistent security policies across environments. 4) Unified monitoring and logging. 5) Automated security scanning. 6) Clear data classification and governance. The key is consistency - don't let complexity create security gaps!"
  },
  {
    match: (q) => q.includes('cloud') && (q.includes('pen test') || q.includes('penetration') || q.includes('security testing')),
    answer: "Hey there! I am SubtleTechie and it's always a pleasure to answer your questions. Penetration testing in the cloud is allowed but has rules! AWS, Azure, and GCP have specific policies - usually you can test your own resources without permission, but you must follow their guidelines. Best practices: 1) Read your provider's policy first. 2) Test in non-production environments. 3) Use automated scanning tools regularly. 4) Consider third-party security assessments. 5) Test both infrastructure and application layers. 6) Document everything. 7) Fix findings quickly. Regular testing finds vulnerabilities before attackers do!"
  },
  {
    match: (q) => q.includes('cloud access security broker') || q.includes('casb'),
    answer: "Hey there! I am SubtleTechie and it's always a pleasure to answer your questions. A CASB (Cloud Access Security Broker) sits between your users and cloud services! It provides visibility, compliance, data security, and threat protection. Think of it as a security checkpoint for all cloud traffic. Benefits: 1) Discover shadow IT (unauthorized cloud apps). 2) Enforce data loss prevention policies. 3) Detect anomalous behavior. 4) Ensure compliance. 5) Control access to cloud apps. 6) Protect sensitive data. CASBs are especially valuable in multi-cloud environments where you need consistent security across different platforms!"
  },

  // ========== AI SECURITY QUESTIONS (20) ==========
  {
    match: (q) => q.includes('ai') && q.includes('security') && (q.includes('improve') || q.includes('help') || q.includes('benefit')),
    answer: "Hey there! I am SubtleTechie and it's always a pleasure to answer your questions. AI is revolutionizing cybersecurity! Benefits: 1) Threat detection - AI spots anomalies humans miss. 2) Faster response - automated threat mitigation in real-time. 3) Predictive security - identify vulnerabilities before exploitation. 4) Behavioral analysis - detect insider threats and compromised accounts. 5) Malware detection - identify new malware variants. 6) Security automation - reduce manual workload. 7) Fraud detection - spot suspicious patterns instantly. AI doesn't replace security professionals - it makes them superhuman!"
  },
  {
    match: (q) => q.includes('ai') && (q.includes('threat') || q.includes('risk') || q.includes('danger')),
    answer: "Hey there! I am SubtleTechie and it's always a pleasure to answer your questions. AI security risks are real! Top concerns: 1) Adversarial attacks - manipulating AI to make wrong decisions. 2) Data poisoning - corrupting training data. 3) Model theft - stealing proprietary AI models. 4) Privacy violations - AI exposing sensitive training data. 5) Bias and fairness issues. 6) Deepfakes - AI-generated fake content. 7) Automated attacks - AI-powered hacking tools. 8) AI hallucinations - confidently wrong outputs. 9) Supply chain attacks on AI models. Protect AI like you protect other critical systems!"
  },
  {
    match: (q) => q.includes('machine learning') && q.includes('security'),
    answer: "Hey there! I am SubtleTechie and it's always a pleasure to answer your questions. Machine learning security has unique challenges! Key areas: 1) Training data security - protect against poisoning attacks. 2) Model security - prevent theft and reverse engineering. 3) Inference security - protect predictions from manipulation. 4) Privacy - prevent training data extraction. 5) Adversarial robustness - defend against malicious inputs. 6) Model monitoring - detect drift and attacks. 7) Secure deployment - protect ML infrastructure. Best practices: encrypt models, validate inputs, audit regularly, and maintain model provenance!"
  },
  {
    match: (q) => q.includes('prompt injection') || q.includes('jailbreak'),
    answer: "Hey there! I am SubtleTechie and it's always a pleasure to answer your questions. Prompt injection is like SQL injection for AI! Attackers craft inputs to make AI systems behave unexpectedly - reveal training data, bypass safety measures, or execute unintended actions. Defenses: 1) Input validation and sanitization. 2) System prompts that resist manipulation. 3) Output filtering. 4) Rate limiting. 5) Context isolation. 6) Regular security testing. 7) User authentication and authorization. As AI becomes more integrated into systems, prompt injection is becoming a major attack vector!"
  },
  {
    match: (q) => q.includes('deepfake') || q.includes('synthetic'),
    answer: "Hey there! I am SubtleTechie and it's always a pleasure to answer your questions. Deepfakes are AI-generated fake content - videos, audio, images that look incredibly real! Security concerns: social engineering attacks, identity theft, fraud, misinformation, blackmail, and impersonation. Detection strategies: 1) Use AI detection tools. 2) Look for visual artifacts (unnatural blinking, lighting inconsistencies). 3) Verify through multiple channels. 4) Digital watermarking and signatures. 5) Blockchain for content provenance. 6) Employee training on deepfake awareness. As deepfakes get better, verification becomes critical!"
  },
  {
    match: (q) => q.includes('llm') && q.includes('security'),
    answer: "Hey there! I am SubtleTechie and it's always a pleasure to answer your questions. Large Language Model security is crucial! Risks: 1) Prompt injection attacks. 2) Training data extraction. 3) Model inversion (reconstructing training data). 4) Membership inference (determining if data was in training set). 5) Hallucinations providing false information. 6) Bias amplification. 7) Malicious use for phishing/scams. Protections: input filtering, output validation, access controls, rate limiting, audit logging, privacy-preserving techniques, and regular security assessments. Treat LLMs like any other critical system!"
  },
  {
    match: (q) => q.includes('ai') && (q.includes('privacy') || q.includes('data protection')),
    answer: "Hey there! I am SubtleTechie and it's always a pleasure to answer your questions. AI and privacy is a hot topic! Concerns: AI systems often need massive data to train, can memorize sensitive information, and might expose private data through outputs. Solutions: 1) Differential privacy - add noise to protect individuals. 2) Federated learning - train without centralizing data. 3) Synthetic data - train on fake but realistic data. 4) Data minimization - collect only what's needed. 5) Right to explanation - make AI decisions transparent. 6) Regular privacy audits. Balance AI capabilities with privacy rights!"
  },
  {
    match: (q) => q.includes('adversarial') && (q.includes('attack') || q.includes('example')),
    answer: "Hey there! I am SubtleTechie and it's always a pleasure to answer your questions. Adversarial attacks are sneaky! They make tiny, often invisible changes to inputs that fool AI systems - like adding noise to an image so AI misclassifies it. Real-world impacts: fooling facial recognition, tricking autonomous vehicles, bypassing malware detection. Defenses: 1) Adversarial training - train models on attacked examples. 2) Input transformation - preprocess to remove perturbations. 3) Ensemble methods - use multiple models. 4) Detection systems - identify adversarial inputs. 5) Robust model architectures. AI security requires defending against these sophisticated attacks!"
  },
  {
    match: (q) => q.includes('ai model') && (q.includes('steal') || q.includes('theft') || q.includes('protect')),
    answer: "Hey there! I am SubtleTechie and it's always a pleasure to answer your questions. AI model theft is intellectual property theft! Attackers can steal models through: 1) Model extraction - querying to recreate functionality. 2) Physical theft of model files. 3) Insider threats. 4) Supply chain compromises. Protections: 1) Access controls and authentication. 2) Watermarking models. 3) Query limiting and monitoring. 4) Encryption at rest and in transit. 5) Secure deployment environments. 6) Legal protections (NDAs, patents). 7) Model obfuscation. Your AI models are valuable assets - protect them accordingly!"
  },
  {
    match: (q) => q.includes('ai') && q.includes('bias'),
    answer: "Hey there! I am SubtleTechie and it's always a pleasure to answer your questions. AI bias is both a fairness AND security issue! Biased AI can: discriminate unfairly, create legal liabilities, damage reputation, and make security systems less effective. Sources of bias: training data, algorithm design, deployment context. Mitigation: 1) Diverse, representative training data. 2) Fairness metrics and testing. 3) Regular audits. 4) Diverse development teams. 5) Explainable AI. 6) Bias detection tools. 7) Continuous monitoring. Biased AI isn't just unfair - it's also less secure and effective!"
  },
  {
    match: (q) => q.includes('federated learning'),
    answer: "Hey there! I am SubtleTechie and it's always a pleasure to answer your questions. Federated learning is privacy-preserving AI! Instead of collecting all data centrally, models are trained on distributed devices (like phones) and only model updates are shared. Benefits: enhanced privacy, reduced data transfer, compliance with data regulations. Security concerns: 1) Model poisoning - malicious participants corrupt the model. 2) Inference attacks - extracting information from model updates. 3) Free-rider attacks - benefiting without contributing. Protections: secure aggregation, differential privacy, participant verification, anomaly detection. It's AI that respects privacy!"
  },
  {
    match: (q) => q.includes('ai') && (q.includes('explainability') || q.includes('interpretability') || q.includes('transparency')),
    answer: "Hey there! I am SubtleTechie and it's always a pleasure to answer your questions. AI explainability is a security requirement! Why it matters: 1) Detect bias and unfairness. 2) Identify security vulnerabilities. 3) Build trust. 4) Meet regulatory requirements. 5) Debug errors. 6) Validate decision-making. Techniques: 1) LIME and SHAP for local explanations. 2) Attention visualization. 3) Feature importance. 4) Model cards documenting behavior. 5) Counterfactual explanations. Black-box AI is risky - you need to understand how it makes decisions to secure it properly!"
  },
  {
    match: (q) => q.includes('ai') && (q.includes('governance') || q.includes('policy')),
    answer: "Hey there! I am SubtleTechie and it's always a pleasure to answer your questions. AI governance is critical for security! Key elements: 1) Clear policies on AI use and development. 2) Risk assessment frameworks. 3) Ethical guidelines. 4) Compliance with regulations (GDPR, CCPA, etc.). 5) Accountability structures. 6) Incident response procedures. 7) Regular audits and reviews. 8) Documentation and transparency. 9) Stakeholder engagement. 10) Continuous monitoring. Good governance prevents AI disasters - security, privacy, and ethical failures. Treat AI governance like you treat data governance!"
  },
  {
    match: (q) => q.includes('ai') && q.includes('supply chain'),
    answer: "Hey there! I am SubtleTechie and it's always a pleasure to answer your questions. AI supply chain security is often overlooked! Risks: 1) Compromised pre-trained models. 2) Malicious datasets. 3) Vulnerable libraries and dependencies. 4) Third-party model APIs. 5) Training infrastructure compromises. Protections: 1) Verify model sources. 2) Scan for backdoors and vulnerabilities. 3) Use trusted repositories. 4) Audit third-party AI services. 5) Maintain Software Bill of Materials (SBOM). 6) Secure training infrastructure. 7) Test models thoroughly before deployment. Don't trust AI components blindly!"
  },
  {
    match: (q) => q.includes('ai red team') || (q.includes('ai') && q.includes('penetration')),
    answer: "Hey there! I am SubtleTechie and it's always a pleasure to answer your questions. AI red teaming is security testing for AI systems! Activities: 1) Prompt injection testing. 2) Adversarial example generation. 3) Data poisoning attempts. 4) Model extraction attacks. 5) Privacy violation testing. 6) Bias discovery. 7) Safety boundary testing. Why it matters: Find vulnerabilities before attackers do! Best practices: Regular testing, diverse attack scenarios, documentation of findings, collaboration with developers, ethical boundaries, and continuous improvement. Treat AI like any other system - test it ruthlessly!"
  },
  {
    match: (q) => q.includes('ai') && (q.includes('regulation') || q.includes('compliance') || q.includes('law')),
    answer: "Hey there! I am SubtleTechie and it's always a pleasure to answer your questions. AI regulations are evolving fast! Key frameworks: 1) EU AI Act - risk-based approach. 2) GDPR - data protection including AI. 3) CCPA - California privacy law. 4) Sector-specific rules (healthcare, finance). 5) Algorithmic accountability laws. 6) Export controls on AI tech. Compliance requires: risk assessments, impact analyses, documentation, transparency, human oversight, regular audits, and incident reporting. Stay informed - AI regulations change constantly. Non-compliance can mean huge fines and legal issues!"
  },
  {
    match: (q) => q.includes('ai') && (q.includes('phishing') || q.includes('social engineering')),
    answer: "Hey there! I am SubtleTechie and it's always a pleasure to answer your questions. AI is supercharging phishing attacks! AI-powered threats: 1) Personalized phishing at scale. 2) Convincing deepfake videos/audio. 3) Real-time conversation bots. 4) Grammar-perfect fake emails. 5) Automated spear-phishing. 6) Voice cloning for phone scams. Defenses: 1) AI-powered detection tools. 2) Multi-factor authentication. 3) Email authentication (SPF, DKIM, DMARC). 4) User training on AI threats. 5) Verify requests through alternate channels. 6) Zero-trust architecture. AI makes attacks more sophisticated - your defenses need to level up too!"
  },
  {
    match: (q) => q.includes('chatgpt') || q.includes('gpt') && q.includes('security'),
    answer: "Hey there! I am SubtleTechie and it's always a pleasure to answer your questions. ChatGPT and similar tools create security challenges! Risks: 1) Data leakage - employees sharing sensitive info. 2) Prompt injection attacks. 3) Malicious code generation. 4) Social engineering assistance. 5) Intellectual property exposure. Organizational strategies: 1) Clear usage policies. 2) Employee training. 3) Use enterprise versions with better security. 4) Data loss prevention tools. 5) Monitor for unauthorized AI use. 6) Sanitize inputs/outputs. AI assistants are powerful but need guardrails!"
  },
  {
    match: (q) => q.includes('ai') && (q.includes('malware') || q.includes('virus')),
    answer: "Hey there! I am SubtleTechie and it's always a pleasure to answer your questions. AI and malware is a two-way street! AI FOR security: detecting unknown malware, behavioral analysis, predictive threat intelligence, automated response. AI BY attackers: polymorphic malware that evades detection, automated vulnerability discovery, intelligent C2 communications, adaptive attacks. Defense strategies: 1) AI-powered EDR/XDR solutions. 2) Behavioral analytics. 3) Sandboxing and detonation. 4) Threat intelligence sharing. 5) Zero-trust architecture. It's an AI arms race - defenders and attackers both using AI!"
  },
  {
    match: (q) => q.includes('autonomous') || (q.includes('ai') && q.includes('vehicle')),
    answer: "Hey there! I am SubtleTechie and it's always a pleasure to answer your questions. Autonomous vehicle security is life-or-death! Threats: 1) Sensor spoofing (GPS, LiDAR, cameras). 2) Communication hijacking. 3) Software vulnerabilities. 4) ML model attacks. 5) Physical tampering. 6) Infrastructure attacks (traffic systems). Protections: 1) Sensor fusion and validation. 2) Encrypted communications. 3) Secure boot and updates. 4) Intrusion detection systems. 5) Redundancy and fail-safes. 6) Regular security testing. Autonomous systems need security by design - failures aren't just inconvenient, they're dangerous!"
  },

  // ========== CYBERSECURITY GENERAL (20) ==========
  {
    match: (q) => q.includes('phishing') || q.includes('spear phishing'),
    answer: "Hey there! I am SubtleTechie and it's always a pleasure to answer your questions. Phishing is still the #1 attack method! It's social engineering through fake emails, texts, or websites trying to steal credentials or install malware. Red flags: 1) Urgent language ('Act now!'). 2) Generic greetings. 3) Suspicious sender addresses. 4) Unexpected attachments. 5) Too-good-to-be-true offers. 6) Spelling/grammar errors. Prevention: 1) Security awareness training. 2) Email authentication (SPF, DKIM, DMARC). 3) Anti-phishing tools. 4) MFA everywhere. 5) Verify requests independently. Think before you click!"
  },
  {
    match: (q) => q.includes('password') && (q.includes('strong') || q.includes('create') || q.includes('best')),
    answer: "Hey there! I am SubtleTechie and it's always a pleasure to answer your questions. Strong passwords are your first defense! Best practices: 1) Use 12+ characters (longer is better). 2) Mix uppercase, lowercase, numbers, and symbols. 3) Use passphrases (like 'Coffee!Morning@Sunrise2024'). 4) Never reuse passwords across sites. 5) Use a password manager (1Password, Bitwarden, LastPass). 6) Enable MFA everywhere. 7) Avoid personal info (birthdays, names). 8) Change passwords if breached. Pro tip: Passphrases are easier to remember and harder to crack!"
  },
  {
    match: (q) => q.includes('multi-factor') || q.includes('mfa') || q.includes('2fa') || q.includes('two-factor'),
    answer: "Hey there! I am SubtleTechie and it's always a pleasure to answer your questions. MFA (Multi-Factor Authentication) is CRITICAL! It requires two or more verification factors: something you know (password), something you have (phone/token), something you are (fingerprint). Why it matters: blocks 99% of automated attacks! Best options: 1) Authenticator apps (Google Authenticator, Authy). 2) Hardware tokens (YubiKey). 3) Biometrics. Avoid: SMS codes (can be intercepted). Enable MFA on email, banking, social media, work accounts - EVERYTHING! It's the easiest security upgrade you can make!"
  },
  {
    match: (q) => q.includes('ransomware'),
    answer: "Hey there! I am SubtleTechie and it's always a pleasure to answer your questions. Ransomware encrypts your files and demands payment! It's one of the worst cyber threats. Prevention: 1) Regular backups (3-2-1 rule). 2) Keep systems updated and patched. 3) Email security and phishing training. 4) Endpoint protection. 5) Network segmentation. 6) Least-privilege access. 7) Disable unnecessary services. If infected: 1) Isolate systems immediately. 2) DON'T pay (no guarantee of recovery). 3) Contact authorities. 4) Restore from backups. 5) Investigate how it happened. An ounce of prevention is worth a pound of cure!"
  },
  {
    match: (q) => q.includes('vpn') && !q.includes('cloud'),
    answer: "Hey there! I am SubtleTechie and it's always a pleasure to answer your questions. VPNs (Virtual Private Networks) create encrypted tunnels for your internet traffic! Benefits: 1) Privacy - hide your IP and location. 2) Security - encrypt data on public WiFi. 3) Access - bypass geo-restrictions. 4) Protection - guard against ISP tracking. Choose wisely: Use reputable providers (no logs policy), avoid free VPNs (they often sell your data), enable kill switch, use strong encryption (OpenVPN, WireGuard). For work: Use company-provided VPNs. Always use VPN on public WiFi - it's like putting your data in an armored truck!"
  },
  {
    match: (q) => q.includes('firewall') && !q.includes('cloud'),
    answer: "Hey there! I am SubtleTechie and it's always a pleasure to answer your questions. Firewalls are your network's bouncer! They control incoming and outgoing traffic based on security rules. Types: 1) Network firewalls (hardware). 2) Host-based firewalls (software on devices). 3) Next-gen firewalls (application-aware). 4) Web application firewalls (protect web apps). Best practices: 1) Enable on all devices. 2) Default deny (block everything, allow only what's needed). 3) Regular rule audits. 4) Keep updated. 5) Monitor logs. 6) Layer with other defenses. Firewalls are essential but not sufficient alone!"
  },
  {
    match: (q) => q.includes('antivirus') || q.includes('anti-virus') || q.includes('endpoint protection'),
    answer: "Hey there! I am SubtleTechie and it's always a pleasure to answer your questions. Endpoint protection is essential! Modern solutions go beyond traditional antivirus: 1) Signature-based detection (known malware). 2) Behavioral analysis (suspicious activities). 3) Machine learning (detect new threats). 4) Exploit prevention. 5) Ransomware protection. 6) Web filtering. Top picks: Windows Defender (built-in), Malwarebytes, CrowdStrike, SentinelOne. Best practices: Keep updated, run regular scans, don't disable it, combine with other security layers. Remember: No single solution is 100% - defense in depth!"
  },
  {
    match: (q) => q.includes('malware') && !q.includes('ai'),
    answer: "Hey there! I am SubtleTechie and it's always a pleasure to answer your questions. Malware is malicious software designed to harm! Types: 1) Viruses - replicate and spread. 2) Trojans - disguise as legitimate software. 3) Worms - self-replicate across networks. 4) Ransomware - encrypt files for ransom. 5) Spyware - steal information. 6) Rootkits - hide other malware. 7) Adware - unwanted ads. Protection: antivirus/EDR, keep software updated, don't download from untrusted sources, email filtering, network security, backups, user education. If infected: disconnect from network, scan and remove, change passwords, restore from backups!"
  },
  {
    match: (q) => q.includes('social engineering') && !q.includes('ai'),
    answer: "Hey there! I am SubtleTechie and it's always a pleasure to answer your questions. Social engineering exploits human psychology, not technical vulnerabilities! Types: 1) Phishing/spear-phishing emails. 2) Pretexting (fake scenarios). 3) Baiting (malicious downloads). 4) Quid pro quo (fake help). 5) Tailgating (physical access). 6) Vishing (phone scams). Defense: 1) Security awareness training. 2) Verify identities independently. 3) Question unusual requests. 4) Don't share sensitive info. 5) Report suspicious activity. 6) Follow security policies. Humans are often the weakest link - education is key!"
  },
  {
    match: (q) => q.includes('patch') || q.includes('update') && q.includes('security'),
    answer: "Hey there! I am SubtleTechie and it's always a pleasure to answer your questions. Patching is CRITICAL! Updates fix security vulnerabilities that hackers exploit. Why it matters: WannaCry, Equifax breach, and countless others happened because of unpatched systems. Best practices: 1) Enable automatic updates when possible. 2) Patch critical systems first. 3) Test patches in non-production first (for businesses). 4) Maintain asset inventory. 5) Prioritize based on risk. 6) Patch applications AND operating systems. 7) Don't forget firmware and IoT devices. Unpatched systems are low-hanging fruit for attackers!"
  },
  {
    match: (q) => q.includes('ddos') || q.includes('denial of service'),
    answer: "Hey there! I am SubtleTechie and it's always a pleasure to answer your questions. DDoS (Distributed Denial of Service) attacks overwhelm systems with traffic, making them unavailable! Types: 1) Volume-based (floods bandwidth). 2) Protocol attacks (exploit connection handling). 3) Application-layer (target web applications). Protection: 1) DDoS protection services (Cloudflare, AWS Shield). 2) Rate limiting. 3) Web Application Firewall (WAF). 4) Load balancing and redundancy. 5) Monitor for anomalies. 6) Have an incident response plan. Can't prevent all DDoS, but can minimize impact!"
  },
  {
    match: (q) => q.includes('insider threat') || q.includes('insider attack'),
    answer: "Hey there! I am SubtleTechie and it's always a pleasure to answer your questions. Insider threats come from people with legitimate access! Types: 1) Malicious (intentional harm). 2) Negligent (careless mistakes). 3) Compromised (hacked accounts). Detection: 1) User behavior analytics. 2) Access logging and monitoring. 3) Data loss prevention (DLP). 4) Regular audits. Prevention: 1) Least-privilege access. 2) Background checks. 3) Security awareness training. 4) Separation of duties. 5) Exit procedures. 6) Culture of security. Insider threats are hard to detect - they look like normal activity!"
  },
  {
    match: (q) => q.includes('data breach') || q.includes('breach response'),
    answer: "Hey there! I am SubtleTechie and it's always a pleasure to answer your questions. Data breaches happen when unauthorized people access sensitive information. Response steps: 1) CONTAIN - isolate affected systems. 2) ASSESS - determine scope and impact. 3) NOTIFY - inform stakeholders, authorities, affected individuals. 4) INVESTIGATE - find root cause. 5) REMEDIATE - fix vulnerabilities. 6) DOCUMENT - maintain records. 7) IMPROVE - update security based on lessons learned. Prevention is better: encryption, access controls, monitoring, regular security assessments, incident response plan. Have a plan BEFORE a breach happens!"
  },
  {
    match: (q) => q.includes('vulnerability') && (q.includes('scan') || q.includes('assessment')),
    answer: "Hey there! I am SubtleTechie and it's always a pleasure to answer your questions. Vulnerability scanning finds security weaknesses before attackers do! Types: 1) Network scanning (open ports, services). 2) Web application scanning (OWASP Top 10). 3) Host-based scanning (missing patches, misconfigurations). Tools: Nessus, OpenVAS, Qualys, Burp Suite. Best practices: 1) Scan regularly (weekly/monthly). 2) Prioritize findings by risk. 3) Verify results (reduce false positives). 4) Remediate quickly. 5) Rescan after fixes. 6) Document everything. Scanning is reconnaissance - you need to see what attackers see!"
  },
  {
    match: (q) => q.includes('penetration test') || q.includes('pen test'),
    answer: "Hey there! I am SubtleTechie and it's always a pleasure to answer your questions. Penetration testing is ethical hacking! Testers simulate real attacks to find vulnerabilities. Types: 1) Black box (no knowledge). 2) White box (full knowledge). 3) Gray box (partial knowledge). Phases: 1) Planning. 2) Reconnaissance. 3) Scanning. 4) Exploitation. 5) Reporting. Benefits: Find vulnerabilities, test defenses, meet compliance, improve security posture. Do it: Annually at minimum, after major changes, before launching new systems. Hire professionals or train your team. It's better to find issues yourself than let attackers find them!"
  },
  {
    match: (q) => q.includes('incident response') || q.includes('ir plan'),
    answer: "Hey there! I am SubtleTechie and it's always a pleasure to answer your questions. Incident Response is your cybersecurity emergency plan! Phases: 1) PREPARATION - tools, training, procedures. 2) DETECTION - identify incidents. 3) CONTAINMENT - limit damage. 4) ERADICATION - remove threat. 5) RECOVERY - restore systems. 6) LESSONS LEARNED - improve. Key elements: IR team, communication plan, documentation procedures, technical tools, legal considerations, post-incident review. Practice with tabletop exercises! Having a plan reduces response time from days to hours - critical for minimizing damage!"
  },
  {
    match: (q) => q.includes('security awareness') || q.includes('security training'),
    answer: "Hey there! I am SubtleTechie and it's always a pleasure to answer your questions. Security awareness training is your human firewall! Why it matters: 95% of breaches involve human error. Topics to cover: 1) Phishing recognition. 2) Password hygiene. 3) Social engineering. 4) Physical security. 5) Data handling. 6) Incident reporting. 7) Mobile device security. 8) Remote work security. Best practices: 1) Regular training (quarterly). 2) Simulated phishing tests. 3) Make it engaging (not boring PowerPoints!). 4) Measure effectiveness. 5) Tailor by role. 6) Leadership buy-in. Educated users are your best defense!"
  },
  {
    match: (q) => q.includes('zero day') || q.includes('0day'),
    answer: "Hey there! I am SubtleTechie and it's always a pleasure to answer your questions. Zero-day vulnerabilities are unknown security flaws that vendors haven't patched yet! Why scary: No fix available, detection is hard, often used in targeted attacks. Defense strategies: 1) Defense in depth (multiple security layers). 2) Network segmentation. 3) Least-privilege access. 4) Intrusion detection/prevention. 5) Behavioral analytics. 6) Virtual patching (WAF, IPS). 7) Keep systems updated (non-zero-day patches). 8) Threat intelligence. You can't patch what doesn't exist - focus on limiting impact when it happens!"
  },
  {
    match: (q) => q.includes('encryption') && !q.includes('cloud'),
    answer: "Hey there! I am SubtleTechie and it's always a pleasure to answer your questions. Encryption transforms data into unreadable code! Types: 1) Symmetric (same key encrypts/decrypts) - fast, for large data. 2) Asymmetric (public/private keys) - secure key exchange. When to encrypt: 1) Data at rest (storage). 2) Data in transit (communication). 3) Sensitive communications. 4) Backups. 5) Mobile devices. Standards: AES-256 for symmetric, RSA-2048+ for asymmetric. Best practices: Strong keys, secure key management, end-to-end encryption, regular rotation. Encryption isn't optional anymore - it's essential!"
  },
  {
    match: (q) => q.includes('security') && (q.includes('framework') || q.includes('standard')) && !q.includes('cloud'),
    answer: "Hey there! I am SubtleTechie and it's always a pleasure to answer your questions. Security frameworks provide structure and best practices! Popular ones: 1) NIST Cybersecurity Framework - risk management. 2) ISO 27001 - information security management. 3) CIS Controls - prioritized security actions. 4) COBIT - IT governance. 5) PCI DSS - payment card security. 6) HIPAA - healthcare security. Benefits: 1) Systematic approach. 2) Common language. 3) Compliance. 4) Continuous improvement. 5) Risk reduction. Choose based on industry, size, and requirements. Frameworks aren't one-size-fits-all - adapt to your needs!"
  },

  // ========== IT CAREER QUESTIONS (20) ==========
  {
    match: (q) => q.includes('start') && q.includes('career') && (q.includes('cyber') || q.includes('security')),
    answer: "Hey there! I am SubtleTechie and it's always a pleasure to answer your questions. Starting a cybersecurity career is exciting! Pathways: 1) Get foundational IT knowledge (networking, systems, programming basics). 2) Learn security fundamentals (CIA triad, threats, defenses). 3) Get hands-on practice (TryHackMe, HackTheBox, home lab). 4) Pursue certifications (Security+, CySA+, CEH). 5) Specialize (cloud security, pen testing, SOC analyst, etc.). 6) Build a portfolio (blog, GitHub projects). 7) Network (LinkedIn, conferences, local meetups). Entry-level roles: SOC analyst, security analyst, helpdesk with security focus. You don't need a CS degree - passion and continuous learning matter more!"
  },
  {
    match: (q) => q.includes('certification') && (q.includes('cloud') || q.includes('security') || q.includes('cyber')),
    answer: "Hey there! I am SubtleTechie and it's always a pleasure to answer your questions. Certifications validate your skills! For cloud security: 1) AWS Certified Security Specialty. 2) Microsoft Azure Security Engineer (AZ-500). 3) Google Cloud Professional Security Engineer. 4) CCSP (Certified Cloud Security Professional). For general security: 1) CompTIA Security+ (entry-level). 2) CISSP (experienced professionals). 3) CEH (Certified Ethical Hacker). 4) CySA+ (analyst role). Tips: Start with fundamentals, align with career goals, hands-on practice is key, many have free training, some require experience. Certs open doors but skills keep them open!"
  },
  {
    match: (q) => q.includes('security') && q.includes('salary'),
    answer: "Hey there! I am SubtleTechie and it's always a pleasure to answer your questions. Cybersecurity pays well! Ranges (US, 2024): Entry-level (Security Analyst, SOC Analyst): $60-85K. Mid-level (Security Engineer, Pen Tester): $90-130K. Senior (Security Architect, CISO): $140-250K+. Cloud security often pays 10-20% more. Factors affecting salary: 1) Location. 2) Experience. 3) Certifications. 4) Specialization. 5) Industry. 6) Company size. Hot specializations: cloud security, threat intelligence, incident response, security architecture. Skills shortage means high demand - invest in yourself and negotiate well!"
  },
  {
    match: (q) => q.includes('learn') && (q.includes('cyber') || q.includes('security')) && !q.includes('career'),
    answer: "Hey there! I am SubtleTechie and it's always a pleasure to answer your questions. Learning cybersecurity has never been more accessible! Resources: FREE: 1) TryHackMe (hands-on). 2) HackTheBox (challenges). 3) Cybrary (courses). 4) YouTube (channels like NetworkChuck, Professor Messer). 5) OWASP (web security). 6) Kali Linux tutorials. PAID: 1) Udemy courses ($10-50). 2) Pluralsight. 3) INE. 4) SANS (expensive but comprehensive). Learning path: Fundamentals → Networking → Operating Systems → Programming basics → Security concepts → Specialization. Practice beats theory - build labs, break things, fix them!"
  },
  {
    match: (q) => q.includes('without') && q.includes('degree') && (q.includes('cyber') || q.includes('security') || q.includes('it')),
    answer: "Hey there! I am SubtleTechie and it's always a pleasure to answer your questions. YES, you can break into cybersecurity without a degree! Employers increasingly value skills over degrees. Strategy: 1) Get certifications (Security+, CEH, cloud certs). 2) Build practical skills (home labs, CTFs, bug bounties). 3) Create a portfolio (GitHub, blog documenting projects). 4) Network (LinkedIn, conferences, local groups). 5) Start in adjacent roles (helpdesk, IT support) and transition. 6) Contribute to open source. 7) Show passion and continuous learning. Many successful security pros are self-taught! Focus on demonstrable skills and results!"
  },
  {
    match: (q) => q.includes('soc analyst') || q.includes('security analyst'),
    answer: "Hey there! I am SubtleTechie and it's always a pleasure to answer your questions. SOC (Security Operations Center) Analyst is a great entry point! Responsibilities: 1) Monitor security alerts. 2) Investigate incidents. 3) Threat analysis. 4) Incident response. 5) Document findings. 6) Tune security tools. Skills needed: 1) Log analysis. 2) Network fundamentals. 3) Operating systems (Windows, Linux). 4) Security tools (SIEM, EDR). 5) Threat intelligence. 6) Basic scripting. Career path: Tier 1 → Tier 2/3 → Threat Hunter/Incident Responder → Security Engineer/Architect. It's demanding (shift work, high alert volume) but excellent for building security fundamentals!"
  },
  {
    match: (q) => q.includes('penetration test') && q.includes('career'),
    answer: "Hey there! I am SubtleTechie and it's always a pleasure to answer your questions. Penetration testing is an exciting career! What they do: Ethically hack systems to find vulnerabilities before bad actors do. Skills needed: 1) Networking deep knowledge. 2) Operating systems expertise. 3) Programming/scripting (Python, Bash, PowerShell). 4) Security tools (Metasploit, Burp Suite, Nmap). 5) Web applications. 6) Report writing. Path: 1) Build IT fundamentals. 2) Get Security+ or CEH. 3) Practice on HackTheBox, TryHackMe. 4) Get OSCP (industry gold standard). 5) Bug bounties for experience. It's challenging but rewarding - you're constantly learning and problem-solving!"
  },
  {
    match: (q) => q.includes('remote') && (q.includes('cyber') || q.includes('security') || q.includes('it')),
    answer: "Hey there! I am SubtleTechie and it's always a pleasure to answer your questions. Remote cybersecurity jobs are increasingly common! Best for remote: 1) Security analyst/SOC analyst. 2) Cloud security engineer. 3) Penetration tester. 4) Security consultant. 5) Threat intelligence analyst. 6) Security architect (senior). Finding remote work: 1) LinkedIn (filter for remote). 2) Remote-first companies. 3) Freelancing (Upwork for side gigs). 4) Build reputation (blog, speaking). Challenges: Communication, collaboration, time zones, home security. Tips: Over-communicate, maintain work-life balance, invest in home office security, stay connected with community. Remote work is here to stay in cybersecurity!"
  },
  {
    match: (q) => q.includes('switch') && q.includes('cyber') && q.includes('career'),
    answer: "Hey there! I am SubtleTechie and it's always a pleasure to answer your questions. Career switching to cybersecurity is totally doable! Leverage your background: 1) Developer → AppSec, secure coding. 2) IT/Sysadmin → Security operations, cloud security. 3) Network admin → Network security. 4) Non-tech → GRC (governance, risk, compliance). Strategy: 1) Identify transferable skills. 2) Learn security fundamentals. 3) Get relevant certifications. 4) Build security projects in your current domain. 5) Network with security pros. 6) Look for hybrid roles (DevSecOps, Sales Engineer). 7) Consider bootcamps if you need structure. Your previous experience is valuable - security touches everything!"
  },
  {
    match: (q) => q.includes('security') && (q.includes('interview') || q.includes('job interview')),
    answer: "Hey there! I am SubtleTechie and it's always a pleasure to answer your questions. Ace that security interview! Common questions: 1) Explain CIA triad. 2) What's the difference between symmetric and asymmetric encryption? 3) Walk through your incident response process. 4) How do you stay current with threats? 5) Explain a recent security breach in the news. 6) Technical scenarios (SQL injection, XSS, etc.). Prep: 1) Review fundamentals. 2) Know your resume deeply. 3) Practice on HackTheBox/TryHackMe. 4) Research the company's security stack. 5) Prepare questions (red flag: they don't ask about security philosophy). 6) Do mock interviews. Show passion, curiosity, and continuous learning!"
  },
  {
    match: (q) => q.includes('networking') && q.includes('it'),
    answer: "Hey there! I am SubtleTechie and it's always a pleasure to answer your questions. Networking (the people kind!) is crucial in IT! Why it matters: 1) Many jobs aren't posted publicly. 2) Referrals increase interview chances. 3) Learn from experienced professionals. 4) Discover opportunities. 5) Stay current with industry trends. How to network: 1) LinkedIn (engage meaningfully, not just connect). 2) Local meetups and user groups. 3) Conferences (DEF CON, RSA, Black Hat). 4) Online communities (Discord, Reddit, Twitter). 5) Contribute to projects. 6) Share your knowledge (blog, speak). Quality > quantity - build genuine relationships!"
  },
  {
    match: (q) => q.includes('portfolio') && (q.includes('cyber') || q.includes('security') || q.includes('it')),
    answer: "Hey there! I am SubtleTechie and it's always a pleasure to answer your questions. A security portfolio showcases your skills! What to include: 1) GitHub repos (security tools, scripts, CTF writeups). 2) Blog (document learning, explain concepts, incident analysis). 3) Certifications and badges. 4) CTF rankings and achievements. 5) Bug bounty finds (if allowed to share). 6) Home lab documentation. 7) Personal projects (vulnerability scanner, SIEM dashboard). 8) Conference talks or presentations. Platforms: GitHub, personal website, LinkedIn, Medium. Make it visible and professional - this is your marketing material. Employers want to see you can DO security, not just talk about it!"
  },
  {
    match: (q) => q.includes('security') && (q.includes('specialize') || q.includes('specialization') || q.includes('focus')),
    answer: "Hey there! I am SubtleTechie and it's always a pleasure to answer your questions. Specialization increases your value! Popular paths: 1) Cloud Security (AWS, Azure, GCP). 2) Application Security (secure coding, code review). 3) Network Security (firewalls, IDS/IPS). 4) Penetration Testing (offensive security). 5) Threat Intelligence (analyzing adversaries). 6) Incident Response (breach handling). 7) GRC (governance, risk, compliance). 8) Security Architecture. 9) Identity and Access Management. 10) Industrial Control Systems (ICS/SCADA). Choose based on: interests, demand, salary, your background. Start broad, then specialize after 2-3 years. T-shaped skills (broad knowledge + deep expertise) are ideal!"
  },
  {
    match: (q) => q.includes('security') && q.includes('bootcamp'),
    answer: "Hey there! I am SubtleTechie and it's always a pleasure to answer your questions. Cybersecurity bootcamps can jumpstart your career! Pros: 1) Structured learning. 2) Faster than traditional degree. 3) Hands-on focus. 4) Career services. 5) Networking. Cons: 1) Expensive ($10-20K). 2) Intensive time commitment. 3) Not all are quality. 4) Not a guaranteed job. Top bootcamps: Flatiron, Springboard, Fullstack Academy. Alternatives: Self-study with certifications, community college courses, online platforms (TryHackMe, INE). Bootcamps work best if: you're committed, have some tech background, ready to practice beyond class. Do your research - talk to alumni!"
  },
  {
    match: (q) => q.includes('programming') && (q.includes('security') || q.includes('cyber')),
    answer: "Hey there! I am SubtleTechie and it's always a pleasure to answer your questions. Programming is increasingly important in security! Why learn it: 1) Automate repetitive tasks. 2) Analyze logs and data. 3) Build custom tools. 4) Understand vulnerabilities. 5) Read and review code. What to learn: 1) Python (most popular - automation, security tools). 2) Bash/PowerShell (system administration). 3) JavaScript (web security). 4) Go (building security tools). 5) SQL (database security). Don't need to be an expert developer! Focus on scripting for practical security tasks. Many security pros aren't programmers - but those who code have an edge!"
  },
  {
    match: (q) => q.includes('stay current') || q.includes('keep up') && (q.includes('security') || q.includes('cyber')),
    answer: "Hey there! I am SubtleTechie and it's always a pleasure to answer your questions. Staying current is essential - threats evolve constantly! Resources: 1) Blogs (Krebs on Security, Schneier, Talos Intel). 2) Podcasts (Darknet Diaries, Risky Business, Security Now). 3) Twitter/X (security researchers, vendors). 4) Reddit (r/netsec, r/cybersecurity). 5) News (The Hacker News, BleepingComputer). 6) Threat intelligence feeds. 7) Vendor blogs (Microsoft, CrowdStrike). 8) Conferences (watch talks online). 9) Mailing lists (SANS, US-CERT). Dedicate 30-60 min daily. Follow the curious - learn about breaches, new techniques, tool releases. Continuous learning isn't optional in security!"
  },
  {
    match: (q) => q.includes('imposter syndrome') || (q.includes('not good enough') && q.includes('security')),
    answer: "Hey there! I am SubtleTechie and it's always a pleasure to answer your questions. Imposter syndrome is REAL in cybersecurity! You're not alone - even experienced pros feel this. Why it happens: 1) Field is vast - no one knows everything. 2) Constantly evolving. 3) Surrounded by brilliant people. 4) High stakes nature of work. Combat it: 1) Acknowledge your accomplishments. 2) Focus on growth, not perfection. 3) Ask questions (everyone was a beginner). 4) Find mentors. 5) Help others (teaching reinforces learning). 6) Remember: feeling overwhelmed means you're challenging yourself. The day you think you know everything is the day you become a security risk. Embrace continuous learning!"
  },
  {
    match: (q) => q.includes('work-life balance') && (q.includes('security') || q.includes('it')),
    answer: "Hey there! I am SubtleTechie and it's always a pleasure to answer your questions. Work-life balance in security is challenging but achievable! Challenges: 1) Incidents don't follow business hours. 2) Always-on threat landscape. 3) On-call rotations. 4) Pressure and stress. Strategies: 1) Set boundaries (disconnect after hours when possible). 2) Automate what you can. 3) Build strong teams (share load). 4) Choose employers with healthy culture. 5) Practice self-care. 6) Time management skills. 7) Know when to escalate. Roles with better balance: GRC, security architecture, management. SOC and IR can be demanding. Burnout is real - prioritize your health. You can't protect systems if you're exhausted!"
  },
  {
    match: (q) => q.includes('security clearance') || q.includes('government') && (q.includes('cyber') || q.includes('security')),
    answer: "Hey there! I am SubtleTechie and it's always a pleasure to answer your questions. Security clearances open doors to government/defense work! Levels: 1) Confidential. 2) Secret. 3) Top Secret (+ SCI compartments). Process: Background investigation covering employment, education, residence, references, criminal history, credit, foreign contacts. Timeline: Months to over a year. Requirements: US citizenship, pass investigation, maintain standards. Benefits: Higher salaries, unique projects, job security, specialized experience. Considerations: Ongoing requirements, lifestyle restrictions, regular reinvestigations. Clearance is valuable but not required for most private sector security work. Many paths in cybersecurity don't need it!"
  },
  {
    match: (q) => q.includes('freelance') || q.includes('consultant') && (q.includes('security') || q.includes('cyber')),
    answer: "Hey there! I am SubtleTechie and it's always a pleasure to answer your questions. Freelance security work offers flexibility and variety! Services in demand: 1) Penetration testing. 2) Security assessments. 3) Compliance consulting (HIPAA, PCI-DSS). 4) Incident response. 5) Security awareness training. 6) Cloud security architecture. Getting started: 1) Build expertise first (3-5 years recommended). 2) Get certifications. 3) Build portfolio and reputation. 4) Start part-time. 5) Network extensively. 6) Consider platforms (Upwork, Toptal). Challenges: Inconsistent income, finding clients, handling business operations, staying current. Benefits: Higher rates, flexibility, diverse projects. Not for everyone, but can be rewarding for the right person!"
  }
];

export function getDefaultAnswer(q) {
  return "Hey there! I am SubtleTechie and it's always a pleasure to answer your questions. That's a great question about " +
    (q.includes('cloud') ? 'cloud security' : q.includes('ai') ? 'AI security' : q.includes('career') || q.includes('job') ? 'IT careers' : 'cybersecurity') +
    "! While I don't have a specific pre-written answer for that exact scenario, here's my general advice: Always think defense in depth (multiple layers of security), follow the principle of least privilege, keep everything updated and patched, monitor constantly, and never stop learning! Security is constantly evolving, so staying curious and asking questions like this is exactly the right approach. Feel free to try asking about specific topics like AWS security, phishing prevention, getting into cybersecurity, or any other security topic - I have detailed answers for the most common questions in each area!";
}
