# 🚀 Deployment Checklist for CodeSchool

Follow this checklist to deploy your application successfully.

## ✅ Pre-Deployment Checklist

### Files Created ✓
- [x] `vercel.json` - Vercel configuration
- [x] `.vercelignore` - Files to exclude from Vercel
- [x] `railway.json` - Railway configuration
- [x] `backend/railway.toml` - Railway backend config
- [x] `render.yaml` - Render configuration
- [x] `frontend/src/utils/api.ts` - API client utility
- [x] Environment variable examples

### Code Updates ✓
- [x] Backend CORS configured for production
- [x] Frontend API client uses environment variables
- [x] Health check endpoint added

---

## 📋 Step-by-Step Deployment

### Part 1: Deploy Frontend to Vercel

1. **Go to Vercel**
   - Visit: https://vercel.com
   - Sign in with GitHub

2. **Import Project**
   - Click "Add New..." → "Project"
   - Select repository: `divyanshharsh/codeschool`
   - Click "Import"

3. **Configure Project**
   - **Framework Preset:** Vite (auto-detected)
   - **Root Directory:** `frontend` ⚠️ IMPORTANT!
   - **Build Command:** `npm run build` (default)
   - **Output Directory:** `dist` (default)
   - **Install Command:** `npm install` (default)

4. **Environment Variables** (Add after backend is deployed)
   - Click "Environment Variables"
   - Add: `VITE_API_URL` = `https://your-backend-url.railway.app`
   - Select: Production, Preview, Development

5. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Your site will be live! 🎉

---

### Part 2: Deploy Backend to Railway

#### Option A: Railway (Recommended)

1. **Go to Railway**
   - Visit: https://railway.app
   - Sign in with GitHub

2. **Create New Project**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository: `divyanshharsh/codeschool`

3. **Configure Service**
   - Click on the new service
   - Go to "Settings"
   - Set **Root Directory:** `backend`
   - Railway will auto-detect Node.js

4. **Environment Variables**
   - Go to "Variables" tab
   - Add these variables:
     ```
     NODE_ENV=production
     PORT=5000 (or leave default)
     FRONTEND_URL=https://your-vercel-url.vercel.app
     CORS_ORIGIN=https://your-vercel-url.vercel.app
     ```
   - Railway will auto-generate a public URL

5. **Deploy**
   - Railway will automatically deploy
   - Copy the generated URL (e.g., `https://codeschool-production.up.railway.app`)

6. **Update Frontend**
   - Go back to Vercel
   - Settings → Environment Variables
   - Update `VITE_API_URL` with your Railway URL
   - Redeploy frontend

---

#### Option B: Render

1. **Go to Render**
   - Visit: https://render.com
   - Sign in with GitHub

2. **Create Web Service**
   - Click "New" → "Web Service"
   - Connect your GitHub repository

3. **Configure Service**
   - **Name:** `codeschool-backend`
   - **Root Directory:** `backend`
   - **Environment:** Node
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npm start`
   - **Plan:** Free (or paid)

4. **Environment Variables**
   - Add in Render dashboard:
     ```
     NODE_ENV=production
     PORT=10000
     FRONTEND_URL=https://your-vercel-url.vercel.app
     CORS_ORIGIN=https://your-vercel-url.vercel.app
     ```

5. **Deploy**
   - Click "Create Web Service"
   - Wait for deployment
   - Copy the URL (e.g., `https://codeschool-backend.onrender.com`)

6. **Update Frontend**
   - Update `VITE_API_URL` in Vercel with Render URL
   - Redeploy

---

## 🔧 Post-Deployment Steps

### 1. Test Your Deployment

**Frontend:**
- [ ] Visit your Vercel URL
- [ ] Check all pages load correctly
- [ ] Test navigation
- [ ] Verify styling is correct

**Backend:**
- [ ] Visit: `https://your-backend-url/api/health`
- [ ] Should see: `{"status":"ok","message":"CodeSchool API is running"}`

**Integration:**
- [ ] Check browser console for errors
- [ ] Verify API calls work (when you add them)

### 2. Update CORS (If Needed)

If you get CORS errors:
- Go to Railway/Render dashboard
- Update `FRONTEND_URL` and `CORS_ORIGIN` with your exact Vercel URL
- Redeploy backend

### 3. Set Up Custom Domain (Optional)

**Vercel:**
- Project → Settings → Domains
- Add your domain
- Follow DNS instructions

**Railway/Render:**
- Add custom domain in settings
- Update DNS records

---

## 🐛 Troubleshooting

### Issue: Build fails on Vercel
**Solution:**
- Check build logs in Vercel dashboard
- Verify `frontend/package.json` has correct scripts
- Ensure all dependencies are listed

### Issue: 404 errors on routes
**Solution:**
- `vercel.json` is already configured with rewrites
- If still issues, check Vercel project settings

### Issue: API calls fail
**Solution:**
- Verify `VITE_API_URL` is set in Vercel
- Check backend is running
- Verify CORS settings in backend
- Check browser console for errors

### Issue: Backend won't start
**Solution:**
- Check Railway/Render logs
- Verify `npm start` script exists
- Ensure `dist` folder is built
- Check environment variables are set

### Issue: CORS errors
**Solution:**
- Update `FRONTEND_URL` in backend env vars
- Make sure it matches your Vercel URL exactly
- Include `https://` protocol
- Redeploy backend

---

## 📝 Environment Variables Reference

### Frontend (Vercel)
```
VITE_API_URL=https://your-backend-url.railway.app
```

### Backend (Railway/Render)
```
NODE_ENV=production
PORT=5000 (or auto)
FRONTEND_URL=https://your-app.vercel.app
CORS_ORIGIN=https://your-app.vercel.app
```

---

## 🎉 Success Indicators

You're successfully deployed when:
- ✅ Frontend loads at Vercel URL
- ✅ Backend health check works
- ✅ No console errors
- ✅ All pages accessible
- ✅ API calls work (when implemented)

---

## 📚 Quick Links

- **Vercel Dashboard:** https://vercel.com/dashboard
- **Railway Dashboard:** https://railway.app/dashboard
- **Render Dashboard:** https://dashboard.render.com

---

## 💡 Pro Tips

1. **Use Preview Deployments:** Vercel creates preview URLs for every PR
2. **Monitor Logs:** Check Railway/Render logs for backend issues
3. **Environment Variables:** Never commit `.env` files
4. **Custom Domains:** Set up after initial deployment works
5. **Auto-Deploy:** Both platforms auto-deploy on git push

---

**Ready to deploy?** Follow the steps above and you'll be live in minutes! 🚀

