import { atom } from "recoil";

export const isBlockState = atom({
  key: "isBlockState",
  default: "",
});

export const imageListState = atom({
  key: "imageListState",
  default: [
    {
      src: "/Images/Group 70223.png",
      alt: "",
      top: "-50px",
      right: "425px",
    },
    {
      src: "/Images/Group 70224.png",
      alt: "",
      top: "-50px",
      right: "50px",
    },
    {
      src: "/Images/Group 70222.png",
      alt: "",
      top: "300px",
      right: "200px",
    },
  ],
});

export const blogImagesState = atom({
  key: "blogImagesState",
  default: [
    "/Images/Rectangle 9194.png",
    "/Images/Rectangle 9194 (1).png",
    "/Images/Rectangle 9194 (2).png",
    "/Images/Rectangle 9194.png",
    "/Images/Rectangle 9194 (1).png",
    "/Images/Rectangle 9194 (2).png",
  ],
});

export const readingTimeState = atom({
  key: "readingTimeState",
  default: "2 دقیقه",
});

export const phoneNumberState = atom({
  key: "phoneNumberState",
  default: "09152663045",
});

export const consultationDataState = atom({
  key: "consultationDataState",
  default: {
    name: "",
    phoneNumber: "",
    companyName: "",
    subject: "",
  },
});

export const productPurchaseCountState = atom({
  key: "productPurchaseCount",
  default: 450,
});

export const activeUserCountState = atom({
  key: "activeUserCount",
  default: 320,
});

export const customerImagesState = atom({
  key: "customerImagesState",
  default: ["/Images/image 1362.png"],
});

export const demoState = atom({
  key: "demoState",
  default: false, // مقدار پیش‌فرض برای دمو رایگان
});

export const goalTextState = atom({
  key: "goalTextState",
  default: `یک استراتژی در پروسه ی بازاریابی کسب وکار است که تمام نظام و
      فعالیت های موجود در سازمان را حول محور مشتری یکپارچه میسازد.
      در این نرم افزار شما به عنوان مدیر فروش میتوانید با برنامه ریزی و زمان
      بندی و پیش بینی فروش کسب و کار خود را به درجه ی بالای کیفی برسانید.
      نرم افزار های سی ار ام که با تجزیه و تحلیل اطلاعات شرکت شما جز
      نرم افزار های هوش تجاری نیز شناخته میشود با هدف توانمند کردن سازمان
      شما جهت ایجاد ارتباط و تعامل با مشتری – ترغیب – گسترش – حفظ و
      ارایه خدمات بهتر به مشتریان در راضی نگه داشتن و وفادار سازی مشتری
      نقش مهمی ایفا میکند.`,
});

export const AllImgGoal = atom({
  key: "imgOfGoal",
  default: [
    {
      src: "/Images/Ellipse 399.png",
      class: "absolute top-[150px] right-[10px]",
      alt: "",
      width: 522,
      height:522
    },
    {
      src: "/Images/Ellipse 399.png",
      class: "absolute top-[150px] right-[840px]",
      alt: "",
      width:522 , 
      height: 522
    },
    {
      src: "/Images/Ellipse 372.png",
      class: "absolute top-[250px] right-[1100px] ",
      alt: "",
      width: 20, 
      height: 0
    },
    {
      src: "/Images/Polygon 7.png",
      class: "absolute top-[650px] right-[270px] h-auto",
      alt: "",
      width: 30, 
      height:0 
    },
  ],
});

export const optionsState = atom({
  key: "optionsState",
  default: [
    {
      top: "-10px",
      right: "400px",
      title: " افزایش میزان روابط  مشتریان",
      srcimg: "/Images/Frame 34770 (1).png",
      width: "380px",
    },
    {
      top: "450px",
      right: "-250px",
      title: "افزایش  رضایت مشتریان",
      srcimg: "/Images/Frame 34770 (2).png",
      width: "350px",
    },
    {
      top: "200px",
      right: "-250px",
      title: "افزایش سود فروش",
      srcimg: "/Images/Frame 34770.png",
      width: "300px",
    },
    {
      top: "450px",
      right: "450px",
      title: "افزایش درامد حاصل از فروش",
      srcimg: "/Images/Frame 34770 (3).png",
      width: "400px",
    },
  ],
});

export const isLoggedInState = atom({
  key: "isLoggedIn",
  default: false,
});

export const languageState = atom({
  key: "languageState",
  default: "En", // یا مقدار پیش‌فرض مورد نظر
});

export const AllImagesOfNavAbsu = atom({
  key: "AllImagesOfNavAbsu",
  default: [
    {
      src: "/Images/Vector 31.png",
      alt: "",
      className: "top-[60px] right-[370px]",
      width:20,
      height: 20
    },
    {
      src: "/Images/Group 34771.png",
      alt: "",
      className: "top-[180px] right-[0]",
      width:20,
      height: 20
    },
    {
      src: "/Images/Ellipse 361.png",
      alt: "",
      className: "top-[100px] right-[1350px] w-[8px]",
      width:20,
      height: 20
    },
    {
      src: "/Images/Ellipse 361.png",
      alt: "",
      className: "top-[130px] right-[400px]",
      width:10,
      height: 10
    },
    {
      src: "/Images/Ellipse 362.png",
      alt: "",
      className: "top-[250px] right-[170px]",
      width:10,
      height: 10
    },
    {
      src: "/Images/Ellipse 363.png",
      alt: "",
      className: "top-[160px] right-[1150px]",
      width:10,
      height: 10
    },
    {
      src: "/Images/Vector22.png",
      alt: "",
      className: "top-[310px] right-[1320px]",
      width:10,
      height: 10
    },
  ],
});

