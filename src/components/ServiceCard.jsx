import { useRef } from 'react';

const ServiceCard = ({ title, description, image }) => {
  const dialogRef = useRef(null);

  const closeDialog = () => dialogRef.current?.close();

  return (
    <article className="service-card">
      <button
        className="service-card-image-button"
        type="button"
        aria-label={`View ${title} details`}
        onClick={() => dialogRef.current?.showModal()}
      >
        <img src={image} alt={title} />
      </button>
      <h3 className="service-card-title">{title}</h3>

      <dialog
        className="service-dialog"
        ref={dialogRef}
        onClick={(event) => {
          if (event.target === dialogRef.current) closeDialog();
        }}
      >
        <div className="service-dialog-content">
          <img className="service-dialog-image" src={image} alt={title} />
          <div className="service-dialog-copy">
            <button className="service-dialog-close" type="button" onClick={closeDialog}>
              Close
            </button>
            <h3>{title}</h3>
            <p>{description}</p>
            <a className="btn btn-primary" href="#contact" onClick={closeDialog}>
              Enquire Now
            </a>
          </div>
        </div>
      </dialog>
    </article>
  );
};

export default ServiceCard;
