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
  
  const Register = () => {
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
    };
  
    return (
      <div>
        <div className="min-h-screen flex justify-center items-center">
          <form onSubmit={handleFormSubmit}>
            <Card className="w-96">
              <CardHeader className="mb-4 grid h-28 shadow-2xl place-items-center creative-gradient-navbar bg-gradient-to-tr from-[#2931cf] to-[#8303aab5]">
                <Typography variant="h3" color="white" className="hover:text-white">
                  SIGN UP
                </Typography>
              </CardHeader>
              <CardBody className="flex flex-col gap-4">
                <Input label="Name" name="name" size="lg" required />
                <Input label="Email" name="email" size="lg" required />
                <Input label="Password" name="password" size="lg" required />
            
               
                 
                  <Input label="Image" type="file"name="photo"  accept="image/*"  className="file-input file-input-ghost w-full max-w-xs" />
             
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
                <Typography variant="small" className="mt-6 flex justify-center">
                  Already have an account?
                  <Typography
                    as="a"
                    href="#signin"
                    variant="small"
                    color="blue-gray"
                    className="ml-1 font-bold"
                  >
                    Sign in
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
  