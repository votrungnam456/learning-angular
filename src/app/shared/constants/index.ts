export const DATA_HOUSE = {
  locations: [
    {
      id: 0,
      name: 'Acme Fresh Start Housing',
      city: 'Chicago',
      state: 'IL',
      photo:
        'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?cs=srgb&dl=pexels-binyaminmellish-106399.jpg&fm=jpg',
      availableUnits: 4,
      wifi: true,
      laundry: true,
    },
    {
      id: 1,
      name: 'A113 Transitional Housing',
      city: 'Santa Monica',
      state: 'CA',
      photo:
        'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?cs=srgb&dl=pexels-binyaminmellish-106399.jpg&fm=jpg',
      availableUnits: 0,
      wifi: false,
      laundry: true,
    },
    {
      id: 2,
      name: 'Warm Beds Housing Support',
      city: 'Juneau',
      state: 'AK',
      photo:
        'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?cs=srgb&dl=pexels-binyaminmellish-106399.jpg&fm=jpg',
      availableUnits: 1,
      wifi: false,
      laundry: false,
    },
    {
      id: 3,
      name: 'Homesteady Housing',
      city: 'Chicago',
      state: 'IL',
      photo:
        'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?cs=srgb&dl=pexels-binyaminmellish-106399.jpg&fm=jpg',
      availableUnits: 1,
      wifi: true,
      laundry: false,
    },
    {
      id: 4,
      name: 'Happy Homes Group',
      city: 'Gary',
      state: 'IN',
      photo:
        'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?cs=srgb&dl=pexels-binyaminmellish-106399.jpg&fm=jpg',
      availableUnits: 1,
      wifi: true,
      laundry: false,
    },
    {
      id: 5,
      name: 'Hopeful Apartment Group',
      city: 'Oakland',
      state: 'CA',
      photo:
        'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?cs=srgb&dl=pexels-binyaminmellish-106399.jpg&fm=jpg',
      availableUnits: 2,
      wifi: true,
      laundry: true,
    },
    {
      id: 6,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
      photo:
        'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?cs=srgb&dl=pexels-binyaminmellish-106399.jpg&fm=jpg',
      availableUnits: 5,
      wifi: true,
      laundry: true,
    },
    {
      id: 7,
      name: 'Hopeful Housing Solutions',
      city: 'Oakland',
      state: 'CA',
      photo:
        'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?cs=srgb&dl=pexels-binyaminmellish-106399.jpg&fm=jpg',
      availableUnits: 2,
      wifi: true,
      laundry: true,
    },
    {
      id: 8,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
      photo:
        'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?cs=srgb&dl=pexels-binyaminmellish-106399.jpg&fm=jpg',
      availableUnits: 10,
      wifi: false,
      laundry: false,
    },
    {
      id: 9,
      name: 'Capital Safe Towns',
      city: 'Portland',
      state: 'OR',
      photo:
        'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?cs=srgb&dl=pexels-binyaminmellish-106399.jpg&fm=jpg',
      availableUnits: 6,
      wifi: true,
      laundry: true,
    },
  ],
};

