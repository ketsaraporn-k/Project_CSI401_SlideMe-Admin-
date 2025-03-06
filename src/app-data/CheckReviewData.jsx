const data = [
  {
    id: '2487',
    name: "buzzlightyear420",
    userReview: "Great support and very professional service.",
    rating: `<i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i>`,
  },
  {
    id: '9183',
    name: "noobmaster69",
    userReview: "Service exceeded my expectations.",
    rating: `<i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i>`,
  },
  {
    id: '1634',
    name: "playerone33",
    userReview: "Attention to detail was impressive.",
    rating: `<i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star-half text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i>`,
  },
  {
    id: '2074',
    name: "legendaryjay",
    userReview: "Delivered on time and as promised.",
    rating: `<i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i>`,
  },
  {
    id: '3641',
    name: "catlover22",
    userReview: "Handled the project efficiently.",
    rating: `<i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i>`,
  },
  {
    id: '4256',
    name: "ninja_hero",
    userReview: "Expertise was evident throughout.",
    rating: `<i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i>`,
  },
  {
    id: '9753',
    name: "sasukefan123",
    userReview: "Guidance made the process stress-free.",
    rating: `<i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i>`,
  },
  {
    id: '8421',
    name: "kawaiicat",
    userReview: "Very attentive and responsive.",
    rating: `<i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star-half text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i>`,
  },
  {
    id: '3452',
    name: "prosniper99",
    userReview: "Very patient and supportive.",
    rating: `<i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i>`,
  },
  {
    id: '7492',
    name: "darkknight777",
    userReview: "Professionalism in every interaction.",
    rating: `<i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star-half text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i>`,
  },
  {
    id: '5291',
    name: "swordfighter99",
    userReview: "Exceeded expectations in quality and delivery.",
    rating: `<i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i>`,
  },
  {
    id: '6894',
    name: "space_ranger",
    userReview: "Highly professional and on point with requirements.",
    rating: `<i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i>`,
  },
  {
    id: '2301',
    name: "maximalplayer",
    userReview: "Made the process easy and smooth.",
    rating: `<i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star-half text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i>`,
  },
  {
    id: '9482',
    name: "swiftmaster01",
    userReview: "Excellent work, but could be faster on responses.",
    rating: `<i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i>`,
  },
  {
    id: '5028',
    name: "gamerboss007",
    userReview: "Highly recommended, effective and reliable.",
    rating: `<i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i>`,
  },
  {
    id: '7521',
    name: "lightningbolt9",
    userReview: "Very responsive and clear in communication.",
    rating: `<i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star-half text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i>`,
  },
  {
    id: '6432',
    name: "techmaven88",
    userReview: "Professional and easy to work with.",
    rating: `<i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i>`,
  },
  {
    id: '8907',
    name: "wildcardhero",
    userReview: "Great results, delivered ahead of time.",
    rating: `<i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i>`,
  },
  {
    id: '2310',
    name: "dreamchaser77",
    userReview: "Fantastic quality and attention to detail.",
    rating: `<i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i>`,
  },
  {
    id: '6840',
    name: "stormtracker99",
    userReview: "Handled every task with professionalism.",
    rating: `<i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star-half text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i>`,
  },
  {
    id: '7923',
    name: "skyforce99",
    userReview: "Completed the task quickly and professionally.",
    rating: `<i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i>`,
  },
  {
    id: '5083',
    name: "earthquakewatch",
    userReview: "Handled with efficiency and high quality.",
    rating: `<i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i>`,
  }
];

export default data
