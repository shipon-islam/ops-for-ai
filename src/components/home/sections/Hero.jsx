import Button from "@/components/Button";

export default function Hero() {
  return (
    <section className="container mx-auto px-4 mt-16 md:mt-28">
      <div className="max-w-3xl mx-auto">
        <h1 className="heading-1 text-center ">
          Your model is only as good as your operations
        </h1>
        <p className="text-body text-center mt-6 mb-8">
          OpsForAI is the human-in-the-loop infrastructure for early-stage AI
          startups. We manage the high-context manual work so your engineers can
          stay focused on the code.
        </p>
        <div className="flex justify-center gap-8 ">
          <Button variant="primary">Audit</Button>
          <Button variant="outline">Capabilities</Button>
        </div>
      </div>
    </section>
  );
}
