import React, { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import GalleryImg1 from "../../assets/images/gallery/g1.jpg"
import GalleryImg3 from "../../assets/images/gallery/g3.jpg"
import GalleryImg4 from "../../assets/images/gallery/g4.jpg"
import GalleryImg6 from "../../assets/images/gallery/g6.jpg"
import GalleryImg7 from "../../assets/images/gallery/g7.jpg"


const Gallery = () => {
    const [open, setOpen] = useState(false)
    const [index, setIndex] = useState(0)

    var images = [
        {
            src: GalleryImg1,
            desc: "Person wearing shoes",
            sub: "Gift Habeshaw"
        },
        {
            src: GalleryImg3,
            desc: "Blonde woman wearing sunglasses smiling at the camera ",
            sub: "Dmitriy Frantsev"
        },
        {
            src: GalleryImg6,
            sub: "Harry Cunningham"
        },
        {
            src: GalleryImg4,
            desc: "Jaipur , Rajasthan India",
            sub: "Liam Baldock"
        },
        {
            src: GalleryImg7,
            sub: "Verne Ho"
        },
        {
            src: GalleryImg6,
            desc: "Rann of kutch , India",
            sub: "Hari Nandakumar"
        },
    ];

    const slides = images.map(image => ({
        src: image.src,
        title: image.desc,
        description: image.sub
    }))

    return (
        <div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
                {images.map((image, idx) => (
                    <img
                        key={idx}
                        src={image.src}
                        alt={image.desc}
                        style={{ width: '100%', height: '200px', objectFit: 'cover', cursor: 'pointer' }}
                        onClick={() => {
                            setIndex(idx)
                            setOpen(true)
                        }}
                    />
                ))}
            </div>
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={slides}
                index={index}
                on={{ view: ({ index: current }) => setIndex(current) }}
            />
        </div>
   );
}

export default Gallery