let itemList = [
    {
        "id": "item-0",
        "name": "Phở Thìn Lò Đúc",
        "image": "https://live.staticflickr.com/65535/49080223036_d9aef6d042_o.png",
        "price": 30,
        "discount": 0,
        "address": "Số 2 Lò Đúc, Phạm Đình Hồ, Hai Bà Trưng, Hà Nội",
        "phoneNumber": "0703389389",
        "review": "https://blog.traveloka.com/vn/diem-danh-nhung-loai-pho-ngon-ha-noi/"
    },
    {
        "id": "item-1",
        "name": "Phở Bát Đàn",
        "image": "https://live.staticflickr.com/65535/49079694998_778b0bc102_o.png",
        "price": 30,
        "discount": 0,
        "address": "Số 49 Bát Đàn, Hoàn Kiếm, Hà Nội",
        "phoneNumber": "0582728728",
        "review": "https://jamja.vn/blog/quan-an-ngon-ha-noi.html#Pho_Bat_Dan"
    },
    {
        "id": "item-2",
        "name": "Bún chả Hàng Quạt",
        "image": "https://live.staticflickr.com/65535/49080222891_2b86f92c64_o.png",
        "price": 25,
        "discount": 0,
        "address": "Ngõ 74 Hàng Quạt, Hoàn Kiếm, Hà Nội",
        "phoneNumber": "0582149149",
        "review": "https://jamja.vn/blog/quan-an-ngon-ha-noi.html#Bun_cha-_so_74_Hang_Quat"
    },
    {
        "id": "item-3",
        "name": "Bún ốc Thúy",
        "image": "https://live.staticflickr.com/65535/49079694683_9fc18fc8a6_o.png",
        "price": 30,
        "discount": 0,
        "address": "Số 11 Ngõ Chợ Đồng Xuân, Hoàn Kiếm, Hà Nội",
        "phoneNumber": "0767389389",
        "review": "https://jamja.vn/blog/quan-an-ngon-ha-noi.html#Bun_oc_Thuy-_cho_Dong_Xuan"
    },
    {
        "id": "item-4",
        "name": "Bánh cuốn Bà Hoành",
        "image": "https://live.staticflickr.com/65535/49080427567_e4f9be28a8_o.png",
        "price": 30,
        "discount": 0,
        "address": "Số 66 Tô Hiến Thành, Hai Bà Trưng, Hà Nội",
        "phoneNumber": "0768765765",
        "review": "https://jamja.vn/blog/quan-an-ngon-ha-noi.html#Banh_cuon_Ba_Hoanh-_pho_Thanh_Tri"
    },
    {
        "id": "item-5",
        "name": "Bánh mỳ Trâm sốt vang",
        "image": "https://live.staticflickr.com/65535/49080427407_e1b153a24f_o.png",
        "price": 35,
        "discount": 0,
        "address": "Số 252 Hàng Bông, Hoàn Kiếm, Hà Nội",
        "phoneNumber": "0838624624",
        "review": "https://jamja.vn/blog/quan-an-ngon-ha-noi.html#Banh_my_Tram_sot_vang-_so_252_pho_Hang_Bong"
    },
    {
        "id": "item-6",
        "name": "Bánh đúc nóng - phố Lê Ngọc Hân",
        "image": "https://live.staticflickr.com/65535/49080427277_4cabcede9c_o.png",
        "price": 25,
        "discount": 0,
        "address": "Số 8 ngõ 8B Lê Ngọc Hân, Hai Bà Trưng, Hà Nội",
        "phoneNumber": "0767185185",
        "review": "https://jamja.vn/blog/quan-an-ngon-ha-noi.html#Banh_duc_nong-_pho_Le_Ngoc_Han"
    },
    {
        "id": "item-7",
        "name": "Mỳ vằn thắn Bình Tây",
        "image": "https://live.staticflickr.com/65535/49079694203_c62c117c30_o.png",
        "price": 45,
        "discount": 0,
        "address": "Số 54 Hàng Chiếu, Hoàn Kiếm, Hà Nội",
        "phoneNumber": "0849697697",
        "review": "https://jamja.vn/blog/quan-an-ngon-ha-noi.html#My_van_than_Binh_Tay"
    },
    {
        "id": "item-8",
        "name": "Caramen Hàng Than",
        "image": "https://live.staticflickr.com/65535/49080222251_5fff7c26e6_o.png",
        "price": 10,
        "discount": 0,
        "address": "Số 29 Hàng Than, Hà Nội",
        "phoneNumber": "0799778778",
        "review": "https://www.foodpanda.vn/mon-an-vat-ngon-ha-noi#Caramen_Hang_Than"
    },
    {
        "id": "item-9",
        "name": "Chân gà nướng Ngõ Gạch",
        "image": "https://live.staticflickr.com/65535/49080222171_f9d1e329ef_o.png",
        "price": 15,
        "discount": 0,
        "address": "Số 21 Ngõ Gạch, Hà Nội",
        "phoneNumber": "0814160160",
        "review": "https://www.foodpanda.vn/mon-an-vat-ngon-ha-noi#Chan_ga_nuong_so_21_Ngo_Gach"
    },
    {
        "id": "item-10",
        "name": "Bún đậu mắm tôm Hàng Khay",
        "image": "https://live.staticflickr.com/65535/49080222121_53b98c1c8a_o.png",
        "price": 30,
        "discount": 0,
        "address": "Ngõ 31 Hàng Khay, Hoàn Kiếm, Hà Nội",
        "phoneNumber": "0812937937",
        "review": "https://www.vntrip.vn/cam-nang/mon-ngon-pho-co-25569#6_Bun_dau_mam_tom_Hang_Khay"
    },
    {
        "id": "item-11",
        "name": "Chè Bốn Mùa Hàng Cân",
        "image": "https://live.staticflickr.com/65535/49079693658_74050083be_o.png",
        "price": 15,
        "discount": 0,
        "address": "Số 4 Hàng Cân, Hoàn Kiếm, Hà Nội",
        "phoneNumber": "0838872872",
        "review": "https://www.vntrip.vn/cam-nang/mon-ngon-pho-co-25569#14Che_Bon_Mua_Hang_Can"
    },
    {
        "id": "item-12",
        "name": "Bò nướng Mã Mây",
        "image": "https://live.staticflickr.com/65535/49080221906_400aea5c88_o.png",
        "price": 100,
        "discount": 0,
        "address": "Số 47 Mã Mây, Hàng Buồm, Hoàn Kiếm, Hà Nội",
        "phoneNumber": "0848550550",
        "review": "https://www.vntrip.vn/cam-nang/mon-ngon-pho-co-25569#15_Bo_nuongMa_May"
    },
    {
        "id": "item-13",
        "name": "Bún thang Cầu Gỗ",
        "image": "https://live.staticflickr.com/65535/49080221866_b0a0247a0e_o.png",
        "price": 30,
        "discount": 0,
        "address": "Số 48 Cầu Gỗ, Hoàn Kiếm, Hà Nội",
        "phoneNumber": "0813095095",
        "review": "https://www.vntrip.vn/cam-nang/mon-ngon-pho-co-25569#18_Bun_thang_Cau_Go"
    },
    {
        "id": "item-14",
        "name": "Hoa quả dầm Tô Tịch",
        "image": "https://live.staticflickr.com/65535/49079693558_2a7fae619c_o.png",
        "price": 15,
        "discount": 0,
        "address": "Phố Tô Tịch, Hàng Gai, Hoàn Kiếm, Hà Nội",
        "phoneNumber": "0847550550",
        "review": "https://www.vntrip.vn/cam-nang/mon-ngon-pho-co-25569#19_Hoa_qua_dam_To_Tich"
    },
    {
        "id": "item-15",
        "name": "Lòng Rán Nhất Quán",
        "image": "https://live.staticflickr.com/65535/49080221791_7b4d07a049_o.png",
        "price": 50,
        "discount": 0,
        "address": "Số 23 Nguyễn Siêu, Hoàn Kiếm, Hà Nội",
        "phoneNumber": "0834539539",
        "review": "https://khongsolac.com/top-10-mon-an-vat-o-ha-noi-ngon-re-gia-sinh-vien.html#Mon_An_Vat_Ha_Noi_Long_Ran_Nhat_Quan"
    },
    {
        "id": "item-16",
        "name": "Nem Chua Phượng",
        "image": "https://live.staticflickr.com/65535/49079693408_9736243011_o.png",
        "price": 50,
        "discount": 0,
        "address": "Số 10 Ấu Triệu, Hoàn Kiếm, Hà Nội",
        "phoneNumber": "0827512512",
        "review": "https://khongsolac.com/top-10-mon-an-vat-o-ha-noi-ngon-re-gia-sinh-vien.html#Quan_an_vat_ngon_re_o_Ha_Noi_Nem_Chua_Phuong"
    },
    {
        "id": "item-17",
        "name": "Phở Cuốn Ngũ Sắc",
        "image": "https://live.staticflickr.com/65535/49080426572_c69a7a09eb_o.png",
        "price": 50,
        "discount": 0,
        "address": "Số 156 Ô Chợ Dừa, Đống Đa, Hà Nội",
        "phoneNumber": "0853880880",
        "review": "https://khongsolac.com/top-10-mon-an-vat-o-ha-noi-ngon-re-gia-sinh-vien.html#Quan_Choen_Pho_Cuon_Ngu_Sac_Quan_An_Vat_Ha_Noi"
    },
    {
        "id": "item-18",
        "name": "Bún chả Ngan nướng Hà Nội",
        "image": "https://live.staticflickr.com/65535/49080221661_129ee690e8_o.png",
        "price": 25,
        "discount": 0,
        "address": "Số 75 Hàng Bông, Hoàn Kiếm, Hà Nội",
        "phoneNumber": "00829609609",
        "review": "https://khongsolac.com/top-10-mon-an-vat-o-ha-noi-ngon-re-gia-sinh-vien.html#Quan_An_Vat_Hien_Bun_Ngan_Cha_Ngan_Nuong_Ha_Noi"
    },
    {
        "id": "item-19",
        "name": "Bánh giò Tây Hồ",
        "image": "https://live.staticflickr.com/65535/49080221601_a722e3385a_o.png",
        "price": 25,
        "discount": 0,
        "address": "Vườn hoa Lý Tự Trọng (đoạn giao Thụy Khuê và Thanh Niên), Hà Nội",
        "phoneNumber": "0855771771",
        "review": "https://www.foodpanda.vn/mon-an-vat-ngon-ha-noi#Banh_gio_Tay_Ho"
    }
]