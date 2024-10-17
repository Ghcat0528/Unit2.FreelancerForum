const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
  { name: "Grace", price: 15, occupation: "chef" },
];

const averagePrice = () => {
  let total = freelancers.reduce(
    (sum, freelancer) => sum + freelancer.price,
    0
  );
  return total / freelancers.length;
};

const randomFreelancer = () => {
  let names = [
    "Dr. Shoe",
    "Dr. Nibbles",
    "Prof. Shoo",
    "Prof. Morgan",
    "Dr. Hugg",
  ];
  let occupations = [
    "gynecologist",
    "veterinarian",
    "dermatologist",
    "developer",
    "hair stylist",
  ];

  let randomName = names[Math.floor(Math.random() * names.length)];
  let randomOccupation =
    occupations[Math.floor(Math.random() * occupations.length)];
  let randomPrice = (Math.random() * 90 + 10).toFixed(2);

  const freelancerNew = {
    name: randomName,
    occupation: randomOccupation,
    price: randomPrice,
  };
  freelancers.push(freelancerNew);
  init();
}
  const init = () => {
    const body = document.querySelector("body");
    body.innerHTML = "";
    const section = document.createElement("section");
    //making the headings on the page
    const h3 = document.createElement("h3");
    h3.innerText = `Average Starting Price: ${averagePrice()}`;
    const h4 = document.createElement("h4");
    h4.innerText = `Available Freelancers`;
    const listH4 = document.createElement("h4");
    listH4.innerText = `Name (Occupation) - price`;
    // putting the names, occupations, and prices onto the page
    const freelancerDiv = document.createElement("div");
    freelancers.forEach((freelancer) => {
      const p2 = document.createElement("p");
      p2.innerText = `${freelancer.name} (${freelancer.occupation}) - $${freelancer.price}`;
      freelancerDiv.appendChild(p2);
    });
    const freeDiv = document.createElement("div");

    section.append(h3);
    section.append(h4);
    section.append(listH4);
    section.append(freelancerDiv);
    body.append(section);
  };

  init();

  setInterval(() => {
    randomFreelancer();
  }, 6000);

  // for (var i = 0; i < 5; i++) {
  //     setTimeout(() => {
  //         console.log(`Value of i: ${i}`);
  //     }, i * 1000); // Delay increases with each iteration
  // }

