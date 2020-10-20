import PropTypes from 'prop-types'
import React from 'react'
import heatmap from '../images/heatmap1.jpeg'
import sensor from '../images/sensor.jpeg'
// import pic03 from '../images/pic03.jpg'
import cellstrength from '../images/Cell-Signal-Strength-Chart.jpg'
import gps from '../images/gps.gif'
import nogps from '../images/no-gps.gif'

import overlayimg from '../images/overlay-img.gif'
import recordfloorplan from '../images/record-floor-plan.gif'
import instantshareable from '../images/instant-shareable.gif'
import Terms from './Terms'


class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={cellstrength} alt="" />
          </span>
          <p>
            Map My LTE is a surveying tool for 2G/3G/4G/5G
            cellular network information using both consumer
            Android and Firstnet Android devices, Allowing data
            being recorded and displayed over the heatmaps. The
            same app platform can be used for surveying air
            quality, radiation, noise level and many other through
            IoT add ons.
          </p>
          <p>
            We currently have an android application that can
            collect LTE signals using GPS, non GPS (wifi LTE
            location), and ability to insert floor plans on the
            application itself. The application then have the
            ability to export the survey data into csv as well as
            uploading the data to Firebase for cloud storage.
            The application is ready to use and be deployed.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Sensor Support</h2>
          <span className="image main">
            <img src={sensor} alt="" />
          </span>
          <p>
            Geospatial Sensor Support:
            <ul>
              <li>
                5G
              </li>
              <li>
                Air quality / CO2
              </li> 
              <li>
                Radiation
              </li>
              <li>
                Noise Level
              </li>
              <li>
                Temperature and Humidity
              </li>
              <li>
                Altitude
              </li>
            </ul>
          </p>

          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Features</h2>
          {/* <span className="image main">
            <img src={pic03} alt="" />
          </span> */}

          <p>
            Record on a live map with GPS:<br/>
            <img src={gps} alt="" style={{width: '50%'}}/>
          </p>

          <hr/>
          
          <p>
            Record on a live map without GPS:
            <ul>
              <li>
                Techniques based on WiFi, Cellular, and Bluetooth using local towers. 
              </li>
              <li>Leveraging Google’s Network (and other non-GPS)
              location providers to get an approximate location
              </li>
            </ul>
            <img src={nogps} alt="" style={{width: '50%'}}/>
          </p>

          <hr/>

          <p>
            Overlay images live during recording:<br/>
            <img src={overlayimg} alt="" style={{width: '50%'}}/>
          </p>

          <hr/>

          <p>
            Correct your location with a simple press: <br/>
            <img src={recordfloorplan} alt="" style={{width: '50%'}}/>
          </p>

          <hr/>

          <p>
            Instant shareable trip report:
            <ul>
              <li>
                Premium version will open anonymized maps from other users, and an aggregate view across regions.
              </li>
            </ul>
            <img src={instantshareable} alt="" style={{width: '50%'}}/>
          </p>

          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Terms of Use</h2>
          <span className="image main">
            <img src={heatmap} alt="" />
          </span>
          
  
          <Terms/>

          <p>Please email us any questions or comments or if you would like to participate in user research at:<br/>
            <a href="mailto:mapmylte@gmail.com">
              mapmylte@gmail.com
            </a>
          </p>

          
          {/* <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form> */}


          {/* <ul className="icons">
            <li>
              <a
                href="https://twitter.com/HuntaroSan"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul> */}
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
