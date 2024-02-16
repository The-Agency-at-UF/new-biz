import './Banner.css';
import logos from '../../images/logos_banner.png'


const images = [
  logos, logos, logos, logos
].map((image) => ({
  id: crypto.randomUUID(),
  image
}));

const Banner = () => {
  return (
    <div class="banner-class">
      <div class="slider">
        <div class="slide-track">
          {images.map(({ id, image }) => (
            <div className="slide" key={id}>
              <img src={image} alt={id} />
            </div>
          ))}
          {images.map(({ id, image }) => (
            <div className="slide" key={id}>
              <img src={image} alt={id} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
