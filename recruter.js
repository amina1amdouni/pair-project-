let jobData = [
    { title: 'Web Developer', company: 'TechCo', location: 'CityA', email: 'web@techco.com', phone: '123-456-7890', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'UX Designer', company: 'DesignFirm', location: 'CityB', email: 'ux@designfirm.com', phone: '987-654-3210', description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.' },
    { title: 'Data Scientist', company: 'DataCorp', location: 'CityC', email: 'data@datacorp.com', phone: '555-123-4567', description: 'Nullam vel ex vel urna ullamcorper eleifend.' },
    // Add more job entries as needed
  ];
//   localStorage.setItem("jobs",JSON.stringify(jobData))
var current=JSON.parse(localStorage.current)
  // Function to display jobs based on category
  function displayJobs(category) {
    const jobResultsContainer = document.getElementById('jobResults');
    jobResultsContainer.innerHTML = ''; // Clear previous results

    let filteredJobs;

    if (category === 'All') {
      filteredJobs = JSON.parse(localStorage.getItem("jobs"));
    } else {
     // filteredJobs = filteredJobs.filter(job => job.title.toLowerCase().includes(category.toLowerCase()));
     filteredJobs = filteredJobs.filter(job => job.email===current);

    }

    if (filteredJobs.length === 0) {
      jobResultsContainer.innerHTML = 'No jobs found for this category';
    } else {
      const ul = document.createElement('ul');

      filteredJobs.forEach(job => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${job.title}</strong><br>Email: ${job.email}<br>Location: ${job.location}<br>Description: ${job.description}`;
        ul.appendChild(li);
      });

      jobResultsContainer.appendChild(ul);
    }
  }

  // Function to show the recruiter form
  function showRecruiterForm() {
    document.getElementById('recruiterForm').style.display = 'block';
  }
  showRecruiterForm()
  displayJobs("All") 
var x =JSON.parse(localStorage.getItem("jobs"))
  // Function to submit a new job
  function submitJob(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const company = document.getElementById('company').value;
    const location = document.getElementById('location').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const description = document.getElementById('description').value;

    // Add the new job to the jobData array
     

    x.push({ title:title, company:company, location:location, email:email, phone:phone, description:description })

    localStorage.setItem("jobs",JSON.stringify(x))
    // Reset form fields
    document.getElementById('title').value = '';
    document.getElementById('company').value = '';
    document.getElementById('location').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('description').value = '';

    // Hide the form
    // document.getElementById('recruiterForm').style.display = 'none';

    // Refresh the displayed jobs
    //displayJobs('All');
  }

  // Function to handle job search
  function searchJobs() {
    const searchTerm = document.getElementById('search').value.toLowerCase();

    const jobResultsContainer = document.getElementById('jobResults');
    jobResultsContainer.innerHTML = ''; // Clear previous results

    const filteredJobs = jobData.filter(job => job.title.toLowerCase().includes(searchTerm));

    if (filteredJobs.length === 0) {
      jobResultsContainer.innerHTML = 'No jobs found for the search term';
    } else {
      const ul = document.createElement('ul');

      filteredJobs.forEach(job => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${job.title}</strong><br>Email: ${job.email}<br>Location: ${job.location}<br>Description: ${job.description}`;
        ul.appendChild(li);
      });

      jobResultsContainer.appendChild(ul);
    }
  }