const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.get('/health', (_req,res) => res.json({status:'ok'}));
app.get('/', (_req,res) => res.send(`<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>DevOps Mini Project</title><style>body{font-family:Arial;max-width:800px;margin:80px auto;padding:20px;background:#f4f4f4}main{background:#fff;padding:35px;border-radius:14px}h1{margin-top:0}code{background:#eee;padding:3px 6px;border-radius:5px}</style></head><body><main><h1>🚀 DevOps Mini Project</h1><p>This app demonstrates Git, GitHub, Docker, GitHub Actions CI, GitOps CD, Kubernetes, EKS, Helm and Ingress. <strong>Feature branch: v2 banner enabled.</strong></p><p>Version: <code>${process.env.APP_VERSION || '1.0.0'}</code></p></main></body></html>`));
app.listen(port, () => console.log(`Listening on ${port}`));