export const DATA_LIST_PRODUCT = {
  products: [
    {
      id: 'P001',
      name: 'Sữa tươi Vinamilk 1L',
      category: 'Đồ uống',
      price: 30000,
      quantityInStock: 150,
      // expiryDate: '2025-01-01',
      description: 'Sữa tươi tiệt trùng Vinamilk không đường, dung tích 1 lít.',
      supplier: {
        name: 'Công ty CP Sữa Việt Nam (Vinamilk)',
        contactNumber: '0123456789',
        address:
          'Tòa nhà Vinamilk, 184-186 Nguyễn Đình Chiểu, Quận 3, TP. Hồ Chí Minh',
      },
    },
    {
      id: 'P002',
      name: 'Nước ngọt Coca-Cola 1.5L',
      category: 'Đồ uống',
      price: 18000,
      quantityInStock: 200,
      // expiryDate: '2024-12-31',
      description: 'Nước ngọt Coca-Cola vị truyền thống, dung tích 1.5 lít.',
      supplier: {
        name: 'Công ty TNHH Nước Giải Khát Coca-Cola Việt Nam',
        contactNumber: '0987654321',
        address: 'Số 9 Đường Tân Phú, Phường Tân Phú, Quận 7, TP. Hồ Chí Minh',
      },
    },
    {
      id: 'P003',
      name: 'Trà xanh C2 350ml',
      category: 'Đồ uống',
      price: 7000,
      quantityInStock: 300,
      // expiryDate: '2024-11-30',
      description: 'Trà xanh C2 không đường, dung tích 350ml.',
      supplier: {
        name: 'Công ty TNHH URC Việt Nam',
        contactNumber: '0345678901',
        address:
          'Lô 5-7-9, Đường số 13, Khu Công Nghiệp Việt Nam - Singapore, Bình Dương',
      },
    },
    {
      id: 'P004',
      name: 'Sữa đậu nành Fami 200ml',
      category: 'Đồ uống',
      price: 5000,
      quantityInStock: 250,
      // expiryDate: '2024-10-01',
      description: 'Sữa đậu nành Fami nguyên chất, hộp 200ml.',
      supplier: {
        name: 'Công ty CP Vinasoy',
        contactNumber: '0456789012',
        address:
          'Khu Công Nghiệp Quảng Ngãi, Thành Phố Quảng Ngãi, Tỉnh Quảng Ngãi',
      },
    },
    {
      id: 'P005',
      name: 'Nước khoáng Lavie 500ml',
      category: 'Đồ uống',
      price: 5000,
      quantityInStock: 500,
      // expiryDate: '2025-06-30',
      description: 'Nước khoáng thiên nhiên Lavie, chai 500ml.',
      supplier: {
        name: 'Công ty TNHH Lavie',
        contactNumber: '0567890123',
        address: 'Số 1, Đường Nước Khoáng, Khu Công Nghiệp Thạch Thất, Hà Nội',
      },
    },
  ],
};

export const LIST_FORM_DATA = [
  {
    type: 'rent-house',
    data: [
      // { label: 'id', type: 'number', data: '' },
      {
        label: 'Name',
        type: 'string',
        data: '',
        placeholder: 'Enter name',
        params: 'name',
      },
      {
        label: 'City',
        type: 'string',
        data: '',
        placeholder: 'Enter city',
        params: 'city',
      },
      {
        label: 'State',
        type: 'string',
        data: '',
        placeholder: 'Enter state',
        params: 'state',
      },
      // { label: 'photo', type: 'string', data: '' },
      {
        label: 'Available Units',
        type: 'number',
        data: 0,
        placeholder: 'Enter available units',
        params: 'availableUnits',
      },
      {
        label: 'Wifi',
        type: 'checkbox',
        data: false,
        placeholder: '',
        params: 'wifi',
      },
      {
        label: 'Laundry',
        type: 'checkbox',
        data: false,
        placeholder: '',
        params: 'laundry',
      },
    ],
  },
  {
    type: 'shopping',
    data: [
      // { label: 'id', type: 'string', data: 0},
      {
        label: 'Name',
        type: 'string',
        data: '',
        placeholder: 'Enter name',
        params: 'name',
      },
      {
        label: 'Category',
        type: 'string',
        data: '',
        placeholder: 'Enter category',
        params: 'category',
      },
      {
        label: 'Price',
        type: 'number',
        data: 0,
        placeholder: 'Enter price',
        params: 'price',
      },
      {
        label: 'Quantity In Stock',
        type: 'number',
        data: 0,
        placeholder: 'Enter quantity in stock',
        params: 'quantityInStock',
      },
      {
        label: 'Description',
        type: 'string',
        data: '',
        placeholder: 'Enter description',
        params: 'description',
      },
      {
        label: "Supplier's name",
        type: 'string',
        data: '',
        placeholder: "Enter supplier's name",
        params: 'supplierName',
      },
      {
        label: "Supplier's contact number",
        type: 'string',
        data: '',
        placeholder: 'Enter contact number',
        params: 'supplierContactNumber',
      },
      {
        label: "Supplier's address ",
        type: 'string',
        data: '',
        placeholder: 'Enter address',
        params: 'supplierAddress',
      },
    ],
  },
];

export const LIST_NAME_TYPE = [
  {
    name: 'rent-house',
    title: 'nhà cho thuê',
  },
  {
    name: 'shopping',
    title: 'sản phẩm',
  },
];
