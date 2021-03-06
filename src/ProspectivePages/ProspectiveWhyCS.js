import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";
import "../static/bodycomponent.css";
import Aos from "aos";
import "aos/dist/aos.css";

class ProspectiveWhyCS extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    Aos.init();
    return (
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {(props) => 
            <div class="row" style={props}>
              <ScrollToTopOnMount />
              <div class="col-md-2" style={{backgroundColor: "aliceblue"}}>
                <div class="nav flex-column nav-pills" id="" role="tablist" aria-orientation="vertical">
                  <div class="tab-name">Prospective</div>
                  <a class="nav-link" id="" data-toggle="pill" href="#/ProspectivePages/ProspectiveGeneralInfo" role="tab">General Info</a>
                  <a class="nav-link active" id="" data-toggle="pill" href="#/ProspectivePages/ProspectiveWhyCS" role="tab">Why CS</a>
                  <a class="nav-link" id="" data-toggle="pill" href="#/ProspectivePages/ProspectiveCEGEP" role="tab">CEGEP</a>
                  <a class="nav-link" id="" data-toggle="pill" href="#/ProspectivePages/ProspectiveFreshman" role="tab">Freshman</a>
                  <a class="nav-link" id="" data-toggle="pill" href="#/ProspectivePages/ProspectiveChoosingAMajor" role="tab">Choosing A Major</a>
                  <a class="nav-link" id="" data-toggle="pill" href="#/ProspectivePages/ProspectiveTransfer" role="tab">Transfer</a>
                  <a class="nav-link" id="" data-toggle="pill" href="#/ProspectivePages/ProspectiveInternship" role="tab">Internship</a>
                  <a class="nav-link" id="" data-toggle="pill" href="#/ProspectivePages/ProspectiveUndergrad" role="tab">Undergraduate Admission</a>
                  <a class="nav-link" id="" data-toggle="pill" href="#/ProspectivePages/ProspectiveGrad" role="tab">Graduate Admission</a>
                </div>
              </div>
              <div class="col-md-10 right-column">
                <div className = "body">
                  <h1>Why CS?</h1>
                  <h2>What is Computer Science?</h2>
                  <p>Computer science encompasses everything from theory to applications, including software engineering, programming languages, robotics, compilers, databases, game design and development, operating systems, artificial intelligence, computational biology, computer vision, and the analysis of algorithms.</p>
                  <h2>Studying Computer Science at McGill</h2>
                  <p>You can study Computer Science at McGill in many different ways. One typical way is by completing a Bachelor of Science (B.Sc.) degree program in the <a href="https://www.mcgill.ca/science/">Faculty of Science</a>. You can choose the amount and nature of the computer science courses that you take by selecting different program options. For example, a Major in Computer Science requires you to take 60 credits of computer science or related courses. On the other hand, a Minor in Computer Science requires you to take only 24 credits of computer science or related courses. Most computer science courses are worth 3 or 4 credits.</p>
                  <h2>The School of Computer Science</h2>
                  <p>The <a href="https://www.cs.mcgill.ca/">School of Computer Science</a> is part of the <a href="https://www.mcgill.ca/science/">Faculty of Science</a>. The School of Computer Science groups 34 faculty members who teach and do research on a wide variety of computer science and software engineering topics. The School of Computer Science is located in the <a href="https://www.mcgill.ca/engineering/faculty-staff/facilities/buildings/mcconnell">McConnell Engineering</a> and <a href="https://www.mcgill.ca/engineering/faculty-staff/facilities/buildings/lm-trottier">Trottier</a> Buildings. Courses at McGill are taught in English. For most upper-level computer science courses, classes are small (about 10-30 students), and students have numerous opportunities for direct interaction with professors, both inside and outside the classroom.</p>
                  <h2>Our Undergraduate Programs</h2>
                  <p>The School of Computer Science offers several interesting study programs. Our three most popular programs are:</p>
                  <li>Major in Computer Science, for students interested in a broad study of computer science topics.</li>     
                  <li>Major in Software Engineering, for students interested in problems related to the design, development, and maintenance of software systems.</li>
                  <li>Minor in Computer Science, for students interested in a computer science complement to another major field of study.</li>
                  <p>Other programs that combine the study of computer science with different topics are also offered by other departments in the Faculty of Science and in the Faculty of Arts. For more details, see the complete list of programs offered by the School of Computer Science.</p>
                  <p>If you're lost, feel free to <a href="#">contact us</a>. McGill computer science students also have access to an internship program.</p>
                  <h2>Why You Should Apply?</h2>
                  <p>A university-level education in computer science will help you develop your analytical thinking and creative problem solving skills while studying a wealth of exciting topics with a wide range of applications (from medicine to business). An undergraduate education in computer science will also open the door to careers in a variety of companies (engineering, high-tech, pharmaceutical). For those of you who may be thinking about graduate studies, a degree in computer science is an excellent foundation for the study of computer science at the graduate level (M.Sc. or Ph.D.). McGill is a <a href="https://www.timeshighereducation.com/student/best-universities/best-universities-canada">top-ranked and internationally-recognized university</a>, and our graduates typically move on to fulfilling careers or further studies in the top companies or universities.</p>
                  <hr></hr>    
                  <h2>Qu'est-ce que l'Informatique?</h2>
                  <p>L'informatique regroupe un grand nombre de sujets d'??tude, des plus abstraits au plus appliqu??s, incluant: le g??nie logiciel, les langages de programmation, la robotique, les compilateurs, les bases de donn??es, le design et d??veloppement de jeux vid??os, les syst??mes d'exploitation, l'intelligence artificielle, la bioinformatique, la vision par ordinateur, et l'analyse d'algorithmes.</p>
                  <h2>??tudier l'Informatique ?? McGill</h2>
                  <p>On peut ??tudier l'informatique ?? McGill en suivant diff??rents cheminements. Un cheminement typique est de compl??ter le programme de Baccalaur??at en Sciences (B.Sc.) offert par la Facult?? des Sciences. On peut d??terminer le nombre et le type de cours d'informatique ?? compl??ter en choisissant un programme. Par exemple, une Majeure en Informatique requiert 60 cr??dits de cours d'informatique ou de sujets reli??s. D'un autre c??t??, une Mineure en Informatique requiert seulement 24 cr??dits de cours d'informatique ou de sujets reli??s. La plupart des cours d'informatique valent 3 ou 4 cr??dits.</p>
                  <h2>L'??cole d'Informatique</h2>
                  <p>L'??cole d'Informatique (ou <a href="https://www.cs.mcgill.ca/">School of Computer Science</a> fait partie de la <a href="https://www.mcgill.ca/science/">Facult?? des Sciences</a>. L'??cole d'Informatique regroupe 34 professeurs qui enseignent et font de la recherche dans une grande vari??t?? de branches de l'informatique et du g??nie logiciel. L'??cole d'Informatique est situ??e dans les pavillons <a href="https://www.mcgill.ca/engineering/faculty-staff/facilities/buildings/mcconnell">McConnell Engineering</a> et <a href="https://www.mcgill.ca/engineering/faculty-staff/facilities/buildings/lm-trottier">Trottier</a>. Les cours ?? McGill sont donn??s en anglais, mais plusieurs professeurs parlent le fran??ais. La plupart des cours de deuxi??me et troisi??me ann??e ont un petit nombre d'??tudiants (environ 10-30), et les ??tudiants ont plusieurs opportunit??s d'interaction avec les professeurs, ?? la fois ?? l'int??rieur et ?? l'ext??rieur des salles de cours.</p>
                  <h2>Nos Programmes de Bacc</h2>
                  <p>L'??cole d'Informatique offre plusieurs programmes d'??tude int??ressants. Nos trois programmes les plus populaires sont:</p>
                  <li>Major in Computer Science, pour les ??tudiants int??ress??s ?? une ??tude pouss??e de l'informatique.</li>     
                  <li>Major in Software Engineering, pour les ??tudiants int??ress??s ?? l'??tude des probl??mes reli??s au design, au d??veloppement, et ?? la maintenance des syst??mes logiciels.</li>
                  <li>Minor in Computer Science, pour les ??tudiants int??ress??s ?? l'informatique comme un compl??ment ?? l'??tude d'un autre programme majeur d'??tude.</li>
                  <p>D'autres programmes combinant l'??tude de l'informatique avec d'autres sujets sont aussi offerts (Ma??trise ou Doctorat). McGill est aussi <a href="https://www.topuniversities.com/universities/mcgill-university#:~:text=McGill%20University%20is%20one%20of,QS%20Global%20World%20Rankings%202021.">une universit?? de niveau sup??rieur et mondialement reconnue</a>, et nos gradu??s progressent typiquement vers des carri??res ou des ??tudes dans les meilleures entreprises ou universit??s.</p>
                  <h2>Pourquoi Appliquer?</h2>
                  <p>Une formation universitaire en informatique ou en g??nie logiciel aident ?? d??velopper des aptitudes de raisonnement analytique et de solution de probl??mes tout en ??tudiant une multitude de sujets motivants et aux applications multiples (de la m??decine ?? la finance). Une formation universitaire en informatique offre aussi des possibilit??s de carri??re dans plusieurs types d'entreprises (g??nie, hautes-technologies, pharmaceutique). Pour ceux et celles qui songent aux ??tudes sup??rieures, un Bacc en informatique ?? McGill procure une excellente base pour l'??tude de l'informatique aux cycles sup??rieurs (Ma??trise ou Doctorat). McGill est aussi une universit?? de niveau sup??rieur et mondialement reconnue, et nos gradu??s progressent typiquement vers des carri??res ou des ??tudes dans les meilleures entreprises ou universit??s.</p>                    
                </div>
            </div>
        </div>
        }
      </Spring>
    );
  }
}

export default ProspectiveWhyCS;

class ScrollToTopOnMount extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 600);
  }

  render() {
    return null;
  }
}
