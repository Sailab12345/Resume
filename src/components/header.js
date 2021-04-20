import React from "react";
import { Icon } from "semantic-ui-react";

function Header() {
  return (
    <div className="ui stackable grid margin-no">
      <div className="middle aligned column padding-vs-vertical" style={{ width: 104 }}>
        <img
          className="ui medium circular image"
          src="/assets/images/WhatsApp Image 2021-03-05 at 10.00.19.jpeg"
          alt=""
          width="50px"
        />
      </div>
      <div className="thirteen wide column padding-vs-vertical">
        <p className="text-size-large text-weight-medium margin-five-bottom">Sailab Basak</p>
        {/* <p className="margin-no">React | React Native | EmberJs Developer</p> */}
        <p className="margin-five-bottom">
          <span>
            <a
              href="mailto:sailabbasak1998@gmail.com"
              className="margin-ten-right text-color-red disableOnPrint"
              target="black"
            >
              <Icon name="mail outline" />
              sailabbasak1998@gmail.com
            </a>
          </span>
          <span>
            <a
              href="tel:07662914308"
              className="margin-ten-right text-color-green disableOnPrint"
              target="black"
            >
              <Icon name="phone" />
              +91-7662914308
            </a>
          </span>
          <span>
            <Icon name="map marker alternate" />
            <span className="margin-ten-right">Guwahati, Assam, 781040</span>
          </span>
        </p>
        <p>
          <span>
            <a href="https://www.linkedin.com/in/sailab-basak-a6a201183/" target="blank">
              <Icon name="linkedin" />
              <span className="margin-ten-right">sailab-basak-a6a201183</span>
            </a>
            <a href="https://github.com/Sailab12345" target="blank">
              <Icon name="github" />
              <span className="margin-ten-right">Sailab12345</span>
            </a>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Header;
