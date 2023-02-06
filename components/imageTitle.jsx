const ImageTitle = ({ image }) => {
  return (
    <div>
      <section
        className="after:bg-jacarta-900/60 relative bg-cover bg-center bg-no-repeat py-32 after:absolute after:inset-0"
        style={{ backgroundImage: `url(${image})` }}
      ></section>
    </div>
  );
};

export default ImageTitle;
