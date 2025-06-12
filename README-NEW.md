# Airbnb Analytics Dashboard

Business Intelligence Dashboard untuk analisis data Airbnb yang komprehensif. Dashboard ini menampilkan insights tentang harga, lokasi, review, dan distribusi host tanpa memerlukan autentikasi.

## Features

### 🏠 Dashboard Harga & Lokasi
- Peta sebaran listing berdasarkan harga
- Perbandingan harga rata-rata antar wilayah
- Visualisasi harga per neighbourhood

### 📈 Dashboard Ketersediaan & Performa  
- Grafik ketersediaan properti per wilayah
- Listing dengan review terbanyak dan rating tertinggi
- Analisis performa berdasarkan rating

### 📝 Dashboard Review & Tren Pelanggan
- Tren review bulanan
- Korelasi antara harga dan jumlah review
- Analisis pertumbuhan review dan listing baru

### 👥 Dashboard Host & Listing
- Host dengan jumlah listing terbanyak
- Distribusi host berdasarkan jumlah listing
- Insights performance host

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Database**: PostgreSQL dengan Prisma ORM
- **Icons**: Lucide React

## Quick Start

1. **Clone repository**
   ```bash
   git clone <repository-url>
   cd airbnb-fik
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Setup database**
   ```bash
   # Copy environment variables
   cp .env.example .env.local
   
   # Edit .env.local dengan database credentials Anda
   # DATABASE_URL="postgresql://username:password@localhost:5432/airbnb_db"
   ```

4. **Generate Prisma client**
   ```bash
   npx prisma generate
   ```

5. **Run development server**
   ```bash
   npm run dev
   ```

6. **Open browser**
   Navigate to `http://localhost:3000`

## Database Schema

Dashboard ini menggunakan schema data warehouse dengan tabel dimensi dan fakta:

### Tabel Dimensi
- `dim_listing` - Data listing
- `dim_host` - Data host  
- `dim_location` - Data lokasi
- `dim_room_type` - Tipe kamar
- `dim_date` - Dimensi waktu

### Tabel Fakta
- `fact_listing_daily` - Data transaksi harian listing

## Project Structure

```
├── app/
│   ├── dashboard/          # Dashboard pages
│   ├── api/               # API routes  
│   └── page.tsx           # Homepage
├── components/
│   └── dashboard/         # Dashboard components
├── lib/
│   ├── dashboard-service.ts  # Database queries
│   └── generated/prisma/     # Generated Prisma client
└── prisma/
    └── schema.prisma      # Database schema
```

## Development

### Adding New Charts
1. Create component in `components/dashboard/`
2. Add data fetching in `lib/dashboard-service.ts`
3. Update API route in `app/api/dashboard/route.ts`

### Database Queries
All database queries are centralized in `lib/dashboard-service.ts` using Prisma ORM.

## Demo Data

Jika database belum terkoneksi, aplikasi akan menggunakan mock data untuk demonstrasi dashboard.

## Contributing

1. Fork repository
2. Create feature branch
3. Commit changes
4. Push to branch  
5. Create Pull Request

## License

MIT License
