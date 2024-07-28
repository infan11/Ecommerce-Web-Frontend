
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
import { Link } from "react-router-dom";
const Login = () => {

    return (
        <div>
           <div className="min-h-screen flex justify-center items-center">
          <form>
          <Card className="w-96 ">
      <CardHeader
     
        className="mb-4 grid h-28 shadow-2xl  place-items-center creative-gradient-navbar"
      >
        <Typography variant="h3" color="black" className="hover:text-white">
          Sign In
        </Typography>
      </CardHeader>
      <CardBody className="flex flex-col gap-4">
        <Input label="Email" size="lg" />
        <Input label="Password" size="lg" />
        <div className="-ml-2.5">
          <Checkbox label="Remember Me" />
        </div>
      </CardBody>
      <CardFooter className="pt-0">
        <Button variant="gradient" className="bg-gradient-to-tr from-[#1e066e]  to-[#6811835c] creative-gradient-navbar" fullWidth>
          Sign In
        </Button>
        <Typography variant="small" className="mt-6 flex justify-center">
          Don&apos;t have an account?
          <Typography
            as="a"
            href="#signup"
            variant="small"
            color="blue-gray"
            className="ml-1 font-bold " 
          
          >
       <Link to={"/register"}>Sign up</Link>
          </Typography>
        </Typography>
      </CardFooter>
    </Card>
          </form>
           </div>
        </div>
    );
};

export default Login;