import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { Link } from "@remix-run/react";

const faqs = [
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 2,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 3,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 4,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 5,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 6,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
];

export default function Faq() {
  return (
    <div>
      <section aria-labelledby="faq-heading" className="bg-white">
        <div className="max-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="max-w-xl">
            <h2
              id="faq-heading"
              className="text-2xl font-bold tracking-tight text-gray-900"
            >
              Frequently asked questions
            </h2>
            <p className="mt-4 text-base text-gray-500">
              Questions. Frequently asked ones. Plus our answers. That's how
              FAQs work. If you can't find what you're looking for, you can
              always{" "}
              <Link
                to="/contact-us"
                className="font-medium text-lime-600 hover:text-lime-500"
              >
                send us an email
              </Link>{" "}
              with your enquiry.
            </p>
          </div>

          <dl className="mt-12 grid grid-cols-1 gap-y-10 sm:mt-16 md:grid-cols-2 md:gap-x-6 lg:grid-cols-3">
            {faqs.map((faq) => (
              <div key={faq.id}>
                <dt className="text-base font-medium text-gray-900">
                  {faq.question}
                </dt>
                <dd className="mt-3 text-sm text-gray-500">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </div>
  );
}
