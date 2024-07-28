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
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useState } from "react";
import userHooks from "../../Hooks/UserHooks/userHooks";



  
  const Register = () => {
    const {createUser ,googleUserProvider, twitterUserProvider,updateProfiles ,setUser} = userHooks();
    const navigate = useNavigate();
    
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
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
        toast.success("Welcome To Our Web")
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
                <div className="relative">
      <Input
        label="Password"
        name="password"
        size="lg"
        type={showPassword ? 'text' : 'password'}
        required
      />
      <Button
        onClick={togglePasswordVisibility}
        variant="text"
        className="absolute inset-y-0 right-0 flex items-center px-4"
      >
        {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
      </Button>
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
  