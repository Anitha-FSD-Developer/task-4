Resume data in JSON format
const resume = {
  name: "Anitha",
  age: 28,
  email: "anithavivi19@gmail.com",
  phone: "7904732038",
  address: "coimbatore",
  education: [
    {
      degree: "diplmo in electronics ",
      institution: "morning star polytechnic",
      year: "2015",
    },
     ],
  experience: [
    {
      position: "administration",
      company: "kmch",
      duration: "2017 - Present",
      responsibilities: [
        "Developed office works",
      ],
    },
    {
      position: "Intern",
      company: "Sample Company",
      duration: "2016 - 2017",
      responsibilities: [
        "Assisted with software development tasks.",
        "Learned about various aspects .",
      ],
    },
  ],
};



// Using for loop
console.log("Using for loop:");
for (let i = 0; i < resume.education.length; i++) {
  console.log("Degree:", resume.education[i].degree);
  console.log("Institution:", resume.education[i].institution);
  console.log("Year:", resume.education[i].year);
}

// Using for...in loop
console.log("\nUsing for...in loop:");
for (let key in resume) {
  if (Array.isArray(resume[key])) {
    console.log(key + ":");
    for (let i = 0; i < resume[key].length; i++) {
      console.log("  - " + JSON.stringify(resume[key][i]));
    }
  } else {
    console.log(key + ":", resume[key]);
  }
}

// Using for...of loop
console.log("\nUsing for...of loop:");
for (let exp of resume.experience) {
  console.log("Position:", exp.position);
  console.log("Company:", exp.company);
  console.log("Duration:", exp.duration);
  console.log("Responsibilities:");
  exp.responsibilities.forEach((resp) => console.log("  - " + resp));
}

// Using forEach method
console.log("\nUsing forEach method:");
resume.experience.forEach((exp) => {
  console.log("Position:", exp.position);
  console.log("Company:", exp.company);
  console.log("Duration:", exp.duration);
  console.log("Responsibilities:");
  exp.responsibilities.forEach((resp) => console.log("  - " + resp));
});

