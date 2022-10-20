type SectionProps = {
  title: string;
  content: string;
  image: string;
};

const Section: React.FC<SectionProps> = ({ title, content, image }) => (
  <div>
    {/* text */}
    <div>
      <h2>{title}</h2>
      <span>{content}</span>
    </div>
    <div className="">
      <img className="" src={image} alt="section" />
    </div>
    {/* image */}
  </div>
);

export default function AboutUs() {
  return (
    <div className="bg-white mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
      <div className="text-center">
        <p className="mt-1 text-4xl font-bold tracking-tight text-lime-500 sm:text-5xl lg:text-6xl">
          Everything you need to know about us
        </p>
      </div>
      <div className="flex flex-col gap-24">
        {/* section */}
        <div className="flex flex-row gap-8">
          <div className="flex-1">
            <h2 className="text-4xl text-lime-500 font-bold mb-4">
              The company
            </h2>
            <span className="text-md text-gray-500">
              <p>
                Rent one of our cars and have fun driving a 100% electric car
                that looks like a toy. If, when remembering the times of a
                child, you will certainly remember of “that” toy that would be
                fun to drive, and here you have it. CityBubbles provides a
                unique experience. Do not miss the opportunity to drive a toy
                along our steep roads.
              </p>
              <p>
                - Madeira Island (November till April) - Porto Santo Island (May
                till October)
              </p>
              <p>
                All our customers have access to an application that includes
                detailed maps of the most picturesque streets, rural villages,
                viewpoints with impressive views, cultural spaces, among others,
                with directions on how to get from one point to another,
                pre-specific, specialised and organised into themes.
              </p>
            </span>
          </div>
          <div className="flex-1">
            <img
              className="object-contain rounded-xl"
              src="/images/citybubbles-main.jpg"
              alt="city bubbles car"
            />
          </div>
        </div>

        {/* section */}
        <div className="flex flex-row-reverse gap-8">
          <div className="flex-1">
            <h2 className="text-4xl text-lime-500 font-bold mb-4">The car</h2>
            <span className="text-md text-gray-500">
              <p>
                The Bubbles are small electric cars Renault Twizy, 100%
                environment-friendly, with capacity for two passengers. You can
                hire one of these funny electric cars and zipping around, up and
                down the steep hills in Madeira Island. Fun is guaranteed.
              </p>
              <p>
                These cars have a range of 100km on a full charge, a top speed
                of 90km/h, all of them come with a navigation system where you
                can choose the GPS guided tours around Madeira Island or you can
                just take off the GPS and discover Madeira yourself.
              </p>
              <p>
                The company City Bubbles strongly advises the experience not
                only to drive a 100% electric Bubble, 100% ecological, but also
                for the fun you will have during the entire trip.
              </p>
            </span>
          </div>
          <div className="flex-1">
            <img
              className="object-contain rounded-xl"
              src="/images/citybubbles-main.jpg"
              alt="city bubbles car"
            />
          </div>
        </div>
        {/* section */}
        <div className="flex flex-row gap-8">
          <div className="flex-1">
            <h2 className="text-4xl text-lime-500 font-bold mb-4">
              Group tours
            </h2>
            <span className="text-md text-gray-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
              atque, adipisci doloremque quae molestiae incidunt voluptate
              repudiandae illum sit cumque. Totam quam magni sit odio
              consequuntur provident esse tenetur quae!
            </span>
          </div>
          <div className="flex-1">
            <img
              className="object-contain rounded-xl"
              src="/images/citybubbles-main.jpg"
              alt="city bubbles car"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
