import { useNavigate } from 'react-router-dom';
import { Search, Plus, BookOpen, Bell, Settings, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    const navigate = useNavigate();

    return (
        <header className="bg-white border-b border-gray-200 px-4 py-2">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <h1
                        onClick={() => navigate('/')}
                        className="text-xl font-semibold text-red-600 cursor-pointer"
                    >
                        Glossarium
                    </h1>
                    <div className="relative">
                        <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search"
                            className="pl-9 pr-4 py-1.5 rounded-md border border-gray-200 w-64 text-sm focus:outline-none focus:border-gray-300"
                        />
                    </div>
                    <nav className="flex items-center gap-4">
                        <Link
                            to="/"
                            className="text-gray-700 hover:text-red-600 transition-colors"
                        >
                            Home
                        </Link>
                        <Link
                            to="/english-test"
                            className="text-gray-700 hover:text-red-600 transition-colors"
                        >
                            English Test
                        </Link>
                    </nav>
                </div>

                <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 rounded-md">
                        <Plus className="w-4 h-4" />
                        <span>New Post</span>
                    </button>

                    <button className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 rounded-md">
                        <BookOpen className="w-4 h-4" />
                        <span>Flashcards</span>
                    </button>

                    <button className="p-1.5 text-gray-600 hover:bg-gray-50 rounded-md">
                        <Bell className="w-5 h-5" />
                    </button>

                    <button className="p-1.5 text-gray-600 hover:bg-gray-50 rounded-md">
                        <Settings className="w-5 h-5" />
                    </button>

                    <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                        <User className="w-5 h-5 text-gray-600" />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
