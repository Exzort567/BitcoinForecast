import Header from '../../components/Header'
import HeaderImage from '../../images/bg2.jpg'
import Gallery1 from '../../images/gallery/gallery1.jpg'
import Gallery2 from '../../images/gallery/gallery2.jpg'
import Gallery3 from '../../images/gallery/gallery3.jpg'
import Gallery4 from '../../images/gallery/gallery4.jpg'
import Gallery5 from '../../images/gallery/gallery5.jpg'
import Gallery6 from '../../images/gallery/gallery6.jpg'
import Gallery7 from '../../images/gallery/gallery7.jpg'
import Gallery8 from '../../images/gallery/gallery8.jpg'
import Gallery9 from '../../images/gallery/gallery9.jpg'
import Gallery10 from '../../images/gallery/gallery10.jpg'
import './gallery.css'

const Gallery = () => {
  return (
    <>
      <Header title="Our Gallery" image={HeaderImage}>
        Explore our Gallery, see predictions turn into profits. Witness the transformation, from forecast to success
      </Header>
      <section className='gallery'>
        <div className='gallery_container'>
          <img src={Gallery1} alt="Gallery" />
          <img src={Gallery10} alt="Gallery" />
          <img src={Gallery9} alt="Gallery" />
          <img src={Gallery8} alt="Gallery" />
          <img src={Gallery7} alt="Gallery" />
          <img src={Gallery2} alt="Gallery" />
          <img src={Gallery3} alt="Gallery" />
          <img src={Gallery4} alt="Gallery" />
          <img src={Gallery5} alt="Gallery" />
          <img src={Gallery6} alt="Gallery" />
          
          
          
          
        </div>
      </section>
    </>
  )
} 

export default Gallery
