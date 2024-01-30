import React from "react";
import "./Article.css";

const Article = () => {
  return (
    <article>
      <div className="art-container">
        <h1>Latest Article</h1>
        <div className="article">
          {/* Art item */}
          <div className="art-item">
            <img src="images/image-currency.jpeg" alt="Money art" />
            <div className="a-item">
              <p className="authur"> By Claire Robinson</p>
              <h3> Receive money in any currency with no fees</h3>
              <p className="brief">
                The world is getting smaller and we’re becoming more mobile. So
                why should you be forced to only receive money in a single …
              </p>
            </div>
          </div>
          {/* End of art item */}
          {/* Art item */}
          <div className="art-item">
            <img src="images/image-restaurant.jpeg" alt="Money art" />
            <div className="a-item">
              <p className="authur"> By Wilson Hutton</p>
              <h3> Treat yourself without worrying about money Our</h3>
              <p className="brief">
                simple budgeting feature allows you to separate out your
                spending and set realistic limits each month. That means you …
              </p>
            </div>
          </div>
          {/* End of art item */}
          {/* Art item */}
          <div className="art-item">
            <img src="images/image-plane.jpg" alt="Money art" />
            <div className="a-item">
              <p className="authur">By Wilson Hutton</p>
              <h3> Take your Easybank card wherever you go </h3>
              <p className="brief">
                We want you to enjoy your travels. This is why we don’t charge
                any fees on purchases while you’re abroad. We’ll even show you …
              </p>
            </div>
          </div>
          {/* End of art item */}
          {/* Art item */}
          <div className="art-item">
            <img src="images/image-confetti.jpeg" alt="Money art" />
            <div className="a-item">
              <p className="authur">By  Robinson </p>
              <h3> The benefit of online banking</h3>
              <p className="brief">
              online banking has transformed the way individuals interact with their finances, offering unparalleled convenience, accessibility, and security. As technology continues to advance, online banking is expected to further evolve, providing even more innovative solutions to meet customers' financial needs....
              </p>
            </div>
          </div>
          {/* End of art item */}
        </div>
      </div>
    </article>
  );
};

export default Article;
