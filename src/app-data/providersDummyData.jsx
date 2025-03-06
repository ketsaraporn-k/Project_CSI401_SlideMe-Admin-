const providerDummyData = [
    {
      id: 1,
      name: "สมชาย",
      surname: "ใจดี",
      email: "somchai@example.com",
      phoneNumber: "0812345678",
      slideCarType: "รถสไลด์ขนาดเล็ก",
      slideCarDetails: "สามารถขนย้ายรถยนต์น้ำหนักไม่เกิน 1.5 ตัน"
    },
    {
      id: 2,
      name: "สุนทร",
      surname: "มีศรี",
      email: "sunthorn@example.com",
      phoneNumber: "0823456789",
      slideCarType: "รถสไลด์ขนาดกลาง",
      slideCarDetails: "รับน้ำหนักได้ถึง 3 ตัน เหมาะสำหรับรถยนต์ขนาดกลาง"
    },
    {
      id: 3,
      name: "มานพ",
      surname: "จันทร์เจ้า",
      email: "manop@example.com",
      phoneNumber: "0834567890",
      slideCarType: "รถสไลด์ขนาดใหญ่",
      slideCarDetails: "รองรับน้ำหนักสูงสุด 5 ตัน เหมาะสำหรับรถบรรทุกเล็ก"
    },
    {
      id: 4,
      name: "สมจิตร",
      surname: "ใจสู้",
      email: "somjit@example.com",
      phoneNumber: "0845678901",
      slideCarType: "รถสไลด์ขนาดเล็ก",
      slideCarDetails: "เหมาะสำหรับรถเก๋งและรถยนต์ขนาดเล็ก"
    },
    {
      id: 5,
      name: "วิทยา",
      surname: "แสงสว่าง",
      email: "vithaya@example.com",
      phoneNumber: "0856789012",
      slideCarType: "รถสไลด์ขนาดกลาง",
      slideCarDetails: "รับน้ำหนักได้ 3.5 ตัน พร้อมระบบล็อคล้อ"
    },
    {
      id: 6,
      name: "เจษฎา",
      surname: "ภูมิใจ",
      email: "jetsada@example.com",
      phoneNumber: "0867890123",
      slideCarType: "รถสไลด์ขนาดใหญ่",
      slideCarDetails: "เหมาะสำหรับรถยนต์และรถบรรทุกขนาดกลางถึงใหญ่"
    },
    {
      id: 7,
      name: "สมบัติ",
      surname: "ยอดรัก",
      email: "sombat@example.com",
      phoneNumber: "0878901234",
      slideCarType: "รถสไลด์ขนาดเล็ก",
      slideCarDetails: "รับน้ำหนักไม่เกิน 2 ตัน เหมาะสำหรับรถเก๋ง"
    },
    {
      id: 8,
      name: "วรรณา",
      surname: "สุดสวย",
      email: "wanna@example.com",
      phoneNumber: "0889012345",
      slideCarType: "รถสไลด์ขนาดกลาง",
      slideCarDetails: "สามารถขนย้ายรถยนต์ได้หลากหลายประเภท"
    },
    {
      id: 9,
      name: "พิมพ์ใจ",
      surname: "สุขสันต์",
      email: "pimjai@example.com",
      phoneNumber: "0890123456",
      slideCarType: "รถสไลด์ขนาดใหญ่",
      slideCarDetails: "รับน้ำหนักได้สูงสุด 5.5 ตัน เหมาะสำหรับรถบรรทุก"
    },
    {
      id: 10,
      name: "กิตติ",
      surname: "ดำรง",
      email: "kitti@example.com",
      phoneNumber: "0801234567",
      slideCarType: "รถสไลด์ขนาดเล็ก",
      slideCarDetails: "เหมาะสำหรับขนย้ายรถยนต์ขนาดเล็กและรถจักรยานยนต์"
    },
    {
      id: 11,
      name: "จารุวรรณ",
      surname: "ธนเศรษฐ์",
      email: "jaruwan@example.com",
      phoneNumber: "0812345567",
      slideCarType: "รถสไลด์ขนาดกลาง",
      slideCarDetails: "มีระบบป้องกันการสั่นสะเทือน เหมาะสำหรับรถเก๋ง"
    },
    {
      id: 12,
      name: "พรทิพย์",
      surname: "วิสุทธิ์",
      email: "pornthip@example.com",
      phoneNumber: "0823456678",
      slideCarType: "รถสไลด์ขนาดใหญ่",
      slideCarDetails: "รับน้ำหนักได้ถึง 6 ตัน เหมาะสำหรับรถตู้และรถบรรทุกเล็ก"
    },
    {
      id: 13,
      name: "ชัยชนะ",
      surname: "เรืองแสง",
      email: "chaichana@example.com",
      phoneNumber: "0834567789",
      slideCarType: "รถสไลด์ขนาดเล็ก",
      slideCarDetails: "รองรับน้ำหนักสูงสุด 1.8 ตัน เหมาะสำหรับรถเก๋ง"
    },
    {
      id: 14,
      name: "เกษม",
      surname: "เพ็ญโสม",
      email: "kasem@example.com",
      phoneNumber: "0845678890",
      slideCarType: "รถสไลด์ขนาดกลาง",
      slideCarDetails: "ระบบขับเคลื่อนอัตโนมัติ รองรับน้ำหนักได้ถึง 3 ตัน"
    },
    {
      id: 15,
      name: "พิชิต",
      surname: "ยอดเก่ง",
      email: "pichit@example.com",
      phoneNumber: "0856789901",
      slideCarType: "รถสไลด์ขนาดใหญ่",
      slideCarDetails: "ขนย้ายรถบรรทุกขนาดกลางได้อย่างปลอดภัย"
    },
    {
      id: 16,
      name: "ดารณี",
      surname: "นพคุณ",
      email: "daranee@example.com",
      phoneNumber: "0867891012",
      slideCarType: "รถสไลด์ขนาดเล็ก",
      slideCarDetails: "รับน้ำหนักไม่เกิน 2 ตัน เหมาะสำหรับรถเก๋ง"
    },
    {
      id: 17,
      name: "สมพร",
      surname: "วงศ์ไพศาล",
      email: "somporn@example.com",
      phoneNumber: "0878901111",
      slideCarType: "รถสไลด์ขนาดกลาง",
      slideCarDetails: "เหมาะสำหรับรถเก๋งและรถกระบะขนาดเล็ก"
    },
    {
      id: 18,
      name: "เพ็ญแข",
      surname: "รักดี",
      email: "penkae@example.com",
      phoneNumber: "0889011222",
      slideCarType: "รถสไลด์ขนาดใหญ่",
      slideCarDetails: "รับน้ำหนักได้ 5 ตัน พร้อมระบบกันสั่นสะเทือน"
    },
    {
      id: 19,
      name: "มานิตย์",
      surname: "ชนะชัย",
      email: "manit@example.com",
      phoneNumber: "0890122333",
      slideCarType: "รถสไลด์ขนาดเล็ก",
      slideCarDetails: "เหมาะสำหรับรถยนต์ขนาดเล็ก น้ำหนักไม่เกิน 1.5 ตัน"
    },
    {
      id: 20,
      name: "สมหมาย",
      surname: "สุขใจ",
      email: "sommai@example.com",
      phoneNumber: "0801233444",
      slideCarType: "รถสไลด์ขนาดกลาง",
      slideCarDetails: "ระบบล็อคแน่นหนา รองรับรถยนต์ขนาดกลางถึงใหญ่"
    }
  ];
  
  export default providerDummyData;
  