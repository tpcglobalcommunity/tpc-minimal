# 🔍 CLOUDFLARE PAGES DEPLOYMENT CHECKLIST

## 1️⃣ VERIFIKASI PROJECT CONNECTION

### Cloudflare Dashboard Steps:
1. Login Cloudflare → Workers & Pages → Pages
2. Cari project: **tpc-minimal** (bukan yang lain)
3. Klik project → **Settings** tab
4. **Build & deployments**:
   - Build command: `npm run build` ✓
   - Build output directory: `dist` ✓
   - Root directory: `/` ✓

### Custom Domain Setup:
1. **Settings** → **Custom domains**
2. Klik **Set up custom domain**
3. Masukkan: `tpcgold.io`
4. Klik **Continue**
5. Pilih: **Use DNS only** (jika sudah ada DNS record)
6. Klik **Add domain**

7. Ulangi untuk `www.tpcgold.io`

## 2️⃣ DNS RECORDS VERIFICATION

### Di Cloudflare DNS Dashboard:
```
TYPE    NAME           CONTENT         PROXY
A       tpcgold.io     192.0.2.1       Proxied (orange)
A       www.tpcgold.io 192.0.2.1       Proxied (orange)
CNAME   www            tpcgold.io      Proxied (orange) [opsional]
```

**CATATAN:** IP `192.0.2.1` adalah placeholder. Gunakan IP yang diberikan Cloudflare Pages.

## 3️⃣ DEPLOYMENT VERIFICATION

### Setelah deploy:
1. **Pages** → **tpc-minimal** → **Deployments**
2. Klik deployment terbaru → **Preview**
3. Test URL preview: `https://[random-chars].pages.dev`
4. Jika normal → **Assign to domain**

### DevTools Network Check:
1. Buka `tpcgold.io`
2. F12 → Network tab
3. Refresh (Ctrl+R)
4. Harus lihat:
   ```
   index.html          200    (text/html)
   index-_MUEMCyA.js   200    (application/javascript)
   index-TExCSpT7.css   200    (text/css)
   ```

## 4️⃣ TROUBLESHOOTING JIKA MASIH BLANK

### Case 1: Assets 404
- **Problem:** `js/css` files 404
- **Fix:** Rebuild dengan `npm run build` → redeploy

### Case 2: Domain ke project salah
- **Problem:** tpcgold.io menunjuk ke Pages project lain
- **Fix:** 
  1. **Custom domains** → Remove `tpcgold.io`
  2. Tunggu 5 menit
  3. Add kembali ke project **tpc-minimal**

### Case 3: DNS propagation
- **Problem:** Domain masih resolve ke lama
- **Fix:** 
  1. Clear browser cache
  2. Flush DNS: `ipconfig /flushdns`
  3. Tunggu 10-15 menit

### Case 4: Build output salah
- **Problem:** Tidak ada `_redirects`/`_headers` di dist
- **Fix:** 
  1. Cek `public/_redirects` dan `public/_headers`
  2. Rebuild: `npm run build`
  3. Verify di `dist/` folder

## 5️⃣ FINAL VERIFICATION

### Test URLs:
- `https://tpcgold.io/` → redirect ke `/en/public`
- `https://tpcgold.io/en/public` → tampil normal
- `https://tpcgold.io/id/public` → tampil normal
- Refresh halaman → tidak blank

### Console Check:
- F12 → Console → No 404 errors
- Network → All assets 200 status

---
**Jika masih masalah:** Screenshot Network tab dan Custom domains settings.
