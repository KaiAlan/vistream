import { AiOutlineUser, AiFillBell, AiOutlineSearch } from 'react-icons/ai'

const Navbar = () => {

    return (
        <nav className="h-16 w-full bg-primary-foreground absolute top-0 flex justify-between items-center py-4 px-16">
            <div>
                <h1 className="text-2xl font-bold text-muted-foreground">VISTREAM</h1>
            </div>
            <div className="hidden md:flex h-full justify-center items-center">
                <ul className="flex font-bold text-sm text-ring gap-12">
                    <li>Home</li>
                    <li>Feature</li>
                    <li>Page</li>
                    <li>Blog</li>
                    <li>Shop</li>
                </ul>
            </div>
            <div className="hidden md:flex justify-center items-center gap-6">
                <AiOutlineSearch size={28} />
                <AiFillBell size={28} />
                <AiOutlineUser size={28} />
            </div>
        </nav>
    )
}

export default Navbar