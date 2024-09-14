// Switch between tabs
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const contentId = this.getAttribute('href').substring(1);
        document.querySelectorAll('.tab-content').forEach(tab => {
            tab.classList.remove('active');
        });
        document.getElementById(contentId).classList.add('active');
    });
});

// Save and display user profile
document.getElementById('saveProfile').addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name && email) {
        document.getElementById('displayName').textContent = name;
        document.getElementById('displayEmail').textContent = email;
    } else {
        alert('Please fill out both name and email.');
    }
});

// Course enrollment
const enrolledCourses = [];
document.querySelectorAll('.enroll-btn').forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const courseName = btn.previousElementSibling.textContent;
        if (!enrolledCourses.includes(courseName)) {
            enrolledCourses.push(courseName);
            updateEnrolledCourses();
            alert(`Enrolled in ${courseName}`);
        } else {
            alert('Already enrolled in this course.');
        }
    });
});

function updateEnrolledCourses() {
    const enrolledList = document.getElementById('enrolledCourses');
    enrolledList.innerHTML = '';
    enrolledCourses.forEach(course => {
        const li = document.createElement('li');
        li.textContent = course;
        enrolledList.appendChild(li);
    });
}
