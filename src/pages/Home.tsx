import { Search, Bell, Settings, BookOpen, Filter, ArrowUpDown } from 'lucide-react';
import './Home.css';

const Navigation = () => (
    <nav className="navigation">
        <div className="nav-container">
            <div className="nav-links">
                <button className="nav-link active">For you</button>
                <button className="nav-link">Explore</button>
                <button className="nav-link">Following</button>
                <button className="nav-link">Curated</button>
            </div>
            <div className="nav-actions">
                <button className="btn">
                    <BookOpen className="w-4 h-4" />
                    <span>Free Reading</span>
                </button>
                <button className="btn">
                    <Filter className="w-4 h-4" />
                    <span>Filter</span>
                </button>
                <button className="btn">
                    <ArrowUpDown className="w-4 h-4" />
                    <span>Sort</span>
                </button>
            </div>
        </div>
    </nav>
);

const PostCard = ({ level, title, author, readTime, description, wordCount }) => (
    <article className="post-card">
        <div className="post-content">
            <div className="post-header">
                <img src="avatar.jpg" className="avatar" alt={author} />
                <div>
                    <div className="font-medium">{author}</div>
                    <div className="post-meta">{readTime} · {wordCount} min read</div>
                </div>
            </div>
            <h2 className="post-title">{title}</h2>
            <p className="post-description">{description}</p>
            <div className="post-footer">
                <div className="post-actions">
                    <button>12</button>
                    <button>5</button>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">120/150</span>
                    <div className={`level-badge level-${level.toLowerCase()}`}>
                        {level}
                    </div>
                </div>
            </div>
        </div>
        <img src="cloud-image.jpg" className="post-image" alt="Post thumbnail" />
    </article>
);

const Sidebar = () => (
    <aside className="sidebar">
        <section className="sidebar-section">
            <h3 className="sidebar-title">Active discussions</h3>
            <div className="discussion-item">
                <p className="discussion-text">
                    "if you don't spend enough time getting to know yourself, you'll end up absorbing ever.."
                </p>
                <div className="discussion-meta">
                    <span>20 comments</span>
                    <span>90 new words</span>
                </div>
            </div>
            {/* Add more discussion items */}
        </section>

        <section className="sidebar-section">
            <h3 className="sidebar-title">Recommended topics</h3>
            <div className="topic-tags">
                <span className="topic-tag">Data Science</span>
                <span className="topic-tag">Writing</span>
                <span className="topic-tag">Productivity</span>
                <span className="topic-tag">Machine Learning</span>
                <span className="topic-tag">Cryptocurrency</span>
            </div>
        </section>
    </aside>
);

const Home = () => (
    <div className="min-h-screen bg-white">
        <Navigation />
        <div className="main-container">
            <main className="post-list">
                <PostCard
                    level="A1"
                    title="Designing for Joy: How Play Sparks Creativity and Gets Better Results"
                    author="Nguyen Tien Minh"
                    readTime="3 hours ago"
                    wordCount="11"
                    description="Practical ways to make design more fun for yourself, your team, and your clients. Figma ipsum component variant main layer. Figma ipsum component v..."
                />
                <PostCard
                    level="B1"
                    title="Designing for Joy: How Play Sparks Creativity and Gets Better Results"
                    author="Nguyen Tien Minh"
                    readTime="3 hours ago"
                    wordCount="11"
                    description="Practical ways to make design more fun for yourself, your team, and your clients. Figma ipsum component variant main layer. Figma ipsum component v..."
                />
                <PostCard
                    level="C1"
                    title="Designing for Joy: How Play Sparks Creativity and Gets Better Results"
                    author="Nguyen Tien Minh"
                    readTime="3 hours ago"
                    wordCount="11"
                    description="Practical ways to make design more fun for yourself, your team, and your clients. Figma ipsum component variant main layer. Figma ipsum component v..."
                />
            </main>
            <Sidebar />
        </div>
    </div>
);

export default Home;