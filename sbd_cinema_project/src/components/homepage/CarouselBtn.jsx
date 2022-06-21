const CarouselBtn = ({data}) => {
    return (
        <input value={data.text} type="button" placeholder="state" onClick={data.listener}/>
    );
}
 
export default CarouselBtn;