export const progressState = atom({
  key: "progressState",
  default: 0,
});

export const prosState = atom({
  key: "prosState",
  default: [
    {
      title: "صرفه جویی در زمان",
      parag:
        "یکی از واقعیت ها ناخوشایند بخش فروش حجم کاری زیاد است. حذف کاغذ از فرایند های کار باعث صرفه جویی زمان تا حد قابل توجهی می‌شود.",
      srcpic: "/Images/react-group-132.png",
    },
    {
      title: "سازماندهی",
      parag:
        "استفاده از این سیستم باعث می‌شود که بتوانید با سهولت بیشتری کار خود را سازماندهی کنید.",
      srcpic: "/Images/ReadingSideDoodle 1.png",
    },
    {
      title: "ارتباط برقرار کردن",
      parag:
        "سی ار ام می‌تواند اکثر این ارتباطات را به صورت خودکار انجام دهد و اطلاعات مختلف را در اختیار کاربران کلی، قالب یا اسکریپت قرار دهد.",
      srcpic: "/Images/Group 34787.png",
    },
    {
      title: "ایجاد سریعتر سرنخ فروش",
      parag:
        "زمانی که دررابطه با محصول خود اطلاعات دارید میتوانید با سرعت بیشتری سرنخ های فروش ایجاد کنید و این سیستم پیدا کردن اطلاعات مورد نیاز را برای شما اسان تر میکند ",
      srcpic: "/Images/SprintingDoodle 1.png",
    },
    {
      title: "مدیریت خدمات",
      parag:
        "مواردی نظیر قیمت دهی به مشتریان و پردازش ان گرفته تا گرفتن سفارش و تنظیم تاریخچه ی دقیقی از ارتباط مشتری",
      srcpic: "/Images/MessyDoodle 1.png",
    },
    {
      title: "شناسایی نیاز های مشتری",
      parag:
        "این سیستم باعث میشود نیاز های مشتریان شناسایی شده و پاسخ مناسب برای نیاز های فعلی و اینده مشتریان درنظر گرفته شود",
      srcpic: "/Images/ZombieingDoodle 1.png",
    },
    {
      title: "برنامه ریزی امور فروش",
      parag:
        "تیم فروش میتواند با انالیز داده های سی ار ام امکان پیش بینی میزان فروش و درامد تخمینی کلی را دراختیار داشته باشد.",
      srcpic: "/Images/UnboxingDoodle 1.png",
    },
  ],
});


export const slideArrState = atom({
  key: 'slideArrState',
  default: {
    srcImgArr: "/default/path/arr.png",
    srcImgPerc: "/Images/+90%.png",
    srcImgVideo: "/default/path/video.png",
    styleBg: "defaultBgClass",
    textColor: "defaultTextColorClass",
  },
});

export const whereContentState = atom({
  key: 'whereContentState',
  default: {
    title: "در هر کجایی دنیا که هستی کسب و کارت رو آنلاین مدیریت کن",
    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربر",
    buttonText: "دریافت مشاوره رایگان",
  },
});

export const phoneNumberStatee = atom({
  key: 'phoneNumberStatee',
  default: '',
});

export const otpNumberState = atom({
  key: 'otpNumberState',
  default: '',
});

export const PasswordNumberState = atom({
  key: 'PasswordNumberState',
  default: '',
});



export const imageList = atom({
  key: "imageList",
  default: [
    {
      src: "/Images/Group 70223.png",
      alt: "",
      top: "40px",
      right: "675px",
    },
    {
      src: "/Images/Group 70224.png",
      alt: "",
      top: "265px",
      right: "-80px",
    },
    {
      src: "/Images/Group 70222.png",
      alt: "",
      top: "400px",
      right: "200px",
    },
    {
      src: "/Images/Group 70221.png",
      alt: "",
      top: "320px",
      right: "600px",
    },
    {
      src: "/Images/Group 70220.png",
      alt: "",
      top: "50px",
      right: "-150px",
    },
  ]
})


export const ServicesData = atom({
  key: "imageListData",
  default: [
    {
      text: "حسابداری آنلاین",
      image1: "/Images/Group 3476233.png",
      image2: "/Images/Group 34762.png",
    },
    {
      text: "مدیریت نیروی کار",
      image1: "/Images/managment1.png",
      image2: "/Images/3.png",
    },
    {
      text: "گفتوگو با مشتریان",
      image1: "/Images/CRM.png",
      image2: "/Images/1.png",
    },
    {
      text: "اپلیکیشن فروش",
      image1: "/Images/mobile11.png",
      image2: "/Images/4.png",
    },
    {
      text: "سایت فروش",
      image1: "/Images/mobile11.png",
      image2: "/Images/4.png",
    },
  ]
})