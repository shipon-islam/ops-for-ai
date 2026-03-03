import Button from "@/components/Button";
import InputText from "@/components/InputText";
import { Icon } from "@iconify/react";
const proffessions = [
  { id: 1, title: "Founder", slug: "founder" },
  { id: 2, title: "CTO", slug: "cto" },
  { id: 3, title: "Operations lead", slug: "operations-lead" },
  { id: 4, title: "Engineer", slug: "engineer" },
  { id: 5, title: "Investor", slug: "investor" },
  { id: 6, title: "Data Other", slug: "data-other" },
];
const bottlenecks = [
  {
    id: 1,
    title: "One person approving everything",
    slug: "one-person-approving-everything",
  },
  { id: 2, title: "Slow communication", slug: "slow-communication" },
  { id: 3, title: "Manual processes", slug: "manual-processes" },
];

export default function Contact() {
  return (
    <section className="container">
      <div className="grid md:grid-cols-2 gap-y-14 gap-x-20 py-16 md:py-28">
        <div>
          <div>
            <p className="font-semibold">Contact</p>
            <h2 className="heading-2 mt-3 md:mt-4">Get in touch</h2>
            <p className="md:text-lg mt-5 mb-6 md:mt-6 md:mb-8">
              Tell us about your operational challenges and we`ll respond within
              24 hours.
            </p>
          </div>
          <div className="flex flex-col gap-y-4 mt-8 body-text">
            <a
              href="mailto:hello@opsforai.com"
              className="flex items-center gap-2 underline hover:text-blue"
            >
              <Icon icon="ic:outline-email" width="24" height="24" />{" "}
              <span>hello@opsforai.com</span>
            </a>
            <a
              href="tel:+14155550100"
              className="flex items-center gap-2 underline hover:text-blue"
            >
              <Icon
                icon="material-symbols:call-outline"
                width="24"
                height="24"
              />{" "}
              <span>+1 (415) 555-0100</span>
            </a>
            <a
              href="https://maps.google.com/?q=San Francisco, California 94105 USA"
              className="flex items-center gap-2 hover:text-blue"
            >
              <Icon icon="circum:location-on" width="24" height="24" />{" "}
              <span>San Francisco, California 94105 USA</span>
            </a>
          </div>
        </div>
        <form action="#" className="flex flex-col gap-y-6">
          <div className="grid grid-cols-2 gap-x-8">
            <InputText label="First Name" />
            <InputText label="Last Name" />
          </div>
          <div className="grid grid-cols-2 gap-x-8">
            <InputText label="Email" />
            <InputText label="Phone Number" />
          </div>
          <div>
            <label className="md:text-lg" htmlFor="message">Primary bottleneck?</label>

            <select className="block w-full mt-4 border-b border-gray-200 py-3 focus:outline-none md:text-lg">
              <option value="">Select one...</option>
              {bottlenecks.map((item) => (
                <option key={item.id} value={item.slug}>
                  {item.title}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="md:text-lg" htmlFor="message">Which best describes you?</label>
            <div className="grid grid-cols-2 gap-4 mt-4">
              {proffessions.map((item) => (
                <div key={item.id} className="flex items-center">
                  <input
                    type="radio"
                    id={item.slug}
                    name="profession"
                    value={item.slug}
                    className="size-4.5"
                  />
                  <label className="md:text-lg ml-3" htmlFor={item.slug} >
                    {item.title}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div>
            <label className="md:text-lg" htmlFor="message">Message</label>
            <textarea
              id="message"
              placeholder="Tell us more..."
              className="border-b border-gray-300  w-full focus:outline-none mt-4 p-2 h-22  md:h-32 md:text-lg"
            ></textarea>
          </div>
          <div className="flex items-center gap-3">
            <input type="checkbox" id="agree" name="agree" className="size-4.5"/>
            <label className="md:text-lg" htmlFor="agree"> I agree to the privacy policy</label>
          </div>
          <Button type="submit" className="w-fit">Submit</Button>
        </form>
      </div>
    </section>
  );
}
