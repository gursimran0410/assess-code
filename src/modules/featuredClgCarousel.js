export function FeaturedClgCarousel() {
  return (
    <div className="carouselContainer">
      <div className="carouselContainerBox">
        <div>
          <h3 style={{ margin: "10px 0px 0px 10px" }}>Top Featured Colleges</h3>
          <p style={{ margin: "0px 0px 0px 10px" }}>
            Top Colleges Cherry Picked For You
          </p>
        </div>
        <img
          alt="uni"
          src="https://img.icons8.com/material-outlined/60/000000/university.png"
        />
      </div>
      <div className="scrollClg">
        {[...Array(10)].map((item, index) => (
          <div className="scrollClgItems" key={index}>
            <div className="itemsContainer">
              <div className="rating">9/10</div>
              <div className="clgInfo">
                <div>
                  <img
                    alt="clg-logo"
                    src="https://images.collegedunia.com/public/college_data/images/logos/149154157555.jpg?h=40&w=40&mode=stretch"
                  />
                </div>
                <div className="fontWhite">Indian Institute Of Technology</div>
                <div className="carouselFooter">UG Certification Fees</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
