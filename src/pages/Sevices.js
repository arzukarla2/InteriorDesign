import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Sevices.module.css";

const Sevices = () => {
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

  const onFrameButtonClick = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  return (
    <div className={styles.sevices}>
      <b className={styles.services}>Services</b>
      <div className={styles.itIsA}>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </div>
      <div className={styles.achievement}>ACHIEVEMENT</div>
      <div className={styles.sevicesChild} />
      <div className={styles.customizeYourInteriorDesignParent}>
        <div className={styles.customizeYourInterior}>
          Customize your interior design into a dream place with the best
          designers and quality furniture. We try our best to fulfill your
          expectations.
        </div>
        <div className={styles.interiorDesign}>Interior design</div>
      </div>
      <div className={styles.customizeYourInteriorDesignGroup}>
        <div className={styles.customizeYourInterior}>
          Customize your interior design into a dream place with the best
          designers and quality furniture. We try our best to fulfill your
          expectations.
        </div>
        <div className={styles.interiorDesign}>Consultant</div>
      </div>
      <div className={styles.customizeYourInteriorDesignContainer}>
        <div className={styles.customizeYourInterior}>
          Customize your interior design into a dream place with the best
          designers and quality furniture. We try our best to fulfill your
          expectations.
        </div>
        <div className={styles.interiorDesign}>construction consultant</div>
      </div>
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
        <div className={styles.services1}>Services</div>
      </div>
      <button className={styles.contactUsWrapper} onClick={onFrameButtonClick}>
        <div className={styles.contactUs}>Contact Us</div>
      </button>
      <div className={styles.groupParent}>
        <div className={styles.dananzWrapper}>
          <b className={styles.dananz}>Dananz</b>
        </div>
        <img className={styles.groupChild} alt="" src="/vector-286.png" />
      </div>
      <img className={styles.sevicesItem} alt="" src="/vector-288.png" />
      <img className={styles.sevicesInner} alt="" src="/vector-289.png" />
      <div className={styles.vintageParent}>
        <div className={styles.vintage}>Vintage</div>
        <div className={styles.div}>01</div>
      </div>
      <div className={styles.parent}>
        <div className={styles.div}>02</div>
        <div className={styles.vintage}>Minimalist</div>
      </div>
      <div className={styles.group}>
        <div className={styles.div}>03</div>
        <div className={styles.vintage}>Modern</div>
      </div>
      <div className={styles.container}>
        <div className={styles.div}>03</div>
        <div className={styles.vintage}>transitional</div>
      </div>
      <img className={styles.arrowRightIcon} alt="" src="/arrowright.png" />
      <img className={styles.arrowRightIcon1} alt="" src="/arrowright1.png" />
      <img className={styles.arrowRightIcon2} alt="" src="/arrowright1.png" />
      <img className={styles.arrowRightIcon3} alt="" src="/arrowright1.png" />
      <div className={styles.productParent}>
        <div className={styles.product}>PRODUCT</div>
        <div className={styles.chooseYourProduct}>
          Choose your product themes.
        </div>
        <div className={styles.findTheTheme}>
          Find the theme you want. If our choice of theme is not what you want,
          you can customize it as you want.
        </div>
        <div className={styles.groupItem} />
      </div>
      <div className={styles.theUseOf}>
        the use of simple and limited elements to get the best effect or
        impression.
      </div>
      <div className={styles.theUseOf1}>
        the use of simple and limited elements to get the best effect or
        impression.
      </div>
      <div className={styles.theUseOf2}>
        the use of simple and limited elements to get the best effect or
        impression.
      </div>
      <div className={styles.theUseOf3}>
        the use of simple and limited elements to get the best effect or
        impression.
      </div>
      <div className={styles.groupContainer}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupInner} />
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
                  <div className={styles.contactUs1}>Contact Us</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className={styles.vectorIcon} alt="" src="/vector-32.png" />
        <div className={styles.enterYourEmailToGetTheLaParent}>
          <div className={styles.enterYourEmail}>
            Enter your email to get the laterst news
          </div>
          <textarea
            className={styles.emailAddress}
            placeholder="Email Address"
          />
          <img className={styles.ellipseIcon} alt="" src="/ellipse-74.png" />
        </div>
        <div className={styles.oneOfThe}>One of the best furniture agency.</div>
        <div className={styles.ellipseParent}>
          <img className={styles.groupChild1} alt="" src="/ellipse-320.png" />
          <img className={styles.groupChild2} alt="" src="/ellipse-321.png" />
          <img className={styles.groupChild3} alt="" src="/ellipse-320.png" />
          <img className={styles.groupChild4} alt="" src="/ellipse-320.png" />
          <div className={styles.dananz}>Follow us On</div>
        </div>
        <div className={styles.lineDiv} />
        <div className={styles.groupDiv}>
          <div className={styles.dananzWrapper}>
            <b className={styles.dananz}>Dananz</b>
          </div>
          <img className={styles.groupChild} alt="" src="/vector-286.png" />
        </div>
      </div>
      <img className={styles.maskGroupIcon} alt="" src="/mask-group6@2x.png" />
      <img className={styles.maskGroupIcon1} alt="" src="/mask-group7@2x.png" />
      <img className={styles.groupIcon} alt="" src="/group-10000044033.png" />
    </div>
  );
};

export default Sevices;
