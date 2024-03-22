// STATE
const freelancerArr = [ 
  {
    name: `SpongeBob`,
    occupation: `Fry Cook`,
    startingPrice: `$18/HR`
  },
  {
    name: `Patrick`,
    occupation: `Freelancer`,
    startingPrice: `$14/HR`
  }
  ]
  
  const addedFreelancerArr = [
    {
      name: `Squidward`,
      occupation: `Cashier`,
      startingPrice: `$16/HR`
    },
    {
      name: `Mr.Krabs`,
      occupation: `Restaurateur`,
      startingPrice: `$100/HR`
    },
    {
      name: `Sandy`,
      occupation: `Scientist`,
      startingPrice: `$22/HR`
    },
    {
      name: `Larry the Lobster`,
      occupation: `Lifeguard`,
      startingPrice: `$20/HR`
    },
    {
      name: `My Leg Guy`,
      occupation: `Insurance Scammer`,
      startingPrice: `$75/HR`
    }
  ]
  
  const maxFreelancers = 20;
  
  // DOM SELECTORS
  // Line 45 is accessing h1 element from html
  const head = document.querySelector(`#header`)
  // Line 47 is adding text to the h1 element
  const textOne = document.createTextNode(`Freelancer Forum`);
  // Line 49 is adding the methods above to DOM/HTML
  head.appendChild(textOne);
  
  const average = document.querySelector(`#averagePrice`);
  const textTwo = document.createTextNode(`The average staring price is...`);
  average.appendChild(textTwo);
  
  const available = document.querySelector(`#availableFl`);
  const textThree = document.createTextNode(`Available Freelancers`);
  available.appendChild(textThree);
  
  // Event Listeners/Hanndlers
  
  function render() {
  
    const name = document.querySelector('#name');
    const namesList = freelancerArr.map((people) => {
      const nameElement = document.createElement(`li`);
      const personName = document.createTextNode(`${people.name}`);
      nameElement.appendChild(personName);
      return nameElement;
    })
    name.replaceChildren(...namesList);
  
    const occupation = document.querySelector('#occ');
    const occupationsList = freelancerArr.map((people) => {
      const occElement = document.createElement(`li`);
      const personOcc = document.createTextNode(`${people.occupation}`);
      occElement.appendChild(personOcc);
      return occElement;
    })
    occupation.replaceChildren(...occupationsList);
  
    const startingPrice = document.querySelector('#price');
    const priceList = freelancerArr.map((people) => {
      const priceElement = document.createElement(`li`);
      const personPrice = document.createTextNode(`${people.startingPrice}`);
      priceElement.appendChild(personPrice);
      return priceElement;
    })
    startingPrice.replaceChildren(...priceList);
  }
  
  render();
  
  const addFreelancer = () => {
  
  
      let i = 0; // Start from the first freelancer
  
    const intervalId = setInterval(() => {
      if (i < addedFreelancerArr.length && freelancerArr.length <= maxFreelancers) {
        freelancerArr.push(addedFreelancerArr[i]);
        render(); // Call render to update the DOM with the new freelancer
        i++; // Move to the next freelancer
      } else {
        clearInterval(intervalId); // Clear the interval if max is reached or no more freelancers to add
      }
    }, 1000); 
  }
  
  const addFreelancerInterval = setInterval(addFreelancer, 2000);
  // !!!!NOT COMPLETED YET, TURNING IN WHAT I HAVE STARTED ON!!!