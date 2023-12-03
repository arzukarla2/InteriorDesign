import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  const navigate = useNavigate();

  const onHomeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onOurTeamsClick = useCallback(() => {
    navigate("/our-teams");
  }, [navigate]);

  const onServicesClick = useCallback(() => {
    navigate("/sevices");
  }, [navigate]);

  const onFrameButtonClick = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div className={styles.aboutUs}>
      <b className={styles.about}>About</b>
      <div className={styles.itIsA}>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </div>
      <div className={styles.interiorCustomizationWith}>
        interior customization with Danaanz, best quality with professional
        workers
      </div>
      <div className={styles.achievement}>ACHIEVEMENT</div>
      <div className={styles.aboutUsChild} />
      <div className={styles.aboutUsItem} />
      <div className={styles.groupParent}>
        <div className={styles.parent}>
          <div className={styles.div}>350+</div>
          <div className={styles.projectCompleted}>Project Completed</div>
        </div>
        <div className={styles.group}>
          <div className={styles.div1}>23+</div>
          <div className={styles.projectCompleted}>Professional Teams</div>
        </div>
        <div className={styles.container}>
          <div className={styles.div2}>15+</div>
          <div className={styles.projectCompleted}>Years Experience</div>
        </div>
      </div>
      <div className={styles.service}>SERVICE</div>
      <div className={styles.whyChooseUs}>Why Choose Us</div>
      <div className={styles.customizeYourInterior}>
        Customize your interior design into a dream place with the best
        designers and quality furniture. We try our best to fulfill your
        expectations.
      </div>
      <div className={styles.aboutUsInner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.aboutUsChild1} />
      <div className={styles.aboutUsChild2} />
      <div className={styles.customizeYourInterior1}>
        Customize your interior design into a dream place with the best
        designers and quality furniture. We try our best to fulfill your
        expectations.
      </div>
      <div className={styles.customizeYourInterior2}>
        Customize your interior design into a dream place with the best
        designers and quality furniture. We try our best to fulfill your
        expectations.
      </div>
      <div className={styles.customizeYourInterior3}>
        Customize your interior design into a dream place with the best
        designers and quality furniture. We try our best to fulfill your
        expectations.
      </div>
      <div className={styles.highQuality}>High Quality</div>
      <div className={styles.professionalDesigner}>Professional Designer</div>
      <div className={styles.theBestServices}>The Best Services</div>
      <img className={styles.ellipseIcon} alt="" src="/ellipse-333.png" />
      <img className={styles.aboutUsChild3} alt="" src="/ellipse-333.png" />
      <img className={styles.aboutUsChild4} alt="" src="/ellipse-333.png" />
      <div className={styles.homeParent}>
        <div className={styles.home} onClick={onHomeClick}>
          Home
        </div>
        <div className={styles.aboutUs1}>About Us</div>
        <div className={styles.ourTeams} onClick={onOurTeamsClick}>
          Our Teams
        </div>
        <div className={styles.services} onClick={onServicesClick}>
          Services
        </div>
      </div>
      <button className={styles.contactUsWrapper} onClick={onFrameButtonClick}>
        <div className={styles.contactUs}>Contact Us</div>
      </button>
      <div className={styles.groupContainer}>
        <div className={styles.dananzWrapper}>
          <b className={styles.dananz}>Dananz</b>
        </div>
        <img className={styles.groupChild} alt="" src="/vector-286.png" />
      </div>
      <img className={styles.vectorIcon} alt="" src="/vector-288.png" />
      <img className={styles.aboutUsChild5} alt="" src="/vector-289.png" />
      <div className={styles.groupDiv}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupItem} />
          <div className={styles.letsDiscussMakingYourInteParent}>
            <div className={styles.letsDiscussMaking}>
              let's discuss making your interior like a dream place!
            </div>
            <div className={styles.groupWrapper}>
              <div className={styles.contactUsBelowToWorkTogetParent}>
                <div className={styles.contactUsBelow}>
                  Contact us below to work together to build your amazing
                  interior
                </div>
                <div className={styles.contactUsContainer}>
                  <div className={styles.contactUs1}>Contact Us</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className={styles.groupInner} alt="" src="/vector-32.png" />
        <div className={styles.enterYourEmailToGetTheLaParent}>
          <div className={styles.enterYourEmail}>
            Enter your email to get the laterst news
          </div>
          <div className={styles.emailAddress}>Email Address</div>
          <img className={styles.groupChild1} alt="" src="/ellipse-741.png" />
        </div>
        <div className={styles.oneOfThe}>One of the best furniture agency.</div>
        <div className={styles.ellipseParent}>
          <img className={styles.groupChild2} alt="" src="/ellipse-320.png" />
          <img className={styles.groupChild3} alt="" src="/ellipse-320.png" />
          <img className={styles.groupChild4} alt="" src="/ellipse-320.png" />
          <img className={styles.groupChild5} alt="" src="/ellipse-320.png" />
          <div className={styles.followUsOn}>Follow us On</div>
        </div>
        <div className={styles.lineDiv} />
        <div className={styles.groupParent1}>
          <div className={styles.dananzWrapper}>
            <b className={styles.dananz}>Dananz</b>
          </div>
          <img className={styles.groupChild} alt="" src="/vector-286.png" />
        </div>
      </div>
      <img
        className={styles.maskGroupIcon}
        alt=""
        src="/mask-group8@2x.png"
        data-animate-on-scroll
      />
      <img className={styles.maskGroupIcon1} alt="" src="/mask-group9@2x.png" />
      <img className={styles.groupIcon} alt="" src="/group-1000004404.png" />
    </div>
  );
};

export default AboutUs;
