/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */
import { CourtEntity } from 'src/app/entities/Court.entity';
import { VenueEntity } from 'src/app/entities/Venue.entity';

export const venueMock: VenueEntity = {
    id: 1,
    name: 'Goro Arena',
    city: 'Makassar',
    operating_time: '06:00 - 22:00',
    location: 'Jl. Yusuf Daeng Ngawing Blok E 19 No.1, Tidung, Kec. Rappocini, Kota Makassar, Sulawesi Selatan 90222',
    latitude: -5.1899999999999995,
    longitude: 119.4,
    terms: 'Nemo modi exercitationem sunt sed perspiciatis aut non est nesciunt doloremque aliqua Voluptatem',
    category_id: 2,
    created_at: '2022-10-22T01:08:55.000000Z',
    updated_at: '2022-10-22T01:18:40.000000Z',
    deleted_at: null,
    logo: 'y5tsWoaYqSrI9ydFwpHSbfpvnnRjuSDMwCmkdba8.png',
    image1: '24F9FOPd0nWGnNj8n6YOT1IdQlGbEH5ALailDafn.jpg',
    image2: 'Reu73zHDCB2nlBoleeSZ8bfdo9TKEfF8KdBGOF4j.jpg',
    image3: 'plmIgdpgmcdCEoK57HjfmJmqHER7N67oGVLs0Wr5.jpg',
    rating: '5.0',
    description: 'Nemo modi exercitationem sunt sed perspiciatis aut non est nesciunt doloremque aliqua Voluptatem',
    operating_day: 'Senin - Minggu',
    facilities: [
        {
            id: 1,
            name: 'Free Air Gelas',
            image: '5iSU4wN4IB7XdLuUQ4wtP39oKWm9iwrK3NgtaWLC.svg',
        },
        {
            id: 2,
            name: 'Parkir Mobil',
            image: 'XZ8O39heQFaHbyeolTOUOf5EROSlQyxpoQLlWEgU.svg',
        },
        {
            id: 3,
            name: 'Parkir Motor',
            image: 'kagJlFe8ZwX4CAImlzflgUgR4Z5cz8L48xdOS63n.svg',
        },
        {
            id: 4,
            name: 'Musholla',
            image: 'IM2Juvn09pIJMuWOSRH6j6yKn4JewVtBfoQlM1Sd.svg',
        },
        {
            id: 5,
            name: 'Toilet',
            image: 'T6ekFKTl745sUcEEDNTlBQd1eJDOnVRJf2M5auwA.svg',
        },
        {
            id: 6,
            name: 'Shower',
            image: 'SmFXTmTB4NRTUqwI14xcOrxJLC4osF5JXSxgQBa8.svg',
        },
        {
            id: 7,
            name: 'Ruang Ganti',
            image: '47tJt5OjaFpR2GcmWuhBDuJ8xKnFJ0DbUdJHjH54.svg',
        },
        {
            id: 8,
            name: 'Tribun Penonton',
            image: 'lYaroakZ3ZjBtiL75P2fsUvDVz1GoSc8ngL601Fw.svg',
        }
    ],
    courts: [
        {
            id: 1,
            name: 'Lapangan  Futsal',
            image: 'Vodkjs9QSnXkrObHrkpX3730otbhvaPAQk0KsFbc.jpg',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
            price: 25000,
            price_description: 'IDR 25000/ Sesi',
            field_type: 'Outdoor',
            pedestal_type: 'Terpal',
            sports: 'Futsal',
            created_at: '2022-10-20T02:37:49.000000Z',
            venue_id: 1
        },
        {
            id: 3,
            name: 'Lapangan B',
            image: 'kYC7uKjbL6zzKCValdgKJ939oIdMJvREqGvtHETn.jpg',
            description: 'Lapangan dengan standar international dengan memakai rumput sintetik, dengan suasana outdoor, sangat cocok dengan latihan kamu',
            price: 250000,
            price_description: 'IDR 250000/Sesi',
            field_type: 'Outdoor',
            pedestal_type: 'Rumput Sintetis',
            sports: 'Futsal',
            created_at: '2022-10-22T02:48:00.000000Z',
            venue_id: 1
        },
        {
            id: 2,
            name: 'Lapangan A',
            image: 'g1rfz813GqTdVaDN0o3vcYhlXUcX7ke5CTT0KDrJ.jpg',
            description: 'Lapangan dengan standar international dengan memakai rumput sintetik, dengan suasana outdoor, sangat cocok dengan latihan kamu',
            price: 350000,
            price_description: 'IDR 350000 / Sesi',
            field_type: 'Outdoor',
            pedestal_type: 'Rumput Sintetis',
            sports: 'Futsal',
            created_at: '2022-10-22T02:44:12.000000Z',
            venue_id: 1
        }
    ]

};

export const courtMock: CourtEntity =  {
    id: 1,
    name: 'Lapangan  Futsal',
    image: 'Vodkjs9QSnXkrObHrkpX3730otbhvaPAQk0KsFbc.jpg',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
    price: 25000,
    price_description: 'IDR 25000/ Sesi',
    field_type: 'Outdoor',
    pedestal_type: 'Terpal',
    sports: 'Futsal',
    created_at: '2022-10-20T02:37:49.000000Z',
    venue_id: 1
};

