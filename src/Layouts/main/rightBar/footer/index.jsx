import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer>
            <div className="text-[#eff3f49a] flex justify-center flex-wrap text-[13px] mt-5 px-4 space-x-3 ">
                <Link to="/" className="hover:underline" target="_newblank">Hizmet Şartları</Link>
                <Link to="/" className="hover:underline" target="_newblank">Gizlilik Ploitikası</Link>
                <Link to="/" className="hover:underline" target="_newblank">Cerez Politikası</Link>
                <Link to="/" className="hover:underline" target="_newblank">Imprint</Link>
                <Link to="/" className="hover:underline" target="_newblank">Erişilebilirlik</Link>
                <Link to="/" className="hover:underline" target="_newblank">Reklam bilgisi</Link>
                <Link to="/" className="hover:underline" target="_newblank">Daha fazla...</Link>
                <div className=" ">Copyright © 2024 X Corp.</div>
            </div>
        </footer>
    )
}

export default Footer