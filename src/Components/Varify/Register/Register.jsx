import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
    Button,
  } from "@material-tailwind/react";
import { imageUpload } from "../../Hooks/ImageHooks/ImageHooks";
import toast from "react-hot-toast";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import userHooks from "../../Hooks/UserHooks/userHooks";
import UseAxiosPublic from "../../Hooks/AxiosPublic/UseAxiosPublic";



  
  const Register = () => {
    const {createUser ,googleUserProvider, twitterUserProvider,updateProfiles ,setUser} = userHooks();
    const navigate = useNavigate();
    const axiosPublic = UseAxiosPublic();
    const from = location.state?.from?.pathname  || "/"
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;
      const photo = form.photo.files[0];
      const imageData = await imageUpload(photo)
      const register = { name, email, password , imageData };
      console.log(register);
         if(password.length < 6){
          toast.error("Must 8 character ")
         }
      createUser(email , password)
      .then(result => {
        const user = result.user;
        setUser(user)
        console.log(user);
        
       updateProfiles(name , imageData?.data?.display_url)
      
       .then(() => {
        const userItem = {
          name: name ,
          email : email,
          photo: imageData?.data?.display_url
         }
         axiosPublic.post("/users" , userItem)
         .then(res => {
          console.log(res.data, "send to dabase");
         })
     
     
        navigate(from , {replace : true})
       })
    
      })
          
    };
   const handleGoogle = () => {
     googleUserProvider()
     .then(result => {
      const googleAuth = result.user;
       setUser(googleAuth)
      console.log(googleAuth);
      toast.success("Successfully Google SignUP")
      navigate(from , {replace : true})
     })
   }
   const handleTwitter = () => {
    twitterUserProvider()
    .then(result => {
       const twitter = result.user;
       setUser(twitter)
       console.log(twitter);
       toast.success("Successfully X SignUP")
       navigate(from , {replace : true})
    })
   }
    return (
      <div>
        <div className="min-h-screen flex justify-center items-center">
          <form onSubmit={handleFormSubmit}>
            <Card className="w-96">
              <CardHeader className="mb-4 grid h-28 shadow-2xl place-items-center  ">
                <Typography variant="h3" color="white" className="text-black  hover:text-white">
                  SIGN UP
                </Typography>
              </CardHeader>
              <CardBody className="flex flex-col gap-4">
                <Input label="Name" name="name" size="lg" required />
                <Input label="Email" name="email" size="lg" required />
                <div className="">
      <Input type="password" label="Password" name="password" required />
      <Typography
        variant="small"
        color="gray"
        className="mt-2 flex items-center gap-1 font-normal"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="-mt-px h-4 w-4"
        >
          <path
            fillRule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
            clipRule="evenodd"
          />
        </svg>
       <p className="text-[10px]"> Use at least 8 characters</p>
      </Typography>

      
    </div>
                  <Input label="Image" type="file"name="photo"  accept="image/*"  className="file-input file-input-ghost w-full max-w-xs" required />
             
                <div className="-ml-2.5">
                  <Checkbox label="Remember Me" name="remember" />
                </div>
              </CardBody>
              <CardFooter className="pt-0">
                <Button
                  variant="gradient"
                  className="bg-gradient-to-tr from-[#1e066e] to-[#6811835c] creative-gradient-navbar"
                  fullWidth
                  type="submit"
                >
                  Sign Up
                </Button>
                <br />
                <Button onClick={handleGoogle}
                  variant=""
                
                  fullWidth
                  type="submit"
                  className="bg-gradient-to-tr from-[#1e066e] to-[#6811835c] creative-gradient-navbar"
                >
                  Google
                </Button>
                <br />
                <Button onClick={handleTwitter}
                  variant=""
                
                  fullWidth
                  type="submit"
                  className="bg-gradient-to-tr from-[#1e066e] to-[#6811835c] creative-gradient-navbar"
                >
                   X
                </Button>
                <Typography variant="small" className="mt-6 flex justify-center">
                  Already have an account?
                  <Typography
                    as="a"
                    href="#signin"
                    variant="small"
                    color="blue-gray"
                    className="ml-1 font-bold"
                  >
                  <Link to={"/login"}>  Sign in</Link>
                  </Typography>
                </Typography>
              </CardFooter>
            </Card>
          </form>
        </div>
      </div>
    );
  };
  
  export default Register;
  