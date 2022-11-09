import { Section } from "~/components/Section";

export default function AboutUs() {
  return (
    <div className="bg-white mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
      <div className="text-center">
        <p className="mt-1 text-4xl font-bold tracking-tight text-lime-500 sm:text-5xl lg:text-6xl">
          Everything you need to know about us
        </p>
      </div>
      <div className="flex flex-col gap-24">
        <Section
          title="The company"
          reverse
          image="/images/citybubbles-main.jpg"
          content={[
            "Rent one of our cars and have fun driving a 100% electric car that looks like a toy. If, when remembering the times of a child, you will certainly remember of “that” toy that would be fun to drive, and here you have it. CityBubbles provides a unique experience. Do not miss the opportunity to drive a toy along our steep roads.",
            "All our customers have access to an application that includes detailed maps of the most picturesque streets, rural villages, viewpoints with impressive views, cultural spaces, among others, with directions on how to get from one point to another, pre-specific, specialised and organised into themes.",
          ]}
        />

        <Section
          title="The car"
          image="/images/citybubbles-main.jpg"
          content={[
            "The Bubbles are small electric cars Renault Twizy, 100% environment-friendly, with capacity for two passengers. You can hire one of these funny electric cars and zipping around, up and down the steep hills in Madeira Island. Fun is guaranteed.",
            "These cars have a range of 100km on a full charge, a top speed of 90km/h, all of them come with a navigation system where you can choose the GPS guided tours around Madeira Island or you can just take off the GPS and discover Madeira yourself.",
            "The company City Bubbles strongly advises the experience not only to drive a 100% electric Bubble, 100% ecological, but also for the fun you will have during the entire trip.",
          ]}
        />

        <Section
          title="Group tours"
          image="/images/citybubbles-main.jpg"
          content={[
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas atque, adipisci doloremque quae molestiae incidunt voluptate repudiandae illum sit cumque. Totam quam magni sit odio consequuntur provident esse tenetur quae!",
          ]}
        />
      </div>
    </div>
  );
}
