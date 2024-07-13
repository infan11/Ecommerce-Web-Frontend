
const SectionTitle = ({heading , subHeading, imageHeading}) => {
    return (
    <div>
            <div className="justify-center items-center">
            <p className=" text-blue-700 text-center mt-5  font-bold text-2xl ">{heading}</p>
            <p className="  font-bold text-2xl">{subHeading}</p>
            <img className="w-12 mx-auto" src={imageHeading} alt="" />
        </div>
    </div>
    );
};

export default SectionTitle;