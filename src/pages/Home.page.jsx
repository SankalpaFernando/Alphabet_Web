import { Flowbite, Navbar, Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import Logo from "../assets/logo.png";
const theme = {
   sidebar:{
    root:{
        inner: "bg-white m-3"
      }
   }
  }


export default ()=>{
  return (
    <>
    <Navbar className='fixed' fluid rounded>
      <Navbar.Brand  href="https://flowbite-react.com">
        <img src={Logo} className=" h-10 sm:h-14 sm:w-14" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Alphabet Student</span>
      </Navbar.Brand>
      {/* <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link  href="#">
          About
        </Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse> */}
    </Navbar>
    <div className='bg-white'>
   <Flowbite theme={{theme}}>
   <Sidebar className=" fixed top-16" aria-label="Default sidebar example">
      <Sidebar.Items className="">
        <Sidebar.ItemGroup className="">
          <Sidebar.Item href="#" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards} label="Pro" labelColor="dark">
            Kanban
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiInbox} label="3">
            Inbox
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            Users
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingBag}>
            Products
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiTable}>
            Sign Up
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
      </Sidebar>
   </Flowbite>
      <div className="content">
        <div style={{height:"300vh"}}>

        </div>
      </div>
    </div>
    </>
  );
}
