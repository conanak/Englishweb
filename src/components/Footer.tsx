
const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo và mô tả */}
                    <div>
                        <h2 className="text-xl font-bold mb-2">Grossarium</h2>
                        <p className="text-sm text-gray-400">Học tiếng Anh thông minh với AI</p>
                    </div>

                    {/* Khóa học */}
                    <div>
                        <h3 className="font-semibold mb-4">Khóa học</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white">Beginner (A1-A2)</a></li>
                            <li><a href="#" className="hover:text-white">Intermediate (B1-B2)</a></li>
                            <li><a href="#" className="hover:text-white">Advanced (C1-C2)</a></li>
                            <li><a href="#" className="hover:text-white">Khóa học đặc biệt</a></li>
                        </ul>
                    </div>

                    {/* Hỗ trợ */}
                    <div>
                        <h3 className="font-semibold mb-4">Hỗ trợ</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white">Trung tâm hỗ trợ</a></li>
                            <li><a href="#" className="hover:text-white">Hướng dẫn sử dụng</a></li>
                            <li><a href="#" className="hover:text-white">FAQ</a></li>
                            <li><a href="#" className="hover:text-white">Liên hệ</a></li>
                        </ul>
                    </div>

                    {/* Về chúng tôi */}
                    <div>
                        <h3 className="font-semibold mb-4">Về chúng tôi</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white">Giới thiệu</a></li>
                            <li><a href="#" className="hover:text-white">Đội ngũ giảng viên</a></li>
                            <li><a href="#" className="hover:text-white">Blog</a></li>
                            <li><a href="#" className="hover:text-white">Tuyển dụng</a></li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-800 mt-8 pt-6 text-sm text-gray-400 text-center">
                    © 2025 Grossarium. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
