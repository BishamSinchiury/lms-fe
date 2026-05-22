import style from "./landing.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Landing() {
    const navigate = useNavigate()
    useEffect(() => {
    const fetchData = async () => {
        try{
            const response = await fetch(
            "http://127.0.0.1:8000/api/org/organizations/"
        );
        const data = await response.json();
            console.log(data);
        }catch(error){
            console.log(error);
        }

    };
    fetchData();
    }, []);
  return (
    <>
    {/* ----Navbar---- */}
<nav className={style.navbar}>

  <h1>EduLMS</h1>

  <ul>

    <li onClick={()=>{
      document.getElementById("home").scrollIntoView({
        behavior:"smooth"
      });
    }}>
      Home
    </li>

    <li onClick={()=>{
      document.getElementById("courses").scrollIntoView({
        behavior:"smooth"
      });
    }}>
      Courses
    </li>

    <li onClick={()=>{
      document.getElementById("about").scrollIntoView({
        behavior:"smooth"
      });
    }}>
      About Us
    </li>

    <li onClick={()=>{
      document.getElementById("contact").scrollIntoView({
        behavior:"smooth"
      });
    }}>
      Contact
    </li>

  </ul>
<div className={style.btnDiv}>
  <button className={style.login} onClick={() => navigate('/login')}>logIn</button>
  <button className={style.signin}>SignIn</button>
</div>
</nav>
{/* ----Hero section---- */}
<section>
    <div className={style.heroContent}>
        <h1>learn Anytime, Anywhere </h1>
        <p>Modern online learning platform for students and teachers.</p>
        
        <div className={style.heroButtons}>

        <button className={style.primaryBtn}>Get Started</button>
        <button className={style.secondaryBtn}>Explore Courses </button>
 
        </div>
    </div>
    <div className={style.heroImage}>
    <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"alt="Students" />
    </div>

</section>
{/* --------------------About Us------------------------------- */}

<section id="about" className={style.aboutSection}>

  <div className={style.aboutContent}>

    <h2>
      About Us
    </h2>

    <p>
      EduLMS is a modern online learning management system
      designed for students, teachers, and institutions.
    </p>

    <p>
      We provide high quality online education with interactive
      courses, expert instructors, and flexible learning.
    </p>

    <button className={style.aboutBtn}>
      Learn More
    </button>

  </div>

  <div className={style.aboutImage}>

    <img
      src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
      alt="About Us"
    />

  </div>

</section>
<section id="courses" className={style.courseSection}>

  <h2>Our Courses</h2>

  <div className={style.courseContainer}>


    <div className={style.courseCard}>

      <img
        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
        alt="Web Development"
      />

      <h3>Web Development</h3>

      <p>
        Learn HTML, CSS, JavaScript, React and Backend Development.
      </p>

      <button className={style.courseBtn}>
        Enroll Now
      </button>

    </div>



    <div className={style.courseCard}>

      <img
        src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4"
        alt="Python"
      />

      <h3>Python Programming</h3>

      <p>
        Master Python programming from beginner to advanced level.
      </p>

      <button className={style.courseBtn}>
        Enroll Now
      </button>

    </div>



    <div className={style.courseCard}>

      <img
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
        alt="UI UX"
      />

      <h3>UI/UX Design</h3>

      <p>
        Learn modern UI and UX design for websites and applications.
      </p>

      <button className={style.courseBtn}>
        Enroll Now
      </button>

    </div>


  </div>

</section>

    </>
  );
}

export default Landing;