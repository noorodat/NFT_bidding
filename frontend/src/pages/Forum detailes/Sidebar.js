import React from "react";

function Sidebar() {

  return (
    <>
      <div style={{marginTop:'160px'}}>
     
        <div className="rbt-single-widget widget_categories mt-30">
          <h3 className="title">Categories</h3>
          <div className="inner">
            <ul className="category-list ">
              <li>
                <a href="#">
                  <span className="left-content">Development</span>
                  <span className="count-text">300</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="left-content">Company</span>
                  <span className="count-text">275</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="left-content">Marketing</span>
                  <span className="count-text">625</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="left-content">UX Design</span>
                  <span className="count-text">556</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="left-content">Business</span>
                  <span className="count-text">247</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="left-content">App Development</span>
                  <span className="count-text">457</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="left-content">Application</span>
                  <span className="count-text">423</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="left-content">Art</span>
                  <span className="count-text">235</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="rbt-single-widget widget_tag_cloud mt--40">
          <h3 className="title">Tags</h3>
          <div className="inner mt--20">
            <div className="tagcloud">
              <a href="#">Corporate</a>
              <a href="#">Agency</a>
              <a href="#">Creative</a>
              <a href="#">Design</a>
              <a href="#">Minimal</a>
              <a href="#">Company</a>
              <a href="#">Development</a>
              <a href="#">App Landing</a>
              <a href="#">Startup</a>
              <a href="#">App</a>
              <a href="#">Business</a>
              <a href="#">Software</a>
              <a href="#">Landing</a>
              <a href="#">Art</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Sidebar;
