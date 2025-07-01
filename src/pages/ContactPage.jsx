import Header from "../components/Header/Header";

const ContactPage = () => {
    return(
        <div>
            <Header/>
            <div id="container" className="scroll-bar">
            <h1 class="first">Contact Us</h1><hr />
            <br />
         <p>We'd love to hear from you! Whether you have questions about admissions, programs, or campus life, our team is here to help.</p><br />
          <h3>General Enquiries</h3><hr /> 
          <b>Vivekanand College Main Campus</b> 
          <p>[Mahatma Gandhi Road, Chembur, Mumbai, Maharashtra 400071]</p>
          <p>India</p><br />
          <p>Phone: +91 12345 67890</p>
          <p>Email: info@vivekanandcollege.edu</p>
          <p>Office Hours: Monday - Friday, 9:00 AM - 5:00 PM IST</p><br />
          <h3>Admissions Office</h3><hr />
          <p>For all admission-related queries regarding undergraduate or postgraduate programs:</p>
          <p>Phone: +91 98765 43210</p>
          <p>Email: admissions@vivekanandcollege.edu</p><br />
          <h3>Student Support Services</h3><hr />
          <p>For current student support, academic advising, or general assistance:</p>
          <p>Phone: +91 87654 32109</p>
          <p>Email: studentsupport@vivekanandcollege.edu</p><br />
          <h3>Find Us on the Map</h3><hr />
          <p><a href="https://www.google.com/maps/search/Vivekanand+College/@16.7081422,74.0740193,10z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MDYxNS4wIKXMDSoASAFQAw%3D%3D">View on Google Maps</a></p>
          <h3>Send Us Message</h3><hr />
          <p>[A contact form with fields for Name,Email,Subject,Message can be added here.]</p>
            </div>
        </div>
    )
}

export default ContactPage;
