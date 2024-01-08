const Footer = () => {
    return (
        <footer className="p-4 mt-6">
            <div className="container mx-auto flex justify-center items-center">
                <div>
                    <img src={process.env.PUBLIC_URL + '/pieuvre.png'} alt="ArtPop! Logo" className="h-10 w-auto mr-8" />
                </div>
                <div>
                    <p className="text-sm">© {new Date().getFullYear()} ArtPop!</p>
                </div>
            </div>
        </footer>
    );
};
export default Footer;