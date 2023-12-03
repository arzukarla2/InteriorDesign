import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Portofolios.module.css";

const Portofolios = () => {
  const navigate = useNavigate();

  const onHomeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutUsClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onOurTeamsClick = useCallback(() => {
    navigate("/our-teams");
  }, [navigate]);

  const onServicesClick = useCallback(() => {
    navigate("/sevices");
  }, [navigate]);

  return (
    <div className={styles.portofolios}>
      <b className={styles.portofolio}>Portofolio</b>
      <div className={styles.itIsA}>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </div>
      <div className={styles.portfolio}>Portfolio</div>
      <div className={styles.portofoliosChild} />
      <div className={styles.homeParent}>
        <div className={styles.home} onClick={onHomeClick}>
          Home
        </div>
        <div className={styles.aboutUs} onClick={onAboutUsClick}>
          About Us
        </div>
        <div className={styles.ourTeams} onClick={onOurTeamsClick}>
          Our Teams
        </div>
        <div className={styles.services} onClick={onServicesClick}>
          Services
        </div>
      </div>
      <div className={styles.contactUsWrapper}>
        <div className={styles.contactUs}>Contact Us</div>
      </div>
      <div className={styles.groupParent}>
        <div className={styles.dananzWrapper}>
          <b className={styles.dananz}>Dananz</b>
        </div>
        <img className={styles.groupChild} alt="" src="/vector-286.png" />
      </div>
      <img className={styles.portofoliosItem} alt="" src="/vector-288.png" />
      <img className={styles.portofoliosInner} alt="" src="/vector-289.png" />
      <div className={styles.groupContainer}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupItem} />
          <div className={styles.groupWrapper}>
            <div className={styles.letsDiscussMakingYourInteParent}>
              <div className={styles.letsDiscussMaking}>
                let's discuss making your interior like a dream place!
              </div>
              <div className={styles.contactUsBelowToWorkTogetParent}>
                <div className={styles.contactUsBelow}>
                  Contact us below to work together to build your amazing
                  interior
                </div>
                <div className={styles.contactUsContainer}>
                  <div className={styles.seeMore}>Contact Us</div>
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
          <img className={styles.ellipseIcon} alt="" src="/ellipse-74.png" />
        </div>
        <div className={styles.oneOfThe}>One of the best furniture agency.</div>
        <div className={styles.ellipseParent}>
          <img className={styles.groupChild1} alt="" src="/ellipse-320.png" />
          <img className={styles.groupChild2} alt="" src="/ellipse-321.png" />
          <img className={styles.groupChild3} alt="" src="/ellipse-320.png" />
          <img className={styles.groupChild4} alt="" src="/ellipse-320.png" />
          <div className={styles.followUsOn}>Follow us On</div>
        </div>
        <div className={styles.lineDiv} />
        <div className={styles.groupDiv}>
          <div className={styles.dananzWrapper}>
            <b className={styles.dananz}>Dananz</b>
          </div>
          <img className={styles.groupChild} alt="" src="/vector-286.png" />
        </div>
      </div>
      <div className={styles.onlineLearningWith}>
        Online learning with us does not interfere with your daily life. because
        learning can be done anytime and anywhere.
      </div>
      <div className={styles.service}>SERVICE</div>
      <div className={styles.whyChooseUs}>Why Choose Us</div>
      <div className={styles.customizeYourInterior}>
        Customize your interior design into a dream place with the best
        designers and quality furniture. We try our best to fulfill your
        expectations.
      </div>
      <div className={styles.portofoliosChild1} />
      <div className={styles.rectangleDiv} />
      <div className={styles.portofoliosChild2} />
      <div className={styles.portofoliosChild3} />
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
      <div className={styles.minimalistRoom}>Minimalist Room</div>
      <div className={styles.theBestServices}>The Best Services</div>
      <img className={styles.portofoliosChild4} alt="" src="/ellipse-333.png" />
      <img className={styles.portofoliosChild5} alt="" src="/ellipse-333.png" />
      <img className={styles.portofoliosChild6} alt="" src="/ellipse-333.png" />
      <div className={styles.seeMoreWrapper}>
        <div className={styles.seeMore}>See More</div>
      </div>
      <div className={styles.onlineLearningWith1}>
        Online learning with us does not interfere with your daily life. because
        learning can be done anytime and anywhere.
      </div>
      <div className={styles.onlineLearningWith2}>
        Online learning with us does not interfere with your daily life. because
        learning can be done anytime and anywhere.
      </div>
      <div className={styles.onlineLearningWith3}>
        Online learning with us does not interfere with your daily life. because
        learning can be done anytime and anywhere.
      </div>
      <div className={styles.modernRoom}>Modern Room</div>
      <div className={styles.transitionalRoom}>transitional Room</div>
      <div className={styles.vintageRoom}>Vintage Room</div>
      <div className={styles.seeMoreContainer}>
        <div className={styles.seeMore}>See More</div>
      </div>
      <div className={styles.seeMoreFrame}>
        <div className={styles.seeMore}>See More</div>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.seeMore}>See More</div>
      </div>
      <img className={styles.maskGroupIcon} alt="" src="/mask-group@2x.png" />
      <div className={styles.rectangleGroup}>
        <div className={styles.groupChild5} />
        <img className={styles.groupChild6} alt="" src="/ellipse-332@2x.png" />
        <div className={styles.ceoOfDananzParent}>
          <div className={styles.ceoOfDananz}>CEO of Dananz</div>
          <div className={styles.argaDanaan}>Arga Danaan</div>
        </div>
      </div>
      <img className={styles.maskGroupIcon1} alt="" src="/mask-group1@2x.png" />
      <div className={styles.rectangleContainer}>
        <div className={styles.groupChild5} />
        <img className={styles.groupChild6} alt="" src="/ellipse-332@2x.png" />
        <div className={styles.ceoOfDananzParent}>
          <div className={styles.ceoOfDananz}>CEO of Dananz</div>
          <div className={styles.argaDanaan}>Arga Danaan</div>
        </div>
      </div>
      <img className={styles.maskGroupIcon2} alt="" src="/mask-group2@2x.png" />
      <div className={styles.rectangleParent1}>
        <div className={styles.groupChild5} />
        <img className={styles.groupChild6} alt="" src="/ellipse-332@2x.png" />
        <div className={styles.ceoOfDananzParent}>
          <div className={styles.ceoOfDananz}>CEO of Dananz</div>
          <div className={styles.argaDanaan}>Arga Danaan</div>
        </div>
      </div>
      <img className={styles.maskGroupIcon3} alt="" src="/mask-group3@2x.png" />
      <div className={styles.rectangleParent2}>
        <div className={styles.groupChild5} />
        <img className={styles.groupChild6} alt="" src="/ellipse-332@2x.png" />
        <div className={styles.ceoOfDananzParent}>
          <div className={styles.ceoOfDananz}>CEO of Dananz</div>
          <div className={styles.argaDanaan}>Arga Danaan</div>
        </div>
      </div>
      <img className={styles.maskGroupIcon4} alt="" src="/mask-group4@2x.png" />
      <img className={styles.groupIcon} alt="" src="/group-1000004403.png" />
    </div>
  );
};

export default Portofolios;
