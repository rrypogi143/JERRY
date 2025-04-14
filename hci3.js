function generateTechTerm() {
    const terms = [
      {
        term: "API",
        definition: "An Application Programming Interface allows software programs to communicate with each other."
      },
      {
        term: "Cloud Computing",
        definition: "The delivery of computing services over the internet to offer faster innovation and flexible resources."
      },
      {
        term: "Firewall",
        definition: "A security system that monitors and controls incoming and outgoing network traffic based on rules."
      },
      {
        term: "Encryption",
        definition: "The process of converting data into a coded form to prevent unauthorized access."
      },
      {
        term: "Machine Learning",
        definition: "A field of AI that enables computers to learn from data without being explicitly programmed."
      }
    ];
  
    const randomIndex = Math.floor(Math.random() * terms.length);
    const selected = terms[randomIndex];
  
    const output = document.getElementById("dynamic-text");
    output.innerHTML = `<strong>${selected.term}</strong>: ${selected.definition}`;
  
    // Toggle fade-in visibility
    output.classList.remove("hidden");
    output.classList.add("fade-in");
  }
  
