export type Route = {
  id: string;
  title: string;
  description: string;
  duration: number; // minutes;
  distance: number; // kms;
  images: string[];
  price: number;
};

export const routes: Route[] = [
  {
    id: "1",
    title: "Group tour",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
    duration: 60,
    distance: 2.3,
    images: ["/images/tours/group.jpg"],
    price: 200,
  },
  {
    id: "2",
    title: "Cabo Girão Tour",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
    duration: 60,
    distance: 2.3,
    images: ["/images/tours/cabo-girao.jpeg"],
    price: 200,
  },
  {
    id: "3",
    title: "Cristo Rei Tour",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro Lorem ipsum dolor sit consectetur adipisicing elit. Velit facilis asperiores porro Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.",
    duration: 60,
    distance: 2.3,
    images: [
      "/images/tours/cristo-rei.jpeg",
      "/images/tours/cabo-girao.jpeg",
      "/images/tours/funchal.jpg",
      "/images/tours/porto-santo.jpg",
      "/images/tours/cristo-rei.jpeg",
    ],
    price: 200,
  },
  {
    id: "4",
    title: "Funchal Tour",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic. tempore temporibus quo laudantium.",
    duration: 60,
    distance: 2.3,
    images: ["/images/tours/funchal.jpg"],
    price: 200,
  },
  {
    id: "5",
    title: "Porto Santo",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
    duration: 60,
    distance: 2.3,
    images: ["/images/tours/porto-santo.jpg"],
    price: 200,
  },
];
