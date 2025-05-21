import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  FileText,
  MessageCircle,
  Settings,
  User,
  Users,
  HelpCircle,
  CreditCard,
  BarChart,
  Bookmark,
  Menu,
  X,
} from "lucide-react";

export default function Sidebar() {
  const { pathname } = useLocation();
  const [articlesExpanded, setArticlesExpanded] = useState(true);
  const [collapsed, setCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path) => pathname === path;

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const SidebarContent = () => (
    <>
      <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center">
        {!collapsed && (
          <Link to="/" className="font-bold text-xl text-foreground">
            abun
          </Link>
        )}
        <div
          className={`${
            collapsed ? "mx-auto" : "ml-auto"
          } bg-gray-100 dark:bg-gray-800 rounded-md p-1 cursor-pointer`}
          onClick={toggleSidebar}
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4 text-gray-400 dark:text-gray-500" />
          ) : (
            <ChevronLeft className="h-4 w-4 text-gray-400 dark:text-gray-500" />
          )}
        </div>
      </div>

      {!collapsed && (
        <div className="p-3 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-md p-2">
            <div className="h-5 w-5 rounded-full bg-purple-500"></div>
            <span className="text-sm">amazon.com</span>
            <ChevronRight className="h-4 w-4 ml-auto" />
          </div>
        </div>
      )}

      <div className="flex-1 overflow-auto">
        <div className={`${collapsed ? "p-1" : "p-2"}`}>
          <div
            className={`flex items-center gap-2 ${
              collapsed ? "justify-center p-1" : "p-2"
            } text-gray-600 dark:text-gray-300 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md`}
            onClick={() => !collapsed && setArticlesExpanded(!articlesExpanded)}
          >
            <LayoutDashboard className="h-4 w-4" />
            {!collapsed && (
              <>
                <span className="text-sm">Articles</span>
                {articlesExpanded ? (
                  <ChevronRight className="h-4 w-4 ml-auto transform rotate-90" />
                ) : (
                  <ChevronRight className="h-4 w-4 ml-auto" />
                )}
              </>
            )}
          </div>

          {!collapsed && articlesExpanded && (
            <div className="pl-8 text-sm space-y-2">
              <Link
                to="/"
                className={`block py-1 ${
                  isActive("/")
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              >
                Dashboard
              </Link>
              <Link
                to="/create-article"
                className={`block py-1 ${
                  isActive("/create-article")
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              >
                Create Article
              </Link>
              <Link
                to="/requested-features"
                className={`block py-1 ${
                  isActive("/requested-features")
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              >
                Requested Features
              </Link>
              <Link
                to="/keyword-research"
                className={`block py-1 ${
                  isActive("/keyword-research")
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              >
                Keyword Research
              </Link>
              <Link
                to="/social-competitor-keyword"
                className={`block py-1 ${
                  isActive("/social-competitor-keyword")
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              >
                Social Competitor Keyword
              </Link>
              <Link
                to="/keyword-from-excel"
                className={`block py-1 ${
                  isActive("/keyword-from-excel")
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              >
                Import Keyword from Excel
              </Link>
              <Link
                to="/manual-keyword-article"
                className={`block py-1 ${
                  isActive("/manual-keyword-article")
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              >
                Manual Keyword to Article
              </Link>
              <Link
                to="/longlist-keyword-article"
                className={`block py-1 ${
                  isActive("/longlist-keyword-article")
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              >
                Longlist Keyword to Article
              </Link>
              <Link
                to="/article-settings"
                className={`block py-1 ${
                  isActive("/article-settings")
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              >
                Article Settings
              </Link>
            </div>
          )}

          <Link
            to="/auto-blog"
            className={`flex items-center ${
              collapsed ? "justify-center p-1 my-4" : "gap-2 p-2"
            } ${
              isActive("/auto-blog")
                ? "text-blue-600 dark:text-blue-400"
                : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            } hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md`}
          >
            <FileText className="h-4 w-4" />
            {!collapsed && <span className="text-sm">Auto-Blog</span>}
          </Link>

          <Link
            to="/internal-links"
            className={`flex items-center ${
              collapsed ? "justify-center p-1 my-4" : "gap-2 p-2"
            } ${
              isActive("/internal-links")
                ? "text-blue-600 dark:text-blue-400"
                : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            } hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md`}
          >
            <MessageCircle className="h-4 w-4" />
            {!collapsed && <span className="text-sm">Internal Links</span>}
          </Link>

          <Link
            to="/free-backlinks"
            className={`flex items-center ${
              collapsed ? "justify-center p-1 my-4" : "gap-2 p-2"
            } ${
              isActive("/free-backlinks")
                ? "text-blue-600 dark:text-blue-400"
                : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            } hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md`}
          >
            <Bookmark className="h-4 w-4" />
            {!collapsed && <span className="text-sm">Free Backlinks</span>}
          </Link>

          <Link
            to="/integration"
            className={`flex items-center ${
              collapsed ? "justify-center p-1 my-4" : "gap-2 p-2"
            } ${
              isActive("/integration")
                ? "text-blue-600 dark:text-blue-400"
                : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            } hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md`}
          >
            <Users className="h-4 w-4" />
            {!collapsed && <span className="text-sm">Integrations</span>}
          </Link>

          <Link
            to="/subscription"
            className={`flex items-center ${
              collapsed ? "justify-center p-1 my-4" : "gap-2 p-2"
            } ${
              isActive("/subscription")
                ? "text-blue-600 dark:text-blue-400"
                : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            } hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md`}
          >
            <CreditCard className="h-4 w-4" />
            {!collapsed && <span className="text-sm">Subscription</span>}
          </Link>

          <Link
            to="/affiliate-program"
            className={`flex items-center ${
              collapsed ? "justify-center p-1 my-4" : "gap-2 p-2"
            } ${
              isActive("/affiliate-program")
                ? "text-blue-600 dark:text-blue-400"
                : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            } hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md`}
          >
            <BarChart className="h-4 w-4" />
            {!collapsed && <span className="text-sm">Affiliate Program</span>}
          </Link>

          <Link
            to="/team-center"
            className={`flex items-center ${
              collapsed ? "justify-center p-1 my-4" : "gap-2 p-2"
            } ${
              isActive("/team-center")
                ? "text-blue-600 dark:text-blue-400"
                : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            } hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md`}
          >
            <Users className="h-4 w-4" />
            {!collapsed && <span className="text-sm">Team Center</span>}
          </Link>

          <Link
            to="/updates"
            className={`flex items-center ${
              collapsed ? "justify-center p-1 my-4" : "gap-2 p-2"
            } ${
              isActive("/updates")
                ? "text-blue-600 dark:text-blue-400"
                : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            } hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md`}
          >
            <Settings className="h-4 w-4" />
            {!collapsed && <span className="text-sm">Updates</span>}
          </Link>

          <Link
            to="/live-chat"
            className={`flex items-center ${
              collapsed ? "justify-center p-1 my-4" : "gap-2 p-2"
            } ${
              isActive("/live-chat")
                ? "text-blue-600 dark:text-blue-400"
                : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            } hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md`}
          >
            <HelpCircle className="h-4 w-4" />
            {!collapsed && <span className="text-sm">Live Chat Support</span>}
          </Link>

          <Link
            to="/profile"
            className={`flex items-center ${
              collapsed ? "justify-center p-1 my-4" : "gap-2 p-2"
            } ${
              isActive("/profile")
                ? "text-blue-600 dark:text-blue-400"
                : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            } hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md`}
          >
            <User className="h-4 w-4" />
            {!collapsed && <span className="text-sm">Profile</span>}
          </Link>
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="lg:hidden fixed top-4 right-4 z-50 p-2 rounded-md bg-white dark:bg-gray-800 shadow-md"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? (
          <X className="h-6 w-6 text-gray-600 dark:text-gray-300" />
        ) : (
          <Menu className="h-6 w-6 text-gray-600 dark:text-gray-300" />
        )}
      </button>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 dark:bg-black/70 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed lg:static inset-y-0 left-0 z-40 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        } ${
          collapsed ? "w-16" : "w-64"
        } border-r border-gray-200 dark:border-gray-700 flex flex-col h-full bg-white dark:bg-black`}
      >
        <SidebarContent />
      </div>
    </>
  );
}
