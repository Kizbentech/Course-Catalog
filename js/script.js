// === COURSE DATA ===
const courses = [
  {
    id: 1,
    title: "Web Development Bootcamp",
    description: "Learn HTML, CSS, and JavaScript to build modern websites.",
    instructor: "John Doe",
    price: "$49",
    image: "https://picsum.photos/400/250?random=1",
  },
  {
    id: 2,
    title: "Introduction to Python",
    description: "Master Python programming and start your coding journey.",
    instructor: "Jane Smith",
    price: "$39",
    image: "https://picsum.photos/400/250?random=2",
  },
  {
    id: 3,
    title: "UI/UX Design Principles",
    description: "Learn how to design user-friendly and aesthetic interfaces.",
    instructor: "Michael Lee",
    price: "$45",
    image: "https://picsum.photos/400/250?random=3",
  },
  {
    id: 4,
    title: "Digital Marketing Essentials",
    description: "Discover SEO, Social Media, and content marketing skills.",
    instructor: "Sarah Johnson",
    price: "$55",
    image: "https://picsum.photos/400/250?random=4",
  },

  {
    id: 5,
    title: "Web Development Bootcamp",
    description: "Learn HTML, CSS, and JavaScript to build modern websites.",
    instructor: "John Doe",
    price: "$49",
    image: "https://picsum.photos/400/250?random=5",
  },
  {
    id: 6,
    title: "Introduction to Python",
    description: "Master Python programming and start your coding journey.",
    instructor: "Jane Smith",
    price: "$39",
    image: "https://picsum.photos/400/250?random=6",
  },
  {
    id: 7,
    title: "UI/UX Design Principles",
    description: "Learn how to design user-friendly and aesthetic interfaces.",
    instructor: "Michael Lee",
    price: "$45",
    image: "https://picsum.photos/400/250?random=7",
  },
  {
    id: 8,
    title: "Digital Marketing Essentials",
    description: "Discover SEO, Social Media, and content marketing skills.",
    instructor: "Sarah Johnson",
    price: "$55",
    image: "https://picsum.photos/400/250?random=8",
  },
];

// === LOAD COURSES INTO PAGE ===
const container = document.getElementById("course-container");

function displayCourses() {
  container.innerHTML = courses
    .map(
      (course) => `
      <div class="course-card">
        <img src="${course.image}" alt="${course.title}">
        <div class="course-info">
          <h3>${course.title}</h3>
          <p>${course.description}</p>
          <div class="course-meta">Instructor: <strong>${course.instructor}</strong></div>
          <div class="course-price">Price: ${course.price}</div>
          <button class="enroll-btn" onclick="enrollCourse(${course.id})">Enroll</button>
        </div>
      </div>
    `
    )
    .join("");
}

// Handle Enrollment
function enrollCourse(courseId) {
  const course = courses.find((c) => c.id === courseId);
  if (!course) return;

  // This is where you’ll connect to your backend (e.g., PHP or Node API)
  // Example: send data via fetch() to /enroll endpoint
  alert(` You successfully enrolled in "${course.title}"!\nInstructor: ${course.instructor}`);
}

// Initialize
displayCourses();


// === HAMBURGER MENU TOGGLE ===
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});



/* Sample Course Data (you can later fetch this from your backend API)
const courses = [
  {
    id: 1,
    title: "Web Development Bootcamp",
    description: "Learn HTML, CSS, JavaScript, and build real web projects.",
    instructor: "John Doe",
    price: "$49",
    image: "https://picsum.photos/400/250?random=1"
  },
  {
    id: 2,
    title: "Introduction to Python",
    description: "Master Python programming for data analysis and automation.",
    instructor: "Jane Smith",
    price: "$39",
    image: "https://picsum.photos/400/250?random=2"
  },
  {
    id: 3,
    title: "Graphic Design Fundamentals",
    description: "Learn design principles and tools like Photoshop & Canva.",
    instructor: "Michael Lee",
    price: "$29",
    image: "https://picsum.photos/400/250?random=3"
  },
  {
    id: 4,
    title: "Digital Marketing Essentials",
    description: "Discover SEO, social media marketing, and analytics.",
    instructor: "Sarah Johnson",
    price: "$59",
    image: "https://picsum.photos/400/250?random=4"
  }
];

// Load Courses
const container = document.getElementById("course-container");

function displayCourses() {
  container.innerHTML = courses
    .map(
      (course) => `
    <div class="course-card">
      <img src="${course.image}" alt="${course.title}">
      <div class="course-info">
        <h3>${course.title}</h3>
        <p>${course.description}</p>
        <div class="course-meta">Instructor: <strong>${course.instructor}</strong></div>
        <div class="course-price">Price: ${course.price}</div>
        <button class="enroll-btn" onclick="enrollCourse(${course.id})">Enroll</button>
      </div>
    </div>
  `
    )
    .join("");
}

// Handle Enrollment
function enrollCourse(courseId) {
  const course = courses.find((c) => c.id === courseId);
  if (!course) return;

  // This is where you’ll connect to your backend (e.g., PHP or Node API)
  // Example: send data via fetch() to /enroll endpoint
  alert(` You successfully enrolled in "${course.title}"!\nInstructor: ${course.instructor}`);
}

// Initialize
displayCourses();
*/
