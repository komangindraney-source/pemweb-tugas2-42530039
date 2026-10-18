const menuData = [
  {
    id: '1',
    nama: 'Kopi Susu Gula Aren',
    kategori: 'kopi',
    harga: 18000,
    deskripsi: 'Espresso segar dipadu susu sapi murni dan gula aren asli.',
    gambar: '/images/kosu.jpeg'
  },
  {
    id: '2',
    nama: 'Americano Cold Brew',
    kategori: 'kopi',
    harga: 15000,
    deskripsi: 'Ekstrak kopi hitam dingin dengan rasa asam-pahit yang seimbang.',
    gambar: '/images/americano.jpeg'
  },
  {
    id: '3',
    nama: 'Matcha Latte',
    kategori: 'non-kopi',
    harga: 22000,
    deskripsi: 'Teh hijau Jepang bubuk asli disajikan dengan susu lembut.',
    gambar: '/images/matcha.jpeg'
  },
  {
    id: '4',
    nama: 'Croissant Cokelat',
    kategori: 'makanan',
    harga: 20000,
    deskripsi: 'Roti pastry renyah bertingkat dengan isian cokelat lumer.',
    gambar: '/images/croissant.jpeg'
  }
];

exports.getAllMenu = (req, res) => {
  const { kategori } = req.query;
  let filteredMenu = menuData;

  if (kategori) {
    filteredMenu = menuData.filter(item => item.kategori.toLowerCase() === kategori.toLowerCase());
  }

  res.render('index', {
    title: 'Katalog Menu Kafe',
    menus: filteredMenu,
    selectedKategori: kategori || ''
  });
};

exports.getMenuDetail = (req, res) => {
  const { id } = req.params;
  const menuItem = menuData.find(item => item.id === id);

  if (!menuItem) {
    return res.status(404).render('404', { title: 'Menu Tidak Ditemukan' });
  }

  res.render('detail', {
    title: menuItem.nama,
    menu: menuItem
  });
};