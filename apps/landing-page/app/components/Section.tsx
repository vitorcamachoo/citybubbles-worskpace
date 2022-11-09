import classNames from "classnames";

export type SectionProps = {
  title: string;
  content: string[];
  image: string;
  reverse?: boolean;
};

export const Section: React.FC<SectionProps> = ({
  title,
  content,
  image,
  reverse,
}) => (
  <div
    className={classNames(
      "flex gap-8",
      reverse ? "flex-row-reverse" : "flex-row"
    )}
  >
    <div className="flex-1">
      <h2 className="text-4xl text-lime-500 font-bold mb-4">{title}</h2>
      <span className="text-md text-gray-500">
        {content.map((paragraph) => (
          <p key={paragraph} className="indent-8">
            {paragraph}
          </p>
        ))}
      </span>
    </div>
    <div className="flex-1">
      <img className="object-contain rounded-xl" src={image} alt="section" />
    </div>
  </div>
);
