const posts = [
  {
    id: 1,
    title: "Cabo Girão Tour",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    imageUrl: "/images/tours/cabo-girao.jpeg",
    price: 200,
  },
  {
    id: 2,
    title: "Cristo Rei Tour",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.",
    date: "Mar 10, 2020",
    datetime: "2020-03-10",
    imageUrl: "/images/tours/cristo-rei.jpeg",
    price: 200,
  },
  {
    id: 3,
    title: "Funchal Tour",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    imageUrl: "/images/tours/funchal.jpg",
    price: 200,
  },
  {
    id: 4,
    title: "PORTO SANTO",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    imageUrl: "/images/tours/porto-santo.jpg",
    price: 200,
  },
];

export function Routes() {
  return (
    <div className="relative mx-auto max-w-lg lg:max-w-7xl">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-lime-500 sm:text-4xl">
          Our tours
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero
          labore natus atque, ducimus sed.
        </p>
      </div>
      <div className="flex flex-row gap-4 mt-12 overflow-x-auto w-full p-4 space-x-4 bg-neutral rounded-box">
        {posts.map((post) => (
          <div
            key={post.id}
            id={`slide-${post.id}`}
            className="flex flex-col overflow-hidden rounded-lg shadow-lg w-80 carousel-item"
          >
            <div className="flex-shrink-0">
              <img
                className="h-64 w-full object-cover brightness-90"
                src={post.imageUrl}
                alt=""
              />
            </div>
            <div className="flex flex-1 flex-col justify-between bg-white p-6">
              <div className="flex-1">
                <p className="text-lg text-gray-900">€ {post.price}</p>
                <p className="text-xl font-semibold text-gray-900">
                  {post.title}
                </p>
                <p className="mt-3 text-base text-gray-500">
                  {post.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
