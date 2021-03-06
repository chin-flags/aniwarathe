import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

import styles from "./article-preview.module.css";

export default ({ article }) => (
  <div className={styles.preview}>
    {article.heroImage && <Img alt="" fluid={article.heroImage.fluid} />}
    <h3 className={styles.previewTitle}>
      <Link style={{ textDecoration: "none" }} to={`/blog/${article.slug}`}>
        {article.title}
      </Link>
    </h3>
    <h4
      dangerouslySetInnerHTML={{
        __html: article.description.childMarkdownRemark.html,
      }}
    />
  </div>
);
