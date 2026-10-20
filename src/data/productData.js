/** HEARTCALM product content — edit ingredient names and descriptions here. */
export const brand = {
  name: 'HEARTCALM',
  productName: 'Acne Water Gel',
  tagline: 'Calm your skin, make room for brighter days.',
  summary:
    'Water gel ringan untuk menemani rutinitas kulit yang butuh kelembapan dan rasa nyaman.',
};

export const navigation = [
  { id: 'bahan', label: 'Bahan' },
  { id: 'manfaat', label: 'Manfaat' },
  { id: 'permasalahan', label: 'Permasalahan' },
  { id: 'hasil', label: 'Hasil Penggunaan' },
  { id: 'testimoni', label: 'Testimoni' },
];

export const ingredients = [
  {
    name: 'Centella Asiatica',
    short: 'Ekstrak botanical untuk rutinitas perawatan kulit yang terasa nyaman.',
    detail: 'Centella Asiatica merupakan ekstrak tumbuhan yang populer dalam produk skincare dengan fokus soothing. Bahan ini sering dipilih untuk melengkapi rutinitas kulit yang membutuhkan kelembutan dan kenyamanan.',
    color: 'green', icon: 'bi-flower1', number: '01',
  },
  {
    name: 'Panthenol',
    short: 'Pro-vitamin B5 yang dikenal membantu menjaga kelembapan kulit.',
    detail: 'Panthenol, atau pro-vitamin B5, bekerja sebagai humektan yang membantu mempertahankan kelembapan. Bahan ini banyak digunakan dalam moisturizer untuk memberikan rasa nyaman pada kulit.',
    color: 'pink', icon: 'bi-droplet', number: '02',
  },
  {
    name: 'Ceramide',
    short: 'Lipid penting untuk mendukung lapisan pelindung kulit.',
    detail: 'Ceramide adalah jenis lipid yang secara alami terdapat pada lapisan terluar kulit. Dalam skincare, ceramide digunakan untuk membantu menjaga kelembapan dan mendukung fungsi skin barrier.',
    color: 'blue', icon: 'bi-shield-check', number: '03',
  },
  {
    name: 'Ectoin',
    short: 'Bahan pendukung hidrasi untuk perawatan kulit sehari-hari.',
    detail: 'Ectoin dikenal sebagai bahan skincare yang digunakan dalam formula pelembap. Fungsinya berkaitan dengan membantu menjaga hidrasi serta mendukung kenyamanan permukaan kulit.',
    color: 'yellow', icon: 'bi-stars', number: '04',
  },
];

// Daftar bahan pendukung untuk konten desain; sesuaikan dengan formulasi produk bila tersedia.
export const additionalIngredients = [
  { title: 'Glycerin', detail: 'Humektan yang membantu menarik dan mempertahankan air pada lapisan permukaan kulit agar terasa lembap.' },
  { title: 'Sodium Hyaluronate', detail: 'Turunan hyaluronic acid yang umum digunakan dalam formula skincare untuk membantu hidrasi kulit.' },
  { title: 'Allantoin', detail: 'Bahan yang banyak dipakai dalam skincare untuk mendukung rasa nyaman dan membantu menjaga kelembutan kulit.' },
];

export const benefits = [
  { title: 'Calm & Comfort', body: 'Rutinitas skincare yang terasa lembut dan nyaman.', icon: 'bi-heart-fill', tone: 'rose' },
  { title: 'Hydration', body: 'Tekstur water gel untuk pengalaman pemakaian yang ringan.', icon: 'bi-droplet-fill', tone: 'blue' },
  { title: 'Barrier Care', body: 'Fokus perawatan yang memperhatikan skin barrier.', icon: 'bi-shield-fill-check', tone: 'yellow' },
  { title: 'Everyday Fresh', body: 'Ringan untuk menemani rutinitas harian.', icon: 'bi-flower2', tone: 'green' },
];

export const skinConcerns = [
  { title: 'Kulit Rentan Berjerawat', description: 'Saat kulit terasa tidak nyaman, pilih rutinitas yang sederhana dan tidak berlebihan.', type: 'acne', number: '01' },
  { title: 'Kemerahan', description: 'Kulit yang tampak kemerahan membutuhkan perhatian dan pilihan produk yang sesuai.', type: 'redness', number: '02' },
  { title: 'Tekstur Tidak Merata', description: 'Kenali kebutuhan kulitmu sebelum menentukan tahapan skincare.', type: 'texture', number: '03' },
  { title: 'Skin Barrier Terasa Kering', description: 'Menjaga kelembapan merupakan salah satu langkah dalam rutinitas perawatan.', type: 'barrier', number: '04' },
];

export const testimonials = [
  { name: 'Natasha', initial: 'N', title: 'Skincare enthusiast', quote: 'Aku suka tekstur gel yang ringan dan nyaman. Rasanya pas banget buat melengkapi morning routine!', color: 'peach' },
  { name: 'Morgan', initial: 'M', title: 'Beauty lover', quote: 'Packaging-nya gemes, dan aku suka skincare yang simpel tapi tetap terasa fun setiap hari.', color: 'lilac' },
  { name: 'Yelena', initial: 'Y', title: 'Daily skincare fan', quote: 'Tampilannya cute banget! Informasi ingredients-nya juga jelas dan gampang dimengerti.', color: 'mint' },
];
