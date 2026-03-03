import Button from "@/components/Button";

export default function Problems() {
  return (
    <section className="bg-black text-white">
      <div className="container py-16 md:py-28">
        <div className="grid md:grid-cols-2 md:gap-5 lg:gap-20 ">
            <div>
          <p className="font-semibold">Problem</p>
          <h1 className="heading-1 xl:text-[80px] mt-4">Stop being your own COO</h1>
        </div>
        <div className="mt-5 sm:mt-6 md:mt-0">
           <p className="body-text">Most AI startups stall because they hit the operational wall. You`re paying $200 per hour engineers to do $20 per hour admin tasks. We provide a managed, scalable operational layer that integrates directly with your team, turning manual chaos into structured data.</p> 
           <div className="flex gap-4 mt-8">
            <Button>Learn</Button>
            <Button variant="outline" color="white">Explore</Button>
            
           </div>
        </div>
        </div>
       
      </div>
    </section>
  );
}
