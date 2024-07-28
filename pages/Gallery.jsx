"use client";

import React from "react";
import Mini from "../components/Mini";
import Header from "../components/Header";
import { Gallery } from "react-grid-gallery";

import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import Image from "next/image";

import styles from "../styles/Gallery.module.css";

function GallerySection() {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  return (
    <div style={{ paddingBottom: "100px" }}>
      <Mini head="Gallery" sub="Our Gallery" image={"/assets/col.jpeg"} />
      <Header
        first="Our Gallery"
        middle="Our Photos"
        last="We have some of our photos from our Gallery."
      />
      <div style={{ padding: "0 2rem" }} className={styles.gallery__flex}>
        <LightGallery
          onInit={onInit}
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
          elementClassNames={styles.gallery__flex}
        >
          <a href="https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg">
            <Image
              alt="img1"
              src="https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "100%" }}
            />
          </a>
          <a href="https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg">
            <Image
              alt="img2"
              src="https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "100%" }}
            />
          </a>
          <a href="https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg">
            <Image
              alt="img3"
              src="https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "100%" }}
            />
          </a>
        </LightGallery>
      </div>
    </div>
  );
}

export default GallerySection;
