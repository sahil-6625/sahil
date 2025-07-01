import Header from "../components/Header/Header"

const AboutPage = () => {
    return(
        <div>
            <Header/>
            <div id="container" className="scroll-bar">
            <h1 class="first">About Vivekanand college</h1><hr />
            <br />
            <p>Vivekanand College stands as a beacon of knowledge and integrity,committed to delivering transformative education since its inception in[Year of Establishment,e.g.,1980].Location in the busting heart of[City/Area,e.g.,Chembur,Mumbai],our college has consistently strived to uphold the highest standards of academic rigor and ethical values.</p><br />
            <p>Our vision is to empower students with critical thinking skills,a global perspertive,and a strong sence of social responsibility.We aim to nurture individual who are not only successful their careers but also contributing members of society.</p><br />
            <h3>Our Mission</h3><hr />
            <ul type="circle">
                <li>To provide high-quality, accessible education across various disciplines.</li>
                <li>To foster research, innovation, and creativity among students and faculty.</li>
                <li>To cultivate a diverse and inclusive learning environment.</li>
                <li>To instill strong ethical values and leadership qualities.</li>
            </ul>
            <h3>Our Values</h3><hr />
            <p>Integrity, Excellence, Innovation, Community, and Respect are the pillars upon which Vivekanand College is built. We encourage open dialogue, intellectual curiosity, and a relentless pursuit of knowledge.</p>
            <h3>Our History</h3><hr />
            <p>[Briefly describe the college's history - e.g., how it started, key milestones, growth over the years, famous alumni if any]. Our journey began with a vision to make quality education available to all, and we continue that legacy today.</p>
        </div>
        </div>
    )
}

export default AboutPage;
