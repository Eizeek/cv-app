import React from "react";
import { Link } from "react-router-dom";

import "../../assests/styles/NotFoundPage.scss";

export const NotFoundPage = () => {
  return (
    <section
      className="app-section app-section_not-found"
      data-testid="not-found"
    >
      <div>
        <h2>Page Not found</h2>
        <p>
          Looks like you've followed a broken link or entered a URL that doesn't
          exit on this site.
        </p>
        <Link to="/">&larr; Back to our site</Link>
      </div>
    </section>
  );
};
