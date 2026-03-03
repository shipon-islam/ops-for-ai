import Button from "@/components/Button";
import { Icon } from "@iconify/react";

export default function Offload() {
  return (
    <section className="bg-sky-blue">
      <div className="container py-16 md:py-28">
        <div className="grid gap-y-12 gap-x-16  md:grid-cols-2 py-10">
          <div>
            <Icon icon="mynaui:wrench" width="40" height="40" />
            <h2 className="heading-2 mt-6 md:mt-8">Ready to offload your manual debt?</h2>
            <p className="md:text-lg mt-5 mb-6 md:mt-6 md:mb-8">
              Let`s build your operational engine and get your team back to
              building.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <Button>Audit</Button>
              <Button variant="outline" >
                Learn
              </Button>
            </div>
          </div>
          <div>
            <Icon icon="tabler:clock" width="40" height="40" />
            <h2 className="heading-2 mt-6 md:mt-8">Stop managing operations.</h2>
            <p className="md:text-lg mt-5 mb-6 md:mt-6 md:mb-8">
              Schedule a free audit and see how much engineering time you can recover.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <Button>Schedule</Button>
              <Button variant="outline" >
                Explore
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
