# ⚡ Quick Deployment Guide

## 🎯 TL;DR - Deploy in 5 Minutes

### Frontend → Vercel
1. Go to https://vercel.com → Sign in with GitHub
2. "Add New Project" → Select `divyanshharsh/codeschool`
3. **IMPORTANT:** Set **Root Directory** to `frontend`
4. Click "Deploy"
5. ✅ Done! Your frontend is live!

### Backend → Railway
1. Go to https://railway.app → Sign in with GitHub
2. "New Project" → "Deploy from GitHub repo"
3. Select your repo
4. Settings → Set **Root Directory** to `backend`
5. Variables → Add:
   - `NODE_ENV=production`
   - `FRONTEND_URL=https://your-vercel-url.vercel.app`
6. Copy the Railway URL
7. Go back to Vercel → Settings → Environment Variables
8. Add: `VITE_API_URL` = your Railway URL
9. Redeploy frontend
10. ✅ Done! Everything is connected!

---

## 📋 Files Ready for Deployment

All necessary files have been created:

✅ **Vercel:**
- `vercel.json` - Configuration
- `.vercelignore` - Exclude backend from frontend deploy

✅ **Railway:**
- `railway.json` - Root config
- `backend/railway.toml` - Backend config

✅ **Render:**
- `render.yaml` - Alternative backend option

✅ **Code:**
- Backend CORS configured
- Frontend API client ready
- Environment variables set up

---

## 🚀 Just Follow These Steps:

1. **Deploy Frontend** (Vercel)
   - Root Directory: `frontend`
   - That's it! Vercel auto-detects everything else

2. **Deploy Backend** (Railway or Render)
   - Root Directory: `backend`
   - Add environment variables
   - Copy the URL

3. **Connect Them**
   - Add `VITE_API_URL` in Vercel
   - Redeploy frontend

**That's it!** 🎉

For detailed instructions, see `DEPLOYMENT_CHECKLIST.md`

