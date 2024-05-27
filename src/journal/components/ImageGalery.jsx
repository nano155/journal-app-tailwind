

export const ImageGalery = ({ images }) => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-4 gap-x-1 w-full">
        {images?.map((item) => (
          
          <div key={item} className="w-full h-48">
            <img
              srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${item}?w=164&h=164&fit=crop&auto=format`}
              alt='Imagen de la nota'
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
