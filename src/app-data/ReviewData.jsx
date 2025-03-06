const providerData = [
  {
    id: '1',
    name: "Alice Johnson",
    userReview:
      "Alice provided exceptional service and made the process seamless.",
    rating: `<i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star-half text-yellow-400 text-2xl"></i>`,
  },
  {
    id: '2',
    name: "Michael Smith",
    userReview:
      "Michael was very attentive, though some details were overlooked.",
    rating: `<i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i>`,
  },
  {
    id: '3',
    name: "Emily Davis",
    userReview:
      "Emily handled everything smoothly and exceeded my expectations.",
    rating: `<i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i>`,
  },
  {
    id: '4',
    name: "David Wilson",
    userReview:
      "David’s expertise shone through, but there’s room for faster responses.",
    rating: `<i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star-half text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i>`,
  },
  {
    id: '5',
    name: "Sophia Brown",
    userReview:
      "Sophia was very supportive and delivered great results on time.",
    rating: `<i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i>`,
  },
  {
    id: '6',
    name: "Daniel Martinez",
    userReview:
      "Daniel’s advice was valuable and helped resolve my concerns efficiently.",
    rating: `<i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star-half text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i>`,
  },
  {
    id: '7',
    name: "Olivia Garcia",
    userReview:
      "Olivia showed great patience and helped me understand the process clearly.",
    rating: `<i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star-half text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i>`,
  },
  {
    id: '8',
    name: "William Moore",
    userReview:
      "William delivered satisfactory results but could improve communication.",
    rating: `<i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i>`,
  },
  {
    id: '9',
    name: "Charlotte Taylor",
    userReview:
      "Charlotte provided exceptional guidance throughout the process.",
    rating: `<i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i>`,
  },
  {
    id: '10',
    name: "James Anderson",
    userReview:
      "James did a decent job, but there was some delay in updates.",
    rating: `<i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i>`,
  },
  {
    id: '11',
    name: "Amelia White",
    userReview:
      "Amelia made everything so easy. Her attention to detail is impressive.",
    rating: `<i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i>`,
  },
  {
    id: '12',
    name: "Lucas Martin",
    userReview:
      "Lucas was very professional and ensured everything was on track.",
    rating: `<i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i>`,
  },
  {
    id: '13',
    name: "Grace Clark",
    userReview:
      "Grace’s input was invaluable, and she made everything so convenient.",
    rating: `<i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i>`,
  },
  {
    id: '14',
    name: "Henry Harris",
    userReview:
      "Henry worked diligently but faced some challenges with time management.",
    rating: `<i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i>`,
  },
  {
    id: '15',
    name: "Mia Lewis",
    userReview:
      "Mia was very proactive and ensured I was updated throughout the process.",
    rating: `<i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i>`,
  },
  {
    id: '16',
    name: "Isabella Walker",
    userReview:
      "Isabella is highly skilled and provided excellent recommendations.",
    rating: `<i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i>`,
  },
  {
    id: '17',
    name: "Ethan Young",
    userReview:
      "Ethan’s creativity brought unique solutions, although there was slight miscommunication.",
    rating: `<i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i>`,
  },
  {
    id: '18',
    name: "Ava Hall",
    userReview:
      "Ava’s work was flawless and delivered quicker than expected.",
    rating: `<i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star-half text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i>`,
  },
  {
    id: '19',
    name: "Noah King",
    userReview:
      "Noah was very methodical but could benefit from faster delivery times.",
    rating: `<i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star-half text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i>`,
  },
  {
    id: '20',
    name: "Harper Adams",
    userReview:
      "Harper was efficient and ensured everything was thoroughly checked.",
    rating: `<i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i>`,
  },
  {
    id: '21',
    name: "Liam Scott",
    userReview:
      "Liam was a pleasure to work with and ensured every detail was covered.",
    rating: `<i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i>`,
  },
  {
    id: '22',
    name: "Ella Green",
    userReview:
      "Ella’s enthusiasm and dedication made the process smooth and enjoyable.",
    rating: `<i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i>`,
  },
  {
    id: '23',
    name: "Jack Thomas",
    userReview:
      "Jack’s attention to detail and creativity stood out in the final results.",
    rating: `<i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star-fill text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i><i class="bi bi-star text-yellow-400 text-2xl"></i>`,
  },
];

export default providerData;
