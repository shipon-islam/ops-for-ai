const ourScore = [
  { id: 1, title: "Years of experience", score: "10+" },
  { id: 2, title: "AI projects delivered", score: "30+" },
  { id: 3, title: "Accuracy target", score: "99.9%" },
];
export default function Foundation() {
  return (
    <section className="container py-16 md:py-28">
      <div>
        <h2 className="heading-3 mb-4">
          The foundation of every great AI startup
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 md:mt-16 xl:mt-20">
        {ourScore.map((item) => (
          <div key={item.id} className="mb-4">            
            <p className="heading-1 font-bold">{item.score}</p>
            <h3 className="heading-6 mt-1">{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
