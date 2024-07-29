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

const imgs = [
  "/assets/gallery.jpeg",
  "/assets/gallery1.jpeg",
  "/assets/gallery2.jpeg",
  "/assets/total.jpg",
  // "/assets/safety.jpg",
  "/assets/nn.jpg",
  "/assets/new.jpg",
  // "/assets/qua.jpg",
  "/assets/gf.jpg",
  "/assets/AfRSME Cert-1new.png",
  "/assets/IFBA-BWM CERTIFICATE - Paul Okwalinga-1.png",
  "/assets/paul1.png",
  "/assets/lov.jpg",
  "/assets/image.png",
  "/assets/new.png",
  "/assets/ho.jpg",
  "/assets/BWM Certification - Chair Letter to Paul Okwalinga-1.png",
];

function GallerySection() {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  return (
    <div style={{ paddingBottom: "100px" }}>
      <Mini head="Gallery" sub="Our Gallery" image={"/assets/col.jpeg"} />
      <Header
        first="Our Gallery"
        middle="Visual Highlights"
        last="Snapshots of Our Journey"
      />
      <div style={{ padding: "0 2rem" }} className={styles.gallery__flex}>
        <LightGallery
          // onInit={onInit}
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
          elementClassNames={styles.gallery__flex}
        >
          {imgs.map((img, i) => (
            <a href={img} key={i}>
              <Image
                alt="img1"
                src={img}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </a>
          ))}
        </LightGallery>
      </div>
    </div>
  );
}

export default GallerySection;
