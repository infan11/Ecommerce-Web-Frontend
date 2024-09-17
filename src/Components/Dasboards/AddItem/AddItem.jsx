import { Input } from "@material-tailwind/react";


const AddItem = () => {
    return (
        <div>
            <p className="text-center text-4xl mt-5 font-bold">ADD ITEM PAGE </p>
           <form className="max-w-7xl mx-auto mt-5">
           <div className="">
                <Input label="Pruduct Name" name="ProductName " size="lg" required />
                <br />
                <Input label="Pruduct Price" name="price"  size="lg" required />
                <br />
                <select className="select select-ghost  w-full ">
                    <option disabled selected>Select Product Cloth Category</option>
                    <option>Casual Shirt</option>
                    <option>Formal Shirt</option>
                    <option>T-Shirt</option>
                    <option>Muslim Jubba</option>
                    <option>Mens Jeans</option>
                    <option> Jeans Items </option>
                </select>
                <br />
                <input type="file" className="file-input file-input-ghost w-full " required />
            </div>
            <button className="btn w-full mt-2">ADD ITEM</button>
           </form>
        </div>
    );
};

export default AddItem;