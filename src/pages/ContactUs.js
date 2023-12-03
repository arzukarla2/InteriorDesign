import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ContactUs.module.css";

const ContactUs = () => {
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
    <div className={styles.contactUs}>
      <b className={styles.contactUs1}>Contact Us</b>
      <div className={styles.itIsA}>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
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
        <div className={styles.services} onClick={onServicesClick}>
          Services
        </div>
      </div>
      <div className={styles.contactUsWrapper}>
        <div className={styles.contactUs2}>Contact Us</div>
      </div>
      <button className={styles.sendMassageWrapper}>
        <div className={styles.sendMassage}>Send Massage</div>
      </button>
      <div className={styles.groupParent}>
        <div className={styles.dananzWrapper}>
          <b className={styles.dananz}>Dananz</b>
        </div>
        <img className={styles.groupChild} alt="" src="/vector-2861.png" />
      </div>
      <img className={styles.contactUsChild} alt="" src="/vector-288.png" />
      <img className={styles.contactUsItem} alt="" src="/vector-289.png" />
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
                <button className={styles.contactUsContainer}>
                  <div className={styles.contactUs3}>Contact Us</div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <img className={styles.groupInner} alt="" src="/vector-32.png" />
        <div className={styles.enterYourEmailToGetTheLaParent}>
          <div className={styles.enterYourEmail}>
            Enter your email to get the laterst news
          </div>
          <textarea
            className={styles.emailAddress}
            placeholder="Email Address"
          />
          <img className={styles.ellipseIcon} alt="" src="/ellipse-741.png" />
        </div>
        <div className={styles.oneOfThe}>one of the best furniture agency.</div>
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
          <img className={styles.groupChild} alt="" src="/vector-2861.png" />
        </div>
      </div>
      <div className={styles.contactUsInner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.contactUsChild1} />
      <div className={styles.contactUsChild2} />
      <input className={styles.rectangleInput} type="text" />
      <div className={styles.firstName}>First Name</div>
      <div className={styles.lastName}>Last Name</div>
      <input className={styles.email} placeholder="Email" type="text" />
      <input
        className={styles.firstName1}
        placeholder="First Name"
        type="text"
      />
      <input className={styles.lastName1} placeholder="Last Name" type="text" />
      <div className={styles.firstName2}>First Name</div>
      <input
        className={styles.yourMessage}
        placeholder="Your Message"
        type="text"
      />
      <div className={styles.email1}>Email</div>
      <div className={styles.phoneNumber}>Phone Number</div>
      <div className={styles.message}>Message</div>
      <div className={styles.usParent}>
        <div className={styles.us}>US</div>
        <img
          className={styles.iconlylightarrowDown2}
          alt=""
          src="/iconlylightarrow--down-2.png"
        />
      </div>
      <div className={styles.loaction}>Loaction</div>
      <div className={styles.contactUsChild3} />
      <div className={styles.visitOurStores}>Visit Our Stores</div>
      <div className={styles.findUsAt}>Find us at these locations.</div>
      <div className={styles.dananzgmailcom}>dananz@gmail.com</div>
      <div className={styles.div}>+62 815 002 1000</div>
      <div className={styles.customizeYourInterior}>
        Customize your interior design into a dream place with the best
        designers and quality furniture. We try our best to fulfill your
        expectations.
      </div>
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
      <div className={styles.surakarta}>Surakarta</div>
      <div className={styles.bandung}>Bandung</div>
      <div className={styles.jakarta}>Jakarta</div>
      <div className={styles.yogyakarta}>Yogyakarta</div>
      <div className={styles.email2}>Email</div>
      <div className={styles.phone}>Phone</div>
      <img className={styles.groupIcon} alt="" src="/group-10000044031.png" />
    </div>
  );
};

export default ContactUs;
