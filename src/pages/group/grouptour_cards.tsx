import Image from "next/image";

const seasons = [
  {
    title: "Winter Groups for 2025",
    cards: [
      { title: "Dubai Group Tour", image: "/group/winter1.jpg", location: "Dubai", duration: "4 Nights 5 Days" },
      { title: "Europe Winter Tour", image: "/group/winter1.jpg", location: "Europe", duration: "9 Nights 10 Days" },
      { title: "London Winter Tour", image: "/group/winter1.jpg", location: "London", duration: "8 Nights 9 Days" },
      { title: "Egypt Winter Tour", image: "/group/winter1.jpg", location: "Egypt", duration: "4 Nights 5 Days" },
    ],
  },
  {
    title: "Summer Groups for 2025",
    cards: [
      { title: "Thailand Summer Tour", image: "/group/summer1.jpg", location: "Thailand", duration: "5 Nights 6 Days" },
      { title: "Bali Adventure", image: "/group/summer1.jpg", location: "Bali", duration: "4 Nights 5 Days" },
      { title: "Japan Summer Tour", image: "/group/summer1.jpg", location: "Japan", duration: "7 Nights 8 Days" },
      { title: "Maldives Escape", image: "/group/summer1.jpg", location: "Maldives", duration: "3 Nights 4 Days" },
    ],
  },
  {
    title: "Autumn Groups for 2025",
    cards: [
      { title: "Kashmir Autumn Tour", image: "/group/autumn1.jpg", location: "Kashmir", duration: "5 Nights 6 Days" },
      { title: "Canada Fall Escape", image: "/group/autumn1.jpg", location: "Canada", duration: "6 Nights 7 Days" },
      { title: "Paris Autumn Trip", image: "/group/autumn1.jpg", location: "Paris", duration: "4 Nights 5 Days" },
      { title: "New York Colors", image: "/group/autumn1.jpg", location: "USA", duration: "5 Nights 6 Days" },
    ],
  },
  {
    title: "Spring Groups for 2025",
    cards: [
      { title: "Japan Cherry Blossom", image: "/group/spring1.jpg", location: "Japan", duration: "7 Nights 8 Days" },
      { title: "Netherlands Tulip Tour", image: "/group/spring1.jpg", location: "Netherlands", duration: "5 Nights 6 Days" },
      { title: "Italy Spring Tour", image: "/group/spring1.jpg", location: "Italy", duration: "6 Nights 7 Days" },
      { title: "Seoul Bloom Trip", image: "/group/spring1.jpg", location: "South Korea", duration: "5 Nights 6 Days" },
    ],
  },
];

const GroupTourCards = () => {
  return (
    <section className="bg-white py-10 px-4 md:px-20">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-[#fed42a] mb-4">
        Ultimate Group<span className="text-gray-900"> Tour Adventures</span> 
      </h2>

      {seasons.map((season, i) => (
        <div key={i} className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 hover:text-[#fed42a] mb-6 mt-10" data-aos="fade-left">
            {season.title}
          </h3>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {season.cards.map((card, index) => (
              <div
                key={index}
                className="border rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
                data-aos="zoom-in"
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  width={400}
                  height={250}
                  className="w-full h-52 object-cover"
                />
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-gray-900">{card.title}</h4>
                  <p className="text-sm text-gray-500 mt-1">{card.location}</p>
                  <p className="text-sm text-yellow-600 font-semibold mt-2">{card.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default GroupTourCards;
